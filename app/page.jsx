import HomePage from '../src/views/HomePage';
import JsonLd from '../src/components/JsonLd';
import { pageMetadata, SITE_URL } from '../src/lib/seo';

export const metadata = pageMetadata({
  title: 'Flyinco | Travel & Tourism',
  description:
    'Flyinco Travel & Tourism — holiday packages, Saudi Arabia experiences, visa services and corporate travel across KSA, Bahrain, UAE and India.',
  path: '/',
});

const travelAgencyJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: 'Flyinco Travel & Tourism',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  email: 'info@flyinco.com',
  telephone: '+966556182021',
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
      <JsonLd data={travelAgencyJsonLd} />
      <HomePage />
    </>
  );
}
