import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

// Deliberately NOT a second copy of WhatWeArrange.jsx on the home page. That
// section lists what the catalogue contains; this one says how each service is
// run and which desk runs it. Two URLs carrying paraphrases of the same
// paragraphs compete with each other in search and get deduplicated by
// assistants, so the angle has to differ, not just the wording.
const services = [
    {
        title: 'Saudi tours, operated not resold',
        body:
            'The Riyadh office runs its own Saudi itineraries — contracting the guides, vehicles and hotels directly rather than reselling another operator’s product. That is why departures can be moved, split or privatised on request.',
        href: '/saudi-packages',
        linkLabel: 'Saudi packages',
    },
    {
        title: 'Visas handled by a dedicated team',
        body:
            'Visa work sits with its own team in Riyadh rather than with the tour consultants, so applications are tracked separately from bookings and can be filed for travellers who are not buying a package at all.',
        href: '/visa',
        linkLabel: 'Visa services',
    },
    {
        title: 'An India desk staffed for the route',
        body:
            'The India desk exists because a large share of travellers leaving Riyadh and Manama are flying home. It is set up around that route — group departures, family timings and school-holiday demand.',
        href: '/india-packages',
        linkLabel: 'India packages',
    },
    {
        title: 'Worldwide holidays quoted locally',
        body:
            'International trips are priced and issued from Riyadh and Manama, so travellers deal with a local office in their own timezone and currency rather than an overseas booking centre.',
        href: '/international-packages',
        linkLabel: 'International packages',
    },
    {
        title: 'Private departures by default',
        body:
            'Honeymoons and adventure trips are built as private departures rather than fixed group tours, which is why itineraries are quoted per couple or per party instead of per seat.',
        href: '/honeymoon-packages',
        linkLabel: 'Honeymoon packages',
    },
    {
        title: 'Corporate accounts under one file',
        body:
            'Company travel runs on a single account across the network, so flights, Riyadh hotel rates, staff mobilisation and visa processing are handled by the same team instead of being split across suppliers.',
        href: '/corporate-travel',
        linkLabel: 'Corporate travel',
    },
];

const WhatWeDo = () => {
    return (
        <section className="py-20 md:py-24 bg-white" aria-labelledby="about-services">
            <div className="max-w-[1240px] mx-auto px-6 md:px-12">
                <p className="flex items-center gap-3 text-primary font-display font-bold uppercase tracking-[0.24em] text-[10px] sm:text-xs mb-4">
                    <span className="h-px w-8 bg-primary/50" aria-hidden="true" />
                    What we do
                </p>
                <h2
                    id="about-services"
                    className="text-3xl md:text-5xl font-display font-black text-secondary tracking-tight mb-4 max-w-2xl"
                >
                    How the work is actually structured
                </h2>
                <p className="font-body text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mb-14">
                    Six services, each with a team behind it. What sits in each catalogue is on the
                    package pages — this is how each one is run.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="rounded-3xl p-7 bg-gray-50 border border-gray-100 flex flex-col hover:border-primary/30 transition-colors"
                        >
                            <h3 className="font-display font-black text-lg text-secondary tracking-tight mb-3">
                                {service.title}
                            </h3>
                            <p className="font-body text-sm text-gray-600 leading-relaxed mb-6 flex-1">
                                {service.body}
                            </p>
                            <Link
                                href={service.href}
                                className="inline-flex items-center gap-1.5 font-display font-black text-[11px] uppercase tracking-[0.14em] text-primary hover:text-secondary transition-colors self-start"
                            >
                                {service.linkLabel}
                                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
