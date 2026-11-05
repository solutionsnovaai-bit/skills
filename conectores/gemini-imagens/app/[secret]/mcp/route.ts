import { timingSafeEqual } from "node:crypto";
import { createMcpHandler } from "mcp-handler";
import { registerTools } from "@/lib/tools";

export const runtime = "nodejs";
export const maxDuration = 300;

const handler = createMcpHandler((server) => registerTools(server), {
  serverInfo: { name: "gemini-imagens", version: "1.0.0" },
});

function authorized(secret: string): boolean {
  const expected = process.env.MCP_SECRET;
  if (!expected || expected.length < 24) return false;
  const a = Buffer.from(secret);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

async function route(req: Request, ctx: { params: Promise<{ secret: string }> }) {
  const { secret } = await ctx.params;
  if (!authorized(secret)) return new Response("Not found", { status: 404 });
  return handler(req);
}

export { route as GET, route as POST, route as DELETE };
