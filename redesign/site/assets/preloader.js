/* ============================================================
   WHEELS ON FIRE — the preloader, shared.

   ONE preloader for the whole site: the wheel spins up, brakes, the flames
   rise and the wordmark comes out of them, then the curtain splits. Moved
   out of index.html so every page shows the same thing.

   It is a REAL preloader, not a fixed wait: `hold` is only the minimum the
   brand build needs, and the curtain does not part until `ready()` says the
   page actually has what it needs (the homepage waits for its hero video,
   a tour page for its hero photo). `cap` is the longest it will ever hold,
   so a slow line never leaves anyone staring at red.

     WOF_PRE.run({
       hold:  4,                    // seconds of brand build (minimum)
       cap:   7,                    // hard ceiling
       quick: false,                // drop the 0–100% count, smaller mark
       once:  true,                 // only the first page of a visit gets it
       ready: () => v.readyState>=3,
       onOpen:() => v.play(),       // fires as the curtain starts to part
       onDone:() => initPage()      // fires as it finishes
     });

   `once` is what keeps it from becoming furniture. The mark is an arrival,
   and nobody arrives twice: with it set, the second and every later page of
   a visit skips straight to a short wipe instead of replaying the build.
   Moving between tours was the case that made this obvious.

   Markup lives here too, so it exists once. It is injected by a synchronous
   call at the top of <body>, before any content is painted; the red ground
   comes from html.preloading in preloader.css so there is no flash first.
   ============================================================ */
(function(){

  var MARKUP =
    '<div class="curt curt-l"></div>' +
    '<div class="curt curt-r"></div>' +
    '<div class="pre-stage">' +
      '<img id="preTire"   src="/assets/logo-tire.png"   alt="">' +
      '<img id="preFlames" src="/assets/logo-flames.png" alt="">' +
      '<img id="preWordBg" src="/assets/logo-wordbg.png" alt="">' +
      '<img id="preWord"   src="/assets/logo-word.png"   alt="">' +
      '<img id="preTag"    src="/assets/logo-tag.png"    alt="">' +
    '</div>' +
    '<p class="pre-count"><b id="preNum">0</b><i>%</i></p>' +
    '<div class="pre-bar"><span id="preBar"></span></div>';

  function mount(quick){
    var el = document.getElementById('preloader');
    if (!el){
      el = document.createElement('div');
      el.id = 'preloader';
      el.setAttribute('aria-hidden','true');
      el.innerHTML = MARKUP;
      document.body.insertBefore(el, document.body.firstChild);
    }
    if (quick) el.classList.add('quick');
    document.documentElement.classList.add('preloading');
    return el;
  }

  function run(o){
    o = o || {};
    var hold   = o.hold != null ? o.hold : 4;
    var cap    = o.cap  != null ? o.cap  : hold + 2.8;
    var ready  = o.ready  || function(){ return true; };
    var onOpen = o.onOpen || function(){};
    var onDone = o.onDone || function(){};

    var el = mount(o.quick);
    var docEl = document.documentElement;
    var clear = function(){
      if (el && el.parentNode) el.parentNode.removeChild(el);
      docEl.classList.remove('preloading');
    };

    /* Seen the mark already this visit? Then this is not an arrival. Part the
       curtain straight away — no wheel, no count, just enough of a wipe to
       cover the paint. sessionStorage, so a new visit gets the full thing. */
    var seen = false;
    try { seen = sessionStorage.getItem('wof-seen') === '1'; } catch (e){}
    try { sessionStorage.setItem('wof-seen','1'); } catch (e){}

    if (o.once && seen && typeof gsap !== 'undefined'){
      var stage = el.querySelector('.pre-stage');
      if (stage) stage.style.display = 'none';
      onOpen();
      gsap.timeline({onComplete:clear})
        .to('#preloader .curt-l', {xPercent:-101, duration:.5, ease:'expo.inOut'})
        .to('#preloader .curt-r', {xPercent:101,  duration:.5, ease:'expo.inOut'}, '<')
        .add(onDone, '-=.25');
      return;
    }

    /* no motion, or no GSAP: show nothing and get on with the page */
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || typeof gsap === 'undefined'){
      clear(); onOpen(); onDone(); return;
    }

    /* 1 — tyre spins up to speed (multiples of 360 keep the arch upright)
       2 — brakes hard, stopping just shy of upright, then clicks into place
       3 — flames rise, the wordmark emerges knocked out of them
       4 — the tagline settles and the lockup simply holds */
    var build = gsap.timeline({delay:.15})
      .to('#preTire', {rotation:1080, duration:1.35, ease:'power2.in'})
      .to('#preTire', {rotation:1426, duration:.85,  ease:'power4.out'})
      .to('#preTire', {rotation:1440, duration:.4,   ease:'back.out(2.4)'})
      .to(['#preFlames','#preWordBg','#preWord'], {clipPath:'inset(0% 0 0 0)', duration:1, ease:'power3.out'}, '-=.45')
      .to('#preTag', {opacity:.9, duration:.45, ease:'power1.out'}, '-=.25');
    build.timeScale(build.duration() / hold);

    var preNum = document.getElementById('preNum');
    var preBar = document.getElementById('preBar');
    var c = {v:0};
    var count = gsap.to(c, {
      v:100, duration:hold, delay:.15, ease:'power1.inOut',
      onUpdate:function(){
        var n = Math.round(c.v);
        if (preNum) preNum.textContent = n;
        if (preBar) preBar.style.width = n + '%';
      }
    });

    var t0 = performance.now(), opened = false, poll = null;

    var open = function(){
      if (opened) return; opened = true;
      if (poll) clearInterval(poll);
      /* land the count on 100 and stop everything that touches the mark */
      count.progress(1); count.kill(); build.kill();
      onOpen();
      gsap.timeline({onComplete:clear})
        .to(['.pre-stage','.pre-count','.pre-bar'], {opacity:0, duration:.35, ease:'power2.in'})
        .to('#preloader .curt-l', {xPercent:-101, duration:.8, ease:'expo.inOut'}, '<')
        .to('#preloader .curt-r', {xPercent:101,  duration:.8, ease:'expo.inOut'}, '<')
        .add(onDone, '-=.4');
    };

    var tick = function(){
      if ((performance.now() - t0) / 1000 < hold) return;   /* hold the brand moment */
      if (ready()) open();                                  /* and only then, if loaded */
    };
    poll = setInterval(tick, 120);
    setTimeout(function(){ if (poll) clearInterval(poll); open(); }, cap * 1000);
  }

  window.WOF_PRE = { mount: mount, run: run, MARKUP: MARKUP };

})();
