// Runs after `vite build`. Crawlers that don't run JavaScript (link previews,
// Bing, AI search tools) only see the HTML file they are served, so for every
// public page this writes dist/<route>/index.html with:
//   - that page's own <title>, description, canonical URL and share image
//   - structured data (JSON-LD) for the page
//   - a plain-HTML version of the page's FREE content inside #root, which React
//     replaces as soon as the app loads (paid guide content is never included)
// It also writes noindex pages for private routes and generates dist/sitemap.xml.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { COUNTRIES, GUIDES_LAST_REVIEWED } from '../src/lib/countries.js';
import { UPDATES } from '../src/lib/updates.js';
import { GUIDE_CONTENT } from '../content/guideContent.js';
import { DEFAULT_IMAGE, PAGE_SEO, SITE_URL, countrySeo, pageUrl, updateSeo } from '../src/lib/seo.js';

const dist = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const template = readFileSync(join(dist, 'index.html'), 'utf8');
const buildDate = new Date().toISOString().slice(0, 10);

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const plain = (s) => String(s ?? '').replace(/\*\*/g, '').trim();
const link = (href, text) => `<a href="${esc(href)}">${esc(text)}</a>`;

function setTag(html, pattern, value, label) {
  if (!pattern.test(html)) throw new Error(`prerender-meta: could not find ${label} in dist/index.html`);
  return html.replace(pattern, (_, before, after) => `${before}${esc(value)}${after}`);
}

function render({ title, description, canonical, image, schema, body, noindex }) {
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
  if (noindex) html = setTag(html, /(<meta name="robots" content=")[^"]*(")/, 'noindex, nofollow', 'robots');
  if (schema) {
    const json = JSON.stringify(schema).replace(/</g, '\\u003c');
    html = html.replace('</head>', `    <script type="application/ld+json" id="page-schema">${json}</script>\n  </head>`);
  }
  if (body) {
    if (!html.includes('<div id="root"></div>')) throw new Error('prerender-meta: empty #root not found');
    html = html.replace('<div id="root"></div>', `<div id="root"><div style="max-width:760px;margin:0 auto;padding:110px 20px 48px;font-family:Inter,system-ui,sans-serif;line-height:1.6;color:#04091A">${body}</div></div>`);
  }
  return html;
}

const sitemap = [];
function write(route, meta, { inSitemap = true, lastmod = buildDate, priority = '0.6' } = {}) {
  const file = route === '/' ? join(dist, 'index.html') : join(dist, route, 'index.html');
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, render(meta));
  if (inSitemap) sitemap.push({ loc: pageUrl(route), lastmod, priority });
}

const breadcrumbs = (items) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, item], i) => ({ '@type': 'ListItem', position: i + 1, name, item })),
});
const countryName = (c) => (['US', 'GB', 'NL'].includes(c.code) ? `the ${c.name}` : c.name);
const countryLinks = () => `<ul>${COUNTRIES.map((c) => `<li>${link(`/country/${c.code}`, `Move to ${countryName(c)} from Nigeria`)}${GUIDE_CONTENT[c.code]?.tagline ? ` — ${esc(GUIDE_CONTENT[c.code].tagline)}` : ''}</li>`).join('')}</ul>`;
const updateLinks = () => `<ul>${UPDATES.map((u) => `<li>${link(`/updates/${u.slug}`, u.title)} (${esc(u.published)})</li>`).join('')}</ul>`;

function articleHtml(text) {
  return text.split(/\n\s*\n/).map((block) => {
    const lines = block.split('\n').map((l) => l.trim()).filter(Boolean);
    if (lines.every((l) => l.startsWith('• '))) return `<ul>${lines.map((l) => `<li>${esc(l.slice(2))}</li>`).join('')}</ul>`;
    return `<p>${esc(lines.join(' '))}</p>`;
  }).join('');
}

// ── Static public pages ──────────────────────────────────────────────────
const BODIES = {
  '/': () => `<h1>MoveAbroad.ng — relocation guides for Nigerians</h1>
    <p>${esc(PAGE_SEO['/'].description)}</p>
    <h2>Country guides</h2>${countryLinks()}
    <h2>Visa News</h2>${updateLinks()}
    <p>${link('/pricing', 'Pricing')} · ${link('/budget-calculator', 'Relocation budget calculator')} · ${link('/cv-builder', 'International CV builder')} · ${link('/about', 'About us')}</p>`,
  '/countries': () => `<h1>Relocation guides for Nigerians — all countries</h1><p>${esc(PAGE_SEO['/countries'].description)}</p>${countryLinks()}`,
  '/updates': () => `<h1>Visa and immigration news for Nigerians</h1><p>${esc(PAGE_SEO['/updates'].description)}</p>${updateLinks()}`,
};

for (const [route, meta] of Object.entries(PAGE_SEO)) {
  const schema = route === '/' ? null : { '@context': 'https://schema.org', ...breadcrumbs([['Home', SITE_URL], [meta.title.split(' | ')[0].split(' — ')[0], pageUrl(route)]]) };
  write(route, { ...meta, canonical: pageUrl(route), image: DEFAULT_IMAGE, schema, body: BODIES[route]?.() }, {
    priority: route === '/' ? '1.0' : ['/countries', '/updates', '/pricing'].includes(route) ? '0.9' : route === '/privacy' || route === '/terms' ? '0.3' : '0.6',
  });
}

// ── Country guides (free preview only) ───────────────────────────────────
for (const country of COUNTRIES) {
  const guide = GUIDE_CONTENT[country.code];
  const seo = countrySeo(country, guide);
  const url = pageUrl(`/country/${country.code}`);
  const stats = guide?.stats?.masters || guide?.stats?.work || {};
  const statRows = Object.entries({
    'Tuition (master\'s)': stats.tuition, 'Living costs': stats.living, 'Visa processing': stats.processing,
    'English test': stats.minIELTS, 'Main visa': stats.pathway,
  }).filter(([, v]) => v).map(([k, v]) => `<li><strong>${esc(k)}:</strong> ${esc(v)}</li>`).join('');
  const sources = (guide?.embassy?.extra_links || []).slice(0, 8).map((s) => `<li>${link(s.url, s.label)}</li>`).join('');
  const body = `<nav>${link('/', 'Home')} › ${link('/countries', 'Countries')} › ${esc(country.name)}</nav>
    <h1>Move to ${esc(countryName(country))} from Nigeria</h1>
    ${guide?.tagline ? `<p><strong>${esc(guide.tagline)}</strong></p>` : ''}
    ${guide ? plain(guide.overview).split(/\n\s*\n/).map((p) => `<p>${esc(p)}</p>`).join('') : ''}
    ${statRows ? `<h2>At a glance</h2><ul>${statRows}</ul>` : ''}
    <p>The full guide covers step-by-step visa instructions for undergraduate, master's, PhD, work and visitor routes, timelines, universities, scholarships and embassy details. ${link('/pricing', 'Unlock the full guide')}.</p>
    <p>Key fees and rules last checked: ${esc(GUIDES_LAST_REVIEWED)}.</p>
    ${sources ? `<h2>Official sources</h2><ul>${sources}</ul>` : ''}`;
  write(`/country/${country.code}`, {
    ...seo,
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        { '@type': 'Article', headline: `Move to ${countryName(country)} from Nigeria — Relocation Guide`, description: seo.description, url, image: seo.image,
          dateModified: buildDate, author: { '@type': 'Organization', name: 'MoveAbroad.ng', url: SITE_URL },
          publisher: { '@type': 'Organization', name: 'MoveAbroad.ng', logo: { '@type': 'ImageObject', url: `${SITE_URL}/apple-touch-icon.png` } } },
        breadcrumbs([['Home', SITE_URL], ['Countries', pageUrl('/countries')], [country.name, url]]),
      ],
    },
    body,
  }, { priority: '0.8' });
}

// ── Visa News articles (fully free) ──────────────────────────────────────
for (const u of UPDATES) {
  const seo = updateSeo(u);
  const body = `<nav>${link('/', 'Home')} › ${link('/updates', 'Visa News')}</nav>
    <h1>${esc(u.title)}</h1><p><em>${esc(u.updated || u.published)}</em></p><p>${esc(u.description)}</p>
    ${u.sections.map((s) => `<h2>${esc(s.heading)}</h2>${articleHtml(s.body)}`).join('')}
    <h2>Official sources</h2><ul>${u.sources.map((s) => `<li>${link(s.url, s.label)}</li>`).join('')}</ul>`;
  write(`/updates/${u.slug}`, {
    ...seo,
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        { '@type': 'NewsArticle', headline: u.title, description: u.description, datePublished: u.published, dateModified: u.updated || u.published,
          url: seo.canonical, mainEntityOfPage: seo.canonical, image: [DEFAULT_IMAGE],
          author: { '@type': 'Organization', name: 'MoveAbroad.ng', url: SITE_URL },
          publisher: { '@type': 'Organization', name: 'MoveAbroad.ng', logo: { '@type': 'ImageObject', url: `${SITE_URL}/apple-touch-icon.png` } } },
        breadcrumbs([['Home', SITE_URL], ['Visa News', pageUrl('/updates')], [u.title, seo.canonical]]),
      ],
    },
    body,
  }, { lastmod: u.updated || u.published, priority: '0.8' });
}

// ── Private pages: never indexed ─────────────────────────────────────────
for (const route of ['/dashboard', '/profile', '/expenses', '/admin']) {
  write(route, { ...PAGE_SEO['/'], canonical: pageUrl(route), image: DEFAULT_IMAGE, noindex: true }, { inSitemap: false });
}

// ── Sitemap ──────────────────────────────────────────────────────────────
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemap.map((u) => `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod><priority>${u.priority}</priority></url>`).join('\n')}
</urlset>
`;
writeFileSync(join(dist, 'sitemap.xml'), xml);
console.log(`prerender-meta: wrote ${sitemap.length} public pages (+4 private noindex) and sitemap.xml`);
