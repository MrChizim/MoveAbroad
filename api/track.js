// POST /api/track — first-party, cookie-free analytics.
// Body: { type: 'pageview' | 'event', path, event?, vid, referrer?, source? }
// Stores only daily totals in analytics_daily/{YYYY-MM-DD} (Lagos time) plus one
// tiny doc per anonymous visitor per day for unique counts. No IPs, names or
// emails are stored. The visitor's country comes from Vercel's geo header.
import { FieldValue } from 'firebase-admin/firestore';
import { COUNTRIES } from '../src/lib/countries.js';
import { UPDATES } from '../src/lib/updates.js';
import { adminDb } from './_lib/firebaseAdmin.js';
import { readRawBody, send } from './_lib/http.js';

const EVENTS = new Set(['sign_in', 'checkout_start', 'purchase']);
const STATIC_PATHS = new Set([
  '/', '/countries', '/pricing', '/budget-calculator', '/cv-builder', '/dashboard', '/profile',
  '/expenses', '/about', '/partners', '/updates', '/privacy', '/terms', '/admin',
]);
const COUNTRY_CODES = new Set(COUNTRIES.map((c) => c.code));
const UPDATE_SLUGS = new Set(UPDATES.map((u) => u.slug));
const BOT_UA = /bot|crawl|spider|slurp|preview|facebookexternalhit|whatsapp|headless|lighthouse|pingdom|monitor/i;

// Map any path onto a known page so stored keys stay small and meaningful.
export function normalizePath(raw) {
  const path = String(raw || '/').split(/[?#]/)[0].replace(/\/+$/, '') || '/';
  if (STATIC_PATHS.has(path)) return path;
  let m = path.match(/^\/(country|checklist)\/([a-z]{2})$/i);
  if (m && COUNTRY_CODES.has(m[2].toUpperCase())) return `/${m[1]}/${m[2].toUpperCase()}`;
  m = path.match(/^\/updates\/([a-z0-9-]+)$/);
  if (m && UPDATE_SLUGS.has(m[1])) return path;
  return '(other)';
}

// Reduce a referrer URL to a short, readable source name.
export function referrerSource(referrer) {
  let host;
  try { host = new URL(referrer).hostname.toLowerCase().replace(/^www\./, ''); } catch { return 'direct'; }
  if (!host || host.endsWith('moveabroad.ng')) return null; // internal navigation
  const known = [
    [/(^|\.)google\./, 'Google'], [/bing\.com$/, 'Bing'], [/duckduckgo\.com$/, 'DuckDuckGo'], [/yahoo\./, 'Yahoo'],
    [/(^|\.)(facebook|fb)\.(com|me)$|^l\.facebook\.com$/, 'Facebook'], [/instagram\.com$/, 'Instagram'],
    [/(^|\.)(t\.co|twitter\.com|x\.com)$/, 'X / Twitter'], [/tiktok\.com$/, 'TikTok'], [/linkedin\.com$|lnkd\.in$/, 'LinkedIn'],
    [/whatsapp\.(com|net)$|wa\.me$/, 'WhatsApp'], [/nairaland\.com$/, 'Nairaland'], [/youtube\.com$/, 'YouTube'],
    [/chatgpt\.com$|openai\.com$/, 'ChatGPT'], [/claude\.ai$/, 'Claude'], [/perplexity\.ai$/, 'Perplexity'],
  ];
  for (const [re, name] of known) if (re.test(host)) return name;
  return host.replace(/[^a-z0-9.-]/g, '').slice(0, 60) || 'other';
}

function deviceType(ua) {
  if (/ipad|tablet/i.test(ua)) return 'Tablet';
  if (/mobi|android|iphone/i.test(ua)) return 'Mobile';
  return 'Desktop';
}

function lagosDate(d = new Date()) {
  return new Date(d.getTime() + 60 * 60 * 1000).toISOString().slice(0, 10); // UTC+1, no DST
}

// Map keys are stored literally by set({ merge: true }); just keep them short.
const key = (s) => String(s).slice(0, 80);

function noContent(res) {
  res.statusCode = 204;
  res.setHeader('Cache-Control', 'no-store');
  res.end();
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return send(res, 405, { error: 'method_not_allowed' });
  const ua = req.headers['user-agent'] || '';
  if (!ua || BOT_UA.test(ua)) return noContent(res);

  let body;
  try { body = JSON.parse(await readRawBody(req)); } catch { return send(res, 400, { error: 'invalid_body' }); }
  const vid = typeof body.vid === 'string' && /^[a-z0-9]{16,40}$/.test(body.vid) ? body.vid : null;
  if (!vid) return send(res, 400, { error: 'invalid_visitor' });

  const day = lagosDate();
  let db;
  try { db = adminDb(); } catch { return noContent(res); } // not configured: never break pages
  const dayDoc = db.collection('analytics_daily').doc(day);
  const inc = FieldValue.increment(1);
  const update = { date: day };

  if (body.type === 'event') {
    if (!EVENTS.has(body.event)) return send(res, 400, { error: 'unknown_event' });
    update.events = { [body.event]: inc };
  } else {
    const path = normalizePath(body.path);
    const country = /^[A-Z]{2}$/.test(req.headers['x-vercel-ip-country'] || '') ? req.headers['x-vercel-ip-country'] : 'Unknown';
    update.pageviews = inc;
    update.pages = { [key(path)]: inc };
    update.devices = { [deviceType(ua)]: inc };
    update.visitorCountries = { [country]: inc };
    if (body.landing) {
      update.sessions = inc;
      const source = typeof body.source === 'string' && body.source
        ? `campaign: ${body.source.toLowerCase().replace(/[^a-z0-9_-]/g, '').slice(0, 40)}`
        : referrerSource(body.referrer);
      if (source) update.sources = { [key(source)]: inc };
    }
    // First pageview today from this visitor counts as a unique visitor.
    try {
      await dayDoc.collection('visitors').doc(vid).create({ at: new Date().toISOString() });
      update.visitors = inc;
    } catch (err) {
      if (err.code !== 6) throw err; // 6 = ALREADY_EXISTS
    }
  }

  await dayDoc.set(update, { merge: true });
  return noContent(res);
}
