// Cookie-free, first-party analytics. Sends small beacons to /api/track.
// A random anonymous ID in localStorage counts unique visitors; nothing personal is sent.

let excluded = false; // set for admins so their own visits don't skew the numbers

export function excludeFromAnalytics(value) {
  excluded = !!value;
}

function visitorId() {
  try {
    let id = localStorage.getItem('ma_vid');
    if (!id) {
      id = Array.from(crypto.getRandomValues(new Uint8Array(12)), (b) => b.toString(36).padStart(2, '0')).join('').slice(0, 24);
      localStorage.setItem('ma_vid', id);
    }
    return id;
  } catch {
    return null; // storage blocked: skip tracking rather than over-count
  }
}

function sendBeacon(payload) {
  if (excluded || typeof window === 'undefined') return;
  const vid = visitorId();
  if (!vid) return;
  const body = JSON.stringify({ ...payload, vid });
  try {
    if (navigator.sendBeacon && navigator.sendBeacon('/api/track', new Blob([body], { type: 'text/plain' }))) return;
  } catch { /* fall through to fetch */ }
  fetch('/api/track', { method: 'POST', body, keepalive: true }).catch(() => {});
}

export function trackPageview(path) {
  let landing = false;
  try {
    landing = !sessionStorage.getItem('ma_session');
    if (landing) sessionStorage.setItem('ma_session', '1');
  } catch { /* ignore */ }
  const params = new URLSearchParams(window.location.search);
  sendBeacon({
    type: 'pageview',
    path,
    landing,
    referrer: landing ? document.referrer : undefined,
    source: landing ? params.get('utm_source') || params.get('ref') || undefined : undefined,
  });
}

export function trackEvent(event) {
  sendBeacon({ type: 'event', event });
}
