export const TICKER_ITEMS = [
  {
    matricula: "84.992",
    cartorio: "4º CRI São Paulo",
    devedor: "C. E. M.",
    valor: "R$ 142.850",
    credor: "Itaú S.A.",
    estado: "SP",
  },
  {
    matricula: "31.774",
    cartorio: "2º CRI Curitiba",
    devedor: "M. R. C.",
    valor: "R$ 298.000",
    credor: "Bradesco",
    estado: "PR",
  },
  {
    matricula: "56.120",
    cartorio: "1º CRI Belo Horizonte",
    devedor: "F. L. A.",
    valor: "R$ 187.440",
    credor: "Caixa Econômica",
    estado: "MG",
  },
  {
    matricula: "12.331",
    cartorio: "3º CRI Porto Alegre",
    devedor: "G. S. M.",
    valor: "R$ 412.900",
    credor: "Santander",
    estado: "RS",
  },
  {
    matricula: "79.882",
    cartorio: "5º CRI Rio de Janeiro",
    devedor: "A. T. F.",
    valor: "R$ 533.700",
    credor: "Itaú S.A.",
    estado: "RJ",
  },
  {
    matricula: "22.045",
    cartorio: "1º CRI Fortaleza",
    devedor: "P. B. N.",
    valor: "R$ 95.200",
    credor: "Bradesco",
    estado: "CE",
  },
];

export const STATS = [
  { n: 3847, suf: "", label: "Publicações analisadas por semana" },
  { n: 214, suf: "+", label: "Escritórios contratantes" },
  { n: 27, suf: "", label: "Estados monitorados" },
  { n: 3000, suf: "+", label: "Cartórios indexados" },
];

export const STEPS = [
  {
    n: "I",
    tag: "MONITORAMENTO",
    title: "Acompanhamos as publicações oficiais em tempo real",
    sub: "Cartórios de todo o Brasil",
    body: "Indexamos diariamente as publicações de procedimentos de execução extrajudicial regulados pela Lei 9.514/1997, identificando cada ato registral no momento em que se torna público.",
  },
  {
    n: "II",
    tag: "ORGANIZAÇÃO",
    title: "Estruturamos a ficha técnica do procedimento",
    sub: "Dados objetivos do caso",
    body: "Cada caso é organizado com as informações que importam para a atuação jurídica: matrícula do imóvel, cartório, credor fiduciário, valor da operação, fase do procedimento e prazos legais aplicáveis.",
  },
  {
    n: "III",
    tag: "ATENDIMENTO",
    title: "Habilitamos o primeiro contato jurídico",
    sub: "Para o escritório contratante",
    body: "O escritório contratante recebe, sob política de uso restrito, as informações necessárias para entrar em contato com o devedor fiduciante e oferecer assistência jurídica — análise da situação, opções de defesa e regularização do débito dentro do prazo legal.",
  },
  {
    n: "IV",
    tag: "PERSONALIZAÇÃO",
    title: "Você recebe apenas os casos que atende",
    sub: "Filtros por perfil de atuação",
    body: "Você define o recorte dos procedimentos que quer acompanhar — comarca, porte da operação, credor fiduciário, fase processual. Apenas casos dentro do escopo do seu escritório chegam até você.",
  },
];

export const LEAD_FEATURES = [
  "Identificação do procedimento e do imóvel",
  "Matrícula, cartório e localização do imóvel",
  "Credor fiduciário e valor da operação",
  "Fase do procedimento e prazos legais aplicáveis",
  "Canal de contato disponível sob política de uso restrito",
];

export const FILTERS = [
  {
    label: "Comarca do imóvel",
    detail: "Estado · Cidade · Região",
    desc: "Receba apenas procedimentos cujos imóveis estejam dentro da comarca em que o seu escritório atua.",
  },
  {
    label: "Valor da operação fiduciária",
    detail: "Faixa mínima — Faixa máxima",
    desc: "Defina o porte dos contratos compatíveis com a estrutura do seu escritório. Foco em alto padrão, volume, ou ambos — você configura.",
  },
  {
    label: "Tempo desde a inadimplência",
    detail: "Casos recentes ou em estágio avançado",
    desc: "Casos recentes admitem maior margem de negociação administrativa. Casos avançados exigem atuação técnica imediata para preservar os direitos do devedor fiduciante. Filtre conforme a especialidade do escritório.",
  },
  {
    label: "Credor fiduciário",
    detail: "Itaú · Bradesco · Caixa · Santander · outros",
    desc: "Inclua ou exclua os credores fiduciários conforme a experiência prévia do escritório ou impedimentos contratuais.",
  },
  {
    label: "Fase do procedimento",
    detail: "1ª · 2ª · 3ª intimação",
    desc: "A cada intimação, o prazo de purgação da mora se reduz e a urgência jurídica aumenta. Filtre por fase para priorizar os casos em que a defesa técnica é mais necessária.",
  },
];

export const TIMELINE = [
  {
    n: "01",
    date: "14 Mar 2024",
    label: "1ª Intimação",
    note: "Devedor fiduciante intimado pela primeira vez. Prazo amplo para purgação administrativa.",
    cold: true,
  },
  {
    n: "02",
    date: "02 Ago 2024",
    label: "2ª Intimação",
    note: "Segunda intimação registrada. Prazo reduzido, complexidade técnica em ascensão.",
    cold: true,
  },
  {
    n: "03",
    date: "18 Jan 2025",
    label: "3ª Intimação",
    note: "Prazo de 15 dias para purgação da mora (art. 26, Lei 9.514/1997). Caso classificado como prazo crítico — defesa técnica é essencial para evitar a consolidação da propriedade.",
    cold: false,
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "O rastreamento da sequência de intimações mudou nossa atuação. Hoje priorizamos os casos em que a defesa do devedor fiduciante ainda é viável — quando a assistência jurídica é tecnicamente mais necessária.",
    author: "Dra. Helena Valente",
    firm: "Valente Imobiliário",
    location: "Curitiba, PR",
    stat: "+3× casos atendidos",
  },
  {
    quote:
      "O filtro por valor da operação nos permitiu concentrar esforço nos contratos compatíveis com a estrutura do escritório. Em poucos meses, triplicamos o ticket médio dos casos sob nossa responsabilidade.",
    author: "Dra. Camila Reys",
    firm: "Reys & Figueiredo",
    location: "Rio de Janeiro, RJ",
    stat: "3× ticket médio",
  },
];

export const CTA_BULLETS = [
  "Demonstração com casos reais publicados na sua comarca",
  "Configuração do recorte de procedimentos a acompanhar",
  "Entrega personalizada e suporte contínuo",
  "Sem contrato longo — comece quando quiser",
];
