import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Trash2, Save, User, Briefcase, GraduationCap, Award, FileText } from 'lucide-react';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

export default function Profile() {
  const [user, setUser] = useState(null);
  const queryClient = useQueryClient();

  useEffect(() => {
    base44.auth.me().then(setUser).catch(() => base44.auth.redirectToLogin());
  }, []);

  const { data: profiles = [] } = useQuery({
    queryKey: ['profile', user?.email],
    queryFn: () => base44.entities.UserProfile.filter({ user_email: user.email }),
    enabled: !!user?.email,
  });

  const existing = profiles[0];

  const [form, setForm] = useState({
    full_name: '', phone: '', city: '', linkedin_url: '',
    professional_summary: '', skills: [],
    work_experience: [], education: [], certifications: [], languages: []
  });

  const [skillInput, setSkillInput] = useState('');
  const [langInput, setLangInput] = useState('');

  useEffect(() => {
    if (existing) {
      setForm({
        full_name: existing.full_name || '',
        phone: existing.phone || '',
        city: existing.city || '',
        linkedin_url: existing.linkedin_url || '',
        professional_summary: existing.professional_summary || '',
        skills: existing.skills || [],
        work_experience: existing.work_experience || [],
        education: existing.education || [],
        certifications: existing.certifications || [],
        languages: existing.languages || [],
      });
    }
  }, [existing]);

  const saveMutation = useMutation({
    mutationFn: async (data) => {
      if (existing) return base44.entities.UserProfile.update(existing.id, data);
      return base44.entities.UserProfile.create({ ...data, user_email: user.email });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile', user?.email] });
      toast.success('Profile saved!');
    }
  });

  const set = (field, val) => setForm(f => ({ ...f, [field]: val }));

  const addSkill = () => {
    if (!skillInput.trim()) return;
    set('skills', [...form.skills, skillInput.trim()]);
    setSkillInput('');
  };

  const addLang = () => {
    if (!langInput.trim()) return;
    set('languages', [...form.languages, langInput.trim()]);
    setLangInput('');
  };

  const addWorkExp = () => set('work_experience', [...form.work_experience, {
    job_title: '', company: '', location: '', start_date: '', end_date: '', is_current: false, achievements: ['']
  }]);

  const updateWork = (i, field, val) => {
    const updated = [...form.work_experience];
    updated[i] = { ...updated[i], [field]: val };
    set('work_experience', updated);
  };

  const updateWorkAchievement = (wi, ai, val) => {
    const updated = [...form.work_experience];
    const achs = [...(updated[wi].achievements || [])];
    achs[ai] = val;
    updated[wi] = { ...updated[wi], achievements: achs };
    set('work_experience', updated);
  };

  const addEdu = () => set('education', [...form.education, {
    degree: '', field: '', institution: '', year: '', honors: ''
  }]);

  const updateEdu = (i, field, val) => {
    const updated = [...form.education];
    updated[i] = { ...updated[i], [field]: val };
    set('education', updated);
  };

  const addCert = () => set('certifications', [...form.certifications, { name: '', issuer: '', year: '' }]);
  const updateCert = (i, field, val) => {
    const updated = [...form.certifications];
    updated[i] = { ...updated[i], [field]: val };
    set('certifications', updated);
  };

  if (!user) return null;

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-heading text-3xl font-bold">My Profile</h1>
            <p className="text-muted-foreground mt-1">Fill in your details to power the CV Builder</p>
          </div>
          <div className="flex gap-3">
            <Link to="/cv-builder">
              <Button variant="outline" className="gap-2"><FileText className="w-4 h-4" /> CV Builder</Button>
            </Link>
            <Button className="bg-primary hover:bg-primary/90 gap-2" onClick={() => saveMutation.mutate(form)} disabled={saveMutation.isPending}>
              <Save className="w-4 h-4" /> {saveMutation.isPending ? 'Saving...' : 'Save Profile'}
            </Button>
          </div>
        </div>

        <Tabs defaultValue="personal" className="space-y-6">
          <TabsList className="flex flex-wrap h-auto gap-1 bg-muted p-1 rounded-xl">
            <TabsTrigger value="personal" className="gap-1.5"><User className="w-3.5 h-3.5" /> Personal</TabsTrigger>
            <TabsTrigger value="experience" className="gap-1.5"><Briefcase className="w-3.5 h-3.5" /> Experience</TabsTrigger>
            <TabsTrigger value="education" className="gap-1.5"><GraduationCap className="w-3.5 h-3.5" /> Education</TabsTrigger>
            <TabsTrigger value="skills" className="gap-1.5"><Award className="w-3.5 h-3.5" /> Skills & More</TabsTrigger>
          </TabsList>

          {/* Personal Info */}
          <TabsContent value="personal">
            <Card className="p-6 space-y-5">
              <h3 className="font-heading text-lg font-semibold">Personal Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div><Label>Full Name</Label><Input className="mt-1.5" value={form.full_name} onChange={e => set('full_name', e.target.value)} placeholder="John Doe" /></div>
                <div><Label>Phone</Label><Input className="mt-1.5" value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="+234 8012345678" /></div>
                <div><Label>City / Location</Label><Input className="mt-1.5" value={form.city} onChange={e => set('city', e.target.value)} placeholder="Lagos, Nigeria" /></div>
                <div><Label>LinkedIn URL</Label><Input className="mt-1.5" value={form.linkedin_url} onChange={e => set('linkedin_url', e.target.value)} placeholder="linkedin.com/in/yourname" /></div>
              </div>
              <div>
                <Label>Professional Summary</Label>
                <Textarea className="mt-1.5 h-28" value={form.professional_summary} onChange={e => set('professional_summary', e.target.value)} placeholder="2-3 sentences about your professional background, key skills, and career goals..." />
              </div>
            </Card>
          </TabsContent>

          {/* Work Experience */}
          <TabsContent value="experience">
            <div className="space-y-4">
              {form.work_experience.map((job, i) => (
                <Card key={i} className="p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="font-heading font-semibold">Position {i + 1}</h4>
                    <Button variant="ghost" size="sm" className="text-destructive" onClick={() => set('work_experience', form.work_experience.filter((_, idx) => idx !== i))}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><Label>Job Title</Label><Input className="mt-1.5" value={job.job_title} onChange={e => updateWork(i, 'job_title', e.target.value)} placeholder="Software Engineer" /></div>
                    <div><Label>Company</Label><Input className="mt-1.5" value={job.company} onChange={e => updateWork(i, 'company', e.target.value)} placeholder="Company Name" /></div>
                    <div><Label>Location</Label><Input className="mt-1.5" value={job.location} onChange={e => updateWork(i, 'location', e.target.value)} placeholder="Lagos, Nigeria" /></div>
                    <div className="flex gap-2">
                      <div className="flex-1"><Label>Start</Label><Input className="mt-1.5" value={job.start_date} onChange={e => updateWork(i, 'start_date', e.target.value)} placeholder="Jan 2022" /></div>
                      <div className="flex-1"><Label>End</Label><Input className="mt-1.5" value={job.end_date} onChange={e => updateWork(i, 'end_date', e.target.value)} placeholder="Present" disabled={job.is_current} /></div>
                    </div>
                  </div>
                  <div>
                    <Label>Key Achievements (one per line)</Label>
                    {(job.achievements || []).map((ach, ai) => (
                      <div key={ai} className="flex gap-2 mt-2">
                        <Input value={ach} onChange={e => updateWorkAchievement(i, ai, e.target.value)} placeholder="• Increased revenue by 30% by..." />
                        <Button variant="ghost" size="icon" onClick={() => {
                          const achs = job.achievements.filter((_, idx) => idx !== ai);
                          updateWork(i, 'achievements', achs);
                        }}><Trash2 className="w-4 h-4 text-destructive" /></Button>
                      </div>
                    ))}
                    <Button variant="outline" size="sm" className="mt-2 gap-1" onClick={() => updateWork(i, 'achievements', [...(job.achievements || []), ''])}>
                      <Plus className="w-3.5 h-3.5" /> Add Achievement
                    </Button>
                  </div>
                </Card>
              ))}
              <Button variant="outline" className="w-full gap-2" onClick={addWorkExp}>
                <Plus className="w-4 h-4" /> Add Work Experience
              </Button>
            </div>
          </TabsContent>

          {/* Education */}
          <TabsContent value="education">
            <div className="space-y-4">
              {form.education.map((edu, i) => (
                <Card key={i} className="p-6 space-y-4">
                  <div className="flex justify-between">
                    <h4 className="font-heading font-semibold">Education {i + 1}</h4>
                    <Button variant="ghost" size="sm" className="text-destructive" onClick={() => set('education', form.education.filter((_, idx) => idx !== i))}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><Label>Degree</Label><Input className="mt-1.5" value={edu.degree} onChange={e => updateEdu(i, 'degree', e.target.value)} placeholder="Bachelor of Science" /></div>
                    <div><Label>Field of Study</Label><Input className="mt-1.5" value={edu.field} onChange={e => updateEdu(i, 'field', e.target.value)} placeholder="Computer Science" /></div>
                    <div><Label>Institution</Label><Input className="mt-1.5" value={edu.institution} onChange={e => updateEdu(i, 'institution', e.target.value)} placeholder="University of Lagos" /></div>
                    <div><Label>Year Graduated</Label><Input className="mt-1.5" value={edu.year} onChange={e => updateEdu(i, 'year', e.target.value)} placeholder="2020" /></div>
                    <div className="sm:col-span-2"><Label>Honors / GPA</Label><Input className="mt-1.5" value={edu.honors} onChange={e => updateEdu(i, 'honors', e.target.value)} placeholder="First Class Honours / 4.5 GPA" /></div>
                  </div>
                </Card>
              ))}
              <Button variant="outline" className="w-full gap-2" onClick={addEdu}>
                <Plus className="w-4 h-4" /> Add Education
              </Button>
            </div>
          </TabsContent>

          {/* Skills */}
          <TabsContent value="skills">
            <div className="space-y-6">
              <Card className="p-6 space-y-4">
                <h3 className="font-heading text-lg font-semibold">Skills</h3>
                <div className="flex gap-2">
                  <Input value={skillInput} onChange={e => setSkillInput(e.target.value)} placeholder="Add a skill..." onKeyDown={e => e.key === 'Enter' && addSkill()} />
                  <Button onClick={addSkill}><Plus className="w-4 h-4" /></Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {form.skills.map((s, i) => (
                    <span key={i} className="flex items-center gap-1 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm">
                      {s}
                      <button onClick={() => set('skills', form.skills.filter((_, idx) => idx !== i))} className="hover:text-destructive">×</button>
                    </span>
                  ))}
                </div>
              </Card>

              <Card className="p-6 space-y-4">
                <h3 className="font-heading text-lg font-semibold">Languages</h3>
                <div className="flex gap-2">
                  <Input value={langInput} onChange={e => setLangInput(e.target.value)} placeholder="e.g. English (Fluent)" onKeyDown={e => e.key === 'Enter' && addLang()} />
                  <Button onClick={addLang}><Plus className="w-4 h-4" /></Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {form.languages.map((l, i) => (
                    <span key={i} className="flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {l}
                      <button onClick={() => set('languages', form.languages.filter((_, idx) => idx !== i))} className="hover:text-destructive">×</button>
                    </span>
                  ))}
                </div>
              </Card>

              <Card className="p-6 space-y-4">
                <h3 className="font-heading text-lg font-semibold">Certifications</h3>
                {form.certifications.map((cert, i) => (
                  <div key={i} className="grid grid-cols-3 gap-2 items-center">
                    <Input value={cert.name} onChange={e => updateCert(i, 'name', e.target.value)} placeholder="Cert name" />
                    <Input value={cert.issuer} onChange={e => updateCert(i, 'issuer', e.target.value)} placeholder="Issuer" />
                    <div className="flex gap-1">
                      <Input value={cert.year} onChange={e => updateCert(i, 'year', e.target.value)} placeholder="Year" />
                      <Button variant="ghost" size="icon" onClick={() => set('certifications', form.certifications.filter((_, idx) => idx !== i))}>
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="gap-1" onClick={addCert}>
                  <Plus className="w-3.5 h-3.5" /> Add Certification
                </Button>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}