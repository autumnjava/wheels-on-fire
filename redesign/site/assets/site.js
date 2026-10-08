/* ============================================================
   WHEELS ON FIRE — shared page chrome

   The header state, the split-screen menu and the scroll reveals are
   identical on every page, so they live here instead of being pasted
   into each one. The four original pages still carry their own inline
   copy; the pages added later load this file.

   Everything degrades: with no GSAP, or with prefers-reduced-motion,
   the menu becomes a plain show/hide and the reveals simply sit open.
   ============================================================ */
(function(){
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var coarse  = window.matchMedia('(pointer: coarse)').matches;
  var docEl   = document.documentElement;

  /* ---------- header: compact on scroll, wheel turns with it ---------- */
  var header = document.getElementById('header');
  var lmSpin = document.getElementById('lmTire');
  if (header){
    var ticking = false;
    var onScroll = function(){
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function(){
        header.classList.toggle('scrolled', window.scrollY > 60);
        if (lmSpin && !reduced) lmSpin.style.transform = 'rotate(' + (window.scrollY * 0.4 % 360) + 'deg)';
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, {passive:true});
    onScroll();
  }

  /* ---------- split-screen menu ---------- */
  var overlay = document.getElementById('menuOverlay');
  var toggle  = document.getElementById('menuToggle');
  if (overlay && toggle){
    var shots  = [].slice.call(document.querySelectorAll('#moShots img'));
    var cap    = document.getElementById('moCap');
    var mlinks = [].slice.call(overlay.querySelectorAll('[data-menu-link]'));
    var menuTl = null, menuBusy = false;

    /* hovering a link swaps the photo on the other half */
    mlinks.forEach(function(a){
      var show = function(){
        var i = +a.dataset.shot;
        if (!shots[i]) return;
        shots.forEach(function(im,n){ im.classList.toggle('on', n === i); });
        if (cap) cap.textContent = shots[i].dataset.cap || '';
      };
      a.addEventListener('mouseenter', show);
      a.addEventListener('focus', show);
    });

    var isOpen = function(){ return toggle.getAttribute('aria-expanded') === 'true'; };
    var canAnimate = !reduced && typeof gsap !== 'undefined';

    var setMenu = function(open){
      if (menuBusy || open === isOpen()) return;
      toggle.setAttribute('aria-expanded', open);
      docEl.style.overflow = open ? 'hidden' : '';
      document.body.classList.toggle('menu-open', open);

      if (!canAnimate){ overlay.classList.toggle('open', open); return; }

      menuBusy = true;
      if (!menuTl){
        overlay.classList.add('open');
        menuTl = gsap.timeline({paused:true,
          onReverseComplete: function(){ overlay.classList.remove('open'); menuBusy = false; },
          onComplete: function(){ menuBusy = false; }
        })
          .to('.mo-nav',    {clipPath:'inset(0 0 0% 0)', duration:.6, ease:'expo.inOut'})
          .to('.mo-visual', {clipPath:'inset(0 0 0% 0)', duration:.6, ease:'expo.inOut'}, .08)
          .from(mlinks,     {y:34, opacity:0, duration:.55, ease:'power3.out', stagger:.055}, .32)
          .from('.mo-side', {y:16, opacity:0, duration:.45, ease:'power2.out'}, .5)
          .from('.mo-shot-cap', {opacity:0, duration:.4}, .55);
      }
      if (open){ overlay.classList.add('open'); menuTl.play(); }
      else     { menuTl.reverse(); }
    };

    toggle.addEventListener('click', function(){ setMenu(!isOpen()); });
    mlinks.forEach(function(a){ a.addEventListener('click', function(){ setMenu(false); }); });
    document.addEventListener('keydown', function(e){
      /* a page-level dialog (lightbox) handles Escape itself and stops it here */
      if (e.key === 'Escape' && isOpen()) setMenu(false);
    });
  }

  /* ---------- motion ---------- */
  if (reduced || typeof gsap === 'undefined'){ document.body.classList.add('no-anim'); return; }
  gsap.registerPlugin(ScrollTrigger);

  document.querySelectorAll('[data-reveal]').forEach(function(el){
    gsap.fromTo(el, {y:42, opacity:0},
      {y:0, opacity:1, duration:.9, ease:'power3.out',
       scrollTrigger:{trigger:el, start:'top 97%', once:true}});
  });

  /* Parallax is a nicety, and on touch it costs more than it gives. */
  if (!coarse){
    /* the layers themselves — assets/parallax.js, shared with the pages
       that carry their own inline script */
    if (window.WOF_PARA) WOF_PARA.wire(document);
  }
})();
