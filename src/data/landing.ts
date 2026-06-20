export const TICKER_ITEMS = [
  {
    matricula: "84.992",
    cartorio: "4º CRI São Paulo",
    devedor: "C. E. Mendes",
    valor: "R$ 142.850",
    credor: "Itaú S.A.",
    estado: "SP",
  },
  {
    matricula: "31.774",
    cartorio: "2º CRI Curitiba",
    devedor: "M. R. Carvalho",
    valor: "R$ 298.000",
    credor: "Bradesco",
    estado: "PR",
  },
  {
    matricula: "56.120",
    cartorio: "1º CRI Belo Horizonte",
    devedor: "F. L. Assis",
    valor: "R$ 187.440",
    credor: "Caixa Econômica",
    estado: "MG",
  },
  {
    matricula: "12.331",
    cartorio: "3º CRI Porto Alegre",
    devedor: "G. S. Motta",
    valor: "R$ 412.900",
    credor: "Santander",
    estado: "RS",
  },
  {
    matricula: "79.882",
    cartorio: "5º CRI Rio de Janeiro",
    devedor: "A. T. Ferreira",
    valor: "R$ 533.700",
    credor: "Itaú S.A.",
    estado: "RJ",
  },
  {
    matricula: "22.045",
    cartorio: "1º CRI Fortaleza",
    devedor: "P. B. Nogueira",
    valor: "R$ 95.200",
    credor: "Bradesco",
    estado: "CE",
  },
];

export const STATS = [
  { v: "Brasil inteiro", label: "Fontes públicas em todos os estados" },
  { v: "Fontes oficiais", label: "Diários registrais e editais" },
  { v: "Pay-per-lead", label: "Sem mensalidade, sem fidelidade" },
  { v: "Contato direto", label: "WhatsApp, telefone e e-mail" },
];

export const STEPS = [
  {
    n: "I",
    tag: "DETECÇÃO",
    title: "Identificamos quem vai perder o imóvel",
    sub: "Monitoramento de fontes oficiais",
    body: "Monitoramos as publicações oficiais do registro de imóveis e detectamos as pessoas que estão inadimplentes e com risco real de perder sua propriedade.",
  },
  {
    n: "II",
    tag: "ORGANIZAÇÃO",
    title: "Organizamos todas as informações do caso",
    sub: "Perfil completo do potencial cliente",
    body: "Cada lead chega com nome completo, banco credor, valor da dívida, endereço e número da matrícula do imóvel — tudo o que seu escritório precisa para decidir se vale a pena entrar em contato.",
  },
  {
    n: "III",
    tag: "CONTATO",
    title: "Buscamos o contato direto da pessoa",
    sub: "WhatsApp · Telefone · E-mail",
    body: "Localizamos o WhatsApp, telefone e e-mail atualizados de cada pessoa. Seu escritório não precisa procurar nada — basta abrir o lead e já começar a conversa.",
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
  {
    n: "01",
    date: "14 Out 2025",
    label: "1ª Intimação",
    note: "Devedor notificado pela primeira vez.",
    cold: true,
  },
  {
    n: "02",
    date: "02 Fev 2026",
    label: "2ª Intimação",
    note: "Segunda notificação sobre o mesmo imóvel.",
    cold: true,
  },
  {
    n: "03",
    date: "18 Mai 2026",
    label: "3ª Intimação",
    note: "Situação crítica, prazo de 15 dias para purgar a mora. Lead classificado como Alta Urgência.",
    cold: false,
  },
];

export const INVESTMENT = [
  {
    label: "Pague por lead",
    detail: "Sem mensalidade · Sem adesão",
    desc: "Você paga apenas pelos leads que recebe. Não existe mensalidade, taxa de adesão ou custo escondido.",
  },
  {
    label: "Preço definido pelos seus filtros",
    detail: "Perfil sob medida",
    desc: "O valor por lead é definido junto com você, de acordo com o perfil configurado — região, faixa de dívida, urgência. Quanto mais específico o filtro, mais qualificado o lead.",
  },
  {
    label: "Sem fidelidade",
    detail: "Comece e pause quando quiser",
    desc: "Você começa quando quiser, pausa quando quiser e ajusta seu perfil a qualquer momento. O risco é nosso, não seu.",
  },
];

export const FAQ = [
  {
    q: "De onde vêm os dados? Isso é legal?",
    a: "Todas as informações vêm de fontes públicas oficiais — diários de registro de imóveis e editais de leilão publicados por cartórios de todo o Brasil. Nosso trabalho é monitorar, organizar e enriquecer registros que já são públicos por lei.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Modelo pay-per-lead: você paga apenas pelos leads que recebe. O valor é definido de acordo com os filtros do seu perfil — não existe mensalidade nem taxa de adesão.",
  },
  {
    q: "Quantos leads posso receber?",
    a: "O volume depende dos filtros configurados e da sua região — perfis mais amplos geram mais leads. Na demonstração mostramos exatamente quanto o seu perfil pode gerar.",
  },
  {
    q: "Existe contrato de fidelidade?",
    a: "Não. Você começa quando quiser, pausa quando quiser e ajusta seu perfil a qualquer momento.",
  },
  {
    q: "Os leads são exclusivos?",
    a: "Você escolhe. A exclusividade é uma opção do seu perfil: leads exclusivos não são entregues a nenhum outro escritório e, por isso, têm valor maior por lead. Definimos juntos o que faz mais sentido para a sua estratégia.",
  },
  {
    q: "Em quanto tempo começo a receber leads?",
    a: "Em poucos dias após a configuração do seu perfil. O prazo exato depende dos filtros escolhidos — perfis mais amplos começam a receber antes; filtros muito específicos podem levar um pouco mais para gerar os primeiros leads.",
  },
];

export const CTA_BULLETS = [
  "Demonstração ao vivo com leads reais da sua região",
  "Configuração do seu perfil de cliente ideal",
  "Entrega personalizada e suporte contínuo",
  "Sem contrato longo — comece quando quiser",
];
