// Set VITE_PAYSTACK_PUBLIC_KEY in Vercel (Settings → Environment Variables), then redeploy.
export const PAYSTACK_PUBLIC_KEY = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || '';

export function loadPaystackScript() {
  return new Promise((resolve, reject) => {
    if (window.PaystackPop) return resolve();
    const script = document.createElement('script');
    script.src = 'https://js.paystack.co/v1/inline.js';
    script.onload = resolve;
    script.onerror = () => reject(new Error('Could not load Paystack'));
    document.body.appendChild(script);
  });
}

export async function initializePaystackPayment({ email, amount, metadata, onSuccess, onClose }) {
  if (!PAYSTACK_PUBLIC_KEY) throw new Error('Payments are not configured yet');
  await loadPaystackScript();
  const handler = window.PaystackPop.setup({
    key: PAYSTACK_PUBLIC_KEY,
    email,
    amount: amount * 100, // kobo
    currency: 'NGN',
    metadata,
    callback: (response) => onSuccess(response.reference),
    onClose,
  });
  handler.openIframe();
}

// Asks the server to confirm the payment with Paystack and unlock the guides.
// Retries a few times because the server check can briefly race Paystack.
export async function confirmPayment(reference, idToken) {
  let last = { ok: false, error: 'network_error' };
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const r = await fetch('/api/verify-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${idToken}` },
        body: JSON.stringify({ reference }),
      });
      const body = await r.json().catch(() => ({}));
      if (r.ok) return { ok: true, countries: body.countries };
      last = { ok: false, error: body.error || `http_${r.status}` };
      if (r.status < 500 && r.status !== 404) return last;
    } catch {
      last = { ok: false, error: 'network_error' };
    }
    await new Promise((resolve) => setTimeout(resolve, 1500 * (attempt + 1)));
  }
  return last;
}
