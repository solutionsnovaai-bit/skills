---
name: assets-para-sites
description: Preparar imagens de produto, hero e banners para sites, incluindo versão mobile, transparência e exportação WebP. Usar quando pedirem assets para landing page ou catálogo, inclusive durante a criação do site.
---

# Assets para sites

1. Identificar onde entram título, CTA e produto nos layouts desktop e celular. Priorizar a foto aprovada quando a peça, o rosto, o rótulo ou o logo precisarem ser exatos. Se só forem necessários outros tamanhos, redimensionar a mesma imagem.
2. Para uma imagem nova ou um fundo que falta, usar a ferramenta de imagem disponível na sessão. No ChatGPT com geração de imagens, produzir o asset diretamente. Em outro ambiente, aproveitar a mídia fornecida ou a integração já configurada. Se o briefing exigir gerar e esse recurso faltar, entregar a especificação e identificar a imagem que ainda precisa ser produzida. Usar serviço pago apenas quando já autorizado.
3. Fixar ponto focal, espaço para o título e iluminação. Em um catálogo de inox com texto à esquerda, por exemplo, posicionar as peças à direita no desktop. No celular, reorganizar título e produto para manter tudo visível. Usar a mesma foto aprovada, com escala proporcional, quando a peça tiver de ser idêntica. Produzir uma segunda composição somente se a primeira não couber bem no outro formato. Manter títulos e botões como HTML.
4. Em projetos com Python e Pillow, usar o [exportador](scripts/exportar_webp.py) para cada largura necessária. Exemplo: `python3 scripts/exportar_webp.py hero-desktop.png public/hero-wide-1280.webp 1280` a partir da pasta da skill, fornecendo os caminhos reais dos arquivos. O argumento é a largura máxima. O exportador respeita a orientação, conserva a transparência e limita a resolução à do original.
5. No site, usar `srcset` e `sizes` para resoluções da mesma composição, e `<picture>` quando o celular tiver uma composição diferente. Usar a largura real de cada arquivo no descritor `w`. Conferir proporção, bordas transparentes, peso e espaço para texto em ambos os layouts. Entregar os assets solicitados.

Base de produção: [OpenAI Creative Production](https://github.com/openai/plugins/tree/main/plugins/creative-production/skills/produce).
