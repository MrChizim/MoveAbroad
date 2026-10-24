import { Outlet, useLocation } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from '@/lib/ScrollToTop';
import { useAuth } from '@/lib/AuthContext';
import { isAdminEmail } from '@/lib/admins';
import { excludeFromAnalytics, trackPageview } from '@/lib/analytics';
import { ArrowUp } from 'lucide-react';

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all hover:opacity-90 active:scale-95"
      style={{ background: '#0096FF' }}
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5 text-white" />
    </button>
  );
}

function PageLoading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center" role="status" aria-label="Loading page">
      <div className="w-8 h-8 rounded-full border-2 border-[#0096FF]/20 border-t-[#0096FF] animate-spin" />
    </div>
  );
}

export default function AppLayout() {
  const { pathname } = useLocation();
  const { user } = useAuth();
  const isHome = pathname === '/';

  useEffect(() => {
    excludeFromAnalytics(isAdminEmail(user?.email));
  }, [user]);

  useEffect(() => {
    trackPageview(pathname);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className={`flex-1 ${isHome ? '' : 'pt-20'}`}>
        <Suspense fallback={<PageLoading />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
