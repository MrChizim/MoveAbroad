import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { motion, AnimatePresence } from 'framer-motion';
import logoSrc from '@/assets/logo.png';

const NAV_LINKS = [
  { to: '/countries', label: 'Countries' },
  { to: '/budget-calculator', label: 'Budget Tool' },
];

const USER_LINKS = [
  { to: '/dashboard', label: 'My Guides' },
  { to: '/profile', label: 'Profile' },
  { to: '/cv-builder', label: 'CV Builder' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => { base44.auth.me().then(setUser).catch(() => {}); }, []);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  const isAdmin = user?.role === 'admin';
  const isHome = location.pathname === '/';
  const dark = isHome && !scrolled;

  return (
    <>
      {/* Nav — morphs from full-bar to floating pill on scroll */}
      <div className={`fixed z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? 'top-3 left-1/2 -translate-x-1/2 w-[min(calc(100%-2rem),860px)]'
          : 'top-0 left-0 right-0'
      }`}>
        <div className={`flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? 'h-[60px] px-5 rounded-full bg-white/96 backdrop-blur-xl shadow-[0_4px_28px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.07)]'
            : dark
              ? 'h-[72px] px-6 lg:px-10 bg-transparent max-w-[1200px] mx-auto'
              : 'h-[72px] px-6 lg:px-10 bg-white/95 backdrop-blur-md border-b border-black/[0.06] max-w-[1200px] mx-auto'
        }`}>

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={logoSrc}
              alt="MoveAbroad.ng"
              className={`w-auto object-contain transition-all duration-300 ${
                scrolled ? 'h-10' : 'h-[52px]'
              } ${dark ? 'brightness-0 invert' : ''}`}
            />
          </Link>

          {/* Right: Get Started + hamburger */}
          <div className="flex items-center gap-2">
            {!user ? (
              <button onClick={() => base44.auth.redirectToLogin()}
                className={`flex items-center h-9 px-5 text-[13px] font-semibold rounded-full transition-all ${
                  dark
                    ? 'bg-white text-[#04091A] hover:bg-white/90'
                    : 'bg-[#0096FF] text-white hover:bg-[#0096FF]/90'
                }`}
              >
                Get Started
              </button>
            ) : (
              <span className={`text-[13px] font-medium ${
                dark ? 'text-white/60' : 'text-black/40'
              }`}>
                {user.full_name?.split(' ')[0]}
              </span>
            )}

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(v => !v)}
              className={`w-9 h-9 flex items-center justify-center rounded-full transition-colors ${
                dark ? 'text-white hover:bg-white/10' : 'text-black/60 hover:bg-black/[0.06]'
              }`}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isOpen ? 'x' : 'menu'}
                  initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                  transition={{ duration: 0.15 }}
                >
                  {isOpen
                    ? <X className="w-5 h-5" strokeWidth={2} />
                    : <Menu className="w-5 h-5" strokeWidth={2} />
                  }
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px]"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed z-50 right-3 sm:right-6 w-[260px] rounded-2xl overflow-hidden"
              style={{
                top: scrolled ? '80px' : '78px',
                background: '#fff',
                boxShadow: '0 16px 48px rgba(0,0,0,0.14), 0 0 0 1px rgba(0,0,0,0.06)',
              }}
            >
              <div className="p-2.5 space-y-0.5">
                {/* Explore section */}
                <p className="px-3 pt-1.5 pb-1 text-[10px] font-semibold tracking-[0.14em] uppercase text-black/30">Explore</p>
                {NAV_LINKS.map(({ to, label }) => (
                  <Link key={to} to={to} onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2.5 rounded-xl text-[14px] font-medium transition-colors ${
                      location.pathname === to
                        ? 'bg-[#0096FF]/[0.07] text-[#0096FF]'
                        : 'text-black/75 hover:bg-black/[0.04]'
                    }`}
                  >
                    {label}
                  </Link>
                ))}

                {/* Account section */}
                {user && <>
                  <div className="h-px bg-black/[0.06] my-1 mx-1" />
                  <p className="px-3 pt-1.5 pb-1 text-[10px] font-semibold tracking-[0.14em] uppercase text-black/30">Account</p>
                  {USER_LINKS.map(({ to, label }) => (
                    <Link key={to} to={to} onClick={() => setIsOpen(false)}
                      className={`block px-3 py-2.5 rounded-xl text-[14px] font-medium transition-colors ${
                        location.pathname === to
                          ? 'bg-[#0096FF]/[0.07] text-[#0096FF]'
                          : 'text-black/75 hover:bg-black/[0.04]'
                      }`}
                    >
                      {label}
                    </Link>
                  ))}
                  {isAdmin && (
                    <Link to="/admin" onClick={() => setIsOpen(false)}
                      className="block px-3 py-2.5 rounded-xl text-[14px] font-medium text-black/75 hover:bg-black/[0.04] transition-colors"
                    >
                      Admin
                    </Link>
                  )}
                </>}

                <div className="h-px bg-black/[0.06] my-1 mx-1" />
                <div className="p-1">
                  {user ? (
                    <button onClick={() => { base44.auth.logout(); setIsOpen(false); }}
                      className="w-full text-left px-3 py-2.5 text-[14px] text-red-400 hover:text-red-500 rounded-xl transition-colors"
                    >
                      Sign out
                    </button>
                  ) : (
                    <button onClick={() => base44.auth.redirectToLogin()}
                      className="w-full h-11 bg-[#0096FF] text-white text-[13px] font-semibold rounded-xl hover:bg-[#0096FF]/90 transition-colors"
                    >
                      Get Started
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
