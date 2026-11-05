# skills

Skills originais de design de site, motion e vídeo, copiadas sem alteração dos repositórios dos autores. A exceção é `referencia-lando-norris`: uma ficha nossa sobre o site do Lando Norris, usada como referência visual quando o projeto pedir, nunca como padrão. A única coisa acrescentada foi o arquivo de licença do autor dentro da pasta da skill, quando no original ele ficava na raiz do repositório.

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

- **Sessões na nuvem (celular, app):** conectar este repositório na sessão. As skills de `.claude/skills/` carregam sozinhas.
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
