# Chreos — Landing Page

Landing page da Chreos, plataforma de leads quentes para advogados e escritórios especializados em sustar leilões de imóveis.

## Tecnologias

- **React 19** + **TypeScript**
- **Vite 7** — build e dev server
- **Tailwind CSS 4** — estilização
- **Framer Motion** — animações
- **React Hook Form** + **Zod** — validação de formulário
- **shadcn/ui** — componentes de UI
- **Wouter** — roteamento

## Pré-requisitos

- **Node.js** 18 ou superior
- **pnpm** 10 ou superior

Verifique sua versão:

```bash
node -v
pnpm -v
```

## Instalação

Clone o repositório e entre na pasta do projeto:

```bash
git clone <url-do-repositorio>
cd chreos-lp
```

Instale as dependências:

```bash
pnpm install
```

## Desenvolvimento

Inicie o servidor de desenvolvimento com hot-reload:

```bash
pnpm dev
```

O site ficará disponível em `http://localhost:5173`.

## Build para produção

Gera os arquivos otimizados na pasta `dist/`:

```bash
pnpm build
```

## Preview do build

Para visualizar o build de produção localmente antes de publicar:

```bash
pnpm preview
```

## Checagem de tipos

Valida o TypeScript sem gerar arquivos:

```bash
pnpm typecheck
```

## Estrutura do projeto

```
src/
├── components/
│   ├── CTAForm.tsx        # Formulário de contato (redireciona para WhatsApp)
│   ├── Indicator.tsx      # Barra indicadora dourada dos cards de lead
│   └── ui/                # Componentes shadcn/ui
├── pages/
│   ├── home.tsx           # Página principal (landing page completa)
│   └── not-found.tsx      # Página 404
├── hooks/                 # Hooks utilitários
├── lib/                   # Utilitários (cn, etc.)
├── App.tsx                # Roteador principal
├── main.tsx               # Ponto de entrada
└── index.css              # Tema global e variáveis CSS
```

## Configuração do WhatsApp

O número de contato está definido em `src/components/CTAForm.tsx`:

```ts
const WHATSAPP_NUMBER = "5511976396660";
```

Substitua pelo número desejado no formato internacional sem espaços ou símbolos (DDI + DDD + número).

Ao submeter o formulário, o visitante é redirecionado para o WhatsApp com uma mensagem pré-preenchida contendo os dados informados.

## Design System

O projeto segue o sistema visual **"The Sovereign Ledger"**:

- **Paleta:** Navy `#0f1c2c` · Off-white `#fcf9f3` · Dourado `#C9A84C → #e6c364`
- **Tipografia:** Newsreader (serif, titulos) + Inter (sans-serif, corpo)
- **Border-radius:** 0px em tudo (exceto status pills: 9999px)
- **Sem bordas 1px** — profundidade criada por camadas de cor
