import { lazy } from 'react';
import { Toaster } from "@/components/ui/toaster"
import { Toaster as SonnerToaster } from 'sonner';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '@/lib/AuthContext';
import AppLayout from './components/layout/AppLayout';
import Home from './pages/Home';

// After a new deploy, an open tab may ask for page files that no longer exist.
// Reload once to pick up the new version instead of showing a blank page.
function lazyPage(load) {
  return lazy(() => load().catch((err) => {
    if (!sessionStorage.getItem('reloadedForNewVersion')) {
      sessionStorage.setItem('reloadedForNewVersion', '1');
      window.location.reload();
      return new Promise(() => {});
    }
    throw err;
  }).then((mod) => {
    sessionStorage.removeItem('reloadedForNewVersion');
    return mod;
  }));
}

// Every page except Home is loaded on demand, so first-time visitors only
// download the code for the page they land on.
const PageNotFound = lazy(() => import('./lib/PageNotFound'));
const Countries = lazyPage(() => import('./pages/Countries'));
const CountryDetail = lazyPage(() => import('./pages/CountryDetail'));
const Pricing = lazyPage(() => import('./pages/Pricing'));
const Dashboard = lazyPage(() => import('./pages/Dashboard'));
const Admin = lazyPage(() => import('./pages/Admin'));
const Profile = lazyPage(() => import('./pages/Profile'));
const CVBuilder = lazyPage(() => import('./pages/CVBuilder'));
const VisaChecklist = lazyPage(() => import('./pages/VisaChecklist'));
const BudgetCalculator = lazyPage(() => import('./pages/BudgetCalculator'));
const ExpenseMonitor = lazyPage(() => import('./pages/ExpenseMonitor'));
const Updates = lazyPage(() => import('./pages/Updates'));
const About = lazyPage(() => import('./pages/InfoPages').then((m) => ({ default: m.About })));
const Partners = lazyPage(() => import('./pages/InfoPages').then((m) => ({ default: m.Partners })));
const Privacy = lazyPage(() => import('./pages/InfoPages').then((m) => ({ default: m.Privacy })));
const Terms = lazyPage(() => import('./pages/InfoPages').then((m) => ({ default: m.Terms })));

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/countries" element={<Countries />} />
            <Route path="/country/:code" element={<CountryDetail />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cv-builder" element={<CVBuilder />} />
            <Route path="/checklist/:code" element={<VisaChecklist />} />
            <Route path="/budget-calculator" element={<BudgetCalculator />} />
            <Route path="/expenses" element={<ExpenseMonitor />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/updates/:slug" element={<Updates />} />
            <Route path="/about" element={<About />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Router>
      <Toaster />
      <SonnerToaster position="top-center" richColors closeButton />
    </AuthProvider>
  );
}

export default App;
