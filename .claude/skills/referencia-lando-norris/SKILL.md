---
name: referencia-lando-norris
description: Ficha do site do Lando Norris (landonorris.com) como referência visual de site e landing page. Use quando o pedido falar desse estilo ou quando, a seu julgamento, o projeto ganhar com ele (esporte, carro, marca pessoal, evento). Nunca pergunte ao usuário se deve usar; é inspiração, nunca regra.
---

# Referência: Lando Norris (landonorris.com)

O site mais forte que estudamos, do começo ao fim. Ele é **referência, não padrão**: nem todo site vai ter essa cara, e nada daqui é lei.

## Antes de começar qualquer site

1. **Não pergunte se é pra usar.** Use quando o pedido falar desse estilo, ou quando você julgar que o projeto ganha com ele. Na dúvida, siga sem este arquivo.
2. **Consulte os guias necessários à etapa.** Use a lista abaixo para escolher direção, movimento ou revisão conforme o projeto:
   - Direção e construção: `taste-skill`, `impeccable`
   - Motion e polimento: `apple-design`, `emil-design-eng`, `animate`, `choreograph`, `review-animations`
   - Desempenho: `animation-performance`, `remove-animations`, `mobile-native`
   - Auditoria: `web-design-guidelines`, `break-ui`
   - Conferência no navegador: `playwright-cli`
   - Design system de base: um arquivo de `design-md/` como ponto de partida do `DESIGN.md` do projeto
3. **A paleta é escolhida por projeto, nunca copiada daqui.** Ela sai da marca do cliente (logo, fotos, fachada, produto) e é montada e testada no **Coolors** (coolors.co): gerador, paletas em alta, extração de cor a partir de imagem e checagem de contraste. O Lando Norris mostra só **como as cores trabalham** (seção 2), não quais usar.

## 1. O que faz o site ser tão forte

- **Um objeto 3D herói que acompanha a página inteira:** o capacete aparece no topo, nas laterais, numa coleção e no rodapé. Não é enfeite, é o assunto.
- **Escrita à mão viva por cima de tipografia dura:** a assinatura se desenha, e "ON" e "Collabs" aparecem escritos à mão sobre títulos enormes em caixa-alta.
- **Nada aparece com fade:** o texto é revelado por blocos de cor que recolhem, e a abertura é feita por blocos em diagonal que deslizam.
- **O fundo muda de cor por seção**, mas uma textura fixa (curvas de nível de mapa) amarra o site inteiro.
- **Colagem editorial** com fotos de tamanhos e alturas diferentes, cada uma com uma legenda pequena (local e ano).
- **Detalhes que conversam com o assunto:** cartões com canto chanfrado, como peça de carro e não como cartão arredondado de app.

## 2. Como as cores trabalham (o papel, não o valor)

Ele usa poucas cores, cada uma com uma função:

| Papel | No site dele | O que levar |
| --- | --- | --- |
| Fundo escuro principal | verde quase preto (`#282c20`) | Um escuro com temperatura (esverdeado, amarronzado, azulado), nunca preto puro em tudo |
| Fundo claro | creme (`#f4f4ed`) | Um claro quente que alterna com o escuro por seção |
| Preto de contraste | `#111112` | Reservado pra seções de impacto (coleção, números) |
| Acento elétrico | verde-limão (`#d2ff00`) e a versão apagada (`#b2c73a`) | **Uma** cor de acento forte, usada em pouca área: botão, blocos de revelação, assinatura |
| Tons de apoio | cinzas esverdeados (`#dde1d2`, `#b4b8a5`, `#535450`) | 2 ou 3 tons intermediários derivados do fundo, pra texturas e legendas |

Pro cliente: monte no Coolors a partir da marca, mantendo essa lógica (escuro com temperatura, claro quente, um acento forte e poucos tons de apoio), e confira o contraste do texto.

## 3. Tipografia (a estrutura, não as fontes)

- **Duas famílias com papéis opostos:** uma serifa display de personalidade (Brier) pra palavras-chave e uma sans variável (Mona Sans, de licença aberta) pra todo o resto.
- **Títulos de impacto enormes**, de 88 a 127 px, em caixa-alta, entrelinha apertada (cerca de 0,8 a 0,9 do tamanho) e tracking negativo (cerca de -3%).
- **Uma palavra trocada de família no meio da frase** ("DEFINING A *LEGACY* IN FORMULA 1"), na serifa e na cor de acento.
- **Escala do site:** corpo de 14 a 16 px; títulos em 1 / 1,2 / 1,5 / 2 / 4 / 4,5 rem; "impacto" em 7,9 rem.
- **Raios:** pequeno 1 rem, médio 3 rem, grande 6,25 rem. Espaçamento base de 1,25 rem.

A Brier é licenciada pra eles. Pro cliente, escolha a fonte pelo `taste-skill`, com licença válida.

## 4. A home, do topo ao rodapé

Os quadros estão em `quadros/mural-home.jpg`. No repositório, os quadros um a um estão em `referencias/lando-norris/home-completa/`.

1. **Abertura:** blocos em diagonal na cor de acento abrem a tela; a foto recortada aparece com a malha 3D do capacete por cima; um letreiro gigante corre atrás.
2. **Assinatura:** desenhada ao vivo sobre um letreiro em loop.
3. **Manifesto:** frase enorme em caixa-alta, revelada por blocos de cor, com uma palavra na serifa.
4. **Colagem:** fotos com legenda, citação em serifa com palavras em negrito e assinatura; o fundo passa do escuro pro oliva e depois pro creme.
5. **Dois caminhos (On / Off track):** escrita à mão por cima do título serifado; o capacete e o rosto entram pelas laterais.
6. **Foto cheia** de transição pro preto.
7. **Coleção de capacetes:** grade de cartões escuros com canto chanfrado, o objeto 3D, nome e ano no acento.
8. **Loja:** uma curva separa as seções; foto de produto e cartão dourado.
9. **Parcerias:** palavra escrita à mão gigante atrás de uma faixa de logos rolando.
10. **Rodapé:** cartão escuro com recorte no topo, assinatura e o objeto subindo.

Página interna (`quadros/on-track-*.jpg`): título gigante com escrita à mão, capacete 3D girando, número ocupando a tela inteira e barras de resultado que crescem.

## 5. Motion: como reproduzir com a nossa stack

| Efeito | Como ele faz | Como fazer aqui | Skill |
| --- | --- | --- | --- |
| Abertura em blocos diagonais | Animação Rive (`page-transition.riv`) | `clip-path: polygon()` em 2 ou 3 camadas com atraso; ou Rive se valer o arquivo | `choreograph`, `animate` |
| Assinatura se desenhando | Rive (`signature.riv`) | SVG com `stroke-dasharray` e `stroke-dashoffset` animados | `animate` |
| Texto revelado por blocos | Bloco de cor por cima de cada linha, que recolhe | `scaleX` com `transform-origin` trocando de lado no meio; uma linha atrás da outra | `choreograph` |
| Objeto 3D herói | Three.js + OGL, GLB com Draco, luz HDR de estúdio 1k | Three.js ou R3F com um GLB comprimido; HDR pequeno; pausa fora da tela | `animation-performance` |
| Fundo que muda de cor | Troca de cor por seção durante o scroll | Variável de cor animada no container, ou ScrollTrigger mudando o `background-color` | `animate` |
| Letreiro gigante correndo | Faixa de texto em loop | `transform: translateX` em loop, pausando fora da tela | `animation-performance` |
| Faixa de logos | Marquee | Igual ao letreiro, só com logos reais do cliente | `remove-animations` (só se for real) |
| Rolagem suave | Lenis | Lenis com lerp curto; nada de prender a rolagem sem fim | `apple-design` |

Curvas que ele usa: `cubic-bezier(0.19, 1, 0.22, 1)` (expo out, pra entradas) e `cubic-bezier(0.65, 0.05, 0, 1)` (pra cortinas e blocos).

## 6. Desempenho: onde ele exagera e a gente não

- A home dele tem **21 canvas** e quase 19 telas de altura. Num site de cliente: **um** objeto 3D por página, no máximo dois.
- Modelo 3D com Draco, HDR de 1k e texturas leves: dá pra manter.
- 131 das 133 imagens com `loading="lazy"`: mantenha isso sempre.
- Toda animação contínua para fora da tela e com "reduzir movimento" ligado.
- Testar no celular com `playwright-cli` antes de entregar.

## 7. Onde encaixa

Academia e luta, barbearia, esporte, oficina e estética automotiva, marca pessoal, eventos. Em semijoia, clínica e advocacia, a estrutura (colagem, dois caminhos, objeto herói) funciona, mas o tom é outro: aí costuma combinar mais com referências como Cartier ou Augen, em `referencias/`.
