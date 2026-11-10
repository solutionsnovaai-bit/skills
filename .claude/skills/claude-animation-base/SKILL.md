---
name: claude-animation-base
description: Fazer desenho animado pintado à mão em código (p5.js e p5.brush), com o personagem Clawd ou outro personagem desenhado no mesmo estilo. Usar em pedidos de animação com mascote, cartoon curto, abertura leve ou piada animada, com saída em MP4.
---

# Claude Animation Base

Kit de John Heibel (MIT) em `kit/`: guia, personagem, motor de pintura e renderizador. O vídeo é código p5.js renderizado quadro a quadro. Não usa modelo de vídeo nem crédito de geração.

## Como usar

1. Copie `kit/` inteiro para a pasta do projeto do vídeo e trabalhe na cópia. O kit desta pasta fica como veio.
2. Leia `ANIMATION_GUIDE.md` inteiro antes de desenhar. Ele define como o vídeo é feito: pintado, vivo, uma peça só, sem texto na tela e com transição entre as cenas.
3. Veja as folhas de modelo: `docs/emotions.jpg` (31 emoções) e `docs/views.jpg` (5 vistas, movimentos e chapéus).
4. Faça o storyboard e mostre antes de programar. As cenas ficam em `src/scenes/`.
5. Instale e renderize na cópia:

   ```bash
   npm install
   node render.mjs --clip --out=out/video.mp4
   ```

Precisa de Node.js, Google Chrome e ffmpeg. O `studio.html` aberto no Chrome mostra o vídeo quadro a quadro.

## Cuidados

- Sem placa de vídeo dedicada, os preenchimentos de aquarela levam segundos por quadro. Em máquina sem GPU, renderize com `--soft-gl` e troque a aquarela por outro acabamento.
- O Clawd é baseado no mascote do Claude, da Anthropic. Em vídeo de marca ou de cliente, desenhe outro personagem com as mesmas ferramentas, como o guia permite.
