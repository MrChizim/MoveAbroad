import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/lib/AuthContext';
import { getUserPurchases, ADMIN_EMAILS } from '@/lib/purchases';
import { COUNTRIES } from '@/lib/countries';
import { getChecklistProgress } from '@/lib/checklist';
import { getChecklistTemplate } from '@/lib/checklistTemplates';
import { Globe, ArrowRight, Lock, LogOut, CheckSquare, Calculator, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [purchases, setPurchases] = useState(null);
  const [checklistProgress, setChecklistProgress] = useState({});

  useEffect(() => {
    if (!user) { navigate('/'); return; }
    getUserPurchases(user.uid).then(setPurchases);
  }, [user, navigate]);

  useEffect(() => {
    if (!user || !purchases) return;
    const isAdmin = ADMIN_EMAILS.map(e => e.toLowerCase()).includes(user.email?.toLowerCase());
    const codes = isAdmin ? COUNTRIES.map(c => c.code) : (purchases.countries || []);
    Promise.all(
      codes.map(code =>
        getChecklistProgress(user.uid, code).then(items => {
          const template = getChecklistTemplate(code, 'student');
          const total = template.length;
          const done = Object.values(items).filter(Boolean).length;
          return [code, { done, total, pct: total ? Math.round((done / total) * 100) : 0 }];
        })
      )
    ).then(entries => setChecklistProgress(Object.fromEntries(entries)));
  }, [user, purchases]);

  if (!user || !purchases) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-black/10 border-t-[#0096FF] rounded-full animate-spin" />
    </div>
  );

  const isAdmin = ADMIN_EMAILS.map(e => e.toLowerCase()).includes(user.email?.toLowerCase());
  const unlockedCodes = isAdmin ? new Set(COUNTRIES.map(c => c.code)) : new Set(purchases.countries || []);
  const unlockedList = COUNTRIES.filter(c => unlockedCodes.has(c.code));
  const lockedList = isAdmin ? [] : COUNTRIES.filter(c => !unlockedCodes.has(c.code));

  return (
    <div className="min-h-screen bg-[#F8F9FB] py-8 sm:py-12">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
          <div>
            <h1 className="text-[1.6rem] sm:text-[2rem] font-black tracking-tight text-[#04091A]" style={{ fontWeight: 900 }}>
              Welcome back, {user.full_name?.split(' ')[0]} 👋
            </h1>
            <p className="text-[14px] text-black/40 mt-1">{user.email}</p>
          </div>
          <button onClick={logout}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-[13px] font-medium text-black/50 hover:text-red-500 border border-black/[0.08] hover:border-red-200 transition-all"
          >
            <LogOut className="w-4 h-4" /> Sign out
          </button>
        </div>

        {/* Quick links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
          {[
            { to: '/budget-calculator', icon: Calculator, label: 'Budget Calculator', color: '#0096FF', bg: '#EBF5FF' },
            { to: '/cv-builder', icon: FileText, label: 'CV Builder', color: '#7C3AED', bg: '#F3EEFF' },
            { to: '/countries', icon: Globe, label: 'All Countries', color: '#059669', bg: '#ECFDF5' },
          ].map(({ to, icon: Icon, label, color, bg }) => (
            <Link key={to} to={to}
              className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-black/[0.07] hover:border-transparent hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all"
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
                <Icon className="w-4 h-4" style={{ color }} strokeWidth={1.75} />
              </div>
              <span className="text-[13px] font-semibold text-[#04091A]">{label}</span>
            </Link>
          ))}
        </div>

        {/* Unlocked guides */}
        <div className="mb-10">
          <h2 className="text-[18px] font-bold text-[#04091A] mb-4">
            Your Guides <span className="text-[#0096FF]">({unlockedList.length})</span>
          </h2>

          {unlockedList.length === 0 ? (
            <div className="bg-white rounded-2xl border border-black/[0.07] p-10 text-center">
              <p className="text-black/40 text-[14px] mb-5">You haven't unlocked any guides yet.</p>
              <Link to="/pricing"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-semibold text-white transition-all hover:opacity-90"
                style={{ background: '#0096FF' }}
              >
                Get Your First Guide <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {unlockedList.map((country, i) => (
                <motion.div key={country.code} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                  <Link to={`/country/${country.code}`} className="group block">
                    <div className="relative rounded-2xl overflow-hidden bg-white border border-black/[0.07] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all">
                      <div className="relative h-36">
                        <img src={country.image} alt={country.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="absolute bottom-3 left-4 flex items-center gap-2">
                          <span className="text-xl">{country.flag}</span>
                          <span className="text-white font-bold text-[15px]">{country.name}</span>
                        </div>
                        <div className="absolute top-3 right-3 px-2 py-1 rounded-full text-[10px] font-bold" style={{ background: '#0096FF', color: '#fff' }}>
                          UNLOCKED
                        </div>
                      </div>
                      <div className="p-4">
                        {(() => {
                          const prog = checklistProgress[country.code];
                          return prog ? (
                            <div className="mb-3">
                              <div className="flex items-center justify-between mb-1.5">
                                <span className="text-[11px] font-medium text-black/40">Checklist progress</span>
                                <span className="text-[11px] font-bold" style={{ color: prog.pct === 100 ? '#059669' : '#0096FF' }}>
                                  {prog.done}/{prog.total}
                                </span>
                              </div>
                              <div className="h-1.5 rounded-full bg-black/[0.06] overflow-hidden">
                                <div
                                  className="h-full rounded-full transition-all duration-500"
                                  style={{ width: `${prog.pct}%`, background: prog.pct === 100 ? '#059669' : '#0096FF' }}
                                />
                              </div>
                            </div>
                          ) : null;
                        })()}
                        <div className="flex items-center justify-between">
                          <Link to={`/checklist/${country.code}`}
                            className="flex items-center gap-1.5 text-[12px] font-medium text-black/50 hover:text-[#0096FF] transition-colors"
                            onClick={e => e.stopPropagation()}
                          >
                            <CheckSquare className="w-3.5 h-3.5" strokeWidth={1.75} />
                            Visa Checklist
                          </Link>
                          <span className="text-[12px] font-medium text-[#0096FF] group-hover:underline">
                            Open Guide →
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Locked countries */}
        {lockedList.length > 0 && (
          <div>
            <h2 className="text-[18px] font-bold text-[#04091A] mb-4">More Countries</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3">
              {lockedList.map(country => (
                <Link key={country.code} to="/pricing"
                  className="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl border border-black/[0.07] hover:border-[#0096FF]/30 hover:shadow-sm transition-all text-center group"
                >
                  <span className="text-2xl">{country.flag}</span>
                  <span className="text-[12px] font-medium text-[#04091A] truncate w-full text-center">{country.name}</span>
                  <Lock className="w-3 h-3 text-black/20 group-hover:text-[#0096FF] transition-colors" strokeWidth={2} />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
