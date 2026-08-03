import VisaPage from '../../src/views/VisaPage';
import JsonLd from '../../src/components/seo/JsonLd';
import { visaFaqs, visaTypeNames } from '../../src/data/visaFaqs';
import {
  pageMetadata,
  breadcrumbJsonLd,
  faqPageJsonLd,
  serviceJsonLd,
} from '../../src/lib/seo';

export const metadata = pageMetadata({
  title: 'Visa Services | Flyinco Travel & Tourism',
  description: 'Fast and reliable visa assistance for Saudi Arabia, UAE, Schengen and destinations worldwide with Flyinco Travel & Tourism.',
  path: '/visa',
});

// The offer catalog lists exactly the six visa categories VisaTypes.jsx renders
// on this page — nothing is claimed that a visitor cannot see.
const service = serviceJsonLd({
  name: 'Visa Services',
  serviceType: 'Visa Assistance',
  description:
    'End-to-end visa assistance from Riyadh: document guidance, eligibility checks, application preparation and embassy submission for Saudi Arabia and destinations worldwide.',
  path: '/visa',
  areaServed: 'Saudi Arabia',
  offerCatalog: visaTypeNames.map((name) => ({ name })),
});

// Built from the same array VisaFAQ.jsx renders, so every Q&A in the markup is
// visible on the page.
const faq = faqPageJsonLd(visaFaqs, { path: '/visa' });

// Matches the visible breadcrumb trail in VisaHero.jsx (Home > Visa Services).
const breadcrumb = breadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Visa Services' },
]);

export default function Page() {
  return (
    <>
      <JsonLd data={service} />
      <JsonLd data={faq} />
      <JsonLd data={breadcrumb} />
      <VisaPage />
    </>
  );
}
