import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CheckCircle2, XCircle, Clock, Search, Shield, Users, CreditCard, Eye } from 'lucide-react';
import { toast } from "sonner";
import { COUNTRIES } from '@/lib/countries';

export default function Admin() {
  const [user, setUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const queryClient = useQueryClient();

  useEffect(() => {
    base44.auth.me().then(u => {
      if (u.role !== 'admin') {
        window.location.href = '/';
      }
      setUser(u);
    }).catch(() => base44.auth.redirectToLogin());
  }, []);

  const { data: purchases = [], isLoading } = useQuery({
    queryKey: ['admin-purchases'],
    queryFn: () => base44.entities.Purchase.list('-created_date', 200),
    enabled: !!user,
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => base44.entities.Purchase.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-purchases'] });
      toast.success('Purchase updated');
    }
  });

  if (!user || user.role !== 'admin') return null;

  const filtered = purchases.filter(p => {
    const matchSearch = !searchTerm || 
      p.user_email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.payment_reference?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchStatus = statusFilter === 'all' || p.payment_status === statusFilter;
    return matchSearch && matchStatus;
  });

  const stats = {
    total: purchases.length,
    pending: purchases.filter(p => p.payment_status === 'pending').length,
    confirmed: purchases.filter(p => p.payment_status === 'confirmed').length,
    revenue: purchases.filter(p => p.payment_status === 'confirmed').reduce((sum, p) => sum + (p.amount_paid || 0), 0)
  };

  const statusConfig = {
    pending: { icon: Clock, color: 'text-yellow-600', bg: 'bg-yellow-100' },
    confirmed: { icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-100' },
    rejected: { icon: XCircle, color: 'text-red-600', bg: 'bg-red-100' },
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <Shield className="w-6 h-6 text-primary" />
          <h1 className="font-heading text-3xl font-bold">Admin Dashboard</h1>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="p-5">
            <p className="text-sm text-muted-foreground">Total Orders</p>
            <p className="font-heading text-2xl font-bold mt-1">{stats.total}</p>
          </Card>
          <Card className="p-5">
            <p className="text-sm text-muted-foreground">Pending</p>
            <p className="font-heading text-2xl font-bold mt-1 text-yellow-600">{stats.pending}</p>
          </Card>
          <Card className="p-5">
            <p className="text-sm text-muted-foreground">Confirmed</p>
            <p className="font-heading text-2xl font-bold mt-1 text-green-600">{stats.confirmed}</p>
          </Card>
          <Card className="p-5">
            <p className="text-sm text-muted-foreground">Revenue</p>
            <p className="font-heading text-2xl font-bold mt-1">₦{stats.revenue.toLocaleString()}</p>
          </Card>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search by email or reference..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="confirmed">Confirmed</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Purchase List */}
        <div className="space-y-3">
          {isLoading && <Card className="p-8 text-center text-muted-foreground">Loading...</Card>}
          {!isLoading && filtered.length === 0 && (
            <Card className="p-8 text-center text-muted-foreground">No purchases found</Card>
          )}
          {filtered.map(p => {
            const status = statusConfig[p.payment_status] || statusConfig.pending;
            const countryNames = (p.countries || []).map(code => {
              const c = COUNTRIES.find(x => x.code === code);
              return c ? `${c.flag} ${c.name}` : code;
            });

            return (
              <Card key={p.id} className="p-5">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <p className="font-semibold truncate">{p.user_email}</p>
                      <Badge className={`${status.bg} ${status.color} border-0 gap-1 shrink-0`}>
                        <status.icon className="w-3 h-3" />
                        {p.payment_status}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>Package: <span className="font-medium capitalize">{p.package_type?.replace(/_/g, ' ')}</span> — ₦{p.amount_paid?.toLocaleString()}</p>
                      <p>Ref: {p.payment_reference || '—'}</p>
                      <p className="text-xs">Countries: {countryNames.join(', ') || '—'}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    {p.payment_status !== 'confirmed' && (
                      <Button
                        size="sm"
                        className="bg-green-600 hover:bg-green-700 text-white gap-1"
                        onClick={() => updateMutation.mutate({ id: p.id, data: { payment_status: 'confirmed' } })}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" /> Confirm
                      </Button>
                    )}
                    {p.payment_status !== 'rejected' && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-red-600 border-red-200 hover:bg-red-50 gap-1"
                        onClick={() => updateMutation.mutate({ id: p.id, data: { payment_status: 'rejected' } })}
                      >
                        <XCircle className="w-3.5 h-3.5" /> Reject
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}