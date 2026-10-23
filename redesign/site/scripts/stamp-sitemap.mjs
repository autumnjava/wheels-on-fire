/* Bring every <lastmod> in sitemap.xml up to the date that page was really
   last changed, taken from git rather than from the filesystem -- a fresh
   clone gives every file the same checkout time, which would tell Google
   the whole site changed at once and is worth nothing as a hint.
   Run it after a batch of content edits:  node scripts/stamp-sitemap.mjs   */
import { readFileSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://www.wheelsonfireazores.com';
const file = join(ROOT, 'sitemap.xml');
let xml = readFileSync(file, 'utf8');

/* /tours/forest -> tours/forest.html, and the bare root -> index.html */
const pageFor = loc => {
  const path = loc.replace(SITE, '').replace(/^\//, '');
  return (path === '' ? 'index' : path) + '.html';
};

const lastChanged = rel => {
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%ad', '--date=short',
                                     '--', rel], { cwd: ROOT, encoding: 'utf8' }).trim();
    return out || null;
  } catch { return null; }
};

let changed = 0, missing = [];
xml = xml.replace(/<loc>(.*?)<\/loc><lastmod>(.*?)<\/lastmod>/g, (m, loc, was) => {
  const rel = pageFor(loc);
  const now = lastChanged(rel);
  if (!now) { missing.push(rel); return m; }
  if (now !== was) changed++;
  return `<loc>${loc}</loc><lastmod>${now}</lastmod>`;
});

writeFileSync(file, xml);
console.log(`  ${changed} date(s) updated`);
if (missing.length) console.log('  no git date for:', missing.join(', '));
