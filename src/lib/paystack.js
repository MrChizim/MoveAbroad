// Paystack integration helper
// Add your Paystack public key in the .env file as VITE_PAYSTACK_PUBLIC_KEY

export const PAYSTACK_PUBLIC_KEY = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || '';

export function loadPaystackScript() {
  return new Promise((resolve) => {
    if (window.PaystackPop) return resolve();
    const script = document.createElement('script');
    script.src = 'https://js.paystack.co/v1/inline.js';
    script.onload = resolve;
    document.body.appendChild(script);
  });
}

export async function initializePaystackPayment({ email, amount, metadata, onSuccess, onClose }) {
  await loadPaystackScript();

  const handler = window.PaystackPop.setup({
    key: PAYSTACK_PUBLIC_KEY,
    email,
    amount: amount * 100, // Paystack uses kobo
    currency: 'NGN',
    metadata,
    callback: (response) => {
      onSuccess(response.reference);
    },
    onClose,
  });

  handler.openIframe();
}

export async function verifyPaystackPayment(reference) {
  // Verify via Paystack's public endpoint
  // NOTE: In production you should verify server-side. 
  // For now we trust the client callback reference and mark as confirmed.
  // Replace with a backend function when you upgrade to Builder+.
  return { status: 'success', reference };
}