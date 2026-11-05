---
name: mapa-animado-de-rota
description: Criar vídeos ou seções de site com mapas, rotas, marcadores e aproximação de localização. Usar em apresentação de franquia, imóvel, região atendida ou trajeto.
---

# Mapa animado e localização

1. Confirmar os pontos geográficos, nomes e trajeto a mostrar. Usar coordenadas verificadas ou dados fornecidos pelo cliente.
2. Escolher uma base estática quando somente marcadores e legendas se movem. Para movimento real de câmera ou mudança de dados, usar o renderer adequado ao projeto, como MapLibre.
3. Conferir o provedor de mapas, acesso aos tiles, atribuição e condições dos recursos usados. Manter as marcas de atribuição exigidas visíveis.
4. Projetar pontos e linhas no mesmo sistema do mapa. Para vídeo, derivar progresso, câmera e marcadores do tempo da composição e aguardar fontes e tiles necessários antes de capturar.
5. Compor o enquadramento para que destino, percurso e legenda sejam legíveis em cada formato. Dar tempo de leitura à localização final e evitar sugerir uma precisão que os dados não fornecem.
6. Conferir a posição dos marcadores em relação às ruas e o resultado ao buscar quadros isolados.

**Aplicação.** Mostrar a chegada à franquia e terminar com endereço e referência visual confirmados.

**Fontes.** [Remotion Maps no acervo da OpenAI](https://github.com/openai/plugins/tree/main/plugins/remotion/skills/remotion-maps) e [MapLibre — Animate a line](https://maplibre.org/maplibre-gl-js/docs/examples/animate-a-line/).
