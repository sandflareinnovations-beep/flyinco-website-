import AboutPage from '../../src/views/AboutPage';
import JsonLd from '../../src/components/JsonLd';
import { pageMetadata, breadcrumbJsonLd, SITE_URL } from '../../src/lib/seo';

export const metadata = pageMetadata({
  title: 'About Flyinco — Travel Agency in Riyadh Since 2015',
  description:
    'Flyinco Travel & Tourism is a travel agency founded in Riyadh, Saudi Arabia in 2015, arranging Saudi tours, Umrah and visa services, holiday packages and corporate travel, with desks in Bahrain, the UAE and India.',
  path: '/about',
});

// The AboutPage node points at the TravelAgency declared on the home page via
// its @id, so the two are read as one entity rather than two businesses that
// happen to share a name. Only facts confirmed by the business are asserted
// here — foundingDate is 2015; no licence number, headcount or revenue is
// claimed, because unverified claims in schema are worse than absent ones.
const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${SITE_URL}/about#aboutpage`,
  url: `${SITE_URL}/about`,
  name: 'About Flyinco Travel & Tourism',
  description:
    'The history, office network and services of Flyinco Travel & Tourism, a travel agency founded in Riyadh, Saudi Arabia in 2015.',
  mainEntity: {
    '@type': 'TravelAgency',
    '@id': `${SITE_URL}/#travelagency`,
    name: 'Flyinco Travel & Tourism',
    alternateName: 'Flyinco',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    email: 'info@flyinco.com',
    telephone: '+966556182021',
    foundingDate: '2015',
    foundingLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Riyadh',
        addressCountry: 'SA',
      },
    },
    areaServed: [
      { '@type': 'Country', name: 'Saudi Arabia' },
      { '@type': 'Country', name: 'Bahrain' },
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'India' },
    ],
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'About' },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={aboutJsonLd} />
      <JsonLd data={breadcrumb} />
      <AboutPage />
    </>
  );
}
