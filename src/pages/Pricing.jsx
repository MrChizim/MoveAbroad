import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Check, ArrowRight } from 'lucide-react';
import { PACKAGES, COUNTRIES } from '@/lib/countries';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";
import { motion } from 'framer-motion';
import PaystackButton from '../components/payment/PaystackButton';
import { PAYSTACK_PUBLIC_KEY } from '@/lib/paystack';

export default function Pricing() {
  const [user, setUser] = useState(null);
  const [selectedPkg, setSelectedPkg] = useState(null);
  const [selectedCountries, setSelectedCountries] = useState([]);

  useEffect(() => {
    base44.auth.me().then(setUser).catch(() => {});
  }, []);

  const urlParams = new URLSearchParams(window.location.search);
  const preselectedCountry = urlParams.get('country');

  const handleSelectPackage = (pkg) => {
    if (!user) {
      base44.auth.redirectToLogin(window.location.href);
      return;
    }
    setSelectedPkg(pkg);
    if (preselectedCountry && pkg.id === 'single') {
      setSelectedCountries([preselectedCountry]);
    } else if (pkg.id === 'all_access') {
      setSelectedCountries(COUNTRIES.map(c => c.code));
    } else {
      setSelectedCountries([]);
    }
  };

  const toggleCountry = (code) => {
    if (selectedPkg?.id === 'all_access') return;
    setSelectedCountries(prev => {
      if (prev.includes(code)) return prev.filter(c => c !== code);
      if (selectedPkg?.id === 'single' && prev.length >= 1) return [code];
      if (selectedPkg?.id === 'five_pack' && prev.length >= 5) return prev;
      return [...prev, code];
    });
  };

  const requiredCount = selectedPkg?.id === 'single' ? 1 : selectedPkg?.id === 'five_pack' ? 5 : 15;
  const countriesReady = selectedPkg?.id === 'all_access' || selectedCountries.length === requiredCount;

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
            Choose Your <span className="text-primary">Plan</span>
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            One-time payment. Instant access. All guides are regularly updated.
          </p>
          {PAYSTACK_PUBLIC_KEY && (
            <div className="inline-flex items-center gap-2 mt-4 bg-green-100 text-green-700 text-sm px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              Secure payments powered by Paystack — instant access on payment
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {PACKAGES.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                pkg.popular
                  ? 'border-primary bg-primary/5 shadow-xl shadow-primary/10 md:scale-105'
                  : 'border-border bg-card'
              }`}
            >
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              <h3 className="font-heading text-lg font-semibold mb-2">{pkg.name}</h3>
              <div className="mb-4">
                <span className="font-heading text-4xl font-bold">{pkg.priceDisplay}</span>
                <span className="text-sm text-muted-foreground ml-2">one-time</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">{pkg.description}</p>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  {pkg.countries === 15 ? 'All 15' : pkg.countries} country {pkg.countries === 1 ? 'guide' : 'guides'}
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  Visa pathways & timelines
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  CV & Cover Letter templates
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  Scholarship opportunities
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  Lifetime access & free updates
                </li>
              </ul>
              <Button
                className={`w-full gap-2 ${pkg.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                variant={pkg.popular ? 'default' : 'outline'}
                onClick={() => handleSelectPackage(pkg)}
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Payment Dialog */}
      <Dialog open={!!selectedPkg} onOpenChange={() => setSelectedPkg(null)}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-heading text-xl">
              Complete Your Purchase — {selectedPkg?.name}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            {/* Country Selection */}
            {selectedPkg?.id !== 'all_access' && (
              <div>
                <Label className="mb-3 block font-medium">
                  Select {selectedPkg?.id === 'single' ? '1 country' : '5 countries'}
                  <span className="ml-2 text-primary font-bold">({selectedCountries.length}/{selectedPkg?.countries})</span>
                </Label>
                <div className="grid grid-cols-2 gap-2 max-h-52 overflow-y-auto pr-1">
                  {COUNTRIES.map(c => (
                    <button
                      key={c.code}
                      onClick={() => toggleCountry(c.code)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-left transition-all border ${
                        selectedCountries.includes(c.code)
                          ? 'border-primary bg-primary/10 text-foreground font-medium'
                          : 'border-border hover:border-primary/40'
                      }`}
                    >
                      <span>{c.flag}</span>
                      <span className="truncate">{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {selectedPkg?.id === 'all_access' && (
              <div className="bg-accent/50 rounded-xl p-4 text-sm text-center text-muted-foreground">
                🌍 All 15 country guides will be unlocked instantly after payment.
              </div>
            )}

            {/* Pay Button */}
            {user && selectedPkg && (
              <div>
                {!countriesReady && selectedPkg.id !== 'all_access' && (
                  <p className="text-sm text-amber-600 mb-3 text-center">
                    Select {requiredCount - selectedCountries.length} more {requiredCount - selectedCountries.length === 1 ? 'country' : 'countries'} to continue
                  </p>
                )}
                <PaystackButton
                  user={user}
                  packageData={selectedPkg}
                  selectedCountries={selectedCountries}
                  onSuccess={() => {
                    setSelectedPkg(null);
                    window.location.href = '/dashboard';
                  }}
                />
                <p className="text-xs text-center text-muted-foreground mt-3">
                  🔒 Secure payment via Paystack. Access granted instantly after payment.
                </p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}