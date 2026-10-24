import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { useSEO } from '@/lib/useSEO';
import { PAGE_SEO, SITE_ALT_NAMES, SITE_URL, pageUrl } from '@/lib/seo';
import { COUNTRIES } from '@/lib/countries';

const CONTACT = 'moveabroadng@gmail.com';
const LEGAL_UPDATED = '24 October 2026';

function Shell({ eyebrow, title, intro, children }) {
  return (
    <div className="min-h-screen bg-[#F8F9FB] py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#0096FF] mb-3">{eyebrow}</p>
        <h1 className="text-[2rem] sm:text-[2.4rem] font-black text-[#04091A] leading-tight mb-4" style={{ fontWeight: 900 }}>{title}</h1>
        {intro && <p className="text-[16px] text-black/55 leading-relaxed mb-8">{intro}</p>}
        <div className="bg-white rounded-2xl border border-black/[0.07] p-6 sm:p-8 space-y-7">{children}</div>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section>
      <h2 className="text-[18px] font-bold text-[#04091A] mb-2">{title}</h2>
      <div className="space-y-3 text-[15px] text-black/65 leading-relaxed">{children}</div>
    </section>
  );
}

function Bullets({ items }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => <li key={i} className="pl-4 border-l-2 border-[#0096FF]/25">{item}</li>)}
    </ul>
  );
}

const Email = ({ subject }) => (
  <a href={`mailto:${CONTACT}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`} className="text-[#0096FF] font-medium hover:underline">{CONTACT}</a>
);

export function About() {
  useSEO({
    ...PAGE_SEO['/about'],
    canonical: pageUrl('/about'),
    schema: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      url: pageUrl('/about'),
      mainEntity: { '@type': 'Organization', name: 'MoveAbroad.ng', alternateName: SITE_ALT_NAMES, url: SITE_URL, email: CONTACT },
    },
  });

  return (
    <Shell
      eyebrow="About us"
      title="Relocation guides built for Nigerians"
      intro="MoveAbroad.ng (also known as Move Abroad Nigeria) is an independent guide for Nigerians who want to study, work or visit abroad. We turn scattered official rules into clear, step-by-step plans written for the Nigerian situation."
    >
      <Section title="What you will find here">
        <p>
          Guides for {COUNTRIES.length} countries — including Canada, the UK, the US, Germany, Australia, Ireland and the Netherlands — covering
          undergraduate, master's and PhD study, work routes and visitor visas. Each guide covers the visa steps, timelines, costs, universities,
          scholarships and the Nigerian-specific details other sites skip: WAEC verification, proof of funds from Nigerian accounts, and where to give
          biometrics in Lagos and Abuja.
        </p>
        <p>
          We also offer free tools — a <Link to="/budget-calculator" className="text-[#0096FF] hover:underline">relocation budget calculator</Link>, an{' '}
          <Link to="/cv-builder" className="text-[#0096FF] hover:underline">international CV builder</Link> and document checklists — and free{' '}
          <Link to="/updates" className="text-[#0096FF] hover:underline">Visa News</Link> on rule changes.
        </p>
      </Section>

      <Section title="How we research and update the guides">
        <Bullets items={[
          'Official sources first: government immigration sites such as IRCC (Canada), GOV.UK, Migrationsverket (Sweden), the Netherlands IND, Australia\'s Home Affairs and the US Mission in Nigeria.',
          'Fees, proof-of-funds amounts and salary thresholds were last checked in October 2026. Each Visa News article shows its date and links its sources.',
          'We correct mistakes quickly. If you spot something out of date, email us and we will check it against the official source.',
        ]} />
      </Section>

      <Section title="What we are not">
        <p>
          MoveAbroad.ng is an educational resource. We are not a visa agent, we are not affiliated with any government or embassy, and nobody can
          guarantee a visa. For advice on your specific case, use a regulated adviser — for Canada, a consultant licensed by the College of
          Immigration and Citizenship Consultants (CICC); for the UK, an adviser registered with the Immigration Advice Authority.
        </p>
      </Section>

      <Section title="Independence">
        <p>
          Our guides are funded by readers who buy them. We may work with carefully chosen partners, but sponsored content is always clearly labelled
          and partners never change our facts. Read our <Link to="/partners" className="text-[#0096FF] hover:underline">partnership policy</Link>.
        </p>
      </Section>

      <Section title="Contact">
        <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-black/40" /> <Email /></p>
      </Section>
    </Shell>
  );
}

export function Partners() {
  useSEO({ ...PAGE_SEO['/partners'], canonical: pageUrl('/partners') });

  return (
    <Shell
      eyebrow="Partner with us"
      title="Reach Nigerians planning their move abroad"
      intro="Our readers are Nigerians — at home and in the diaspora — actively researching study, work and visitor routes. If your service genuinely helps them, we would like to hear from you."
    >
      <Section title="Who reads MoveAbroad.ng">
        <Bullets items={[
          `Students and professionals comparing ${COUNTRIES.length} destination countries, from Canada and the UK to Germany and Australia.`,
          'Readers at the decision stage: checking visa steps, proof of funds, test requirements and costs.',
          'Current audience figures (visitors, top countries, traffic sources) are shared on request.',
        ]} />
      </Section>

      <Section title="Ways to work with us">
        <Bullets items={[
          'Sponsored resource: a labelled link or short feature in the most relevant country guide (for example, French test preparation in the Canada guide).',
          'Featured placement in Visa News articles on related topics.',
          'Referral partnerships with vetted providers, where our readers get a clear benefit.',
        ]} />
      </Section>

      <Section title="Who we work with">
        <p>
          Language schools and test preparation (IELTS, TOEFL, TEF/TCF), universities and colleges, banks and providers of GIC or blocked accounts,
          international money transfer, health insurance, relocation services, and regulated immigration advisers.
        </p>
      </Section>

      <Section title="Our rules">
        <Bullets items={[
          'Every paid placement is labelled "Sponsored" or "Partner", and paid links are marked rel="sponsored", as search engines require.',
          'Placements must be relevant to the page and useful to readers. We never change facts or rankings for payment.',
          'We do not promote "guaranteed visa" services, job offers for sale, or any unlicensed immigration advice.',
          'We check that partners are real, registered businesses (for example CAC or Companies House), and that immigration advisers hold a current licence.',
          'We may decline or remove any placement that does not meet these rules.',
        ]} />
      </Section>

      <Section title="Get in touch">
        <p>
          Email <Email subject="Partnership enquiry" /> with your company name, website, registration or licence number, and what you would like to
          promote. We will reply with current audience figures and rates.
        </p>
      </Section>
    </Shell>
  );
}

export function Privacy() {
  useSEO({ ...PAGE_SEO['/privacy'], canonical: pageUrl('/privacy') });

  return (
    <Shell eyebrow="Legal" title="Privacy policy" intro={`Last updated: ${LEGAL_UPDATED}`}>
      <Section title="Who we are">
        <p>MoveAbroad.ng (&ldquo;we&rdquo;) runs this website. Contact us about privacy at <Email subject="Privacy request" />.</p>
      </Section>

      <Section title="What we collect">
        <Bullets items={[
          'When you sign in with Google: your name, email address and profile photo.',
          'Information you choose to add: your profile and CV details, checklist progress and expense entries.',
          'Purchases: the package and countries you bought, the amount and the Paystack payment reference. Card and bank details are handled by Paystack; we never see or store them.',
          'Analytics: the pages you visit, the site that referred you, your device type and your approximate country (from your network). Your browser stores a random ID so we can count unique visitors. We do not use advertising trackers or analytics cookies.',
        ]} />
      </Section>

      <Section title="How we use it">
        <p>To provide your account and guides, confirm payments and unlock purchases, answer support requests, and understand which pages help readers so we can improve them. We do not sell your information.</p>
      </Section>

      <Section title="Who we share it with">
        <p>
          Only the services that run the site for us: Google Firebase (sign-in and database), Vercel (hosting) and Paystack (payments). Each processes
          data under its own privacy terms. We may disclose information if the law requires it.
        </p>
      </Section>

      <Section title="How long we keep it">
        <p>We keep your account and purchase records while your account is active so your guides stay unlocked. Analytics are stored as daily totals. You can ask us to delete your account at any time.</p>
      </Section>

      <Section title="Your rights">
        <p>
          Under the Nigeria Data Protection Act 2023 you can ask to access, correct or delete your personal data, or object to how it is used. Email{' '}
          <Email subject="Privacy request" /> and we will respond within 30 days. You can also complain to the Nigeria Data Protection Commission.
        </p>
      </Section>

      <Section title="Children">
        <p>The site is not intended for children under 13.</p>
      </Section>

      <Section title="Changes">
        <p>If we change this policy, we will update the date at the top of this page.</p>
      </Section>
    </Shell>
  );
}

export function Terms() {
  useSEO({ ...PAGE_SEO['/terms'], canonical: pageUrl('/terms') });

  return (
    <Shell eyebrow="Legal" title="Terms of use and refund policy" intro={`Last updated: ${LEGAL_UPDATED}`}>
      <Section title="Educational information only">
        <p>
          Our guides and tools are general educational information, not legal or immigration advice. Immigration rules change often: always confirm
          requirements on the official government website before you apply or pay any fee. We cannot guarantee any visa, admission or job outcome.
        </p>
      </Section>

      <Section title="Your account">
        <p>You sign in with your Google account. Keep it secure — purchases are linked to the Google account you used to buy them.</p>
      </Section>

      <Section title="Buying guides">
        <Bullets items={[
          'Prices are shown in Naira and paid securely through Paystack.',
          'A purchase gives you personal access to the country guides you chose for as long as MoveAbroad.ng operates. Guides are updated over time; access is to the current version.',
          'Access is for your personal use. Please do not share your account or copy, republish or resell guide content.',
        ]} />
      </Section>

      <Section title="Refunds">
        <Bullets items={[
          'If you were charged twice, or paid but your guide did not unlock and we cannot fix it, we will refund you in full.',
          'Other refund requests made within 7 days of purchase are considered case by case.',
          `To request a refund, email ${CONTACT} with your Paystack reference. Approved refunds are returned to your original payment method through Paystack and can take several working days.`,
        ]} />
      </Section>

      <Section title="Acceptable use">
        <p>Do not misuse the site, attempt to access content or accounts that are not yours, or interfere with its security or operation.</p>
      </Section>

      <Section title="Liability">
        <p>
          We work hard to keep the guides accurate, but we are not liable for decisions made, or losses suffered, from relying on them without checking
          official sources. Nothing in these terms limits rights you have under Nigerian consumer protection law.
        </p>
      </Section>

      <Section title="Governing law and contact">
        <p>These terms are governed by the laws of the Federal Republic of Nigeria. Questions? Email <Email subject="Terms question" />.</p>
      </Section>
    </Shell>
  );
}
