/* ============================================================
   WHEELS ON FIRE — <picture> for the images built in the browser.

   The hand-written pages get their wrappers from scripts/build-picture.mjs.
   The ones assembled at runtime — tour cards, tour galleries, the In Action
   wall — go through here instead, so both paths produce the same markup:

     <picture><source type="image/avif" srcset="x.avif"><img src="x.jpg" …></picture>

   A src that is not a .jpg comes back untouched, so a PNG logo or an image
   with no AVIF sibling still renders as a plain <img>.
   ============================================================ */
(function(){
  function pic(src, imgTag){
    return /\.jpe?g$/i.test(src)
      ? '<picture><source type="image/avif" srcset="' +
          src.replace(/\.jpe?g$/i, '.avif') + '">' + imgTag + '</picture>'
      : imgTag;
  }
  window.WOF_PIC = { pic: pic };
})();
