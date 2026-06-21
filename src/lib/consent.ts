// Google Consent Mode v2 helpers (LGPD).
// index.html sets all consent signals to "denied" by default; these helpers
// persist the user's choice and push the corresponding gtag consent update.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export type ConsentChoice = "granted" | "denied";

const STORAGE_KEY = "chreos-consent";

// The four advertising/analytics signals we toggle together. The Chreos site
// uses Google Ads (conversão) e Google Analytics 4 (tráfego/audiência) na mesma
// gtag.js, então um único aceitar/recusar cobre os dois — sem granularidade por
// categoria.
const SIGNALS = ["ad_storage", "ad_user_data", "ad_personalization", "analytics_storage"] as const;

export function readConsent(): ConsentChoice | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    // localStorage can throw in private mode / when blocked — treat as no choice.
    return null;
  }
}

function pushConsentUpdate(choice: ConsentChoice): void {
  const update: Record<string, ConsentChoice> = {};
  for (const signal of SIGNALS) update[signal] = choice;
  window.gtag?.("consent", "update", update);
}

/** Persist the user's choice and apply it to gtag. */
export function setConsent(choice: ConsentChoice): void {
  try {
    localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    // Ignore storage failures — the in-page consent update still applies.
  }
  pushConsentUpdate(choice);
}

/** Re-apply a previously stored choice on page load (no re-persist). */
export function reapplyStoredConsent(): void {
  const stored = readConsent();
  if (stored) pushConsentUpdate(stored);
}
