import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from '@/lib/ScrollToTop';

export default function AppLayout() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className={`flex-1 ${isHome ? '' : 'pt-20'}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
