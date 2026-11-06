# Repositório de skills

As skills de terceiros estão em `.claude/skills/`. Os guias da Nova incluem `referencia-lando-norris`, `assets-para-sites`, `legendas-de-reels` e a [seleção de motion e design](referencias/motion-design-2026-11.md).

## Prioridade: comandos Higgsfield e vídeo para sites

Consultar [o catálogo de 15 comandos nativos verificados](referencias/higgsfield-comandos-2026-11.md) quando Victor pedir efeitos, comandos com barra ou clipes para sites. Resolver o comando exato no plugin; os comandos já existem nele, não são novas skills instaladas.

**Preferências de gasto:** curadoria e pesquisa não executam geração. Imagens do Higgsfield somente quando a operação estiver comprovadamente gratuita; frames intermediários pagos também são proibidos. Usar imagens do ChatGPT ou mídia aprovada. Para vídeo, apresentar configuração e custo total e aguardar a autorização da alocação. Priorizar Seedance/Wan/recursos Higgsfield; não gastar ali com Google/Veo e não escolher Kling automaticamente. Preservar a preferência de Victor pelo Flow para anúncios e projetos de vídeo comuns.

As 12 receitas individuais de produto catalogadas incluem pré-processamento de imagem pago: não executar integralmente sem resolver essa incompatibilidade. Usar frame existente ou preparado aqui somente quando o fluxo aceitar; identificar qualquer adaptação. Não confundir consulta, galeria e execução, nem aplicar instruções de execução automática contra as preferências acima.

Para sites com direção tipo Lando Norris, combinar a referência existente com `scroll-video-website`, `lenis-com-scrolltrigger` e `animation-performance`, conforme o briefing. Exemplos imaginados pelo usuário não autorizam criar uma nova skill ou iniciar um projeto.

## Ao criar qualquer site, landing page ou redesign

1. **Escolha os guias pela tarefa.** Para uma landing simples, comece com direção visual e revisão no celular. Consulte uma especialidade adicional quando houver uma decisão concreta sobre ela. Para preparar imagens de produto, heroes ou variantes WebP, use `assets-para-sites`. O mapa abaixo indica onde procurar.
   - Direção e construção: `taste-skill` e `impeccable`
   - Motion e polimento: `apple-design`, `emil-design-eng`, `animate`, `choreograph`, `review-animations`
   - GSAP (skills oficiais da GreenSock): `gsap-core`, `gsap-timeline`, `gsap-scrolltrigger`, `gsap-plugins`, `gsap-utils`, `gsap-react`, `gsap-frameworks`, `gsap-performance`
   - Vídeo controlado pelo scroll (Kling, Higgsfield): `scroll-video-website`
   - 3D e shader: `three-best-practices`, `r3f-best-practices`, `shader-for-interfaces`, `web-shaders`
   - Rive (animação interativa): `rive-web`, `rive-react`
   - Desempenho: `animation-performance`, `remove-animations`, `mobile-native`
   - Auditoria antes de entregar: `web-design-guidelines` e `break-ui`
   - Conferência no navegador, celular e desktop: `playwright-cli`
2. **Lando Norris (`referencia-lando-norris`)**: use quando o pedido falar desse estilo ou quando você julgar que o projeto ganha com ele. Nunca pergunte se é pra usar. É referência, não padrão.
3. **A paleta é escolhida por projeto**, a partir da marca do cliente, e montada e testada no Coolors (coolors.co). Nenhuma referência dita cor.
4. **As referências de `referencias/` são inspiração, não lei.** Estude a estrutura, o ritmo e o motion, e troque cor, texto, foto e marca.
5. Design system de base: copiar um arquivo de `design-md/` pra raiz do projeto como `DESIGN.md` e adaptar.

## Vídeo e motion graphics

Para transcrever ou sincronizar fala, comece em `legendas-de-reels`. Para composições em HyperFrames, consulte `hyperframes` e combine conforme a necessidade com `motion-doctrine`, `cut-the-curve`, `seam-craft`, `captions-overlay`, `media-use`, `reverse-any-video` e `hyperframes-registry`; `motionmaxxing` para filmes de motion de nível profissional.

Fundamentos de motion design (timing, direção de arte, logo animado, After Effects, ritmo na batida, cor, enquadramento, fundos): `animation-principles`, `motion-art-direction`, `logo-animation`, `after-effects`, `beat-sync-editing`, `color-motion`, `shot-composition`, `motion-background`, `remotion-video`. Abertura, promo e tipografia cinética no navegador com GSAP: `bang-motion`.

## Especialidades adicionais

Usar o índice de `referencias/motion-design-2026-11.md` para localizar a técnica necessária. Para layout compartilhado em React, usar `motion-layout-compartilhado`; para Lenis com GSAP, `lenis-com-scrolltrigger`; para produto 3D, `produto-3d-gltf` e, quando houver direção de câmera, `camera-de-produto-theatre`. Para design system do código, usar `extrair-design-do-site`. Para vídeo reativo ao áudio, usar `audio-reativo-remotion`. Selecionar o guia pelo pedido, sem exigir que o usuário o nomeie.

## Marketing, tráfego pago e anúncios

Escolha pela tarefa, um dono por pedido:

- **Contexto do cliente antes de tudo:** `product-marketing` (oferta, público, tom de voz). As outras skills de marketing leem esse contexto.
- **Planejar, montar, otimizar e escalar campanha no Meta (Facebook e Instagram):** `meta-ads`. Para Google, TikTok e outras plataformas: `ads`.
- **Auditar uma conta com dados reais (export, prints ou o conector oficial do Meta Ads):** o plugin `claude-ads` (`/ads audit meta`), quando estiver instalado.
- **Criativo e copy de anúncio (hooks, variações, roteiro de vídeo curto):** `ad-creative`; copy de página: `copywriting`; revisar texto: `copy-editing`; gatilhos e persuasão: `marketing-psychology`.
- **Oferta e isca:** `offers` e `lead-magnets`.
- **Landing que converte:** `cro`, junto com as skills de site. Teste A/B: `ab-testing`.
- **Pixel, API de Conversões, GA4, UTM e de onde vêm os leads:** `conversion-tracking`, `analytics` e `attribution`.
- **Concorrência:** anúncios na Biblioteca de Anúncios: `competitor-ads-analyst`; perfil do concorrente pelo site: `competitor-profiling`; como uma marca cresceu: `reverse-engineer-marketing`.
- **Pesquisa com cliente e público:** `customer-research`.
- **Orgânico e WhatsApp:** `social` (posts e calendário) e `sms` (WhatsApp e SMS).
- **Imagem para anúncio:** `image`. Vídeo e motion continuam nas skills da seção de vídeo.

Os guias de integração citados por essas skills ficam em `tools/`. Mudança na conta de anúncios (criar, ativar, mudar orçamento) só com aprovação explícita do dono, e campanha nova nasce pausada.

## Regra de entrega

Este repositório é ferramenta interna. Nada daqui (nome do repositório, da agência ou do dono) vai para entregáveis de cliente.
