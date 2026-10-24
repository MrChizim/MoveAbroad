import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import CountryPreviewGrid from '../components/home/CountryPreviewGrid';
import PricingPreview from '../components/home/PricingPreview';
import LatestUpdates from '../components/home/LatestUpdates';
import { useSEO } from '@/lib/useSEO';
import { PAGE_SEO, pageUrl } from '@/lib/seo';

export default function Home() {
  useSEO({
    ...PAGE_SEO['/'],
    canonical: pageUrl('/'),
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'MoveAbroad.ng',
      url: 'https://www.moveabroad.ng',
      alternateName: ['Move Abroad Nigeria', 'MoveAbroad Nigeria'],
      description: 'Independent relocation guides for Nigerians planning to study, work or visit abroad.',
    },
  });

  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <CountryPreviewGrid />
      <LatestUpdates />
      <PricingPreview />
    </div>
  );
}