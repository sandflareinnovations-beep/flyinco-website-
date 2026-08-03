import SaudiPackagesPage from '../../src/views/SaudiPackagesPage';
import JsonLd from '../../src/components/seo/JsonLd';
import { pageMetadata, breadcrumbJsonLd } from '../../src/lib/seo';

export const metadata = pageMetadata({
  title: 'Saudi Arabia Packages | Flyinco Travel & Tourism',
  description: 'Experience Saudi Arabia — Riyadh, Al-Ula, Jeddah, Diriyah, Farasan Islands and Umrah packages with Flyinco Travel & Tourism.',
  path: '/saudi-packages',
});

// One trail, two consumers: the visible <Breadcrumbs> in the view and the
// BreadcrumbList markup below. They cannot disagree because they are the same
// array.
const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Saudi Arabia Packages' },
];

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <SaudiPackagesPage breadcrumbs={breadcrumbs} />
    </>
  );
}
