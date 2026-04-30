import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/lib/AuthContext';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Trash2, Receipt, TrendingUp, Loader2, Save } from 'lucide-react';
import { toast } from 'sonner';

const CATEGORIES = [
  { id: 'visa', label: 'Visa & Documents', color: '#7C3AED', bg: '#F3EEFF' },
  { id: 'tests', label: 'Language / Tests', color: '#0096FF', bg: '#EBF5FF' },
  { id: 'flight', label: 'Flight', color: '#059669', bg: '#ECFDF5' },
  { id: 'accommodation', label: 'Accommodation', color: '#D97706', bg: '#FFFBEB' },
  { id: 'settlement', label: 'Settlement Costs', color: '#DC2626', bg: '#FEF2F2' },
  { id: 'school', label: 'School / Tuition', color: '#0891B2', bg: '#ECFEFF' },
  { id: 'medical', label: 'Medical / Health', color: '#16A34A', bg: '#F0FDF4' },
  { id: 'transport', label: 'Transport', color: '#EA580C', bg: '#FFF7ED' },
  { id: 'food', label: 'Food & Groceries', color: '#CA8A04', bg: '#FEFCE8' },
  { id: 'other', label: 'Other', color: '#6B7280', bg: '#F9FAFB' },
];

const CURRENCIES = ['NGN', 'USD', 'GBP', 'EUR', 'CAD', 'AUD', 'SEK'];
const EXCHANGE_TO_NGN = { NGN: 1, USD: 1620, GBP: 2060, EUR: 1750, CAD: 1190, AUD: 1060, SEK: 155 };

function toNGN(amount, currency) {
  return amount * (EXCHANGE_TO_NGN[currency] || 1);
}

function formatNGN(n) {
  if (!n && n !== 0) return '₦0';
  return '₦' + Math.round(n).toLocaleString('en-NG');
}

const EMPTY_ENTRY = { description: '', amount: '', currency: 'NGN', category: 'visa', date: new Date().toISOString().split('T')[0] };

export default function ExpenseMonitor() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState({ ...EMPTY_ENTRY });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!user) { navigate('/'); return; }
    const ref = doc(db, 'expenses', user.uid);
    getDoc(ref).then(snap => {
      if (snap.exists()) setEntries(snap.data().entries || []);
    }).finally(() => setLoading(false));
  }, [user, navigate]);

  const saveExpenses = async (updated) => {
    if (!user) return;
    setSaving(true);
    try {
      await setDoc(doc(db, 'expenses', user.uid), { entries: updated, updatedAt: new Date().toISOString() });
    } catch {
      toast.error('Failed to save. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const addEntry = () => {
    if (!newEntry.description.trim() || !newEntry.amount || Number(newEntry.amount) <= 0) {
      toast.error('Add a description and a valid amount');
      return;
    }
    const entry = { ...newEntry, id: Date.now().toString(), amount: Number(newEntry.amount) };
    const updated = [...entries, entry];
    setEntries(updated);
    saveExpenses(updated);
    setNewEntry({ ...EMPTY_ENTRY });
    toast.success('Expense added');
  };

  const removeEntry = (id) => {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    saveExpenses(updated);
  };

  const totalNGN = entries.reduce((sum, e) => sum + toNGN(e.amount, e.currency), 0);

  const byCategory = CATEGORIES.map(cat => {
    const catEntries = entries.filter(e => e.category === cat.id);
    const total = catEntries.reduce((sum, e) => sum + toNGN(e.amount, e.currency), 0);
    return { ...cat, entries: catEntries, total };
  }).filter(c => c.entries.length > 0);

  const getCatMeta = (id) => CATEGORIES.find(c => c.id === id) || CATEGORIES[CATEGORIES.length - 1];

  if (!user || loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-black/10 border-t-[#0096FF] rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F8F9FB] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: '#ECFDF5' }}>
              <Receipt className="w-5 h-5 text-emerald-600" strokeWidth={1.75} />
            </div>
            <h1 className="text-[1.8rem] font-black text-[#04091A]" style={{ fontWeight: 900 }}>Expense Monitor</h1>
          </div>
          <p className="text-[14px] text-black/40">Track every cost in your relocation journey and see your running total</p>
        </div>

        {/* Total banner */}
        <Card className="p-6 mb-8 bg-[#04091A] border-0">
          <div className="flex items-center gap-3 mb-1">
            <TrendingUp className="w-4 h-4 text-white/40" />
            <span className="text-[12px] text-white/40 font-semibold uppercase tracking-widest">Total Spent So Far</span>
            {saving && <Loader2 className="w-3 h-3 text-white/30 animate-spin ml-auto" />}
          </div>
          <p className="text-[2.4rem] font-black text-white" style={{ fontWeight: 900 }}>{formatNGN(totalNGN)}</p>
          <p className="text-[12px] text-white/30 mt-1">{entries.length} expense{entries.length !== 1 ? 's' : ''} logged</p>
        </Card>

        {/* Add new entry */}
        <Card className="p-5 mb-8">
          <h3 className="text-[15px] font-bold text-[#04091A] mb-4">Add an Expense</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <Input
              placeholder="Description (e.g. IELTS registration fee)"
              value={newEntry.description}
              onChange={e => setNewEntry(n => ({ ...n, description: e.target.value }))}
              onKeyDown={e => e.key === 'Enter' && addEntry()}
            />
            <div className="flex gap-2">
              <Select value={newEntry.currency} onValueChange={v => setNewEntry(n => ({ ...n, currency: v }))}>
                <SelectTrigger className="w-24 flex-shrink-0"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {CURRENCIES.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                </SelectContent>
              </Select>
              <Input
                type="number"
                placeholder="Amount"
                value={newEntry.amount}
                onChange={e => setNewEntry(n => ({ ...n, amount: e.target.value }))}
                onKeyDown={e => e.key === 'Enter' && addEntry()}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <Select value={newEntry.category} onValueChange={v => setNewEntry(n => ({ ...n, category: v }))}>
              <SelectTrigger><SelectValue placeholder="Category" /></SelectTrigger>
              <SelectContent>
                {CATEGORIES.map(c => <SelectItem key={c.id} value={c.id}>{c.label}</SelectItem>)}
              </SelectContent>
            </Select>
            <Input
              type="date"
              value={newEntry.date}
              onChange={e => setNewEntry(n => ({ ...n, date: e.target.value }))}
            />
          </div>
          <Button
            onClick={addEntry}
            className="gap-2 text-white hover:opacity-90"
            style={{ background: '#059669' }}
          >
            <Plus className="w-4 h-4" /> Add Expense
          </Button>
        </Card>

        {/* Entries by category */}
        {entries.length === 0 ? (
          <div className="text-center py-16 text-black/30">
            <Receipt className="w-12 h-12 mx-auto mb-4 opacity-20" />
            <p className="text-[15px] font-medium">No expenses logged yet</p>
            <p className="text-[13px] mt-1">Add your first expense above to start tracking</p>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Category breakdown */}
            {byCategory.length > 1 && (
              <Card className="p-5 mb-2">
                <h3 className="text-[14px] font-bold text-[#04091A] mb-4">By Category</h3>
                <div className="space-y-2">
                  {byCategory.sort((a, b) => b.total - a.total).map(cat => (
                    <div key={cat.id} className="flex items-center gap-3">
                      <span
                        className="text-[11px] font-bold px-2 py-0.5 rounded-full flex-shrink-0"
                        style={{ background: cat.bg, color: cat.color }}
                      >
                        {cat.label}
                      </span>
                      <div className="flex-1 bg-black/[0.04] rounded-full h-1.5 overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${(cat.total / totalNGN) * 100}%`, background: cat.color }}
                        />
                      </div>
                      <span className="text-[13px] font-bold text-[#04091A] w-32 text-right flex-shrink-0">{formatNGN(cat.total)}</span>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* All entries list */}
            <Card className="overflow-hidden">
              <div className="p-4 border-b border-black/[0.06]">
                <h3 className="text-[14px] font-bold text-[#04091A]">All Expenses</h3>
              </div>
              <div className="divide-y divide-black/[0.04]">
                {[...entries].reverse().map(entry => {
                  const cat = getCatMeta(entry.category);
                  return (
                    <div key={entry.id} className="flex items-center gap-3 px-4 py-3 hover:bg-black/[0.02] transition-colors">
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 hidden sm:block"
                        style={{ background: cat.bg, color: cat.color }}
                      >
                        {cat.label}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-[13px] font-medium text-[#04091A] truncate">{entry.description}</p>
                        <p className="text-[11px] text-black/30">{entry.date}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-[13px] font-bold text-[#04091A]">
                          {entry.currency !== 'NGN' ? `${entry.currency} ${Number(entry.amount).toLocaleString()}` : formatNGN(entry.amount)}
                        </p>
                        {entry.currency !== 'NGN' && (
                          <p className="text-[11px] text-black/30">{formatNGN(toNGN(entry.amount, entry.currency))}</p>
                        )}
                      </div>
                      <button
                        onClick={() => removeEntry(entry.id)}
                        className="w-7 h-7 flex items-center justify-center rounded-lg text-black/20 hover:text-red-400 hover:bg-red-50 transition-colors flex-shrink-0"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
