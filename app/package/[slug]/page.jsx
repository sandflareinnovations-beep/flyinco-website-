import { notFound } from 'next/navigation';
import ItineraryPage from '../../../src/views/ItineraryPage';
import { packagesData } from '../../../src/data/packagesData';

export function generateStaticParams() {
  return packagesData.map((pkg) => ({ slug: pkg.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const pkg = packagesData.find((p) => p.slug === slug);
  if (!pkg) return {};
  return {
    title: `${pkg.title} | Flyinco Travel & Tourism`,
    description: pkg.desc,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const pkg = packagesData.find((p) => p.slug === slug);
  if (!pkg) notFound();
  return <ItineraryPage slug={slug} />;
}
