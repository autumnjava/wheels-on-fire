/* ============================================================
   WHEELS ON FIRE — site chrome.

   The header, the menu overlay and the footer are the same on every page.
   They were written out by hand in each one, so a change meant editing
   thirteen files and hoping none were missed — adding "Home" to the menu
   did exactly that, and the articles quietly lost their current marker.

   They now live once, in partials/, and this stamps them into the pages.
   The markup stays real HTML (no runtime cost, nothing hidden from a
   crawler); only the per-page state is applied here:

     · the menu marks the page you are on (articles count as Our adventures)
     · the contact page drops the header's "Contact us" button

   Run from the site root:  node scripts/build-chrome.mjs
   ============================================================ */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { sliceElement } from './lib/html.mjs';

const P = {
  header: readFileSync('partials/header.html', 'utf8').trim(),
  menu:   readFileSync('partials/menu.html',   'utf8').trim(),
  footer: readFileSync('partials/footer.html', 'utf8').trim()
};

/* which menu entry is "you are here" */
const currentFor = f =>
  /^adventure-bikepacking/.test(f) ? 'our-adventures.html' :
  ['legal.html','general-terms.html'].includes(f) ? null : f;

function menuFor(file){
  const here = currentFor(file);
  return P.menu.replace(/(<a href="\/([^"]+)"[^>]*?)(\s+aria-current="page")?(\s+data-shot=)/g,
    (m, head, href, _cur, tail) =>
      href === here ? head + ' aria-current="page"' + tail : head + tail);
}

/* the contact page is the destination — no button pointing at itself */
const headerFor = file => file === 'contact.html'
  ? P.header.replace(/\n\s*<a href="\/contact\.html" class="btn btn-red">[^<]*<\/a>/, '')
  : P.header;

const REGIONS = [
  ['header', /<header[^>]*>/,                     'header', headerFor],
  ['menu',   /<div class="menu-overlay"[^>]*>/,   'div',    menuFor],
  ['footer', /<footer[^>]*>/,                     'footer', () => P.footer]
];

/* The markup is useless without assets/chrome.css, and that mismatch is exactly
   what left the Get in touch header 830px tall: it is one of the pages carrying
   their own CSS, and it never got the rules for .logo-full. So the tool that
   stamps the chrome also guarantees the stylesheet. It goes above any inline
   <style> so a page's own overrides still win. */
/* tokens.css first: chrome.css, cta.css and site.css are all written against
   those custom properties, so it has to resolve before any of them. */
const CSS = '<link rel="stylesheet" href="/assets/tokens.css">\n'
          + '<link rel="stylesheet" href="/assets/chrome.css">';
/* Test for the tag, not the string: the pages that carry their own CSS also
   mention chrome.css in a comment, and a looser check skips exactly them. */
const withCss = html => html.includes('href="/assets/tokens.css"') ? html
  : /\n<style>/.test(html) ? html.replace(/\n<style>/, `\n${CSS}\n<style>`)
  : html.replace('</head>', `${CSS}\n</head>`);

let touched = 0, report = [];
for (const f of readdirSync('.').filter(x => x.endsWith('.html'))){
  let s = readFileSync(f, 'utf8');
  const before = s;
  const did = [];
  for (const [name, re, tag, build] of REGIONS){
    const r = sliceElement(s, re, tag);
    if (!r) continue;
    s = s.slice(0, r.start) + build(f) + s.slice(r.end);
    did.push(name);
  }
  if (did.length){ const w = withCss(s); if (w !== s){ s = w; did.push('chrome.css'); } }
  if (s !== before){ writeFileSync(f, s); touched++; }
  if (did.length) report.push('  ' + f.padEnd(28) + did.join(', '));
}
report.forEach(l => console.log(l));
console.log('\n✓ chrome stamped into ' + touched + ' pages');
