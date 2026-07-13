import HomePage from '../src/views/HomePage';
import JsonLd from '../src/components/JsonLd';
import { pageMetadata, SITE_URL } from '../src/lib/seo';
import { alulaHero } from '../src/lib/heroImages';

export const metadata = pageMetadata({
  title: 'Flyinco — Travel Agency in Riyadh | Tours, Visas & Holidays',
  description:
    'Flyinco is a leading travel agency in Riyadh, Saudi Arabia — holiday packages, Riyadh & Al-Ula tours, visa services and corporate travel across KSA, Bahrain, UAE and India.',
  path: '/',
});

const travelAgencyJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  '@id': `${SITE_URL}/#travelagency`,
  name: 'Flyinco Travel & Tourism',
  alternateName: 'Flyinco',
  description:
    'Travel agency in Riyadh, Saudi Arabia offering holiday packages, Saudi tours, visa services and corporate travel management.',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/logo.png`,
  email: 'info@flyinco.com',
  telephone: '+966556182021',
  areaServed: [
    { '@type': 'City', name: 'Riyadh' },
    { '@type': 'Country', name: 'Saudi Arabia' },
    { '@type': 'Country', name: 'Bahrain' },
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'India' },
  ],
  knowsAbout: [
    'Riyadh city tours',
    'Saudi Arabia holiday packages',
    'Visa services',
    'Corporate travel management',
    'Honeymoon packages',
  ],
  address: [
    {
      '@type': 'PostalAddress',
      addressLocality: 'Riyadh',
      addressCountry: 'SA',
    },
    {
      '@type': 'PostalAddress',
      addressLocality: 'Manama',
      addressCountry: 'BH',
    },
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+966556182021',
      contactType: 'customer service',
      areaServed: 'SA',
    },
    {
      '@type': 'ContactPoint',
      telephone: '+97333372021',
      contactType: 'customer service',
      areaServed: 'BH',
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
      <JsonLd data={travelAgencyJsonLd} />
      <HomePage />
    </>
  );
}
