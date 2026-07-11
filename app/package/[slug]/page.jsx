import { notFound } from 'next/navigation';
import ItineraryPage from '../../../src/views/ItineraryPage';
import JsonLd from '../../../src/components/JsonLd';
import { packagesData } from '../../../src/data/packagesData';
import { pageMetadata, breadcrumbJsonLd, truncate, SITE_URL } from '../../../src/lib/seo';

const categoryPaths = {
  Saudi: { name: 'Saudi Arabia Packages', path: '/saudi-packages' },
  India: { name: 'India Packages', path: '/india-packages' },
  International: { name: 'International Packages', path: '/international-packages' },
  Honeymoon: { name: 'Honeymoon Packages', path: '/honeymoon-packages' },
  Adventure: { name: 'Adventure Tours', path: '/adventure-tours' },
};

export function generateStaticParams() {
  return packagesData.map((pkg) => ({ slug: pkg.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const pkg = packagesData.find((p) => p.slug === slug);
  if (!pkg) return {};
  return pageMetadata({
    title: `${pkg.name} | Flyinco Travel & Tourism`,
    description: truncate(pkg.desc),
    path: `/package/${pkg.slug}`,
    image: pkg.img,
  });
}

export default async function Page({ params }) {
  const { slug } = await params;
  const pkg = packagesData.find((p) => p.slug === slug);
  if (!pkg) notFound();

  const category = categoryPaths[pkg.category];

  const tripJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: pkg.title,
    description: pkg.desc,
    url: `${SITE_URL}/package/${pkg.slug}`,
    image: pkg.img,
    touristType: pkg.category,
    itinerary: {
      '@type': 'ItemList',
      itemListElement: pkg.itinerary.map((item, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: item.title,
      })),
    },
    provider: {
      '@type': 'TravelAgency',
      name: 'Flyinco Travel & Tourism',
      url: SITE_URL,
    },
  };

  const breadcrumbs = breadcrumbJsonLd([
    { name: 'Home', path: '/' },
    ...(category ? [{ name: category.name, path: category.path }] : []),
    { name: pkg.name },
  ]);

  return (
    <>
      <JsonLd data={tripJsonLd} />
      <JsonLd data={breadcrumbs} />
      <ItineraryPage slug={slug} />
    </>
  );
}
