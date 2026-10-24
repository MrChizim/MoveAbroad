// Single source for page titles, descriptions and share images.
// Used by the pages at runtime and by scripts/prerender-meta.mjs at build time,
// so link previews (WhatsApp, X, Facebook, LinkedIn) match what the page shows.

export const SITE_URL = 'https://www.moveabroad.ng';
export const SITE_NAME = 'MoveAbroad.ng';
export const SITE_ALT_NAMES = ['Move Abroad Nigeria', 'MoveAbroad Nigeria', 'Move Abroad NG', 'moveabroadng'];
export const DEFAULT_TITLE = 'MoveAbroad.ng (Move Abroad Nigeria) — Relocation Guides for Nigerians';
export const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

export const PAGE_SEO = {
  '/': {
    title: DEFAULT_TITLE,
    description: 'In-depth relocation guides built for Nigerians. Visa pathways, job strategies, cost of living, CV templates and more for 13 countries. Pay once, access forever.',
  },
  '/countries': {
    title: 'Relocation Guides for Nigerians — All Countries | MoveAbroad.ng',
    description: 'Browse country-by-country relocation guides built for Nigerians. UK, Canada, USA, Germany, Australia and more — visa paths, jobs, cost of living, and Nigerian tips.',
  },
  '/pricing': {
    title: 'Pricing — Unlock Country Guides | MoveAbroad.ng',
    description: 'Get full access to Nigerian relocation guides. Single country from ₦10,000, 5-country pack ₦30,000, or all 13 countries for ₦50,000. Pay once, access forever.',
  },
  '/budget-calculator': {
    title: 'Cost of Living Calculator for Nigerians Moving Abroad | MoveAbroad.ng',
    description: 'Calculate exactly how much you need to relocate abroad from Nigeria. Rent, food, transport, visa costs — city by city breakdown in Naira.',
  },
  '/updates': {
    title: 'Visa News for Nigerians — 2026 Immigration Updates | MoveAbroad.ng',
    description: 'Free, dated summaries of visa and immigration rule changes for Nigerians: US, Canada, UK, Schengen, Australia and more, checked against official sources.',
  },
  '/about': {
    title: 'About MoveAbroad.ng — Independent Relocation Guides for Nigerians',
    description: 'Who we are, how our relocation guides are researched and kept up to date, and what MoveAbroad.ng is (and is not). Built for Nigerians planning to study or work abroad.',
  },
  '/partners': {
    title: 'Partner with MoveAbroad.ng — Reach Nigerians Planning to Move Abroad',
    description: 'Sponsored placements and referral partnerships for language schools, test prep, universities, banks and regulated immigration advisers. Clear labelling, vetted partners only.',
  },
  '/privacy': {
    title: 'Privacy Policy | MoveAbroad.ng',
    description: 'How MoveAbroad.ng collects, uses and protects your information, including sign-in, payments and cookie-free analytics.',
  },
  '/terms': {
    title: 'Terms of Use and Refund Policy | MoveAbroad.ng',
    description: 'The terms for using MoveAbroad.ng and buying country guides, including lifetime access and our refund policy.',
  },
  '/cv-builder': {
    title: 'International CV Builder for Nigerians — UK, Canada, USA & More | MoveAbroad.ng',
    description: 'Build a job-ready CV in the format required by your target country. Nigerian professionals moving abroad — get a country-specific CV instantly.',
  },
};

export function pageUrl(path) {
  return path === '/' ? SITE_URL : `${SITE_URL}${path}`;
}

// Country photos are Unsplash URLs; request a 1200x630 JPEG crop for previews.
export function countryShareImage(country) {
  return `${country.image.split('?')[0]}?w=1200&h=630&fit=crop&q=80&fm=jpg`;
}

// Country names that read naturally with "the" ("Move to the United States").
const NEEDS_THE = new Set(['US', 'GB', 'NL']);

export function updateSeo(update) {
  return {
    title: `${update.title} | MoveAbroad.ng`,
    description: update.description,
    canonical: pageUrl(`/updates/${update.slug}`),
    image: DEFAULT_IMAGE,
  };
}

export function countrySeo(country, guide) {
  const tagline = guide?.tagline?.replace(/\.$/, '');
  const name = NEEDS_THE.has(country.code) ? `the ${country.name}` : country.name;
  return {
    title: `Move to ${name} from Nigeria — Visa, Jobs & Relocation Guide | MoveAbroad.ng`,
    description: tagline
      ? `${tagline}. Step-by-step visa, study and work guides for Nigerians moving to ${name}.`
      : `Complete relocation guide for Nigerians moving to ${name}. Visa pathways, cost of living, universities, scholarships and Nigerian-specific tips.`,
    canonical: pageUrl(`/country/${country.code}`),
    image: countryShareImage(country),
  };
}
