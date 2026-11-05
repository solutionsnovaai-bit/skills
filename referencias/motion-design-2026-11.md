# Motion e design — seleção de 05/11/2026

Esta leva acrescenta 15 guias ao acervo, que passa de 63 para 78 skills. São adaptações da Nova para aplicar as fontes abaixo em trabalhos reais. O guia de extração de design inclui também os arquivos originais do Google Labs, com licença Apache 2.0.

## Como escolher

Partir do efeito ou da entrega solicitada. Aproveitar o stack existente e consultar apenas os guias necessários à etapa. Cada guia descreve aplicação, dependências e critérios de conferência. Os novos guias possuem entrada em `.claude/skills/` e atalho em `.agents/skills/`.

| Guia | Aplicação | Fonte principal |
| --- | --- | --- |
| [Motion com elementos compartilhados](../.claude/skills/motion-layout-compartilhado/SKILL.md) | Cards e imagens que acompanham a abertura do detalhe. | Motion |
| [Lenis integrado ao GSAP](../.claude/skills/lenis-com-scrolltrigger/SKILL.md) | Rolagem suave integrada a cenas presas e animações. | darkroomengineering / Lenis |
| [Transições nativas de página](../.claude/skills/transicoes-nativas-de-pagina/SKILL.md) | Continuidade entre estados e páginas. | Chrome for Developers |
| [Galeria editorial com expansão](../.claude/skills/galeria-editorial-codrops/SKILL.md) | Galerias fotográficas com expansão de conteúdo. | Codrops |
| [Lottie e dotLottie em interfaces](../.claude/skills/lottie-web-interativo/SKILL.md) | Logos, ícones e animações por estado. | LottieFiles |
| [Desenho e transformação de SVG](../.claude/skills/svg-draw-e-morph/SKILL.md) | Assinaturas, traços e transformação de vetores. | Anime.js |
| [Tipografia variável editorial](../.claude/skills/tipografia-variavel-editorial/SKILL.md) | Títulos expressivos com eixos tipográficos. | web.dev |
| [Tokens de marca e movimento](../.claude/skills/tokens-de-marca/SKILL.md) | Cores, tipos, espaçamento e movimento reutilizáveis. | Design Tokens Community Group |
| [Extrair design system do código](../.claude/skills/extrair-design-do-site/SKILL.md) | Extrair a linguagem visual de um projeto existente. | Google Labs / Stitch |
| [Câmera e luz de produto com Theatre.js](../.claude/skills/camera-de-produto-theatre/SKILL.md) | Câmera, luz e sequências editáveis para produto 3D. | Theatre.js |
| [Produto 3D com GLB otimizado](../.claude/skills/produto-3d-gltf/SKILL.md) | Preparar modelos 3D leves preservando a aparência. | glTF Transform |
| [Motion Canvas para filmes explicativos](../.claude/skills/motion-canvas-explicativo/SKILL.md) | Filmes explicativos com controle de tempo. | Motion Canvas |
| [Motion reativo ao áudio](../.claude/skills/audio-reativo-remotion/SKILL.md) | Ondas e movimento acompanhando voz ou música. | Remotion |
| [Correspondência de cor entre takes](../.claude/skills/color-match-de-takes/SKILL.md) | Coerência de exposição e cor entre tomadas. | OpenColorIO |
| [Mapa animado e localização](../.claude/skills/mapa-animado-de-rota/SKILL.md) | Rotas e aproximação de localização. | OpenAI / Remotion Maps e MapLibre |

## Critério de seleção

Priorizar documentação dos mantenedores, técnicas com aplicação no stack dos clientes e especialidades ausentes na organização anterior do acervo. Os guias complementam os fundamentos de GSAP, direção de arte e performance existentes.

A publicação inclui revisão estrutural dos manifests, recursos locais e atalhos. A execução de cada biblioteca depende do ambiente do projeto; os quinze fluxos ainda precisam de uso em entregas reais para medir seu resultado. Recursos de assinatura, tokens de serviço e runtimes externos devem ser conferidos quando a tarefa precisar deles.
