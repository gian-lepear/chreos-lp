import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, Linkedin } from "lucide-react";

const YEAR = new Date().getFullYear();
const LAST_UPDATE = "20 de junho de 2026";
const HOME_ACESSO = `${import.meta.env.BASE_URL}#acesso`;

const PAGE_TITLE = "Política de Privacidade | Chreos";
const PAGE_DESCRIPTION =
  "Política de Privacidade da Chreos: como coletamos, usamos e protegemos os dados dos advogados e escritórios que solicitam acesso à plataforma.";
const CANONICAL = "https://chreos.com.br/privacidade";

const BREADCRUMB = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: "https://chreos.com.br/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Política de Privacidade",
      item: CANONICAL,
    },
  ],
};

export default function Privacy() {
  // This SPA ships a single static <head> tuned for the home page; patch the
  // title/description/canonical for /privacidade and restore them on unmount.
  useEffect(() => {
    const prevTitle = document.title;
    document.title = PAGE_TITLE;

    const desc = document.querySelector('meta[name="description"]');
    const prevDesc = desc?.getAttribute("content") ?? null;
    desc?.setAttribute("content", PAGE_DESCRIPTION);

    const canonical = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonical?.getAttribute("href") ?? null;
    canonical?.setAttribute("href", CANONICAL);

    return () => {
      document.title = prevTitle;
      if (prevDesc !== null) desc?.setAttribute("content", prevDesc);
      if (prevCanonical !== null) canonical?.setAttribute("href", prevCanonical);
    };
  }, []);

  return (
    <div
      className="min-h-screen bg-cream text-navy"
      style={{ fontFamily: "'Inter Variable', sans-serif" }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }}
      />
      {/* NAV */}
      <nav
        className="fixed top-0 right-0 left-0 z-50"
        style={{
          background: "rgba(15,28,44,0.92)",
          backdropFilter: "blur(16px)",
        }}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:h-24 md:px-10">
          <Link
            href="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
            style={{ fontFamily: "'Newsreader Variable', serif" }}
            className="text-4xl font-semibold tracking-tight text-cream md:text-5xl"
          >
            Chreos
          </Link>
          <Link
            href="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
            className="inline-flex items-center gap-2 text-xs tracking-[0.15em] text-cream/60 uppercase transition-colors hover:text-cream"
          >
            <ArrowLeft size={14} />
            Voltar
          </Link>
        </div>
      </nav>

      {/* HEADER */}
      <section className="bg-navy px-6 pt-40 pb-20 md:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-[10px] font-bold tracking-[0.3em] text-cream/55 uppercase">
            Documento Legal
          </div>
          <h1
            className="mb-6 leading-tight text-cream"
            style={{
              fontFamily: "'Newsreader Variable', serif",
              fontSize: "clamp(2.4rem, 5vw, 4.5rem)",
            }}
          >
            Política de <em>Privacidade</em>
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-cream/55">
            Como a Chreos coleta, utiliza e protege os dados pessoais dos visitantes e advogados que
            solicitam acesso à plataforma, em conformidade com a Lei Geral de Proteção de Dados (Lei
            nº 13.709/2018).
          </p>
          <div className="mt-10 font-mono text-[10px] tracking-[0.2em] text-cream/60 uppercase">
            Última atualização: {LAST_UPDATE}
          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-4xl space-y-16">
          <Block number="01" title="Quem somos">
            <p>
              A Chreos é um produto da GLPA Data Services LTDA (CNPJ 55.704.724/0001-08), empresa de
              tecnologia da informação. A plataforma monitora publicações oficiais (como o Diário
              Registral) para identificar editais de alienação fiduciária e fornecer a escritórios de
              advocacia inteligência de dados de fontes públicas sobre imóveis em execução
              extrajudicial. A Chreos não presta serviços jurídicos.
            </p>
            <p>
              Esta Política de Privacidade descreve como tratamos os dados pessoais coletados por
              meio do site institucional e do formulário de solicitação de acesso à plataforma.
            </p>
          </Block>

          <Block number="02" title="Dados que coletamos">
            <p>
              Quando você preenche o formulário de contato, coletamos as seguintes informações
              fornecidas voluntariamente:
            </p>
            <ul>
              <li>Nome completo;</li>
              <li>Endereço de e-mail profissional (opcional);</li>
              <li>Estado de atuação (UF).</li>
            </ul>
            <p>
              O envio do formulário redireciona você ao WhatsApp para falar com a nossa equipe. Se
              optar por nos contatar por esse canal, passamos a tratar também o seu número de
              WhatsApp e o conteúdo das mensagens que você nos enviar.
            </p>
            <p>
              Adicionalmente, dados técnicos podem ser coletados de forma automática — como endereço
              IP e informações do dispositivo e do navegador — pelo provedor de hospedagem do site e,
              mediante o seu consentimento, pelas ferramentas de medição de publicidade do Google Ads
              (ver seção 08), com a finalidade de operar, medir e proteger o site.
            </p>
          </Block>

          <Block number="03" title="Finalidades do tratamento">
            <p>Os dados coletados são utilizados para:</p>
            <ul>
              <li>
                Entrar em contato com você para apresentar a plataforma, agendar uma demonstração e
                responder à sua solicitação de acesso;
              </li>
              <li>
                Enviar a mensagem inicial via WhatsApp por meio do redirecionamento automático após
                o envio do formulário;
              </li>
              <li>
                Avaliar a aderência do seu perfil profissional aos serviços oferecidos pela Chreos;
              </li>
              <li>Cumprir obrigações legais, regulatórias e contratuais aplicáveis;</li>
              <li>
                Aprimorar o site, os conteúdos, as funcionalidades e a comunicação com advogados e
                escritórios.
              </li>
            </ul>
          </Block>

          <Block number="04" title="Base legal (LGPD)">
            <p>
              O tratamento dos seus dados pessoais é realizado com fundamento nas seguintes bases
              legais previstas na Lei nº 13.709/2018:
            </p>
            <ul>
              <li>
                <strong>Consentimento</strong> do titular ao submeter voluntariamente o formulário
                de contato;
              </li>
              <li>
                <strong>Execução de procedimentos preliminares relacionados a contrato</strong> a
                pedido do titular;
              </li>
              <li>
                <strong>Legítimo interesse</strong> da Chreos para apresentar serviços de interesse
                profissional do destinatário, sempre respeitando seus direitos e liberdades
                fundamentais.
              </li>
            </ul>
          </Block>

          <Block number="05" title="Compartilhamento de dados">
            <p>
              A Chreos não vende e não cede seus dados pessoais a terceiros para fins de marketing.
              Os dados podem ser compartilhados, de forma estritamente necessária, com:
            </p>
            <ul>
              <li>
                Provedores de infraestrutura e hospedagem que processam dados em nosso nome
                (operadores), sob obrigações de confidencialidade;
              </li>
              <li>
                Plataformas de comunicação utilizadas no contato comercial (como WhatsApp), conforme
                escolha do titular ao enviar o formulário;
              </li>
              <li>
                Autoridades públicas, quando exigido por lei, ordem judicial ou requisição
                regulatória.
              </li>
            </ul>
          </Block>

          <Block number="06" title="Dados de terceiros tratados pela plataforma">
            <p>
              Além dos dados coletados diretamente dos visitantes deste site, a plataforma Chreos
              processa informações pessoais referentes a devedores identificados em procedimentos de
              alienação fiduciária. Esses dados são obtidos exclusivamente a partir de{" "}
              <strong>fontes públicas oficiais</strong>, em especial publicações do Diário Registral
              e atos de registro praticados por cartórios de registro de imóveis, tornados públicos
              por força de lei.
            </p>

            <p>
              <strong>Base legal aplicável.</strong> O tratamento desses dados está fundamentado,
              conforme o caso, nas seguintes hipóteses do art. 7º da LGPD:
            </p>
            <ul>
              <li>
                <strong>Art. 7º, IX — legítimo interesse</strong> da Chreos na identificação e
                organização de informações de fontes públicas sobre imóveis em procedimentos de
                execução extrajudicial de garantia imobiliária, e dos escritórios contratantes no
                exercício regular da advocacia, mediante balanceamento permanente com os direitos e
                liberdades fundamentais dos titulares;
              </li>
              <li>
                <strong>Art. 7º, II — cumprimento de obrigação legal ou regulatória</strong> pelo
                escritório contratante, no exercício regular da advocacia disciplinado pela Lei nº
                8.906/1994 (Estatuto da OAB) e pelo Código de Ética e Disciplina da OAB;
              </li>
              <li>
                <strong>Art. 7º, VI — exercício regular de direitos</strong> em procedimentos
                contratuais e administrativos relativos à alienação fiduciária regulada pela Lei nº
                9.514/1997.
              </li>
            </ul>
            <p>
              A circunstância de o dado constar de fonte pública não dispensa, por si só, a
              observância dos princípios da LGPD (art. 7º, §§ 3º e 4º): o tratamento se mantém
              limitado às finalidades acima, com preservação dos direitos do titular e respeito aos
              seus interesses legítimos.
            </p>

            <p>
              <strong>Papéis e responsabilidades.</strong> A Chreos atua como{" "}
              <strong>controladora</strong> em relação à coleta, organização, enriquecimento e
              disponibilização dos dados aos escritórios contratantes. A partir do momento em que
              esses dados são acessados pelo escritório no exercício regular e independente da
              advocacia, o escritório passa a atuar como{" "}
              <strong>controlador independente</strong> daquele tratamento, assumindo, de forma
              autônoma, todas as obrigações decorrentes da LGPD perante os titulares — incluindo,
              sem limitação:
            </p>
            <ul>
              <li>Fornecimento de informações claras e adequadas sobre o tratamento (art. 9º);</li>
              <li>
                Atendimento aos direitos do titular (arts. 17 a 22), inclusive oposição, eliminação
                e revisão de decisões automatizadas;
              </li>
              <li>
                Adoção de medidas de segurança, sigilo profissional e governança compatíveis com a
                sensibilidade do contexto (art. 46);
              </li>
              <li>
                Comunicação de incidentes de segurança à ANPD e aos titulares, quando aplicável
                (art. 48).
              </li>
            </ul>
            <p>
              As condições, limites e salvaguardas para o uso dos dados pelos escritórios
              contratantes — incluindo proibição de revenda, reaproveitamento fora da finalidade
              contratada e prazos de retenção — estão previstos em{" "}
              <strong>contrato específico</strong> firmado entre a Chreos e cada escritório, com
              cláusulas expressas de proteção de dados.
            </p>

            <p>
              <strong>Direitos dos titulares devedores.</strong> Pessoas cujos dados sejam tratados
              nesta condição podem, a qualquer momento, exercer perante a Chreos os direitos
              previstos no art. 18 da LGPD, em especial: confirmação, acesso, correção,
              anonimização, oposição ao tratamento fundado em legítimo interesse e solicitação de
              eliminação. Os pedidos podem ser encaminhados pelos canais indicados na seção 10 desta
              Política e serão respondidos no prazo legal.
            </p>
          </Block>

          <Block number="07" title="Armazenamento e segurança">
            <p>
              Adotamos medidas técnicas e administrativas para proteger seus dados contra acessos
              não autorizados, perda, destruição ou alteração indevida, incluindo: controle de
              acesso, criptografia em trânsito, monitoramento de ambientes e políticas internas de
              tratamento de informações.
            </p>
            <p>
              Os dados serão mantidos pelo tempo necessário ao cumprimento das finalidades para as
              quais foram coletados ou por prazo superior, se exigido por obrigação legal ou
              regulatória.
            </p>
          </Block>

          <Block number="08" title="Cookies e consentimento">
            <p>
              O site da Chreos utiliza cookies e tecnologias similares para funcionamento básico e
              para medição de campanhas publicitárias. Utilizamos especificamente o{" "}
              <strong>Google Ads</strong> (Google LLC) para mensurar conversões — ou seja, para
              identificar quando uma visita originada de um anúncio resulta em contato pelo
              formulário. Para isso, o Google pode gravar cookies de publicidade em seu navegador,
              tais como:
            </p>
            <ul>
              <li>
                <strong>_gcl_*</strong> — atribuição de conversões do Google Ads;
              </li>
              <li>
                cookies dos domínios <strong>google.com</strong> e{" "}
                <strong>doubleclick.net</strong> — medição e personalização de anúncios.
              </li>
            </ul>
            <p>
              Esses cookies de publicidade <strong>só são ativados mediante o seu consentimento</strong>.
              Ao acessar o site, exibimos um aviso no qual você pode <strong>Aceitar</strong> ou{" "}
              <strong>Recusar</strong>. Enquanto você não aceita, nenhum cookie de anúncio é gravado
              (adotamos o Consent Mode do Google, com todos os sinais de publicidade negados por
              padrão).
            </p>
            <p>
              Você pode <strong>revogar o consentimento</strong> a qualquer momento limpando os dados
              do site no seu navegador (o aviso voltará a ser exibido) ou configurando o navegador
              para bloquear cookies. Saiba mais nas políticas do Google em{" "}
              <a
                href="https://policies.google.com/technologies/cookies"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-[#0f1c2c] underline underline-offset-2"
              >
                policies.google.com/technologies/cookies
              </a>
              .
            </p>
          </Block>

          <Block number="09" title="Direitos do titular">
            <p>
              Nos termos da LGPD, você pode, a qualquer momento, exercer os seguintes direitos em
              relação aos seus dados pessoais:
            </p>
            <ul>
              <li>Confirmar a existência de tratamento;</li>
              <li>Acessar os dados;</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
              <li>
                Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários, excessivos
                ou tratados em desconformidade com a lei;
              </li>
              <li>Solicitar a portabilidade dos dados a outro fornecedor de serviço ou produto;</li>
              <li>Solicitar a eliminação dos dados tratados com base no seu consentimento;</li>
              <li>
                Obter informação sobre as entidades públicas e privadas com as quais houve uso
                compartilhado de dados;
              </li>
              <li>
                Ser informado sobre a possibilidade de não fornecer consentimento e sobre as
                consequências da negativa;
              </li>
              <li>Revogar o consentimento.</li>
            </ul>
          </Block>

          <Block number="10" title="Canal de contato e exercício de direitos">
            <p>
              Para exercer os direitos descritos acima, esclarecer dúvidas ou apresentar reclamações
              sobre o tratamento dos seus dados pessoais, entre em contato conosco por meio do
              formulário disponível na página inicial, na seção{" "}
              <a href={HOME_ACESSO} className="font-semibold underline">
                Acesso
              </a>
              .
            </p>
          </Block>

          <Block number="11" title="Alterações desta política">
            <p>
              Esta Política de Privacidade poderá ser atualizada a qualquer tempo para refletir
              mudanças regulatórias, técnicas ou de negócio. A versão vigente estará sempre
              disponível nesta página, com indicação da data da última atualização no topo do
              documento.
            </p>
          </Block>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy-deep px-6 py-12 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-8 border-b border-cream/10 pb-10 md:flex-row md:items-end">
            <div>
              <div
                className="mb-1 text-xl font-semibold tracking-tight text-cream"
                style={{ fontFamily: "'Newsreader Variable', serif" }}
              >
                Chreos
              </div>
              <div className="text-xs tracking-widest text-cream/35 uppercase">
                Leads quentes para advogados
              </div>
              <a
                href="https://www.linkedin.com/in/giancarlo-lester/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="LinkedIn do fundador (abre em nova aba)"
                className="mt-2 -ml-2 inline-flex h-9 w-9 items-center justify-center text-cream/60 transition-colors hover:text-cream/70"
              >
                <Linkedin size={18} aria-hidden />
              </a>
            </div>
            <div className="flex gap-8 text-xs tracking-[0.15em] text-cream/60 uppercase">
              <Link href="/privacidade" className="transition-colors hover:text-cream/80">
                Privacidade
              </Link>
              <a href={HOME_ACESSO} className="transition-colors hover:text-cream/80">
                Contato
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-2 pt-6 md:flex-row md:items-center md:justify-between">
            <div className="text-[10px] tracking-[0.2em] text-cream/50 uppercase">
              © {YEAR} Chreos. Todos os direitos reservados.
            </div>
            <div className="text-[10px] tracking-[0.15em] text-cream/55 uppercase">
              GLPA Data Services LTDA · CNPJ 55.704.724/0001-08
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Block({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-l-2 border-gold pl-6 md:pl-10">
      <div className="mb-3 text-[10px] font-bold tracking-[0.3em] text-navy/55 uppercase">
        {number} — Seção
      </div>
      <h2
        className="mb-6 leading-tight text-navy"
        style={{
          fontFamily: "'Newsreader Variable', serif",
          fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
        }}
      >
        {title}
      </h2>
      <div className="space-y-4 text-base leading-relaxed text-navy/75 [&_li]:ml-6 [&_li]:list-disc [&_strong]:text-navy [&_ul]:space-y-2">
        {children}
      </div>
    </div>
  );
}
