/* Find a whole element by its opening tag, balancing nested tags of the same
   name. Used to lift the header / menu / footer out of the pages verbatim. */
export function sliceElement(html, openRe, tag){
  const m = html.match(openRe);
  if (!m) return null;
  const start = m.index;
  const open = new RegExp('<' + tag + '\\b', 'g');
  const close = new RegExp('</' + tag + '>', 'g');
  let depth = 0, i = start;
  while (i < html.length){
    open.lastIndex = i; close.lastIndex = i;
    const o = open.exec(html), c = close.exec(html);
    if (!c) return null;
    if (o && o.index < c.index){ depth++; i = o.index + 1; }
    else {
      depth--; i = c.index + 1;
      if (depth === 0) return {start, end: c.index + ('</' + tag + '>').length};
    }
  }
  return null;
}
