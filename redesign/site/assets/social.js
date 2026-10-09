/* ============================================================
   WHEELS ON FIRE — Instagram posts and Google reviews, live.

   The client already pays for two Elfsight widgets, so the data is
   already there and already authorised. What we do not want is their
   widget: it renders inside its own shadow DOM and brings its own
   layout, which is not the one we drew. So this takes the data and
   fills our own cards with it.

   Two steps, both public and keyless:
     1. core.service.elfsight.com/p/boot/?w=<widget id>
        returns the widget's settings and a short-lived public token.
     2. the app's data service, with that token in x-widget-token.

   Nothing secret is involved: the token is public, scoped to one
   widget, lasts about two days and is minted fresh on every load —
   it is what the client's own site sends from the browser already.

   If anything fails the rails are simply left empty and the section
   collapses. A dead feed must never take the homepage with it.
   ============================================================ */
(function(){

  var IG   = '2365f321-6e8c-49fd-8cc1-06cc111a13d1';
  var REV  = 'c4e74546-6720-4e9d-b915-19362727499c';
  var PLACE = 'ChIJi7Peti_TXAsRt37k5dh_q8M';   /* the Google listing */
  var MAX_POSTS = 8, MAX_REVIEWS = 10;

  /* ?social=empty forces both sections into their empty state, so the fallback
     can be looked at without waiting for the service to actually fail. It is
     opt-in from the address bar and does nothing to an ordinary visit. */
  var FORCE_EMPTY = /[?&]social=empty\b/.test(location.search);

  var esc = function(s){ return String(s == null ? '' : s)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); };

  /* What a section shows when the feed does not answer — because the service
     is down, because the month's quota on the free plan is spent, or because
     the account was disconnected. It never says which: the visitor cannot act
     on the reason, only on the link. The rail's arrows go with it, since there
     is nothing left to scroll. */
  function empty(rail, line, href, label, navIds){
    if (!rail || rail.children.length) return;
    rail.className = 'social-empty';
    rail.innerHTML = '<p>' + esc(line) + '</p>' +
      '<a class="btn btn-ghost-i" href="' + esc(href) + '" target="_blank" rel="noopener noreferrer">' +
      esc(label) + ' <svg class="arr arr-out" aria-hidden="true"><use href="#i-arr-out"/></svg></a>';
    (navIds || []).forEach(function(id){
      var b = document.getElementById(id);
      if (b && b.parentNode) b.parentNode.style.display = 'none';
    });
  }

  /* Instagram's CDN signs its URLs and answers 403 to anyone else — from the
     browser and from a server alike, with or without a referer. Elfsight runs
     an image proxy for exactly this, and it is the one their own widget uses
     on the client's live site, so the pictures come through it too. */
  var proxy = function(u){
    return 'https://phosphor.utils.elfsightcdn.com/?url=' + encodeURIComponent(u);
  };

  /* The boot call carries both halves we need: the short-lived token and,
     for Instagram, the id of the account the client has connected. */
  function boot(id){
    return fetch('https://core.service.elfsight.com/p/boot/?w=' + id)
      .then(function(r){ return r.json(); })
      .then(function(j){
        var d = j.data.widgets[id].data;
        var src = (d.settings && d.settings.dataServiceSource) || [];
        return {token:d.public_widget_token, pid:(src[0] && src[0].pid) || null};
      });
  }

  /* ---------- Instagram ---------- */
  function posts(){
    var rail = document.getElementById('instaRail');
    if (!rail) return;
    (FORCE_EMPTY ? Promise.reject(new Error('forced')) : boot(IG)).then(function(b){
      /* the account id comes from the widget itself, not written in here —
         reconnecting the Instagram account changes it */
      if (!b.pid) throw new Error('no connected account');
      var src = encodeURIComponent(JSON.stringify({pid:b.pid}));
      return fetch('https://widget-data.service.elfsight.com/api/posts?sources[]=' + src,
                   {headers:{'x-widget-token':b.token}});
    }).then(function(r){ return r.json(); }).then(function(j){
      /* drop anything without a picture BEFORE taking the first eight, or a
         video post silently costs us a tile */
      var list = (j.payload || []).filter(function(p){
        var m = (p.media && p.media[0]) || {};
        return (m.standard && m.standard.url) || (m.thumbnail && m.thumbnail.url);
      }).slice(0, MAX_POSTS);
      if (!list.length) throw new Error('no posts');
      rail.innerHTML = list.map(function(p){
        /* an album carries several files; the first one is the cover */
        var m = (p.media && p.media[0]) || {};
        var img = (m.standard && m.standard.url) || (m.thumbnail && m.thumbnail.url) || '';
        var cap = (p.caption || '').split('\n')[0];
        return '<a class="ig" href="' + esc(p.link) + '" target="_blank" rel="noopener noreferrer"' +
               ' aria-label="' + esc(cap.slice(0,80) || 'Instagram post') + '">' +
               '<img src="' + esc(proxy(img)) + '" alt="" loading="lazy">' +
               '<span class="ig-ov"><span class="ig-stats">' +
                 '<span><svg class="ig-ico" aria-hidden="true"><use href="#i-heart"/></svg>' + (p.likesCount || 0) + '</span>' +
                 '<span><svg class="ig-ico" aria-hidden="true"><use href="#i-comment"/></svg>' + (p.commentsCount || 0) + '</span>' +
               '</span><span class="ig-cap">' + esc(cap.slice(0,70)) + '</span></span></a>';
      }).join('');
    }).catch(function(){
      empty(rail, 'We could not load the feed right now. It is all on Instagram.',
            'https://www.instagram.com/wheelsonfireazores',
            '@wheelsonfireazores', ['igPrev','igNext']);
    });
  }

  /* Mark the reviews that are actually cut, and let them open in place.
     Measured rather than guessed: a short review in a wide card is not
     folded, and the same review on a phone is -- the control has to follow
     the layout, so it is re-measured when the fonts land and on resize. */
  function foldable(rail){
    var mark = function(){
      var cards = rail.querySelectorAll('.review');
      for (var i = 0; i < cards.length; i++){
        if (cards[i].classList.contains('is-open')) continue;
        var t = cards[i].querySelector('.rtext');
        if (t) cards[i].classList.toggle('has-more', t.scrollHeight - t.clientHeight > 2);
      }
    };
    mark();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(mark);
    window.addEventListener('resize', mark);

    rail.addEventListener('click', function(e){
      var b = e.target.closest && e.target.closest('.rmore');
      if (!b) return;
      var card = b.closest('.review');
      var open = card.classList.toggle('is-open');
      b.textContent = open ? 'Read less' : 'Read more';
      b.setAttribute('aria-expanded', open ? 'true' : 'false');
      /* Closing a card that had grown taller than the rail leaves the rail
         scrolled past it; this brings the card back into view. */
      if (!open) card.scrollIntoView({block:'nearest', inline:'nearest'});
    });
  }

  /* ---------- Google reviews ---------- */
  function reviews(){
    var rail = document.getElementById('reviewsRail');
    if (!rail) return;

    /* The headline figure is Google's own, for the whole listing — not the
       average of the handful we show. Those are filtered to four stars and up
       and to ones with text, so averaging them would always flatter us, and a
       score on a page has to be the real one. */
    (FORCE_EMPTY ? Promise.reject(new Error('forced')) : boot(REV)).then(function(b){
      return fetch('https://service-reviews-ultimate.elfsight.com/data/sources?uris%5B%5D=' + PLACE,
                   {headers:{'x-widget-token':b.token}});
    }).then(function(r){ return r.json(); }).then(function(j){
      var src = ((j.result && j.result.data) || [])[0];
      if (!src) return;
      var el = document.getElementById('revScore');
      if (el && src.rating) el.textContent = Number(src.rating).toFixed(1);
      var n = document.getElementById('revCount');
      if (n && src.reviews_number) n.textContent = src.reviews_number + ' reviews';
    }).catch(function(){ /* the headline keeps whatever the page shipped with */ });

    var u = 'https://service-reviews-ultimate.elfsight.com/data/reviews' +
            '?uris%5B%5D=' + PLACE + '&filter_content=text_required&min_rating=4&limit=' + MAX_REVIEWS;
    (FORCE_EMPTY ? Promise.reject(new Error('forced')) : fetch(u).then(function(r){ return r.json(); }))
      .then(function(j){
      var list = ((j.result && j.result.data) || []).slice(0, MAX_REVIEWS);
      if (!list.length) throw new Error('no reviews');
      rail.innerHTML = list.map(function(r){
        /* published_at is a Unix time in seconds, not milliseconds — read
           straight into Date it lands in January 1970. */
        var when = r.published_at ? new Date(r.published_at * 1000).toLocaleDateString('en-GB',
                     {month:'long', year:'numeric'}) : '';
        /* The whole review goes into the page. It used to be cut at 260
           characters with an ellipsis and no way to see the rest, which is
           exactly what the client ran into -- the long ones were unreadable.
           Folding is CSS now, so opening a card costs nothing and the full
           text is there for search engines and screen readers either way. */
        return '<article class="review">' +
          '<div class="stars" aria-label="' + r.rating + ' out of 5">' +
            new Array((r.rating|0) + 1).join('★') + '</div>' +
          '<p class="rtext">' + esc(r.text || '').replace(/\n+/g, '<br>') + '</p>' +
          '<button class="rmore" type="button" aria-expanded="false">Read more</button>' +
          '<p class="who">' + esc(r.reviewer_name) +
            (when ? '<span>' + esc(when) + '</span>' : '') + '</p>' +
        '</article>';
      }).join('');
      foldable(rail);
    }).catch(function(){
      empty(rail, 'We could not load the reviews right now. They are all on our Google page.',
            'https://www.google.com/maps/search/?api=1&query=Wheels%20on%20Fire%20Azores&query_place_id=' + PLACE,
            'Read them on Google', ['revPrev','revNext']);
    });
  }

  posts();
  reviews();
})();
