/* ============================================================
   WHEELS ON FIRE — standalone tour pages.

   Writes /tours/<id>.html: a real, shareable, indexable page per tour.

   NOTHING about the design or the content lives here. The page is only a
   shell around two shared pieces:
     · assets/tour-view.js    — the detail markup (also used by the modal)
     · assets/tour-detail.css — the detail styling (also used by the modal)
   So the only things that differ between a tour page and the tours.html
   quick view are the footer and the way it opens.

   Run from the site root:  node scripts/build-tours.mjs
   Re-run whenever tours-data.js or tour-view.js changes.
   ============================================================ */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

/* The footer is partials/footer.html, the same one build-chrome.mjs stamps
   into every hand-written page. It used to be copied out again here, and
   the copy drifted the moment the nav changed. */
const FOOTER = readFileSync(join(ROOT, 'partials/footer.html'), 'utf8').trim();

/* load the two browser modules by shimming the global they assign to */
const win = {};
win.window = win;
const load = f => new Function('window', readFileSync(join(ROOT, f), 'utf8'))(win);
load('assets/picture.js');      /* WOF_PIC — tour-view.js asks for it */
load('assets/tour-card.js');    /* WOF_CARD — the cards in the Other tours rail */
load('assets/tours-data.js');
load('assets/tour-view.js');

const TOURS = win.WOF_TOURS;
const V     = win.WOF_TOURVIEW;
if (!Array.isArray(TOURS)) { console.error('WOF_TOURS not found'); process.exit(1); }
/* The hero crops a photograph to a wide band, and the middle of the file is
   rarely the middle of the picture. Tours that say where their subject sits
   get that point held; the rest stay centred. */
const focusAttr = t => t.focus ? ` style="object-position:center ${t.focus}"` : '';

if (!V || !V.body)         { console.error('WOF_TOURVIEW not found'); process.exit(1); }

const SITE = 'https://wof-redesign-proposal.vercel.app';

const esc  = s => String(s == null ? '' : s).replace(/&(?!\w+;|#)/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const attr = s => esc(s).replace(/"/g,'&quot;');
const strip = s => String(s).replace(/<[^>]+>/g,'');

function page(t, prev, next){
  const desc  = strip(t.desc);
  const url   = `${SITE}/tours/${t.id}`;
  const hero  = V.abs(t.hero);

  /* Every other tour, as the card the homepage and the Tours grid already use.
     Written in at build time rather than at runtime: the list never changes
     between visits, so there is nothing for a script to decide. The rail starts
     at the tour that follows this one, so the order still reads as "next". */
  const others = cur => {
    const i = TOURS.findIndex(x => x.id === cur.id);
    return TOURS.slice(i + 1).concat(TOURS.slice(0, i))
      .map(x => '    ' + win.WOF_CARD.html(x)).join('\n');
  };

  return `<!doctype html>
<html lang="en" class="preloading" style="--th:${t.theme}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- Design proposal for client review — must not be indexed as the live site. -->
<meta name="robots" content="noindex,nofollow">
<title>${esc(t.name)} — MTB Tour · São Miguel, Azores | Wheels on Fire</title>
<meta name="description" content="${attr(desc)}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="website">
<meta property="og:title" content="${attr(t.name + ' — MTB Tour · Wheels on Fire')}">
<meta property="og:description" content="${attr(desc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE}${hero}">
<meta name="twitter:card" content="summary_large_image">
<link rel="stylesheet" href="/assets/tokens.css">
<link rel="stylesheet" href="/assets/chrome.css">
<link rel="stylesheet" href="/assets/site.css">
<link rel="stylesheet" href="/assets/picture.css">
<!-- the same two files tours.html loads for its quick view -->
<link rel="stylesheet" href="/assets/tour-colours.css">
<link rel="stylesheet" href="/assets/tour-card.css">
<link rel="stylesheet" href="/assets/rail.css">
<link rel="stylesheet" href="/assets/tour-detail.css">
<link rel="stylesheet" href="/assets/preloader.css">
<link rel="stylesheet" href="/assets/lightbox.css">
<link rel="stylesheet" href="/assets/tour.css">
</head>
<body>
<!-- the site preloader, mounted before anything paints -->
<script src="/assets/preloader.js"></script>
<script>WOF_PRE.mount(true);</script>

<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false">
  <symbol id="i-arr" viewBox="0 0 32 24"><path d="M1 12h29M20 2l10 10-10 10" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="square"/></symbol>
  <symbol id="i-arr-l" viewBox="0 0 32 24"><path d="M31 12H2M12 2 2 12l10 10" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="square"/></symbol>
</svg>

<div class="grain" aria-hidden="true"></div>

<!-- the quick-view sheet, as a page -->
<article class="tsheet" id="top">

  <div class="tov-bar">
    <span class="tov-ctx"><i>The tours</i><b>${V.badge(t)}</b></span>
    <a class="tov-close" href="/tours.html">
      <span class="x" aria-hidden="true"><span></span><span></span></span> All tours
    </a>
  </div>

  <div class="tov-hero">
    ${win.WOF_PIC.pic(hero, `<img src="${hero}" alt="${attr(t.name)} — ${attr(strip(t.region))}"${focusAttr(t)}>`)}
  </div>

  <div class="tov-body">
${V.body(t, {titleTag:'h1'})}
  </div>
</article>

<section class="section t-more">
  <div class="rail-head">
    <h2 class="disp">Other tours</h2>
    <div class="rail-actions">
      <div class="rail-nav">
        <button class="rail-btn on-dark" id="morePrev" type="button" aria-label="Previous tours" aria-controls="moreRail"><svg aria-hidden="true"><use href="#i-arr-l"/></svg></button>
        <button class="rail-btn on-dark" id="moreNext" type="button" aria-label="Next tours" aria-controls="moreRail"><svg aria-hidden="true"><use href="#i-arr"/></svg></button>
      </div>
    </div>
  </div>
  <div class="tour-rail" id="moreRail">
${others(t)}
  </div>
</section>

${FOOTER}

<script src="/assets/tour-gallery.js"></script>
<script src="/assets/lightbox.js"></script>
<script src="/assets/rail.js"></script>
<script>WOF_RAIL.wire('moreRail', 'morePrev', 'moreNext', '.card');</script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
<script>
/* A short brand hold, then the curtain parts as soon as the hero photo is
   actually decoded — the wait is real, not a timer. */
WOF_PRE.run({
  /* once: moving from tour to tour is not an arrival — the second page of a
     visit gets a short wipe instead of the whole build. */
  hold: 1.5, cap: 4, quick: true, once: true,
  ready: () => { const i = document.querySelector('.tov-hero img'); return !!i && i.complete && i.naturalWidth > 0; }
});
</script>
</body>
</html>`;
}

TOURS.forEach((t, i) => {
  writeFileSync(join(ROOT, 'tours', `${t.id}.html`), page(t, TOURS[i-1] || null, TOURS[i+1] || null), 'utf8');
  console.log('  wrote tours/' + t.id + '.html  (' + t.name + ')');
});
console.log('\n✓ ' + TOURS.length + ' tour pages — detail from assets/tour-view.js');
