import AdventurePackagesPage from '../../src/views/AdventurePackagesPage';
import JsonLd from '../../src/components/seo/JsonLd';
import { pageMetadata, breadcrumbJsonLd } from '../../src/lib/seo';

export const metadata = pageMetadata({
  title: 'Adventure Tours | Flyinco Travel & Tourism',
  description: 'Adventure tours and experiences — diving, desert safaris, island escapes and more with Flyinco Travel & Tourism.',
  path: '/adventure-tours',
});

// One trail, two consumers: the visible <Breadcrumbs> in the view and the
// BreadcrumbList markup below. They cannot disagree because they are the same
// array.
const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Adventure Tours' },
];

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <AdventurePackagesPage breadcrumbs={breadcrumbs} />
    </>
  );
}
