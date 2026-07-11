import { useState, useEffect, useRef } from "react";
import { m, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TICKER_ITEMS, STATS } from "@/data/landing";
import { initScrollDepth, initWebVitals } from "@/lib/analytics";
import HomeSections from "./home-sections";

function LiveTicker() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);

  // Pause rotation while offscreen so the interval isn't burning re-renders
  // (and battery) after the visitor scrolls past the hero.
  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (paused || !inView) return;
    // Don't auto-rotate for users who prefer reduced motion.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const tick = () => {
      if (!document.hidden) setIndex((i) => (i + 1) % TICKER_ITEMS.length);
    };
    const interval = setInterval(tick, 5500);
    return () => clearInterval(interval);
  }, [paused, inView]);

  const item = TICKER_ITEMS[index];

  return (
    <div
      ref={rootRef}
      className="border-gold bg-navy-deep border-l-4 p-5 font-mono text-xs"
      style={{ borderRadius: 0 }}
      role="group"
      aria-label="Exemplo ilustrativo de edital capturado (dados fictícios)"
      tabIndex={0}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="mb-3 flex flex-shrink-0 items-center gap-3">
        <span className="inline-flex items-center gap-1.5">
          <span className="bg-gold h-1.5 w-1.5 animate-pulse rounded-full" />
          <span className="text-gold text-[10px] font-bold tracking-widest uppercase">
            Edital Capturado
          </span>
        </span>
        <span className="text-[10px] text-cream/55">DIÁRIO REGISTRAL — DADOS ILUSTRATIVOS</span>
      </div>
      <div className="relative h-[128px] overflow-hidden md:h-[80px]" aria-hidden="true">
        <AnimatePresence mode="wait">
          <m.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 gap-x-4 gap-y-3 md:grid-cols-3"
            style={{ position: "absolute", inset: 0 }}
          >
            <div className="min-w-0">
              <div className="mb-0.5 text-[9px] tracking-widest text-cream/55 uppercase">
                Devedor
              </div>
              <div className="truncate text-cream/90">{item.devedor}</div>
            </div>
            <div className="min-w-0">
              <div className="mb-0.5 text-[9px] tracking-widest text-cream/55 uppercase">Valor</div>
              <div className="text-gold-light truncate">{item.valor}</div>
            </div>
            <div className="min-w-0">
              <div className="mb-0.5 text-[9px] tracking-widest text-cream/55 uppercase">
                Credor
              </div>
              <div className="truncate text-cream/90">{item.credor}</div>
            </div>
            <div className="min-w-0">
              <div className="mb-0.5 text-[9px] tracking-widest text-cream/55 uppercase">
                Matrícula
              </div>
              <div className="truncate text-cream/70">{item.matricula}</div>
            </div>
            <div className="min-w-0">
              <div className="mb-0.5 text-[9px] tracking-widest text-cream/55 uppercase">
                Cartório
              </div>
              <div className="truncate text-cream/70">{item.cartorio}</div>
            </div>
            <div className="min-w-0">
              <div className="mb-0.5 text-[9px] tracking-widest text-cream/55 uppercase">UF</div>
              <div className="truncate text-cream/70">{item.estado}</div>
            </div>
          </m.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function Home() {
  // Funil + performance de campo (form_start vive no CTAForm).
  useEffect(() => {
    initWebVitals();
    return initScrollDepth();
  }, []);

  return (
    <div
      className="bg-cream text-navy selection:bg-navy selection:text-cream min-h-screen"
      style={{ fontFamily: "'Inter Variable', sans-serif" }}
    >
      <a
        href="#main"
        className="bg-gold text-navy sr-only z-[100] px-4 py-2 text-sm font-bold focus:not-sr-only focus:absolute focus:top-4 focus:left-4"
      >
        Ir para o conteúdo principal
      </a>

      {/* NAV */}
      <nav
        className="fixed top-0 right-0 left-0 z-50"
        style={{
          background: "rgba(15,28,44,0.92)",
          backdropFilter: "blur(16px)",
          willChange: "transform",
        }}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:h-24 md:px-10">
          <button
            type="button"
            aria-label="Chreos — voltar ao topo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ fontFamily: "'Newsreader Variable', serif" }}
            className="text-cream cursor-pointer text-4xl font-semibold tracking-tight md:text-5xl"
          >
            Chreos
          </button>
          <div className="flex items-center gap-8">
            <a
              href="#mecanismo"
              className="text-cream/60 hover:text-cream hidden py-3 text-xs tracking-[0.15em] uppercase transition-colors md:block"
            >
              Como Funciona
            </a>
            <a
              href="#inteligencia"
              className="text-cream/60 hover:text-cream hidden py-3 text-xs tracking-[0.15em] uppercase transition-colors md:block"
            >
              Seus Leads
            </a>
            <a
              href="#filtros"
              className="text-cream/60 hover:text-cream hidden py-3 text-xs tracking-[0.15em] uppercase transition-colors md:block"
            >
              Personalização
            </a>
            <a
              href="#acesso"
              className="text-navy px-5 py-2.5 text-xs font-bold tracking-[0.15em] uppercase transition-opacity hover:opacity-90"
              style={{
                background: "var(--gold-gradient)",
              }}
              data-testid="link-nav-acesso"
            >
              {/* Rótulo completo não cabe ao lado do logo no mobile */}
              <span className="md:hidden">Ver Leads</span>
              <span className="hidden md:inline">Ver Leads da Minha Região</span>
            </a>
          </div>
        </div>
      </nav>

      <main id="main">
        {/* HERO — full bleed dark navy */}
        <section className="bg-navy relative flex min-h-screen flex-col justify-end overflow-hidden">
          {/* Background grid texture */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, #fcf9f3 0px, #fcf9f3 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #fcf9f3 0px, #fcf9f3 1px, transparent 1px, transparent 60px)",
            }}
          />

          {/* Large background text */}
          <div className="pointer-events-none absolute top-1/2 right-0 left-0 -translate-y-1/2 overflow-hidden select-none">
            <div
              className="text-cream/[0.025] pl-4 font-serif text-[18vw] leading-none font-bold whitespace-nowrap"
              style={{ fontFamily: "'Newsreader Variable', serif" }}
            >
              CHREOS
            </div>
          </div>

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-36 pb-16 md:px-10">
            {/* Hero inteiro estático (sem fade de entrada): tudo aqui é conteúdo
                acima da dobra. Animar via JS deixava o HTML prerenderizado com
                opacity:0 até o framer-motion carregar (~140 kB), atrasando LCP
                e escondendo o CTA principal. Pinta no 1º paint. */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="bg-gold h-1.5 w-1.5 flex-shrink-0 rounded-full" />
                <span className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase">
                  Leads de imóveis em leilão e execução extrajudicial
                </span>
              </div>

              <h1
                className="text-cream mb-10 leading-[0.95] tracking-[-0.02em]"
                style={{
                  fontFamily: "'Newsreader Variable', serif",
                  fontSize: "clamp(3.2rem, 8vw, 7.5rem)",
                }}
              >
                Todo leilão de imóvel
                <br />
                começa com alguém
                <br />
                prestes a perder tudo.
                <br />
                Chegue <em className="text-gold-gradient italic">antes.</em>
              </h1>

              <div className="mb-10 grid max-w-3xl gap-6 md:grid-cols-2">
                <p className="text-cream/60 text-base leading-relaxed">
                  Identificamos quem está prestes a perder o imóvel em leilão e entregamos ao seu
                  escritório os dados do caso — nome, contato direto e matrícula — antes do edital
                  e antes de qualquer concorrente.
                </p>
                <LiveTicker />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#acesso"
                  className="text-navy inline-flex items-center gap-2 px-7 py-4 text-xs font-bold tracking-[0.2em] uppercase transition-opacity hover:opacity-90"
                  style={{
                    background: "var(--gold-gradient)",
                  }}
                  data-testid="button-hero-cta"
                >
                  Ver Leads da Minha Região <ArrowRight size={14} aria-hidden />
                </a>
                <a
                  href="#mecanismo"
                  className="bg-cream/[0.06] text-cream/70 hover:bg-cream/[0.12] hover:text-cream inline-flex items-center gap-2 px-7 py-4 text-xs font-bold tracking-[0.2em] uppercase transition-colors"
                  data-testid="button-hero-secondary"
                >
                  Como Funciona
                </a>
              </div>

              <p className="text-cream/55 mt-4 text-xs tracking-[0.05em]">
                Lead exclusivo · sem mensalidade, sem fidelidade · demonstração sem compromisso
              </p>
            </div>
          </div>

          {/* Stats strip */}
          <div className="bg-navy-deep relative z-10">
            <div className="h-[2px]" style={{ background: "var(--gold-gradient-h)" }} />
            <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-6 md:grid-cols-4 md:gap-10 md:px-10">
              {STATS.map((s, i) => (
                <div key={i}>
                  <div
                    className="text-gold-light font-semibold"
                    style={{
                      fontFamily: "'Newsreader Variable', serif",
                      fontSize: "clamp(1.3rem, 2.2vw, 1.8rem)",
                    }}
                  >
                    {s.v}
                  </div>
                  <div className="text-cream/55 mt-1 text-[10px] tracking-[0.15em] uppercase">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Agitation band — cost of inaction, between hero and the mechanism */}
        <section className="bg-navy-deep px-6 py-16 md:px-10">
          <div className="mx-auto max-w-4xl">
            <p
              className="text-cream/80 text-lg leading-relaxed md:text-2xl"
              style={{ fontFamily: "'Newsreader Variable', serif" }}
            >
              Quando o imóvel vai a leilão, já é tarde — e a oportunidade foi de outro escritório. A
              Chreos encontra essa pessoa{" "}
              <em className="text-gold-light">na intimação, antes de ela pesquisar no Google</em> — e
              entrega a informação só para o seu escritório.
            </p>
          </div>
        </section>

        <HomeSections />
      </main>

      {/* Mobile sticky CTA — persistent path to convert on small screens */}
      <a
        href="#acesso"
        className="text-navy fixed right-0 bottom-0 left-0 z-50 flex items-center justify-center gap-2 py-4 text-xs font-bold tracking-[0.2em] uppercase md:hidden"
        style={{ background: "var(--gold-gradient)" }}
        data-testid="sticky-cta-mobile"
      >
        Ver Leads da Minha Região <ArrowRight size={14} aria-hidden />
      </a>
    </div>
  );
}
