import { m } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { CTAForm } from "@/components/CTAForm";
import {
  STEPS,
  LEAD_FEATURES,
  FILTERS,
  TIMELINE,
  INVESTMENT,
  FAQ,
  CTA_BULLETS,
} from "@/data/landing";

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

const YEAR = new Date().getFullYear();

export default function HomeSections() {
  return (
    <>
      {/* MECANISMO */}
      <section id="mecanismo" className="bg-cream px-6 py-28 md:px-10">
        <div className="mx-auto max-w-7xl">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <m.div
              variants={fadeUp}
              className="border-navy/10 mb-16 flex items-end justify-between border-b pb-8"
            >
              <div>
                <div className="text-navy/60 mb-3 text-[10px] font-bold tracking-[0.3em] uppercase">
                  01 — Como Funciona
                </div>
                <h2
                  className="text-navy leading-tight"
                  style={{
                    fontFamily: "'Newsreader Variable', serif",
                    fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
                  }}
                >
                  Seu funil de clientes
                  <br />
                  funcionando <em>sozinho.</em>
                </h2>
              </div>
              <div className="hidden max-w-xs text-right md:block">
                <p className="text-navy/50 text-sm leading-relaxed">
                  Enquanto seu escritório atende os casos de hoje, já estamos montando a fila de
                  clientes de amanhã — com nome, contato e urgência documentada.
                </p>
              </div>
            </m.div>

            <div className="space-y-0">
              {STEPS.map((step, i) => (
                <m.div
                  key={i}
                  variants={fadeUp}
                  className="group border-navy/10 hover:bg-cream-dim -mx-4 flex gap-8 border-b px-4 py-10 transition-colors md:gap-16"
                >
                  <div className="w-12 flex-shrink-0 md:w-16">
                    <span
                      className="text-navy/15 font-serif text-4xl font-bold md:text-5xl"
                      style={{ fontFamily: "'Newsreader Variable', serif" }}
                    >
                      {step.n}
                    </span>
                  </div>
                  <div className="grid flex-1 items-start gap-4 md:grid-cols-3 md:gap-8">
                    <div>
                      <div className="text-gold mb-2 text-[9px] font-bold tracking-[0.3em] uppercase">
                        {step.tag}
                      </div>
                      <h3 className="text-navy text-lg font-semibold tracking-tight">
                        {step.title}
                      </h3>
                      <div className="text-navy/55 mt-1 text-sm">{step.sub}</div>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-navy/65 text-sm leading-relaxed md:text-base">
                        {step.body}
                      </p>
                    </div>
                  </div>
                  <div className="hidden flex-shrink-0 items-center opacity-0 transition-opacity group-hover:opacity-100 md:flex">
                    <ArrowUpRight size={18} className="text-gold" />
                  </div>
                </m.div>
              ))}
            </div>
          </m.div>
        </div>
      </section>

      {/* LEAD PREVIEW — the intelligence dossier */}
      <section id="inteligencia" className="bg-navy px-6 py-28 md:px-10">
        <div className="mx-auto max-w-7xl">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <m.div variants={fadeUp} className="mb-14">
              <div className="text-cream/55 mb-3 text-[10px] font-bold tracking-[0.3em] uppercase">
                02 — Seus Leads
              </div>
              <h2
                className="text-cream leading-tight"
                style={{
                  fontFamily: "'Newsreader Variable', serif",
                  fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
                }}
              >
                Tudo o que você precisa
                <br />
                para <em>fechar o caso.</em>
              </h2>
            </m.div>

            <m.div variants={fadeUp} className="grid gap-6 lg:grid-cols-5">
              {/* Dossier card */}
              <div className="bg-cream relative overflow-hidden lg:col-span-3">
                <div
                  className="absolute top-0 bottom-0 left-0 w-[5px]"
                  style={{
                    background: "var(--gold-gradient-v)",
                  }}
                />

                <div className="pt-6 pr-6 pb-2 pl-8">
                  <div className="mb-6 flex items-start justify-between">
                    <div>
                      <span
                        className="bg-navy text-cream mb-3 inline-block px-2.5 py-1 text-[9px] font-bold tracking-[0.25em] uppercase"
                        style={{ borderRadius: "9999px" }}
                      >
                        Alta Urgência · 3ª Notificação
                      </span>
                      <h3
                        className="text-navy text-xl font-semibold"
                        style={{ fontFamily: "'Newsreader Variable', serif" }}
                      >
                        Carlos Eduardo Mendes
                      </h3>
                      <div className="text-navy/50 mt-0.5 text-xs tracking-widest uppercase">
                        Potencial Cliente
                      </div>
                    </div>
                    {/* <div className="text-right">
                      <div className="text-[9px] uppercase tracking-widest text-navy/60 font-bold mb-1">Prazo restante</div>
                      <div className="font-mono text-red-600 font-bold text-lg">15 DIAS</div>
                    </div> */}
                  </div>
                </div>

                <div className="bg-cream-dim mx-6 mb-0 p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-navy/60 mb-1 text-[9px] font-bold tracking-[0.2em] uppercase">
                        Banco Credor
                      </div>
                      <div className="text-navy text-sm font-medium">Banco Itaú S.A.</div>
                    </div>
                    <div>
                      <div className="text-navy/60 mb-1 text-[9px] font-bold tracking-[0.2em] uppercase">
                        Valor da Dívida
                      </div>
                      <div className="text-navy font-mono text-sm font-bold">R$ 142.850,00</div>
                    </div>
                    <div>
                      <div className="text-navy/60 mb-1 text-[9px] font-bold tracking-[0.2em] uppercase">
                        Inadimplência desde
                      </div>
                      <div className="text-navy font-mono text-sm">14/10/2025</div>
                    </div>
                    <div>
                      <div className="text-navy/60 mb-1 text-[9px] font-bold tracking-[0.2em] uppercase">
                        Reincidências
                      </div>
                      <div className="mt-0.5 flex gap-1">
                        {[1, 2, 3].map((n) => (
                          <div
                            key={n}
                            className="h-2 w-2 rounded-full"
                            style={{
                              background: "var(--gold-gradient)",
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 pt-4 pb-4">
                  <div className="text-navy/60 mb-2 text-[9px] font-bold tracking-[0.2em] uppercase">
                    Imóvel e Registro
                  </div>
                  <div className="text-navy text-sm">
                    Rua das Acácias, 145 — Apto 802, Pinheiros
                  </div>
                  <div className="text-navy/70 text-sm">São Paulo — SP · CEP 05435-020</div>
                  <div className="text-navy/50 mt-1 font-mono text-xs">
                    Matrícula 84.992 · 4º CRI de São Paulo · CNS 1.077
                  </div>
                </div>

                <div className="bg-cream-shade mx-6 mb-6 p-4">
                  <div className="text-navy/60 mb-3 text-[9px] font-bold tracking-[0.2em] uppercase">
                    Contatos Enriquecidos
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-navy/50 text-[10px] tracking-widest uppercase">
                        WhatsApp
                      </span>
                      <span className="text-navy font-mono text-sm">+55 11 98844-3322</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-navy/50 text-[10px] tracking-widest uppercase">
                        Telefone
                      </span>
                      <span className="text-navy font-mono text-sm">+55 11 3341-8810</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-navy/50 text-[10px] tracking-widest uppercase">
                        E-mail
                      </span>
                      <span className="text-navy font-mono text-sm">c.mendes@gmail.com</span>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <button
                    className="text-navy w-full py-3 text-[10px] font-bold tracking-[0.25em] uppercase transition-opacity hover:opacity-80"
                    style={{
                      background: "var(--gold-gradient)",
                    }}
                    data-testid="button-dossie-abordar"
                  >
                    Iniciar Abordagem
                  </button>
                  <div className="text-navy/55 mt-3 text-center text-[9px] tracking-[0.15em] uppercase">
                    Exemplo ilustrativo de lead
                  </div>
                </div>
              </div>

              {/* Right column — info */}
              <div className="flex flex-col justify-between gap-6 lg:col-span-2">
                <div className="text-cream/60 text-base leading-relaxed">
                  Cada lead que entregamos já tem tudo o que o seu escritório precisa para dar o
                  primeiro passo. Sem pesquisa extra. Sem tempo perdido. Só chegar e conversar.
                </div>
                <div className="space-y-0">
                  {LEAD_FEATURES.map((item, i) => (
                    <div key={i} className="border-cream/10 flex items-center gap-4 border-b py-4">
                      <div
                        className="h-4 w-[3px] flex-shrink-0"
                        style={{
                          background: "var(--gold-gradient-v)",
                        }}
                      />
                      <span className="text-cream/75 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-navy-raised p-5">
                  <div className="text-cream/30 mb-2 text-[9px] font-bold tracking-[0.25em] uppercase">
                    Cobertura Nacional
                  </div>
                  <div className="text-cream font-mono text-sm leading-relaxed">
                    27 estados · diários registrais e editais públicos · fontes oficiais
                  </div>
                </div>
              </div>
            </m.div>
          </m.div>
        </div>
      </section>

      {/* FILTROS */}
      <section id="filtros" className="bg-cream-dim px-6 py-28 md:px-10">
        <div className="mx-auto max-w-7xl">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <m.div variants={fadeUp} className="mb-14 flex items-end justify-between">
              <div>
                <div className="text-navy/60 mb-3 text-[10px] font-bold tracking-[0.3em] uppercase">
                  03 — Personalização
                </div>
                <h2
                  className="text-navy leading-tight"
                  style={{
                    fontFamily: "'Newsreader Variable', serif",
                    fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
                  }}
                >
                  Só o que
                  <br />
                  <em>interessa a você.</em>
                </h2>
              </div>
              <p className="text-navy/50 hidden max-w-xs text-right text-sm leading-relaxed md:block">
                Não existe lead genérico aqui. Você define exatamente o perfil de cliente que quer
                receber — e a gente entrega só isso.
              </p>
            </m.div>

            <div className="space-y-0">
              {FILTERS.map((f, i) => (
                <m.div
                  key={i}
                  variants={fadeUp}
                  className="group border-navy/10 hover:bg-cream-shade -mx-4 grid gap-4 border-b px-4 py-8 transition-colors md:grid-cols-3 md:gap-8"
                >
                  <div>
                    <div className="text-navy text-base font-semibold">{f.label}</div>
                    <div className="text-gold mt-1 font-mono text-xs">{f.detail}</div>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-navy/60 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </m.div>
              ))}
            </div>
          </m.div>
        </div>
      </section>

      {/* REINCIDÊNCIA */}
      <section className="bg-navy overflow-hidden px-6 py-28 md:px-10">
        <div className="mx-auto max-w-7xl">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <m.div variants={fadeUp} className="mb-14">
              <div className="text-cream/55 mb-3 text-[10px] font-bold tracking-[0.3em] uppercase">
                04 — Diferencial
              </div>
              <h2
                className="text-cream max-w-2xl leading-tight"
                style={{
                  fontFamily: "'Newsreader Variable', serif",
                  fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
                }}
              >
                Os leads mais quentes
                <br />
                são os que <em>voltam.</em>
              </h2>
            </m.div>

            <div className="grid items-start gap-12 lg:grid-cols-2">
              <m.div variants={fadeUp}>
                <p className="text-cream/65 mb-6 text-base leading-relaxed md:text-lg">
                  A primeira notificação que uma pessoa recebe sobre seu imóvel em risco costuma ser
                  um susto — e ela ainda acredita que vai resolver sozinha. Na segunda ou na
                  terceira, a realidade já bateu. O prazo está acabando, as opções se esgotaram e
                  ela está pronta para contratar um advogado.
                </p>
                <p className="text-cream/65 mb-10 text-base leading-relaxed md:text-lg">
                  Rastreamos quantas vezes uma pessoa já foi notificada sobre o mesmo imóvel. Com
                  isso, seu escritório pode focar exatamente nos leads com maior urgência — quem já
                  tentou resolver e não conseguiu, e agora precisa de ajuda de verdade.
                </p>
                <div className="bg-navy-raised p-6">
                  <div className="text-cream/55 mb-4 text-[9px] font-bold tracking-[0.25em] uppercase">
                    Por que isso importa para o seu funil
                  </div>
                  <div className="text-cream/75 text-sm leading-relaxed">
                    Leads notificados pela{" "}
                    <span className="text-gold-light font-semibold">2ª ou 3ª vez</span> estão na
                    reta final do processo — dentro do prazo de 15 dias para purgar a mora (art. 26
                    da Lei 9.514/1997). A urgência é documentada, não presumida: o cliente já
                    entendeu que precisa agir.
                  </div>
                </div>
              </m.div>

              <m.div variants={fadeUp} className="space-y-0">
                <div className="text-cream/55 mb-4 text-[9px] font-bold tracking-[0.25em] uppercase">
                  Linha do Tempo — Imóvel Mat. 84.992 · 4º CRI SP
                </div>
                {TIMELINE.map((ev, i) => (
                  <div key={i} className="relative flex gap-5 pb-0">
                    <div className="flex flex-col items-center">
                      <div
                        className="flex h-7 w-7 flex-shrink-0 items-center justify-center font-mono text-[10px] font-bold"
                        style={{
                          background: !ev.cold ? "var(--gold-gradient)" : "transparent",
                          color: !ev.cold ? "#0f1c2c" : "#fcf9f3",
                          border: ev.cold ? "1px solid rgba(252,249,243,0.2)" : "none",
                        }}
                      >
                        {ev.n}
                      </div>
                      {i < 2 && <div className="bg-cream/10 h-10 w-[1px]" />}
                    </div>
                    <div className="pb-8">
                      <div className="text-cream/55 mb-0.5 font-mono text-[10px]">{ev.date}</div>
                      <div
                        className={`mb-1 text-sm font-semibold ${!ev.cold ? "text-gold-light" : "text-cream/70"}`}
                      >
                        {ev.label}
                      </div>
                      <div className="text-cream/45 text-xs leading-relaxed">{ev.note}</div>
                    </div>
                  </div>
                ))}
                <div className="border-gold bg-gold/10 mt-2 border-l-2 p-4">
                  <div className="text-gold mb-1 text-[9px] font-bold tracking-widest uppercase">
                    Alerta Gerado
                  </div>
                  <div className="text-cream/80 text-sm">
                    Devedor na 3ª intimação —{" "}
                    <span className="text-gold-light font-mono font-bold">
                      prazo de purgação correndo
                    </span>
                    , janela de contato curta.
                  </div>
                </div>
              </m.div>
            </div>
          </m.div>
        </div>
      </section>

      {/* ORIGEM DO NOME */}
      <section className="bg-cream relative overflow-hidden px-6 py-32 md:px-10">
        {/* Ornamento sutil de fundo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 right-0 translate-x-1/4 -translate-y-1/2 opacity-[0.04] select-none"
          style={{
            fontFamily: "'Newsreader Variable', serif",
            fontSize: "clamp(20rem, 40vw, 36rem)",
            lineHeight: 1,
            color: "#0f1c2c",
          }}
        >
          χ
        </div>

        <div className="relative mx-auto max-w-7xl">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <m.div
              variants={fadeUp}
              className="text-navy/60 mb-4 text-[10px] font-bold tracking-[0.3em] uppercase"
            >
              05 — Origem
            </m.div>

            <m.div variants={fadeUp} className="mb-8 flex items-baseline gap-5">
              <span
                className="text-navy"
                style={{
                  fontFamily: "'Newsreader Variable', serif",
                  fontSize: "clamp(3.5rem, 7vw, 6rem)",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                χρέος
              </span>
              <span
                className="text-navy/50 pb-3 italic"
                style={{
                  fontFamily: "'Newsreader Variable', serif",
                  fontSize: "clamp(1rem, 1.4vw, 1.25rem)",
                }}
              >
                /chréos/
              </span>
            </m.div>

            <m.div
              variants={fadeUp}
              className="mb-12 h-[2px] w-16"
              style={{
                background: "var(--gold-gradient-h)",
              }}
            />

            <m.p
              variants={fadeUp}
              className="text-navy/90 mb-12 max-w-3xl leading-[1.5]"
              style={{
                fontFamily: "'Newsreader Variable', serif",
                fontSize: "clamp(1.25rem, 1.8vw, 1.5rem)",
              }}
            >
              No grego antigo, <strong className="font-semibold">χρέος</strong> significa{" "}
              <strong className="font-semibold">dívida, obrigação, aquilo que é devido</strong>. Era
              a palavra usada para nomear o vínculo entre duas partes — o compromisso pendente que
              une credor e devedor até que seja honrado.
            </m.p>

            <m.div variants={fadeUp} className="border-gold/40 max-w-3xl border-l-2 pl-6">
              <p
                className="text-navy/75 leading-relaxed"
                style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)" }}
              >
                É exatamente isso o que fazemos: encontramos, no momento em que surgem, as
                obrigações que precisam ser resolvidas — e{" "}
                <span className="text-navy font-medium">
                  conectamos quem está prestes a perder um imóvel ao advogado certo
                </span>{" "}
                para conduzir o caso. Registros públicos viram leads: oportunidades reais de
                trabalho jurídico.
              </p>
            </m.div>
          </m.div>
        </div>
      </section>

      {/* INVESTIMENTO */}
      <section id="investimento" className="bg-navy px-6 py-28 md:px-10">
        <div className="mx-auto max-w-7xl">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <m.div variants={fadeUp} className="mb-14">
              <div className="text-cream/55 mb-3 text-[10px] font-bold tracking-[0.3em] uppercase">
                06 — Investimento
              </div>
              <h2
                className="text-cream leading-tight"
                style={{
                  fontFamily: "'Newsreader Variable', serif",
                  fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
                }}
              >
                Você paga por lead.
                <br />
                <em>Só isso.</em>
              </h2>
            </m.div>

            <div className="space-y-0">
              {INVESTMENT.map((item, i) => (
                <m.div
                  key={i}
                  variants={fadeUp}
                  className="group border-cream/10 hover:bg-navy-raised -mx-4 grid gap-4 border-b px-4 py-8 transition-colors md:grid-cols-3 md:gap-8"
                >
                  <div>
                    <div className="text-cream text-base font-semibold">{item.label}</div>
                    <div className="text-gold mt-1 font-mono text-xs">{item.detail}</div>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-cream/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </m.div>
              ))}
            </div>
          </m.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-cream-dim px-6 py-28 md:px-10">
        <div className="mx-auto max-w-7xl">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <m.div variants={fadeUp} className="mb-14">
              <div className="text-navy/60 mb-3 text-[10px] font-bold tracking-[0.3em] uppercase">
                07 — Perguntas Frequentes
              </div>
              <h2
                className="text-navy leading-tight"
                style={{
                  fontFamily: "'Newsreader Variable', serif",
                  fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
                }}
              >
                O que todo advogado
                <br />
                pergunta <em>antes de começar.</em>
              </h2>
            </m.div>

            <m.div variants={fadeUp} className="space-y-0">
              {FAQ.map((item, i) => (
                <details key={i} className="group border-navy/10 border-b">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                    <span className="text-navy text-base font-semibold md:text-lg">{item.q}</span>
                    <span
                      className="text-gold flex-shrink-0 font-serif text-2xl leading-none transition-transform group-open:rotate-45"
                      style={{ fontFamily: "'Newsreader Variable', serif" }}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="text-navy/65 max-w-3xl pb-6 text-sm leading-relaxed md:text-base">
                    {item.a}
                  </p>
                </details>
              ))}
            </m.div>
          </m.div>
        </div>
      </section>

      {/* CTA */}
      <section id="acesso" className="bg-navy px-6 py-28 md:px-10">
        <div className="mx-auto grid max-w-7xl items-start gap-14 lg:grid-cols-2">
          <m.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="text-cream/55 mb-8 text-[10px] font-bold tracking-[0.3em] uppercase">
              08 — Acesso
            </div>
            <h2
              className="text-cream mb-6 leading-tight"
              style={{
                fontFamily: "'Newsreader Variable', serif",
                fontSize: "clamp(2.2rem, 4.5vw, 4rem)",
              }}
            >
              Encha sua agenda
              <br />
              com quem <em>precisa de você.</em>
            </h2>
            <p className="text-cream/55 mb-10 max-w-md text-base leading-relaxed">
              Preencha o formulário ao lado e agende uma conversa conosco. Vamos mostrar o que o seu
              perfil pode gerar na sua região e explicar como podemos trabalhar com o seu
              escritório.
            </p>
            <div className="space-y-5">
              {CTA_BULLETS.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div
                    className="h-[2px] w-5 flex-shrink-0"
                    style={{
                      background: "var(--gold-gradient-h)",
                    }}
                  />
                  <span className="text-cream/65 text-sm tracking-[0.12em] uppercase">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-cream/55 mt-10 max-w-md text-xs leading-relaxed">
              Operamos em conformidade com a LGPD (Lei 13.709/2018) e com as normas de publicidade
              da advocacia (Provimento 205/2021 da OAB). Dados de origem pública e oficial; a
              abordagem é sempre de responsabilidade do advogado.
            </p>
          </m.div>

          <m.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <CTAForm />
          </m.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy-deep px-6 py-12 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="border-cream/10 flex flex-col items-start justify-between gap-8 border-b pb-10 md:flex-row md:items-end">
            <div>
              <div
                className="text-cream mb-1 text-xl font-semibold tracking-tight"
                style={{ fontFamily: "'Newsreader Variable', serif" }}
              >
                Chreos
              </div>
              <div className="text-cream/55 text-xs tracking-widest uppercase">
                Leads quentes para advogados
              </div>
            </div>
            <div className="text-cream/55 flex gap-8 text-xs tracking-[0.15em] uppercase">
              <Link href="/privacidade" className="hover:text-cream/70 transition-colors">
                Privacidade
              </Link>
              <a href="#acesso" className="hover:text-cream/70 transition-colors">
                Contato
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-2 pt-6 md:flex-row md:items-center md:justify-between">
            <div className="text-cream/50 text-[10px] tracking-[0.2em] uppercase">
              © {YEAR} Chreos. Todos os direitos reservados.
            </div>
            <div className="text-cream/55 text-[10px] tracking-[0.15em] uppercase">
              GLPA Data Services LTDA · CNPJ 55.704.724/0001-08
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
