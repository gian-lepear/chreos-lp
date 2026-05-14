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
    const beasties = new Beasties({ path: outDir, publicPath: basePath, pruneSource: false });
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
</urlset>
`;
        await fs.writeFile(path.join(outDir, "sitemap.xml"), sitemap);
      }
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: basePath,
    plugins: [
      react(),
      tailwindcss(),
      seoPlugin(env),
      criticalCssPlugin,
    ],
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
