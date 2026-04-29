import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '@/lib/AuthContext';
import { hasAccessToCountry } from '@/lib/purchases';
import { COUNTRIES } from '@/lib/countries';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Plane, GraduationCap, Banknote, BookOpen, MapPin, FileText, Briefcase, Home, Award, Building2, CheckSquare, Lock, ArrowRight } from 'lucide-react';

function LockedContent({ countryCode, countryName }) {
  return (
    <div className="rounded-2xl border border-dashed border-[#0096FF]/30 bg-[#EBF5FF]/50 p-12 text-center">
      <div className="w-14 h-14 rounded-full bg-[#0096FF]/10 flex items-center justify-center mx-auto mb-5">
        <Lock className="w-6 h-6 text-[#0096FF]" />
      </div>
      <h3 className="text-[1.3rem] font-black text-[#04091A] mb-3" style={{ fontWeight: 900 }}>
        Unlock the Full {countryName} Guide
      </h3>
      <p className="text-[14px] text-black/40 mb-7 max-w-sm mx-auto leading-relaxed">
        Get detailed visa pathways, CV templates, scholarship info, step-by-step timelines, and everything you need to make your move.
      </p>
      <Link
        to={`/pricing?country=${countryCode}`}
        className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-[14px] font-semibold text-white hover:opacity-90 transition-all"
        style={{ background: '#0096FF' }}
      >
        Unlock Guide <ArrowRight className="w-4 h-4" />
      </Link>
      <p className="text-[12px] text-black/30 mt-4">Or save with our 5-country or all-access packs</p>
    </div>
  );
}

function GuideSection({ icon: Icon, title, content }) {
  if (!content) return (
    <div className="bg-white rounded-2xl border border-black/[0.07] p-8 text-center">
      <p className="text-[14px] text-black/30">Content for <strong>{title}</strong> coming soon.</p>
    </div>
  );
  return (
    <div className="bg-white rounded-2xl border border-black/[0.07] p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-xl bg-[#EBF5FF] flex items-center justify-center flex-shrink-0">
          <Icon className="w-4 h-4 text-[#0096FF]" strokeWidth={1.75} />
        </div>
        <h2 className="text-[16px] font-bold text-[#04091A]">{title}</h2>
      </div>
      <div className="text-[14px] text-black/60 leading-relaxed whitespace-pre-wrap">{content}</div>
    </div>
  );
}

export default function CountryDetail() {
  const { code } = useParams();
  const { user } = useAuth();
  const [hasAccess, setHasAccess] = useState(null);

  const country = COUNTRIES.find(c => c.code === code);

  useEffect(() => {
    if (!user) { setHasAccess(false); return; }
    hasAccessToCountry(user.uid, code).then(setHasAccess);
  }, [user, code]);

  if (!country) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-black/40 mb-4">Country not found.</p>
        <Link to="/countries" className="text-[#0096FF] font-semibold hover:underline">Back to Countries</Link>
      </div>
    </div>
  );

  const unlocked = hasAccess === true;

  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      {/* Hero */}
      <div className="relative h-[260px] sm:h-[380px]">
        <img src={country.image} alt={country.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
          <div className="max-w-4xl mx-auto">
            <Link to="/countries" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-4 text-[13px] transition-colors">
              <ArrowLeft className="w-4 h-4" /> All Countries
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-5xl">{country.flag}</span>
              <div>
                <h1 className="text-white text-[2rem] sm:text-[2.5rem] font-black" style={{ fontWeight: 900 }}>{country.name}</h1>
                <p className="text-white/60 text-[14px] mt-0.5">Relocation guide for Nigerians</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">

        {/* Checklist CTA — only show if unlocked */}
        {unlocked && (
          <Link to={`/checklist/${code}`} className="block mb-6">
            <div
              className="flex items-center gap-3 p-4 rounded-2xl border transition-all hover:shadow-sm"
              style={{ background: '#EBF5FF', borderColor: '#0096FF30' }}
            >
              <CheckSquare className="w-5 h-5 text-[#0096FF] flex-shrink-0" strokeWidth={1.75} />
              <div className="flex-1">
                <p className="text-[14px] font-semibold text-[#0096FF]">Visa Document Checklist</p>
                <p className="text-[12px] text-[#0096FF]/60">Track your documents and progress</p>
              </div>
              <ArrowRight className="w-4 h-4 text-[#0096FF]" />
            </div>
          </Link>
        )}

        {/* Free preview blurb */}
        <div className="bg-white rounded-2xl border border-black/[0.07] p-6 sm:p-8 mb-6">
          <h2 className="text-[16px] font-bold text-[#04091A] mb-3">Overview</h2>
          <p className="text-[14px] text-black/50 leading-relaxed">
            {country.name} is a popular destination for Nigerian professionals and students. This guide covers everything from visa pathways and university applications to cost of living, housing, and job searching — all tailored for Nigerians making the move.
          </p>
        </div>

        {/* Locked state */}
        {!unlocked && hasAccess !== null && (
          <LockedContent countryCode={code} countryName={country.name} />
        )}

        {/* Loading state */}
        {hasAccess === null && (
          <div className="flex items-center justify-center py-16">
            <div className="w-7 h-7 border-4 border-black/10 border-t-[#0096FF] rounded-full animate-spin" />
          </div>
        )}

        {/* Full guide tabs */}
        {unlocked && (
          <Tabs defaultValue="visa" className="space-y-5">
            <TabsList className="flex flex-wrap h-auto gap-1 bg-black/[0.05] p-1 rounded-xl">
              {[
                { value: 'visa', icon: Plane, label: 'Visa' },
                { value: 'university', icon: GraduationCap, label: 'University' },
                { value: 'cost', icon: Banknote, label: 'Cost' },
                { value: 'timeline', icon: BookOpen, label: 'Timeline' },
                { value: 'tips', icon: MapPin, label: 'Tips' },
                { value: 'jobs', icon: Briefcase, label: 'Jobs' },
                { value: 'templates', icon: FileText, label: 'Templates' },
                { value: 'more', icon: Building2, label: 'More' },
              ].map(({ value, icon: Icon, label }) => (
                <TabsTrigger key={value} value={value}
                  className="flex items-center gap-1.5 text-[12px] sm:text-[13px] px-3 py-1.5 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-[#0096FF]"
                >
                  <Icon className="w-3.5 h-3.5" /> {label}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="visa">
              <GuideSection icon={Plane} title="Visa Pathways" content={null} />
            </TabsContent>
            <TabsContent value="university">
              <GuideSection icon={GraduationCap} title="University & Education Guide" content={null} />
            </TabsContent>
            <TabsContent value="cost">
              <GuideSection icon={Banknote} title="Cost of Living" content={null} />
            </TabsContent>
            <TabsContent value="timeline">
              <GuideSection icon={BookOpen} title="Step-by-Step Timeline" content={null} />
            </TabsContent>
            <TabsContent value="tips">
              <GuideSection icon={MapPin} title="Nigerian-Specific Tips" content={null} />
            </TabsContent>
            <TabsContent value="jobs">
              <GuideSection icon={Briefcase} title="Job Search Guide" content={null} />
            </TabsContent>
            <TabsContent value="templates">
              <div className="space-y-4">
                <GuideSection icon={FileText} title="Cover Letter Template" content={null} />
                <GuideSection icon={FileText} title="CV Template" content={null} />
              </div>
            </TabsContent>
            <TabsContent value="more">
              <div className="space-y-4">
                <GuideSection icon={Award} title="Scholarship Opportunities" content={null} />
                <GuideSection icon={Building2} title="Embassy Information" content={null} />
                <GuideSection icon={Home} title="Housing Guide" content={null} />
              </div>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  );
}
