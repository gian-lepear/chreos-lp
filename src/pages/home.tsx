import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
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
      className="border-l-4 border-[#C9A84C] bg-[#0a1520] p-5 font-mono text-xs"
      style={{ borderRadius: 0 }}
    >
      <div className="mb-3 flex flex-shrink-0 items-center gap-3">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#C9A84C]" />
          <span className="text-[10px] font-bold tracking-widest text-[#C9A84C] uppercase">
            Edital Capturado
          </span>
        </span>
        <span className="text-[10px] text-white/20">DIÁRIO REGISTRAL — AO VIVO</span>
      </div>
      <div style={{ height: 80, overflow: "hidden", position: "relative" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-3 gap-x-4 gap-y-3"
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
              <div className="truncate text-[#e6c364]">{item.valor}</div>
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
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const startTime = performance.now();
    let rafId: number;

    function tick(now: number) {
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.floor(progress * to));
      if (progress < 1) rafId = requestAnimationFrame(tick);
      else setCount(to);
    }

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {count.toLocaleString("pt-BR")}
      {suffix}
    </span>
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
      className="min-h-screen bg-[#fcf9f3] text-[#0f1c2c] selection:bg-[#0f1c2c] selection:text-[#fcf9f3]"
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
            className="cursor-pointer text-4xl font-semibold tracking-tight text-[#fcf9f3] md:text-5xl"
          >
            Chreos
          </button>
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#mecanismo"
              className="text-xs tracking-[0.15em] text-[#fcf9f3]/60 uppercase transition-colors hover:text-[#fcf9f3]"
            >
              Como Funciona
            </a>
            <a
              href="#inteligencia"
              className="text-xs tracking-[0.15em] text-[#fcf9f3]/60 uppercase transition-colors hover:text-[#fcf9f3]"
            >
              Seus Leads
            </a>
            <a
              href="#filtros"
              className="text-xs tracking-[0.15em] text-[#fcf9f3]/60 uppercase transition-colors hover:text-[#fcf9f3]"
            >
              Personalização
            </a>
            <a
              href="#acesso"
              className="px-5 py-2.5 text-xs font-bold tracking-[0.15em] text-[#0f1c2c] uppercase transition-opacity hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #C9A84C 0%, #e6c364 100%)",
              }}
              data-testid="link-nav-acesso"
            >
              Solicitar Acesso
            </a>
          </div>
        </div>
      </nav>

      {/* HERO — full bleed dark navy */}
      <section className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-[#0f1c2c]">
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
            className="pl-4 font-serif text-[18vw] leading-none font-bold whitespace-nowrap text-[#fcf9f3]/[0.025]"
            style={{ fontFamily: "'Newsreader Variable', serif" }}
          >
            CHREOS
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-36 pb-16 md:px-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            {/* <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10">
              <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full animate-pulse" />
              <span className="text-[#C9A84C] text-[10px] uppercase tracking-[0.3em] font-bold">Sistema Ativo — Monitoramento Contínuo</span>
            </motion.div> */}

            <motion.h1
              variants={fadeUp}
              className="mb-10 leading-[0.95] tracking-[-0.02em] text-[#fcf9f3]"
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
            </motion.h1>

            <motion.div variants={fadeUp} className="mb-10 grid max-w-3xl gap-6 md:grid-cols-2">
              <p className="text-base leading-relaxed text-[#fcf9f3]/60">
                Identificamos automaticamente pessoas que estão prestes a perder um imóvel e
                entregamos ao seu escritório o nome, telefone e WhatsApp delas — antes que qualquer
                concorrente saiba que esse cliente existe.
              </p>
              <LiveTicker />
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#acesso"
                className="inline-flex items-center gap-2 px-7 py-4 text-xs font-bold tracking-[0.2em] text-[#0f1c2c] uppercase transition-opacity hover:opacity-90"
                style={{
                  background: "linear-gradient(135deg, #C9A84C 0%, #e6c364 100%)",
                }}
                data-testid="button-hero-cta"
              >
                Solicitar Demonstração <ArrowRight size={14} />
              </a>
              <a
                href="#mecanismo"
                className="inline-flex items-center gap-2 border border-[#fcf9f3]/10 px-7 py-4 text-xs font-bold tracking-[0.2em] text-[#fcf9f3]/70 uppercase transition-colors hover:border-[#fcf9f3]/30"
                data-testid="button-hero-secondary"
              >
                Ver Metodologia
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <div className="relative z-10 border-t border-[#fcf9f3]/10 bg-[#0a1520]">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-6 md:grid-cols-4 md:gap-0 md:divide-x md:divide-[#fcf9f3]/10 md:px-10">
            {STATS.map((s, i) => (
              <div key={i} className="first:pl-0 md:px-8">
                <div
                  className="font-mono font-bold text-[#e6c364]"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}
                >
                  <CountUp to={s.n} suffix={s.suf} />
                </div>
                <div className="mt-1 text-[10px] tracking-[0.15em] text-[#fcf9f3]/40 uppercase">
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
