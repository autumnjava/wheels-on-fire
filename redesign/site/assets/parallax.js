/* ============================================================
   WHEELS ON FIRE — parallax, shared.

   The same six lines were written out four times: once in site.js and
   again inline in index, tours and bikes. This is the one copy.

     data-parallax            the layer drifts down as you scroll past it.
                              A number sets how far, in percent of its own
                              height — data-parallax="12" travels twice as
                              far as the default 6, so it reads as deeper.
                              Give the element enough inset in CSS to cover
                              the travel, or its edges come into view.

     data-parallax-up         the same, the other way. Put it on something
                              in FRONT of a data-parallax layer and the two
                              separate as you scroll: the near thing rises
                              while the far thing sinks. That is the whole
                              trick behind the CTA — the wordmark lifts off
                              the truck instead of sitting flat on it.

   Both are scrubbed against their own parent section, so a layer only
   moves while that section is on screen.
   ============================================================ */
(function(){

  function wire(root){
    root = root || document;
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    /* The section the layer belongs to. Climb past any ancestor that draws no
       box of its own — <picture> is display:contents, so an <img> inside one
       has a parent ScrollTrigger cannot measure, and the layer would never
       move. */
    var frame = function(el){
      var p = el.parentElement;
      while (p && getComputedStyle(p).display === 'contents') p = p.parentElement;
      return p || el;
    };

    var travel = function(el, attr, sign){
      var d = parseFloat(el.getAttribute(attr));
      if (!isFinite(d) || d <= 0) d = 6;
      gsap.fromTo(el, {yPercent: -sign * d}, {yPercent: sign * d, ease:'none',
        scrollTrigger:{trigger: frame(el), start:'top bottom', end:'bottom top', scrub:true}});
    };

    root.querySelectorAll('[data-parallax]').forEach(function(el){ travel(el, 'data-parallax',  1); });
    root.querySelectorAll('[data-parallax-up]').forEach(function(el){ travel(el, 'data-parallax-up', -1); });
  }

  window.WOF_PARA = { wire: wire };

})();
