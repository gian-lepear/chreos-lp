import { useEffect, useState } from "react";
import { Link } from "wouter";
import { readConsent, reapplyStoredConsent, setConsent } from "@/lib/consent";

export function ConsentBanner() {
  // Show the banner only when the user has not chosen yet (read once on mount).
  const [visible, setVisible] = useState(() => readConsent() === null);

  useEffect(() => {
    // If a choice was already stored, re-apply it to gtag on load.
    reapplyStoredConsent();
  }, []);

  if (!visible) return null;

  function choose(choice: "granted" | "denied") {
    setConsent(choice);
    setVisible(false);
  }

  return (
    <div
      role="region"
      aria-label="Aviso de cookies"
      className="border-gold bg-navy fixed right-0 bottom-0 left-0 z-[90] border-t-2"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-5 md:flex-row md:items-center md:justify-between md:px-10">
        <p className="text-cream/70 max-w-2xl text-sm leading-relaxed">
          Usamos cookies do Google (Analytics e Ads) para medir o tráfego e as conversões e melhorar
          a experiência. Eles só são ativados com o seu consentimento. Saiba mais na nossa{" "}
          <Link
            href="/privacidade"
            className="text-gold-light hover:text-gold underline underline-offset-2 transition-colors"
          >
            Política de Privacidade
          </Link>
          .
        </p>
        <div className="flex flex-shrink-0 gap-3">
          <button
            type="button"
            onClick={() => choose("denied")}
            data-testid="button-consent-reject"
            className="bg-cream/10 text-cream/70 hover:bg-cream/15 hover:text-cream px-6 py-3 text-[10px] font-bold tracking-[0.2em] uppercase transition-colors"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={() => choose("granted")}
            data-testid="button-consent-accept"
            className="text-navy px-6 py-3 text-[10px] font-bold tracking-[0.2em] uppercase transition-opacity hover:opacity-90"
            style={{ background: "var(--gold-gradient)" }}
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
