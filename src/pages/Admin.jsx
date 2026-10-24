import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/lib/AuthContext';
import { auth } from '@/lib/firebase';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Shield, Search, CheckCircle2, X } from 'lucide-react';
import { COUNTRIES } from '@/lib/countries';
import { isAdminEmail } from '@/lib/admins';
import { toast } from 'sonner';

const ACCENT = '#0096FF';
const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'payments', label: 'Payments' },
  { id: 'customers', label: 'Customers' },
  { id: 'access', label: 'Grant access' },
];
const RANGES = [7, 30, 90];
const PACKAGE_LABELS = { single: 'Single country', five_pack: '5-country pack', all_access: 'All access', manual_grant: 'Granted by admin', manual_revoke: 'Removed by admin' };

const regionNames = typeof Intl !== 'undefined' && Intl.DisplayNames ? new Intl.DisplayNames(['en'], { type: 'region' }) : null;
const countryName = (code) => { try { return regionNames?.of(code) || code; } catch { return code; } };
const compact = (n) => (n >= 1000 ? `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}K` : String(n));
const naira = (kobo) => `₦${Math.round(kobo / 100).toLocaleString()}`;
const shortDate = (iso) => new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });

async function adminApi(path, options = {}) {
  const token = await auth.currentUser.getIdToken();
  const r = await fetch(`/api/admin${path}`, {
    ...options,
    headers: { ...(options.headers || {}), Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
  });
  const body = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(body.error || `http_${r.status}`);
  return body;
}

function sumMaps(days, field) {
  const totals = {};
  for (const d of days) for (const [k, v] of Object.entries(d[field] || {})) totals[k] = (totals[k] || 0) + v;
  return Object.entries(totals).sort((a, b) => b[1] - a[1]);
}

// ── Stat tile ───────────────────────────────────────────────────────────
function StatTile({ label, value, hint }) {
  return (
    <Card className="p-4">
      <p className="text-[12px] text-black/45">{label}</p>
      <p className="text-[1.5rem] font-semibold text-[#04091A] mt-1 tabular-nums">{value}</p>
      {hint && <p className="text-[11px] text-black/35 mt-0.5">{hint}</p>}
    </Card>
  );
}

// ── Visitors per day: single-series column chart ────────────────────────
function columnPath(x, y, w, h, r) {
  const rr = Math.min(r, h, w / 2);
  if (h <= 0) return '';
  return `M${x},${y + h} L${x},${y + rr} Q${x},${y} ${x + rr},${y} L${x + w - rr},${y} Q${x + w},${y} ${x + w},${y + rr} L${x + w},${y + h} Z`;
}

function niceMax(v) {
  if (v <= 5) return 5;
  const p = 10 ** Math.floor(Math.log10(v / 4)); // aim for 4 gridlines just above the max
  const step = [1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10].find((s) => s * p * 4 >= v) * p;
  return step * 4;
}

function VisitorsChart({ days }) {
  const [hover, setHover] = useState(null);
  const [showTable, setShowTable] = useState(false);
  const W = 760, H = 220, padL = 36, padB = 24, padT = 8;
  const plotW = W - padL, plotH = H - padB - padT;
  const max = niceMax(Math.max(1, ...days.map((d) => d.visitors)));
  const slot = plotW / days.length;
  const barW = Math.min(24, Math.max(2, slot - 2)); // 2px surface gap between neighbours
  const ticks = [0, max / 4, max / 2, (3 * max) / 4, max];
  const labelEvery = Math.ceil(days.length / 8);

  return (
    <Card className="p-5">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="text-[14px] font-semibold text-[#04091A]">Visitors per day</h3>
          <p className="text-[12px] text-black/40">Unique visitors, Lagos time</p>
        </div>
        <button onClick={() => setShowTable((v) => !v)} className="text-[12px] font-medium text-[#0096FF] hover:underline">
          {showTable ? 'Show chart' : 'Show as table'}
        </button>
      </div>

      {showTable ? (
        <div className="max-h-[260px] overflow-auto">
          <table className="w-full text-[13px]">
            <thead><tr className="text-left text-black/40"><th className="py-1 font-medium">Date</th><th className="py-1 font-medium text-right">Visitors</th><th className="py-1 font-medium text-right">Page views</th></tr></thead>
            <tbody>
              {[...days].reverse().map((d) => (
                <tr key={d.date} className="border-t border-black/[0.05]">
                  <td className="py-1.5 text-black/70">{shortDate(d.date)}</td>
                  <td className="py-1.5 text-right tabular-nums">{d.visitors}</td>
                  <td className="py-1.5 text-right tabular-nums text-black/50">{d.pageviews}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="relative">
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="Unique visitors per day">
            {ticks.map((t) => {
              const y = padT + plotH - (t / max) * plotH;
              return (
                <g key={t}>
                  <line x1={padL} x2={W} y1={y} y2={y} stroke="#000" strokeOpacity={t === 0 ? 0.18 : 0.06} strokeWidth="1" />
                  <text x={padL - 6} y={y + 4} textAnchor="end" fontSize="11" fill="#000" fillOpacity="0.4">{compact(t)}</text>
                </g>
              );
            })}
            {days.map((d, i) => {
              const h = (d.visitors / max) * plotH;
              const x = padL + i * slot + (slot - barW) / 2;
              const active = hover === i;
              return (
                <g key={d.date}>
                  <path d={columnPath(x, padT + plotH - h, barW, h, 4)} fill={ACCENT} fillOpacity={hover === null || active ? 1 : 0.55} />
                  {i % labelEvery === 0 && (
                    <text x={padL + i * slot + slot / 2} y={H - 6} textAnchor="middle" fontSize="11" fill="#000" fillOpacity="0.4">{shortDate(d.date)}</text>
                  )}
                  <rect
                    x={padL + i * slot} y={padT} width={slot} height={plotH} fill="transparent"
                    tabIndex={0} aria-label={`${shortDate(d.date)}: ${d.visitors} visitors, ${d.pageviews} page views`}
                    onPointerEnter={() => setHover(i)} onPointerLeave={() => setHover(null)}
                    onFocus={() => setHover(i)} onBlur={() => setHover(null)}
                  />
                </g>
              );
            })}
          </svg>
          {hover !== null && (
            <div
              className="absolute pointer-events-none bg-white rounded-lg px-3 py-2 text-[12px] shadow-[0_4px_16px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.06)]"
              style={{ left: `${((padL + hover * slot + slot / 2) / W) * 100}%`, top: 0, transform: 'translateX(-50%)' }}
            >
              <p className="font-semibold text-[#04091A] tabular-nums">{days[hover].visitors} visitors</p>
              <p className="text-black/45 tabular-nums">{days[hover].pageviews} page views · {shortDate(days[hover].date)}</p>
            </div>
          )}
        </div>
      )}
    </Card>
  );
}

// ── Ranked list with thin magnitude bars ────────────────────────────────
function RankedList({ title, rows, format = (k) => k, empty = 'No data yet' }) {
  const top = rows.slice(0, 8);
  const max = top[0]?.[1] || 1;
  return (
    <Card className="p-5">
      <h3 className="text-[14px] font-semibold text-[#04091A] mb-3">{title}</h3>
      {!top.length && <p className="text-[13px] text-black/30">{empty}</p>}
      <div className="space-y-2.5">
        {top.map(([k, v]) => (
          <div key={k}>
            <div className="flex justify-between text-[13px] mb-1">
              <span className="text-black/70 truncate pr-3">{format(k)}</span>
              <span className="tabular-nums text-[#04091A] font-medium">{v.toLocaleString()}</span>
            </div>
            <div className="h-1.5 rounded-full bg-[#0096FF]/10">
              <div className="h-1.5 rounded-full" style={{ width: `${(v / max) * 100}%`, background: ACCENT }} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function pageLabel(path) {
  if (path === '/') return 'Home';
  const m = path.match(/^\/(country|checklist)\/([A-Z]{2})$/);
  if (m) {
    const c = COUNTRIES.find((x) => x.code === m[2]);
    return `${m[1] === 'country' ? 'Guide' : 'Checklist'}: ${c ? c.name : m[2]}`;
  }
  return path;
}

// ── Tabs ────────────────────────────────────────────────────────────────
function OverviewTab() {
  const [range, setRange] = useState(30);
  const [days, setDays] = useState(null);
  const [payments, setPayments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    Promise.all([adminApi(`?action=analytics&days=${range}`), adminApi('?action=payments')])
      .then(([a, p]) => { if (!cancelled) { setDays(a.days); setPayments(p.payments); setError(null); } })
      .catch((e) => !cancelled && setError(e.message));
    return () => { cancelled = true; };
  }, [range]);

  const stats = useMemo(() => {
    if (!days) return null;
    const sum = (f) => days.reduce((s, d) => s + (f(d) || 0), 0);
    const from = days[0].date;
    const revenue = payments.filter((p) => (p.recordedAt || '').slice(0, 10) >= from).reduce((s, p) => s + (p.amountKobo || 0), 0);
    const visitors = sum((d) => d.visitors);
    const purchases = sum((d) => d.events.purchase);
    return {
      visitors, pageviews: sum((d) => d.pageviews),
      signIns: sum((d) => d.events.sign_in), checkouts: sum((d) => d.events.checkout_start), purchases, revenue,
      conversion: visitors ? `${((purchases / visitors) * 100).toFixed(1)}%` : '—',
    };
  }, [days, payments]);

  if (error) return <Card className="p-6 text-[14px] text-red-500">Could not load analytics ({error}).</Card>;

  return (
    <div className={`space-y-5 transition-opacity ${days ? '' : 'opacity-50'}`}>
      <div className="flex gap-1.5">
        {RANGES.map((r) => (
          <button key={r} onClick={() => setRange(r)}
            className={`px-3.5 py-1.5 rounded-lg text-[13px] font-medium transition-colors ${range === r ? 'bg-[#04091A] text-white' : 'bg-white border border-black/[0.08] text-black/60 hover:text-black'}`}>
            Last {r} days
          </button>
        ))}
      </div>

      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <StatTile label="Unique visitors" value={stats.visitors.toLocaleString()} hint="Counted once per day" />
          <StatTile label="Page views" value={stats.pageviews.toLocaleString()} />
          <StatTile label="Sign-ins" value={stats.signIns.toLocaleString()} />
          <StatTile label="Checkouts started" value={stats.checkouts.toLocaleString()} />
          <StatTile label="Purchases" value={stats.purchases.toLocaleString()} />
          <StatTile label="Visitor → purchase" value={stats.conversion} />
          <StatTile label="Revenue (confirmed)" value={naira(stats.revenue)} hint="From verified Paystack payments" />
          <StatTile label="Avg. pages per visitor" value={stats.visitors ? (stats.pageviews / stats.visitors).toFixed(1) : '—'} />
        </div>
      )}

      {days && <VisitorsChart days={days} />}

      {days && (
        <div className="grid md:grid-cols-2 gap-4">
          <RankedList title="Top pages" rows={sumMaps(days, 'pages')} format={pageLabel} />
          <RankedList title="Where visitors come from" rows={sumMaps(days, 'sources')} format={(k) => (k === 'direct' ? 'Direct / typed in' : k)} empty="No visits with a known source yet" />
          <RankedList title="Visitor countries" rows={sumMaps(days, 'visitorCountries')} format={countryName} />
          <RankedList title="Devices" rows={sumMaps(days, 'devices')} />
        </div>
      )}
      <p className="text-[12px] text-black/35">
        Cookie-free analytics: no personal data is stored. Your own admin visits are not counted. Bots and link-preview crawlers are ignored.
        Add <code className="bg-black/[0.05] px-1 rounded">?ref=instagram</code> (or any name) to links you share to see them under "Where visitors come from".
      </p>
    </div>
  );
}

function PaymentsTab() {
  const [payments, setPayments] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => { adminApi('?action=payments').then((p) => setPayments(p.payments)).catch((e) => setError(e.message)); }, []);
  if (error) return <Card className="p-6 text-[14px] text-red-500">Could not load payments ({error}).</Card>;
  if (!payments) return <Card className="p-8 text-center text-black/30">Loading…</Card>;
  const total = payments.reduce((s, p) => s + (p.amountKobo || 0), 0);
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <StatTile label="Confirmed payments" value={payments.length.toLocaleString()} />
        <StatTile label="Total revenue" value={naira(total)} hint="Before Paystack fees" />
      </div>
      <Card className="overflow-x-auto">
        <table className="w-full text-[13px] min-w-[640px]">
          <thead><tr className="text-left text-black/40 border-b border-black/[0.06]">
            {['Date', 'Customer', 'Package', 'Countries', 'Amount', 'Reference'].map((h) => <th key={h} className="px-4 py-2.5 font-medium">{h}</th>)}
          </tr></thead>
          <tbody>
            {!payments.length && <tr><td colSpan={6} className="px-4 py-8 text-center text-black/30">No confirmed payments yet</td></tr>}
            {payments.map((p) => (
              <tr key={p.reference} className="border-b border-black/[0.04]">
                <td className="px-4 py-2.5 whitespace-nowrap text-black/60">{p.recordedAt ? new Date(p.recordedAt).toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' }) : '—'}</td>
                <td className="px-4 py-2.5">{p.email || '—'}</td>
                <td className="px-4 py-2.5">{PACKAGE_LABELS[p.packageId] || p.packageId}</td>
                <td className="px-4 py-2.5 text-black/60">{(p.countries || []).length === COUNTRIES.length ? 'All' : (p.countries || []).join(', ')}</td>
                <td className="px-4 py-2.5 tabular-nums">{naira(p.amountKobo || 0)}</td>
                <td className="px-4 py-2.5 text-black/40 font-mono text-[12px]">{p.reference}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

function CustomersTab() {
  const [customers, setCustomers] = useState(null);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const load = useCallback(() => {
    adminApi('?action=customers').then((c) => setCustomers(c.customers)).catch((e) => setError(e.message));
  }, []);
  useEffect(load, [load]);

  const revoke = async (customer, code) => {
    const name = COUNTRIES.find((c) => c.code === code)?.name || code;
    if (!window.confirm(`Remove ${name} from ${customer.email}? They will lose access to that guide.`)) return;
    try {
      await adminApi('', { method: 'POST', body: JSON.stringify({ action: 'revoke', uid: customer.uid || customer.id, countries: [code] }) });
      toast.success(`Removed ${name} from ${customer.email}`);
      load();
    } catch (e) {
      toast.error(`Could not remove access (${e.message})`);
    }
  };

  if (error) return <Card className="p-6 text-[14px] text-red-500">Could not load customers ({error}).</Card>;
  if (!customers) return <Card className="p-8 text-center text-black/30">Loading…</Card>;
  const term = searchTerm.toLowerCase();
  const filtered = customers.filter((p) => !term || p.email?.toLowerCase().includes(term) || p.packages?.some((pkg) => pkg.paystackRef?.toLowerCase().includes(term)));

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black/30" />
        <Input placeholder="Search by email or Paystack reference…" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" />
      </div>
      {!filtered.length && <Card className="p-8 text-center text-black/30">No customers found</Card>}
      {filtered.map((p) => (
        <Card key={p.id} className="p-5">
          <p className="text-[14px] font-semibold text-[#04091A]">{p.email || '(no email)'}</p>
          <p className="text-[12px] text-black/35 mb-3">UID: {p.uid || p.id}</p>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {!(p.countries || []).length && <span className="text-[12px] text-black/30">No active guides</span>}
            {(p.countries || []).map((code) => {
              const c = COUNTRIES.find((x) => x.code === code);
              return (
                <span key={code} className="inline-flex items-center gap-1 text-[12px] pl-2.5 pr-1 py-0.5 rounded-full bg-[#EBF5FF] text-[#04091A]">
                  {c ? `${c.flag} ${c.name}` : code}
                  <button onClick={() => revoke(p, code)} className="p-0.5 rounded-full hover:bg-black/10" aria-label={`Remove ${c ? c.name : code}`}>
                    <X className="w-3 h-3 text-black/50" />
                  </button>
                </span>
              );
            })}
          </div>
          <div className="space-y-1">
            {(p.packages || []).map((pkg, i) => (
              <div key={i} className="flex flex-wrap items-center gap-2 text-[12px] text-black/50">
                <CheckCircle2 className="w-3.5 h-3.5 text-black/30 flex-shrink-0" />
                <span className="font-medium">{PACKAGE_LABELS[pkg.packageId] || pkg.packageId}</span>
                {pkg.countries && <span>· {pkg.countries.length === COUNTRIES.length ? 'All countries' : pkg.countries.join(', ')}</span>}
                <span>· {pkg.paystackRef ? `Ref ${pkg.paystackRef}` : pkg.by ? `by ${pkg.by}` : '—'}</span>
                <span>· {pkg.paidAt ? new Date(pkg.paidAt).toLocaleDateString('en-GB') : '—'}</span>
                {pkg.note && <span className="text-black/40">· “{pkg.note}”</span>}
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}

function AccessTab() {
  const [email, setEmail] = useState('');
  const [selected, setSelected] = useState([]);
  const [all, setAll] = useState(false);
  const [note, setNote] = useState('');
  const [busy, setBusy] = useState(false);

  const toggle = (code) => setSelected((s) => (s.includes(code) ? s.filter((c) => c !== code) : [...s, code]));

  const grant = async (e) => {
    e.preventDefault();
    const countries = all ? ['ALL'] : selected;
    if (!email.trim() || !countries.length) return toast.error('Enter an email and choose at least one country.');
    setBusy(true);
    try {
      const r = await adminApi('', { method: 'POST', body: JSON.stringify({ action: 'grant', email, countries, note }) });
      toast.success(`Done. ${email} now has ${r.countries.length} guide${r.countries.length === 1 ? '' : 's'}.`);
      setEmail(''); setSelected([]); setAll(false); setNote('');
    } catch (err) {
      toast.error(err.message === 'user_not_found'
        ? 'No account with that email. Ask them to sign in to moveabroad.ng once with Google, then try again.'
        : `Could not grant access (${err.message})`);
    } finally {
      setBusy(false);
    }
  };

  return (
    <Card className="p-6 max-w-2xl">
      <h3 className="text-[15px] font-semibold text-[#04091A] mb-1">Give someone access to guides</h3>
      <p className="text-[13px] text-black/45 mb-5">
        Use this when a payment went through but did not unlock, or to give free access. The person must have signed in to the site once with Google.
        To remove access (for example after a refund), use the × on their guides in the Customers tab.
      </p>
      <form onSubmit={grant} className="space-y-4">
        <div>
          <label className="block text-[13px] font-medium text-black/70 mb-1.5" htmlFor="grant-email">Their Google email</label>
          <Input id="grant-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@gmail.com" />
        </div>
        <div>
          <p className="text-[13px] font-medium text-black/70 mb-1.5">Countries</p>
          <label className="flex items-center gap-2 text-[13px] mb-2">
            <input type="checkbox" checked={all} onChange={(e) => setAll(e.target.checked)} /> All countries
          </label>
          {!all && (
            <div className="flex flex-wrap gap-1.5">
              {COUNTRIES.map((c) => (
                <button type="button" key={c.code} onClick={() => toggle(c.code)}
                  className={`text-[12px] px-2.5 py-1 rounded-full border transition-colors ${selected.includes(c.code) ? 'bg-[#04091A] text-white border-[#04091A]' : 'border-black/[0.1] text-black/60 hover:border-black/30'}`}>
                  {c.flag} {c.name}
                </button>
              ))}
            </div>
          )}
        </div>
        <div>
          <label className="block text-[13px] font-medium text-black/70 mb-1.5" htmlFor="grant-note">Note (optional)</label>
          <Input id="grant-note" value={note} onChange={(e) => setNote(e.target.value)} placeholder="e.g. Paid by transfer, ref 12345" />
        </div>
        <button disabled={busy} className="px-5 py-2.5 rounded-xl text-[14px] font-semibold text-white disabled:opacity-50" style={{ background: ACCENT }}>
          {busy ? 'Saving…' : 'Grant access'}
        </button>
      </form>
    </Card>
  );
}

export default function Admin() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [tab, setTab] = useState('overview');
  const isAdmin = user && isAdminEmail(user.email);

  useEffect(() => {
    if (!isAdmin) navigate('/');
  }, [isAdmin, navigate]);

  if (!isAdmin) return null;

  return (
    <div className="min-h-screen bg-[#F8F9FB] py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-6 h-6 text-[#0096FF]" />
          <h1 className="text-[1.7rem] font-black text-[#04091A]" style={{ fontWeight: 900 }}>Admin</h1>
        </div>
        <div className="flex gap-1 overflow-x-auto mb-6 border-b border-black/[0.08]">
          {TABS.map((t) => (
            <button key={t.id} onClick={() => setTab(t.id)}
              className={`px-4 py-2.5 text-[14px] font-medium whitespace-nowrap border-b-2 -mb-px transition-colors ${tab === t.id ? 'border-[#0096FF] text-[#04091A]' : 'border-transparent text-black/45 hover:text-black/70'}`}>
              {t.label}
            </button>
          ))}
        </div>
        {tab === 'overview' && <OverviewTab />}
        {tab === 'payments' && <PaymentsTab />}
        {tab === 'customers' && <CustomersTab />}
        {tab === 'access' && <AccessTab />}
      </div>
    </div>
  );
}
