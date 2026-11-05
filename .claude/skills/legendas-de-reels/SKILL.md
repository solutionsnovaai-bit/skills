---
name: legendas-de-reels
description: Transcrever a fala de um vídeo em português e criar, corrigir ou sincronizar legendas SRT para Reels, entrevistas e anúncios. Usar para pedidos de legendas, subtítulos ou transcrição de takes, mesmo sem menção à skill.
---

# Legendas de Reels

1. Trabalhar com a montagem final ou com os intervalos que realmente entrarão no corte. Identificar idioma, faixa de diálogo e duração. Se já houver SRT, VTT ou transcrição com tempos, reaproveitá-los e corrigir só o necessário. Texto sem tempos serve como roteiro; o áudio é necessário para verificar o sincronismo.
2. Usar a transcrição disponível na sessão ou uma instalação local do Whisper com modelo já disponível. Com a CLI do OpenAI Whisper e o modelo multilíngue `small` já instalado, por exemplo: `whisper "montagem.mp4" --model small --language pt --task transcribe --output_format srt --output_dir legendas`. Ajustar modelo e idioma à fonte real. Evitar transcrever novamente se só mudou a apresentação. Para vídeo sem fala, identificar isso. Se faltar acesso ao áudio ou ao motor, indicar o que falta antes de atribuir tempos. Enviar mídia a uma API paga apenas quando esse uso já estiver autorizado.
3. Ouvir as passagens ambíguas e conferir nomes, números, marcas e ofertas com o áudio e o briefing. Dividir cada bloco por unidade de sentido e conferir o texto no formato vertical. Para legendas após cortes ou mudança de velocidade, conferir os tempos na nova linha do tempo.
4. Entregar o `.srt` em UTF-8, com numeração contínua, intervalos `HH:MM:SS,mmm --> HH:MM:SS,mmm`, início menor que fim e separação por linha vazia. Conferir que os blocos cabem na duração do vídeo e que eventos de uma única faixa de fala não se sobrepõem sem intenção. Verificar o primeiro bloco, uma emenda e o último bloco no áudio. Para um pedido de transcrição simples, entregar o texto. Para um MP4 legendado, renderizar o vídeo e verificar a legibilidade.
5. Quando a montagem for em HyperFrames, combinar com `captions-overlay` para a apresentação visual. Em Remotion, usar os tempos verificados na composição e manter a versão editável da legenda.

Fontes de técnica: [OpenAI Whisper](https://github.com/openai/whisper) e [Remotion Captions no acervo oficial da OpenAI](https://github.com/openai/plugins/tree/main/plugins/remotion/skills/remotion-captions).
