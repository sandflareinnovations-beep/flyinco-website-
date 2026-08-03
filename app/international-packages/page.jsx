import InternationalPackagesPage from '../../src/views/InternationalPackagesPage';
import JsonLd from '../../src/components/seo/JsonLd';
import { pageMetadata, breadcrumbJsonLd } from '../../src/lib/seo';

export const metadata = pageMetadata({
  title: 'International Packages | Flyinco Travel & Tourism',
  description: 'Explore international holiday packages to the Maldives, Bali, Dubai and more with Flyinco Travel & Tourism.',
  path: '/international-packages',
});

// One trail, two consumers: the visible <Breadcrumbs> in the view and the
// BreadcrumbList markup below. They cannot disagree because they are the same
// array.
const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'International Packages' },
];

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <InternationalPackagesPage breadcrumbs={breadcrumbs} />
    </>
  );
}
