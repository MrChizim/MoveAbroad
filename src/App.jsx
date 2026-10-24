import { lazy } from 'react';
import { Toaster } from "@/components/ui/toaster"
import { Toaster as SonnerToaster } from 'sonner';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '@/lib/AuthContext';
import AppLayout from './components/layout/AppLayout';
import Home from './pages/Home';

// Every page except Home is loaded on demand, so first-time visitors only
// download the code for the page they land on.
const PageNotFound = lazy(() => import('./lib/PageNotFound'));
const Countries = lazy(() => import('./pages/Countries'));
const CountryDetail = lazy(() => import('./pages/CountryDetail'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Admin = lazy(() => import('./pages/Admin'));
const Profile = lazy(() => import('./pages/Profile'));
const CVBuilder = lazy(() => import('./pages/CVBuilder'));
const VisaChecklist = lazy(() => import('./pages/VisaChecklist'));
const BudgetCalculator = lazy(() => import('./pages/BudgetCalculator'));
const ExpenseMonitor = lazy(() => import('./pages/ExpenseMonitor'));

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
