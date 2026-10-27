"""Build the web-sized Sinny character set from the original PNG files."""

import json
from pathlib import Path

from PIL import Image, ImageOps


ASSETS = Path(__file__).resolve().parent.parent
OUTPUT = Path(__file__).resolve().parent
NAMES = {
    "sinny_angry_生氣.png": "sinny-angry.webp",
    "sinny_bye_bye_再見.png": "sinny-bye-bye.webp",
    "sinny_cheer_加油.png": "sinny-cheer.webp",
    "sinny_crying_委屈大哭_v2.png": "sinny-crying.webp",
    "sinny_good_比讚.png": "sinny-good.webp",
    "sinny_hello_master_v2.png": "sinny-hello-master.webp",
    "sinny_idea_靈光一閃.png": "sinny-idea.webp",
    "sinny_laugh_笑翻.png": "sinny-laugh.webp",
    "sinny_little_trouble_小困擾_v2.png": "sinny-little-trouble.webp",
    "sinny_love_愛心.png": "sinny-love.webp",
    "sinny_no_NO.png": "sinny-no.webp",
    "sinny_ok_OK_v2.png": "sinny-ok.webp",
    "sinny_peek_探頭.png": "sinny-peek.webp",
    "sinny_please_Please.png": "sinny-please.webp",
    "sinny_point_指向.png": "sinny-point.webp",
    "sinny_proud_得意.png": "sinny-proud.webp",
    "sinny_question_疑惑.png": "sinny-question.webp",
    "sinny_shocked_晴天霹靂_v2.png": "sinny-shocked.webp",
    "sinny_sly_grin_陰險奸笑_v2.png": "sinny-sly-grin.webp",
    "sinny_sorry_SORRY.png": "sinny-sorry.webp",
    "sinny_soul_out_靈魂出竅_v2.png": "sinny-soul-out.webp",
    "sinny_surprise_驚訝_v2.png": "sinny-surprise.webp",
    "sinny_thanks_ThankYou.png": "sinny-thanks.webp",
    "sinny_tired_累趴_v2.png": "sinny-tired.webp",
    "sinny_troubled_苦惱.png": "sinny-troubled.webp",
    "sinny_wait_等等.png": "sinny-wait.webp",
    "sinny_yes_YES.png": "sinny-yes.webp",
}


def main():
    actual = {path.name for path in ASSETS.glob("sinny_*.png")}
    if actual != NAMES.keys() or len(set(NAMES.values())) != 27:
        raise SystemExit(f"Source list changed: missing={NAMES.keys() - actual}, extra={actual - NAMES.keys()}")

    records = []
    for source_name, target_name in NAMES.items():
        source = ASSETS / source_name
        target = OUTPUT / target_name
        with Image.open(source) as image:
            image = ImageOps.exif_transpose(image).convert("RGBA")
            image.thumbnail((512, 512), Image.Resampling.LANCZOS)
            image.save(target, "WEBP", quality=84, method=6)
            width, height = image.size
        with Image.open(target) as result:
            if result.size != (width, height) or "A" not in result.getbands():
                raise SystemExit(f"Invalid WebP output: {target_name}")
        records.append({
            "file": target_name,
            "source": source_name,
            "sourceBytes": source.stat().st_size,
            "bytes": target.stat().st_size,
            "width": width,
            "height": height,
        })

    default = "sinny-hello-master.webp"
    records.sort(key=lambda record: (record["file"] != default, record["file"]))
    manifest = {"version": 1, "default": default, "images": records}
    (OUTPUT / "manifest.json").write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    print(f"Converted {len(records)} PNGs: {sum(x['sourceBytes'] for x in records)} -> {sum(x['bytes'] for x in records)} bytes")


if __name__ == "__main__":
    main()
