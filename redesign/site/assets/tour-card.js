/* ============================================================
   WHEELS ON FIRE — tour card, shared.

   The card the Tours page grid and the homepage rail both use. It was
   written out twice (as .card and as .trail) and the two drifted: the
   homepage still showed a terrain line and no price. One renderer now,
   fed from assets/tours-data.js.
   ============================================================ */
(function(){
  var A = function(p){ return (p && p.indexOf('assets/') === 0) ? '/' + p : p; };
  /* AVIF with a JPEG behind it — see assets/picture.js */
  /* window-qualified on both sides: build-tours.mjs runs this file against a
     plain object standing in for window, where a bare WOF_PIC is not a global. */
  var P = function(src, tag){ return window.WOF_PIC ? window.WOF_PIC.pic(src, tag) : tag; };
  var bike = function(t){
    return t.type === 'any' ? 'MTB / E-MTB' : (t.type === 'mtb' ? 'MTB' : 'E-MTB');
  };
  function html(t){
    return '<a class="card" href="/tours/' + t.id + '.html" data-tour="' + t.id + '" style="--th:' + t.theme + '">' +
      '<span class="card-img">' +
        '<span class="card-type">' + bike(t) + '</span>' +
        /* the thumb crops the same photograph to 16:10, so it holds the same
           point the hero does */
        P(A(t.hero),
          '<img src="' + A(t.hero) + '" alt="' + t.name + ' — ' + t.region + '"' +
          (t.focus ? ' style="object-position:center ' + t.focus + '"' : '') + '>') +
      '</span>' +
      '<span class="card-body">' +
        '<h3>' + t.name + '</h3>' +
        '<span class="card-chips">' + t.chips.map(function(c){ return '<span>' + c + '</span>'; }).join('') + '</span>' +
        /* only the tours that declare one — a name like Westside speaks for
           itself, the Private Tour does not */
        (t.cardNote ? '<span class="card-note">' + t.cardNote + '</span>' : '') +
        '<span class="card-foot">' +
          '<span class="pr">' + t.price + '</span>' +
          '<span class="card-open">View tour <svg aria-hidden="true"><use href="#i-arr"/></svg></span>' +
        '</span>' +
      '</span></a>';
  }
  window.WOF_CARD = { html: html };
})();
