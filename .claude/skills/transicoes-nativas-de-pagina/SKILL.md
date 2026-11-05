---
name: transicoes-nativas-de-pagina
description: Criar transições entre estados ou páginas usando a View Transitions API, com continuidade de imagens, títulos e navegação em sites ou aplicações.
---

# Transições nativas de página

1. Identificar se a mudança acontece dentro do mesmo documento ou entre documentos. Consultar a implementação correspondente ao navegador alvo e ao roteador do projeto.
2. Para uma mudança no mesmo documento, aplicar o estado final dentro do callback de `document.startViewTransition`. Esperar o estado realmente renderizar quando o framework fizer atualizações assíncronas.
3. Dar nomes estáveis aos elementos compartilhados com `view-transition-name`. Garantir unicidade em cada estado e retirar nomes de itens ocultos ou duplicados.
4. Definir o que continua, o que entra e o que sai. Preservar a ação principal, foco, histórico e posição de leitura. Uma imagem compartilhada deve terminar no tamanho e enquadramento corretos.
5. Quando a API estiver indisponível ou o usuário preferir movimento reduzido, executar a mesma atualização de estado diretamente. Tratar cliques rápidos e navegação repetida.
6. Conferir início, fim, retorno e mudança entre tamanhos de tela. Evitar dois sistemas diferentes animando a geometria do mesmo elemento na mesma passagem.

**Aplicação.** A imagem do projeto atravessa a abertura do portfólio para o estudo completo.

**Fonte.** [Chrome — same-document View Transitions](https://developer.chrome.com/docs/web-platform/view-transitions/same-document).
