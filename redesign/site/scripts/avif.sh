#!/bin/bash
# WHEELS ON FIRE — an AVIF sibling for every photograph.
#
# The JPEG stays: it is what <img src> points at and what a browser too old
# for AVIF gets. The .avif next to it is what everything current picks up,
# through the <source> that scripts/build-picture.mjs adds.
#
# preset 4 / crf 32 is the same setting the Volcanic Tales set was cut at:
# slow enough to beat JPEG properly, quick enough to run over the library.
# Files are left alone if their .avif is already newer than the source.
set -u
made=0; skipped=0
while IFS= read -r f; do
  out="${f%.*}.avif"
  if [ -f "$out" ] && [ "$out" -nt "$f" ]; then skipped=$((skipped+1)); continue; fi
  # -nostdin is load-bearing: without it ffmpeg swallows the file list this
  # loop is reading, and entries get eaten mid-name and silently skipped.
  ffmpeg -nostdin -v error -y -i "$f" -c:v libsvtav1 -preset 4 -crf 32 \
         -svtav1-params tune=0 -frames:v 1 "$out" 2>/dev/null
  # judge on the file, not on ffmpeg's status: libsvtav1 writes its banner to
  # stderr and returns non-zero often enough to make the exit code useless here
  if [ -s "$out" ]; then made=$((made+1)); else echo "  falhou: $f"; fi
# Only what ships. assets/_originals and "assets/Our Tours" are raw camera
# files kept locally and excluded in .vercelignore — converting them would be
# 100MB of work that never leaves this machine.
done < <(find assets -type f \( -iname '*.jpg' -o -iname '*.jpeg' \) \
           -not -path 'assets/_originals/*' -not -path 'assets/Our Tours/*' | sort)
echo "convertidos: $made   já existentes: $skipped"
