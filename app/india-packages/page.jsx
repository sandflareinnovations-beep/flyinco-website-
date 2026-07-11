import IndiaPackagesPage from '../../src/views/IndiaPackagesPage';
import JsonLd from '../../src/components/JsonLd';
import { pageMetadata, breadcrumbJsonLd } from '../../src/lib/seo';

export const metadata = pageMetadata({
  title: 'India Packages | Flyinco Travel & Tourism',
  description: 'Discover India tour packages — Kerala backwaters, Rajasthan heritage, Andaman islands and more with Flyinco Travel & Tourism.',
  path: '/india-packages',
});

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'India Packages' }])} />
      <IndiaPackagesPage />
    </>
  );
}
