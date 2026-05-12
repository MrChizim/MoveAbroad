import { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { PACKAGES, COUNTRIES } from '@/lib/countries';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { useAuth } from '@/lib/AuthContext';
import PaystackButton from '../components/payment/PaystackButton';
import { useNavigate } from 'react-router-dom';
import { useSEO } from '@/lib/useSEO';

const packageMeta = {
  single:     { color: '#0096FF', bg: '#EBF5FF' },
  five_pack:  { color: '#7C3AED', bg: '#F3EEFF' },
  all_access: { color: '#059669', bg: '#ECFDF5' },
};

export default function Pricing() {
  useSEO({
    title: 'Pricing — Unlock Country Guides | MoveAbroad.ng',
    description: 'Get full access to Nigerian relocation guides. Single country from ₦10,000, 5-country pack ₦30,000, or all 13 countries for ₦50,000. Pay once, access forever.',
    canonical: 'https://moveabroad.ng/pricing',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'MoveAbroad.ng Relocation Guides',
      description: 'In-depth relocation guides for Nigerians — visa paths, jobs, cost of living, universities and scholarships for 13 countries.',
      url: 'https://moveabroad.ng/pricing',
      offers: [
        { '@type': 'Offer', name: 'Single Country', price: '10000', priceCurrency: 'NGN' },
        { '@type': 'Offer', name: '5 Countries Pack', price: '30000', priceCurrency: 'NGN' },
        { '@type': 'Offer', name: 'All Access', price: '50000', priceCurrency: 'NGN' },
      ],
    },
  });

  const { user, signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [selectedPkg, setSelectedPkg] = useState(null);
  const [selectedCountries, setSelectedCountries] = useState([]);

  const urlParams = new URLSearchParams(window.location.search);
  const preselectedCountry = urlParams.get('country');

  const handleSelectPackage = async (pkg) => {
    if (!user) {
      try {
        await signInWithGoogle();
      } catch {
        toast.error('Sign in failed. Please try again.');
        return;
      }
    }
    setSelectedPkg(pkg);
    if (preselectedCountry && pkg.id === 'single') {
      setSelectedCountries([preselectedCountry]);
    } else if (pkg.id === 'all_access') {
      setSelectedCountries(COUNTRIES.map(c => c.code));
    } else {
      setSelectedCountries([]);
    }
  };

  const toggleCountry = (code) => {
    if (selectedPkg?.id === 'all_access') return;
    setSelectedCountries(prev => {
      if (prev.includes(code)) return prev.filter(c => c !== code);
      if (selectedPkg?.id === 'single') return [code];
      if (selectedPkg?.id === 'five_pack' && prev.length >= 5) return prev;
      return [...prev, code];
    });
  };

  const requiredCount = selectedPkg?.id === 'single' ? 1 : selectedPkg?.id === 'five_pack' ? 5 : 15;
  const countriesReady = selectedPkg?.id === 'all_access' || selectedCountries.length === requiredCount;

  return (
    <div className="min-h-screen py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#0096FF] mb-3">Pricing</p>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-[-0.03em] text-[#04091A] leading-[1.05] mb-4" style={{ fontWeight: 900 }}>
            One-time. Access forever.
          </h1>
          <p className="text-[15px] text-black/40 max-w-md mx-auto leading-relaxed">
            Pay once, no subscriptions. Your guides stay unlocked for life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PACKAGES.map((pkg, i) => {
            const meta = packageMeta[pkg.id];
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] ${
                  pkg.popular ? 'bg-[#04091A] border-transparent' : 'bg-white border-black/[0.08]'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="text-[11px] font-bold tracking-[0.1em] uppercase px-4 py-1.5 rounded-full whitespace-nowrap"
                      style={{ background: meta.color, color: '#fff' }}>
                      Most Popular
                    </span>
                  </div>
                )}

                <p className="text-[12px] font-semibold mb-5" style={{ color: pkg.popular ? 'rgba(255,255,255,0.5)' : '#04091A' }}>
                  {pkg.name}
                </p>
                <div className="mb-2">
                  <span className="text-[3rem] font-black tracking-tight leading-none" style={{ color: pkg.popular ? '#fff' : '#04091A', fontWeight: 900 }}>
                    {pkg.priceDisplay}
                  </span>
                </div>
                <p className="text-[13px] mb-7" style={{ color: pkg.popular ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)' }}>
                  {pkg.description}
                </p>

                <ul className="space-y-3 mb-8 flex-1">
                  {[
                    `${pkg.countries === 15 ? 'All 15' : pkg.countries} country ${pkg.countries === 1 ? 'guide' : 'guides'}`,
                    'Interactive visa checklist',
                    'CV & Cover Letter templates',
                    'Budget calculator access',
                    'Lifetime access & updates',
                  ].map(item => (
                    <li key={item} className="flex items-center gap-3 text-[13px]">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: pkg.popular ? 'rgba(255,255,255,0.1)' : meta.bg }}>
                        <Check className="w-3 h-3" style={{ color: pkg.popular ? '#fff' : meta.color }} strokeWidth={2.5} />
                      </div>
                      <span style={{ color: pkg.popular ? 'rgba(255,255,255,0.75)' : 'rgba(0,0,0,0.6)' }}>{item}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleSelectPackage(pkg)}
                  className="flex items-center justify-center gap-2 h-12 rounded-xl text-[14px] font-semibold transition-all active:scale-[0.98] hover:opacity-90"
                  style={pkg.popular
                    ? { background: meta.color, color: '#fff', boxShadow: `0 4px 20px ${meta.color}55` }
                    : { background: meta.bg, color: meta.color }}
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Purchase dialog */}
      <Dialog open={!!selectedPkg} onOpenChange={() => setSelectedPkg(null)}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-[18px] font-bold text-[#04091A]">
              {selectedPkg?.name} — {selectedPkg?.priceDisplay}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-5 mt-2">
            {selectedPkg?.id !== 'all_access' && (
              <div>
                <p className="text-[13px] font-semibold text-[#04091A] mb-3">
                  Select {selectedPkg?.id === 'single' ? '1 country' : '5 countries'}
                  <span className="ml-2 text-[#0096FF]">({selectedCountries.length}/{selectedPkg?.countries})</span>
                </p>
                <div className="grid grid-cols-2 gap-2 max-h-52 overflow-y-auto pr-1">
                  {COUNTRIES.map(c => (
                    <button key={c.code} onClick={() => toggleCountry(c.code)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl text-[13px] text-left transition-all border ${
                        selectedCountries.includes(c.code)
                          ? 'border-[#0096FF] bg-[#EBF5FF] text-[#0096FF] font-medium'
                          : 'border-black/[0.08] hover:border-[#0096FF]/40'
                      }`}
                    >
                      <span>{c.flag}</span>
                      <span className="truncate">{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {selectedPkg?.id === 'all_access' && (
              <div className="rounded-xl p-4 text-[13px] text-center" style={{ background: '#ECFDF5', color: '#059669' }}>
                All 13 country guides unlock instantly after payment.
              </div>
            )}

            {!countriesReady && selectedPkg?.id !== 'all_access' && (
              <p className="text-[13px] text-amber-600 text-center">
                Select {requiredCount - selectedCountries.length} more {requiredCount - selectedCountries.length === 1 ? 'country' : 'countries'} to continue
              </p>
            )}

            {user && selectedPkg && countriesReady && (
              <div>
                <PaystackButton
                  user={user}
                  packageData={selectedPkg}
                  selectedCountries={selectedCountries}
                  onSuccess={() => {
                    setSelectedPkg(null);
                    navigate('/dashboard');
                  }}
                />
                <p className="text-[11px] text-center text-black/30 mt-3">
                  🔒 Secure payment via Paystack. Access granted instantly.
                </p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
