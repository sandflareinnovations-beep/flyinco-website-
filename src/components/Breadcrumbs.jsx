import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

// Visible breadcrumb trail. Takes the same `[{ name, path }]` array that
// `breadcrumbJsonLd()` consumes — each route builds the trail once and passes
// it to both, so the rendered crumbs and the BreadcrumbList markup cannot
// drift apart. Google treats a BreadcrumbList that disagrees with the visible
// trail as invalid, which is exactly what happens when the two are maintained
// by hand in separate files.
//
// The final entry carries no `path` (it is the current page) and renders as
// plain text with aria-current, per the WAI-ARIA breadcrumb pattern.
// `overlay` is for trails sitting on a photographic hero, where the brand
// purple used by the other tones does not hold contrast against arbitrary
// image content — it stays in white at varying opacity instead.
const TONES = {
    light: { base: 'text-gray-400', link: 'hover:text-primary', current: 'text-primary' },
    dark: { base: 'text-white/50', link: 'hover:text-primary', current: 'text-primary' },
    overlay: { base: 'text-white/70', link: 'hover:text-white', current: 'text-white' },
};

const Breadcrumbs = ({ items, tone = 'light', align = 'left', className = '' }) => {
    if (!items?.length) return null;
    const palette = TONES[tone] || TONES.light;

    return (
        <nav
            aria-label="Breadcrumb"
            className={`text-sm font-bold uppercase tracking-widest ${palette.base} ${className}`}
        >
            <ol className={`flex flex-wrap items-center gap-2 ${align === 'center' ? 'justify-center' : ''}`}>
                {items.map((item, idx) => {
                    const isLast = idx === items.length - 1;
                    return (
                        <li key={item.name} className="flex items-center gap-2">
                            {idx > 0 && <ChevronRight className="w-4 h-4" aria-hidden="true" />}
                            {item.path && !isLast ? (
                                <Link href={item.path} className={`${palette.link} transition-colors`}>
                                    {item.name}
                                </Link>
                            ) : (
                                <span className={palette.current} aria-current={isLast ? 'page' : undefined}>
                                    {item.name}
                                </span>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
