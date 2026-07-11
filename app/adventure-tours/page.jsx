import AdventurePackagesPage from '../../src/views/AdventurePackagesPage';
import JsonLd from '../../src/components/JsonLd';
import { pageMetadata, breadcrumbJsonLd } from '../../src/lib/seo';

export const metadata = pageMetadata({
  title: 'Adventure Tours | Flyinco Travel & Tourism',
  description: 'Adventure tours and experiences — diving, desert safaris, island escapes and more with Flyinco Travel & Tourism.',
  path: '/adventure-tours',
});

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Adventure Tours' }])} />
      <AdventurePackagesPage />
    </>
  );
}
