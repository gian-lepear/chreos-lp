// Captura parâmetros de atribuição (click IDs de mídia paga + UTMs) da URL na
// chegada e persiste por 90 dias. Num modelo pay-per-lead cujo funil termina no
// WhatsApp, sem isto o cliente fechado nunca volta a ser ligado ao clique pago
// de origem — então carimbamos o lead no Web3Forms e na mensagem do WhatsApp.

const STORAGE_KEY = "chreos_attr";
const TTL_MS = 90 * 24 * 60 * 60 * 1000; // 90 dias

// Click IDs do Google/Meta + UTMs padrão.
const PARAM_KEYS = [
  "gclid",
  "gbraid",
  "wbraid",
  "fbclid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

type Attribution = Record<string, string>;

interface StoredAttribution {
  ts: number;
  params: Attribution;
}

function read(): StoredAttribution | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredAttribution;
    if (!parsed?.ts || Date.now() - parsed.ts > TTL_MS) return null;
    return parsed;
  } catch {
    return null;
  }
}

// Lê a URL atual; grava só quando a visita realmente traz parâmetros (first-touch
// preservado: visitas orgânicas posteriores não apagam a origem paga).
export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  try {
    const search = new URLSearchParams(window.location.search);
    const params: Attribution = {};
    for (const key of PARAM_KEYS) {
      const value = search.get(key);
      if (value) params[key] = value;
    }
    if (Object.keys(params).length === 0) return;
    const payload: StoredAttribution = { ts: Date.now(), params };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // localStorage indisponível (aba privada, cota) — atribuição é best-effort.
  }
}

// Mapa de parâmetros para anexar ao payload do Web3Forms (registro interno).
export function getAttribution(): Attribution {
  return read()?.params ?? {};
}

// Linha curta e legível para anexar à mensagem do WhatsApp (só quando há origem).
export function getAttributionSummary(): string | null {
  const params = getAttribution();
  if (params.gclid) return `gclid:${params.gclid}`;
  if (params.gbraid) return `gbraid:${params.gbraid}`;
  if (params.wbraid) return `wbraid:${params.wbraid}`;
  if (params.fbclid) return `fbclid:${params.fbclid}`;
  const utm = [params.utm_source, params.utm_medium, params.utm_campaign]
    .filter(Boolean)
    .join(" / ");
  return utm || null;
}
