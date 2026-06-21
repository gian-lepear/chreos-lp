// Sanidade pós-build (roda no CI). Falha o deploy se:
//  - o JSON-LD do index.html não for JSON válido;
//  - num build indexável (ALLOW_INDEXING=true), o robots.txt bloquear a indexação.
import { readFileSync } from "node:fs";

const dir = "dist/public";
let ok = true;

function fail(msg) {
  console.error(`✗ ${msg}`);
  ok = false;
}

const html = readFileSync(`${dir}/index.html`, "utf8");

const ld = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
if (!ld) {
  fail("JSON-LD ausente no index.html");
} else {
  try {
    JSON.parse(ld[1]);
    console.log("✓ JSON-LD válido");
  } catch (e) {
    fail(`JSON-LD inválido: ${e.message}`);
  }
}

if (process.env.ALLOW_INDEXING === "true") {
  const robots = readFileSync(`${dir}/robots.txt`, "utf8");
  if (/^\s*Disallow:\s*\/\s*$/m.test(robots)) {
    fail("ALLOW_INDEXING=true mas robots.txt contém 'Disallow: /' (site não indexável)");
  } else {
    console.log("✓ robots.txt indexável");
  }
}

if (!ok) process.exit(1);
console.log("✓ build verificado");
