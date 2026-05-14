export const TICKER_ITEMS = [
  { matricula: "84.992", cartorio: "4º CRI São Paulo",       devedor: "C. E. Mendes",    valor: "R$ 142.850", credor: "Itaú S.A.",      estado: "SP" },
  { matricula: "31.774", cartorio: "2º CRI Curitiba",        devedor: "M. R. Carvalho",  valor: "R$ 298.000", credor: "Bradesco",       estado: "PR" },
  { matricula: "56.120", cartorio: "1º CRI Belo Horizonte",  devedor: "F. L. Assis",     valor: "R$ 187.440", credor: "Caixa Econômica",estado: "MG" },
  { matricula: "12.331", cartorio: "3º CRI Porto Alegre",    devedor: "G. S. Motta",     valor: "R$ 412.900", credor: "Santander",      estado: "RS" },
  { matricula: "79.882", cartorio: "5º CRI Rio de Janeiro",  devedor: "A. T. Ferreira",  valor: "R$ 533.700", credor: "Itaú S.A.",      estado: "RJ" },
  { matricula: "22.045", cartorio: "1º CRI Fortaleza",       devedor: "P. B. Nogueira",  valor: "R$ 95.200",  credor: "Bradesco",       estado: "CE" },
];

export const STATS = [
  { n: 3847, suf: "",  label: "Editais processados por semana" },
  { n: 214,  suf: "+", label: "Escritórios atendidos" },
  { n: 27,   suf: "",  label: "Estados monitorados" },
  { n: 92,   suf: "%", label: "Leads com contato enriquecido" },
];

export const STEPS = [
  {
    n: "I",
    tag: "DETECÇÃO",
    title: "Identificamos quem vai perder o imóvel",
    sub: "Monitoramento automático",
    body: "A Chreos monitora diariamente as publicações oficiais do registro de imóveis e detecta automaticamente as pessoas que estão inadimplentes e com risco real de perder sua propriedade.",
  },
  {
    n: "II",
    tag: "ORGANIZAÇÃO",
    title: "Organizamos todas as informações do caso",
    sub: "Perfil completo do potencial cliente",
    body: "Cada lead chega com nome completo, banco credor, valor da dívida, endereço e número da matricula do imóvel — tudo o que seu escritório precisa para decidir se vale a pena entrar em contato.",
  },
  {
    n: "III",
    tag: "CONTATO",
    title: "Buscamos o contato direto da pessoa",
    sub: "WhatsApp · Telefone · E-mail",
    body: "Localizamos o WhatsApp, telefone e e-mail atualizado de cada pessoa. Seu escritório não precisa procurar nada — basta abrir o lead e já começar a conversa.",
  },
  {
    n: "IV",
    tag: "ENTREGA",
    title: "Você recebe só o que faz sentido para você",
    sub: "Entrega personalizada",
    body: "Definimos juntos o perfil de cliente que você quer receber — cidade, tamanho da dívida, banco, número de editais. Seu escritório recebe apenas leads dentro do que você realmente atende.",
  },
];

export const LEAD_FEATURES = [
  "Nome completo e perfil do potencial cliente",
  "Endereço do imóvel e banco credor",
  "Valor da dívida e prazo restante para agir",
  "WhatsApp, telefone e e-mail já localizados",
  "Quantas vezes essa pessoa já foi notificada",
];

export const FILTERS = [
  {
    label: "Onde fica o imóvel",
    detail: "Estado · Cidade · Região",
    desc: "Receba apenas leads de clientes com imóveis na área que o seu escritório atende. Sem leads de fora da sua praça.",
  },
  {
    label: "Tamanho da dívida",
    detail: "R$ mínimo — R$ máximo",
    desc: "Defina o porte dos casos que fazem sentido para você. Quer focar em imóveis de alto padrão? Ou prefere volume com dívidas menores? Você escolhe.",
  },
  {
    label: "Há quanto tempo está em atraso",
    detail: "Casos recentes ou situações críticas",
    desc: "Casos mais recentes têm janela maior para negociar. Casos mais antigos costumam ter maior urgência e disposição para contratar. Filtre conforme sua estratégia.",
  },
  {
    label: "Qual banco está cobrando",
    detail: "Itaú · Bradesco · Caixa · Santander · outros",
    desc: "Se você tem experiência com um banco específico ou prefere evitar algum, basta configurar. Você inclui ou exclui qualquer credor.",
  },
  {
    label: "Quantas vezes já foi notificado",
    detail: "1ª · 2ª · 3ª vez em diante",
    desc: "Quanto mais vezes uma pessoa foi notificada sobre o mesmo imóvel, maior a chance de fechar. Filtre pelos casos mais quentes para maximizar sua conversão.",
  },
];

export const TIMELINE = [
  { n: "01", date: "14 Mar 2024", label: "1ª Intimação", note: "Devedor notificado pela primeira vez.", cold: true },
  { n: "02", date: "02 Ago 2024", label: "2ª Intimação", note: "Segunda notificação sobre o mesmo imóvel.",    cold: true },
  { n: "03", date: "18 Jan 2025", label: "3ª Intimação", note: "Situação crítica, prazo de 15 dias para purgar a mora. Lead classificado como Alta Urgência.",  cold: false },
];

export const TESTIMONIALS = [
  // {
  //   quote: "Reduzimos nosso custo de aquisição a uma fração do que era antes. A Chreos não entrega contatos — entrega clientes que já precisam contratar.",
  //   author: "Dr. Roberto Junqueira",
  //   firm: "Junqueira & Associados",
  //   location: "São Paulo, SP",
  //   stat: "−74% CAC",
  // },
  {
    quote: "A funcionalidade de reincidência mudou completamente nossa tese comercial. Hoje abordamos o devedor quando ele já esgotou todas as opções administrativas.",
    author: "Dra. Helena Valente",
    firm: "Valente Imobiliário",
    location: "Curitiba, PR",
    stat: "+3× conversão",
  },
  // {
  //   quote: "Antes, dependíamos de tráfego pago e indicações. Agora operamos com dados. A diferença é brutal — os clientes que chegam já sabem que precisam de nós.",
  //   author: "Dr. Marcus Braga",
  //   firm: "Braga Direito Real",
  //   location: "Belo Horizonte, MG",
  //   stat: "2× faturamento",
  // },
  {
    quote: "O filtro por faixa de dívida nos permitiu focar em imóveis de alto padrão. Triplicamos o ticket médio dos nossos casos em 4 meses.",
    author: "Dra. Camila Reys",
    firm: "Reys & Figueiredo",
    location: "Rio de Janeiro, RJ",
    stat: "3× ticket médio",
  },
];

export const CTA_BULLETS = [
  "Demonstração ao vivo com leads reais da sua região",
  "Configuração do seu perfil de cliente ideal",
  "Entrega personalizada e suporte contínuo",
  "Sem contrato longo — comece quando quiser",
];
