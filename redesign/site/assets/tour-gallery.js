/* ============================================================
   WHEELS ON FIRE — tour gallery rail.

   Drives the photo rail at the foot of the tour detail: the two arrows
   and the bar that shows how far through you are. Shared, because the
   same markup is used by the tours.html quick view and by the standalone
   /tours/<id> pages.

     · standalone pages — wires itself once the markup is on the page
     · tours.html       — WOF_GAL.wire(el) after each render, since the
                          modal rebuilds its body for every tour
   ============================================================ */
(function(){

  function wire(root){
    root = root || document;
    var rail = root.querySelector('[data-gal-rail]');
    if (!rail) return;

    var prev = root.querySelector('[data-gal="prev"]');
    var next = root.querySelector('[data-gal="next"]');
    var bar  = root.querySelector('[data-gal-bar]');
    var foot = root.querySelector('.tv-gal-foot');

    /* one photo plus its gap — read live, so it follows the clamp on resize */
    var step = function(){
      var tile = rail.querySelector('a');
      var gap  = parseFloat(getComputedStyle(rail).columnGap) || 16;
      return (tile ? tile.getBoundingClientRect().width : 260) + gap;
    };

    /* At the end of the rail the leftover distance is less than one photo, so
       the last scroll position cut the left-hand photo in half. Pad the rail
       out to a whole number of steps: every reachable position is then a photo
       boundary, and nothing is ever clipped on the left. The right still runs
       off the page, which is what it is meant to do. */
    var fit = function(){
      rail.style.paddingRight = '0px';
      var st = step();
      var over = rail.scrollWidth - rail.clientWidth;
      if (over <= 2 || st <= 0) return;
      var rest = over % st;
      if (rest > 1) rail.style.paddingRight = (st - rest) + 'px';
    };

    var sync = function(){
      var max = rail.scrollWidth - rail.clientWidth;
      /* a tour with two photos needs no arrows — they all fit */
      if (foot) foot.style.display = max > 2 ? '' : 'none';
      if (prev) prev.disabled = rail.scrollLeft <= 2;
      if (next) next.disabled = rail.scrollLeft >= max - 2;
      if (bar){
        /* share of the rail currently in view, so a rail that fits shows full */
        var seen = rail.scrollWidth > 0
          ? (rail.scrollLeft + rail.clientWidth) / rail.scrollWidth : 1;
        bar.style.width = Math.max(6, Math.min(100, seen * 100)) + '%';
      }
    };

    /* assigned, not added: the modal re-renders and must not stack handlers */
    if (prev) prev.onclick = function(){ rail.scrollBy({left:-step(), behavior:'smooth'}); };
    if (next) next.onclick = function(){ rail.scrollBy({left: step(), behavior:'smooth'}); };

    rail.addEventListener('scroll', sync, {passive:true});
    window.addEventListener('resize', function(){ fit(); sync(); });
    fit(); sync();
  }

  window.WOF_GAL = { wire: wire };

  /* the standalone pages have their markup already — wire on load */
  if (document.querySelector('[data-gal-rail]')) wire(document);

})();
