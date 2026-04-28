import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { COUNTRIES } from '@/lib/countries';

export default function CountryPreviewGrid() {
  const featured = COUNTRIES.slice(0, 6);

  return (
    <section className="py-16 sm:py-32" style={{ background: '#F4F4F5' }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 sm:mb-14"
        >
          <div>
            <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#006CFF] mb-4">Destinations</p>
            <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-black tracking-[-0.03em] text-[#04091A] leading-[1.05]" style={{ fontWeight: 900 }}>
              Where Nigerians<br />are moving.
            </h2>
          </div>
          <Link to="/countries"
            className="inline-flex items-center gap-2 h-10 px-5 text-[13px] font-semibold text-[#04091A] rounded-full border-2 border-[#04091A] hover:bg-[#04091A] hover:text-white transition-all self-start sm:self-auto shrink-0"
          >
            All 15 countries <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>

        {/* Grid — 3 large + 3 small */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {featured.map((country, i) => (
            <motion.div
              key={country.code}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.4 }}
            >
              <Link to={`/country/${country.code}`} className="group block relative rounded-2xl overflow-hidden"
                style={{ aspectRatio: i < 2 ? '4/3' : '4/3' }}
              >
                <img src={country.image} alt={country.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(to top, rgba(4,9,26,0.85) 0%, rgba(4,9,26,0.2) 50%, transparent 100%)' }}
                />

                {/* Arrow on hover */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-y-1 group-hover:translate-y-0"
                  style={{ background: '#006CFF' }}
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-2xl mb-1">{country.flag}</div>
                  <h3 className="text-white font-bold text-lg tracking-tight">{country.name}</h3>
                  <p className="text-white/40 text-xs mt-0.5 font-medium">Full guide available</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-5 sm:hidden text-center">
          <Link to="/countries"
            className="inline-flex items-center gap-2 h-10 px-5 text-[13px] font-semibold text-[#04091A] rounded-full border-2 border-[#04091A]"
          >
            All 15 countries <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
