/* ============================================================
   WHEELS ON FIRE — tour detail markup, shared.

   THE one place the tour detail is written. Used by both:
     · tours.html      — injected at runtime into the quick-view sheet
     · tours/<id>.html — written in at build time by scripts/build-tours.mjs

   So the structure, the section labels and the fixed copy (what's
   included, the insurance line, the bike box) exist exactly once. Add a
   section here and it shows up in the modal and on the pages together.

   Data comes from assets/tours-data.js. Paths are root-absolute because
   tours.html pushes /tours/<id> into the URL, so relative ones would
   resolve against the wrong directory.
   ============================================================ */
(function(){

  /* rider level, in the client's words */
  var READY = {
    alllevels:'You already bike and want to try mountain biking. You can change gear and brake, handle climbs and descents on gravel tracks and forest roads, and you are comfortable riding for three to four hours.',
    intermediate:'You are comfortable on most terrain — singletrack, double track, muddy, dry, loose, exposed trails and rock gardens. You can brake, use gears and corner, and you will have a go at moderate technical features.',
    advanced:'You are very confident handling drops, jumps, rocks, switchbacks and larger rock gardens, with excellent bike handling and real experience on rocky, rooty, loose and exposed trails.'
  };

  var esc  = function(s){ return String(s == null ? '' : s)
    .replace(/&(?!\w+;|#)/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); };
  var attr = function(s){ return esc(s).replace(/"/g,'&quot;'); };
  var A    = function(p){ return (p && p.indexOf('assets/') === 0) ? '/' + p : p; };
  /* AVIF with a JPEG behind it — see assets/picture.js */
  var P    = function(src, tag){ return (typeof window !== 'undefined' && window.WOF_PIC)
               ? window.WOF_PIC.pic(src, tag) : tag; };
  var pad2 = function(i){ return String(i+1).replace(/^(\d)$/,'0$1'); };

  /* the strip in the dark bar: 01 — Sete Cidades — west */
  function badge(t){ return esc(t.name); }

  /* Trail grading, by level. The client's PDF will replace these — they are
     marked pending in the page until it does. A tour may override with its
     own `difficulty:{eu,us}` in tours-data.js. */
  var DIFF = {
    alllevels:   {eu:'Equivalent to green and blue', us:'Equivalent to green and blue'},
    intermediate:{eu:'Equivalent to blue, red in places', us:'Equivalent to blue, black in places'},
    advanced:    {eu:'Equivalent to red and black', us:'Equivalent to black, double black in some parts'}
  };

  /* the whole inside of .tov-body */
  function body(t, opts){
    opts = opts || {};
    var TITLE = opts.titleTag || 'h3';
    var diff  = t.difficulty || DIFF[t.level] || DIFF.alllevels;


    /* The spec block, in the client's own layout: what the tour is on the first
       line, then one line per kind of day it runs. Only the kinds it runs — a
       half-day-only tour shows one row rather than an empty second one. */
    var BAR = ' <i>|</i> ';
    /* What the tour is, in boxes. The level is the one the reader is deciding
       against, so it is the one drawn in red; what bike and how many are grey
       facts around it. The cap is on the scheduled tours, which run in threes;
       the Private tour drops it, because that one can be built for a group. */
    var tags = [{t:esc(t.chips[0]) + ' tour', k:''}, {t:esc(t.chips[1]), k:' lv'}];
    if (t.id !== 'custom' && t.riders) tags.push({t:'Max ' + esc(t.riders) + ' ppl', k:''});
    var specTags = tags.map(function(x){
      return '<span class="tspec-tag' + x.k + '">' + x.t + '</span>'; }).join('');

    var DAY = {half:'Half day', full:'Full day'};
    var rates = t.rates || {};
    var specRows = (t.durations || []).filter(function(d){ return rates[d]; })
      .map(function(d){
        var r = rates[d];
        /* Three separate fields rather than a run of words, so the row can be
           spaced out and so the day, the hours and the price line up down the
           block — they already share a width, the face being monospaced. */
        return '          <p class="tspec-row"><b>' + DAY[d] + '</b>' + BAR +
               '<span>' + esc(r.hrs) + ' hrs</span>' + BAR +
               '<span>' + esc(r.price) + '</span></p>';
      }).join('\n');

    /* the machine, named the way the tour's own bike chip names it */
    var bikeLine = t.chips[0] === 'E-MTB'   ? 'Full suspension e-MTB'
                 : t.chips[0] === 'MTB'     ? 'Full suspension Commencal MTB'
                 : 'Full suspension MTB or e-MTB';

    /* the middle column is the client's 'Highlights & trail features' list */
    var story = t.highlights.map(function(x){ return '<p>' + x + '</p>'; }).join('\n            ');

    var gal = t.gal.map(function(g){
      return '<a href="' + A(g) + '" target="_blank" rel="noopener noreferrer">' +
             P(A(g), '<img src="' + A(g) + '" alt="' + attr(t.name) + ' — on the trail" loading="lazy">') + '</a>';
      }).join('\n          ');

    var pendingTxt = t.note || '* Full tour copy pending from the client.';
    var pending = (t.note || t.pending)
      ? '<p class="tov-pending">' + esc(pendingTxt) + '</p>' : '';

    return '' +
'      <div class="tv-top">\n' +
'        <' + TITLE + ' id="tovName">' + esc(t.name) + '</' + TITLE + '>\n' +
'        <div class="tv-buy">\n' +
'          <span class="tv-price">' + t.price + '</span>\n' +
'          <a class="btn btn-ink" id="tovBook" href="/contact.html?tour=' + encodeURIComponent(t.id) + '">Book this tour <svg class="arr" aria-hidden="true"><use href="#i-arr"/></svg></a>\n' +
'        </div>\n' +
'      </div>\n' +
'\n' +
       /* A tour that cannot run in the wet says so before the reader starts
          planning it, and beside the Book button rather than buried in the
          facts column — it is a condition of the tour, not a detail of it. */
       /* the leading label turns red, and *stars* mark the phrase that must not
          be skimmed past — escaped first, so the data can never inject markup */
       (t.warn ? '      <p class="tv-warn" role="note">' +
         esc(t.warn).replace(/^(Disclaimer:)/, '<b>$1</b>')
                    .replace(/\*([^*]+)\*/g, '<strong>$1</strong>') + '</p>\n\n' : '') +
'      <div class="tv-grid">\n' +
'        <article class="tv-facts tspec">\n' +
'          <div class="tspec-tags">' + specTags + '</div>\n' +
           specRows + '\n' +
'          <div class="tspec-inc">\n' +
'            <span class="tspec-inc-t">Included</span>\n' +
'            <ul>\n' +
'              <li>Guided tour</li>\n' +
'              <li>' + bikeLine + '</li>\n' +
'              <li>POC helmet</li>\n' +
'              <li>Knee pads</li>\n' +
'              <li>Shuttle service</li>\n' +
'            </ul>\n' +
'          </div>\n' +
          /* No price breakdown here either. The figure that matters is the
             "From X€" at the top of the page; spelling out half day / full day /
             own bike underneath it only invited the reader to reconcile them. */
          /* No Book button here: the card came off a page where it was the only
             way to act on it, and this page already carries one at the top,
             beside the price. Two asked the same question twice. */
'          <p class="tspec-note">It is mandatory that you are covered with travel and health insurance before booking a tour with us.</p>\n' +
'          ' + pending + '\n' +
'        </article>\n' +
'\n' +
'        <div class="tv-story">\n            ' + story + '\n        </div>\n' +
'\n' +
'        <aside class="tv-side">\n' +
'          <p class="tv-terrain">' + t.terrain + '</p>\n' +
'          <h4>Trail difficulty</h4>\n' +
'          <dl class="tv-diff">\n' +
'            <div><dt>EU</dt><dd>' + esc(diff.eu) + '</dd></div>\n' +
'            <div><dt>US &amp; CAN</dt><dd>' + esc(diff.us) + '</dd></div>\n' +
'          </dl>\n' +
'        </aside>\n' +
'      </div>\n' +
'\n' +
'      <section class="tv-gal-sec">\n' +
'        <h4 class="tv-gal-title">Tour gallery</h4>\n' +
'        <div class="tv-gal" data-gal-rail data-lb-gallery>\n          ' + gal + '\n        </div>\n' +
'        <div class="tv-gal-foot">\n' +
'          <div class="tv-gal-nav">\n' +
'            <button class="tv-gal-btn" type="button" data-gal="prev" aria-label="Previous photos"><svg aria-hidden="true" viewBox="0 0 32 24"><path d="M31 12H2M12 2 2 12l10 10" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="square"/></svg></button>\n' +
'            <button class="tv-gal-btn" type="button" data-gal="next" aria-label="Next photos"><svg aria-hidden="true" viewBox="0 0 32 24"><path d="M1 12h29M20 2l10 10-10 10" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="square"/></svg></button>\n' +
'          </div>\n' +
'          <div class="tv-gal-bar"><i data-gal-bar></i></div>\n' +
'        </div>\n' +
'      </section>';
  }


  window.WOF_TOURVIEW = { READY: READY, badge: badge, body: body, abs: A };

})();
