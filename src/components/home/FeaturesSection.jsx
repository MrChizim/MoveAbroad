import { motion } from 'framer-motion';
import { Compass, GraduationCap, FileText, MapPin, Banknote, BookOpen, Briefcase, Shield } from 'lucide-react';

const features = [
  { icon: Compass, title: "Visa Pathways", desc: "Every visa type explained — student, work, visitor, and permanent residency options for each country.", color: '#0096FF', bg: '#EBF5FF' },
  { icon: GraduationCap, title: "University Guides", desc: "Top universities, admission requirements, and scholarship opportunities specifically for Nigerians.", color: '#7C3AED', bg: '#F3EEFF' },
  { icon: FileText, title: "CV & Cover Letter", desc: "Country-specific templates that actually get responses from employers abroad.", color: '#059669', bg: '#ECFDF5' },
  { icon: Banknote, title: "Cost of Living", desc: "Real numbers on rent, food, transport, and monthly expenses broken down per city.", color: '#D97706', bg: '#FFFBEB' },
  { icon: BookOpen, title: "Step-by-Step Timeline", desc: "From application to arrival — a clear timeline so you never miss a critical deadline.", color: '#DC2626', bg: '#FEF2F2' },
  { icon: MapPin, title: "Nigerian-Specific Tips", desc: "Embassy experiences, document prep, and insider tips from Nigerians who've done it.", color: '#0096FF', bg: '#EBF5FF' },
  { icon: Briefcase, title: "Job Search Guide", desc: "Where to find jobs, how to apply from Nigeria, and what employers actually look for.", color: '#7C3AED', bg: '#F3EEFF' },
  { icon: Shield, title: "Embassy Information", desc: "Contact details, appointment booking tips, and visa interview preparation strategies.", color: '#059669', bg: '#ECFDF5' },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 sm:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10 sm:mb-16"
        >
          <div>
            <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#0096FF] mb-4">What's included</p>
            <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-black tracking-[-0.03em] text-[#04091A] leading-[1.05]" style={{ fontWeight: 900 }}>
              Everything you need.<br />Nothing you don't.
            </h2>
          </div>
          <p className="text-[15px] text-black/40 max-w-sm leading-relaxed lg:text-right font-normal">
            Each guide is packed with actionable intelligence specifically researched for Nigerians relocating abroad.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative bg-white rounded-2xl border border-black/[0.07] p-6 cursor-default
                hover:border-transparent hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1
                transition-all duration-300"
            >
              {/* Color accent bar on hover */}
              <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: f.color }}
              />

              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300"
                style={{ background: f.bg }}
              >
                <f.icon className="w-5 h-5 transition-colors duration-300" style={{ color: f.color }} strokeWidth={1.75} />
              </div>
              <h3 className="text-[15px] font-semibold text-[#04091A] mb-2 group-hover:text-[#04091A] transition-colors duration-200">{f.title}</h3>
              <p className="text-[13px] text-black/40 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
