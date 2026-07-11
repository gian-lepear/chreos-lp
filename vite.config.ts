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

    // Preload the two above-the-fold fonts (hero Newsreader serif = the LCP
    // element, and Inter for body text) so they start downloading immediately
    // instead of waiting for CSS parse → font discovery. Filenames are
    // content-hashed, so glob the built assets at this point.
    const assetsDir = path.join(outDir, "assets");
    const assetFiles = await fs.readdir(assetsDir);
    const criticalFonts = assetFiles.filter((f) =>
      // Italic incluso: o H1 (elemento de LCP) termina em <em> — sem preload o
      // itálico chega depois e o hero repinta.
      /^(newsreader-latin-subset|newsreader-italic-subset|inter-latin-subset)-.*\.woff2$/.test(f),
    );
    if (criticalFonts.length === 0) {
      console.warn(
        "critical-css: nenhuma fonte crítica encontrada em dist/public/assets — " +
          "preload de fontes não será emitido (regex desatualizado ou nomes de arquivo mudaram?)",
      );
    }
    const preloadTags = criticalFonts
      .map(
        (f) =>
          `<link rel="preload" href="${basePath}assets/${f}" as="font" type="font/woff2" crossorigin>`,
      )
      .join("\n    ");

    const finalHtml = preloadTags
      ? processed.replace("</head>", `    ${preloadTags}\n  </head>`)
      : processed;
    await fs.writeFile(indexPath, finalHtml);
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
        ? `User-agent: *\nAllow: /\n\n` +
          // Crawlers de IA (busca/respostas) liberados explicitamente p/ visibilidade.
          `User-agent: GPTBot\nAllow: /\n\n` +
          `User-agent: OAI-SearchBot\nAllow: /\n\n` +
          `User-agent: ClaudeBot\nAllow: /\n\n` +
          `User-agent: Claude-SearchBot\nAllow: /\n\n` +
          `User-agent: PerplexityBot\nAllow: /\n\n` +
          `${siteUrl ? `Sitemap: ${siteUrl}/sitemap.xml\n` : ""}`
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

// Single source of truth for indexability: gate <meta name="robots"> on the same
// ALLOW_INDEXING env that drives robots.txt/sitemap, so staging can never ship a
// hardcoded "index, follow" (the static index.html default is overridden here at
// dev+build time).
function robotsMetaPlugin(allowIndexing: boolean) {
  const content = allowIndexing ? "index, follow" : "noindex, nofollow";
  return {
    name: "robots-meta",
    transformIndexHtml(html: string) {
      return html.replace(
        /<meta name="robots"[^>]*\/?>/,
        `<meta name="robots" content="${content}" />`,
      );
    },
  };
}

export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const allowIndexing = env.ALLOW_INDEXING === "true";

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
    // ALLOW_INDEXING=true sem SITE_URL geraria robots.txt sem Sitemap e nenhum
    // sitemap.xml — build "válido" mas invisível pro Google. Falha alto.
    if (allowIndexing && !env.SITE_URL) {
      throw new Error("SITE_URL is required when ALLOW_INDEXING=true (canonical/sitemap).");
    }
  }

  return {
    base: basePath,
    plugins: [
      react(),
      tailwindcss(),
      robotsMetaPlugin(allowIndexing),
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
      rollupOptions: {
        output: {
          // Forma de função: a forma de objeto só move o entry module do pacote,
          // e o react-dom inteiro (~130 kB) acabava no chunk index — invalidando
          // o cache do runtime React a cada deploy. framer-motion fica de fora
          // de propósito: o rollup separa sozinho o motor de animação carregado
          // assincronamente pelo LazyMotion (src/lib/motion-features.ts).
          manualChunks(id: string) {
            if (
              id.includes("node_modules/react-dom/") ||
              id.includes("node_modules/react/") ||
              id.includes("node_modules/scheduler/") ||
              id.includes("node_modules/wouter/")
            ) {
              return "react";
            }
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
