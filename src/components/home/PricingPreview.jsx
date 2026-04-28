import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap, Star, Layers } from 'lucide-react';
import { PACKAGES } from '@/lib/countries';

const packageMeta = {
  single: { icon: Zap, color: '#0096FF', bg: '#EBF5FF', badge: null },
  five_pack: { icon: Star, color: '#7C3AED', bg: '#F3EEFF', badge: 'Most Popular' },
  all_access: { icon: Layers, color: '#059669', bg: '#ECFDF5', badge: 'Best Value' },
};

export default function PricingPreview() {
  return (
    <section className="py-16 sm:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#0096FF] mb-4">Pricing</p>
          <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-black tracking-[-0.03em] text-[#04091A] leading-[1.05] mb-5" style={{ fontWeight: 900 }}>
            One-time. Access forever.
          </h2>
          <p className="text-[16px] text-black/40 max-w-md mx-auto leading-relaxed">
            Pay once. No subscriptions, no renewal fees. Your guides are always available.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PACKAGES.map((pkg, i) => {
            const meta = packageMeta[pkg.id];
            const Icon = meta.icon;
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] ${
                  pkg.popular
                    ? 'bg-[#04091A] border-transparent shadow-[0_8px_40px_rgba(4,9,26,0.18)]'
                    : 'bg-white border-black/[0.08]'
                }`}
              >
                {meta.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="text-[11px] font-bold tracking-[0.1em] uppercase px-4 py-1.5 rounded-full whitespace-nowrap"
                      style={{
                        background: pkg.popular ? meta.color : meta.bg,
                        color: pkg.popular ? '#fff' : meta.color,
                      }}
                    >
                      {meta.badge}
                    </span>
                  </div>
                )}

                {/* Icon + Name */}
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: pkg.popular ? 'rgba(255,255,255,0.1)' : meta.bg }}
                  >
                    <Icon className="w-5 h-5" style={{ color: pkg.popular ? '#fff' : meta.color }} strokeWidth={1.75} />
                  </div>
                  <p className="text-[13px] font-semibold" style={{ color: pkg.popular ? 'rgba(255,255,255,0.6)' : '#04091A' }}>
                    {pkg.name}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-2">
                  <span className="text-[3.2rem] font-black tracking-tight leading-none" style={{ color: pkg.popular ? '#fff' : '#04091A', fontWeight: 900 }}>
                    {pkg.priceDisplay}
                  </span>
                </div>
                <p className="text-[13px] mb-8" style={{ color: pkg.popular ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)' }}>
                  {pkg.description}
                </p>

                {/* Features */}
                <ul className="space-y-3.5 mb-8 flex-1">
                  {[
                    `${pkg.countries === 15 ? 'All 15' : pkg.countries} country ${pkg.countries === 1 ? 'guide' : 'guides'}`,
                    'Visa document checklist',
                    'CV & Cover Letter templates',
                    'Lifetime access & updates',
                  ].map(item => (
                    <li key={item} className="flex items-center gap-3 text-[13px]">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: pkg.popular ? 'rgba(255,255,255,0.1)' : meta.bg }}
                      >
                        <Check className="w-3 h-3" style={{ color: pkg.popular ? '#fff' : meta.color }} strokeWidth={2.5} />
                      </div>
                      <span style={{ color: pkg.popular ? 'rgba(255,255,255,0.75)' : 'rgba(0,0,0,0.6)' }}>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/pricing"
                  className="flex items-center justify-center gap-2 h-12 rounded-xl text-[14px] font-semibold transition-all active:scale-[0.98] hover:opacity-90"
                  style={pkg.popular ? {
                    background: meta.color,
                    color: '#fff',
                    boxShadow: `0 4px 20px ${meta.color}55`,
                  } : {
                    background: meta.bg,
                    color: meta.color,
                  }}
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
