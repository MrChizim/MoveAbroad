import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/lib/AuthContext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, User, AlertCircle, CheckCircle2, Info, Pencil } from 'lucide-react';
import { generateCV, generateCoverLetter } from '@/lib/cvGenerator';
import { toast } from 'sonner';

const STYLES = [
  { id: 'CA', code: 'CA', name: 'Canadian Style', desc: 'Max 2 pages, no photo, achievements-focused, ATS optimized.' },
  { id: 'US', code: 'US', name: 'US Style (Resume)', desc: '1 page preferred, tight format, metric-heavy, no personal info.' },
  { id: 'GB', code: 'UK', name: 'UK Style', desc: '2 pages allowed, personal statement at top, UK spelling.' },
  { id: 'EU', code: 'EU', name: 'European Style', desc: 'Two-column layout, navy sidebar, skills pills, photo-optional. Standard across EU countries including Sweden, Germany, Netherlands and more.' },
];

const COVER_COUNTRIES = [
  { id: 'CA', code: 'CA', name: 'Canada' },
  { id: 'GB', code: 'UK', name: 'United Kingdom' },
  { id: 'SE', code: 'SE', name: 'Sweden' },
  { id: 'EU', code: 'EU', name: 'Europe (General)' },
];

const COVER_LEVELS = [
  { id: 'undergrad', label: 'Undergraduate Admission' },
  { id: 'masters', label: 'Masters Admission' },
  { id: 'phd', label: 'PhD Application' },
  { id: 'work', label: 'Job Application' },
];

export default function CVBuilder() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedStyle, setSelectedStyle] = useState('CA');
  const [generating, setGenerating] = useState(false);
  const [coverCountry, setCoverCountry] = useState('CA');
  const [coverLevel, setCoverLevel] = useState('masters');
  const [generatingCover, setGeneratingCover] = useState(false);

  useEffect(() => {
    if (!user) { navigate('/'); return; }
    const ref = doc(db, 'profiles', user.uid);
    getDoc(ref).then(snap => {
      if (snap.exists()) setProfile(snap.data());
    }).finally(() => setLoading(false));
  }, [user, navigate]);

  const completionFields = [
    { label: 'Name', done: !!profile?.full_name },
    { label: 'Summary', done: !!profile?.professional_summary },
    { label: 'Work Experience', done: (profile?.work_experience?.length || 0) > 0 },
    { label: 'Education', done: (profile?.education?.length || 0) > 0 },
    { label: 'Skills', done: (profile?.skills?.length || 0) > 0 },
  ];
  const completionPct = Math.round((completionFields.filter(f => f.done).length / completionFields.length) * 100);

  const handleGenerate = async () => {
    if (!profile) {
      toast.error('Please fill in your profile first');
      return;
    }
    setGenerating(true);
    try {
      generateCV(profile, selectedStyle);
      toast.success('CV downloaded!');
    } catch {
      toast.error('Failed to generate CV. Please try again.');
    }
    setGenerating(false);
  };

  const handleCoverLetter = async () => {
    if (!profile) {
      toast.error('Please fill in your profile first');
      return;
    }
    setGeneratingCover(true);
    try {
      generateCoverLetter(profile, selectedStyle, coverCountry, coverLevel);
      toast.success('Cover letter downloaded!');
    } catch {
      toast.error('Failed to generate cover letter. Please try again.');
    }
    setGeneratingCover(false);
  };

  if (!user || loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-black/10 border-t-[#0096FF] rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F8F9FB] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: '#EBF5FF' }}>
              <FileText className="w-5 h-5 text-[#0096FF]" strokeWidth={1.75} />
            </div>
            <h1 className="text-[1.8rem] font-black text-[#04091A]" style={{ fontWeight: 900 }}>CV Builder</h1>
          </div>
          <p className="text-[14px] text-black/40">Generate a professionally formatted CV from your profile data</p>
        </div>

        {/* Profile Completion */}
        <Card className="p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[15px] font-bold text-[#04091A]">Profile Completion</h3>
            <span className="text-[14px] font-bold text-[#0096FF]">{completionPct}%</span>
          </div>
          <div className="w-full bg-black/[0.06] rounded-full h-2 mb-4">
            <div className="h-2 rounded-full transition-all" style={{ width: `${completionPct}%`, background: '#0096FF' }} />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {completionFields.map(f => (
              <div key={f.label} className={`flex items-center gap-1.5 text-[12px] ${f.done ? 'text-green-600' : 'text-black/30'}`}>
                {f.done ? <CheckCircle2 className="w-3.5 h-3.5" /> : <AlertCircle className="w-3.5 h-3.5" />}
                {f.label}
              </div>
            ))}
          </div>
          {completionPct < 60 && (
            <div className="mt-4 pt-4 border-t border-black/[0.06] flex items-center justify-between">
              <p className="text-[13px] text-black/40">Complete your profile to get a better CV</p>
              <Link to="/profile">
                <Button size="sm" variant="outline" className="gap-2 text-[13px]"><User className="w-3.5 h-3.5" /> Edit Profile</Button>
              </Link>
            </div>
          )}
        </Card>

        {/* Style Selection */}
        <h3 className="text-[15px] font-bold text-[#04091A] mb-4">Choose CV Style</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {STYLES.map(style => (
            <button
              key={style.id}
              onClick={() => setSelectedStyle(style.id)}
              className={`p-5 rounded-2xl border-2 text-left transition-all ${
                selectedStyle === style.id
                  ? 'border-[#0096FF] bg-[#EBF5FF]/50'
                  : 'border-black/[0.08] hover:border-[#0096FF]/40 bg-white'
              }`}
            >
              <span className="inline-block text-[11px] font-bold px-2 py-1 rounded-lg mb-3" style={{ background: '#EBF5FF', color: '#0096FF' }}>{style.code}</span>
              <h4 className="text-[14px] font-bold text-[#04091A] mb-1">{style.name}</h4>
              <p className="text-[12px] text-black/40 leading-relaxed">{style.desc}</p>
              {selectedStyle === style.id && (
                <Badge className="mt-3 text-[11px]" style={{ background: '#0096FF', color: '#fff' }}>Selected</Badge>
              )}
            </button>
          ))}
        </div>

        {/* Preview summary */}
        {profile && (
          <Card className="p-6 mb-8">
            <h3 className="text-[15px] font-bold text-[#04091A] mb-4">CV Preview Summary</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {[
                { label: 'Jobs', val: profile.work_experience?.length || 0 },
                { label: 'Education', val: profile.education?.length || 0 },
                { label: 'Skills', val: profile.skills?.length || 0 },
                { label: 'Certs', val: profile.certifications?.length || 0 },
              ].map(({ label, val }) => (
                <div key={label} className="bg-[#F8F9FB] rounded-xl p-3">
                  <p className="text-[1.5rem] font-black text-[#0096FF]" style={{ fontWeight: 900 }}>{val}</p>
                  <p className="text-[12px] text-black/40">{label}</p>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Download CV */}
        <div className="text-center mb-16">
          <Button
            size="lg"
            className="gap-3 px-10 text-white hover:opacity-90"
            style={{ background: '#0096FF' }}
            onClick={handleGenerate}
            disabled={generating || loading}
          >
            <Download className="w-5 h-5" />
            {generating ? 'Generating PDF...' : `Download ${STYLES.find(s => s.id === selectedStyle)?.name}`}
          </Button>
          <p className="text-[12px] text-black/30 mt-3">
            Your CV will be downloaded as a professionally formatted PDF
          </p>
        </div>

        {/* Cover Letter Section */}
        <div className="border-t border-black/[0.07] pt-12">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: '#F3EEFF' }}>
              <FileText className="w-5 h-5" style={{ color: '#7C3AED' }} strokeWidth={1.75} />
            </div>
            <h2 className="text-[1.4rem] font-black text-[#04091A]" style={{ fontWeight: 900 }}>Cover Letter Generator</h2>
          </div>
          <p className="text-[14px] text-black/40 mb-4">
            Download a cover letter template with your name and contact info already filled in. All [bracketed] sections are placeholders you personalise before sending.
          </p>

          {/* How it works */}
          <div className="bg-[#FFFBEB] border border-amber-200 rounded-2xl p-4 mb-8 flex gap-3">
            <Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="space-y-1.5 text-[13px] text-amber-800">
              <p><strong>How it works:</strong> Your name, city, phone, and email from your Profile are pre-filled at the top. Everything else is a template you complete.</p>
              <p><strong>How to edit after download:</strong> Open the PDF in any editor — Preview (Mac), Adobe Acrobat, or upload to Google Docs / Word. Replace every <code className="bg-amber-100 px-1 rounded text-[12px]">[bracketed]</code> section with your real details before sending.</p>
              <p><strong>Profile required:</strong> Fill in at least your name and contact info in <Link to="/profile" className="underline font-semibold">My Profile</Link> first, otherwise the header will be blank.</p>
            </div>
          </div>

          <h3 className="text-[15px] font-bold text-[#04091A] mb-4">Destination Country</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {COVER_COUNTRIES.map(c => (
              <button
                key={c.id}
                onClick={() => setCoverCountry(c.id)}
                className={`p-4 rounded-2xl border-2 text-left transition-all ${
                  coverCountry === c.id
                    ? 'border-[#7C3AED] bg-[#F3EEFF]/60'
                    : 'border-black/[0.08] hover:border-[#7C3AED]/40 bg-white'
                }`}
              >
                <span className="inline-block text-[11px] font-bold px-2 py-1 rounded-lg mb-2" style={{ background: '#EBF5FF', color: '#0096FF' }}>{c.code}</span>
                <p className="text-[13px] font-semibold text-[#04091A]">{c.name}</p>
                {coverCountry === c.id && (
                  <Badge className="mt-2 text-[11px]" style={{ background: '#7C3AED', color: '#fff' }}>Selected</Badge>
                )}
              </button>
            ))}
          </div>

          <h3 className="text-[15px] font-bold text-[#04091A] mb-4">Application Type</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {COVER_LEVELS.map(l => (
              <button
                key={l.id}
                onClick={() => setCoverLevel(l.id)}
                className={`p-4 rounded-2xl border-2 text-center transition-all ${
                  coverLevel === l.id
                    ? 'border-[#7C3AED] bg-[#F3EEFF]/60'
                    : 'border-black/[0.08] hover:border-[#7C3AED]/40 bg-white'
                }`}
              >
                <p className="text-[13px] font-semibold text-[#04091A]">{l.label}</p>
                {coverLevel === l.id && (
                  <Badge className="mt-2 text-[11px]" style={{ background: '#7C3AED', color: '#fff' }}>Selected</Badge>
                )}
              </button>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="gap-3 px-10 text-white hover:opacity-90"
              style={{ background: '#7C3AED' }}
              onClick={handleCoverLetter}
              disabled={generatingCover || loading}
            >
              <Download className="w-5 h-5" />
              {generatingCover ? 'Generating...' : 'Download Cover Letter'}
            </Button>
            <p className="text-[12px] text-black/30 mt-3">
              PDF downloads with your name and contact info pre-filled — open in Preview, Acrobat, or Google Docs to edit the [bracketed] sections
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
