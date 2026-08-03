import IndiaPackagesPage from '../../src/views/IndiaPackagesPage';
import JsonLd from '../../src/components/seo/JsonLd';
import { pageMetadata, breadcrumbJsonLd } from '../../src/lib/seo';

export const metadata = pageMetadata({
  title: 'India Packages | Flyinco Travel & Tourism',
  description: 'Discover India tour packages — Kerala backwaters, Rajasthan heritage, Andaman islands and more with Flyinco Travel & Tourism.',
  path: '/india-packages',
});

// One trail, two consumers: the visible <Breadcrumbs> in the view and the
// BreadcrumbList markup below. They cannot disagree because they are the same
// array.
const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'India Packages' },
];

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <IndiaPackagesPage breadcrumbs={breadcrumbs} />
    </>
  );
}
