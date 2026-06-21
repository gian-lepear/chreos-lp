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
      className="fixed right-0 bottom-0 left-0 z-[90] border-t-2 border-[#C9A84C] bg-[#0f1c2c]"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-5 md:flex-row md:items-center md:justify-between md:px-10">
        <p className="max-w-2xl text-sm leading-relaxed text-[#fcf9f3]/70">
          Usamos cookies do Google (Analytics e Ads) para medir o tráfego e as conversões e melhorar
          a experiência. Eles só são ativados com o seu consentimento. Saiba mais na nossa{" "}
          <Link
            href="/privacidade"
            className="text-[#e6c364] underline underline-offset-2 transition-colors hover:text-[#C9A84C]"
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
            className="border border-[#fcf9f3]/20 px-6 py-3 text-[10px] font-bold tracking-[0.2em] text-[#fcf9f3]/70 uppercase transition-colors hover:border-[#fcf9f3]/40 hover:text-[#fcf9f3]"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={() => choose("granted")}
            data-testid="button-consent-accept"
            className="px-6 py-3 text-[10px] font-bold tracking-[0.2em] text-[#0f1c2c] uppercase transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #C9A84C 0%, #e6c364 100%)" }}
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
