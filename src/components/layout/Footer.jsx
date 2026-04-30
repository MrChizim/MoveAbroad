import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';
import logoSrc from '@/assets/logo.png';

export default function Footer() {
  return (
    <footer>

      {/* City photo CTA */}
      <div className="relative overflow-hidden min-h-[400px] flex items-center">
        <img
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=85"
          alt="City skyline"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(4,9,26,0.88) 0%, rgba(0,150,255,0.55) 100%)' }} />
        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-10 py-12 sm:py-20 w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-10">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.16em] uppercase mb-4" style={{ color: '#7DD3FC' }}>
              Start your journey
            </p>
            <h3 className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-[-0.03em] text-white leading-[1.05]" style={{ fontWeight: 900 }}>
              Ready to make<br />the move?
            </h3>
            <p className="mt-4 text-[15px] text-white/50 max-w-sm leading-relaxed">
              Everything you need to relocate from Nigeria — researched, verified, and built for you.
            </p>
          </div>
          <Link to="/countries"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-[14px] font-semibold text-white shrink-0 transition-all hover:opacity-90 active:scale-[0.98]"
            style={{ background: '#0096FF', boxShadow: '0 0 0 1px rgba(0,150,255,0.4), 0 12px 32px rgba(0,150,255,0.4)' }}
          >
            Explore Countries <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Footer content */}
      <div style={{ background: '#0a0a0a' }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-14 pb-8">

          {/* 4-col grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12 text-center sm:text-left">

            {/* Brand col */}
            <div className="sm:col-span-2 md:col-span-1 flex flex-col items-center sm:items-start">
              <img src={logoSrc} alt="MoveAbroad.ng"
                className="h-10 w-auto object-contain mb-4"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              <p className="text-[13px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.28)' }}>
                Thoroughly researched relocation guides for Nigerians planning their next chapter abroad.
              </p>
            </div>

            {/* Explore */}
            <div className="flex flex-col items-center sm:items-start">
              <h4 className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: 'rgba(255,255,255,0.2)' }}>
                Explore
              </h4>
              <nav className="space-y-3">
                {[
                  { to: '/countries', label: 'All Countries' },
                  { to: '/budget-calculator', label: 'Budget Calculator' },
                  { to: '/cv-builder', label: 'CV Builder' },
                ].map(({ to, label }) => (
                  <Link key={to} to={to}
                    className="block text-[13px] transition-colors hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.28)' }}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Account */}
            <div className="flex flex-col items-center sm:items-start">
              <h4 className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: 'rgba(255,255,255,0.2)' }}>
                Account
              </h4>
              <nav className="space-y-3">
                {[
                  { to: '/dashboard', label: 'My Guides' },
                  { to: '/profile', label: 'Profile' },
                  { to: '/checklist', label: 'Visa Checklist' },
                ].map(({ to, label }) => (
                  <Link key={to} to={to}
                    className="block text-[13px] transition-colors hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.28)' }}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div className="flex flex-col items-center sm:items-start">
              <h4 className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: 'rgba(255,255,255,0.2)' }}>
                Contact
              </h4>
              <div className="space-y-3">
                <a href="mailto:moveabroadng@gmail.com"
                  className="flex items-center gap-2 text-[13px] transition-colors hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.28)' }}
                >
                  <Mail className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={1.75} />
                  moveabroadng@gmail.com
                </a>
                <a href="https://instagram.com/moveabroadng" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[13px] transition-colors hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.28)' }}
                >
                  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                  </svg>
                  @moveabroadng
                </a>
                <a href="https://tiktok.com/@moveabroadng" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[13px] transition-colors hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.28)' }}
                >
                  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.16 8.16 0 0 0 4.78 1.52V6.82a4.85 4.85 0 0 1-1.01-.13z"/>
                  </svg>
                  @moveabroadng
                </a>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="rounded-xl px-4 py-3 mb-8 text-center sm:text-left" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
            <p className="text-[11px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.18)' }}>
              ⚠ MoveAbroad.ng provides educational resources only. Always verify immigration requirements with official government sources before making any decisions.
            </p>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-6 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <span className="text-[12px]" style={{ color: 'rgba(255,255,255,0.15)' }}>
              © {new Date().getFullYear()} MoveAbroad.ng · All rights reserved
            </span>
            <span className="text-[12px]" style={{ color: 'rgba(255,255,255,0.12)' }}>
              Educational purposes only
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
