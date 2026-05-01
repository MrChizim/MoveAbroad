import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/lib/AuthContext';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Trash2, Save, User, Briefcase, GraduationCap, Award, FileText, Loader2, Upload, ChevronDown, ChevronUp } from 'lucide-react';
import { toast } from 'sonner';

function parseCVText(text) {
  // Normalise: collapse runs of spaces, preserve newlines
  const normalised = text.replace(/[ \t]{2,}/g, ' ').replace(/\r\n/g, '\n');
  const lines = normalised.split('\n').map(l => l.trim()).filter(Boolean);
  const result = {};

  // ── Name ──────────────────────────────────────────────────────────────────
  // First line that looks like a full name (2+ words, letters/hyphens only, reasonable length)
  const nameLine = lines.find(l =>
    /^[A-Za-z][a-zA-Z\s''-]{3,50}$/.test(l) &&
    l.split(/\s+/).length >= 2 &&
    l.split(/\s+/).length <= 5 &&
    !/^(summary|profile|about|objective|experience|education|skills?|contact|work|employment)/i.test(l)
  );
  if (nameLine) result.full_name = nameLine;

  // ── Contact ───────────────────────────────────────────────────────────────
  // Phone: Nigerian (+234 / 080/090/070/081) and international formats
  const phoneMatch = normalised.match(/(\+?234[\s\-]?\d{3}[\s\-]?\d{3}[\s\-]?\d{4}|(?:\+?[\d\s\-().]{10,18}))/);
  if (phoneMatch) result.phone = phoneMatch[1].trim();

  // Email (often already on profile but extract if present)
  const emailMatch = normalised.match(/[\w.+-]+@[\w-]+\.\w{2,}/);
  if (emailMatch) result.user_email = emailMatch[0];

  // City
  const cityMatch = normalised.match(/(?:location|city|address|based in)[:\s]+([^\n,|•]{2,40})/i)
    || normalised.match(/\b(Lagos|Abuja|Port Harcourt|Ibadan|Kano|Benin City|Enugu|Kaduna|Owerri|Warri)\b/i);
  if (cityMatch) result.city = (cityMatch[1] || cityMatch[0]).trim();

  // LinkedIn
  const linkedinMatch = normalised.match(/linkedin\.com\/in\/[\w-]+/i);
  if (linkedinMatch) result.linkedin_url = 'https://' + linkedinMatch[0].replace(/^https?:\/\//i, '');

  // ── Section splitter ──────────────────────────────────────────────────────
  // Identify section boundaries: lines that are all-caps or match known headings
  const SECTION_RE = /^(?:summary|profile|about|objective|professional summary|experience|work experience|employment|education|academic|skills?|technical skills|certif|languages?|projects?|awards?|achievements?|publications?|references?)[:\s]*$/i;

  function extractSection(sectionNames, stopNames) {
    const stopRe = new RegExp(`^(?:${stopNames.join('|')})[:\\s]*$`, 'i');
    let inSection = false;
    const captured = [];
    for (const line of lines) {
      const isHeading = SECTION_RE.test(line) || /^[A-Z\s]{4,30}$/.test(line);
      if (isHeading && sectionNames.some(n => new RegExp(n, 'i').test(line))) {
        inSection = true;
        continue;
      }
      if (inSection) {
        if (isHeading && stopRe.test(line)) break;
        if (isHeading && stopNames.some(n => new RegExp(n, 'i').test(line))) break;
        captured.push(line);
      }
    }
    return captured.join('\n');
  }

  const STOP_ALL = ['summary|profile|about|objective', 'experience|employment|work', 'education|academic', 'skills?|technical', 'certif', 'language', 'project', 'award', 'reference'];

  // ── Summary ───────────────────────────────────────────────────────────────
  const summaryText = extractSection(['summary', 'profile', 'about', 'objective', 'professional summary'], ['experience', 'employment', 'work', 'education', 'skills', 'certif', 'language', 'project', 'award']);
  if (summaryText.length > 30) result.professional_summary = summaryText.replace(/\n+/g, ' ').trim();

  // ── Skills ────────────────────────────────────────────────────────────────
  const skillsText = extractSection(['skills?', 'technical skills', 'core competencies', 'competencies'], ['experience', 'employment', 'work', 'education', 'certif', 'language', 'project', 'summary', 'profile']);
  if (skillsText) {
    const skills = skillsText.split(/[,•|\n\/·▪]/).map(s => s.trim()).filter(s => s.length > 1 && s.length < 50 && !/^\d+$/.test(s));
    if (skills.length) result.skills = skills;
  }

  // ── Work Experience ───────────────────────────────────────────────────────
  const workText = extractSection(['experience', 'employment', 'work experience', 'work history', 'professional experience'], ['education', 'academic', 'skills', 'certif', 'language', 'project', 'award', 'reference', 'summary', 'profile']);
  if (workText) {
    const jobs = [];
    // Split blocks by lines that look like job titles (followed by company or date on next lines)
    const workLines = workText.split('\n').map(l => l.trim()).filter(Boolean);
    let i = 0;
    while (i < workLines.length && jobs.length < 6) {
      const line = workLines[i];
      const dateMatch = workText.slice(workText.indexOf(line)).match(/(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|\d{4})[a-z]*\.?\s*(\d{4})?\s*[-–to]+\s*(?:present|current|now|(\d{4}))/i);
      // A job title block starts with a non-bullet, non-date line of reasonable length
      if (line.length > 3 && line.length < 80 && !/^[•\-–·▪]/.test(line) && !/^\d{4}/.test(line)) {
        const job = {
          job_title: line,
          company: workLines[i + 1] && !/^[•\-–·▪]/.test(workLines[i + 1]) && workLines[i + 1].length < 80 ? workLines[i + 1] : '',
          location: '',
          start_date: '',
          end_date: '',
          is_current: false,
          achievements: [],
        };
        // Find date in next few lines
        let j = i + 1;
        while (j < Math.min(i + 4, workLines.length)) {
          const dm = workLines[j].match(/(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\.?\s*(\d{4})\s*[-–to]+\s*(?:present|current|now|(\d{4}))/i)
            || workLines[j].match(/(\d{4})\s*[-–to]+\s*(?:present|current|now|(\d{4}))/i);
          if (dm) {
            job.start_date = dm[1] || '';
            job.end_date = dm[2] || 'Present';
            job.is_current = /present|current|now/i.test(workLines[j]);
            if (j === i + 1) job.company = workLines[i + 2] && !/^[•\-–·▪]/.test(workLines[i + 2]) ? workLines[i + 2] : job.company;
            break;
          }
          j++;
        }
        // Collect bullet-point achievements
        let k = j + 1;
        while (k < workLines.length && jobs.length < 5) {
          const al = workLines[k];
          if (/^[•\-–·▪]/.test(al) || (al.length > 15 && al.length < 200 && !job.job_title.includes(al))) {
            const cleaned = al.replace(/^[•\-–·▪\s]+/, '').trim();
            if (cleaned.length > 10) job.achievements.push(cleaned);
          } else if (al.length > 3 && al.length < 80 && !/^[•\-–·▪]/.test(al) && k > i + 3) {
            break; // Looks like next job title
          }
          k++;
          if (job.achievements.length >= 4) break;
        }
        if (job.job_title && (job.company || job.achievements.length)) jobs.push(job);
        i = k;
      } else {
        i++;
      }
    }
    if (jobs.length) result.work_experience = jobs;
  }

  // ── Education ─────────────────────────────────────────────────────────────
  const eduText = extractSection(['education', 'academic', 'academic background', 'qualifications'], ['experience', 'employment', 'skills', 'certif', 'language', 'project', 'award', 'reference', 'work']);
  if (eduText) {
    const edus = [];
    const eduLines = eduText.split('\n').map(l => l.trim()).filter(Boolean);
    let i = 0;
    while (i < eduLines.length && edus.length < 4) {
      const line = eduLines[i];
      if (line.length < 3) { i++; continue; }
      const isDegree = /bachelor|master|phd|ph\.d|doctorate|diploma|hnd|ond|bsc|b\.sc|msc|m\.sc|b\.a\b|m\.a\b|b\.eng|mba|llb|llm|pgd/i.test(line);
      const yearMatch = line.match(/(\d{4})/) || (eduLines[i + 1] || '').match(/(\d{4})/);
      const edu = {
        degree: line,
        field: isDegree && eduLines[i + 1] && !eduLines[i + 1].match(/\d{4}/) ? eduLines[i + 1] : '',
        institution: '',
        year: yearMatch ? yearMatch[1] : '',
        honors: '',
      };
      // Next non-year line is likely institution
      let j = i + 1;
      while (j < Math.min(i + 4, eduLines.length)) {
        const nl = eduLines[j];
        if (!/bachelor|master|phd|diploma|bsc|msc/i.test(nl) && !/^\d{4}/.test(nl) && nl.length > 3) {
          edu.institution = nl;
          break;
        }
        j++;
      }
      // Honors/grade
      const honorsMatch = eduText.match(/(?:first class|second class|upper|lower|distinction|merit|cgpa|gpa)[^\n]*/i);
      if (honorsMatch) edu.honors = honorsMatch[0].trim();
      edus.push(edu);
      i = j + 1;
    }
    if (edus.length) result.education = edus;
  }

  // ── Languages ─────────────────────────────────────────────────────────────
  const langText = extractSection(['languages?', 'language skills'], ['experience', 'employment', 'education', 'skills', 'certif', 'project', 'award', 'reference', 'summary']);
  if (langText) {
    const langs = langText.split(/[,•|\n·▪]/).map(s => s.trim()).filter(s => s.length > 1 && s.length < 40 && !/^\d+$/.test(s));
    if (langs.length) result.languages = langs;
  }

  return result;
}

const EMPTY_FORM = {
  full_name: '', phone: '', city: '', linkedin_url: '',
  professional_summary: '', skills: [],
  work_experience: [], education: [], certifications: [], languages: []
};

export default function Profile() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState(EMPTY_FORM);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [skillInput, setSkillInput] = useState('');
  const [langInput, setLangInput] = useState('');
  const [showImport, setShowImport] = useState(false);
  const [cvText, setCvText] = useState('');
  const [parsing, setParsing] = useState(false);

  useEffect(() => {
    if (!user) { navigate('/'); return; }
    const ref = doc(db, 'profiles', user.uid);
    getDoc(ref).then(snap => {
      if (snap.exists()) setForm({ ...EMPTY_FORM, ...snap.data() });
    }).finally(() => setLoading(false));
  }, [user, navigate]);

  const save = async () => {
    if (!user) return;
    setSaving(true);
    try {
      await setDoc(doc(db, 'profiles', user.uid), { ...form, uid: user.uid, email: user.email, updatedAt: new Date().toISOString() });
      toast.success('Profile saved!');
    } catch {
      toast.error('Failed to save profile. Please try again.');
    } finally {
      setSaving(false);
    }
  };

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

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf')) {
      setParsing(true);
      try {
        // Load PDF.js from CDN if not already loaded
        if (!window.pdfjsLib) {
          await new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
          });
          window.pdfjsLib.GlobalWorkerOptions.workerSrc =
            'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
        }
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await window.pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        const pages = [];
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const content = await page.getTextContent();
          // Reconstruct lines by grouping items with similar Y positions
          const itemsByY = {};
          content.items.forEach(item => {
            if (!item.str.trim()) return;
            const y = Math.round(item.transform[5]);
            if (!itemsByY[y]) itemsByY[y] = [];
            itemsByY[y].push(item.str);
          });
          const sortedYs = Object.keys(itemsByY).map(Number).sort((a, b) => b - a);
          const lines = sortedYs.map(y => itemsByY[y].join(' ').trim()).filter(Boolean);
          pages.push(lines.join('\n'));
        }
        setCvText(pages.join('\n'));
        toast.success('PDF loaded — click "Fill fields from CV" to import');
      } catch {
        toast.error('Could not read PDF — try copy-pasting the text instead');
      } finally {
        setParsing(false);
      }
      return;
    }

    // Plain text / docx fallback
    const reader = new FileReader();
    reader.onload = (ev) => setCvText(ev.target.result || '');
    reader.readAsText(file);
  };

  const handleImportCV = () => {
    if (!cvText.trim()) { toast.error('Paste your CV text or upload a file first'); return; }
    setParsing(true);
    try {
      const parsed = parseCVText(cvText);
      const filled = Object.keys(parsed).filter(k => parsed[k] && (Array.isArray(parsed[k]) ? parsed[k].length > 0 : true)).length;
      if (filled === 0) { toast.error('Could not extract data — try pasting plain text CV'); return; }
      setForm(f => ({
        ...f,
        full_name: parsed.full_name || f.full_name,
        phone: parsed.phone || f.phone,
        city: parsed.city || f.city,
        linkedin_url: parsed.linkedin_url || f.linkedin_url,
        professional_summary: parsed.professional_summary || f.professional_summary,
        skills: parsed.skills?.length ? parsed.skills : f.skills,
        languages: parsed.languages?.length ? parsed.languages : f.languages,
        work_experience: parsed.work_experience?.length ? parsed.work_experience : f.work_experience,
        education: parsed.education?.length ? parsed.education : f.education,
      }));
      toast.success(`Imported ${filled} fields — review and correct before saving`);
      setShowImport(false);
      setCvText('');
    } finally {
      setParsing(false);
    }
  };

  const addCert = () => set('certifications', [...form.certifications, { name: '', issuer: '', year: '' }]);
  const updateCert = (i, field, val) => {
    const updated = [...form.certifications];
    updated[i] = { ...updated[i], [field]: val };
    set('certifications', updated);
  };

  if (!user || loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-black/10 border-t-[#0096FF] rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F8F9FB] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-[1.8rem] font-black text-[#04091A]" style={{ fontWeight: 900 }}>My Profile</h1>
            <p className="text-[14px] text-black/40 mt-1">Fill in your details to power the CV Builder</p>
          </div>
          <div className="flex gap-3">
            <Link to="/cv-builder">
              <Button variant="outline" className="gap-2 text-[13px]"><FileText className="w-4 h-4" /> CV Builder</Button>
            </Link>
            <Button
              className="gap-2 text-[13px] text-white hover:opacity-90"
              style={{ background: '#0096FF' }}
              onClick={save}
              disabled={saving}
            >
              {saving ? <><Loader2 className="w-4 h-4 animate-spin" /> Saving...</> : <><Save className="w-4 h-4" /> Save Profile</>}
            </Button>
          </div>
        </div>

        {/* CV Import */}
        <div className="mb-6 border border-black/[0.08] rounded-2xl overflow-hidden">
          <button
            onClick={() => setShowImport(v => !v)}
            className="w-full flex items-center justify-between p-4 bg-white hover:bg-[#F8F9FB] transition-colors text-left"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-[#EBF5FF]">
                <Upload className="w-4 h-4 text-[#0096FF]" />
              </div>
              <div>
                <p className="text-[14px] font-bold text-[#04091A]">Import from existing CV</p>
                <p className="text-[12px] text-black/40">Upload PDF or paste text to auto-fill your profile fields</p>
              </div>
            </div>
            {showImport ? <ChevronUp className="w-4 h-4 text-black/30" /> : <ChevronDown className="w-4 h-4 text-black/30" />}
          </button>
          {showImport && (
            <div className="p-4 border-t border-black/[0.06] bg-[#F8F9FB] space-y-3">
              <p className="text-[12px] text-black/50 leading-relaxed">
                Upload your CV as a <strong>PDF or .txt file</strong>, or paste plain text below. The parser will extract your name, contact info, experience, education, and skills. <strong>Always review the results</strong> before saving.
              </p>
              <div className="flex gap-2 items-center">
                <label className="flex items-center gap-2 px-3 py-2 rounded-lg border border-black/[0.1] bg-white text-[12px] font-medium text-black/60 cursor-pointer hover:bg-[#F0F4FF] transition-colors">
                  <Upload className="w-3.5 h-3.5" /> Upload PDF or .txt
                  <input type="file" accept=".pdf,.txt,.text,application/pdf,text/plain" className="hidden" onChange={handleFileUpload} />
                </label>
                <span className="text-[12px] text-black/30">or paste below</span>
              </div>
              <Textarea
                className="h-40 text-[12px] font-mono"
                placeholder="Paste your CV text here..."
                value={cvText}
                onChange={e => setCvText(e.target.value)}
              />
              <div className="flex gap-2">
                <Button
                  onClick={handleImportCV}
                  disabled={parsing || !cvText.trim()}
                  className="gap-2 text-[13px] text-white hover:opacity-90"
                  style={{ background: '#0096FF' }}
                >
                  {parsing ? <><Loader2 className="w-3.5 h-3.5 animate-spin" /> Parsing...</> : <><Upload className="w-3.5 h-3.5" /> Fill fields from CV</>}
                </Button>
                <Button variant="ghost" size="sm" className="text-[13px]" onClick={() => { setShowImport(false); setCvText(''); }}>Cancel</Button>
              </div>
            </div>
          )}
        </div>

        <Tabs defaultValue="personal" className="space-y-6">
          <TabsList className="flex flex-wrap h-auto gap-1 bg-black/[0.05] p-1 rounded-xl">
            <TabsTrigger value="personal" className="gap-1.5 text-[13px]"><User className="w-3.5 h-3.5" /> Personal</TabsTrigger>
            <TabsTrigger value="experience" className="gap-1.5 text-[13px]"><Briefcase className="w-3.5 h-3.5" /> Experience</TabsTrigger>
            <TabsTrigger value="education" className="gap-1.5 text-[13px]"><GraduationCap className="w-3.5 h-3.5" /> Education</TabsTrigger>
            <TabsTrigger value="skills" className="gap-1.5 text-[13px]"><Award className="w-3.5 h-3.5" /> Skills & More</TabsTrigger>
          </TabsList>

          <TabsContent value="personal">
            <Card className="p-6 space-y-5">
              <h3 className="text-[15px] font-bold text-[#04091A]">Personal Information</h3>
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

          <TabsContent value="experience">
            <div className="space-y-4">
              {form.work_experience.map((job, i) => (
                <Card key={i} className="p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="text-[14px] font-bold text-[#04091A]">Position {i + 1}</h4>
                    <Button variant="ghost" size="sm" className="text-red-400" onClick={() => set('work_experience', form.work_experience.filter((_, idx) => idx !== i))}>
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
                        <Button variant="ghost" size="icon" onClick={() => updateWork(i, 'achievements', job.achievements.filter((_, idx) => idx !== ai))}>
                          <Trash2 className="w-4 h-4 text-red-400" />
                        </Button>
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

          <TabsContent value="education">
            <div className="space-y-4">
              {form.education.map((edu, i) => (
                <Card key={i} className="p-6 space-y-4">
                  <div className="flex justify-between">
                    <h4 className="text-[14px] font-bold text-[#04091A]">Education {i + 1}</h4>
                    <Button variant="ghost" size="sm" className="text-red-400" onClick={() => set('education', form.education.filter((_, idx) => idx !== i))}>
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

          <TabsContent value="skills">
            <div className="space-y-6">
              <Card className="p-6 space-y-4">
                <h3 className="text-[15px] font-bold text-[#04091A]">Skills</h3>
                <div className="flex gap-2">
                  <Input value={skillInput} onChange={e => setSkillInput(e.target.value)} placeholder="Add a skill..." onKeyDown={e => e.key === 'Enter' && addSkill()} />
                  <Button onClick={addSkill} style={{ background: '#0096FF' }}><Plus className="w-4 h-4 text-white" /></Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {form.skills.map((s, i) => (
                    <span key={i} className="flex items-center gap-1 bg-[#EBF5FF] text-[#0096FF] px-3 py-1 rounded-full text-[13px] font-medium">
                      {s}
                      <button onClick={() => set('skills', form.skills.filter((_, idx) => idx !== i))} className="hover:text-red-400 ml-0.5">×</button>
                    </span>
                  ))}
                </div>
              </Card>

              <Card className="p-6 space-y-4">
                <h3 className="text-[15px] font-bold text-[#04091A]">Languages</h3>
                <div className="flex gap-2">
                  <Input value={langInput} onChange={e => setLangInput(e.target.value)} placeholder="e.g. English (Fluent)" onKeyDown={e => e.key === 'Enter' && addLang()} />
                  <Button onClick={addLang} style={{ background: '#0096FF' }}><Plus className="w-4 h-4 text-white" /></Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {form.languages.map((l, i) => (
                    <span key={i} className="flex items-center gap-1 bg-[#EBF5FF] text-[#0096FF] px-3 py-1 rounded-full text-[13px] font-medium">
                      {l}
                      <button onClick={() => set('languages', form.languages.filter((_, idx) => idx !== i))} className="hover:text-red-400 ml-0.5">×</button>
                    </span>
                  ))}
                </div>
              </Card>

              <Card className="p-6 space-y-4">
                <h3 className="text-[15px] font-bold text-[#04091A]">Certifications</h3>
                {form.certifications.map((cert, i) => (
                  <div key={i} className="grid grid-cols-3 gap-2 items-center">
                    <Input value={cert.name} onChange={e => updateCert(i, 'name', e.target.value)} placeholder="Cert name" />
                    <Input value={cert.issuer} onChange={e => updateCert(i, 'issuer', e.target.value)} placeholder="Issuer" />
                    <div className="flex gap-1">
                      <Input value={cert.year} onChange={e => updateCert(i, 'year', e.target.value)} placeholder="Year" />
                      <Button variant="ghost" size="icon" onClick={() => set('certifications', form.certifications.filter((_, idx) => idx !== i))}>
                        <Trash2 className="w-4 h-4 text-red-400" />
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
