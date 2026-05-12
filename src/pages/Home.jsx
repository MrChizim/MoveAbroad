import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import CountryPreviewGrid from '../components/home/CountryPreviewGrid';
import PricingPreview from '../components/home/PricingPreview';
import { useSEO } from '@/lib/useSEO';

export default function Home() {
  useSEO({
    title: 'MoveAbroad.ng — Relocation Guides for Nigerians',
    description: 'In-depth relocation guides built for Nigerians. Visa pathways, job strategies, cost of living, CV templates and more for 15+ countries. Pay once, access forever.',
    canonical: 'https://moveabroad.ng',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'MoveAbroad.ng',
      url: 'https://moveabroad.ng',
      description: 'In-depth relocation guides for Nigerians planning to move abroad.',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://moveabroad.ng/countries?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
  });

  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <CountryPreviewGrid />
      <PricingPreview />
    </div>
  );
}