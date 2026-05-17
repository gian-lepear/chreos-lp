import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CTAForm } from "@/components/CTAForm";
import { Footer } from "@/components/Footer";
import { STEPS, LEAD_FEATURES, FILTERS, TIMELINE, CTA_BULLETS } from "@/data/landing";
import { fadeUp, stagger } from "@/lib/animations";

export default function HomeSections() {
  return (
    <>
      {/* MECANISMO */}
      <section id="mecanismo" className="bg-[#fcf9f3] px-6 py-28 md:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div
              variants={fadeUp}
              className="mb-16 flex items-end justify-between border-b border-[#0f1c2c]/10 pb-8"
            >
              <div>
                <div className="mb-3 text-[10px] font-bold tracking-[0.3em] text-[#0f1c2c]/60 uppercase">
                  01 — Como Funciona
                </div>
                <h2
                  className="leading-tight text-[#0f1c2c]"
                  style={{
                    fontFamily: "'Newsreader Variable', serif",
                    fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
                  }}
                >
                  Monitoramento processual
                  <br />
                  contínuo, sem <em>esforço manual.</em>
                </h2>
              </div>
              <div className="hidden max-w-xs text-right md:block">
                <p className="text-sm leading-relaxed text-[#0f1c2c]/50">
                  Enquanto seu escritório atua nos casos de hoje, a Chreos já está indexando os
                  procedimentos de amanhã — com fase, prazos e dados objetivos documentados.
                </p>
              </div>
            </motion.div>

            <div className="space-y-0">
              {STEPS.map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="group -mx-4 flex gap-8 border-b border-[#0f1c2c]/10 px-4 py-10 transition-colors hover:bg-[#f6f3ed] md:gap-16"
                >
                  <div className="w-12 flex-shrink-0 md:w-16">
                    <span
                      className="font-serif text-4xl font-bold text-[#0f1c2c]/15 md:text-5xl"
                      style={{ fontFamily: "'Newsreader Variable', serif" }}
                    >
                      {step.n}
                    </span>
                  </div>
                  <div className="grid flex-1 items-start gap-4 md:grid-cols-3 md:gap-8">
                    <div>
                      <div className="mb-2 text-[9px] font-bold tracking-[0.3em] text-[#C9A84C] uppercase">
                        {step.tag}
                      </div>
                      <h3 className="text-lg font-semibold tracking-tight text-[#0f1c2c]">
                        {step.title}
                      </h3>
                      <div className="mt-1 text-sm text-[#0f1c2c]/55">{step.sub}</div>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm leading-relaxed text-[#0f1c2c]/65 md:text-base">
                        {step.body}
                      </p>
                    </div>
                  </div>
                  <div className="hidden flex-shrink-0 items-center opacity-0 transition-opacity group-hover:opacity-100 md:flex">
                    <ArrowUpRight size={18} className="text-[#C9A84C]" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* LEAD PREVIEW — the intelligence dossier */}
      <section id="inteligencia" className="bg-[#0f1c2c] px-6 py-28 md:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-14">
              <div className="mb-3 text-[10px] font-bold tracking-[0.3em] text-[#fcf9f3]/55 uppercase">
                02 — Ficha do Procedimento
              </div>
              <h2
                className="leading-tight text-[#fcf9f3]"
                style={{
                  fontFamily: "'Newsreader Variable', serif",
                  fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
                }}
              >
                Tudo o que importa
                <br />
                para <em>atuar no caso.</em>
              </h2>
            </motion.div>

            <motion.div variants={fadeUp} className="grid gap-6 lg:grid-cols-5">
              {/* Dossier card */}
              <div className="relative overflow-hidden bg-[#fcf9f3] lg:col-span-3">
                <div
                  className="absolute top-0 bottom-0 left-0 w-[5px]"
                  style={{
                    background: "linear-gradient(180deg, #C9A84C 0%, #e6c364 100%)",
                  }}
                />

                <div className="pt-6 pr-6 pb-2 pl-8">
                  <div className="mb-6 flex items-start justify-between">
                    <div>
                      <span
                        className="mb-3 inline-block bg-[#0f1c2c] px-2.5 py-1 text-[9px] font-bold tracking-[0.25em] text-[#fcf9f3] uppercase"
                        style={{ borderRadius: "9999px" }}
                      >
                        Prazo Crítico · 3ª Intimação
                      </span>
                      <h3
                        className="text-xl font-semibold text-[#0f1c2c]"
                        style={{ fontFamily: "'Newsreader Variable', serif" }}
                      >
                        Procedimento de Execução Extrajudicial
                      </h3>
                      <div className="mt-0.5 text-xs tracking-widest text-[#0f1c2c]/50 uppercase">
                        Lei 9.514/1997 · Art. 26
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mx-6 mb-0 bg-[#f6f3ed] p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="mb-1 text-[9px] font-bold tracking-[0.2em] text-[#0f1c2c]/60 uppercase">
                        Credor Fiduciário
                      </div>
                      <div className="text-sm font-medium text-[#0f1c2c]">Banco Itaú S.A.</div>
                    </div>
                    <div>
                      <div className="mb-1 text-[9px] font-bold tracking-[0.2em] text-[#0f1c2c]/60 uppercase">
                        Valor da Operação
                      </div>
                      <div className="font-mono text-sm font-bold text-[#0f1c2c]">
                        R$ 142.850,00
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 text-[9px] font-bold tracking-[0.2em] text-[#0f1c2c]/60 uppercase">
                        Início da inadimplência
                      </div>
                      <div className="font-mono text-sm text-[#0f1c2c]">14/03/2024</div>
                    </div>
                    <div>
                      <div className="mb-1 text-[9px] font-bold tracking-[0.2em] text-[#0f1c2c]/60 uppercase">
                        Intimações Realizadas
                      </div>
                      <div className="mt-0.5 flex gap-1">
                        {[1, 2, 3].map((n) => (
                          <div
                            key={n}
                            className="h-2 w-2 rounded-full"
                            style={{
                              background:
                                n <= 3
                                  ? "linear-gradient(135deg, #C9A84C 0%, #e6c364 100%)"
                                  : "#ebe8e2",
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 pt-4 pb-4">
                  <div className="mb-2 text-[9px] font-bold tracking-[0.2em] text-[#0f1c2c]/60 uppercase">
                    Imóvel e Registro
                  </div>
                  <div className="text-sm text-[#0f1c2c]">
                    Imóvel residencial — Bairro Pinheiros
                  </div>
                  <div className="text-sm text-[#0f1c2c]/70">São Paulo — SP</div>
                  <div className="mt-1 font-mono text-xs text-[#0f1c2c]/50">
                    Matrícula 84.992 · 4º CRI de São Paulo · CNS 1.077
                  </div>
                </div>

                <div className="mx-6 mb-6 bg-[#ebe8e2] p-4">
                  <div className="mb-3 text-[9px] font-bold tracking-[0.2em] text-[#0f1c2c]/60 uppercase">
                    Contato com o Devedor Fiduciante
                  </div>
                  <div className="mb-2 text-xs leading-relaxed text-[#0f1c2c]/70">
                    Informações de contato disponíveis ao escritório contratante sob política de uso
                    restrito, exclusivamente para fins de oferta de assistência jurídica.
                  </div>
                  <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-[#0f1c2c]/50 uppercase">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
                    Acesso liberado mediante contrato
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <button
                    className="w-full py-3 text-[10px] font-bold tracking-[0.25em] text-[#0f1c2c] uppercase transition-opacity hover:opacity-80"
                    style={{
                      background: "linear-gradient(135deg, #C9A84C 0%, #e6c364 100%)",
                    }}
                    data-testid="button-dossie-abrir"
                  >
                    Abrir Procedimento
                  </button>
                </div>
              </div>

              {/* Right column — info */}
              <div className="flex flex-col justify-between gap-6 lg:col-span-2">
                <div className="text-base leading-relaxed text-[#fcf9f3]/60">
                  Cada ficha consolida os dados objetivos do procedimento — fase, prazos, credor e
                  imóvel — para que o escritório contratante avalie o caso e decida pela oferta de
                  assistência jurídica com base técnica.
                </div>
                <div className="space-y-0">
                  {LEAD_FEATURES.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 border-b border-[#fcf9f3]/10 py-4"
                    >
                      <div
                        className="h-4 w-[3px] flex-shrink-0"
                        style={{
                          background: "linear-gradient(180deg, #C9A84C 0%, #e6c364 100%)",
                        }}
                      />
                      <span className="text-sm text-[#fcf9f3]/75">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-[#16263b] p-5">
                  <div className="mb-2 text-[9px] font-bold tracking-[0.25em] text-[#fcf9f3]/30 uppercase">
                    Cobertura Nacional
                  </div>
                  <div className="font-mono text-sm leading-relaxed text-[#fcf9f3]">
                    27 estados · mais de 3.000 cartórios indexados · atualização diária
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FILTROS */}
      <section id="filtros" className="bg-[#f6f3ed] px-6 py-28 md:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-14 flex items-end justify-between">
              <div>
                <div className="mb-3 text-[10px] font-bold tracking-[0.3em] text-[#0f1c2c]/60 uppercase">
                  03 — Personalização
                </div>
                <h2
                  className="leading-tight text-[#0f1c2c]"
                  style={{
                    fontFamily: "'Newsreader Variable', serif",
                    fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
                  }}
                >
                  Só os casos do
                  <br />
                  seu <em>perfil de atuação.</em>
                </h2>
              </div>
              <p className="hidden max-w-xs text-right text-sm leading-relaxed text-[#0f1c2c]/50 md:block">
                Você define o recorte técnico dos procedimentos que quer acompanhar. Apenas casos
                dentro desse escopo chegam até o seu escritório.
              </p>
            </motion.div>

            <div className="space-y-0">
              {FILTERS.map((f, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="group -mx-4 grid gap-4 border-b border-[#0f1c2c]/10 px-4 py-8 transition-colors hover:bg-[#ebe8e2] md:grid-cols-3 md:gap-8"
                >
                  <div>
                    <div className="text-base font-semibold text-[#0f1c2c]">{f.label}</div>
                    <div className="mt-1 font-mono text-xs text-[#C9A84C]">{f.detail}</div>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm leading-relaxed text-[#0f1c2c]/60">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* REINCIDÊNCIA */}
      <section className="overflow-hidden bg-[#0f1c2c] px-6 py-28 md:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-14">
              <div className="mb-3 text-[10px] font-bold tracking-[0.3em] text-[#fcf9f3]/55 uppercase">
                04 — Urgência Processual
              </div>
              <h2
                className="max-w-2xl leading-tight text-[#fcf9f3]"
                style={{
                  fontFamily: "'Newsreader Variable', serif",
                  fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
                }}
              >
                A defesa técnica é mais
                <br />
                necessária nas <em>intimações finais.</em>
              </h2>
            </motion.div>

            <div className="grid items-start gap-12 lg:grid-cols-2">
              <motion.div variants={fadeUp}>
                <p className="mb-6 text-base leading-relaxed text-[#fcf9f3]/65 md:text-lg">
                  A 1ª intimação concede prazo amplo para regularização administrativa do débito
                  diretamente com o credor. Já na 2ª e 3ª intimações, o prazo de purgação da mora
                  previsto no art. 26 da Lei 9.514/1997 se encurta, e a defesa técnica do devedor
                  fiduciante passa a ser determinante para evitar a consolidação da propriedade.
                </p>
                <p className="mb-10 text-base leading-relaxed text-[#fcf9f3]/65 md:text-lg">
                  Rastreamos a sequência de intimações sobre o mesmo imóvel para que seu escritório
                  identifique os procedimentos em que a janela para purgação ainda existe — mas está
                  estreitando — e onde a presença de um advogado especializado faz mais diferença.
                </p>
                <div className="bg-[#16263b] p-6">
                  <div className="mb-4 text-[9px] font-bold tracking-[0.25em] text-[#fcf9f3]/55 uppercase">
                    Por que isso importa para a atuação técnica
                  </div>
                  <div className="text-sm leading-relaxed text-[#fcf9f3]/75">
                    Procedimentos com{" "}
                    <span className="font-semibold text-[#e6c364]">2ª ou 3ª intimação</span>{" "}
                    concentram maior urgência jurídica documentada — o prazo de purgação está
                    reduzido, a complexidade técnica é maior e a assistência jurídica é
                    objetivamente mais necessária.
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-0">
                <div className="mb-4 text-[9px] font-bold tracking-[0.25em] text-[#fcf9f3]/55 uppercase">
                  Linha do Tempo — Imóvel Mat. 84.992 · 4º CRI SP
                </div>
                {TIMELINE.map((ev, i) => (
                  <div key={i} className="relative flex gap-5 pb-0">
                    <div className="flex flex-col items-center">
                      <div
                        className="flex h-7 w-7 flex-shrink-0 items-center justify-center font-mono text-[10px] font-bold"
                        style={{
                          background: !ev.cold
                            ? "linear-gradient(135deg, #C9A84C 0%, #e6c364 100%)"
                            : "transparent",
                          color: !ev.cold ? "#0f1c2c" : "#fcf9f3",
                          border: ev.cold ? "1px solid rgba(252,249,243,0.2)" : "none",
                        }}
                      >
                        {ev.n}
                      </div>
                      {i < 2 && <div className="h-10 w-[1px] bg-[#fcf9f3]/10" />}
                    </div>
                    <div className="pb-8">
                      <div className="mb-0.5 font-mono text-[10px] text-[#fcf9f3]/55">
                        {ev.date}
                      </div>
                      <div
                        className={`mb-1 text-sm font-semibold ${!ev.cold ? "text-[#e6c364]" : "text-[#fcf9f3]/70"}`}
                      >
                        {ev.label}
                      </div>
                      <div className="text-xs leading-relaxed text-[#fcf9f3]/45">{ev.note}</div>
                    </div>
                  </div>
                ))}
                <div className="mt-2 border-l-2 border-[#C9A84C] bg-[#C9A84C]/10 p-4">
                  <div className="mb-1 text-[9px] font-bold tracking-widest text-[#C9A84C] uppercase">
                    Alerta de Prazo Crítico
                  </div>
                  <div className="text-sm text-[#fcf9f3]/80">
                    Procedimento na fase final. Janela para purgação da mora{" "}
                    <span className="font-mono font-bold text-[#e6c364]">15 DIAS</span>.
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ORIGEM DO NOME */}
      <section className="relative overflow-hidden bg-[#fcf9f3] px-6 py-32 md:px-10">
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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div
              variants={fadeUp}
              className="mb-4 text-[10px] font-bold tracking-[0.3em] text-[#0f1c2c]/60 uppercase"
            >
              05 — Origem
            </motion.div>

            <motion.div variants={fadeUp} className="mb-8 flex items-baseline gap-5">
              <span
                className="text-[#0f1c2c]"
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
                className="pb-3 text-[#0f1c2c]/50 italic"
                style={{
                  fontFamily: "'Newsreader Variable', serif",
                  fontSize: "clamp(1rem, 1.4vw, 1.25rem)",
                }}
              >
                /chréos/
              </span>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mb-12 h-[2px] w-16"
              style={{
                background: "linear-gradient(90deg, #C9A84C 0%, #e6c364 100%)",
              }}
            />

            <motion.p
              variants={fadeUp}
              className="mb-12 max-w-3xl leading-[1.5] text-[#0f1c2c]/90"
              style={{
                fontFamily: "'Newsreader Variable', serif",
                fontSize: "clamp(1.25rem, 1.8vw, 1.5rem)",
              }}
            >
              No grego antigo, <strong className="font-semibold">χρέος</strong> significa{" "}
              <strong className="font-semibold">dívida, obrigação, aquilo que é devido</strong>. Era
              a palavra usada para nomear o vínculo entre duas partes — o compromisso pendente que
              une credor e devedor até que seja honrado.
            </motion.p>

            <motion.div variants={fadeUp} className="max-w-3xl border-l-2 border-[#C9A84C]/40 pl-6">
              <p
                className="leading-relaxed text-[#0f1c2c]/75"
                style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)" }}
              >
                É exatamente isso o que fazemos: encontramos, no momento em que surgem, as
                obrigações que precisam ser resolvidas — e{" "}
                <span className="font-medium text-[#0f1c2c]">
                  conectamos quem precisa cobrar ao advogado certo
                </span>{" "}
                para conduzir o caso. Registros públicos viram leads: oportunidades reais de
                trabalho jurídico.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section id="acesso" className="bg-[#0f1c2c] px-6 py-28 md:px-10">
        <div className="mx-auto grid max-w-7xl items-start gap-14 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="mb-8 text-[10px] font-bold tracking-[0.3em] text-[#fcf9f3]/55 uppercase">
              06 — Acesso
            </div>
            <h2
              className="mb-6 leading-tight text-[#fcf9f3]"
              style={{
                fontFamily: "'Newsreader Variable', serif",
                fontSize: "clamp(2.2rem, 4.5vw, 4rem)",
              }}
            >
              Defesa técnica no
              <br />
              momento <em>em que importa.</em>
            </h2>
            <p className="mb-10 max-w-md text-base leading-relaxed text-[#fcf9f3]/55">
              Preencha o formulário ao lado e agende uma conversa. Vamos apresentar casos reais
              publicados na sua comarca e detalhar como a Chreos se integra ao fluxo de trabalho do
              seu escritório.
            </p>
            <div className="space-y-5">
              {CTA_BULLETS.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div
                    className="h-[2px] w-5 flex-shrink-0"
                    style={{
                      background: "linear-gradient(90deg, #C9A84C 0%, #e6c364 100%)",
                    }}
                  />
                  <span className="text-sm tracking-[0.12em] text-[#fcf9f3]/65 uppercase">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <CTAForm />
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
