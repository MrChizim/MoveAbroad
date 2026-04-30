import React from 'react';
import { Link } from 'react-router-dom';
import { Lock, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function LockedContent({ countryCode, countryName }) {
  return (
    <div className="relative rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 p-12 text-center">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 rounded-2xl" />
      <div className="relative">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <Lock className="w-8 h-8 text-primary" />
        </div>
        <h3 className="font-heading text-2xl font-bold mb-3">Unlock the Full {countryName} Guide</h3>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Get detailed visa pathways, CV templates, scholarship info, step-by-step timelines, and more. Everything you need to make your move.
        </p>
        <Link to={`/pricing?country=${countryCode}`}>
          <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2 rounded-full px-8">
            Unlock for ₦10,000 <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
        <p className="text-xs text-muted-foreground mt-4">
          Or save with our 5-country (₦30,000) or all-access (₦50,000) packs
        </p>
      </div>
    </div>
  );
}