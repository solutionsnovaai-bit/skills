---
name: camera-de-produto-theatre
description: Dirigir movimentos de câmera, enquadramento e iluminação de produtos 3D com sequências editáveis do Theatre.js. Usar para hero cinematográfico, tour de produto e filmes de apresentação.
---

# Câmera e luz de produto com Theatre.js

1. Importar o modelo real, conferir escala e orientar os planos necessários. Definir os detalhes que a câmera deve revelar e manter a marca visível.
2. Associar propriedades relevantes da cena a objetos do Theatre.js: posição, alvo, rotação, luz e materiais que precisem mudar. Usar nomes estáveis para conservar a edição.
3. Construir uma sequência com enquadramentos legíveis e momentos de pausa para texto ou produto. Controlar aceleração e continuidade dos movimentos entre os planos.
4. Usar o Studio na autoria e exportar o estado necessário para reprodução. Carregar esse estado com o runtime compatível; conferir a separação entre o editor e a experiência publicada.
5. Para vídeo renderizado por quadros, posicionar a sequência pelo tempo do quadro, mantendo a cena reproduzível ao buscar qualquer instante. Para web, controlar início, pausa e descarte de recursos.
6. Preparar um enquadramento estático para movimento reduzido e falha de WebGL. Conferir proporção mobile, legibilidade e peso dos assets.

**Aplicação.** Giro lento de uma conexão de inox até um detalhe de acabamento, com luz que evidencia sua superfície.

**Fontes.** [Theatre.js — Sequences](https://www.theatrejs.com/docs/latest/manual/sequences) e [Projects](https://www.theatrejs.com/docs/latest/manual/projects).
