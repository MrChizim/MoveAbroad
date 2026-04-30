export const COUNTRIES = [
  { code: "US", name: "United States", flag: "🇺🇸", image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80" },
  { code: "CA", name: "Canada", flag: "🇨🇦", image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800&q=80" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80" },
  { code: "DE", name: "Germany", flag: "🇩🇪", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80" },
  { code: "SE", name: "Sweden", flag: "🇸🇪", image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=800&q=80" },
  { code: "NL", name: "Netherlands", flag: "🇳🇱", image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&q=80" },
  { code: "AU", name: "Australia", flag: "🇦🇺", image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&q=80" },
  { code: "IE", name: "Ireland", flag: "🇮🇪", image: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=800&q=80" },
  { code: "BE", name: "Belgium", flag: "🇧🇪", image: "https://images.unsplash.com/photo-1491557345352-5929e343eb89?w=800&q=80" },
  { code: "FR", name: "France", flag: "🇫🇷", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80" },
  { code: "PL", name: "Poland", flag: "🇵🇱", image: "https://images.unsplash.com/photo-1519197924294-4ba991a11128?w=800&q=80" },
  { code: "CZ", name: "Czech Republic", flag: "🇨🇿", image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800&q=80" },
  { code: "PT", name: "Portugal", flag: "🇵🇹", image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&q=80" },
  { code: "ES", name: "Spain", flag: "🇪🇸", image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&q=80" },
{ code: "NZ", name: "New Zealand", flag: "🇳🇿", image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800&q=80" }
];

export const PACKAGES = [
  {
    id: "single",
    name: "Single Country",
    price: 10000,
    priceDisplay: "₦10,000",
    description: "Full access to one country guide of your choice",
    countries: 1,
    popular: false
  },
  {
    id: "five_pack",
    name: "5 Countries Pack",
    price: 30000,
    priceDisplay: "₦30,000",
    description: "Choose any 5 countries — save ₦20,000",
    countries: 5,
    popular: true
  },
  {
    id: "all_access",
    name: "All Access",
    price: 50000,
    priceDisplay: "₦50,000",
    description: "Unlock all 15 countries — the complete toolkit",
    countries: 15,
    popular: false
  }
];