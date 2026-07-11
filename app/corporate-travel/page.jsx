import CorporateTravelPage from '../../src/views/CorporateTravelPage';
import JsonLd from '../../src/components/JsonLd';
import { pageMetadata, breadcrumbJsonLd } from '../../src/lib/seo';

export const metadata = pageMetadata({
  title: 'Corporate Travel | Flyinco Travel & Tourism',
  description: 'Corporate travel management, business trips and MICE services by Flyinco Travel & Tourism.',
  path: '/corporate-travel',
});

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Corporate Travel' }])} />
      <CorporateTravelPage />
    </>
  );
}
