import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { useUserAccess } from '@/lib/useUserAccess';
import { COUNTRIES } from '@/lib/countries';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Plane, GraduationCap, Banknote, BookOpen, MapPin, FileText, Briefcase, Home, Award, Building2, CheckSquare } from 'lucide-react';
import GuideSection from '../components/country/GuideSection';
import LockedContent from '../components/country/LockedContent';

export default function CountryDetail() {
  const { code } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    base44.auth.me().then(setUser).catch(() => {});
  }, []);

  const country = COUNTRIES.find(c => c.code === code);
  const { hasAccess, isLoading: accessLoading } = useUserAccess(user?.email);

  const { data: guides = [] } = useQuery({
    queryKey: ['guide', code],
    queryFn: () => base44.entities.CountryGuide.filter({ country_code: code }),
  });

  const guide = guides[0];
  const unlocked = hasAccess(code);

  if (!country) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-2xl font-bold mb-4">Country not found</h1>
          <Link to="/countries"><Button>Back to Countries</Button></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-[300px] sm:h-[400px]">
        <img src={country.image} alt={country.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-12">
          <div className="max-w-7xl mx-auto">
            <Link to="/countries" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-4 text-sm transition-colors">
              <ArrowLeft className="w-4 h-4" /> All Countries
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-5xl">{country.flag}</span>
              <div>
                <h1 className="text-white font-heading text-3xl sm:text-5xl font-bold">{country.name}</h1>
                {guide?.tagline && <p className="text-white/70 mt-1">{guide.tagline}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Checklist CTA */}
        {user && (
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <Link to={`/checklist/${code}`} className="flex-1">
              <div className="bg-primary/10 border border-primary/20 rounded-2xl p-4 flex items-center gap-3 hover:bg-primary/20 transition-colors cursor-pointer">
                <CheckSquare className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Visa Document Checklist</p>
                  <p className="text-xs text-muted-foreground">Track your documents & deadlines</p>
                </div>
                <ArrowLeft className="w-4 h-4 text-primary ml-auto rotate-180" />
              </div>
            </Link>
          </div>
        )}

        {/* Free Preview */}
        {guide?.preview_summary && (
          <div className="bg-card rounded-2xl border border-border p-6 sm:p-8 mb-8">
            <h2 className="font-heading text-xl font-bold mb-3">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">{guide.preview_summary}</p>
          </div>
        )}

        {!guide && (
          <div className="bg-accent/50 rounded-2xl p-8 text-center mb-8">
            <p className="text-muted-foreground">The full guide for {country.name} is being prepared. Check back soon!</p>
          </div>
        )}

        {/* Full Content or Lock */}
        {guide && !unlocked && <LockedContent countryCode={code} countryName={country.name} />}

        {guide && unlocked && (
          <Tabs defaultValue="visa" className="space-y-6">
            <TabsList className="flex flex-wrap h-auto gap-1 bg-muted p-1 rounded-xl">
              <TabsTrigger value="visa" className="gap-1.5 text-xs sm:text-sm"><Plane className="w-3.5 h-3.5" /> Visa</TabsTrigger>
              <TabsTrigger value="university" className="gap-1.5 text-xs sm:text-sm"><GraduationCap className="w-3.5 h-3.5" /> University</TabsTrigger>
              <TabsTrigger value="cost" className="gap-1.5 text-xs sm:text-sm"><Banknote className="w-3.5 h-3.5" /> Cost</TabsTrigger>
              <TabsTrigger value="timeline" className="gap-1.5 text-xs sm:text-sm"><BookOpen className="w-3.5 h-3.5" /> Timeline</TabsTrigger>
              <TabsTrigger value="tips" className="gap-1.5 text-xs sm:text-sm"><MapPin className="w-3.5 h-3.5" /> Tips</TabsTrigger>
              <TabsTrigger value="jobs" className="gap-1.5 text-xs sm:text-sm"><Briefcase className="w-3.5 h-3.5" /> Jobs</TabsTrigger>
              <TabsTrigger value="templates" className="gap-1.5 text-xs sm:text-sm"><FileText className="w-3.5 h-3.5" /> Templates</TabsTrigger>
              <TabsTrigger value="more" className="gap-1.5 text-xs sm:text-sm"><Building2 className="w-3.5 h-3.5" /> More</TabsTrigger>
            </TabsList>

            <TabsContent value="visa">
              <GuideSection icon={Plane} title="Visa Pathways" content={guide.visa_pathways} />
            </TabsContent>
            <TabsContent value="university">
              <GuideSection icon={GraduationCap} title="University & Education Guide" content={guide.university_guide} />
            </TabsContent>
            <TabsContent value="cost">
              <GuideSection icon={Banknote} title="Cost of Living" content={guide.cost_of_living} />
            </TabsContent>
            <TabsContent value="timeline">
              <GuideSection icon={BookOpen} title="Step-by-Step Timeline" content={guide.step_by_step_timeline} />
            </TabsContent>
            <TabsContent value="tips">
              <GuideSection icon={MapPin} title="Nigerian-Specific Tips" content={guide.nigerian_specific_tips} />
            </TabsContent>
            <TabsContent value="jobs">
              <GuideSection icon={Briefcase} title="Job Search Guide" content={guide.job_search_guide} />
            </TabsContent>
            <TabsContent value="templates">
              <div className="space-y-6">
                <GuideSection icon={FileText} title="Cover Letter Template" content={guide.cover_letter_template} />
                <GuideSection icon={FileText} title="CV Template" content={guide.cv_template} />
              </div>
            </TabsContent>
            <TabsContent value="more">
              <div className="space-y-6">
                <GuideSection icon={Award} title="Scholarship Opportunities" content={guide.scholarship_opportunities} />
                <GuideSection icon={Building2} title="Embassy Information" content={guide.embassy_info} />
                <GuideSection icon={Home} title="Housing Guide" content={guide.housing_guide} />
              </div>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  );
}