import { GoogleGenAI } from "@google/genai";
import { put } from "@vercel/blob";

export const DEFAULT_MODEL = process.env.DEFAULT_IMAGE_MODEL || "gemini-nano-banana-2.1";
const MAX_REF_BYTES = 15 * 1024 * 1024;
const MAX_INLINE_BYTES = 900 * 1024;

let client: GoogleGenAI | null = null;
function gemini(): GoogleGenAI {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("GEMINI_API_KEY não está configurada no projeto da Vercel.");
  client ??= new GoogleGenAI({ apiKey });
  return client;
}

type Ref = { mime: string; data: string };

async function fetchReference(url: string): Promise<Ref> {
  if (!/^https:\/\//i.test(url)) throw new Error(`A imagem precisa de um link https: ${url}`);
  const res = await fetch(url, { redirect: "follow" });
  if (!res.ok) throw new Error(`Não consegui baixar ${url} (HTTP ${res.status}).`);
  const mime = (res.headers.get("content-type") || "").split(";")[0].trim();
  if (!mime.startsWith("image/")) throw new Error(`${url} não é uma imagem (${mime || "sem tipo"}).`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.byteLength > MAX_REF_BYTES) throw new Error(`${url} passa de 15 MB.`);
  return { mime, data: buf.toString("base64") };
}

export type ImageRequest = {
  prompt: string;
  imageUrls?: string[];
  model?: string;
  aspectRatio?: string;
  imageSize?: string;
  format?: "jpeg" | "png";
  previousInteractionId?: string;
};

export async function makeImage(req: ImageRequest) {
  const model = req.model || DEFAULT_MODEL;
  const mime = req.format === "png" ? "image/png" : "image/jpeg";
  const refs = await Promise.all((req.imageUrls ?? []).map(fetchReference));

  const input = refs.length
    ? [{ type: "text" as const, text: req.prompt }, ...refs.map((r) => ({ type: "image" as const, mime_type: r.mime, data: r.data }))]
    : req.prompt;

  const interaction = await gemini().interactions.create({
    model,
    input,
    response_format: {
      type: "image",
      mime_type: mime,
      ...(req.aspectRatio ? { aspect_ratio: req.aspectRatio } : {}),
      ...(req.imageSize ? { image_size: req.imageSize } : {}),
    },
    ...(req.previousInteractionId ? { previous_interaction_id: req.previousInteractionId } : {}),
  } as Parameters<GoogleGenAI["interactions"]["create"]>[0]) as {
    id: string;
    output_image?: { data?: string; mime_type?: string; uri?: string };
    output_text?: string;
  };

  const out = interaction.output_image;
  if (!out?.data && !out?.uri) {
    throw new Error(`O Gemini não devolveu imagem.${interaction.output_text ? " Resposta: " + interaction.output_text : ""}`);
  }

  let data = out.data;
  let outMime = out.mime_type || mime;
  if (!data && out.uri) {
    const r = await fetch(out.uri);
    data = Buffer.from(await r.arrayBuffer()).toString("base64");
    outMime = (r.headers.get("content-type") || outMime).split(";")[0];
  }
  const bytes = Buffer.from(data!, "base64");
  const ext = outMime.includes("png") ? "png" : outMime.includes("webp") ? "webp" : "jpg";

  let url: string | null = null;
  let storageNote = "";
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    const day = new Date().toISOString().slice(0, 10);
    const blob = await put(`gemini/${day}/${interaction.id.slice(-12)}.${ext}`, bytes, {
      access: "public",
      contentType: outMime,
      addRandomSuffix: true,
    });
    url = blob.url;
  } else {
    storageNote = "Blob não configurado: a imagem não foi salva em link.";
  }

  return { model, interactionId: interaction.id, url, storageNote, mime: outMime, bytes, data: data!, inline: bytes.byteLength <= MAX_INLINE_BYTES };
}

export async function listImageModels(): Promise<string[]> {
  const pager = await gemini().models.list();
  const names: string[] = [];
  for await (const m of pager) {
    const n = (m.name || "").replace(/^models\//, "");
    if (/image|banana/i.test(n)) names.push(n);
  }
  return names;
}
