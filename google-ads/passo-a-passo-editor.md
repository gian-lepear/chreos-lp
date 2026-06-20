# Passo a passo — subir a conta no Google Ads

Ordem recomendada. Itens marcados **[UI]** se fazem no Google Ads na web;
**[Editor]** no Google Ads Editor (app de desktop).

---

## 0. Antes de tudo — conversões [UI]
Faça primeiro, senão os lances inteligentes não têm sinal.
1. **Ferramentas → Conversões → Nova ação → Site.**
2. Crie **"Envio de formulário"** (categoria: *Lead / Enviar formulário*).
   - Marque como **conversão principal**.
   - Como a LP é estática, o disparo vem do `gtag('event','conversion', …)` que
     já roda **no envio do formulário** (CTAForm). Use o mesmo rótulo de
     conversão `AW-18227481490/cRXACOi…` OU crie um rótulo novo e me avise pra
     eu trocar no código.
3. (Opcional) Crie **"WhatsApp aberto"** como **secundária** (categoria: outras)
   — o código já emite o evento `whatsapp_open`. Serve de observação, não otimize por ela.
4. Confirme que a tag base (gtag.js) está ativa — já está no `index.html`.

## 1. Editor — baixar e sincronizar [Editor]
1. Baixe o **Google Ads Editor** (gratuito, Google).
2. Entre na conta → **"Obter alterações recentes" / Download** da conta inteira.

## 2. Lista de negativos compartilhada [UI]
O Editor não gerencia bem lista compartilhada — faça na web:
1. **Ferramentas → Biblioteca compartilhada → Listas de palavras-chave negativas → +.**
2. Nome: `Negativos - Devedor e Lixo`.
3. Cole **todo** o `negativos-compartilhados.txt` (um por linha).
4. Salve e **aplique às 5 campanhas** (faz depois que elas existirem).
5. Mantenha como match **amplo** (padrão da lista) — pega variações.

## 3. Criar as 5 campanhas [Editor]
Crie cada uma (Search/Rede de Pesquisa). Configurações comuns:
- **Rede:** só Pesquisa (desligue Rede de Display e parceiros de pesquisa).
- **Local:** Brasil (e em *Opções de local* escolha **"Presença: pessoas que
  estão no local"**, não "interesse" — evita curioso de fora).
- **Idioma:** Português.
- **Lance:** comece em **Maximizar cliques** com **CPC máximo limitado** (ex.
  R$3-6, ajuste à sua realidade). Troque para **Maximizar conversões** após
  ~15-30 conversões limpas de formulário.

| Campanha | Budget (% do total) |
|---|---|
| 01 Advogado-Leads | 45% |
| 02 Pratica-Qualificador | 20% |
| 03 Marketing-Juridico | 15% |
| 04 Marca-Concorrente | 5% |
| 05 Broad-Discovery | 15% (capado) |

> Sem orçamento total definido? Comece pequeno (ex. R$50-100/dia) concentrado
> na 01, e escale o que converter.

## 4. Importar as palavras-chave [Editor]
1. **Conta → Importar → Importar de arquivo** → escolha `keywords.csv`.
2. Confira o mapeamento das colunas (Campaign / Ad group / Keyword / Match type).
3. O Editor cria os grupos de anúncios que faltarem. **Revise** antes de postar.
4. Confirme os match types: termos de nicho ficaram **Phrase**, marca/concorrente
   **Exact**, descoberta **Broad** (só na campanha 05).

## 5. Anúncios responsivos (RSA) [Editor]
1. Em cada grupo, adicione **1-2 RSAs** com os títulos/descrições do `README.md`
   (RSA A na 01/02, RSA B na 03; adapte na 04).
2. **15 títulos** e **4 descrições** por RSA, se possível (mais ativos = melhor).
3. **URL final:** alinhe a âncora ao tema (message-match):
   - 01 Advogado-Leads, 03 Marketing → `https://chreos.com.br/#acesso`
   - 02 Pratica-Qualificador → `https://chreos.com.br/#mecanismo`
   - 04 Marca → `https://chreos.com.br/`
4. **Caminho de exibição:** `/leads` e `/advogados`.

## 6. Extensões / assets [UI ou Editor]
Use o `extensoes.md`. Sitelinks, callouts e snippets dá pra fazer no Editor;
logo/imagem/lead-form é mais fácil na **[UI]** (Ferramentas → Assets). Aplique
no **nível da conta**.

## 7. Revisar e postar [Editor]
1. **Verificar alterações** (botão) → corrija erros/avisos.
2. **Postar**.
3. Na web, **aplique a lista de negativos** às 5 campanhas (passo 2.4).

## 8. Primeiras 4 semanas — operação
- **Relatório de termos de pesquisa SEMANAL** (toda 2ª-feira). Todo termo de
  **devedor** (`o que fazer`, `perder minha casa`, `sustar leilão`…), **DIY**,
  **grátis**, **curso**, **emprego** → adicione ao negativo.
- Pause keyword com gasto alto e zero conversão.
- Promova termo de descoberta (campanha 05) que converteu → Phrase/Exact na 01/02.
- Só migre para **Maximizar conversões** quando houver volume de conversão de
  formulário suficiente.

## Checklist rápido
- [ ] Conversão "Envio de formulário" criada e **principal**
- [ ] Lista de negativos criada e **aplicada às 5 campanhas**
- [ ] 5 campanhas com rede só Pesquisa, Brasil (presença), pt-BR
- [ ] keywords.csv importado, match types conferidos
- [ ] 1-2 RSAs por grupo, URL com âncora certa
- [ ] Sitelinks + callouts + snippets no nível da conta
- [ ] Termo "puro" de nicho NÃO está rodando sozinho
- [ ] Postado + negativos aplicados
