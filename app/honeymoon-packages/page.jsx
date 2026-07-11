import HoneymoonPackagesPage from '../../src/views/HoneymoonPackagesPage';
import JsonLd from '../../src/components/JsonLd';
import { pageMetadata, breadcrumbJsonLd } from '../../src/lib/seo';

export const metadata = pageMetadata({
  title: 'Honeymoon Packages | Flyinco Travel & Tourism',
  description: 'Romantic honeymoon packages to the Maldives, Bali, Kerala and beyond, curated by Flyinco Travel & Tourism.',
  path: '/honeymoon-packages',
});

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Honeymoon Packages' }])} />
      <HoneymoonPackagesPage />
    </>
  );
}
