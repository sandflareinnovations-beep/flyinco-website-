import InternationalPackagesPage from '../../src/views/InternationalPackagesPage';
import JsonLd from '../../src/components/JsonLd';
import { pageMetadata, breadcrumbJsonLd } from '../../src/lib/seo';

export const metadata = pageMetadata({
  title: 'International Packages | Flyinco Travel & Tourism',
  description: 'Explore international holiday packages to the Maldives, Bali, Dubai and more with Flyinco Travel & Tourism.',
  path: '/international-packages',
});

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'International Packages' }])} />
      <InternationalPackagesPage />
    </>
  );
}
