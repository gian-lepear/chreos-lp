import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import fs from "fs/promises";
import Beasties from "beasties";

const rawPort = process.env.PORT;
const port = rawPort ? Number(rawPort) : 5173;
const safePort = Number.isFinite(port) && port > 0 ? port : 5173;
const basePath = process.env.BASE_PATH ?? "/";

const criticalCssPlugin = {
  name: "critical-css",
  apply: "build" as const,
  enforce: "post" as const,
  async closeBundle() {
    const outDir = path.resolve(import.meta.dirname, "dist/public");
    const indexPath = path.join(outDir, "index.html");
    const html = await fs.readFile(indexPath, "utf-8");
    const beasties = new Beasties({
      path: outDir,
      publicPath: basePath,
      pruneSource: false,
      // Critical CSS is inlined above; rewrite the remaining blocking
      // <link rel="stylesheet"> into an async preload+swap so it stops
      // blocking First Contentful Paint.
      preload: "swap",
    });
    const processed = await beasties.process(html);
    await fs.writeFile(indexPath, processed);
  },
};

function seoPlugin(env: Record<string, string>) {
  const siteUrl = env.SITE_URL?.replace(/\/$/, "");
  const allowIndexing = env.ALLOW_INDEXING === "true";

  return {
    name: "seo-files",
    apply: "build" as const,
    async closeBundle() {
      const outDir = path.resolve(import.meta.dirname, "dist/public");

      const robots = allowIndexing
        ? `User-agent: *\nAllow: /\n${siteUrl ? `Sitemap: ${siteUrl}/sitemap.xml\n` : ""}`
        : `User-agent: *\nDisallow: /\n`;
      await fs.writeFile(path.join(outDir, "robots.txt"), robots);

      if (allowIndexing && siteUrl) {
        const today = new Date().toISOString().split("T")[0];
        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${siteUrl}/privacidade</loc>
    <lastmod>${today}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
</urlset>
`;
        await fs.writeFile(path.join(outDir, "sitemap.xml"), sitemap);
      }
    },
  };
}

export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd(), "");

  // Fail the production build loudly if the WhatsApp target is missing or
  // malformed — otherwise the contact form ships broken with no error.
  if (command === "build") {
    const whatsapp = env.VITE_CONTACT_FORM_WHATSAPP_NUMBER;
    if (!/^[0-9]{11,15}$/.test(whatsapp ?? "")) {
      throw new Error(
        `VITE_CONTACT_FORM_WHATSAPP_NUMBER must be a digits-only international number ` +
          `(11-15 digits, e.g. 5511976396660). Got: ${JSON.stringify(whatsapp)}`,
      );
    }
  }

  return {
    base: basePath,
    plugins: [react(), tailwindcss(), seoPlugin(env), criticalCssPlugin],
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "src"),
        "@assets": path.resolve(import.meta.dirname, "public", "attached_assets"),
      },
      dedupe: ["react", "react-dom"],
    },
    root: path.resolve(import.meta.dirname),
    build: {
      outDir: path.resolve(import.meta.dirname, "dist/public"),
      emptyOutDir: true,
      chunkSizeWarningLimit: 700,
      rollupOptions: {
        output: {
          manualChunks: {
            react: ["react", "react-dom", "wouter"],
            motion: ["framer-motion"],
          },
        },
      },
    },
    server: {
      port: safePort,
      strictPort: true,
      host: "0.0.0.0",
      allowedHosts: true,
      fs: {
        strict: true,
      },
    },
    preview: {
      port: safePort,
      host: "0.0.0.0",
      allowedHosts: true,
    },
  };
});
