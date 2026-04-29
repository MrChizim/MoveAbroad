import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { CreditCard, Loader2 } from 'lucide-react';
import { initializePaystackPayment } from '@/lib/paystack';
import { recordPurchase } from '@/lib/purchases';
import { COUNTRIES } from '@/lib/countries';
import { toast } from 'sonner';

export default function PaystackButton({ user, packageData, selectedCountries, onSuccess }) {
  const [loading, setLoading] = useState(false);

  const handlePay = async () => {
    setLoading(true);

    const allCountryCodes = COUNTRIES.map(c => c.code);
    const countries = packageData.id === 'all_access' ? allCountryCodes : selectedCountries;

    initializePaystackPayment({
      email: user.email,
      amount: packageData.price,
      metadata: {
        custom_fields: [
          { display_name: 'Package', variable_name: 'package', value: packageData.id },
          { display_name: 'Countries', variable_name: 'countries', value: countries.join(',') },
          { display_name: 'User ID', variable_name: 'uid', value: user.uid },
        ],
      },
      onSuccess: async (reference) => {
        try {
          await recordPurchase(user.uid, {
            packageId: packageData.id,
            countries,
            paystackRef: reference,
            email: user.email,
          });
          toast.success('Payment successful! Your guides are now unlocked.');
          onSuccess();
        } catch {
          toast.error('Payment received but failed to unlock. Please contact hello@moveabroadng.com with your reference: ' + reference);
        } finally {
          setLoading(false);
        }
      },
      onClose: () => {
        setLoading(false);
        toast.error('Payment cancelled.');
      },
    });
  };

  return (
    <Button
      className="w-full gap-2 h-12 text-[14px] font-semibold"
      style={{ background: '#0096FF' }}
      onClick={handlePay}
      disabled={loading}
    >
      {loading ? (
        <><Loader2 className="w-4 h-4 animate-spin" /> Processing...</>
      ) : (
        <><CreditCard className="w-4 h-4" /> Pay {packageData.priceDisplay}</>
      )}
    </Button>
  );
}
