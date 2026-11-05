---
name: motion-layout-compartilhado
description: Animar expansão de cards, galerias, abas e mudanças de layout em React com Motion. Usar para transições em que o mesmo produto ou imagem deve acompanhar a mudança de estado.
---

# Motion com elementos compartilhados

1. Identificar o elemento que permanece reconhecível entre os dois estados, como a foto que sai do card e ocupa o detalhe. Medir a composição final antes de animar.
2. Usar `layout` para mudanças de geometria do mesmo componente e `layoutId` quando o elemento alternar entre componentes. Manter identificadores estáveis e exclusivos por item; agrupar contextos independentes quando necessário.
3. Coordenar a saída com `AnimatePresence` e manter a mídia carregada durante a passagem. Em modais, tratar foco, Escape, retorno ao acionador e bloqueio de rolagem junto com a transição.
4. Ajustar a mola ao deslocamento real. Proteger texto, bordas e imagens contra deformação durante o redimensionamento. Preferir animar o contêiner e compor os detalhes internos de forma legível.
5. Com movimento reduzido, apresentar o estado final prontamente. Conferir abrir, fechar, navegar por teclado, mudar de item rapidamente e voltar ao estado inicial.

**Aplicação.** Um colchão no catálogo cresce do card até a ficha, mantendo foto e nome reconhecíveis. A duração acompanha a distância e a hierarquia da informação.

**Fonte.** [Motion — Layout animations](https://motion.dev/docs/react-layout-animations). Aproveitar a versão já usada pelo projeto.
