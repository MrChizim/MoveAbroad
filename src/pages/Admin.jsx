import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/lib/AuthContext';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Shield, Search, CheckCircle2 } from 'lucide-react';
import { COUNTRIES } from '@/lib/countries';

const ADMIN_EMAILS = ['siriusoddjobs@gmail.com'];

export default function Admin() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const isAdmin = user && ADMIN_EMAILS.includes(user.email);

  useEffect(() => {
    if (!user) { navigate('/'); return; }
    if (user && !isAdmin) { navigate('/'); return; }
    if (!isAdmin) return;

    const q = query(collection(db, 'purchases'), orderBy('email'));
    getDocs(q).then(snap => {
      setPurchases(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    }).finally(() => setLoading(false));
  }, [user, isAdmin, navigate]);

  if (!user || !isAdmin) return null;

  const filtered = purchases.filter(p =>
    !searchTerm ||
    p.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.packages?.some(pkg => pkg.paystackRef?.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const totalRevenue = purchases.reduce((sum, p) => {
    return sum + (p.packages?.reduce((s, pkg) => {
      const price = pkg.packageId === 'single' ? 5000 : pkg.packageId === 'five_pack' ? 10000 : 30000;
      return s + price;
    }, 0) || 0);
  }, 0);

  return (
    <div className="min-h-screen bg-[#F8F9FB] py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <Shield className="w-6 h-6 text-[#0096FF]" />
          <h1 className="text-[1.8rem] font-black text-[#04091A]" style={{ fontWeight: 900 }}>Admin Dashboard</h1>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <Card className="p-5">
            <p className="text-[13px] text-black/40">Total Customers</p>
            <p className="text-[1.6rem] font-black text-[#04091A] mt-1" style={{ fontWeight: 900 }}>{purchases.length}</p>
          </Card>
          <Card className="p-5">
            <p className="text-[13px] text-black/40">Total Purchases</p>
            <p className="text-[1.6rem] font-black text-[#04091A] mt-1" style={{ fontWeight: 900 }}>{purchases.reduce((s, p) => s + (p.packages?.length || 0), 0)}</p>
          </Card>
          <Card className="p-5">
            <p className="text-[13px] text-black/40">Est. Revenue</p>
            <p className="text-[1.6rem] font-black text-green-600 mt-1" style={{ fontWeight: 900 }}>₦{totalRevenue.toLocaleString()}</p>
          </Card>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black/30" />
          <Input
            placeholder="Search by email or Paystack reference..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Purchase list */}
        <div className="space-y-3">
          {loading && <Card className="p-8 text-center text-black/30">Loading...</Card>}
          {!loading && filtered.length === 0 && (
            <Card className="p-8 text-center text-black/30">No purchases found</Card>
          )}
          {filtered.map(p => (
            <Card key={p.id} className="p-5">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-[14px] font-bold text-[#04091A] mb-1">{p.email}</p>
                  <p className="text-[12px] text-black/40 mb-2">UID: {p.uid}</p>
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {(p.countries || []).map(code => {
                      const c = COUNTRIES.find(x => x.code === code);
                      return (
                        <span key={code} className="text-[11px] px-2 py-0.5 rounded-full bg-[#EBF5FF] text-[#0096FF] font-medium">
                          {c ? `${c.flag} ${c.name}` : code}
                        </span>
                      );
                    })}
                  </div>
                  <div className="space-y-1">
                    {(p.packages || []).map((pkg, i) => (
                      <div key={i} className="flex items-center gap-2 text-[12px] text-black/50">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                        <span className="font-medium capitalize">{pkg.packageId?.replace(/_/g, ' ')}</span>
                        <span className="text-black/30">·</span>
                        <span>Ref: {pkg.paystackRef || '—'}</span>
                        <span className="text-black/30">·</span>
                        <span>{pkg.paidAt ? new Date(pkg.paidAt).toLocaleDateString() : '—'}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
