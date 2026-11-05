# skills

Acervo de design de sites, motion e vídeo. As skills de terceiros são cópias das fontes indicadas abaixo, com a licença do autor quando disponível. A ficha `referencia-lando-norris` e os guias compartilhados são da Nova, com fontes e eventuais arquivos de terceiros identificados em cada pasta.

## Guias compartilhados da Nova

| Skill | Para que serve | Fontes |
| --- | --- | --- |
| [Assets para sites](.claude/skills/assets-para-sites/SKILL.md) | Preparar hero desktop/mobile, preservar produto e exportar WebP localmente. | [OpenAI Creative Production](https://github.com/openai/plugins/tree/main/plugins/creative-production/skills/produce) |
| [Legendas de Reels](.claude/skills/legendas-de-reels/SKILL.md) | Reaproveitar ou transcrever fala, sincronizar SRT e conferir as legendas. | [OpenAI Whisper](https://github.com/openai/whisper) e [Remotion Captions](https://github.com/openai/plugins/tree/main/plugins/remotion/skills/remotion-captions) |

Os guias compartilhados usam o formato `SKILL.md`. O conteúdo fica em `.claude/skills/`; `.agents/skills/` contém os atalhos de descoberta do Codex. A execução usa as ferramentas disponíveis em cada sessão.

## Novas referências de motion e design

**78 skills no acervo.** A [seleção de 05/11/2026](referencias/motion-design-2026-11.md) acrescenta 15 especialidades de Motion, Lenis, Codrops, LottieFiles, Anime.js, Google Labs, Theatre.js, glTF Transform, Motion Canvas, Remotion, OpenColorIO e MapLibre. As fontes e a aplicação de cada guia estão no índice.

## O que tem

| Skill (pasta em `.claude/skills/`) | Pra quê | Origem | Licença |
| --- | --- | --- | --- |
| `apple-design`, `emil-design-eng`, `animate`, `choreograph`, `animation-performance`, `review-animations`, `improve-animations`, `find-animation-opportunities`, `animation-vocabulary`, `remove-animations`, `break-ui`, `prototype`, `pick-ui-library`, `ask-sonner`, `animate-expo`, `mobile-native`, `write-swift` | Motion de interface, física de mola, polimento de UI | [emilkowalski/skills](https://github.com/emilkowalski/skills) | MIT |
| `taste-skill` | Direção visual, layout, tipografia, cor, motion, imagem pra código, "cara de IA" | [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | MIT |
| `impeccable` | Design, redesign, crítica, auditoria e polimento de interface (comandos shape, audit, polish, animate, bolder, overdrive…) | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | Apache 2.0 |
| `web-design-guidelines` | Auditoria técnica (acessibilidade, foco, formulário, desempenho) no formato arquivo:linha | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) | MIT (segundo o README; o repositório não tem arquivo LICENSE) |
| `hyperframes`, `hyperframes-cli`, `hyperframes-registry`, `media-use`, `reverse-any-video`, `remotion-to-hyperframes`, `style-sampling`, `slideshow`, `figma` | Vídeo feito em HTML: legendas, motion graphics, reconstruir vídeo, mídia, registro com ~450 blocos | [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) (pasta `skills/`) | Apache 2.0 |
| `motion-doctrine`, `cut-the-curve`, `seam-craft`, `captions-overlay` | Doutrina de motion, cortes e legendas do HyperFrames | [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) (pasta `.claude/skills/`) | Apache 2.0 |
| `motionmaxxing` | Filmes de motion graphics de nível profissional (lançamento, promo, vinheta, anúncio) | [Tejashmakwana/motionmaxxing](https://github.com/Tejashmakwana/motionmaxxing) | Apache 2.0 |
| `playwright-cli` | Navegador por linha de comando pra conferir o site (print no celular e no desktop, clicar, preencher) | [microsoft/playwright-cli](https://github.com/microsoft/playwright-cli) (`playwright-cli install --skills`) | Apache 2.0 |

`design-md/`: 84 arquivos DESIGN.md prontos (Apple, BMW M, Ferrari, Lamborghini, Bugatti, Tesla, Nike, Starbucks, Airbnb, Stripe, Linear…), de [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) (MIT). São leituras do CSS público das marcas: base de estilo, nunca logo ou marca de terceiro. Pra usar num projeto, copia o DESIGN.md escolhido pra raiz do site.

Única exceção ao "sem alteração": do `motionmaxxing` ficou de fora a pasta `docs/media` (GIFs e vídeos de demonstração do README, que a skill não usa).

## Versões copiadas (04/11/2026)

| Origem | Commit |
| --- | --- |
| emilkowalski/skills | c8a7962 |
| Leonxlnx/taste-skill | 12af471 |
| pbakaus/impeccable | 5af4319 |
| vercel-labs/agent-skills | 1a2c79d |
| heygen-com/hyperframes | fa318d9 |
| Tejashmakwana/motionmaxxing | 8c8ec0f |
| VoltAgent/awesome-design-md | fcc7028 |
| @playwright/cli | 0.1.23 |

## Referências visuais

`referencias/`: prints, rolagens em GIF e raio-x técnico dos sites estudados (Lando Norris completo, Forge Automotive, Spyker, A24, Cartier e outros). São inspiração, não lei. A paleta de cada projeto sai do Coolors.

## Como usar

- **ChatGPT com GitHub conectado:** as rotinas pessoais da Nova consultam os guias relevantes deste acervo quando o pedido combina com a descrição.
- **Codex em um checkout do projeto:** os guias compartilhados aparecem em `.agents/skills/` quando o checkout preserva os links simbólicos.
- **Claude Code em um checkout do projeto:** os guias ficam em `.claude/skills/`. No aplicativo Claude, o mecanismo de habilitação depende da modalidade de sessão.
- **Notebook (Claude Code):** rodar `scripts/instalar-notebook.ps1` no PowerShell. Ele clona ou atualiza este repositório em `%USERPROFILE%\skills` e copia as skills pra `%USERPROFILE%\.claude\skills`. Rodar de novo sempre que o repositório for atualizado.

## Atualizar

`bash scripts/atualizar.sh` baixa a versão mais nova de cada origem e substitui as pastas. Depois é só commitar.

## Skills de motion adicionadas em 04/11/2026

Copiadas sem alteração, com a licença do autor dentro de cada pasta.

| Skill | Origem | Licença | Pra quê |
| --- | --- | --- | --- |
| `gsap-core`, `gsap-timeline`, `gsap-scrolltrigger`, `gsap-plugins`, `gsap-utils`, `gsap-react`, `gsap-frameworks`, `gsap-performance` | greensock/gsap-skills (oficial da GSAP), commit aed9cfd | MIT | GSAP do jeito certo; todos os plugins (SplitText, MorphSVG) são grátis desde a compra pela Webflow |
| `scroll-video-website` | musoyangrigor/scroll-video-website-skill, e61e534 | MIT | Vídeo (Kling, Higgsfield) virando sequência de frames WebP num canvas que roda com o scroll, estilo Apple |
| `shader-for-interfaces` | v2space-labs/shader-for-interfaces, 08fe6fc | MIT | Decide CSS, SVG, Canvas ou WebGL e integra o shader na página com fallback |
| `web-shaders` | owenob1/web-shaders-agent-kit, f027758 | MIT | GLSL/WGSL, Three.js e R3F sem os erros silenciosos |
| `three-best-practices`, `r3f-best-practices` | emalorenzo/three-agent-skills, f950f95 | MIT (declarada no package.json e no SKILL.md) | Desempenho de Three.js e React Three Fiber |
| `rive-web`, `rive-react` | stevysmith/rive-skills, 2f426a1 | MIT | Runtime do Rive (o que o Lando Norris usa na transição e na assinatura) |

Olhadas e deixadas de fora: cinematic-scrub-landing (hoodini; fórmula pronta de fonte e seção que bate de frente com a taste-skill), freshtechbro/claudedesignskills e iart-ai/web-animation-skills (genéricas), OpenAEC Three.js (24 skills, sobreposta à three-best-practices).

## Motion design e vídeo (04/11/2026, segunda leva)

| Skill | Origem | Licença | Pra quê |
| --- | --- | --- | --- |
| `animation-principles`, `motion-art-direction`, `logo-animation`, `after-effects`, `beat-sync-editing`, `color-motion`, `shot-composition`, `motion-background`, `remotion-video` | iart-ai/motion-design-skills, 3c129f7 | MIT | Fundamentos de motion design pra Reels, logo animado e vídeo de marca |
| `bang-motion` | bangtutorial/bang-motion, c1aa65e | MIT | Abertura, promo, bumper e tipografia cinética em HTML + GSAP (+ Three.js), 16:9 ou 9:16. O texto da skill está em indonésio |

Vale conhecer, mas não está copiado aqui:
- **lemo-opuscar** (github.com/lemomo-ai/lemo-opuscar, MIT, 12 mil estrelas): 66 estilos de filme feitos em código (óleo, aquarela, ukiyo-e, produto explodido). Instala como plugin, porque a skill depende do resto do repositório.
- **remotion-dev/skills** (oficial do Remotion): o repositório não traz licença, e o Remotion pede licença de empresa acima de 3 pessoas.
- **vibe-motion/skills** e **iart-ai/motion-skills** (50 skills): bem avaliadas no teste da lista awesome-claude-video-skills; a vibe-motion não tem licença.
- Lista com teste de 16 skills de vídeo lado a lado: github.com/zhuyansen/awesome-claude-video-skills

## Marketing e anúncios (05/11/2026)

Copiadas sem alteração, com a licença do autor dentro de cada pasta.

| Skill | Origem | Licença | Pra quê |
| --- | --- | --- | --- |
| `product-marketing`, `ads`, `ad-creative`, `copywriting`, `copy-editing`, `cro`, `offers`, `lead-magnets`, `marketing-psychology`, `conversion-tracking`, `analytics`, `attribution`, `ab-testing`, `social`, `image`, `sms`, `customer-research`, `competitor-profiling`, `reverse-engineer-marketing` | coreyhaines31/marketingskills, 88c79f6 (19 das 53; a pasta `tools/` é a mesma do repositório dele) | MIT | Contexto do cliente, tráfego pago, criativo, copy, oferta, CRO, rastreamento, WhatsApp |
| `meta-ads` | itsfromgaurav/ultimate-meta-ads-skill, 269f204 | MIT | Playbook completo de Meta Ads (Flight Plan), corrigido para 2025/2026 |
| `competitor-ads-analyst` | thatrebeccarae/claude-marketing, a8a63ec | MIT | Anúncios dos concorrentes na Biblioteca de Anúncios |

Fica como plugin, fora daqui: **claude-ads** (AgriciDaniel/claude-ads, MIT), sistema de auditoria de contas em 12 plataformas, com núcleo em Python. No Claude Code: `/plugin marketplace add agricidaniel/claude-ads` e `/plugin install claude-ads@ai-marketing-hub-claude-ads`.

Conector oficial do Meta Ads: `https://mcp.facebook.com/ads` (Configurações → Conectores → Adicionar conector personalizado).

Olhadas e deixadas de fora: boringmarketer/meta-ads-skill e mugurc/meta-ads-skill (mesmo nome `meta-ads`; a primeira cobre a API, que o conector oficial resolve, e a segunda é para app), Varnan-Tech/meta-ads-skill (sem licença), o resto da thatrebeccarae/claude-marketing (sobreposta à de Corey Haines).

