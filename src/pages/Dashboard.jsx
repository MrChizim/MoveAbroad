import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { useUserAccess } from '@/lib/useUserAccess';
import { COUNTRIES } from '@/lib/countries';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Globe, ArrowRight, Clock, CheckCircle2, XCircle, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    base44.auth.me().then(setUser).catch(() => base44.auth.redirectToLogin());
  }, []);

  const { unlockedCountries, isLoading: accessLoading } = useUserAccess(user?.email);

  const { data: allPurchases = [] } = useQuery({
    queryKey: ['my-purchases', user?.email],
    queryFn: () => base44.entities.Purchase.filter({ user_email: user?.email }, '-created_date'),
    enabled: !!user?.email,
  });

  if (!user) return null;

  const unlockedList = COUNTRIES.filter(c => unlockedCountries.has(c.code));
  const lockedList = COUNTRIES.filter(c => !unlockedCountries.has(c.code));

  const statusConfig = {
    pending: { icon: Clock, color: 'text-yellow-600', bg: 'bg-yellow-100', label: 'Pending Verification' },
    confirmed: { icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-100', label: 'Confirmed' },
    rejected: { icon: XCircle, color: 'text-red-600', bg: 'bg-red-100', label: 'Rejected' },
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
          <div>
            <h1 className="font-heading text-3xl font-bold">Welcome, {user.full_name || 'there'}!</h1>
            <p className="text-muted-foreground mt-1">{user.email}</p>
          </div>
          <Button variant="outline" size="sm" className="gap-2" onClick={() => base44.auth.logout()}>
            <LogOut className="w-4 h-4" /> Sign Out
          </Button>
        </div>

        {/* Unlocked Countries */}
        <div className="mb-12">
          <h2 className="font-heading text-xl font-bold mb-4 flex items-center gap-2">
            <Globe className="w-5 h-5 text-primary" />
            Your Unlocked Guides ({unlockedList.length})
          </h2>
          {unlockedList.length === 0 ? (
            <Card className="p-8 text-center">
              <p className="text-muted-foreground mb-4">You haven't unlocked any country guides yet.</p>
              <Link to="/pricing">
                <Button className="bg-primary hover:bg-primary/90 gap-2">
                  Get Your First Guide <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </Card>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {unlockedList.map((country, i) => (
                <motion.div key={country.code} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                  <Link to={`/country/${country.code}`} className="group block">
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-32">
                        <img src={country.image} alt={country.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-3 left-4 flex items-center gap-2">
                          <span className="text-xl">{country.flag}</span>
                          <span className="text-white font-heading font-bold">{country.name}</span>
                        </div>
                        <Badge className="absolute top-3 right-3 bg-green-500 text-white">Unlocked</Badge>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Locked Countries */}
        {lockedList.length > 0 && (
          <div className="mb-12">
            <h2 className="font-heading text-xl font-bold mb-4">Other Countries</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {lockedList.map(country => (
                <Link key={country.code} to={`/country/${country.code}`} className="group">
                  <Card className="p-4 text-center hover:shadow-md transition-shadow">
                    <span className="text-2xl block mb-1">{country.flag}</span>
                    <p className="text-sm font-medium truncate">{country.name}</p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Purchase History */}
        <div>
          <h2 className="font-heading text-xl font-bold mb-4">Purchase History</h2>
          {allPurchases.length === 0 ? (
            <Card className="p-6 text-center text-muted-foreground">No purchases yet</Card>
          ) : (
            <div className="space-y-3">
              {allPurchases.map(p => {
                const status = statusConfig[p.payment_status] || statusConfig.pending;
                return (
                  <Card key={p.id} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <p className="font-semibold capitalize">{p.package_type?.replace(/_/g, ' ')} Package</p>
                      <p className="text-sm text-muted-foreground">Ref: {p.payment_reference || '—'}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-heading font-bold">₦{p.amount_paid?.toLocaleString()}</span>
                      <Badge className={`${status.bg} ${status.color} border-0 gap-1`}>
                        <status.icon className="w-3 h-3" />
                        {status.label}
                      </Badge>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}