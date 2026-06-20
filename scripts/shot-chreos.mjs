// Screenshot the χρέος etymology block (ORIGEM section) to compare fonts.
// Usage: node scripts/shot-chreos.mjs <output.png>
import puppeteer from "puppeteer-core";

const CHROME = "/home/gian/.cache/ms-playwright/chromium-1223/chrome-linux64/chrome";
const out = process.argv[2] || "shot.png";

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1100, height: 900, deviceScaleFactor: 2 });
await page.goto("http://localhost:5173/", { waitUntil: "networkidle0" });

const handle = await page.evaluateHandle(() => {
  const span = [...document.querySelectorAll("span")].find((s) => s.textContent.trim() === "χρέος");
  // climb to the flex block that holds χρέος + the /chréos/ pronunciation
  return span ? span.parentElement : null;
});
const el = handle.asElement();
if (!el) {
  console.error("χρέος element not found");
  await browser.close();
  process.exit(1);
}
await page.evaluate((e) => e.scrollIntoView({ block: "center" }), el);
await new Promise((r) => setTimeout(r, 1000)); // let webfonts settle
await el.screenshot({ path: out });
await browser.close();
console.log("saved", out);
