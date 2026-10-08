/* ============================================================
   WHEELS ON FIRE — horizontal rail behaviour, shared.

   Was written once inside index.html and driving its three rails from
   there. The tour detail pages need the same thing at the foot, so it
   lives here now.

     WOF_RAIL.wire('railId', 'prevId', 'nextId', '.tile')

   A click moves two tiles, measured live so it follows the clamp on
   resize rather than assuming a width. The arrows disable themselves at
   each end, which is the only affordance saying the row has an end.
   ============================================================ */
(function(){

  function wire(railId, prevId, nextId, tileSel){
    var rail = document.getElementById(railId);
    var prev = document.getElementById(prevId);
    var next = document.getElementById(nextId);
    if (!rail || !prev || !next) return;

    var step = function(){
      var tile = rail.querySelector(tileSel);
      var gap  = parseFloat(getComputedStyle(rail).columnGap) || 16;
      return (tile ? tile.getBoundingClientRect().width : 240) + gap;
    };
    var sync = function(){
      var max = rail.scrollWidth - rail.clientWidth - 2;
      prev.disabled = rail.scrollLeft <= 2;
      next.disabled = rail.scrollLeft >= max;
    };

    prev.addEventListener('click', function(){ rail.scrollBy({left:-step()*2, behavior:'smooth'}); });
    next.addEventListener('click', function(){ rail.scrollBy({left: step()*2, behavior:'smooth'}); });
    rail.addEventListener('scroll', sync, {passive:true});
    window.addEventListener('resize', sync);
    /* A rail that is filled later — the Instagram posts and the Google reviews
       arrive from the network after this runs — was measured while it was
       still empty, so both arrows were born disabled and stayed that way.
       Re-measure whenever the tiles change. */
    if (window.MutationObserver){
      new MutationObserver(sync).observe(rail, {childList:true});
    }
    sync();
  }

  window.WOF_RAIL = { wire: wire };

})();
