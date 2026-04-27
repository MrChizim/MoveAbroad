import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getChecklistTemplate } from '@/lib/checklistTemplates';
import { COUNTRIES } from '@/lib/countries';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, CheckCircle2, Circle, Clock, Upload, FileText, Calendar, Loader2, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

const STATUS_CONFIG = {
  pending:     { label: 'Pending',     icon: Circle,       color: 'text-muted-foreground', bg: 'bg-muted' },
  in_progress: { label: 'In Progress', icon: Clock,        color: 'text-amber-600',        bg: 'bg-amber-100' },
  done:        { label: 'Done',        icon: CheckCircle2, color: 'text-green-600',         bg: 'bg-green-100' },
};

const VISA_TYPES = [
  { value: 'student', label: '🎓 Student Visa' },
  { value: 'work', label: '💼 Work Visa' },
  { value: 'visitor', label: '✈️ Visitor Visa' },
  { value: 'permanent_residency', label: '🏠 Permanent Residency' },
];

export default function VisaChecklist() {
  const { code } = useParams();
  const [user, setUser] = useState(null);
  const [visaType, setVisaType] = useState('student');
  const [uploadingId, setUploadingId] = useState(null);
  const queryClient = useQueryClient();

  const country = COUNTRIES.find(c => c.code === code);

  useEffect(() => {
    base44.auth.me().then(setUser).catch(() => base44.auth.redirectToLogin());
  }, []);

  const { data: checklists = [], isLoading } = useQuery({
    queryKey: ['checklist', user?.email, code, visaType],
    queryFn: () => base44.entities.VisaChecklist.filter({ user_email: user.email, country_code: code, visa_type: visaType }),
    enabled: !!user?.email,
  });

  const checklist = checklists[0];

  // Auto-create checklist if not exists
  const createMutation = useMutation({
    mutationFn: (data) => base44.entities.VisaChecklist.create(data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['checklist', user?.email, code, visaType] }),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => base44.entities.VisaChecklist.update(id, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['checklist', user?.email, code, visaType] }),
  });

  useEffect(() => {
    if (!isLoading && !checklist && user?.email && code) {
      const items = getChecklistTemplate(code, visaType);
      createMutation.mutate({ user_email: user.email, country_code: code, visa_type: visaType, items });
    }
  }, [isLoading, checklist, user, code, visaType]);

  const items = checklist?.items || [];
  const done = items.filter(i => i.status === 'done').length;
  const progress = items.length > 0 ? Math.round((done / items.length) * 100) : 0;

  const updateItem = (itemId, changes) => {
    if (!checklist) return;
    const updated = items.map(i => i.id === itemId ? { ...i, ...changes } : i);
    updateMutation.mutate({ id: checklist.id, data: { items: updated } });
  };

  const cycleStatus = (item) => {
    const order = ['pending', 'in_progress', 'done'];
    const next = order[(order.indexOf(item.status) + 1) % order.length];
    updateItem(item.id, { status: next });
  };

  const handleFileUpload = async (itemId, file) => {
    setUploadingId(itemId);
    const { file_url } = await base44.integrations.Core.UploadFile({ file });
    updateItem(itemId, { file_url });
    setUploadingId(null);
    toast.success('Document uploaded!');
  };

  const updateDeadline = (itemId, deadline) => updateItem(itemId, { deadline });
  const updateNotes = (itemId, notes) => updateItem(itemId, { notes });

  const grouped = items.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  if (!country) return <div className="p-8 text-center">Country not found</div>;

  return (
    <div className="min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link to={`/country/${code}`} className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to {country.name} Guide
          </Link>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-4xl">{country.flag}</span>
              <div>
                <h1 className="font-heading text-2xl font-bold">{country.name} Visa Checklist</h1>
                <p className="text-muted-foreground text-sm">Track your documents and application progress</p>
              </div>
            </div>
            <Select value={visaType} onValueChange={setVisaType}>
              <SelectTrigger className="w-52">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {VISA_TYPES.map(v => <SelectItem key={v.value} value={v.value}>{v.label}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-card rounded-2xl border border-border p-6 mb-6">
          <div className="flex justify-between items-center mb-3">
            <span className="font-heading font-semibold">Overall Progress</span>
            <span className="font-heading text-2xl font-bold text-primary">{progress}%</span>
          </div>
          <Progress value={progress} className="h-3 mb-3" />
          <div className="flex gap-4 text-sm">
            <span className="text-green-600 font-medium">{done} done</span>
            <span className="text-amber-600 font-medium">{items.filter(i => i.status === 'in_progress').length} in progress</span>
            <span className="text-muted-foreground">{items.filter(i => i.status === 'pending').length} pending</span>
          </div>
        </div>

        {/* Target Date */}
        <div className="bg-card rounded-2xl border border-border p-5 mb-6 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex items-center gap-2 flex-1">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="font-medium">Target Submission Date:</span>
          </div>
          <Input
            type="date"
            className="w-auto"
            value={checklist?.target_submission_date || ''}
            onChange={e => checklist && updateMutation.mutate({ id: checklist.id, data: { target_submission_date: e.target.value } })}
          />
        </div>

        {/* Checklist by Category */}
        {isLoading || createMutation.isPending ? (
          <div className="flex items-center justify-center py-20 gap-3">
            <Loader2 className="w-6 h-6 animate-spin text-primary" />
            <span className="text-muted-foreground">Preparing your checklist...</span>
          </div>
        ) : (
          <div className="space-y-6">
            {Object.entries(grouped).map(([category, catItems]) => (
              <div key={category} className="bg-card rounded-2xl border border-border overflow-hidden">
                <div className="bg-muted/50 px-5 py-3 border-b border-border flex items-center justify-between">
                  <h3 className="font-heading font-semibold text-sm">{category}</h3>
                  <span className="text-xs text-muted-foreground">
                    {catItems.filter(i => i.status === 'done').length}/{catItems.length} done
                  </span>
                </div>
                <div className="divide-y divide-border">
                  {catItems.map(item => {
                    const cfg = STATUS_CONFIG[item.status] || STATUS_CONFIG.pending;
                    const Icon = cfg.icon;
                    return (
                      <div key={item.id} className="p-4">
                        <div className="flex items-start gap-3">
                          <button onClick={() => cycleStatus(item)} className="mt-0.5 flex-shrink-0 hover:opacity-70 transition-opacity">
                            <Icon className={`w-5 h-5 ${cfg.color}`} />
                          </button>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                              <p className={`text-sm font-medium flex-1 ${item.status === 'done' ? 'line-through text-muted-foreground' : ''}`}>
                                {item.label}
                              </p>
                              <Badge className={`${cfg.bg} ${cfg.color} border-0 text-xs shrink-0 cursor-pointer`} onClick={() => cycleStatus(item)}>
                                {cfg.label}
                              </Badge>
                            </div>
                            {/* Actions row */}
                            <div className="flex flex-wrap gap-2 items-center">
                              {/* Deadline picker */}
                              <div className="flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                                <Input
                                  type="date"
                                  className="h-7 text-xs w-36 px-2"
                                  value={item.deadline || ''}
                                  onChange={e => updateDeadline(item.id, e.target.value)}
                                />
                              </div>
                              {/* Upload */}
                              <label className="flex items-center gap-1.5 cursor-pointer text-xs text-primary hover:underline">
                                {uploadingId === item.id ? (
                                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                                ) : (
                                  <Upload className="w-3.5 h-3.5" />
                                )}
                                {item.file_url ? 'Replace file' : 'Upload doc'}
                                <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" onChange={e => e.target.files[0] && handleFileUpload(item.id, e.target.files[0])} />
                              </label>
                              {item.file_url && (
                                <a href={item.file_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs text-green-600 hover:underline">
                                  <FileText className="w-3.5 h-3.5" /> View
                                </a>
                              )}
                            </div>
                            {/* Notes */}
                            <Input
                              className="mt-2 h-7 text-xs"
                              placeholder="Add notes..."
                              value={item.notes || ''}
                              onChange={e => updateNotes(item.id, e.target.value)}
                              onBlur={e => updateNotes(item.id, e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}