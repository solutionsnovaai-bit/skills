---
name: lottie-web-interativo
description: Integrar animações Lottie e dotLottie a sites, logos e interações, incluindo reprodução por estado, pausa fora da tela e versões estáticas.
---

# Lottie e dotLottie em interfaces

1. Identificar o arquivo aprovado e a ação que ele representa. Conferir proporção, duração, origem dos assets e suporte do player aos recursos exportados.
2. Usar o player compatível já presente no projeto, como dotLottie Web. Configurar tamanho do canvas, proporção e resolução adequada ao dispositivo. Esperar o carregamento antes de buscar quadros ou reproduzir trechos.
3. Associar a animação a estados reais: abrir menu, confirmar uma ação ou apresentar a marca. Para loops decorativos, pausar fora da área visível e quando a página estiver oculta.
4. Oferecer um quadro estático ou imagem equivalente sob movimento reduzido e durante falha de carregamento. Manter os controles e textos relevantes em HTML acessível.
5. Remover eventos e destruir o player ao desmontar. Conferir o carregamento do runtime e dos recursos WASM no ambiente de publicação quando o player os exigir.
6. Testar a animação com seu fundo real, especialmente transparência, bordas, tipografia convertida e escala do logo.

**Aplicação.** Logo animado na abertura, seguido de uma versão estática durante a leitura.

**Fonte.** [LottieFiles — dotLottie Web](https://github.com/LottieFiles/dotlottie-web).
