import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '@/lib/AuthContext';
import { hasAccessToCountry } from '@/lib/purchases';
import { COUNTRIES } from '@/lib/countries';
import { GUIDE_CONTENT } from '@/lib/guideContent';
import { useSEO } from '@/lib/useSEO';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, ArrowRight, Lock, CheckSquare, ExternalLink,
  GraduationCap, Briefcase, Clock, DollarSign, Globe,
  MapPin, BookOpen, Award, Building2, Users, ChevronDown, ChevronUp,
  BookMarked, FlaskConical, Plane, Lightbulb, Calendar, Share2
} from 'lucide-react';

// ── Level selector config ──────────────────────────────────────────────
const LEVELS = [
  { id: 'undergrad',  label: 'Undergraduate', Icon: GraduationCap },
  { id: 'masters',    label: 'Masters',        Icon: BookMarked },
  { id: 'phd',        label: 'PhD',            Icon: FlaskConical },
  { id: 'work',       label: 'Work Permit',    Icon: Briefcase },
  { id: 'visitor',    label: 'Visitor Visa',   Icon: Plane },
];

// ── Tab config ─────────────────────────────────────────────────────────
const TABS = [
  { id: 'overview',      label: 'Overview',      icon: Globe },
  { id: 'visa',          label: 'Visa Guide',    icon: BookOpen },
  { id: 'timeline',      label: 'Timeline',      icon: Clock },
  { id: 'universities',  label: 'Universities',  icon: Building2 },
  { id: 'scholarships',  label: 'Scholarships',  icon: Award },
  { id: 'tips',          label: 'Tips',          icon: MapPin },
  { id: 'embassy',       label: 'Embassy',       icon: ExternalLink },
];

// ── Sub-components ─────────────────────────────────────────────────────

function StatCard({ label, value, icon: Icon, color }) {
  return (
    <div className="bg-white rounded-2xl border border-black/[0.07] p-4 flex flex-col gap-2">
      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: color + '18' }}>
        <Icon className="w-4 h-4" style={{ color }} strokeWidth={1.75} />
      </div>
      <p className="text-[11px] font-semibold text-black/40 uppercase tracking-wide">{label}</p>
      <p className="text-[14px] font-bold text-[#04091A] leading-snug">{value}</p>
    </div>
  );
}

function MarkdownText({ text }) {
  if (!text) return null;
  const lines = text.split('\n');
  return (
    <div className="space-y-2">
      {lines.map((line, i) => {
        if (line.startsWith('**') && line.endsWith('**') && line.length > 4) {
          return <p key={i} className="text-[15px] font-bold text-[#04091A] mt-4 first:mt-0">{line.replace(/\*\*/g, '')}</p>;
        }
        if (line.startsWith('• ')) {
          return <p key={i} className="text-[14px] text-black/60 leading-relaxed pl-4 border-l-2 border-[#0096FF]/20">{line.substring(2)}</p>;
        }
        if (line.trim() === '') return <div key={i} className="h-1" />;
        return <p key={i} className="text-[14px] text-black/60 leading-relaxed">{line}</p>;
      })}
    </div>
  );
}

function ExpandableSection({ title, children }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-white rounded-2xl border border-black/[0.07] overflow-hidden">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between px-6 py-4 hover:bg-black/[0.01] transition-colors"
      >
        <span className="text-[15px] font-bold text-[#04091A]">{title}</span>
        {open ? <ChevronUp className="w-4 h-4 text-black/30" /> : <ChevronDown className="w-4 h-4 text-black/30" />}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function LockedContent({ countryCode, countryName }) {
  return (
    <div className="rounded-2xl border border-dashed border-[#0096FF]/30 bg-[#EBF5FF]/40 p-6 sm:p-12 text-center">
      <div className="w-14 h-14 rounded-full bg-[#0096FF]/10 flex items-center justify-center mx-auto mb-5">
        <Lock className="w-6 h-6 text-[#0096FF]" />
      </div>
      <h3 className="text-[1.3rem] font-black text-[#04091A] mb-3" style={{ fontWeight: 900 }}>
        Unlock the Full {countryName} Guide
      </h3>
      <p className="text-[14px] text-black/40 mb-7 max-w-sm mx-auto leading-relaxed">
        Get the complete visa guide, step-by-step timeline, university rankings, scholarships, and Nigerian-specific tips.
      </p>
      <Link
        to={`/pricing?country=${countryCode}`}
        className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-[14px] font-semibold text-white hover:opacity-90 transition-all"
        style={{ background: '#0096FF' }}
      >
        Unlock Guide <ArrowRight className="w-4 h-4" />
      </Link>
      <p className="text-[12px] text-black/30 mt-4">Or save with our 5-country or all-access packs</p>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────
export default function CountryDetail() {
  const { code } = useParams();
  const { user, loading: authLoading } = useAuth();
  const [hasAccess, setHasAccess] = useState(null);
  const [level, setLevel] = useState('masters');
  const [activeTab, setActiveTab] = useState('overview');

  const country = COUNTRIES.find(c => c.code === code);
  const guide = GUIDE_CONTENT[code];

  useSEO(country ? {
    title: `Move to ${country.name} from Nigeria — Visa, Jobs & Relocation Guide | MoveAbroad.ng`,
    description: guide?.overview
      ? guide.overview.slice(0, 155) + '…'
      : `Complete relocation guide for Nigerians moving to ${country.name}. Visa pathways, cost of living, universities, scholarships and Nigerian-specific tips.`,
    canonical: `https://moveabroad.ng/country/${code}`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: `Move to ${country.name} from Nigeria — Relocation Guide`,
      description: guide?.tagline || `Relocation guide for Nigerians moving to ${country.name}.`,
      publisher: {
        '@type': 'Organization',
        name: 'MoveAbroad.ng',
        url: 'https://moveabroad.ng',
      },
      url: `https://moveabroad.ng/country/${code}`,
    },
  } : { title: 'MoveAbroad.ng', description: '' });

  useEffect(() => {
    if (authLoading) return;
    if (!user) { setHasAccess(false); return; }
    hasAccessToCountry(user.uid, code, user.email).then(setHasAccess);
  }, [user, code, authLoading]);

  // reset tab when switching levels
  useEffect(() => { setActiveTab('overview'); }, [level]);

  if (!country) return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-black/40">Country not found. <Link to="/countries" className="text-[#0096FF]">Back to Countries</Link></p>
    </div>
  );

  const stats = guide?.stats?.[level];
  const unlocked = hasAccess === true;
  const hasGuide = !!guide;

  return (
    <div className="min-h-screen bg-[#F8F9FB]">

      {/* Hero */}
      <div className="relative h-[240px] sm:h-[340px]">
        <img src={country.image} alt={country.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
          <div className="max-w-4xl mx-auto">
            <Link to="/countries" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-4 text-[13px] transition-colors">
              <ArrowLeft className="w-4 h-4" /> All Countries
            </Link>
            <div className="flex items-end justify-between gap-4">
              <div className="flex items-end gap-4">
                <span className="text-5xl">{country.flag}</span>
                <div>
                  <h1 className="text-white text-[2rem] sm:text-[2.6rem] font-black leading-tight" style={{ fontWeight: 900 }}>{country.name}</h1>
                  {guide?.tagline && <p className="text-white/60 text-[14px] mt-1 max-w-lg">{guide.tagline}</p>}
                </div>
              </div>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(`Check out this ${country.name} relocation guide for Nigerians 🇳🇬 — visa paths, jobs, cost of living and more: https://moveabroad.ng/country/${code}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-[13px] font-semibold text-white flex-shrink-0 transition-all hover:opacity-90"
                style={{ background: '#25D366' }}
              >
                <Share2 className="w-4 h-4" /> Share
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">

        {/* Level Selector */}
        <div className="bg-white rounded-2xl border border-black/[0.07] p-2 mb-6 flex gap-1">
          {LEVELS.map(l => (
            <button
              key={l.id}
              onClick={() => setLevel(l.id)}
              className={`flex-1 flex flex-col items-center gap-1 py-3 px-1 sm:px-2 rounded-xl text-[11px] sm:text-[12px] font-semibold transition-all whitespace-nowrap ${
                level === l.id
                  ? 'bg-[#0096FF] text-white shadow-sm'
                  : 'text-black/40 hover:text-black/70 hover:bg-black/[0.03]'
              }`}
            >
              <l.Icon className="w-4 h-4" />
              {l.label}
            </button>
          ))}
        </div>

        {/* Stat cards */}
        {stats && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {stats.tuition && <StatCard label="Tuition / Year" value={stats.tuition} icon={DollarSign} color="#0096FF" />}
            {stats.salary && <StatCard label="Average Salary" value={stats.salary} icon={DollarSign} color="#059669" />}
            {stats.fee && <StatCard label="Visa Fee" value={stats.fee} icon={DollarSign} color="#059669" />}
            {stats.duration && <StatCard label="Max Stay" value={stats.duration} icon={Clock} color="#0096FF" />}
            {stats.living && <StatCard label="Living Costs" value={stats.living} icon={MapPin} color="#7C3AED" />}
            {stats.processing && <StatCard label="Visa Processing" value={stats.processing} icon={Clock} color="#D97706" />}
            {stats.minIELTS && <StatCard label="Min. IELTS" value={stats.minIELTS} icon={BookOpen} color="#059669" />}
            {stats.acceptance && <StatCard label="Acceptance Rate" value={stats.acceptance} icon={Users} color="#0096FF" />}
            {stats.pathway && <StatCard label="Visa Type" value={stats.pathway} icon={ArrowRight} color="#7C3AED" />}
          </div>
        )}

        {/* Free preview — show to everyone */}
        {guide && (
          <div className="bg-white rounded-2xl border border-black/[0.07] p-6 mb-6">
            <h2 className="text-[16px] font-bold text-[#04091A] mb-3">About {country.name}</h2>
            <p className="text-[14px] text-black/50 leading-relaxed">{guide.overview}</p>
          </div>
        )}

        {!guide && (
          <div className="bg-white rounded-2xl border border-black/[0.07] p-8 text-center mb-6">
            <p className="text-[14px] text-black/30">Full guide for {country.name} is being prepared. Check back soon.</p>
          </div>
        )}

        {/* Access gate */}
        {!unlocked && hasAccess !== null && (
          <LockedContent countryCode={code} countryName={country.name} />
        )}

        {hasAccess === null && (
          <div className="flex items-center justify-center py-12">
            <div className="w-7 h-7 border-4 border-black/10 border-t-[#0096FF] rounded-full animate-spin" />
          </div>
        )}

        {/* Full guide — unlocked */}
        {unlocked && hasGuide && (
          <>
            {/* Checklist CTA */}
            <Link to={`/checklist/${code}`} className="block mb-6">
              <div className="flex items-center gap-3 p-4 rounded-2xl border transition-all hover:shadow-sm" style={{ background: '#EBF5FF', borderColor: '#0096FF25' }}>
                <CheckSquare className="w-5 h-5 text-[#0096FF] flex-shrink-0" strokeWidth={1.75} />
                <div className="flex-1">
                  <p className="text-[14px] font-semibold text-[#0096FF]">Visa Document Checklist</p>
                  <p className="text-[12px] text-[#0096FF]/60">Track your documents for {LEVELS.find(l => l.id === level)?.label} visa</p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#0096FF]" />
              </div>
            </Link>

            {/* Tab navigation */}
            <div className="flex gap-1 overflow-x-auto pb-1 mb-6 scrollbar-hide">
              {TABS.map(tab => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 rounded-xl text-[12px] sm:text-[13px] font-semibold whitespace-nowrap transition-all flex-shrink-0 ${
                      activeTab === tab.id
                        ? 'bg-[#0096FF] text-white'
                        : 'bg-white border border-black/[0.07] text-black/50 hover:text-black/70'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" /> {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Tab content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeTab}-${level}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
              >

                {/* OVERVIEW */}
                {activeTab === 'overview' && (
                  <div className="space-y-4">
                    {guide.summary?.[level] ? (
                      <>
                        {guide.summary[level].intro && (
                          <div className="bg-white rounded-2xl border border-black/[0.07] p-6">
                            <h3 className="text-[15px] font-bold text-[#04091A] mb-3">
                              {LEVELS.find(l => l.id === level)?.label} — What You Need to Know
                            </h3>
                            <p className="text-[14px] text-black/60 leading-relaxed">{guide.summary[level].intro}</p>
                          </div>
                        )}
                        {guide.summary[level].firstSteps?.length > 0 && (
                          <div className="bg-white rounded-2xl border border-black/[0.07] p-6">
                            <h3 className="text-[14px] font-bold text-[#04091A] mb-4">Start Here — Before Anything Else</h3>
                            <div className="space-y-3">
                              {guide.summary[level].firstSteps.map((step, i) => (
                                <div key={i} className="flex gap-3">
                                  <div className="w-6 h-6 rounded-full bg-[#0096FF] text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</div>
                                  <div>
                                    <p className="text-[14px] font-semibold text-[#04091A]">{step.action}</p>
                                    {step.detail && <p className="text-[13px] text-black/50 leading-relaxed mt-0.5">{step.detail}</p>}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        {guide.summary[level].keyFacts?.length > 0 && (
                          <div className="bg-white rounded-2xl border border-black/[0.07] p-6">
                            <h3 className="text-[14px] font-bold text-[#04091A] mb-4">Key Facts</h3>
                            <div className="space-y-2">
                              {guide.summary[level].keyFacts.map((fact, i) => (
                                <div key={i} className="flex gap-2 items-start">
                                  <span className="text-[#0096FF] mt-0.5 flex-shrink-0">•</span>
                                  <p className="text-[13px] text-black/60 leading-relaxed">{fact}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        {guide.summary[level].outcome && (
                          <div className="rounded-2xl border border-[#059669]/20 bg-[#059669]/5 p-5">
                            <p className="text-[13px] font-semibold text-[#059669] mb-1">The Outcome</p>
                            <p className="text-[13px] text-black/60 leading-relaxed">{guide.summary[level].outcome}</p>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="bg-white rounded-2xl border border-black/[0.07] p-6">
                        <p className="text-[14px] text-black/50 leading-relaxed">{guide.overview}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* VISA GUIDE */}
                {activeTab === 'visa' && (
                  <div className="space-y-4">
                    <div className="bg-white rounded-2xl border border-black/[0.07] p-6">
                      <h3 className="text-[15px] font-bold text-[#04091A] mb-5">
                        {LEVELS.find(l => l.id === level)?.label} Visa — Step by Step
                      </h3>
                      <MarkdownText text={guide.visa?.[level]} />
                    </div>
                  </div>
                )}

                {/* TIMELINE */}
                {activeTab === 'timeline' && (
                  <div className="space-y-3">
                    {(guide.timeline?.[level] || []).map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="bg-white rounded-2xl border border-black/[0.07] p-5 flex gap-4"
                      >
                        <div className="flex-shrink-0 flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-[#0096FF] text-white text-[12px] font-bold flex items-center justify-center">
                            {i + 1}
                          </div>
                          {i < (guide.timeline?.[level]?.length || 0) - 1 && (
                            <div className="w-0.5 bg-[#0096FF]/20 flex-1 mt-2" />
                          )}
                        </div>
                        <div className="flex-1 pb-2">
                          <p className="text-[11px] font-bold text-[#0096FF] uppercase tracking-wide mb-1">{item.step}</p>
                          <p className="text-[14px] font-bold text-[#04091A] mb-1.5">{item.title}</p>
                          <p className="text-[13px] text-black/50 leading-relaxed">{item.detail}</p>
                        </div>
                      </motion.div>
                    ))}
                    {(!guide.timeline?.[level] || guide.timeline[level].length === 0) && (
                      <div className="bg-white rounded-2xl border border-black/[0.07] p-8 text-center">
                        <p className="text-[14px] text-black/30">Timeline for {LEVELS.find(l => l.id === level)?.label} coming soon.</p>
                      </div>
                    )}
                  </div>
                )}

                {/* UNIVERSITIES */}
                {activeTab === 'universities' && (
                  <div className="space-y-3">
                    {level === 'work' ? (
                      <div className="bg-white rounded-2xl border border-black/[0.07] p-8 text-center">
                        <p className="text-[14px] text-black/40">Switch to Undergraduate, Masters, or PhD to see university recommendations.</p>
                      </div>
                    ) : (guide.universities?.[level] || []).length === 0 ? (
                      <div className="bg-white rounded-2xl border border-black/[0.07] p-8 text-center">
                        <p className="text-[14px] text-black/30">University list coming soon.</p>
                      </div>
                    ) : (guide.universities?.[level] || []).map((uni, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="bg-white rounded-2xl border border-black/[0.07] p-5"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                          <div className="flex-1">
                            <p className="text-[15px] font-bold text-[#04091A] mb-1">{uni.name}</p>
                            <p className="text-[13px] text-black/40 mb-3 flex items-center gap-1.5">
                              <MapPin className="w-3.5 h-3.5" /> {uni.location}
                            </p>
                            <p className="text-[12px] text-black/50"><span className="font-semibold">Known for:</span> {uni.known_for}</p>
                          </div>
                          <div className="flex flex-col gap-1.5 sm:items-end shrink-0">
                            <span className="text-[12px] font-bold text-[#0096FF]">{uni.avg_tuition}</span>
                            <span className="text-[11px] text-black/30">Acceptance: {uni.acceptance}</span>
                            <span className={`text-[11px] px-2 py-0.5 rounded-full font-semibold ${
                              uni.nigerian_community === 'Very large' ? 'bg-green-100 text-green-700' :
                              uni.nigerian_community === 'Large' ? 'bg-blue-100 text-blue-700' :
                              uni.nigerian_community === 'Growing' ? 'bg-amber-100 text-amber-700' :
                              'bg-black/[0.05] text-black/40'
                            }`}>
                              🇳🇬 {uni.nigerian_community} community
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* SCHOLARSHIPS */}
                {activeTab === 'scholarships' && (
                  <div className="space-y-3">
                    {(guide.scholarships?.[level] || []).length === 0 ? (
                      <div className="bg-white rounded-2xl border border-black/[0.07] p-8 text-center">
                        <p className="text-[14px] text-black/30">Scholarship info coming soon for this level.</p>
                      </div>
                    ) : (guide.scholarships?.[level] || []).map((s, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.06 }}
                        className="bg-white rounded-2xl border border-black/[0.07] p-5"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                          <div className="flex-1">
                            <p className="text-[15px] font-bold text-[#04091A] mb-1">{s.name}</p>
                            <p className="text-[13px] text-black/40 mb-2">{s.university}</p>
                            <div className="flex flex-wrap gap-2">
                              <span className="inline-flex items-center gap-1 text-[12px] px-3 py-1 rounded-full font-semibold" style={{ background: '#ECFDF5', color: '#059669' }}>
                                <DollarSign className="w-3 h-3" /> {s.amount}
                              </span>
                              <span className="inline-flex items-center gap-1 text-[12px] px-3 py-1 rounded-full font-semibold" style={{ background: '#FFF7ED', color: '#D97706' }}>
                                <Calendar className="w-3 h-3" /> {s.deadline}
                              </span>
                            </div>
                          </div>
                          <a
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-xl text-[13px] font-semibold text-white hover:opacity-90 transition-all flex-shrink-0"
                            style={{ background: '#0096FF' }}
                          >
                            Apply <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* TIPS */}
                {activeTab === 'tips' && (
                  <div className="space-y-3">
                    {(guide.tips?.[level] || []).map((tip, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.06 }}
                        className="bg-white rounded-2xl border border-black/[0.07] p-5"
                      >
                        <div className="flex gap-3">
                          <div className="w-8 h-8 rounded-xl bg-[#EBF5FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Lightbulb className="w-4 h-4 text-[#0096FF]" />
                          </div>
                          <div>
                            <p className="text-[14px] font-bold text-[#04091A] mb-1.5">{tip.title}</p>
                            <p className="text-[13px] text-black/50 leading-relaxed">{tip.body}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                    {(!guide.tips?.[level] || guide.tips[level].length === 0) && (
                      <div className="bg-white rounded-2xl border border-black/[0.07] p-8 text-center">
                        <p className="text-[14px] text-black/30">Tips coming soon.</p>
                      </div>
                    )}
                  </div>
                )}

                {/* EMBASSY */}
                {activeTab === 'embassy' && guide.embassy && (
                  <div className="space-y-4">
                    <div className="bg-white rounded-2xl border border-black/[0.07] p-6">
                      <h3 className="text-[15px] font-bold text-[#04091A] mb-4">Official Contact</h3>
                      <div className="space-y-2 mb-5">
                        <p className="text-[14px] font-semibold text-[#04091A]">{guide.embassy.name}</p>
                        {guide.embassy.address && (
                          <p className="text-[13px] text-black/40 flex items-center gap-2">
                            <MapPin className="w-3.5 h-3.5 flex-shrink-0" /> {guide.embassy.address}
                          </p>
                        )}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {guide.embassy.visa_apply && (
                          <a href={guide.embassy.visa_apply} target="_blank" rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 p-3 rounded-xl border border-[#0096FF]/30 bg-[#EBF5FF] text-[#0096FF] text-[13px] font-semibold hover:bg-[#0096FF] hover:text-white transition-all">
                            <Globe className="w-4 h-4" /> Apply for Visa
                          </a>
                        )}
                        {guide.embassy.vfs && (
                          <a href={guide.embassy.vfs} target="_blank" rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 p-3 rounded-xl border border-black/[0.08] text-black/60 text-[13px] font-semibold hover:border-[#0096FF]/30 hover:text-[#0096FF] transition-all">
                            <MapPin className="w-4 h-4" /> Biometrics (VFS/TLS)
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl border border-black/[0.07] p-6">
                      <h3 className="text-[15px] font-bold text-[#04091A] mb-4">Important Links</h3>
                      <div className="space-y-2">
                        {(guide.embassy.extra_links || []).map((link, i) => (
                          <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-3 rounded-xl border border-black/[0.06] hover:border-[#0096FF]/30 hover:bg-[#EBF5FF]/50 transition-all group"
                          >
                            <span className="text-[13px] font-medium text-black/70 group-hover:text-[#0096FF] transition-colors">{link.label}</span>
                            <ExternalLink className="w-3.5 h-3.5 text-black/20 group-hover:text-[#0096FF] flex-shrink-0 transition-colors" />
                          </a>
                        ))}
                      </div>
                      <p className="text-[11px] text-black/30 mt-4 text-center">
                        Always verify information on official government websites — visa rules change frequently.
                      </p>
                    </div>
                  </div>
                )}

              </motion.div>
            </AnimatePresence>
          </>
        )}
      </div>
    </div>
  );
}
