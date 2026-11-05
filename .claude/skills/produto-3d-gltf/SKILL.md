---
name: produto-3d-gltf
description: Preparar e otimizar modelos glTF/GLB de produtos para sites e vídeos. Usar quando um hero 3D demora a carregar, um modelo é pesado ou materiais e detalhes precisam ser preservados.
---

# Produto 3D com GLB otimizado

1. Inspecionar o arquivo original com glTF Transform e registrar geometria, texturas, animações, materiais e tamanho. Guardar o original para comparação.
2. Definir o detalhe que precisa ser visível no enquadramento final. Ajustar resolução das texturas conforme sua área real na tela e preservar texto, rótulos e reflexos importantes.
3. Aplicar transformações selecionadas em uma cópia. Conferir impacto de compressão de geometria, redução de textura e remoção de dados sem uso separadamente quando houver perda visual.
4. Ao usar extensões como Draco, Meshopt ou texturas comprimidas, configurar os decodificadores compatíveis no carregador do site. Verificar o arquivo no mesmo runtime em que será publicado.
5. Comparar silhueta, materiais, transparência, normais, animações e sombras com o original. Medir o carregamento do modelo no dispositivo alvo e verificar a recuperação após mudança de página.
6. Disponibilizar poster e reservar espaço no layout durante o carregamento. Descartar texturas e geometrias quando a cena deixar de existir.

**Aplicação.** Um produto com acabamento metálico continua reconhecível no celular com menor transferência de dados.

**Fonte.** [glTF Transform — CLI](https://gltf-transform.dev/cli) e [repositório](https://github.com/donmccurdy/glTF-Transform).
