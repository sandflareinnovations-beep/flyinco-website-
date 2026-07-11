import SaudiPackagesPage from '../../src/views/SaudiPackagesPage';
import JsonLd from '../../src/components/JsonLd';
import { pageMetadata, breadcrumbJsonLd } from '../../src/lib/seo';

export const metadata = pageMetadata({
  title: 'Saudi Arabia Packages | Flyinco Travel & Tourism',
  description: 'Experience Saudi Arabia — Riyadh, Al-Ula, Jeddah, Diriyah, Farasan Islands and Umrah packages with Flyinco Travel & Tourism.',
  path: '/saudi-packages',
});

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Saudi Arabia Packages' }])} />
      <SaudiPackagesPage />
    </>
  );
}
