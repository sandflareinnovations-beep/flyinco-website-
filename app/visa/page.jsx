import VisaPage from '../../src/views/VisaPage';
import JsonLd from '../../src/components/JsonLd';
import { pageMetadata, breadcrumbJsonLd } from '../../src/lib/seo';

export const metadata = pageMetadata({
  title: 'Visa Services | Flyinco Travel & Tourism',
  description: 'Fast and reliable visa assistance for Saudi Arabia, UAE, Schengen and destinations worldwide with Flyinco Travel & Tourism.',
  path: '/visa',
});

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Visa Services' }])} />
      <VisaPage />
    </>
  );
}
