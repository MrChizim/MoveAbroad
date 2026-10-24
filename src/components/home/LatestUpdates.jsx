import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { UPDATES } from '@/lib/updates';

const formatDate = (iso) => new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

export default function LatestUpdates() {
  return (
    <section className="bg-[#F8F9FB] py-16 sm:py-20">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#0096FF] mb-3">Visa News</p>
            <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-black text-[#04091A] leading-tight" style={{ fontWeight: 900 }}>
              What changed for Nigerians this year
            </h2>
          </div>
          <Link to="/updates" className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#0096FF]">
            All updates <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {UPDATES.slice(0, 4).map((u) => (
            <Link key={u.slug} to={`/updates/${u.slug}`} className="bg-white rounded-2xl border border-black/[0.07] p-5 hover:shadow-sm transition-shadow flex flex-col">
              <p className="flex items-center gap-1.5 text-[12px] text-black/40 mb-2"><Calendar className="w-3.5 h-3.5" /> {formatDate(u.published)}</p>
              <h3 className="text-[15px] font-bold text-[#04091A] leading-snug mb-2">{u.title}</h3>
              <p className="text-[13px] text-black/50 leading-relaxed line-clamp-3">{u.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
