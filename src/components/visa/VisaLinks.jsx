import React from 'react';

const linkSections = [
    {
        title: 'Popular India Destinations',
        links: [
            { name: 'Andaman Packages', href: '/package/andaman-island-escape' },
            { name: 'Kerala Packages', href: '/package/kerala-backwaters-paradise' },
            { name: 'Rajasthan Packages', href: '/package/royal-rajasthan-heritage' },
            { name: 'All India Packages', href: '/india-packages' },
        ]
    },
    {
        title: 'Popular International Destinations',
        links: [
            { name: 'Dubai Packages', href: '/package/dubai-city-desert' },
            { name: 'Bali Packages', href: '/package/bali-ubud-beach-retreat' },
            { name: 'Maldives Packages', href: '/package/maldives-overwater-luxury' },
            { name: 'All International Packages', href: '/international-packages' },
        ]
    },
    {
        title: 'Saudi Arabia Destinations',
        links: [
            { name: 'Riyadh Tour', href: '/package/riyadh-heritage-tour' },
            { name: 'Jeddah Coastal', href: '/package/jeddah-red-sea-escape' },
            { name: 'Al-Ula Adventure', href: '/package/al-ula-wonders' },
            { name: 'Makkah Umrah', href: '/package/spiritual-umrah-journey' },
            { name: 'All Saudi Packages', href: '/saudi-packages' },
        ]
    }
];

const VisaLinks = () => {
    return (
        <section className="py-14 md:py-20 bg-white border-t border-gray-50">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
                    {linkSections.map((section) => (
                        <div key={section.title}>
                            <h4 className="text-sm font-black text-secondary font-display uppercase tracking-widest mb-8 pb-3 border-b-2 border-primary/20 inline-block">
                                {section.title}
                            </h4>
                            <div className="flex flex-wrap gap-x-6 gap-y-3">
                                {section.links.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="text-[11px] font-bold text-gray-400 hover:text-primary transition-all underline decoration-gray-100 underline-offset-4 hover:decoration-primary/30"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VisaLinks;
