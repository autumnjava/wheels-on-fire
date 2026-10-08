/* ============================================================
   WHEELS ON FIRE — AVIF, without touching a single hand-written tag twice.

   Every <img> pointing at a .jpg gets wrapped:

     <picture><source type="image/avif" srcset="x.avif"><img src="x.jpg" …></picture>

   The browser takes the AVIF when it can and the JPEG when it cannot, and
   the <img> stays exactly as written — same attributes, same classes, same
   place in the DOM. assets/site.css gives <picture> display:contents so the
   wrapper is not even a box, which is why no layout or selector changes.

   Run scripts/avif.sh first: this only wraps an image whose .avif is on disk.
   Safe to run twice — an <img> already inside a <picture> is left alone.
   ============================================================ */
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';

const SITE = new URL('..', import.meta.url).pathname;
const IMG  = /<img\b[^>]*?\ssrc="([^"]+\.(?:jpe?g))"[^>]*>/gi;

/* Where a src resolves on disk: root-absolute paths hang off the site root,
   the rest off the page's own folder. */
const onDisk = (src, pageDir) =>
  src.startsWith('/') ? join(SITE, src.slice(1)) : join(SITE, pageDir, src);

/* Already wrapped? Look back for a <picture> that has not been closed yet. */
const wrapped = (html, at) => {
  const before = html.slice(0, at);
  return before.lastIndexOf('<picture') > before.lastIndexOf('</picture>');
};

const pages = process.argv.slice(2).length
  ? process.argv.slice(2)
  : readdirSync(SITE).filter(f => f.endsWith('.html'))
      .concat(readdirSync(join(SITE,'tours')).map(f => 'tours/' + f))
      .concat(readdirSync(join(SITE,'partials')).map(f => 'partials/' + f));

/* The wrappers are useless — worse, harmful — without picture.css, and four
   pages carry their own CSS and never load site.css. So the tool that adds a
   wrapper is also the thing that guarantees the stylesheet: any page holding a
   <picture> gets the link, whether this run put it there or an earlier one did. */
const CSS = '<link rel="stylesheet" href="/assets/picture.css">';
const ensureCss = html =>
  html.includes('assets/picture.css') || !html.includes('<picture>')
    ? html
    : html.replace('</head>', `${CSS}\n</head>`);

let total = 0, skipped = 0, linked = 0;
for (const page of pages){
  const file = join(SITE, page);
  const src  = readFileSync(file, 'utf8');
  const dir  = dirname(page);
  let out = '', last = 0, n = 0;

  for (const m of src.matchAll(IMG)){
    const [tag, url] = m;
    if (wrapped(src, m.index)) { skipped++; continue; }
    const avif = url.replace(/\.jpe?g$/i, '.avif');
    if (!existsSync(onDisk(avif, dir))) { skipped++; continue; }
    out += src.slice(last, m.index) +
           `<picture><source type="image/avif" srcset="${avif}">${tag}</picture>`;
    last = m.index + tag.length;
    n++;
  }
  let html = n ? out + src.slice(last) : src;
  const withCss = ensureCss(html);
  if (withCss !== html) linked++;
  if (withCss === src) continue;
  writeFileSync(file, withCss);
  console.log(`  ${page.padEnd(30)} ${n} imagens` + (withCss !== html ? ' + picture.css' : ''));
  total += n;
}
console.log(`\n✓ ${total} <img> embrulhados, ${skipped} deixados como estavam, ${linked} paginas ligadas ao picture.css`);
