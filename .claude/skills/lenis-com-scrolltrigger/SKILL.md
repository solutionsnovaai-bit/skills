---
name: lenis-com-scrolltrigger
description: Integrar ou corrigir rolagem suave com Lenis, GSAP e ScrollTrigger, incluindo cenas presas, navegação por âncora, modais e limpeza no React.
---

# Lenis integrado ao GSAP

1. Conferir os controladores de scroll que já existem. Definir um único responsável pelo avanço do Lenis e manter a rolagem nativa quando ela atender ao projeto.
2. Ao integrar com GSAP, encaminhar o evento de scroll do Lenis para `ScrollTrigger.update`. No ticker do GSAP, converter segundos para milissegundos antes de chamar `lenis.raf(time * 1000)`. Configurar esse fluxo sem executar simultaneamente outro RAF automático do Lenis.
3. Recalcular as medidas após carregamento de fontes e imagens que alteram a geometria. Usar uma atualização controlada depois dessas mudanças.
4. Definir como âncoras, menu, modal e áreas com rolagem interna se comportam. Conferir roda, touch, teclado, voltar do navegador e navegação até a seção de contato.
5. Na desmontagem, remover o callback do ticker, os listeners e os ScrollTriggers pertencentes à cena; destruir a instância quando ela pertencer ao componente. Sob movimento reduzido, manter o acesso imediato ao conteúdo.
6. Ajustar a suavidade observando a resposta no dispositivo alvo. Se o movimento atrasar o contato ou a leitura, reduzir a interpolação.

**Aplicação.** Hero com produto e seções presas, seguido de catálogo com rolagem convencional.

**Fonte.** [Lenis — documentação e integração GSAP](https://github.com/darkroomengineering/lenis).
