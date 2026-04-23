import React from 'react';

const linkSections = [
    {
        title: 'Popular India Destinations',
        links: ['Andaman Packages', 'Kerala Packages', 'Goa Packages', 'Kashmir Packages', 'Himachal Packages', 'Rajasthan Packages', 'Uttarakhand Packages', 'North East Packages', 'Gujarat Packages']
    },
    {
        title: 'Popular International Destinations',
        links: ['Dubai Packages', 'Thailand Packages', 'Bali Packages', 'Singapore Packages', 'Europe Packages', 'Maldives Packages', 'Mauritius Packages', 'Vietnam Packages', 'Sri Lanka Packages']
    },
    {
        title: 'Saudi Arabia Destinations',
        links: ['Riyadh Tour', 'Jeddah Coastal', 'Al-Ula Adventure', 'Madinah Spiritual', 'Makkah Umrah', 'Dammam Gateway']
    }
];

const VisaLinks = () => {
    return (
        <section className="py-20 bg-white border-t border-gray-50">
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
                                        key={link}
                                        href="#"
                                        className="text-[11px] font-bold text-gray-400 hover:text-primary transition-all underline decoration-gray-100 underline-offset-4 hover:decoration-primary/30"
                                    >
                                        {link}
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
