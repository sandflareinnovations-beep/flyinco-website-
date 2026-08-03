import { headOffice, postalAddress } from '../data/offices';

export const SITE_URL = 'https://www.flyinco.com';
export const SITE_NAME = 'Flyinco Travel & Tourism';

// Stable node identifiers. Every page that needs to point at the business
// references ORG_ID rather than restating the organisation, so search engines
// resolve one entity across the site instead of one per page.
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

// Turns a site-relative path or a bundled-asset URL into an absolute URL.
// Remote URLs (Unsplash images) keep their origin.
//
// encodeURI matters here: several bundled package photos are named
// "WhatsApp Image 2026-06-23 at 5.30.29 PM.jpeg", so the emitted asset path
// contains spaces. A browser fixes that up for <img src>, but a crawler
// fetching the URL out of JSON-LD does not — it has to be percent-encoded or
// the image is simply unreachable. Reserved characters (?, &, =, /, #) are
// left intact by encodeURI, so query-string image URLs survive unchanged.
export function absoluteUrl(url) {
  if (!url) return undefined;
  const absolute = /^https?:\/\//i.test(url)
    ? url
    : `${SITE_URL}${url.startsWith('/') ? '' : '/'}${url}`;
  return encodeURI(absolute);
}

// Builds the shared metadata shape (canonical + Open Graph + Twitter) for a route.
export function pageMetadata({ title, description, path, image = '/logo.png' }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      type: 'website',
      images: [{ url: image }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

// items: [{ name, path }] — path omitted for the current page.
export function breadcrumbJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      ...(item.path ? { item: `${SITE_URL}${item.path}` } : {}),
    })),
  };
}

// ---------------------------------------------------------------------------
// Organisation identity
// ---------------------------------------------------------------------------

// Address, geo and opening hours now come from src/data/offices.js, which is
// the single NAP source shared with /contact and the footer — the three have
// to agree character for character or the citation is weakened. The TODOs for
// the values still missing live there.
const GEO = headOffice.geo;
const OPENING_HOURS = headOffice.openingHours;

// TODO(flyinco): add the verified profile URLs Google should use to reconcile
// this business — Google Business Profile, Instagram, LinkedIn, Facebook, X.
// Only URLs the business actually controls belong here; a wrong sameAs merges
// the entity with someone else's.
const SAME_AS = [];

const OFFER_CATALOG = [
  { name: 'Holiday Packages', url: `${SITE_URL}/saudi-packages` },
  { name: 'Visa Services', url: `${SITE_URL}/visa` },
  { name: 'Corporate Travel Management', url: `${SITE_URL}/corporate-travel` },
  { name: 'Chauffeur Service', url: null },
];

// TravelAgency is a subtype of LocalBusiness, so the multi-type array is
// redundant strictly speaking, but it is what Google's local-business
// documentation matches on, and schema.org permits it.
export const organizationJsonLd = {
  '@type': ['TravelAgency', 'LocalBusiness'],
  '@id': ORG_ID,
  name: SITE_NAME,
  alternateName: 'Flyinco',
  description:
    'Full-service travel agency in Riyadh, Saudi Arabia offering holiday packages, Saudi tours, visa services, corporate travel management and chauffeur services.',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    '@id': `${SITE_URL}/#logo`,
    url: `${SITE_URL}/logo.png`,
    contentUrl: `${SITE_URL}/logo.png`,
    caption: SITE_NAME,
  },
  image: { '@id': `${SITE_URL}/#logo` },
  telephone: '+966556182021',
  email: 'info@flyinco.com',
  address: postalAddress(headOffice),
  ...(GEO
    ? {
        geo: {
          '@type': 'GeoCoordinates',
          latitude: GEO.latitude,
          longitude: GEO.longitude,
        },
      }
    : {}),
  areaServed: [
    { '@type': 'Country', name: 'Saudi Arabia' },
    { '@type': 'Country', name: 'Bahrain' },
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'India' },
  ],
  availableLanguage: [
    { '@type': 'Language', name: 'English', alternateName: 'en' },
    { '@type': 'Language', name: 'Arabic', alternateName: 'ar' },
  ],
  ...(OPENING_HOURS
    ? {
        openingHoursSpecification: OPENING_HOURS.map((slot) => ({
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: slot.days,
          opens: slot.opens,
          closes: slot.closes,
        })),
      }
    : {}),
  ...(SAME_AS.length ? { sameAs: SAME_AS } : {}),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Flyinco Travel Services',
    itemListElement: OFFER_CATALOG.map(({ name, url }, idx) => ({
      '@type': 'Offer',
      position: idx + 1,
      itemOffered: {
        '@type': 'Service',
        name,
        ...(url ? { url } : {}),
        provider: { '@id': ORG_ID },
      },
    })),
  },
};

// No site-wide search endpoint exists (the boxes on the category pages are
// client-side filters over already-rendered cards, not a /search route), so no
// SearchAction is declared. A SearchAction pointing at a URL that returns a
// 404 is an invalid potentialAction.
export const websiteJsonLd = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: SITE_URL,
  name: SITE_NAME,
  inLanguage: 'en',
  publisher: { '@id': ORG_ID },
};

// Rendered once in the root layout so the organisation and website nodes are
// present on every page and can be referenced by @id from page-level schema.
export const siteGraphJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [organizationJsonLd, websiteJsonLd],
};

// ---------------------------------------------------------------------------
// Page-level builders
// ---------------------------------------------------------------------------

// faqs: [{ q, a }] — must be the same array the page renders, so the markup
// can never drift from the visible accordion.
export function faqPageJsonLd(faqs, { path } = {}) {
  if (!faqs?.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    ...(path ? { '@id': `${SITE_URL}${path}#faq` } : {}),
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

export function serviceJsonLd({ name, serviceType, description, path, areaServed = 'Saudi Arabia', offerCatalog }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    ...(path ? { '@id': `${SITE_URL}${path}#service`, url: `${SITE_URL}${path}` } : {}),
    name,
    serviceType,
    ...(description ? { description } : {}),
    provider: { '@id': ORG_ID },
    areaServed: { '@type': 'Country', name: areaServed },
    ...(offerCatalog?.length
      ? {
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name,
            itemListElement: offerCatalog.map((item, idx) => ({
              '@type': 'Offer',
              position: idx + 1,
              itemOffered: {
                '@type': 'Service',
                name: item.name,
                ...(item.description ? { description: item.description } : {}),
                provider: { '@id': ORG_ID },
              },
            })),
          },
        }
      : {}),
  };
}

// Maps a package category onto the audience the trip is actually sold to.
const TOURIST_TYPES = {
  Saudi: ['Family', 'Cultural'],
  India: ['Family'],
  International: ['Family'],
  Honeymoon: ['Honeymoon', 'Couples'],
  Adventure: ['Adventure'],
};

export function touristTripJsonLd(pkg) {
  // itinerary entries use either a `day`/`stop` shape (multi-day tours) or a
  // `time` shape (single-day timed tours); both carry title + detail.
  //
  // The "Day N: " prefix is only added when the trip actually spans more than
  // one day. Several Saudi tours are single-day multi-stop itineraries where
  // every entry carries `day: 1`, and prefixing all six stops with "Day 1:"
  // would be noise rather than structure.
  const itinerary = pkg.itinerary || [];
  const distinctDays = new Set(itinerary.map((item) => item.day).filter(Boolean));
  const useDayPrefix = distinctDays.size > 1;

  const stops = itinerary.map((item, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    item: {
      '@type': 'TouristAttraction',
      name: useDayPrefix && item.day ? `Day ${item.day}: ${item.title}` : item.title,
      ...(item.detail ? { description: item.detail } : {}),
    },
  }));

  // Every package is currently quoted individually (`price` is an empty string
  // across packagesData), so no Offer is emitted. An Offer with price "0" or an
  // empty string is an invalid offer and Google flags it. When real prices are
  // added to packagesData this block starts emitting on its own.
  const price = typeof pkg.price === 'string' ? pkg.price.replace(/[^0-9.]/g, '') : '';
  const hasPrice = price !== '' && Number(price) > 0;

  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    '@id': `${SITE_URL}/package/${pkg.slug}#trip`,
    name: pkg.title,
    description: pkg.desc,
    url: `${SITE_URL}/package/${pkg.slug}`,
    ...(pkg.img ? { image: absoluteUrl(pkg.img) } : {}),
    ...(TOURIST_TYPES[pkg.category] ? { touristType: TOURIST_TYPES[pkg.category] } : {}),
    provider: { '@id': ORG_ID },
    ...(stops.length
      ? {
          itinerary: {
            '@type': 'ItemList',
            numberOfItems: stops.length,
            itemListElement: stops,
          },
        }
      : {}),
    ...(hasPrice
      ? {
          offers: {
            '@type': 'Offer',
            price,
            priceCurrency: 'SAR',
            availability: 'https://schema.org/InStock',
            url: `${SITE_URL}/package/${pkg.slug}`,
          },
        }
      : {}),
  };
}

export function truncate(text, max = 155) {
  if (!text) return '';
  return text.length <= max ? text : `${text.slice(0, max - 1).trimEnd()}…`;
}
