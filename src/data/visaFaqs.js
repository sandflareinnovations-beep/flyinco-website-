// The FAQ shown on /visa. Kept here rather than inside VisaFAQ.jsx so the
// route's FAQPage schema is built from the exact same array the accordion
// renders — the markup cannot drift from the visible copy.
export const visaFaqs = [
  {
    q: 'What is the processing time for a visa?',
    a: 'Processing times vary greatly depending on the country and type of visa. Generally, it can take anywhere from 5 working days to several weeks. We recommend applying at least a month in advance.',
  },
  {
    q: 'How much are the visa fees?',
    a: 'Visa fees are determined by the respective embassies and are subject to change. They depend on the visa type, duration, and the nationality of the applicant.',
  },
  {
    q: 'Do I need a travel insurance?',
    a: 'For many countries, travel insurance is a mandatory requirement for visa approval. Even if not mandatory, we highly recommend it for your financial protection during travel.',
  },
  {
    q: 'What documents are required?',
    a: 'Standard documents usually include a valid passport, recent photographs, flight itinerary, hotel booking, and proof of financial means. Specific requirements vary by country.',
  },
];

// The visa categories shown by VisaTypes.jsx on /visa. Used for the Service
// node's offer catalog so it lists only services the page actually advertises.
export const visaTypeNames = [
  'Tourist Visa',
  'Business Visa',
  'Umrah Visa',
  'Student Visa',
  'Work Visa',
  'Visa Extension',
];
