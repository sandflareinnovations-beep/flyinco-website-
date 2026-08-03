// Single source of truth for Name/Address/Phone (NAP) across the site.
//
// NAP consistency is the whole point of this file: Google cross-references the
// address shown on the contact page, the one in the footer, and the one in the
// LocalBusiness markup. If those three disagree even slightly the citation is
// weakened, which is exactly what happens when the address is retyped in three
// components. Everything that renders an address imports it from here.
//
// ---------------------------------------------------------------------------
// TODO(flyinco): every `null` below is a detail that has not been supplied yet.
// They are null rather than the string "TODO" on purpose — this page is
// indexable, and shipping "TODO: street address" as visible text (or worse, as
// a `streetAddress` value in structured data) publishes a placeholder as if it
// were a fact about the business. While null, the field is omitted from both
// the rendered page and the JSON-LD. Fill in the value and both start
// rendering with no other code change.
// ---------------------------------------------------------------------------

export const offices = [
  {
    id: 'riyadh',
    isHeadOffice: true,
    city: 'Riyadh',
    region: 'Riyadh Province',
    country: 'Saudi Arabia',
    countryCode: 'SA',

    streetAddress: null, // TODO(flyinco): Riyadh street address (building + street)
    district: null, // TODO(flyinco): Riyadh district / neighbourhood (e.g. Al-Olaya)
    postalCode: null, // TODO(flyinco): Riyadh postal code
    geo: null, // TODO(flyinco): { latitude, longitude } of the Riyadh office

    tel: '+966556182021',
    telDisplay: '+966 55 618 2021',
    whatsapp: '966556182021',
    email: 'info@flyinco.com',

    openingHours: null, // TODO(flyinco): [{ days: ['Sunday', …], opens: '09:00', closes: '18:00' }]
  },
  {
    id: 'bahrain',
    city: 'Manama',
    region: null, // TODO(flyinco): Bahrain governorate, if you want it shown
    country: 'Bahrain',
    countryCode: 'BH',

    streetAddress: null, // TODO(flyinco): Manama street address
    district: null, // TODO(flyinco): Manama district / block
    postalCode: null, // TODO(flyinco): Manama postal code
    geo: null,

    tel: '+97333372021',
    telDisplay: '+973 3337 2021',
    whatsapp: '97333372021',
    email: 'info@flyinco.com',

    openingHours: null, // TODO(flyinco): Bahrain opening hours
  },
  {
    id: 'dubai',
    city: 'Dubai',
    region: null,
    country: 'United Arab Emirates',
    countryCode: 'AE',

    streetAddress: null, // TODO(flyinco): Dubai street address
    district: null, // TODO(flyinco): Dubai district (e.g. Deira, Business Bay)
    postalCode: null, // TODO(flyinco): Dubai PO box
    geo: null,

    tel: null, // TODO(flyinco): Dubai phone number
    telDisplay: null,
    whatsapp: null, // TODO(flyinco): Dubai WhatsApp number, if different
    email: 'info@flyinco.com',

    openingHours: null, // TODO(flyinco): Dubai opening hours
  },
  {
    id: 'mumbai',
    city: 'Mumbai',
    region: 'Maharashtra',
    country: 'India',
    countryCode: 'IN',

    streetAddress: null, // TODO(flyinco): Mumbai street address
    district: null, // TODO(flyinco): Mumbai district / suburb
    postalCode: null, // TODO(flyinco): Mumbai PIN code
    geo: null,

    tel: null, // TODO(flyinco): Mumbai phone number
    telDisplay: null,
    whatsapp: '966556182021', // routed to the Riyadh desk until a local number exists
    email: 'visa@flyinco.com',

    openingHours: null, // TODO(flyinco): Mumbai opening hours
  },
];

export const headOffice = offices.find((o) => o.isHeadOffice);

// The address as one line, for footer citations and meta descriptions. Only
// the parts that exist are joined, so a partially-filled office still reads
// correctly rather than producing "  , Riyadh".
export function formatAddressLine(office) {
  return [office.streetAddress, office.district, office.city, office.postalCode, office.country]
    .filter(Boolean)
    .join(', ');
}

// schema.org PostalAddress, omitting whatever has not been supplied.
// The district belongs in streetAddress, not addressLocality — addressLocality
// is the city, and setting both would leave the city overwritten by the
// neighbourhood.
export function postalAddress(office) {
  const street = [office.streetAddress, office.district].filter(Boolean).join(', ');
  return {
    '@type': 'PostalAddress',
    ...(street ? { streetAddress: street } : {}),
    addressLocality: office.city,
    ...(office.region ? { addressRegion: office.region } : {}),
    ...(office.postalCode ? { postalCode: office.postalCode } : {}),
    addressCountry: office.countryCode,
  };
}

export function openingHoursSpecification(office) {
  if (!office.openingHours?.length) return undefined;
  return office.openingHours.map((slot) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: slot.days,
    opens: slot.opens,
    closes: slot.closes,
  }));
}
