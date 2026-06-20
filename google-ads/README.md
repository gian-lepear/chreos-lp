# Google Ads — Chreos (reestruturação de foco)

Plano para tirar o foco do termo técnico **"alienação fiduciária"** (que mira o
**devedor** — o produto, não o comprador) e reconstruir a conta em torno do
**advogado-comprador**, com o mercado mais abrangente ("leilão de imóvel",
"execução extrajudicial", "captação de clientes").

> **O erro que estava queimando verba:** comprar `alienação fiduciária`,
> `sustar leilão`, `purgar a mora`, `fui notificado`, `o que fazer` etc. atrai
> **devedores tentando salvar a própria casa** — o lado errado do mercado. Isso
> é o lead da Chreos, não o cliente que compra leads.

## Arquivos
- **`negativos-compartilhados.txt`** — ~85 termos. Crie uma **Lista de palavras
  negativas compartilhada** no Google Ads e cole tudo. Aplique a **TODAS** as
  campanhas. É a correção mais importante.
- **`keywords.csv`** — importável no **Google Ads Editor** (colunas Campaign /
  Ad group / Keyword / Match type).
- **`README.md`** (este) — estrutura, lances, anúncios e cautelas OAB.

---

## Público-alvo
**Advogado / escritório** que quer fluxo de clientes (direito imobiliário /
contencioso). O devedor prestes a perder o imóvel é o **produto**, nunca o
comprador. A intenção do anúncio é *"advogado quer mais clientes"*, jamais
*"pessoa quer salvar a casa"*.

- **Geo:** Brasil inteiro (a Chreos entrega em todos os estados).
- **Audiências (em Observação primeiro, depois suba o lance):** In-market
  Business/Legal Services; segmentos personalizados com `oab.org.br`,
  `jusbrasil.com.br`, `software jurídico`, `marketing jurídico`, `CRM advocacia`.
- **Customer Match:** se houver lista de e-mails de advogados, suba.

## Estrutura de campanhas (5)
| # | Campanha | Match | Budget | Papel |
|---|---|---|---|---|
| 01 | **Advogado-Leads** | Phrase + Exact | **60-70%** + maior lance | Comprador explícito — converte |
| 02 | **Prática-Qualificador** | Phrase | médio | Nicho, **sempre** com qualificador de comprador colado |
| 03 | **Marketing-Jurídico** | Phrase | médio | Intenção adjacente de comprador |
| 04 | **Marca-Concorrente** | Exact | baixo | Defensivo / conquista |
| 05 | **Broad-Discovery** | Broad | baixo, capado | Só com Smart Bidding + negativos + audiência |

1 tema por grupo de anúncios · 1-2 RSAs por grupo.

## Regras de match-type
- **Lidere com Phrase + Exact.** Controle apertado, convertem, raramente pegam devedor.
- **Broad só** na campanha 05, com lances inteligentes por conversão + lista de
  negativos + sinais de audiência de advogado.
- ⚠️ **Termo "puro" NUNCA roda sozinho** (`[alienação fiduciária]`, `[sustar
  leilão]`, `[execução extrajudicial]`). São ímãs de devedor. Sempre colados a
  um qualificador de comprador (`leads de`, `clientes para`, `como captar`).

## Lances / otimização
- Comece em **Maximizar cliques** com **CPC máx. limitado** pra juntar dados.
- Migre pra **Maximizar conversões / valor** quando o pixel tiver volume limpo.
- **Revise o relatório de termos de pesquisa SEMANALMENTE** no 1º mês. Todo
  termo de devedor/DIY/emprego → joga no negativo.

## Conversão (alinhado com a mudança no site)
- **Conversão primária = envio do formulário** (agora captura o lead via
  Web3Forms server-side, antes de abrir o WhatsApp). Sinal limpo p/ Smart Bidding.
- **Abertura do WhatsApp = micro-conversão** (`whatsapp_open`), não conversão —
  <~50% dos cliques wa.me viram conversa real.
- Crie a ação de conversão "Envio de formulário" no Google Ads e marque como
  primária; deixe a de WhatsApp como secundária/observação.

## Anúncios responsivos (RSA) — exemplos
Títulos ≤30 caracteres · descrições ≤90. Misture 8-12 títulos por RSA.

**RSA A — foco leads/imobiliário**
- Títulos: `Leads para Advogados` · `Clientes de Direito Imobiliário` · `Leads de Leilão de Imóveis` · `Um Passo à Frente do Leilão` · `Cliente na Fase de Intimação` · `Sem Mensalidade, Sem Fidelidade` · `Lead Exclusivo da Sua Região` · `Para Escritórios de Advocacia` · `Nome, Telefone e WhatsApp` · `Demonstração Sem Compromisso`
- Descrições: `Identificamos casos de imóvel em execução e entregamos o contato ao seu escritório.` · `Receba leads de direito imobiliário por região, sem mensalidade e sem fidelidade.` · `Fale com o cliente ainda na intimação, antes do leilão. Peça uma demonstração.` · `Cada lead vendido uma única vez, só para o seu escritório.`

**RSA B — foco captação**
- Títulos: `Captação de Clientes` · `Mais Casos Imobiliários` · `Leads Qualificados Advocacia` · `Para Advogados do Nicho` · `Entrega por WhatsApp` · `Casos Antes do Leilão` · `Comece pela Sua Região` · `Conheça a Metodologia` · `Cadastre Seu Escritório` · `Fluxo Contínuo de Casos`
- Descrições: `Direcionamos casos de imóveis em execução extrajudicial a escritórios de advocacia.` · `Você escolhe a região e o tipo de caso. Receba o contato qualificado no WhatsApp.` · `Atue na fase inicial do procedimento, quando há mais opções jurídicas. Saiba como.` · `Sem mensalidade e sem fidelidade. Solicite uma demonstração da plataforma Chreos.`

**Sitelinks/extensões:** Como Funciona · Seus Leads · Exclusividade · Demonstração.

## Cautelas OAB (Provimento 205/2021)
A Chreos é fornecedora de tecnologia/leads, não advogada — mas o **comprador é
advogado** e rejeita qualquer cheiro de captação/mercantilização.
- ❌ Sem promessa de resultado (`ganhe a causa`, `recupere o imóvel garantido`).
- ❌ Sem gancho de honorário/preço/desconto.
- ❌ Sem "grátis" no copy (lê como serviço jurídico gratuito).
- ❌ Sem urgência alarmista.
- ✅ Tom B2B sóbrio: leads, captação, clientes, casos, plataforma, metodologia,
  demonstração.
- ✅ **Exclusividade** ("cada lead vendido uma única vez") é o argumento mais
  forte E o mais alinhado à OAB (que veda o mesmo cliente oferecido a vários).
