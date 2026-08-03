import ContactPage from '../../src/views/ContactPage';
import JsonLd from '../../src/components/seo/JsonLd';
import { pageMetadata, breadcrumbJsonLd, ORG_ID, SITE_URL } from '../../src/lib/seo';
import {
  offices,
  headOffice,
  postalAddress,
  openingHoursSpecification,
} from '../../src/data/offices';

export const metadata = pageMetadata({
  title: 'Contact Flyinco Travel & Tourism — Riyadh, Saudi Arabia',
  description:
    'Contact Flyinco Travel & Tourism. Head office in Riyadh, Saudi Arabia with desks in Manama, Dubai and Mumbai. Call +966 55 618 2021, WhatsApp, or send an enquiry.',
  path: '/contact',
});

// One trail, two consumers: the visible <Breadcrumbs> in the view and the
// BreadcrumbList markup below.
const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Contact' },
];

// The head-office node. This is the same entity as the organisation declared in
// the root layout's @graph, so it carries the same @id and adds only what this
// page contributes: the postal address, geo and opening hours.
//
// Address, geo and opening hours are all sourced from src/data/offices.js and
// omitted while unset. Emitting a placeholder streetAddress or a 0,0 geo would
// publish a wrong location as an asserted fact — worse for local ranking than
// having no address property at all.
const hours = openingHoursSpecification(headOffice);

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['TravelAgency', 'LocalBusiness'],
  '@id': ORG_ID,
  name: 'Flyinco Travel & Tourism',
  url: SITE_URL,
  telephone: headOffice.tel,
  email: headOffice.email,
  address: postalAddress(headOffice),
  ...(headOffice.geo
    ? {
        geo: {
          '@type': 'GeoCoordinates',
          latitude: headOffice.geo.latitude,
          longitude: headOffice.geo.longitude,
        },
      }
    : {}),
  ...(hours ? { openingHoursSpecification: hours } : {}),
  // Branch desks. Each is a distinct place with its own address, so they are
  // separate nodes rather than extra addresses on the head office.
  subOrganization: offices
    .filter((o) => !o.isHeadOffice)
    .map((o) => ({
      '@type': 'TravelAgency',
      '@id': `${SITE_URL}/#${o.id}-office`,
      name: `Flyinco Travel & Tourism — ${o.city}`,
      parentOrganization: { '@id': ORG_ID },
      address: postalAddress(o),
      ...(o.tel ? { telephone: o.tel } : {}),
      ...(o.email ? { email: o.email } : {}),
      ...(o.geo
        ? { geo: { '@type': 'GeoCoordinates', latitude: o.geo.latitude, longitude: o.geo.longitude } }
        : {}),
      ...(openingHoursSpecification(o) ? { openingHoursSpecification: openingHoursSpecification(o) } : {}),
    })),
};

const contactPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${SITE_URL}/contact#contactpage`,
  url: `${SITE_URL}/contact`,
  name: 'Contact Flyinco Travel & Tourism',
  mainEntity: { '@id': ORG_ID },
};

export default function Page() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd} />
      <JsonLd data={contactPageJsonLd} />
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <ContactPage breadcrumbs={breadcrumbs} />
    </>
  );
}
