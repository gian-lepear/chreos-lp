// Eventos de funil enviados ao gtag já existente (Google Ads hoje, GA4 quando
// instalado). Sem PII — disparam mesmo sob Consent Mode default-deny (são
// eventos/pings sem cookies, não armazenamento). Pré-requisito de qualquer CRO:
// medir onde o usuário começa, rola e abandona antes do handoff ao WhatsApp.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function emit(name: string, params: Record<string, unknown> = {}): void {
  window.gtag?.("event", name, params);
}

let formStarted = false;
let formSubmitted = false;

// Dispara uma única vez quando o usuário começa a interagir com o formulário, e
// arma o disparo de form_abandon caso ele saia da página sem enviar.
export function trackFormStart(): void {
  if (formStarted) return;
  formStarted = true;
  emit("form_start");
  if (typeof window !== "undefined") {
    window.addEventListener(
      "pagehide",
      () => {
        if (formStarted && !formSubmitted) emit("form_abandon");
      },
      { once: true },
    );
  }
}

// Marca o envio para que o pagehide não conte como abandono.
export function markFormSubmitted(): void {
  formSubmitted = true;
}

// Marca 25/50/75/100% de profundidade de scroll, cada um uma vez. Retorna um
// cleanup para o React desligar o listener no unmount.
export function initScrollDepth(): () => void {
  if (typeof window === "undefined") return () => {};
  const marks = [25, 50, 75, 100];
  const fired = new Set<number>();

  function onScroll() {
    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - doc.clientHeight;
    if (scrollable <= 0) return;
    const pct = (doc.scrollTop / scrollable) * 100;
    for (const m of marks) {
      if (pct >= m && !fired.has(m)) {
        fired.add(m);
        emit("scroll_depth", { percent: m });
      }
    }
    if (fired.size === marks.length) window.removeEventListener("scroll", onScroll);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}
