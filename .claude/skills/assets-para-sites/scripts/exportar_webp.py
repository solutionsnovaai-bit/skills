"""Exportar uma imagem estática aprovada como WebP sem ampliar o original."""
import argparse
import os
import tempfile
from pathlib import Path

from PIL import Image, ImageOps


def export_webp(source, target, max_width, quality):
    if target.suffix.lower() != ".webp" or source.resolve() == target.resolve():
        raise ValueError("Escolha um novo destino com extensão .webp.")
    if target.exists() and target.samefile(source):
        raise ValueError("O destino aponta para o arquivo original.")
    if max_width < 1 or not 1 <= quality <= 100:
        raise ValueError("Use largura positiva e qualidade entre 1 e 100.")

    with Image.open(source) as original:
        if getattr(original, "is_animated", False):
            raise ValueError("Use uma imagem estática.")
        image = ImageOps.exif_transpose(original)
        alpha = "A" in image.getbands() or "transparency" in image.info
        profile = image.info.get("icc_profile") if image.mode in ("RGB", "RGBA") else None
        image = image.convert("RGBA" if alpha else "RGB")
        if image.width > max_width:
            height = max(1, round(image.height * max_width / image.width))
            image = image.resize((max_width, height), Image.Resampling.LANCZOS)

        target.parent.mkdir(parents=True, exist_ok=True)
        with tempfile.NamedTemporaryFile(dir=target.parent, delete=False) as output:
            temp = Path(output.name)
        try:
            options = {"icc_profile": profile} if profile else {}
            image.save(temp, format="WEBP", quality=quality, method=4, **options)
            os.replace(temp, target)
        finally:
            temp.unlink(missing_ok=True)
        print(f"{target} — {image.width} × {image.height} px — {target.stat().st_size} bytes")


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("origem", type=Path)
    parser.add_argument("destino", type=Path, help="Derivada .webp a criar ou atualizar")
    parser.add_argument("largura", type=int)
    parser.add_argument("--qualidade", type=int, default=82)
    args = parser.parse_args()
    try:
        export_webp(args.origem, args.destino, args.largura, args.qualidade)
    except (OSError, ValueError) as error:
        parser.exit(2, f"Falha ao exportar: {error}\n")


if __name__ == "__main__":
    main()
