import { packagesData } from '../../src/data/packagesData';
import { SITE_URL } from '../../src/lib/seo';

// Hand-rolled rather than Next's app/sitemap.js convention, for one reason:
// that convention serialises the XML itself and offers no hook to emit an
// <?xml-stylesheet?> processing instruction. Without the stylesheet the file
// renders as a blank page in Safari, which is what prompted this. The URL set
// and the emitted fields are otherwise unchanged.
//
// Statically generated at build time like every other route here — nothing in
// this handler reads the request.
export const dynamic = 'force-static';

const staticRoutes = [
    '',
    '/about',
    '/visa',
    '/saudi-packages',
    '/india-packages',
    '/international-packages',
    '/honeymoon-packages',
    '/adventure-tours',
    '/corporate-travel',
    '/contact',
];

// Slugs are URL-safe today, but a sitemap that silently emits malformed XML the
// day someone adds an ampersand to one is not worth the two lines saved.
const escapeXml = (value) =>
    String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');

const urlEntry = ({ path, lastModified, changeFrequency, priority }) => `<url>
<loc>${escapeXml(`${SITE_URL}${path}`)}</loc>
<lastmod>${lastModified}</lastmod>
<changefreq>${changeFrequency}</changefreq>
<priority>${priority}</priority>
</url>`;

export function GET() {
    const lastModified = new Date().toISOString();

    const entries = [
        ...staticRoutes.map((path) => ({
            path,
            lastModified,
            changeFrequency: 'weekly',
            priority: path === '' ? '1.0' : '0.8',
        })),
        // Read from the same source the package pages generate from, so a new
        // package appears here without anyone remembering to add it.
        ...packagesData.map((pkg) => ({
            path: `/package/${pkg.slug}`,
            lastModified,
            changeFrequency: 'monthly',
            priority: '0.7',
        })),
    ];

    const body = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map(urlEntry).join('\n')}
</urlset>
`;

    return new Response(body, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
        },
    });
}
