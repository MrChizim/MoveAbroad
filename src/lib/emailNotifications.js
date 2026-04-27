import { base44 } from '@/api/base44Client';

export async function sendWelcomeEmail(user) {
  await base44.integrations.Core.SendEmail({
    to: user.email,
    from_name: 'MoveAbroadNG',
    subject: '🌍 Welcome to MoveAbroadNG — Your Journey Starts Here!',
    body: `
Hi ${user.full_name || 'there'},

Welcome to MoveAbroadNG! 🎉

You've just taken the first step toward building a better life abroad. We're here to guide you every step of the way.

Here's what you can do on MoveAbroadNG:
• 🗺️ Explore 15 country guides with detailed visa information
• 📋 Use our interactive Visa Checklist to track your documents
• 📄 Build a professional CV tailored to your target country
• 💬 Connect with other Nigerians in our Community

To get started, explore our country guides and pick your destination:
👉 https://moveabroadng.com/countries

If you have any questions, reply to this email or visit our Community page.

Good luck on your journey! 🚀

— The MoveAbroadNG Team
    `.trim()
  });
}

export async function sendPaymentReceiptEmail(user, purchase, countryNames) {
  const packageNames = { single: 'Single Country', five_pack: '5 Countries Pack', all_access: 'All Access' };

  await base44.integrations.Core.SendEmail({
    to: user.email,
    from_name: 'MoveAbroadNG',
    subject: '✅ Payment Confirmed — Your Guides Are Now Unlocked!',
    body: `
Hi ${user.full_name || 'there'},

Great news! Your payment has been confirmed and your country guides are now unlocked. 🎊

PAYMENT RECEIPT
━━━━━━━━━━━━━━━━━━━━━
Package:   ${packageNames[purchase.package_type] || purchase.package_type}
Amount:    ₦${purchase.amount_paid?.toLocaleString()}
Reference: ${purchase.payment_reference || 'N/A'}
Status:    ✅ Confirmed
━━━━━━━━━━━━━━━━━━━━━

Countries Unlocked:
${countryNames.map(n => `• ${n}`).join('\n')}

What's next?
1. Log in and go to your Dashboard to access your guides
2. Start your Visa Checklist to track your documents
3. Build your CV with our CV Builder tool
4. Ask questions in our Community

👉 Access your guides: https://moveabroadng.com/dashboard

You're one step closer to your dream! 💪

— The MoveAbroadNG Team

P.S. Save this email as your payment receipt.
    `.trim()
  });
}

export async function sendChecklistReminderEmail(user, countryCode, countryName, pendingCount) {
  await base44.integrations.Core.SendEmail({
    to: user.email,
    from_name: 'MoveAbroadNG',
    subject: `⏰ Reminder: ${pendingCount} documents still pending for your ${countryName} visa`,
    body: `
Hi ${user.full_name || 'there'},

Just a quick reminder — you have ${pendingCount} documents still pending on your ${countryName} visa checklist.

Getting all your documents ready early is one of the most important steps in a successful visa application. Don't leave it to the last minute!

👉 Continue your checklist: https://moveabroadng.com/checklist/${countryCode}

Tip: Upload each document directly to your checklist as soon as it's ready.

Keep going — you've got this! 💪

— The MoveAbroadNG Team
    `.trim()
  });
}