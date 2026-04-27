import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Button } from "@/components/ui/button";
import { CreditCard, Loader2 } from 'lucide-react';
import { initializePaystackPayment, PAYSTACK_PUBLIC_KEY } from '@/lib/paystack';
import { sendPaymentReceiptEmail } from '@/lib/emailNotifications';
import { COUNTRIES } from '@/lib/countries';
import { toast } from 'sonner';

export default function PaystackButton({ user, packageData, selectedCountries, onSuccess }) {
  const [loading, setLoading] = useState(false);

  const handlePay = async () => {
    if (!PAYSTACK_PUBLIC_KEY) {
      toast.error('Payment gateway not configured. Please contact support.');
      return;
    }

    setLoading(true);

    initializePaystackPayment({
      email: user.email,
      amount: packageData.price,
      metadata: {
        custom_fields: [
          { display_name: 'Package', variable_name: 'package', value: packageData.id },
          { display_name: 'Countries', variable_name: 'countries', value: selectedCountries.join(',') },
        ],
      },
      onSuccess: async (reference) => {
        const allCountries = ['US','CA','GB','DE','SE','NL','AU','IE','FR','PL','CZ','PT','ES','AE','ZA'];
        const purchasedCountries = packageData.id === 'all_access' ? allCountries : selectedCountries;

        const purchase = await base44.entities.Purchase.create({
          user_email: user.email,
          package_type: packageData.id,
          countries: purchasedCountries,
          amount_paid: packageData.price,
          payment_reference: reference,
          payment_status: 'confirmed',
          payment_method: 'paystack',
        });

        // Send payment receipt email
        const countryNames = purchasedCountries.map(code => {
          const c = COUNTRIES.find(x => x.code === code);
          return c ? `${c.flag} ${c.name}` : code;
        });
        sendPaymentReceiptEmail(user, { ...purchase, package_type: packageData.id, amount_paid: packageData.price, payment_reference: reference }, countryNames).catch(() => {});

        setLoading(false);
        toast.success('Payment successful! Your guides are now unlocked.');
        onSuccess();
      },
      onClose: () => {
        setLoading(false);
        toast.error('Payment cancelled.');
      },
    });
  };

  return (
    <Button
      className="w-full bg-primary hover:bg-primary/90 gap-2"
      onClick={handlePay}
      disabled={loading}
    >
      {loading ? (
        <><Loader2 className="w-4 h-4 animate-spin" /> Processing...</>
      ) : (
        <><CreditCard className="w-4 h-4" /> Pay {packageData.priceDisplay} with Paystack</>
      )}
    </Button>
  );
}