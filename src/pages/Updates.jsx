import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, ExternalLink, Share2 } from 'lucide-react';
import { UPDATES, findUpdate } from '@/lib/updates';
import { COUNTRIES } from '@/lib/countries';
import { useSEO } from '@/lib/useSEO';
import { PAGE_SEO, SITE_URL, pageUrl, updateSeo } from '@/lib/seo';
import PageNotFound from '@/lib/PageNotFound';

const formatDate = (iso) => new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

// Renders the simple body format documented in src/lib/updates.js.
function ArticleBody({ text }) {
  const blocks = text.split(/\n\s*\n/);
  return blocks.map((block, i) => {
    const lines = block.split('\n').map((l) => l.trim()).filter(Boolean);
    if (lines.every((l) => l.startsWith('• '))) {
      return (
        <ul key={i} className="space-y-2 my-3">
          {lines.map((l, j) => (
            <li key={j} className="text-[15px] text-black/70 leading-relaxed pl-4 border-l-2 border-[#0096FF]/25">{l.slice(2)}</li>
          ))}
        </ul>
      );
    }
    return <p key={i} className="text-[15px] text-black/70 leading-relaxed my-3">{lines.join(' ')}</p>;
  });
}

function UpdatesList() {
  useSEO({
    ...PAGE_SEO['/updates'],
    canonical: pageUrl('/updates'),
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Visa News for Nigerians',
      url: pageUrl('/updates'),
      hasPart: UPDATES.map((u) => ({ '@type': 'NewsArticle', headline: u.title, url: pageUrl(`/updates/${u.slug}`), datePublished: u.published })),
    },
  });

  return (
    <div className="min-h-screen bg-[#F8F9FB] py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#0096FF] mb-3">Visa News</p>
        <h1 className="text-[2rem] sm:text-[2.4rem] font-black text-[#04091A] leading-tight mb-3" style={{ fontWeight: 900 }}>
          Visa and immigration news for Nigerians
        </h1>
        <p className="text-[15px] text-black/50 leading-relaxed mb-10">
          Free, dated summaries of the rule changes that affect Nigerians moving abroad, checked against official government sources.
        </p>
        <div className="space-y-4">
          {UPDATES.map((u) => (
            <Link key={u.slug} to={`/updates/${u.slug}`} className="block bg-white rounded-2xl border border-black/[0.07] p-6 hover:shadow-sm transition-shadow">
              <p className="flex items-center gap-1.5 text-[12px] text-black/40 mb-2">
                <Calendar className="w-3.5 h-3.5" /> {formatDate(u.published)}
              </p>
              <h2 className="text-[18px] font-bold text-[#04091A] leading-snug mb-2">{u.title}</h2>
              <p className="text-[14px] text-black/50 leading-relaxed mb-3">{u.description}</p>
              <span className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#0096FF]">Read the update <ArrowRight className="w-3.5 h-3.5" /></span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function Article({ update }) {
  const url = pageUrl(`/updates/${update.slug}`);
  useSEO({
    ...updateSeo(update),
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'NewsArticle',
          headline: update.title,
          description: update.description,
          datePublished: update.published,
          dateModified: update.updated || update.published,
          url,
          mainEntityOfPage: url,
          image: [`${SITE_URL}/og-image.jpg`],
          author: { '@type': 'Organization', name: 'MoveAbroad.ng', url: SITE_URL },
          publisher: { '@type': 'Organization', name: 'MoveAbroad.ng', logo: { '@type': 'ImageObject', url: `${SITE_URL}/apple-touch-icon.png` } },
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Visa News', item: pageUrl('/updates') },
            { '@type': 'ListItem', position: 3, name: update.title, item: url },
          ],
        },
      ],
    },
  });

  const related = update.countries.map((code) => COUNTRIES.find((c) => c.code === code)).filter(Boolean);
  const share = `https://wa.me/?text=${encodeURIComponent(`${update.title} — ${url}`)}`;

  return (
    <div className="min-h-screen bg-[#F8F9FB] py-12">
      <article className="max-w-3xl mx-auto px-4 sm:px-6">
        <nav aria-label="Breadcrumb" className="text-[13px] text-black/40 mb-6">
          <Link to="/updates" className="inline-flex items-center gap-1.5 hover:text-[#0096FF]"><ArrowLeft className="w-4 h-4" /> Visa News</Link>
        </nav>
        <h1 className="text-[1.9rem] sm:text-[2.3rem] font-black text-[#04091A] leading-tight mb-4" style={{ fontWeight: 900 }}>{update.title}</h1>
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <span className="flex items-center gap-1.5 text-[13px] text-black/45"><Calendar className="w-4 h-4" /> {formatDate(update.updated || update.published)}</span>
          <a href={share} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-semibold text-white" style={{ background: '#25D366' }}>
            <Share2 className="w-3.5 h-3.5" /> Share on WhatsApp
          </a>
        </div>
        <p className="text-[16px] text-black/60 leading-relaxed mb-8">{update.description}</p>

        <div className="bg-white rounded-2xl border border-black/[0.07] p-6 sm:p-8">
          {update.sections.map((s) => (
            <section key={s.heading} className="mb-6 last:mb-0">
              <h2 className="text-[18px] font-bold text-[#04091A] mb-1">{s.heading}</h2>
              <ArticleBody text={s.body} />
            </section>
          ))}
        </div>

        <div className="mt-6 bg-white rounded-2xl border border-black/[0.07] p-6">
          <h2 className="text-[15px] font-bold text-[#04091A] mb-3">Official sources</h2>
          <ul className="space-y-2">
            {update.sources.map((s) => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[14px] text-[#0096FF] hover:underline">
                  {s.label} <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
            ))}
          </ul>
          <p className="text-[12px] text-black/40 mt-4">
            Rules change often. Always confirm on the official government site before you pay a fee or make plans. Spotted something out of date?
            Email <a href="mailto:moveabroadng@gmail.com" className="underline">moveabroadng@gmail.com</a>.
          </p>
        </div>

        {related.length > 0 && (
          <div className="mt-6">
            <h2 className="text-[15px] font-bold text-[#04091A] mb-3">Step-by-step guides</h2>
            <div className="flex flex-wrap gap-2">
              {related.map((c) => (
                <Link key={c.code} to={`/country/${c.code}`} className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-black/[0.08] text-[13px] font-medium text-[#04091A] hover:border-[#0096FF]/40">
                  {c.flag} Move to {c.name} from Nigeria
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}

export default function Updates() {
  const { slug } = useParams();
  if (!slug) return <UpdatesList />;
  const update = findUpdate(slug);
  return update ? <Article update={update} /> : <PageNotFound />;
}
