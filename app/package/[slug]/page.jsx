import { notFound } from 'next/navigation';
import ItineraryPage from '../../../src/views/ItineraryPage';
import JsonLd from '../../../src/components/seo/JsonLd';
import { packagesData } from '../../../src/data/packagesData';
import {
  pageMetadata,
  breadcrumbJsonLd,
  touristTripJsonLd,
  truncate,
} from '../../../src/lib/seo';

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

  const tripJsonLd = touristTripJsonLd(pkg);

  // One trail, two consumers: the visible <Breadcrumbs> in ItineraryPage and
  // the BreadcrumbList markup below. Previously the view rendered its own
  // `{pkg.category} Packages` label while the markup used the categoryPaths
  // display name, so the two disagreed on every Saudi and Adventure package
  // ("Saudi Packages" vs "Saudi Arabia Packages"). Sharing the array removes
  // the possibility.
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    ...(category ? [{ name: category.name, path: category.path }] : []),
    { name: pkg.name },
  ];

  return (
    <>
      <JsonLd data={tripJsonLd} />
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <ItineraryPage slug={slug} breadcrumbs={breadcrumbs} />
    </>
  );
}
