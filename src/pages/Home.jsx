import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import CountryPreviewGrid from '../components/home/CountryPreviewGrid';
import PricingPreview from '../components/home/PricingPreview';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <CountryPreviewGrid />
      <PricingPreview />
    </div>
  );
}