/* ============================================================
   WHEELS ON FIRE — gallery lightbox, shared.

   The viewer the articles already use, made reusable so a tour gallery
   opens its photographs in it instead of dumping the file in a new tab.
   Styling is assets/lightbox.css — one source for both.

   It wires itself to any rail marked [data-lb-gallery]: each <a href>
   inside becomes a slide, and the link's own href stays as the fallback
   for no-JS, middle-click and "open image in new tab".

     WOF_LB.wire(root)        — (re)wire the galleries inside root
     WOF_LB.open(items, i)    — open a list of {src, cap} directly

   The markup is injected once, so a page carries nothing for it.
   ============================================================ */
(function(){

  var lb, stage, elKind, elIndex, elCap, btnPrev, btnNext, btnClose;
  var media = null, items = [], idx = 0, lastFocus = null;
  var isOpen = false, raf = null, hideTimer = null;

  function build(){
    if (lb) return;
    lb = document.createElement('div');
    lb.className = 'lb';
    lb.id = 'wofLb';
    lb.setAttribute('role','dialog');
    lb.setAttribute('aria-modal','true');
    lb.setAttribute('aria-label','Photo viewer');
    lb.hidden = true;
    lb.innerHTML =
      '<div class="lb-bar">' +
        '<p class="lb-ctx"><span class="lb-kind">Photo</span> &nbsp;<b class="lb-index"></b></p>' +
        '<button class="lb-close" type="button">' +
          '<span class="x" aria-hidden="true"><span></span><span></span></span> Close</button>' +
      '</div>' +
      '<div class="lb-stage">' +
        '<button class="lb-nav lb-prev" type="button" aria-label="Previous">' +
          '<svg aria-hidden="true" viewBox="0 0 32 24"><path d="M31 12H2M12 2 2 12l10 10" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="square"/></svg></button>' +
        '<button class="lb-nav lb-next" type="button" aria-label="Next">' +
          '<svg aria-hidden="true" viewBox="0 0 32 24"><path d="M1 12h29M20 2l10 10-10 10" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="square"/></svg></button>' +
      '</div>' +
      '<div class="lb-foot"><p class="lb-cap"></p></div>';
    document.body.appendChild(lb);

    stage   = lb.querySelector('.lb-stage');
    elKind  = lb.querySelector('.lb-kind');
    elIndex = lb.querySelector('.lb-index');
    elCap   = lb.querySelector('.lb-cap');
    btnPrev = lb.querySelector('.lb-prev');
    btnNext = lb.querySelector('.lb-next');
    btnClose= lb.querySelector('.lb-close');

    btnPrev.addEventListener('click', function(){ idx--; render(); });
    btnNext.addEventListener('click', function(){ idx++; render(); });
    btnClose.addEventListener('click', close);
    lb.addEventListener('click', function(e){ if (e.target === lb || e.target === stage) close(); });
    document.addEventListener('keydown', function(e){
      if (!lb || lb.hidden) return;
      if (e.key === 'Escape'){ e.stopPropagation(); close(); }
      else if (e.key === 'ArrowLeft'  && !btnPrev.disabled){ idx--; render(); }
      else if (e.key === 'ArrowRight' && !btnNext.disabled){ idx++; render(); }
    }, true);
  }

  function render(){
    if (media){ media.remove(); media = null; }
    idx = (idx + items.length) % items.length;
    media = document.createElement('img');
    media.src = items[idx].src;
    media.alt = items[idx].cap || '';
    stage.appendChild(media);
    elKind.textContent  = 'Photo';
    elIndex.textContent = (idx + 1) + ' / ' + items.length;
    elCap.textContent   = items[idx].cap || '';
    btnPrev.disabled = btnNext.disabled = items.length < 2;
  }

  function open(list, i){
    if (!list || !list.length) return;
    build();
    items = list; idx = i || 0; isOpen = true;
    clearTimeout(hideTimer); cancelAnimationFrame(raf);
    lastFocus = document.activeElement;
    lb.hidden = false;
    raf = requestAnimationFrame(function(){ if (isOpen) lb.classList.add('open'); });
    document.body.classList.add('locked');
    render();
    btnClose.focus({preventScroll:true});
  }

  function close(){
    isOpen = false;
    cancelAnimationFrame(raf);
    lb.classList.remove('open');
    document.body.classList.remove('locked');
    if (media){ media.remove(); media = null; }
    clearTimeout(hideTimer);
    hideTimer = setTimeout(function(){ if (!isOpen) lb.hidden = true; }, 320);
    if (lastFocus) lastFocus.focus({preventScroll:true});
  }

  /* Delegated, and assigned rather than added, so the tours.html modal can
     re-wire after it rebuilds its body without stacking handlers. */
  function wire(root){
    root = root || document;
    [].slice.call(root.querySelectorAll('[data-lb-gallery]')).forEach(function(rail){
      rail.onclick = function(e){
        var a = e.target.closest('a[href]');
        if (!a || !rail.contains(a)) return;
        /* let the browser have the modified clicks — new tab, download, save */
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        e.preventDefault();
        var links = [].slice.call(rail.querySelectorAll('a[href]'));
        open(links.map(function(x){
          var img = x.querySelector('img');
          return {src:x.getAttribute('href'), cap:(img && img.alt) || ''};
        }), links.indexOf(a));
      };
    });
  }

  window.WOF_LB = { wire: wire, open: open };

  if (document.readyState === 'loading')
    document.addEventListener('DOMContentLoaded', function(){ wire(document); });
  else wire(document);

})();
