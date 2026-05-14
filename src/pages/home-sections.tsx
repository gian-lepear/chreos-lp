import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CTAForm } from "@/components/CTAForm";
import { STEPS, LEAD_FEATURES, FILTERS, TIMELINE, TESTIMONIALS, CTA_BULLETS } from "@/data/landing";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

const YEAR = new Date().getFullYear();

export default function HomeSections() {
  return (
    <>
      {/* MECANISMO */}
      <section id="mecanismo" className="bg-[#fcf9f3] py-28 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <motion.div variants={fadeUp} className="flex justify-between items-end border-b border-[#0f1c2c]/10 pb-8 mb-16">
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-[#0f1c2c]/60 font-bold mb-3">01 — Como Funciona</div>
                <h2 className="text-[#0f1c2c] leading-tight" style={{ fontFamily: "'Newsreader Variable', serif", fontSize: "clamp(2rem, 4.5vw, 3.8rem)" }}>
                  Seu funil de clientes<br />funcionando <em>sozinho.</em>
                </h2>
              </div>
              <div className="hidden md:block text-right max-w-xs">
                <p className="text-[#0f1c2c]/50 text-sm leading-relaxed">
                  Enquanto seu escritório atende os casos de hoje, a Chreos já está montando a fila de clientes de amanhã — com nome, contato e urgência documentada.
                </p>
              </div>
            </motion.div>

            <div className="space-y-0">
              {STEPS.map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="group flex gap-8 md:gap-16 py-10 border-b border-[#0f1c2c]/10 hover:bg-[#f6f3ed] transition-colors px-4 -mx-4"
                >
                  <div className="flex-shrink-0 w-12 md:w-16">
                    <span className="text-[#0f1c2c]/15 font-serif font-bold text-4xl md:text-5xl" style={{ fontFamily: "'Newsreader Variable', serif" }}>{step.n}</span>
                  </div>
                  <div className="flex-1 grid md:grid-cols-3 gap-4 md:gap-8 items-start">
                    <div>
                      <div className="text-[9px] uppercase tracking-[0.3em] text-[#C9A84C] font-bold mb-2">{step.tag}</div>
                      <h3 className="text-lg font-semibold tracking-tight text-[#0f1c2c]">{step.title}</h3>
                      <div className="text-sm text-[#0f1c2c]/55 mt-1">{step.sub}</div>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-[#0f1c2c]/65 text-sm md:text-base leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 hidden md:flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={18} className="text-[#C9A84C]" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* LEAD PREVIEW — the intelligence dossier */}
      <section id="inteligencia" className="bg-[#0f1c2c] py-28 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-14">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#fcf9f3]/55 font-bold mb-3">02 — Seus Leads</div>
              <h2 className="text-[#fcf9f3] leading-tight" style={{ fontFamily: "'Newsreader Variable', serif", fontSize: "clamp(2rem, 4.5vw, 3.8rem)" }}>
                Tudo o que você precisa<br />para <em>fechar o caso.</em>
              </h2>
            </motion.div>

            <motion.div variants={fadeUp} className="grid lg:grid-cols-5 gap-6">
              {/* Dossier card */}
              <div className="lg:col-span-3 bg-[#fcf9f3] relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-[5px]" style={{ background: "linear-gradient(180deg, #C9A84C 0%, #e6c364 100%)" }} />

                <div className="pl-8 pr-6 pt-6 pb-2">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className="text-[9px] uppercase tracking-[0.25em] font-bold bg-[#0f1c2c] text-[#fcf9f3] px-2.5 py-1 inline-block mb-3" style={{ borderRadius: "9999px" }}>
                        Alta Urgência · 3ª Notificação
                      </span>
                      <h3 className="text-[#0f1c2c] font-semibold text-xl" style={{ fontFamily: "'Newsreader Variable', serif" }}>
                        Carlos Eduardo Mendes
                      </h3>
                      <div className="text-[#0f1c2c]/50 text-xs uppercase tracking-widest mt-0.5">Potencial Cliente</div>
                    </div>
                    {/* <div className="text-right">
                      <div className="text-[9px] uppercase tracking-widest text-[#0f1c2c]/60 font-bold mb-1">Prazo restante</div>
                      <div className="font-mono text-red-600 font-bold text-lg">15 DIAS</div>
                    </div> */}
                  </div>
                </div>

                <div className="bg-[#f6f3ed] mx-6 p-4 mb-0">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-[9px] uppercase tracking-[0.2em] text-[#0f1c2c]/60 font-bold mb-1">Credor Fiduciário</div>
                      <div className="text-sm font-medium text-[#0f1c2c]">Banco Itaú S.A.</div>
                    </div>
                    <div>
                      <div className="text-[9px] uppercase tracking-[0.2em] text-[#0f1c2c]/60 font-bold mb-1">Valor da Dívida</div>
                      <div className="text-sm font-mono font-bold text-[#0f1c2c]">R$ 142.850,00</div>
                    </div>
                    <div>
                      <div className="text-[9px] uppercase tracking-[0.2em] text-[#0f1c2c]/60 font-bold mb-1">Inadimplência desde</div>
                      <div className="text-sm font-mono text-[#0f1c2c]">14/03/2024</div>
                    </div>
                    <div>
                      <div className="text-[9px] uppercase tracking-[0.2em] text-[#0f1c2c]/60 font-bold mb-1">Reincidências</div>
                      <div className="flex gap-1 mt-0.5">
                        {[1, 2, 3].map(n => (
                          <div key={n} className="w-2 h-2 rounded-full" style={{ background: n <= 3 ? "linear-gradient(135deg, #C9A84C 0%, #e6c364 100%)" : "#ebe8e2" }} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 pt-4 pb-4">
                  <div className="text-[9px] uppercase tracking-[0.2em] text-[#0f1c2c]/60 font-bold mb-2">Imóvel e Registro</div>
                  <div className="text-sm text-[#0f1c2c]">Rua das Acácias, 145 — Apto 802, Pinheiros</div>
                  <div className="text-sm text-[#0f1c2c]/70">São Paulo — SP · CEP 05435-020</div>
                  <div className="text-xs text-[#0f1c2c]/50 mt-1 font-mono">Matrícula 84.992 · 4º CRI de São Paulo · CNS 1.077</div>
                </div>

                <div className="bg-[#ebe8e2] mx-6 p-4 mb-6">
                  <div className="text-[9px] uppercase tracking-[0.2em] text-[#0f1c2c]/60 font-bold mb-3">Contatos Enriquecidos</div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-widest text-[#0f1c2c]/50">WhatsApp</span>
                      <span className="font-mono text-sm text-[#0f1c2c]">+55 11 98844-3322</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-widest text-[#0f1c2c]/50">Telefone</span>
                      <span className="font-mono text-sm text-[#0f1c2c]">+55 11 3341-8810</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-widest text-[#0f1c2c]/50">E-mail</span>
                      <span className="font-mono text-sm text-[#0f1c2c]">c.mendes@gmail.com</span>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <button
                    className="w-full text-[#0f1c2c] text-[10px] uppercase tracking-[0.25em] font-bold py-3 hover:opacity-80 transition-opacity"
                    style={{ background: "linear-gradient(135deg, #C9A84C 0%, #e6c364 100%)" }}
                    data-testid="button-dossie-abordar"
                  >
                    Iniciar Abordagem
                  </button>
                </div>
              </div>

              {/* Right column — info */}
              <div className="lg:col-span-2 flex flex-col justify-between gap-6">
                <div className="text-[#fcf9f3]/60 text-base leading-relaxed">
                  Cada lead que a Chreos entrega já tem tudo o que o seu escritório precisa para dar o primeiro passo. Sem pesquisa extra. Sem tempo perdido. Só chegar e conversar.
                </div>
                <div className="space-y-0">
                  {LEAD_FEATURES.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 py-4 border-b border-[#fcf9f3]/10">
                      <div className="w-[3px] h-4 flex-shrink-0" style={{ background: "linear-gradient(180deg, #C9A84C 0%, #e6c364 100%)" }} />
                      <span className="text-[#fcf9f3]/75 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-[#16263b] p-5">
                  <div className="text-[9px] uppercase tracking-[0.25em] text-[#fcf9f3]/30 font-bold mb-2">Cobertura Nacional</div>
                  <div className="text-[#fcf9f3] font-mono text-sm leading-relaxed">
                    27 estados · mais de 3.000 cartórios indexados · atualização diária
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FILTROS */}
      <section id="filtros" className="bg-[#f6f3ed] py-28 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-14 flex justify-between items-end">
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-[#0f1c2c]/60 font-bold mb-3">03 — Personalização</div>
                <h2 className="text-[#0f1c2c] leading-tight" style={{ fontFamily: "'Newsreader Variable', serif", fontSize: "clamp(2rem, 4.5vw, 3.8rem)" }}>
                  Só o que<br /><em>interessa a você.</em>
                </h2>
              </div>
              <p className="hidden md:block text-[#0f1c2c]/50 text-sm leading-relaxed max-w-xs text-right">
                Não existe lead genérico aqui. Você define exatamente o perfil de cliente que quer receber — e a gente entrega só isso.
              </p>
            </motion.div>

            <div className="space-y-0">
              {FILTERS.map((f, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="group grid md:grid-cols-3 gap-4 md:gap-8 py-8 border-b border-[#0f1c2c]/10 hover:bg-[#ebe8e2] transition-colors px-4 -mx-4"
                >
                  <div>
                    <div className="text-[#0f1c2c] font-semibold text-base">{f.label}</div>
                    <div className="text-[#C9A84C] text-xs font-mono mt-1">{f.detail}</div>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-[#0f1c2c]/60 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* REINCIDÊNCIA */}
      <section className="bg-[#0f1c2c] py-28 px-6 md:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-14">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#fcf9f3]/55 font-bold mb-3">04 — Diferencial</div>
              <h2 className="text-[#fcf9f3] leading-tight max-w-2xl" style={{ fontFamily: "'Newsreader Variable', serif", fontSize: "clamp(2rem, 4.5vw, 3.8rem)" }}>
                Os leads mais quentes<br />são os que <em>voltam.</em>
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div variants={fadeUp}>
                <p className="text-[#fcf9f3]/65 text-base md:text-lg leading-relaxed mb-6">
                  A primeira notificação que uma pessoa recebe sobre seu imóvel em risco costuma ser um susto — e ela ainda acredita que vai resolver sozinha. Na segunda ou na terceira, a realidade já bateu. O prazo está acabando, as opções se esgotaram e ela está pronta para contratar um advogado.
                </p>
                <p className="text-[#fcf9f3]/65 text-base md:text-lg leading-relaxed mb-10">
                  A Chreos rastreia quantas vezes uma pessoa já foi notificada sobre o mesmo imóvel. Com isso, seu escritório pode focar exatamente nos leads com maior urgência — quem já tentou resolver e não conseguiu, e agora precisa de ajuda de verdade.
                </p>
                <div className="bg-[#16263b] p-6">
                  <div className="text-[9px] uppercase tracking-[0.25em] text-[#fcf9f3]/55 font-bold mb-4">Por que isso importa para o seu funil</div>
                  <div className="text-[#fcf9f3]/75 text-sm leading-relaxed">
                    Leads notificados pela <span className="text-[#e6c364] font-semibold">2ª ou 3ª vez</span> têm taxa de conversão significativamente maior — a urgência é real, documentada e o cliente já entendeu que precisa agir.
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-0">
                <div className="text-[9px] uppercase tracking-[0.25em] text-[#fcf9f3]/55 font-bold mb-4">Linha do Tempo — Imóvel Mat. 84.992 · 4º CRI SP</div>
                {TIMELINE.map((ev, i) => (
                  <div key={i} className="relative flex gap-5 pb-0">
                    <div className="flex flex-col items-center">
                      <div className="w-7 h-7 flex items-center justify-center font-mono text-[10px] font-bold flex-shrink-0"
                        style={{ background: !ev.cold ? "linear-gradient(135deg, #C9A84C 0%, #e6c364 100%)" : "transparent", color: !ev.cold ? "#0f1c2c" : "#fcf9f3", border: ev.cold ? "1px solid rgba(252,249,243,0.2)" : "none" }}>
                        {ev.n}
                      </div>
                      {i < 2 && <div className="w-[1px] h-10 bg-[#fcf9f3]/10" />}
                    </div>
                    <div className="pb-8">
                      <div className="font-mono text-[10px] text-[#fcf9f3]/55 mb-0.5">{ev.date}</div>
                      <div className={`font-semibold text-sm mb-1 ${!ev.cold ? "text-[#e6c364]" : "text-[#fcf9f3]/70"}`}>{ev.label}</div>
                      <div className="text-[#fcf9f3]/45 text-xs leading-relaxed">{ev.note}</div>
                    </div>
                  </div>
                ))}
                <div className="bg-[#C9A84C]/10 border-l-2 border-[#C9A84C] p-4 mt-2">
                  <div className="text-[9px] uppercase tracking-widest text-[#C9A84C] font-bold mb-1">Alerta Gerado</div>
                  <div className="text-[#fcf9f3]/80 text-sm">Devedor identificado. Probabilidade de acordo <span className="font-mono font-bold text-[#e6c364]">MÁXIMA</span>.</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="bg-[#fcf9f3] py-28 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-[10px] uppercase tracking-[0.3em] text-[#0f1c2c]/60 font-bold mb-14">05 — Resultados</motion.div>
            <div className="grid md:grid-cols-2 gap-0">
              {TESTIMONIALS.map((t, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="p-8 md:p-10 border-b border-r border-[#0f1c2c]/8 hover:bg-[#f6f3ed] transition-colors"
                  style={{ borderRight: i % 2 === 0 ? undefined : "none" }}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-8 h-[3px]" style={{ background: "linear-gradient(90deg, #C9A84C 0%, #e6c364 100%)" }} />
                    <div className="font-mono font-bold text-[#0f1c2c]/50 text-xs uppercase tracking-widest">{t.stat}</div>
                  </div>
                  <p className="text-[#0f1c2c]/80 text-base leading-relaxed mb-6" style={{ fontFamily: "'Newsreader Variable', serif", fontStyle: "italic" }}>
                    "{t.quote}"
                  </p>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[#0f1c2c] font-bold">{t.author}</div>
                    <div className="text-[#0f1c2c]/45 text-xs mt-0.5">{t.firm} · {t.location}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section id="acesso" className="bg-[#0f1c2c] py-28 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#fcf9f3]/55 font-bold mb-8">06 — Acesso</div>
            <h2 className="text-[#fcf9f3] leading-tight mb-6" style={{ fontFamily: "'Newsreader Variable', serif", fontSize: "clamp(2.2rem, 4.5vw, 4rem)" }}>
              Encha sua agenda<br />com quem <em>precisa de você.</em>
            </h2>
            <p className="text-[#fcf9f3]/55 text-base leading-relaxed mb-10 max-w-md">
              Preencha o formulário ao lado e agende uma conversa com nossa equipe. Vamos mostrar leads reais da sua região e explicar como a Chreos pode funcionar para o seu escritório.
            </p>
            <div className="space-y-5">
              {CTA_BULLETS.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-5 h-[2px] flex-shrink-0" style={{ background: "linear-gradient(90deg, #C9A84C 0%, #e6c364 100%)" }} />
                  <span className="text-[#fcf9f3]/65 text-sm uppercase tracking-[0.12em]">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <CTAForm />
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0a1520] py-12 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pb-10 border-b border-[#fcf9f3]/10">
            <div>
              <div className="text-[#fcf9f3] font-semibold text-xl tracking-tight mb-1" style={{ fontFamily: "'Newsreader Variable', serif" }}>Chreos</div>
              <div className="text-[#fcf9f3]/35 text-xs uppercase tracking-widest">Leads quentes para advogados</div>
            </div>
            <div className="flex gap-8 text-xs text-[#fcf9f3]/35 uppercase tracking-[0.15em]">
              <a href="#" className="hover:text-[#fcf9f3]/70 transition-colors">Termos</a>
              <a href="#" className="hover:text-[#fcf9f3]/70 transition-colors">Privacidade</a>
              <a href="#" className="hover:text-[#fcf9f3]/70 transition-colors">Contato</a>
            </div>
          </div>
          <div className="pt-6 flex justify-between items-center">
            <div className="text-[#fcf9f3]/50 text-[10px] uppercase tracking-[0.2em]">
              © {YEAR} Chreos. Todos os direitos reservados.
            </div>
            <div className="text-[#fcf9f3]/40 text-[10px] font-mono uppercase tracking-widest hidden md:block">
              Diário Registral · Alienação Fiduciária · LGPD
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
