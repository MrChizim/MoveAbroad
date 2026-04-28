import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroBg from '@/assets/back.jpg';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden" style={{ background: '#04091A' }}>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Photo layer */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-[0.18]"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #04091A 0%, transparent 30%, transparent 60%, #04091A 100%)' }} />
      </div>

      {/* Blue glow */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full opacity-[0.15] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #006CFF 0%, transparent 70%)' }}
      />

      {/* Content */}
      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8 pt-24 sm:pt-32 pb-16 sm:pb-24">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium"
            style={{ borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.04)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFC107] animate-pulse" />
            Built for Nigerians relocating abroad
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08 }}
          className="text-[clamp(3rem,8vw,7.5rem)] font-black leading-[1] tracking-[-0.03em] text-white mb-6"
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 900 }}
        >
          Move abroad.<br />
          <span style={{ color: '#006CFF' }}>Do it right.</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16 }}
          className="text-[15px] sm:text-[17px] leading-relaxed max-w-[520px] mb-8 sm:mb-10"
          style={{ color: 'rgba(255,255,255,0.45)', fontWeight: 400 }}
        >
          In-depth relocation guides built for Nigerians — visa pathways, job strategies, cost breakdowns, CV templates for 15+ countries.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.24 }}
          className="flex flex-wrap items-center gap-3 mb-12 sm:mb-24"
        >
          <Link to="/countries"
            className="inline-flex items-center gap-2 h-12 px-6 rounded-xl text-[14px] font-semibold text-white transition-all hover:opacity-90 active:scale-[0.98]"
            style={{ background: '#006CFF', boxShadow: '0 0 0 1px rgba(0,108,255,0.5), 0 8px 24px rgba(0,108,255,0.35)' }}
          >
            Explore Countries <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/pricing"
            className="inline-flex items-center gap-2 h-12 px-6 rounded-xl text-[14px] font-medium transition-all hover:bg-white/[0.08] active:scale-[0.98]"
            style={{ border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.7)' }}
          >
            View Pricing
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          {[
            { value: '15+', label: 'Countries covered' },
            { value: '10+', label: 'Sections per guide' },
            { value: '100%', label: 'Nigeria-focused' },
            { value: '₦5,000', label: 'Starting price' },
          ].map(s => (
            <div key={s.label}>
              <p className="text-3xl sm:text-4xl font-black text-white tracking-tight" style={{ fontWeight: 900 }}>{s.value}</p>
              <p className="text-xs mt-1.5 tracking-wide" style={{ color: 'rgba(255,255,255,0.25)' }}>{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-28" style={{ background: 'linear-gradient(to bottom, transparent, #ffffff)' }} />
    </section>
  );
}
