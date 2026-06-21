// SSR entry usado só no build (scripts/prerender.mjs) para gerar o HTML estático
// da home. Roda em Node (renderToString) — sem browser. O cliente usa createRoot
// e substitui esse conteúdo (não há hidratação), então não há risco de mismatch:
// o HTML estático existe apenas para crawlers (Google 1ª onda, bots de IA sem JS).
import { renderToString } from "react-dom/server";
import App from "./App";

export function render(url: string): string {
  return renderToString(<App ssrPath={url} />);
}
