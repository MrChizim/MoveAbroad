import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { CreditCard, Loader2 } from 'lucide-react';
import { confirmPayment, initializePaystackPayment } from '@/lib/paystack';
import { auth } from '@/lib/firebase';
import { COUNTRIES } from '@/lib/countries';
import { toast } from 'sonner';

const SUPPORT = 'moveabroadng@gmail.com';

export default function PaystackButton({ user, packageData, selectedCountries, onSuccess }) {
  const [loading, setLoading] = useState(false);

  const handlePay = async () => {
    setLoading(true);

    const allCountryCodes = COUNTRIES.map(c => c.code);
    const countries = packageData.id === 'all_access' ? allCountryCodes : selectedCountries;

    try {
      await initializePaystackPayment({
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
            const idToken = await auth.currentUser.getIdToken();
            const result = await confirmPayment(reference, idToken);
            if (result.ok) {
              toast.success('Payment confirmed! Your guides are now unlocked.');
              onSuccess();
            } else {
              toast.error(`We received your payment but could not unlock it yet (${result.error}). Refresh in a minute, or email ${SUPPORT} with your reference: ${reference}`, { duration: 20000 });
            }
          } catch {
            toast.error(`We received your payment but could not unlock it yet. Refresh in a minute, or email ${SUPPORT} with your reference: ${reference}`, { duration: 20000 });
          } finally {
            setLoading(false);
          }
        },
        onClose: () => {
          setLoading(false);
          toast.error('Payment cancelled.');
        },
      });
    } catch (err) {
      setLoading(false);
      toast.error(`${err.message}. Please try again later or email ${SUPPORT}.`);
    }
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
