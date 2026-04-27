import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';

export function useUserAccess(userEmail) {
  const { data: purchases = [], isLoading } = useQuery({
    queryKey: ['purchases', userEmail],
    queryFn: () => base44.entities.Purchase.filter({ user_email: userEmail, payment_status: 'confirmed' }),
    enabled: !!userEmail,
  });

  const unlockedCountries = new Set();
  purchases.forEach(p => {
    if (p.countries) {
      p.countries.forEach(c => unlockedCountries.add(c));
    }
  });

  return {
    unlockedCountries,
    hasAccess: (countryCode) => unlockedCountries.has(countryCode),
    isLoading,
    purchases
  };
}