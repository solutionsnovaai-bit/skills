# Conector do Gemini (imagens)

Servidor MCP próprio, publicado na Vercel (projeto `gemini-imagens`), que dá ao Claude três ferramentas:

- `generate_image`: gera imagem a partir de texto, com até 14 imagens de referência por link.
- `edit_image`: edita ou combina imagens existentes (trocar fundo, luz, juntar produto e cenário).
- `list_image_models`: lista os modelos de imagem que a chave pode usar.

As imagens ficam salvas no Vercel Blob e voltam como link público, mais uma prévia.

## Variáveis no projeto da Vercel

| Variável | Quem coloca | O que é |
| --- | --- | --- |
| `GEMINI_API_KEY` | Você, no painel da Vercel | Chave do Google AI Studio |
| `MCP_SECRET` | Já configurada | Parte secreta do endereço do conector |
| `BLOB_READ_WRITE_TOKEN` | Criada junto com o Blob | Permite salvar as imagens |
| `DEFAULT_IMAGE_MODEL` | Opcional | Troca o modelo padrão (hoje `gemini-nano-banana-2.1`) |

O endereço do conector é `https://<domínio>/<MCP_SECRET>/mcp`. Sem o segredo certo, a página responde 404. Se o endereço vazar, troque o `MCP_SECRET` na Vercel e refaça o deploy.

## Rodar local

```
npm install
MCP_SECRET=um-segredo-com-24-caracteres-ou-mais GEMINI_API_KEY=... npm run dev
```
