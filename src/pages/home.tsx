import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TICKER_ITEMS, STATS } from "@/data/landing";
import HomeSections from "./home-sections";

function LiveTicker() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(i => (i + 1) % TICKER_ITEMS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const item = TICKER_ITEMS[index];

  return (
    <div className="bg-[#0a1520] border-l-4 border-[#C9A84C] p-5 font-mono text-xs" style={{ borderRadius: 0 }}>
      <div className="flex items-center gap-3 mb-3 flex-shrink-0">
        <span className="inline-flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full animate-pulse" />
          <span className="text-[#C9A84C] uppercase tracking-widest text-[10px] font-bold">Edital Capturado</span>
        </span>
        <span className="text-white/20 text-[10px]">DIÁRIO REGISTRAL — AO VIVO</span>
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
              <div className="text-white/30 text-[9px] uppercase tracking-widest mb-0.5">Devedor</div>
              <div className="text-white/90 truncate">{item.devedor}</div>
            </div>
            <div className="min-w-0">
              <div className="text-white/30 text-[9px] uppercase tracking-widest mb-0.5">Valor</div>
              <div className="text-[#e6c364] truncate">{item.valor}</div>
            </div>
            <div className="min-w-0">
              <div className="text-white/30 text-[9px] uppercase tracking-widest mb-0.5">Credor</div>
              <div className="text-white/90 truncate">{item.credor}</div>
            </div>
            <div className="min-w-0">
              <div className="text-white/30 text-[9px] uppercase tracking-widest mb-0.5">Matrícula</div>
              <div className="text-white/70 truncate">{item.matricula}</div>
            </div>
            <div className="min-w-0">
              <div className="text-white/30 text-[9px] uppercase tracking-widest mb-0.5">Cartório</div>
              <div className="text-white/70 truncate">{item.cartorio}</div>
            </div>
            <div className="min-w-0">
              <div className="text-white/30 text-[9px] uppercase tracking-widest mb-0.5">UF</div>
              <div className="text-white/70 truncate">{item.estado}</div>
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

  return <span ref={ref}>{count.toLocaleString("pt-BR")}{suffix}</span>;
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fcf9f3] text-[#0f1c2c] selection:bg-[#0f1c2c] selection:text-[#fcf9f3]" style={{ fontFamily: "'Inter Variable', sans-serif" }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(15,28,44,0.92)", backdropFilter: "blur(16px)", willChange: "transform" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 md:h-24 flex items-center justify-between">
          <div style={{ fontFamily: "'Newsreader Variable', serif" }} className="text-[#fcf9f3] font-semibold text-4xl md:text-5xl tracking-tight">
            Chreos
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#mecanismo" className="text-[#fcf9f3]/60 text-xs uppercase tracking-[0.15em] hover:text-[#fcf9f3] transition-colors">Como Funciona</a>
            <a href="#inteligencia" className="text-[#fcf9f3]/60 text-xs uppercase tracking-[0.15em] hover:text-[#fcf9f3] transition-colors">Seus Leads</a>
            <a href="#filtros" className="text-[#fcf9f3]/60 text-xs uppercase tracking-[0.15em] hover:text-[#fcf9f3] transition-colors">Personalização</a>
            <a
              href="#acesso"
              className="text-[#0f1c2c] text-xs uppercase tracking-[0.15em] font-bold px-5 py-2.5 hover:opacity-90 transition-opacity"
              style={{ background: "linear-gradient(135deg, #C9A84C 0%, #e6c364 100%)" }}
              data-testid="link-nav-acesso"
            >
              Solicitar Acesso
            </a>
          </div>
        </div>
      </nav>

      {/* HERO — full bleed dark navy */}
      <section className="relative min-h-screen bg-[#0f1c2c] overflow-hidden flex flex-col justify-end">
        {/* Background grid texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "repeating-linear-gradient(0deg, #fcf9f3 0px, #fcf9f3 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #fcf9f3 0px, #fcf9f3 1px, transparent 1px, transparent 60px)"
        }} />

        {/* Large background text */}
        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 overflow-hidden select-none pointer-events-none">
          <div className="text-[#fcf9f3]/[0.025] font-serif text-[18vw] leading-none font-bold whitespace-nowrap pl-4" style={{ fontFamily: "'Newsreader Variable', serif" }}>
            CHREOS
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-16 pt-36 w-full">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            {/* <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10">
              <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full animate-pulse" />
              <span className="text-[#C9A84C] text-[10px] uppercase tracking-[0.3em] font-bold">Sistema Ativo — Monitoramento Contínuo</span>
            </motion.div> */}

            <motion.h1
              variants={fadeUp}
              className="text-[#fcf9f3] leading-[0.95] tracking-[-0.02em] mb-10"
              style={{ fontFamily: "'Newsreader Variable', serif", fontSize: "clamp(3.2rem, 8vw, 7.5rem)" }}
            >
              Pare de esperar<br />
              por clientes.<br />
              Alcance-os no<br />
              momento <em style={{ fontStyle: "italic", color: "#e6c364" }}>exato.</em>
            </motion.h1>

            <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-6 mb-10 max-w-3xl">
              <p className="text-[#fcf9f3]/60 text-base leading-relaxed">
                A Chreos identifica automaticamente pessoas que estão prestes a perder um imóvel e entrega para o seu escritório o nome, telefone e WhatsApp delas — antes que qualquer concorrente saiba que esse cliente existe.
              </p>
              <LiveTicker />
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
              <a
                href="#acesso"
                className="inline-flex items-center gap-2 text-[#0f1c2c] text-xs uppercase tracking-[0.2em] font-bold px-7 py-4 hover:opacity-90 transition-opacity"
                style={{ background: "linear-gradient(135deg, #C9A84C 0%, #e6c364 100%)" }}
                data-testid="button-hero-cta"
              >
                Solicitar Acesso Restrito <ArrowRight size={14} />
              </a>
              <a
                href="#mecanismo"
                className="inline-flex items-center gap-2 text-[#fcf9f3]/70 text-xs uppercase tracking-[0.2em] font-bold px-7 py-4 border border-[#fcf9f3]/10 hover:border-[#fcf9f3]/30 transition-colors"
                data-testid="button-hero-secondary"
              >
                Ver Metodologia
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <div className="relative z-10 border-t border-[#fcf9f3]/10 bg-[#0a1520]">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-[#fcf9f3]/10">
            {STATS.map((s, i) => (
              <div key={i} className="md:px-8 first:pl-0">
                <div className="text-[#e6c364] font-mono font-bold" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}>
                  <CountUp to={s.n} suffix={s.suf} />
                </div>
                <div className="text-[#fcf9f3]/40 text-[10px] uppercase tracking-[0.15em] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeSections />
    </div>
  );
}
