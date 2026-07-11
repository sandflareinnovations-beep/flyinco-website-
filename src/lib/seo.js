export const SITE_URL = 'https://www.flyinco.com';
export const SITE_NAME = 'Flyinco Travel & Tourism';

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

export function truncate(text, max = 155) {
  if (!text) return '';
  return text.length <= max ? text : `${text.slice(0, max - 1).trimEnd()}…`;
}
