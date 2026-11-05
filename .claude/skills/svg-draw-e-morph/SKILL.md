---
name: svg-draw-e-morph
description: Animar traçados, assinaturas e transições entre formas SVG com Anime.js ou a biblioteca já instalada. Usar para draw-on, contornos e morph de vetores.
---

# Desenho e transformação de SVG

1. Abrir o SVG e identificar o `viewBox`, caminhos, grupos, preenchimentos e traços. Preservar a geometria aprovada de logos e símbolos.
2. Para efeito de desenho, usar o comprimento do traçado ou `svg.createDrawable` do Anime.js compatível. Manter a ponta e a espessura do traço coerentes ao redimensionar.
3. Para morph, conferir os formatos de origem e destino e a direção do movimento. Em Anime.js, consultar `svg.morphTo`; em projetos que já usam GSAP, aproveitar a solução compatível existente. A transformação deve sustentar a ideia visual.
4. Coordenar o desenho com a entrada do nome ou produto. Controlar as instâncias de animação para permitir desmontagem e repetição previsíveis.
5. Com movimento reduzido, mostrar a forma final. Conferir escala pequena, retina, proporções diferentes e leitura sobre o fundo real.
6. Quando o SVG transmitir informação, conservar nome acessível e conteúdo textual correspondente.

**Aplicação.** Assinatura desenhada sobre uma fotografia ou contorno de um produto que revela a peça.

**Fontes.** [Anime.js — createDrawable](https://animejs.com/documentation/svg/createdrawable/) e [morphTo](https://animejs.com/documentation/svg/morphto/).
