import { useState, useEffect, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/lib/AuthContext';
import { getChecklistProgress, toggleChecklistItem } from '@/lib/checklist';
import { hasAccessToCountry } from '@/lib/purchases';
import { getChecklistTemplate } from '@/lib/checklistTemplates';
import { COUNTRIES } from '@/lib/countries';
import { ArrowLeft, CheckCircle2, Circle, Lock, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const VISA_TYPES = [
  { value: 'student', label: '🎓 Student' },
  { value: 'work', label: '💼 Work' },
  { value: 'visitor', label: '✈️ Visitor' },
  { value: 'permanent_residency', label: '🏠 PR' },
];

export default function VisaChecklist() {
  const { code } = useParams();
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const [visaType, setVisaType] = useState('student');
  const [progress, setProgress] = useState({});
  const [hasAccess, setHasAccess] = useState(null);
  const [toggling, setToggling] = useState(new Set());

  const country = COUNTRIES.find(c => c.code === code);
  const items = getChecklistTemplate(code, visaType);

  useEffect(() => {
    if (authLoading) return;
    if (!user) { navigate('/'); return; }
    hasAccessToCountry(user.uid, code, user.email).then(setHasAccess);
  }, [user, code, navigate, authLoading]);

  useEffect(() => {
    if (!user || !hasAccess) return;
    getChecklistProgress(user.uid, code).then(setProgress);
  }, [user, code, hasAccess]);

  const handleToggle = useCallback(async (itemId) => {
    if (!user || toggling.has(itemId)) return;
    const newVal = !progress[itemId];
    setProgress(prev => ({ ...prev, [itemId]: newVal }));
    setToggling(prev => new Set([...prev, itemId]));
    try {
      await toggleChecklistItem(user.uid, code, itemId, newVal);
    } catch {
      setProgress(prev => ({ ...prev, [itemId]: !newVal }));
    } finally {
      setToggling(prev => { const s = new Set(prev); s.delete(itemId); return s; });
    }
  }, [user, code, progress, toggling]);

  const checkedCount = items.filter(i => progress[i.id]).length;
  const pct = items.length > 0 ? Math.round((checkedCount / items.length) * 100) : 0;

  const grouped = items.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  if (!country) return <div className="p-8 text-center text-black/40">Country not found.</div>;

  if (!user || hasAccess === null) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-black/10 border-t-[#0096FF] rounded-full animate-spin" />
    </div>
  );

  if (!hasAccess) return (
    <div className="min-h-screen bg-[#F8F9FB] flex items-center justify-center px-4">
      <div className="text-center max-w-sm">
        <div className="w-16 h-16 rounded-full bg-black/[0.05] flex items-center justify-center mx-auto mb-5">
          <Lock className="w-7 h-7 text-black/30" />
        </div>
        <h2 className="text-[1.4rem] font-black text-[#04091A] mb-2" style={{ fontWeight: 900 }}>
          {country.flag} {country.name} Guide Locked
        </h2>
        <p className="text-[14px] text-black/40 mb-6 leading-relaxed">
          Purchase the {country.name} guide to access the interactive visa checklist and track your progress.
        </p>
        <Link
          to={`/pricing?country=${code}`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-semibold text-white hover:opacity-90 transition-all"
          style={{ background: '#0096FF' }}
        >
          Unlock Guide <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F8F9FB] py-10">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">

        {/* Back link */}
        <Link
          to={`/country/${code}`}
          className="inline-flex items-center gap-2 text-[13px] text-black/40 hover:text-[#0096FF] transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Back to {country.name} Guide
        </Link>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{country.flag}</span>
            <div>
              <h1 className="text-[1.4rem] font-black text-[#04091A]" style={{ fontWeight: 900 }}>
                {country.name} Visa Checklist
              </h1>
              <p className="text-[13px] text-black/40">Track your documents and progress</p>
            </div>
          </div>

          {/* Visa type tabs */}
          <div className="flex gap-1 p-1 bg-black/[0.05] rounded-xl flex-wrap">
            {VISA_TYPES.map(v => (
              <button
                key={v.value}
                onClick={() => setVisaType(v.value)}
                className={`px-3 py-1.5 rounded-lg text-[12px] font-semibold transition-all whitespace-nowrap ${
                  visaType === v.value
                    ? 'bg-white text-[#0096FF] shadow-sm'
                    : 'text-black/40 hover:text-black/60'
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>

        {/* Progress card */}
        <div className="bg-white rounded-2xl border border-black/[0.07] p-5 mb-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[14px] font-semibold text-[#04091A]">Overall Progress</span>
            <span className="text-[1.5rem] font-black text-[#0096FF]" style={{ fontWeight: 900 }}>{pct}%</span>
          </div>
          <div className="h-2.5 bg-black/[0.06] rounded-full overflow-hidden mb-3">
            <motion.div
              className="h-full rounded-full"
              style={{ background: '#0096FF' }}
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>
          <div className="flex gap-4 text-[12px]">
            <span className="text-green-600 font-medium">{checkedCount} done</span>
            <span className="text-black/30">{items.length - checkedCount} remaining</span>
          </div>
        </div>

        {/* Checklist by category */}
        <div className="space-y-4">
          {Object.entries(grouped).map(([category, catItems]) => {
            const catDone = catItems.filter(i => progress[i.id]).length;
            return (
              <div key={category} className="bg-white rounded-2xl border border-black/[0.07] overflow-hidden">
                <div className="px-5 py-3 border-b border-black/[0.06] flex items-center justify-between">
                  <h3 className="text-[13px] font-bold text-[#04091A]">{category}</h3>
                  <span className="text-[11px] text-black/30 font-medium">{catDone}/{catItems.length}</span>
                </div>
                <div className="divide-y divide-black/[0.04]">
                  {catItems.map(item => {
                    const checked = !!progress[item.id];
                    const busy = toggling.has(item.id);
                    return (
                      <motion.button
                        key={item.id}
                        onClick={() => handleToggle(item.id)}
                        disabled={busy}
                        className="w-full flex items-center gap-3 px-5 py-4 text-left hover:bg-black/[0.02] transition-colors"
                        whileTap={{ scale: 0.99 }}
                      >
                        <div className="flex-shrink-0">
                          <AnimatePresence mode="wait">
                            {checked ? (
                              <motion.div key="checked" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }} transition={{ duration: 0.15 }}>
                                <CheckCircle2 className="w-5 h-5 text-[#0096FF]" strokeWidth={2} />
                              </motion.div>
                            ) : (
                              <motion.div key="unchecked" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }} transition={{ duration: 0.15 }}>
                                <Circle className="w-5 h-5 text-black/20" strokeWidth={1.5} />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                        <span className={`text-[13px] font-medium leading-snug transition-colors ${checked ? 'line-through text-black/30' : 'text-[#04091A]'}`}>
                          {item.label}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Completion banner */}
        <AnimatePresence>
          {pct === 100 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-6 rounded-2xl p-5 text-center"
              style={{ background: '#ECFDF5', border: '1px solid #D1FAE5' }}
            >
              <p className="text-[15px] font-bold text-green-700 mb-1">🎉 Checklist complete!</p>
              <p className="text-[13px] text-green-600">You've checked off every item for your {country.name} visa application.</p>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="text-center text-[11px] text-black/20 mt-8 pb-4">
          Progress saves automatically to your account.
        </p>
      </div>
    </div>
  );
}
