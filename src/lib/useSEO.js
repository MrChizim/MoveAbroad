import { useEffect } from 'react';

export function useSEO({ title, description, canonical, schema }) {
  useEffect(() => {
    // Title
    document.title = title;

    // Meta description
    let desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', description);

    // Canonical
    if (canonical) {
      let can = document.querySelector('link[rel="canonical"]');
      if (can) can.setAttribute('href', canonical);
    }

    // OG title / description (update dynamically for sharing)
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    if (ogDesc) ogDesc.setAttribute('content', description);
    if (ogUrl && canonical) ogUrl.setAttribute('content', canonical);
    if (twTitle) twTitle.setAttribute('content', title);
    if (twDesc) twDesc.setAttribute('content', description);

    // Structured data (JSON-LD)
    if (schema) {
      let existing = document.getElementById('page-schema');
      if (!existing) {
        existing = document.createElement('script');
        existing.id = 'page-schema';
        existing.type = 'application/ld+json';
        document.head.appendChild(existing);
      }
      existing.textContent = JSON.stringify(schema);
    }

    return () => {
      // Reset to site defaults on unmount
      document.title = 'MoveAbroad.ng — Relocation Guides for Nigerians';
    };
  }, [title, description, canonical, schema]);
}
