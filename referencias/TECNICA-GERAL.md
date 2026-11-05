# Como os sites capturados são feitos

Raio-x lido no navegador em 04/11/2026: bibliotecas carregadas, fontes, curvas de animação no CSS, 3D, vídeo e estrutura da página. Quando uma biblioteca vem empacotada no código do site, ela pode não aparecer aqui.

| Site | Construção | Motion | 3D e mídia | Fontes | Curvas no CSS |
| --- | --- | --- | --- | --- | --- |
| Lando Norris | Webflow | Lenis + Rive (transição de página, assinatura, botões) | Three.js r174 + OGL, 21 canvas, modelos GLB com Draco, HDR de estúdio | Brier, Mona Sans Variable | (0.19, 1, 0.22, 1), (0.65, 0.05, 0, 1) |
| Forge Automotive | Next.js | Lenis; página presa num palco único (altura de 1 tela) com 20 seções e 6 sticky; 9 keyframes e 36 transições | 3 canvas; 61 imagens, 60 com lazy | GeistSans + "editorial" (serifa) | (0.8, 0, 0, 1), (0.43, 0.195, 0.02, 1), (0.5, 0, 0, 1) |
| A24 (Ravi Klaassens) | Webflow | GSAP 3.15 + ScrollTrigger + Lenis; a cena inteira roda dentro de um canvas | Three.js r178, 1 canvas; discos com textura WebP e grão em AVIF | PP Neue Montreal, PP Museum, PP Eiko | (0.509, 0.188, 0.041, 0.989), (0.625, 0.05, 0, 1), (0.77, 0, 0.18, 1), (0.32, 0.72, 0, 1) |
| Spyker | Next.js | Lenis | 5 vídeos sem autoplay no HTML, `preload="metadata"`, com poster, tocando quando entram na tela | Futura PT Condensed, Swiss 721, PT Serif | (0.625, 0.05, 0, 1), (0.4, 0, 0.2, 1) |
| Shopify Editions Winter '26 | Shopify | Lenis; página de ~47 mil px | 2 canvas, 12 vídeos | NeueMontreal, HW Cigars, Imperial Script | — |
| Augen | — | Lenis; textos entram desfocados e ganham foco | — | PP Neue Montreal | — |
| Dirt | — | Lenis | 1 canvas, 13 vídeos | Inter Tight, Fragment Mono, Europa Grotesk, Sequel Sans | — |
| Cartier | Site próprio | Capítulos com navegação lateral | ~200 imagens, sem canvas | Brilliant Cut Pro, Fancy Cut Pro, Sabon (fontes próprias da marca) | — |

## Padrões que se repetem

- **Lenis em quase todos.** Rolagem suave virou padrão de site premiado.
- **`cubic-bezier(0.625, 0.05, 0, 1)` em dois sites diferentes** (Spyker e A24): curva forte de "cinema", começa firme e assenta devagar.
- **3D com Three.js só onde o objeto é o assunto** (capacete, DVD), com textura leve (WebP, AVIF) e luz HDR.
- **Vídeo nunca toca sozinho no HTML:** espera entrar na tela, com poster e `preload="metadata"`.
- **Duas ou três fontes, cada uma com papel.** Uma serifa de personalidade aparece em quase todos.
- **Quase toda imagem com `loading="lazy"`.**
