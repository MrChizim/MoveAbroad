import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import CountryPreviewGrid from '../components/home/CountryPreviewGrid';
import PricingPreview from '../components/home/PricingPreview';
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
      description: 'In-depth relocation guides for Nigerians planning to move abroad.',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://www.moveabroad.ng/countries?q={search_term_string}',
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