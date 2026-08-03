import HomePage from '../src/views/HomePage';
import JsonLd from '../src/components/seo/JsonLd';
import { pageMetadata, ORG_ID, SITE_URL } from '../src/lib/seo';
import { alulaHero } from '../src/lib/heroImages';

export const metadata = pageMetadata({
  title: 'Flyinco — Travel Agency in Riyadh | Saudi Tours, Visas & Holidays',
  description:
    'Travel agency in Riyadh, Saudi Arabia. Riyadh, Jeddah, Al-Balad and Al-Ula tours, Umrah and visa services, holiday packages and corporate travel — offices in Saudi Arabia, Bahrain and India.',
  path: '/',
});

// The TravelAgency node itself now lives in the root layout's @graph, so it is
// present on every route. The home page only adds the facts that are specific
// to it: the topics the page actually covers, and the extra branch contacts
// rendered by the OurOffices section.
//
// The home page carries no visible breadcrumb trail (it is the root), so no
// BreadcrumbList is emitted here — a single-item breadcrumb pointing at the
// page you are already on is noise, not navigation.
//
// The homepage FAQPage is emitted by RiyadhAgencySection, next to the accordion
// it describes, so the two cannot drift apart.
const homeOrgDetailJsonLd = {
  '@context': 'https://schema.org',
  '@id': ORG_ID,
  knowsAbout: [
    'Riyadh city tours',
    'Jeddah tours',
    'Historic Jeddah Al-Balad walking tours',
    'Al-Ula and Hegra tours',
    'Diriyah heritage tours',
    'Red Sea diving and snorkelling',
    'Saudi Arabia holiday packages',
    'Umrah packages',
    'Saudi visit and tourist visa services',
    'Corporate travel management',
    'Honeymoon packages',
    'India holiday packages',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+966556182021',
      contactType: 'customer service',
      areaServed: 'SA',
      availableLanguage: ['en', 'ar'],
    },
    {
      '@type': 'ContactPoint',
      telephone: '+97333372021',
      contactType: 'customer service',
      areaServed: 'BH',
      availableLanguage: ['en', 'ar'],
    },
    {
      '@type': 'ContactPoint',
      email: 'visa@flyinco.com',
      contactType: 'reservations',
      areaServed: 'IN',
      availableLanguage: ['en'],
    },
  ],
  subOrganization: [
    {
      '@type': 'TravelAgency',
      '@id': `${SITE_URL}/#bahrain-office`,
      name: 'Flyinco Travel & Tourism — Bahrain',
      telephone: '+97333372021',
      parentOrganization: { '@id': ORG_ID },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Manama',
        addressCountry: 'BH',
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      {/* First hero slide (src/components/Hero.jsx) — preloaded as the home LCP image. */}
      <link
        rel="preload"
        as="image"
        href={alulaHero.src}
        imageSrcSet={alulaHero.srcSet}
        imageSizes={alulaHero.sizes}
        fetchPriority="high"
      />
      <JsonLd data={homeOrgDetailJsonLd} />
      <HomePage />
    </>
  );
}
