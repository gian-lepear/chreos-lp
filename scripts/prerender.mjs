// Prerender pós-build: renderiza a home para HTML estático e injeta no #root do
// index.html já buildado. Roda via Vite SSR (sem browser). O cliente continua
// com createRoot, que substitui o conteúdo — o HTML estático serve só para SEO/
// crawlers (Googlebot 1ª onda, bots de IA sem JS), sem hidratação/mismatch.
import { createServer } from "vite";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const indexPath = path.resolve("dist/public/index.html");

const vite = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "warn",
});

let appHtml = "";
try {
  const { render } = await vite.ssrLoadModule("/src/entry-server.tsx");
  appHtml = render("/");
} finally {
  await vite.close();
}

let html = await readFile(indexPath, "utf8");
const rootRe = /<div id="root">\s*<\/div>/;
if (!rootRe.test(html)) {
  throw new Error('prerender: <div id="root"></div> não encontrado em dist/public/index.html');
}
if (appHtml.trim().length === 0) {
  throw new Error("prerender: render() retornou HTML vazio");
}
html = html.replace(rootRe, `<div id="root">${appHtml}</div>`);
await writeFile(indexPath, html);
console.log(`✓ prerender: home injetada (${appHtml.length} chars)`);
