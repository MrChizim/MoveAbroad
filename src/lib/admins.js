// Accounts with full access to every guide. Shared by the site and api/guide.js.
export const ADMIN_EMAILS = ['siriusoddjobs@gmail.com', 'lilnutellx@gmail.com', 'melvinnnamani@gmail.com'];

export function isAdminEmail(email) {
  return !!email && ADMIN_EMAILS.includes(email.toLowerCase());
}
