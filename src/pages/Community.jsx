import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { COUNTRIES } from '@/lib/countries';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ThumbsUp, MessageCircle, Plus, CheckCircle2, Lightbulb, Star, Search } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { formatDistanceToNow } from 'date-fns';

const TYPE_CONFIG = {
  question:      { icon: MessageCircle, label: 'Question',      color: 'bg-blue-100 text-blue-700' },
  tip:           { icon: Lightbulb,     label: 'Tip',           color: 'bg-amber-100 text-amber-700' },
  success_story: { icon: Star,          label: 'Success Story', color: 'bg-green-100 text-green-700' },
};

export default function Community() {
  const [user, setUser] = useState(null);
  const [filterCountry, setFilterCountry] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ country_code: '', question: '', type: 'question' });
  const [answeringId, setAnsweringId] = useState(null);
  const [answerText, setAnswerText] = useState('');
  const queryClient = useQueryClient();

  useEffect(() => {
    base44.auth.me().then(setUser).catch(() => {});
  }, []);

  const { data: posts = [], isLoading } = useQuery({
    queryKey: ['community-posts', filterCountry, filterType],
    queryFn: () => {
      const filter = {};
      if (filterCountry !== 'all') filter.country_code = filterCountry;
      if (filterType !== 'all') filter.type = filterType;
      return Object.keys(filter).length > 0
        ? base44.entities.CommunityPost.filter(filter, '-created_date', 50)
        : base44.entities.CommunityPost.list('-created_date', 50);
    },
  });

  const createMutation = useMutation({
    mutationFn: (data) => base44.entities.CommunityPost.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['community-posts'] });
      setShowForm(false);
      setForm({ country_code: '', question: '', type: 'question' });
      toast.success('Posted successfully!');
    }
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => base44.entities.CommunityPost.update(id, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['community-posts'] }),
  });

  const handleSubmit = () => {
    if (!user) { base44.auth.redirectToLogin(); return; }
    if (!form.question.trim() || !form.country_code) { toast.error('Fill all fields'); return; }
    createMutation.mutate({ ...form, user_email: user.email, user_name: user.full_name || user.email.split('@')[0] });
  };

  const handleUpvote = (post) => {
    if (!user) { base44.auth.redirectToLogin(); return; }
    const upvoted = (post.upvoted_by || []).includes(user.email);
    const upvoted_by = upvoted
      ? post.upvoted_by.filter(e => e !== user.email)
      : [...(post.upvoted_by || []), user.email];
    updateMutation.mutate({ id: post.id, data: { upvotes: upvoted_by.length, upvoted_by } });
  };

  const handleAnswer = (post) => {
    if (!answerText.trim()) return;
    updateMutation.mutate({ id: post.id, data: { answer: answerText, is_answered: true } });
    setAnsweringId(null);
    setAnswerText('');
    toast.success('Answer posted!');
  };

  const filtered = posts.filter(p =>
    !search || p.question?.toLowerCase().includes(search.toLowerCase()) || p.user_name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="font-heading text-3xl font-bold mb-1">Community</h1>
            <p className="text-muted-foreground">Ask questions, share tips, and learn from Nigerians who've done it</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90 gap-2" onClick={() => user ? setShowForm(true) : base44.auth.redirectToLogin()}>
            <Plus className="w-4 h-4" /> New Post
          </Button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6">
          <div className="relative flex-1 min-w-48">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search..." className="pl-10" value={search} onChange={e => setSearch(e.target.value)} />
          </div>
          <Select value={filterCountry} onValueChange={setFilterCountry}>
            <SelectTrigger className="w-44"><SelectValue placeholder="All Countries" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Countries</SelectItem>
              {COUNTRIES.map(c => <SelectItem key={c.code} value={c.code}>{c.flag} {c.name}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-40"><SelectValue placeholder="All Types" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="question">Questions</SelectItem>
              <SelectItem value="tip">Tips</SelectItem>
              <SelectItem value="success_story">Success Stories</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Posts */}
        {isLoading ? (
          <div className="space-y-4">{[1,2,3].map(i => <div key={i} className="bg-card rounded-2xl border border-border h-32 animate-pulse" />)}</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            <MessageCircle className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p>No posts yet. Be the first to share!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filtered.map((post, i) => {
              const country = COUNTRIES.find(c => c.code === post.country_code);
              const typeCfg = TYPE_CONFIG[post.type] || TYPE_CONFIG.question;
              const TypeIcon = typeCfg.icon;
              const isUpvoted = user && (post.upvoted_by || []).includes(user.email);
              const isAdmin = user?.role === 'admin';

              return (
                <motion.div key={post.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}>
                  <div className="bg-card rounded-2xl border border-border p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 font-heading font-bold text-primary text-sm">
                        {(post.user_name || 'U')[0].toUpperCase()}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="font-medium text-sm">{post.user_name}</span>
                          <Badge className={`${typeCfg.color} border-0 text-xs gap-1`}>
                            <TypeIcon className="w-3 h-3" /> {typeCfg.label}
                          </Badge>
                          {country && <Badge variant="outline" className="text-xs">{country.flag} {country.name}</Badge>}
                          {post.is_answered && <Badge className="bg-green-100 text-green-700 border-0 text-xs gap-1"><CheckCircle2 className="w-3 h-3" /> Answered</Badge>}
                          <span className="text-xs text-muted-foreground ml-auto">
                            {post.created_date ? formatDistanceToNow(new Date(post.created_date), { addSuffix: true }) : ''}
                          </span>
                        </div>
                        <p className="text-sm mb-3 leading-relaxed">{post.question}</p>

                        {post.answer && (
                          <div className="bg-accent/50 rounded-xl p-4 mb-3">
                            <p className="text-xs font-semibold text-primary mb-1">✅ Community Answer:</p>
                            <p className="text-sm text-foreground leading-relaxed">{post.answer}</p>
                          </div>
                        )}

                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => handleUpvote(post)}
                            className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg transition-colors ${isUpvoted ? 'bg-primary/10 text-primary' : 'bg-muted hover:bg-primary/10 hover:text-primary text-muted-foreground'}`}
                          >
                            <ThumbsUp className="w-3.5 h-3.5" /> {post.upvotes || 0} helpful
                          </button>
                          {(isAdmin || post.user_email === user?.email) && !post.is_answered && (
                            <button
                              onClick={() => { setAnsweringId(post.id); setAnswerText(''); }}
                              className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary text-muted-foreground transition-colors"
                            >
                              <MessageCircle className="w-3.5 h-3.5" /> Answer
                            </button>
                          )}
                        </div>

                        {answeringId === post.id && (
                          <div className="mt-3 space-y-2">
                            <Textarea className="text-sm h-20" placeholder="Write your answer..." value={answerText} onChange={e => setAnswerText(e.target.value)} />
                            <div className="flex gap-2">
                              <Button size="sm" className="bg-primary hover:bg-primary/90" onClick={() => handleAnswer(post)}>Post Answer</Button>
                              <Button size="sm" variant="outline" onClick={() => setAnsweringId(null)}>Cancel</Button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      {/* New Post Dialog */}
      <Dialog open={showForm} onOpenChange={setShowForm}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-heading text-xl">New Post</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Country</label>
              <Select value={form.country_code} onValueChange={v => setForm(f => ({ ...f, country_code: v }))}>
                <SelectTrigger><SelectValue placeholder="Select country" /></SelectTrigger>
                <SelectContent>
                  {COUNTRIES.map(c => <SelectItem key={c.code} value={c.code}>{c.flag} {c.name}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Type</label>
              <Select value={form.type} onValueChange={v => setForm(f => ({ ...f, type: v }))}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="question">❓ Question</SelectItem>
                  <SelectItem value="tip">💡 Tip / Advice</SelectItem>
                  <SelectItem value="success_story">⭐ Success Story</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">
                {form.type === 'question' ? 'Your Question' : form.type === 'tip' ? 'Your Tip' : 'Your Story'}
              </label>
              <Textarea
                className="h-28"
                placeholder={form.type === 'question' ? 'What would you like to know?' : form.type === 'tip' ? 'Share something helpful...' : 'How did you make it?'}
                value={form.question}
                onChange={e => setForm(f => ({ ...f, question: e.target.value }))}
              />
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90" onClick={handleSubmit} disabled={createMutation.isPending}>
              {createMutation.isPending ? 'Posting...' : 'Post'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}