# Fonte da palavra-marca χρέος

A palavra grega **χρέος** (etimologia de "Chreos", seção ORIGEM) é estilizada
com **Newsreader** no código — mas o Newsreader **não tem glifos gregos** (nem
no @fontsource, nem no Google Fonts: só latin / latin-ext / vietnamese). Por
isso ela sempre caiu no **serif do sistema** (Times-ish), destoando do resto.

Como Newsreader não pode renderizar grego, usamos um serif literário com grego
**só para o bloco Unicode grego** (`unicode-range: U+0370–03FF`), via
`@font-face` com a mesma família `Newsreader Variable`. O latim continua
Newsreader; só χρέος usa o substituto. Arquivo minúsculo (~3,7 KB) e lazy.

## Comparação (screenshots)
- `antes.png` — serif do sistema (fallback), destoa.
- `depois-literata.png` — **Literata** (escolhida): serif literário contemporâneo,
  contraste alto, combina com o Newsreader.
- `depois-ebgaramond.png` — EB Garamond: humanista, contraste baixo, ar mais
  caligráfico/antigo (alternativa).

## Escolha atual: Literata
Definida em `src/fonts/fonts.css` (último `@font-face`, `unicode-range: U+0370-03FF`).

### Trocar para EB Garamond
Em `src/fonts/fonts.css`, no `@font-face` do grego, troque:
```
src: url("./literata-greek-subset.woff2") format("woff2");
```
por:
```
src: url("./ebgaramond-greek-subset.woff2") format("woff2");
```
(o arquivo já está em `src/fonts/`).

## Regerar
`bash scripts/subset-fonts.sh` baixa e subseta os gregos (Literata + EB Garamond)
para os 5 glifos de χρέος.
