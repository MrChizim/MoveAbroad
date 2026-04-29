import { useLocation } from 'react-router-dom';

export default function PageNotFound() {
  const location = useLocation();
  const pageName = location.pathname.substring(1);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#F8F9FB]">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-7xl font-light text-black/20">404</h1>
        <div className="h-0.5 w-16 bg-black/10 mx-auto" />
        <div className="space-y-2">
          <h2 className="text-[1.4rem] font-black text-[#04091A]" style={{ fontWeight: 900 }}>Page Not Found</h2>
          <p className="text-[14px] text-black/40">
            The page <span className="font-medium text-black/60">"{pageName}"</span> doesn't exist.
          </p>
        </div>
        <button
          onClick={() => window.location.href = '/'}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-semibold text-white rounded-xl hover:opacity-90 transition-all"
          style={{ background: '#0096FF' }}
        >
          Go Home
        </button>
      </div>
    </div>
  );
}
