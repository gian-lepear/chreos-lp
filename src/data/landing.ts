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
  { v: "27 estados", label: "Fontes públicas em todo o Brasil" },
  { v: "100% oficiais", label: "Diários registrais e editais" },
  { v: "Pay-per-lead", label: "Sem mensalidade, sem fidelidade" },
  { v: "1 escritório", label: "Cada lead vendido uma única vez" },
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
    desc: "Quanto mais vezes uma pessoa foi notificada sobre o mesmo imóvel, maior a chance de fechar. Filtre pelos casos mais quentes e feche mais contratos.",
  },
];

export const TIMELINE = [
  {
    n: "01",
    date: "11 Jun 2026",
    label: "1ª Intimação",
    note: "Devedor notificado pela primeira vez.",
    cold: true,
  },
  {
    n: "02",
    date: "12 Jun 2026",
    label: "2ª Intimação",
    note: "Segunda notificação sobre o mesmo imóvel.",
    cold: true,
  },
  {
    n: "03",
    date: "15 Jun 2026",
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

// ATENÇÃO: o FAQ abaixo é espelhado no JSON-LD (FAQPage) hardcoded em
// index.html. Ao editar pergunta/resposta aqui, atualize lá também.
export const FAQ = [
  {
    q: "Receber esses leads é compatível com as regras da OAB?",
    a: "Sim. A Chreos entrega inteligência derivada de registros e publicações públicas — uma intermediação transparente de informação, e não captação ativa e indiscriminada de clientela. A decisão de abordar (ou não) cada caso é sempre do advogado, que deve conduzir o contato de forma informativa e dentro do Provimento 205/2021 da OAB: sem promessa de resultado e sem oferta de honorários.",
  },
  {
    q: "E a LGPD? É legal tratar esses dados?",
    a: "Os dados têm origem em atos e publicações oficiais e públicas — diários de registro de imóveis e editais de leilão. O tratamento segue os princípios da LGPD (finalidade, minimização e transparência), apoiado, em regra, no legítimo interesse aplicável a dados de fontes públicas (art. 7º da Lei 13.709/2018). Ao receber um lead, o advogado passa a ser controlador independente para o uso que fizer da informação.",
  },
  {
    q: "De onde vêm os dados?",
    a: "Todas as informações vêm de fontes públicas oficiais — diários de registro de imóveis e editais de leilão publicados por cartórios de todo o Brasil. Nosso trabalho é monitorar, organizar e enriquecer registros que já são públicos por lei.",
  },
  {
    q: "Os leads são exclusivos?",
    a: "Sim — e isso é o padrão da Chreos. Cada lead é entregue a um único escritório: o mesmo contato nunca vai para um concorrente da sua região. Além de proteger o seu trabalho, a exclusividade é a forma mais alinhada às normas da OAB, que vedam oferecer o mesmo cliente a vários advogados.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Modelo pay-per-lead: você paga apenas pelos leads que recebe. O valor é definido de acordo com os filtros do seu perfil, e você vê a tabela exata na demonstração, antes de qualquer compromisso — não existe mensalidade nem taxa de adesão.",
  },
  {
    q: "Quantos leads posso receber?",
    a: "O volume depende dos filtros configurados e da sua região — perfis mais amplos geram mais leads. Na demonstração mostramos exatamente quanto o seu perfil pode gerar.",
  },
  {
    q: "A Chreos atende qual estado ou região?",
    a: "Monitoramos editais de leilão de cartórios de todas as regiões — você configura no seu perfil os estados e comarcas onde quer receber leads, com exclusividade regional.",
  },
  {
    q: "Existe contrato de fidelidade?",
    a: "Não. Você começa quando quiser, pausa quando quiser e ajusta seu perfil a qualquer momento.",
  },
  {
    q: "Em quanto tempo começo a receber leads?",
    a: "Em poucos dias após a configuração do seu perfil. O prazo exato depende dos filtros escolhidos — perfis mais amplos começam a receber antes; filtros muito específicos podem levar um pouco mais para gerar os primeiros leads.",
  },
];

export const CTA_BULLETS = [
  "Conversa direta com o fundador — resposta em até 30 minutos",
  "Demonstração do que o seu perfil pode gerar na sua região",
  "Configuração do seu perfil de cliente ideal",
  "Cada lead vendido uma única vez, só para o seu escritório",
  "Sem mensalidade, sem fidelidade — comece quando quiser",
];
