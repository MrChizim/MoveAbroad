export const PAYSTACK_PUBLIC_KEY = 'pk_live_f7285b0fdadcd6686aff4e4ff11c287d98ef043c';

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
    amount: amount * 100, // kobo
    currency: 'NGN',
    metadata,
    callback: (response) => onSuccess(response.reference),
    onClose,
  });
  handler.openIframe();
}
