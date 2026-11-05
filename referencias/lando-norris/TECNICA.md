# Lando Norris: como é feito

Site: https://landonorris.com (home, /on-track, /off-track, /calendar, /partnerships). Lido no navegador em 04/11/2026.

## Stack que aparece na página

| Peça | O que foi visto |
| --- | --- |
| Construção | Webflow (classe `w-mod` no html) |
| Rolagem | Lenis (classe `lenis` no html) |
| 3D | Three.js r174 + OGL, 21 canvas na home |
| Modelos 3D | `helmet-21.glb`, `disco-02.glb`, `tracks-06-test.glb`, comprimidos com Draco |
| Luz do 3D | Ambiente HDR de estúdio (`studio_small_08_1k--light.hdr` e `--faded.hdr`) |
| Animação vetorial | Rive: `page-transition.riv` (transição de página), `signature.riv` (assinatura desenhando), `btn-ui.riv` (botões) |
| Fontes | Brier (serifa display) + Mona Sans Variable (texto e títulos em caixa-alta) |
| Curvas | `cubic-bezier(0.19, 1, 0.22, 1)` (expo out) e `cubic-bezier(0.65, 0.05, 0, 1)` |
| Tamanho | Home com ~18,6 telas de altura, 12 seções, 4 elementos sticky |
| Imagens | 133 na home, 131 com `loading="lazy"` |

## A página, do topo ao rodapé (quadros em `home-completa/`)

1. **Abertura:** blocos verde-limão em diagonal deslizam e abrem a tela; a foto recortada aparece com a malha 3D do capacete por cima; letreiro gigante corre atrás da cabeça.
2. **Assinatura:** a assinatura verde é desenhada ao vivo (Rive) por cima de um letreiro em loop ("FOREVER A BRITISH…").
3. **Manifesto:** frase enorme em caixa-alta com uma palavra trocada pela serifa colorida ("LEGACY"), revelada por blocos de cor que recolhem.
4. **Colagem:** fotos em tamanhos e alturas diferentes, cada uma com legenda pequena (local e ano), citação em serifa com palavras em negrito e assinatura; o fundo muda de cor conforme o scroll (verde-escuro → oliva → creme), sempre com curvas de nível de mapa ao fundo.
5. **On track / Off track:** dois caminhos lado a lado; "ON" escrito à mão por cima do título serifado; o capacete e o rosto entram pelas laterais.
6. **Foto cheia:** capacete e jaqueta ocupando a largura, transição pro preto.
7. **Coleção de capacetes:** grade de cartões escuros com o capacete 3D, nome e ano em verde-limão, cantos chanfrados como peça de carro.
8. **Loja:** curva que separa as seções, foto de produto e cartão dourado "Champion Collection".
9. **Parcerias:** "Collabs" escrito à mão gigante atrás de uma faixa de logos rolando.
10. **Rodapé:** cartão escuro com recorte no topo, assinatura e o capacete subindo.

Em `/on-track` (quadros em `on-track/`): "ON" à mão + "TRACK" gigante, capacete dourado 3D girando, número 49 ocupando a tela e barras de resultado que crescem.

## O que levar pros nossos sites

- **Um objeto 3D herói, iluminado por HDR**, que acompanha a página inteira. Na nossa realidade: peça de carro, garrafa, joia. Skill: `apple-design` pra física e `animation-performance` pra não pesar.
- **Escrita à mão animada** (assinatura, palavra-chave) por cima de tipografia forte. Dá pra fazer com Rive ou com SVG `stroke-dashoffset`. Skill: `animate`.
- **Texto revelado por blocos de cor** que recolhem, em vez de fade. Skill: `choreograph` pra ordem e atraso.
- **Fundo que muda de cor por seção**, com uma textura fixa (curvas de nível) amarrando tudo.
- **Cartões com canto chanfrado** em vez de arredondado: detalhe que conversa com o assunto (carro e pista).
- **Duas fontes com papéis claros:** uma serifa de personalidade pra palavras-chave e uma sans variável pro resto. Skill: `taste-skill` (tipografia).
- Pra montar a página: `impeccable` (shape → construção → polish) e `web-design-guidelines` na auditoria.
