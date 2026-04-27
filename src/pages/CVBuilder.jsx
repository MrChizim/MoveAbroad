import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, User, AlertCircle, CheckCircle2 } from 'lucide-react';
import { generateCV } from '@/lib/cvGenerator';
import { toast } from 'sonner';

const STYLES = [
  { id: 'CA', flag: '🇨🇦', name: 'Canadian Style', desc: 'Max 2 pages, no photo, achievements-focused, ATS optimized.' },
  { id: 'US', flag: '🇺🇸', name: 'US Style (Resume)', desc: '1 page preferred, tight format, metric-heavy, no personal info.' },
  { id: 'GB', flag: '🇬🇧', name: 'UK Style', desc: '2 pages allowed, personal statement at top, UK spelling.' },
];

export default function CVBuilder() {
  const [user, setUser] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState('CA');
  const [generating, setGenerating] = useState(false);

  useEffect(() => {
    base44.auth.me().then(setUser).catch(() => base44.auth.redirectToLogin());
  }, []);

  const { data: profiles = [], isLoading } = useQuery({
    queryKey: ['profile', user?.email],
    queryFn: () => base44.entities.UserProfile.filter({ user_email: user.email }),
    enabled: !!user?.email,
  });

  const profile = profiles[0];

  const completionFields = [
    { label: 'Name', done: !!profile?.full_name },
    { label: 'Summary', done: !!profile?.professional_summary },
    { label: 'Work Experience', done: profile?.work_experience?.length > 0 },
    { label: 'Education', done: profile?.education?.length > 0 },
    { label: 'Skills', done: profile?.skills?.length > 0 },
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
    } catch (e) {
      toast.error('Failed to generate CV. Please try again.');
    }
    setGenerating(false);
  };

  if (!user) return null;

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <h1 className="font-heading text-3xl font-bold">CV Builder</h1>
          </div>
          <p className="text-muted-foreground">Generate a professionally formatted CV from your profile data</p>
        </div>

        {/* Profile Completion */}
        <Card className="p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-heading font-semibold">Profile Completion</h3>
            <span className="text-sm font-bold text-primary">{completionPct}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2 mb-4">
            <div className="bg-primary h-2 rounded-full transition-all" style={{ width: `${completionPct}%` }} />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {completionFields.map(f => (
              <div key={f.label} className={`flex items-center gap-1.5 text-xs ${f.done ? 'text-green-600' : 'text-muted-foreground'}`}>
                {f.done ? <CheckCircle2 className="w-3.5 h-3.5" /> : <AlertCircle className="w-3.5 h-3.5" />}
                {f.label}
              </div>
            ))}
          </div>
          {completionPct < 60 && (
            <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Complete your profile to get a better CV</p>
              <Link to="/profile">
                <Button size="sm" variant="outline" className="gap-2"><User className="w-3.5 h-3.5" /> Edit Profile</Button>
              </Link>
            </div>
          )}
        </Card>

        {/* Style Selection */}
        <h3 className="font-heading text-lg font-semibold mb-4">Choose CV Style</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {STYLES.map(style => (
            <button
              key={style.id}
              onClick={() => setSelectedStyle(style.id)}
              className={`p-5 rounded-2xl border-2 text-left transition-all ${
                selectedStyle === style.id
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary/40 bg-card'
              }`}
            >
              <span className="text-3xl block mb-3">{style.flag}</span>
              <h4 className="font-heading font-semibold mb-1">{style.name}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{style.desc}</p>
              {selectedStyle === style.id && (
                <Badge className="mt-3 bg-primary text-primary-foreground">Selected</Badge>
              )}
            </button>
          ))}
        </div>

        {/* Preview summary */}
        {profile && (
          <Card className="p-6 mb-8 bg-accent/30">
            <h3 className="font-heading font-semibold mb-4">CV Preview Summary</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="bg-card rounded-xl p-3">
                <p className="font-heading text-2xl font-bold text-primary">{profile.work_experience?.length || 0}</p>
                <p className="text-xs text-muted-foreground">Jobs</p>
              </div>
              <div className="bg-card rounded-xl p-3">
                <p className="font-heading text-2xl font-bold text-primary">{profile.education?.length || 0}</p>
                <p className="text-xs text-muted-foreground">Education</p>
              </div>
              <div className="bg-card rounded-xl p-3">
                <p className="font-heading text-2xl font-bold text-primary">{profile.skills?.length || 0}</p>
                <p className="text-xs text-muted-foreground">Skills</p>
              </div>
              <div className="bg-card rounded-xl p-3">
                <p className="font-heading text-2xl font-bold text-primary">{profile.certifications?.length || 0}</p>
                <p className="text-xs text-muted-foreground">Certs</p>
              </div>
            </div>
          </Card>
        )}

        {/* Download */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 gap-3 px-10"
            onClick={handleGenerate}
            disabled={generating || isLoading}
          >
            <Download className="w-5 h-5" />
            {generating ? 'Generating PDF...' : `Download ${STYLES.find(s => s.id === selectedStyle)?.name}`}
          </Button>
          <p className="text-xs text-muted-foreground mt-3">
            Your CV will be downloaded as a professionally formatted PDF
          </p>
        </div>
      </div>
    </div>
  );
}