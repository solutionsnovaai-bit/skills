#!/usr/bin/env bash
# Baixa a versão mais nova de cada origem e substitui as pastas em .claude/skills e design-md.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"; S="$ROOT/.claude/skills"; TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT
clone(){ git clone --depth 1 -q "https://github.com/$1.git" "$TMP/$2"; }
copy(){ src="$1"; name="$2"; lic="${3:-}"; rm -rf "$S/$name"; mkdir -p "$S/$name"; (cd "$src" && tar --exclude=.git -cf - .) | (cd "$S/$name" && tar -xf -); if [ -n "$lic" ] && [ ! -e "$S/$name/LICENSE" ] && [ ! -e "$S/$name/LICENSE.md" ]; then cp "$lic" "$S/$name/LICENSE"; fi; }
clone emilkowalski/skills emil;            for d in "$TMP"/emil/skills/*/; do copy "${d%/}" "$(basename "$d")" "$TMP/emil/LICENSE"; done
clone Leonxlnx/taste-skill taste;          copy "$TMP/taste/skills/taste-skill" taste-skill "$TMP/taste/LICENSE"
clone pbakaus/impeccable impeccable;       copy "$TMP/impeccable/.claude/skills/impeccable" impeccable "$TMP/impeccable/LICENSE"; cp "$TMP/impeccable/NOTICE.md" "$S/impeccable/" 2>/dev/null || true
clone vercel-labs/agent-skills vercel;     copy "$TMP/vercel/skills/web-design-guidelines" web-design-guidelines
clone heygen-com/hyperframes hf;           for d in "$TMP"/hf/skills/*/; do copy "${d%/}" "$(basename "$d")" "$TMP/hf/LICENSE"; done
for n in motion-doctrine cut-the-curve seam-craft captions-overlay; do copy "$TMP/hf/.claude/skills/$n" "$n" "$TMP/hf/LICENSE"; done
clone Tejashmakwana/motionmaxxing mm;      rm -rf "$TMP/mm/docs/media"; copy "$TMP/mm" motionmaxxing
clone feitangyuan/onetake onetake;         rm -rf "$TMP/onetake/assets"; find "$TMP/onetake/cases" -type f \( -name '*.mp4' -o -name '*.gif' \) -delete; copy "$TMP/onetake" onetake
clone pyang5166/gbro-collage-broll gbro;   rm -rf "$TMP/gbro/assets"; copy "$TMP/gbro" gbro-collage-broll
clone JohnHeibel/ClaudeAnimationBase cab;  rm -f "$TMP/cab/docs/emotions.webp"; copy "$TMP/cab" claude-animation-base/kit
# lemo-opuscar: só a pasta do plugin (o repositório inteiro traz os filmes de demonstração)
git clone --depth 1 -q --filter=blob:none --sparse https://github.com/lemomo-ai/lemo-opuscar.git "$TMP/lemo"; git -C "$TMP/lemo" sparse-checkout set plugin >/dev/null; copy "$TMP/lemo/plugin/skills/lemo-opuscar" lemo-opuscar "$TMP/lemo/LICENSE"
clone VoltAgent/awesome-design-md dmd;     rm -rf "$ROOT/design-md"; mkdir -p "$ROOT/design-md"; cp -a "$TMP/dmd/design-md/." "$ROOT/design-md/"; cp "$TMP/dmd/LICENSE" "$ROOT/design-md/LICENSE"
if command -v npm >/dev/null; then (cd "$TMP" && npm install -g @playwright/cli@latest >/dev/null && playwright-cli install --skills >/dev/null && copy "$TMP/.claude/skills/playwright-cli" playwright-cli); fi
echo "Pronto. Confira com: git -C \"$ROOT\" status"
