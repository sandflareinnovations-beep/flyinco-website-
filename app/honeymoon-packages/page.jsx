import HoneymoonPackagesPage from '../../src/views/HoneymoonPackagesPage';
import JsonLd from '../../src/components/seo/JsonLd';
import { pageMetadata, breadcrumbJsonLd } from '../../src/lib/seo';

export const metadata = pageMetadata({
  title: 'Honeymoon Packages | Flyinco Travel & Tourism',
  description: 'Romantic honeymoon packages to the Maldives, Bali, Kerala and beyond, curated by Flyinco Travel & Tourism.',
  path: '/honeymoon-packages',
});

// One trail, two consumers: the visible <Breadcrumbs> in the view and the
// BreadcrumbList markup below. They cannot disagree because they are the same
// array.
const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Honeymoon Packages' },
];

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <HoneymoonPackagesPage breadcrumbs={breadcrumbs} />
    </>
  );
}
