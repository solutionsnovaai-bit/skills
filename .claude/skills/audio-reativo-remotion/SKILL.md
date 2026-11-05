---
name: audio-reativo-remotion
description: Criar ondas, espectros e movimentos ligados ao áudio em vídeos Remotion. Usar para visualização de voz, peças musicais e animação reativa a frequências ou energia sonora.
---

# Motion reativo ao áudio

1. Usar o áudio exato que entrará no filme e identificar o trecho, deslocamento e velocidade aplicados na edição.
2. Obter os dados de áudio com as ferramentas compatíveis da versão instalada de Remotion. Derivar a visualização do quadro e da taxa de quadros da composição.
3. Escolher se o movimento acompanha a amplitude, uma faixa de frequência ou eventos de ritmo. Limitar a intensidade para conservar texto e produto legíveis.
4. Ajustar a resolução da análise conforme o recurso escolhido; conferir os requisitos de `numberOfSamples` ao usar `visualizeAudio`. Usar suavização determinística quando necessária.
5. Verificar o sincronismo depois de cortes, atrasos e mudanças de velocidade. Conferir silêncio, trechos baixos e picos.
6. Testar o render ao buscar quadros isolados e ao renderizar a sequência completa. Usar o mesmo áudio e a mesma base temporal no som final.

**Aplicação.** Uma onda acompanha a fala de um consultor enquanto o texto principal e a identidade permanecem estáveis.

**Fontes.** [Remotion — Audio visualization](https://www.remotion.dev/docs/audio/visualization) e [visualizeAudio](https://www.remotion.dev/docs/visualize-audio).
