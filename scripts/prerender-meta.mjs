// Runs after `vite build`. Link-preview bots (WhatsApp, X, Facebook, LinkedIn)
// do not run JavaScript, so they only see the <head> of the HTML file they get.
// This writes dist/<route>/index.html for each public page with that page's own
// title, description, URL and image. Only <head> tags change — no guide content
// is added to the HTML.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { COUNTRIES } from '../src/lib/countries.js';
import { GUIDE_CONTENT } from '../src/lib/guideContent.js';
import { DEFAULT_IMAGE, PAGE_SEO, countrySeo, pageUrl } from '../src/lib/seo.js';

const dist = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const template = readFileSync(join(dist, 'index.html'), 'utf8');

const escape = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function setTag(html, pattern, value, label) {
  if (!pattern.test(html)) throw new Error(`prerender-meta: could not find ${label} in dist/index.html`);
  return html.replace(pattern, (_, before, after) => `${before}${escape(value)}${after}`);
}

function render({ title, description, canonical, image }) {
  let html = template;
  html = setTag(html, /(<title>)[^<]*(<\/title>)/, title, '<title>');
  html = setTag(html, /(<meta name="description" content=")[^"]*(")/, description, 'meta description');
  html = setTag(html, /(<link rel="canonical" href=")[^"]*(")/, canonical, 'canonical');
  html = setTag(html, /(<meta property="og:url" content=")[^"]*(")/, canonical, 'og:url');
  html = setTag(html, /(<meta property="og:title" content=")[^"]*(")/, title, 'og:title');
  html = setTag(html, /(<meta property="og:description" content=")[^"]*(")/, description, 'og:description');
  html = setTag(html, /(<meta property="og:image" content=")[^"]*(")/, image, 'og:image');
  html = setTag(html, /(<meta name="twitter:title" content=")[^"]*(")/, title, 'twitter:title');
  html = setTag(html, /(<meta name="twitter:description" content=")[^"]*(")/, description, 'twitter:description');
  html = setTag(html, /(<meta name="twitter:image" content=")[^"]*(")/, image, 'twitter:image');
  return html;
}

function write(route, meta) {
  const file = route === '/' ? join(dist, 'index.html') : join(dist, route, 'index.html');
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, render(meta));
}

let count = 0;
for (const [route, meta] of Object.entries(PAGE_SEO)) {
  write(route, { ...meta, canonical: pageUrl(route), image: DEFAULT_IMAGE });
  count++;
}
for (const country of COUNTRIES) {
  write(`/country/${country.code}`, countrySeo(country, GUIDE_CONTENT[country.code]));
  count++;
}
console.log(`prerender-meta: wrote link-preview tags for ${count} pages`);
