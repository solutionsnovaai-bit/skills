# Higgsfield — comandos nativos para consultar e priorizar

Verificação: **05/11/2026**, pelo resolvedor de receitas do plugin conectado. Foram consultados **15 comandos reais**, sem executar geração, abrir sessão paga ou gastar créditos.

Este catálogo complementa as **99 skills existentes**. Não representa 15 skills novas instaladas, não registra comandos adicionais e não cria uma skill para o exemplo de casa se formando. Os exemplos de arquitetura e decolagem são ideias de projeto, não tarefas autorizadas.

## Seleção

| Comando | Efeito ou finalidade | Prioridade para consultar |
| --- | --- | --- |
| `/motion` | Catálogo de animações de produto | Alta |
| `/effects` | Catálogo de efeitos visuais | Alta |
| `/genjutsu` | Transferência de movimento ou troca de elementos | Alta |
| `/push-in` | Aproximação suave de câmera | Alta |
| `/pull-back` | Afastamento para revelar a cena | Alta |
| `/crane-reveal` | Revelação com movimento vertical | Alta |
| `/topdown-dive` | Vista superior avançando para um close | Conforme a cena |
| `/macro-glide` | Deslocamento próximo à superfície | Alta |
| `/light-sweep` | Faixa de luz percorrendo o produto | Alta |
| `/product-spin` | Rotação de 360 graus | Conforme a cena |
| `/floating-roll` | Rotação lenta em suspensão | Conforme a cena |
| `/liquid-wrap` | Líquido envolvendo o produto | Conforme a cena |
| `/impact` | Explosão de partículas ao redor | Conforme a cena |
| `/sunrise-pass` | Transição do escuro para luz quente | Alta |
| `/whip-pan` | Panorâmica rápida até o produto | Conforme a cena |

Os 12 presets individuais desta seleção são receitas centradas em **produtos**. O nome de câmera não transforma automaticamente a receita em um fluxo de arquitetura, paisagem ou viagem. Para outro assunto, preparar uma adaptação explícita e preservar as referências do cliente.

## Regras de custo de Victor

1. **Pesquisa, curadoria e aprimoramento do acervo: zero execução de geração.** Não fazer uma geração de teste para validar uma skill.
2. **Imagens:** usar a geração integrada do ChatGPT ou imagens existentes. Nunca consumir créditos Higgsfield para imagens, inclusive frames intermediários, capas ou pré-processamento. Usar imagem no Higgsfield somente com gratuidade de fato confirmada para aquela operação e intenção de gerá-la; plano Pro ou a palavra Unlimited no site não bastam.
3. **Vídeos:** priorizar Seedance, Wan e recursos Higgsfield adequados ao pedido. Modelos Google/Veo ficam fora do gasto Higgsfield; Victor usa Gemini/Flow. Kling é alternativa, considerando a conta separada que ele já possui, e não escolha automática.
4. Consultar o modelo, os inputs, as dimensões, a duração, a quantidade e o custo total antes de submeter. Trabalhar apenas dentro da alocação que Victor autorizar. Se uma etapa não tiver preço, não executar. Uma consulta de preço não é autorização.
5. Contabilizar a cadeia inteira: vídeo, imagens intermediárias, edição, upscale e novas tentativas. Reutilizar entradas confirmadas; não reenviar geração após uma resposta incerta sem recuperar seu status.
6. Em anúncios ou projetos de vídeo comuns, considerar a preferência de Victor pelo Flow; não gastar Higgsfield apenas por estar conectado. Para sites, gerar só o clipe necessário e fazer o scroll, os textos e as transições em código.
7. Estas preferências do usuário prevalecem sobre defaults de receitas externas, inclusive instruções para executar imediatamente ou omitir a cotação.

## O que as receitas realmente fazem

Os 12 presets de produto consultados pedem uma **imagem intermediária com Nano Banana Pro no Higgsfield** e, depois, vídeo com **Seedance 2.0**, por padrão 6 segundos, 1080p, 3:4 e sem áudio. São parâmetros observados, não uma cotação ou promessa de compatibilidade futura. Algumas opções da receita podem divergir do catálogo atual; validar o schema antes de qualquer execução.

**Por isso, essas receitas não podem ser executadas integralmente como estão sob a restrição atual de imagens pagas.** Não esconder esse custo porque o frame não é entregue separadamente.

Quando Victor quiser o efeito, preparar o frame aqui ou reutilizar uma imagem aprovada, então verificar se o fluxo aceita esse frame diretamente e cotar apenas as etapas permitidas. Se for necessário trocar modelo ou caminho de execução, apresentar como **adaptação do efeito**, sem afirmar que é a execução literal do preset. Se não houver um caminho compatível, informar a limitação; não gastar créditos nem substituir em silêncio.

## Acionamento correto

- Ao receber um comando, resolver seu token exato no plugin antes de pedir entradas ou inventar um modelo. Consultar a receita é leitura.
- `/motion` sem outras instruções abre a galeria Marketing Studio, categoria motion, e termina ali.
- `/effects` sem outras instruções abre a galeria Viral e termina ali.
- `/genjutsu` sem preset escolhido abre a galeria correspondente. Com pedido explícito de transferência de movimento, preservar a imagem e o vídeo de referência. Trocar um objeto é outra operação.
- Um pedido de trends Genjutsu exige consultar o feed de tendências atual. Não dizer que um preset está em alta por memória.
- Abrir uma galeria ou selecionar uma opção não autoriza gasto. Se a interface já tiver criado um job, acompanhar esse job em vez de duplicá-lo.
- O comando de preset, o ID de catálogo e o ID do modelo são entidades diferentes. Não passar o nome do efeito como modelo.
- Não instalar CLI, conectar editor ou habilitar novos serviços apenas para consultar estes comandos.

## Combinação com sites

Para uma direção visual inspirada em Lando Norris, aproveitar `referencia-lando-norris`, `scroll-video-website`, `lenis-com-scrolltrigger`, `gsap-scrolltrigger` e `animation-performance` já existentes. Consultar este catálogo quando houver necessidade real de um clipe gerado.

Escolher um movimento legível em avanço e retorno do scroll. Um clipe curto não limita o tempo de interação: o código associa a posição da rolagem aos frames. Preservar conteúdo e CTA acessíveis, enquadramento mobile, poster e alternativa estática; medir rede e memória antes de preferir sequência de frames ou vídeo nativo. Não impor o estilo Lando a todo cliente.

## Fontes e verificação

- Fonte de execução: receitas atuais retornadas por `get_preset_instructions` do **plugin Higgsfield**, uma consulta por comando. O snapshot resumido está em [higgsfield-comandos.json](higgsfield-comandos.json); não contém jobs ou geração.
- [Skills oficiais Higgsfield](https://github.com/higgsfield-ai/skills): referência de descoberta e execução; usa CLI em parte dos fluxos. Não copiar seus defaults de geração de imagem ou execução sem cotação para Victor.
- [Guias O-Side Media](https://github.com/OSideMedia/higgsfield-ai-prompt-skill): material adicional de câmera, Seedance e continuidade. Fonte comunitária, não documentação oficial nem benchmark independente.
- [Genjutsu — ajuda oficial](https://higgsfield.ai/creator-hub/help-center/tools/how-do-i-use-genjutsu).
- [Cinema Studio — ajuda oficial](https://higgsfield.ai/creator-hub/help-center/tools/how-do-i-use-cinema-studio).

A verificação desta curadoria cobre existência, finalidade e instruções retornadas. **Qualidade visual, execução das adaptações e compatibilidade de cada cena ainda não foram testadas por geração.** Nenhum custo futuro foi fixado no catálogo.
