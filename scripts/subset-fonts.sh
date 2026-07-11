#!/usr/bin/env bash
# Regenerate the self-hosted subset fonts in src/fonts/ from the
# @fontsource-variable sources in node_modules.
#
# Requires: python3 with fonttools + brotli  (pip install fonttools brotli)
# Run from the project root:  bash scripts/subset-fonts.sh
set -euo pipefail

NR="node_modules/@fontsource-variable/newsreader/files"
IN="node_modules/@fontsource-variable/inter/files"
OUT="src/fonts"
mkdir -p "$OUT"

# Glyphs: Latin (basic + ext-A) + Greek (renders the χρέος brand word in
# headings) + general punctuation + currency + a few arrows/symbols.
UNI_FULL="U+0000-024F,U+0370-03FF,U+2000-206F,U+20A0-20BF,U+2122,U+2192,U+2193,U+2197,U+25A0-25FF"
# Inter (body) never needs Greek.
UNI_LAT="U+0000-024F,U+2000-206F,U+20A0-20BF,U+2122,U+2192,U+2193,U+2197,U+25A0-25FF"

# wght axis instanced to 400–700 — the only weights the page renders.
subset() { # <src> <unicodes> <out>
  python3 -m fontTools.subset "$1" --unicodes="$2" --layout-features='*' \
    --flavor=woff2 --output-file="$3"
  python3 -m fontTools.varLib.instancer "$3" wght=400:700 -o "$3.tmp"
  mv "$3.tmp" "$3"
}

subset "$NR/newsreader-latin-wght-normal.woff2" "$UNI_FULL" "$OUT/newsreader-latin-subset.woff2"
subset "$NR/newsreader-latin-wght-italic.woff2" "$UNI_FULL" "$OUT/newsreader-italic-subset.woff2"
subset "$IN/inter-latin-wght-normal.woff2"      "$UNI_LAT"  "$OUT/inter-latin-subset.woff2"

# Greek for the χρέος brand word — Newsreader has no Greek, so pull a matching
# literary serif from Google Fonts and subset it to just those glyphs.
UA="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"
fetch_greek() { # <css-url> <outname>
  local url
  url="$(curl -s -H "User-Agent: $UA" "$1" | awk '/\/\* greek \*\//{f=1} f&&/woff2/{print; exit}' | grep -oE 'https://[^)]*\.woff2')"
  [ -z "$url" ] && { echo "WARN: no greek url for $2"; return 0; }
  curl -s "$url" -o "/tmp/$2-greek-src.woff2"
  python3 -m fontTools.subset "/tmp/$2-greek-src.woff2" --text='χρέος' --layout-features='*' \
    --flavor=woff2 --output-file="$OUT/$2-greek-subset.woff2"
}
fetch_greek "https://fonts.googleapis.com/css2?family=Literata:opsz,wght@7..72,400..700&display=swap" literata

echo "Done. Subset fonts written to $OUT/"
ls -la "$OUT"/*.woff2
