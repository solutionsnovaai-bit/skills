---
name: tokens-de-marca
description: Organizar cores, tipografia, espaçamento e movimento em tokens reutilizáveis para sites e identidades de clientes. Usar para padronizar componentes, temas e versões de marca.
---

# Tokens de marca e movimento

1. Extrair os valores aprovados do projeto e distinguir valor bruto, função semântica e componente. Exemplo: uma cor da paleta alimenta o token da ação principal, que alimenta o botão.
2. Definir nomes pelo papel visual. Incluir duração, curva e distância quando houver movimento recorrente. Usar o formato DTCG quando for necessário intercâmbio entre ferramentas.
3. Conservar uma fonte de verdade e gerar ou mapear CSS para o stack existente. Em Tailwind v4, integrar os valores apropriados em `@theme`, respeitando os nomes e a organização do projeto.
4. Criar temas como conjuntos coerentes. Conferir texto, superfícies e estados de hover, foco, seleção, erro e desabilitado em cada tema.
5. Evitar referências circulares e valores desconectados do sistema. Antes de migrar componentes, mapear os usos atuais para manter as diferenças visuais intencionais.
6. Aplicar primeiro em componentes representativos e verificar a página completa. Atualizar os tokens da marca quando a direção aprovada mudar.

**Entrega.** Tokens ligados aos componentes reais, com exemplo de uso e contraste conferido.

**Fonte.** [Design Tokens Community Group — Format 2025.10](https://www.designtokens.org/tr/2025.10/format/).
