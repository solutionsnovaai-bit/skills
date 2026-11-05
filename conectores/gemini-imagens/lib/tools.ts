import { z } from "zod";
import type { McpServer } from "@modelcontextprotocol/server";
import { DEFAULT_MODEL, listImageModels, makeImage, type ImageRequest } from "./gemini";

const aspect = z
  .enum(["1:1", "2:3", "3:2", "3:4", "4:3", "4:5", "5:4", "9:16", "16:9", "21:9"])
  .optional()
  .describe("Proporção. 9:16 pra story e reels, 4:5 pra feed, 16:9 pra hero de site.");
const size = z.enum(["1K", "2K", "4K"]).optional().describe("Resolução. 2K por padrão do modelo; 4K só quando precisar de arquivo grande.");
const model = z
  .string()
  .optional()
  .describe(`Modelo do Gemini. Padrão: ${DEFAULT_MODEL}. Use gemini-3-pro-image (Nano Banana Pro) para cenas complexas e texto difícil.`);
const format = z.enum(["jpeg", "png"]).optional().describe("Formato do arquivo. jpeg por padrão (mais leve).");
const previous = z
  .string()
  .optional()
  .describe("interaction_id de uma geração anterior, para continuar editando a mesma imagem com consistência.");

async function respond(req: ImageRequest) {
  try {
    const r = await makeImage(req);
    const lines = [
      r.url ? `Imagem: ${r.url}` : r.storageNote,
      `Modelo: ${r.model}`,
      `interaction_id: ${r.interactionId}`,
      `Tamanho: ${Math.round(r.bytes.byteLength / 1024)} KB (${r.mime})`,
    ];
    const content: Array<{ type: "text"; text: string } | { type: "image"; data: string; mimeType: string }> = [
      { type: "text", text: lines.join("\n") },
    ];
    if (r.inline) content.push({ type: "image", data: r.data, mimeType: r.mime });
    return { content };
  } catch (e) {
    return { isError: true, content: [{ type: "text" as const, text: e instanceof Error ? e.message : String(e) }] };
  }
}

export function registerTools(server: McpServer) {
  server.registerTool(
    "generate_image",
    {
      title: "Gerar imagem com o Gemini",
      description:
        "Gera uma imagem nova com o Gemini (Nano Banana) a partir de um texto. Pode receber imagens de referência por link https (produto, pessoa, estilo). Devolve o link público da imagem e uma prévia.",
      inputSchema: z.object({
        prompt: z.string().min(1).describe("Descrição da imagem, com cena, luz, lente, enquadramento e estilo."),
        reference_image_urls: z.array(z.string().url()).max(14).optional().describe("Até 14 links https de imagens de referência."),
        aspect_ratio: aspect,
        image_size: size,
        model,
        format,
        previous_interaction_id: previous,
      }),
    },
    async (a) =>
      respond({
        prompt: a.prompt,
        imageUrls: a.reference_image_urls,
        aspectRatio: a.aspect_ratio,
        imageSize: a.image_size,
        model: a.model,
        format: a.format,
        previousInteractionId: a.previous_interaction_id,
      }),
  );

  server.registerTool(
    "edit_image",
    {
      title: "Editar imagem com o Gemini",
      description:
        "Edita uma ou mais imagens existentes (links https) seguindo uma instrução: trocar fundo, mudar luz, tirar objeto, juntar produto e cenário, aplicar estilo. Devolve o link público da nova imagem e uma prévia.",
      inputSchema: z.object({
        image_urls: z.array(z.string().url()).min(1).max(14).describe("Links https das imagens a editar ou combinar."),
        instruction: z.string().min(1).describe("O que mudar na imagem."),
        aspect_ratio: aspect,
        image_size: size,
        model,
        format,
        previous_interaction_id: previous,
      }),
    },
    async (a) =>
      respond({
        prompt: a.instruction,
        imageUrls: a.image_urls,
        aspectRatio: a.aspect_ratio,
        imageSize: a.image_size,
        model: a.model,
        format: a.format,
        previousInteractionId: a.previous_interaction_id,
      }),
  );

  server.registerTool(
    "list_image_models",
    {
      title: "Listar modelos de imagem do Gemini",
      description: "Lista os modelos de imagem que a chave do Gemini pode usar agora.",
      inputSchema: z.object({}),
    },
    async () => {
      try {
        const names = await listImageModels();
        return { content: [{ type: "text" as const, text: `Padrão: ${DEFAULT_MODEL}\n${names.join("\n") || "Nenhum modelo de imagem listado."}` }] };
      } catch (e) {
        return { isError: true, content: [{ type: "text" as const, text: e instanceof Error ? e.message : String(e) }] };
      }
    },
  );
}
