import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TICKER_ITEMS, STATS } from "@/data/landing";
import HomeSections from "./home-sections";

function LiveTicker() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % TICKER_ITEMS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const item = TICKER_ITEMS[index];

  return (
    <div
      className="border-l-4 border-gold bg-navy-deep p-5 font-mono text-xs"
      style={{ borderRadius: 0 }}
    >
      <div className="mb-3 flex flex-shrink-0 items-center gap-3">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
          <span className="text-[10px] font-bold tracking-widest text-gold uppercase">
            Edital Capturado
          </span>
        </span>
        <span className="text-[10px] text-white/45">DIÁRIO REGISTRAL — DADOS ILUSTRATIVOS</span>
      </div>
      <div className="relative h-[128px] overflow-hidden md:h-[80px]">
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
              <div className="mb-0.5 text-[9px] tracking-widest text-white/30 uppercase">
                Devedor
              </div>
              <div className="truncate text-white/90">{item.devedor}</div>
            </div>
            <div className="min-w-0">
              <div className="mb-0.5 text-[9px] tracking-widest text-white/30 uppercase">Valor</div>
              <div className="truncate text-gold-light">{item.valor}</div>
            </div>
            <div className="min-w-0">
              <div className="mb-0.5 text-[9px] tracking-widest text-white/30 uppercase">
                Credor
              </div>
              <div className="truncate text-white/90">{item.credor}</div>
            </div>
            <div className="min-w-0">
              <div className="mb-0.5 text-[9px] tracking-widest text-white/30 uppercase">
                Matrícula
              </div>
              <div className="truncate text-white/70">{item.matricula}</div>
            </div>
            <div className="min-w-0">
              <div className="mb-0.5 text-[9px] tracking-widest text-white/30 uppercase">
                Cartório
              </div>
              <div className="truncate text-white/70">{item.cartorio}</div>
            </div>
            <div className="min-w-0">
              <div className="mb-0.5 text-[9px] tracking-widest text-white/30 uppercase">UF</div>
              <div className="truncate text-white/70">{item.estado}</div>
            </div>
          </m.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cream text-navy selection:bg-navy selection:text-cream"
      style={{ fontFamily: "'Inter Variable', sans-serif" }}
    >
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
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ fontFamily: "'Newsreader Variable', serif" }}
            className="cursor-pointer text-4xl font-semibold tracking-tight text-cream md:text-5xl"
          >
            Chreos
          </button>
          <div className="flex items-center gap-8">
            <a
              href="#mecanismo"
              className="hidden text-xs tracking-[0.15em] text-cream/60 uppercase transition-colors hover:text-cream md:block"
            >
              Como Funciona
            </a>
            <a
              href="#inteligencia"
              className="hidden text-xs tracking-[0.15em] text-cream/60 uppercase transition-colors hover:text-cream md:block"
            >
              Seus Leads
            </a>
            <a
              href="#filtros"
              className="hidden text-xs tracking-[0.15em] text-cream/60 uppercase transition-colors hover:text-cream md:block"
            >
              Personalização
            </a>
            <a
              href="#acesso"
              className="px-5 py-2.5 text-xs font-bold tracking-[0.15em] text-navy uppercase transition-opacity hover:opacity-90"
              style={{
                background: "var(--gold-gradient)",
              }}
              data-testid="link-nav-acesso"
            >
              Solicitar Acesso
            </a>
          </div>
        </div>
      </nav>

      {/* HERO — full bleed dark navy */}
      <section className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-navy">
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
            className="pl-4 font-serif text-[18vw] leading-none font-bold whitespace-nowrap text-cream/[0.025]"
            style={{ fontFamily: "'Newsreader Variable', serif" }}
          >
            CHREOS
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-36 pb-16 md:px-10">
          <m.div initial="hidden" animate="visible" variants={stagger}>
            {/* <m.div variants={fadeUp} className="flex items-center gap-4 mb-10">
              <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
              <span className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold">Sistema Ativo — Monitoramento Contínuo</span>
            </m.div> */}

            <m.h1
              variants={fadeUp}
              className="mb-10 leading-[0.95] tracking-[-0.02em] text-cream"
              style={{
                fontFamily: "'Newsreader Variable', serif",
                fontSize: "clamp(3.2rem, 8vw, 7.5rem)",
              }}
            >
              Pare de esperar
              <br />
              por clientes.
              <br />
              Alcance-os no
              <br />
              momento <em style={{ fontStyle: "italic", color: "#e6c364" }}>exato.</em>
            </m.h1>

            <m.div variants={fadeUp} className="mb-10 grid max-w-3xl gap-6 md:grid-cols-2">
              <p className="text-base leading-relaxed text-cream/60">
                Identificamos pessoas que estão prestes a perder um imóvel e
                entregamos ao seu escritório o nome, telefone e WhatsApp delas — antes que qualquer
                concorrente saiba que esse cliente existe.
              </p>
              <LiveTicker />
            </m.div>

            <m.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#acesso"
                className="inline-flex items-center gap-2 px-7 py-4 text-xs font-bold tracking-[0.2em] text-navy uppercase transition-opacity hover:opacity-90"
                style={{
                  background: "var(--gold-gradient)",
                }}
                data-testid="button-hero-cta"
              >
                Solicitar Demonstração <ArrowRight size={14} />
              </a>
              <a
                href="#mecanismo"
                className="inline-flex items-center gap-2 border border-cream/10 px-7 py-4 text-xs font-bold tracking-[0.2em] text-cream/70 uppercase transition-colors hover:border-cream/30"
                data-testid="button-hero-secondary"
              >
                Ver Metodologia
              </a>
            </m.div>
          </m.div>
        </div>

        {/* Stats strip */}
        <div className="relative z-10 border-t border-cream/10 bg-navy-deep">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-6 md:grid-cols-4 md:gap-0 md:divide-x md:divide-cream/10 md:px-10">
            {STATS.map((s, i) => (
              <div key={i} className="first:pl-0 md:px-8">
                <div
                  className="font-semibold text-gold-light"
                  style={{
                    fontFamily: "'Newsreader Variable', serif",
                    fontSize: "clamp(1.3rem, 2.2vw, 1.8rem)",
                  }}
                >
                  {s.v}
                </div>
                <div className="mt-1 text-[10px] tracking-[0.15em] text-cream/40 uppercase">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeSections />
    </div>
  );
}
