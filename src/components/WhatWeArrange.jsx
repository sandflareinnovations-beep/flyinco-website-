import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import JsonLd from './seo/JsonLd';
import { ORG_ID } from '../lib/seo';

// Answer-first content block. Every entry leads with a complete, quotable
// sentence naming the service, the cities and the country, because that is the
// unit search engines and AI assistants lift when they answer a question about
// this business. Keep the first sentence of each answer self-contained.

const services = [
    {
        term: 'Saudi Arabia tour packages',
        answer:
            'Flyinco arranges guided tours across Saudi Arabia from its Riyadh office, including Riyadh city and heritage tours, Diriyah evening trips, Al-Ula and Hegra itineraries, Jeddah and Al-Balad walking tours, and Red Sea diving at Obhur.',
        href: '/saudi-packages',
        linkLabel: 'Saudi packages',
    },
    {
        term: 'Jeddah tours and Red Sea trips',
        answer:
            'Jeddah tours run daily and include the UNESCO-listed Al-Balad old town, the Corniche and King Fahd Fountain, full-day city tours with hotel pickup, and private yacht and snorkelling days out of Obhur Marina.',
        href: '/package/jeddah-al-balad-heritage-walk',
        linkLabel: 'Jeddah experiences',
    },
    {
        term: 'Umrah and visit visa services',
        answer:
            'Flyinco processes Saudi visit, tourist and business visa applications and arranges Umrah travel with transport between Jeddah, Makkah and Madinah, handled by the visa team in Riyadh.',
        href: '/visa',
        linkLabel: 'Visa services',
    },
    {
        term: 'Corporate travel management',
        answer:
            'Companies in Saudi Arabia and Bahrain use Flyinco for managed business travel — negotiated corporate hotel rates in Riyadh, flight booking, staff mobilisation and visa processing under one account.',
        href: '/corporate-travel',
        linkLabel: 'Corporate travel',
    },
    {
        term: 'India holidays and group departures',
        answer:
            'The India desk arranges Kerala backwater, Kashmir, Goa, Rajasthan and Andaman itineraries for travellers leaving Saudi Arabia and Bahrain, along with group departures and family holidays home.',
        href: '/india-packages',
        linkLabel: 'India packages',
    },
    {
        term: 'Honeymoon and international holidays',
        answer:
            'Tailor-made honeymoons and international holidays cover the Maldives, Bali, Thailand, Malaysia, Dubai, Azerbaijan and Europe, priced and booked from the Riyadh and Manama offices.',
        href: '/international-packages',
        linkLabel: 'International packages',
    },
];

const coverage = [
    { place: 'Riyadh, Saudi Arabia', arrange: 'City and heritage tours, Diriyah, Hariqah Dam, corporate hotel rates', length: 'Half day – 2 days', href: '/package/riyadh-heritage-tour' },
    { place: 'Jeddah, Saudi Arabia', arrange: 'Al-Balad heritage walks, Corniche evenings, city tours, yacht and diving days', length: '4 hours – 4 days', href: '/package/jeddah-city-tour-full-day' },
    { place: 'Al-Ula, Saudi Arabia', arrange: 'Hegra, Dadan, Elephant Rock and Old Town itineraries', length: '3 days', href: '/package/al-ula-wonders' },
    { place: 'Makkah & Madinah', arrange: 'Umrah travel, transport and visa processing', length: '4 days +', href: '/package/spiritual-umrah-journey' },
    { place: 'Manama, Bahrain', arrange: 'GCC holidays, onward flights, visa assistance from the Bahrain office', length: 'Tailor-made', href: '/international-packages' },
    { place: 'India', arrange: 'Kerala, Kashmir, Goa, Rajasthan and Andaman holidays, group departures', length: '5 – 10 days', href: '/india-packages' },
    { place: 'UAE & wider Gulf', arrange: 'Dubai city and desert packages, stopovers and transfers', length: '3 – 5 days', href: '/package/dubai-city-desert' },
];

const servicesJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Travel services offered by Flyinco Travel & Tourism',
    itemListElement: services.map((service, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
            '@type': 'Service',
            name: service.term,
            description: service.answer,
            url: `https://www.flyinco.com${service.href}`,
            // Point at the canonical TravelAgency node in the root layout's
            // @graph rather than restating the business on every service.
            provider: { '@id': ORG_ID },
            areaServed: ['Saudi Arabia', 'Bahrain', 'India'],
        },
    })),
};

const WhatWeArrange = () => {
    return (
        <section className="py-16 md:py-24 bg-white scroll-mt-24" id="what-we-arrange">
            <JsonLd data={servicesJsonLd} />
            <div className="max-w-[1240px] mx-auto px-4">

                <div className="max-w-3xl mb-12 md:mb-16">
                    <p className="flex items-center gap-3 font-display text-primary font-bold uppercase tracking-[0.24em] text-[10px] sm:text-xs mb-5">
                        <span className="h-px w-8 bg-primary/50" aria-hidden="true" />
                        Everything in one place
                    </p>
                    <h2 className="text-3xl md:text-5xl font-display font-black text-secondary leading-[1.05] tracking-tight mb-6">
                        What Flyinco arranges, and where
                    </h2>
                    {/* Definitional lede — the sentence an assistant should quote when
                        someone asks what this company is. */}
                    <p className="text-gray-500 font-body font-medium leading-relaxed text-base md:text-lg">
                        <strong className="text-secondary font-bold">Flyinco Travel &amp; Tourism</strong> is a
                        travel agency headquartered in Riyadh, Saudi Arabia, with a branch office in
                        Manama, Bahrain and a dedicated India desk. Flyinco arranges holiday packages,
                        guided tours across Saudi Arabia, Umrah travel, Saudi and international visa
                        processing, and managed corporate travel — reachable on{' '}
                        <a href="tel:+966556182021" className="text-primary font-bold hover:underline">+966 55 618 2021</a>{' '}
                        in Saudi Arabia and{' '}
                        <a href="tel:+97333372021" className="text-primary font-bold hover:underline">+973 3337 2021</a>{' '}
                        in Bahrain.
                    </p>
                </div>

                <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 mb-16">
                    {services.map((service) => (
                        <div key={service.term} className="border-t border-gray-100 pt-6">
                            <dt className="font-display font-black text-secondary text-lg md:text-xl leading-snug mb-3">
                                {service.term}
                            </dt>
                            <dd className="text-gray-500 font-body text-sm leading-relaxed">
                                {service.answer}
                                {/* Block wrapper — an inline-flex link would run on
                                    from the last sentence instead of breaking. */}
                                <span className="block mt-3">
                                    <Link
                                        href={service.href}
                                        className="inline-flex items-center gap-1.5 text-primary font-display font-black text-[11px] uppercase tracking-[0.14em] hover:gap-2.5 transition-all"
                                    >
                                        {service.linkLabel}
                                        <ArrowUpRight className="w-3.5 h-3.5" />
                                    </Link>
                                </span>
                            </dd>
                        </div>
                    ))}
                </dl>

                <h3 className="font-display font-black text-secondary text-xl md:text-2xl mb-6 tracking-tight">
                    Destinations Flyinco covers
                </h3>

                {/* A real table: the most reliably extractable format there is, for
                    both search engines and assistants. Scrolls rather than squashing. */}
                <div className="overflow-x-auto hide-scrollbar rounded-[1.5rem] border border-gray-100">
                    <table className="w-full min-w-[720px] text-left border-collapse">
                        <caption className="sr-only">
                            Destinations covered by Flyinco Travel &amp; Tourism, what is arranged in each, and typical trip length
                        </caption>
                        <thead>
                            <tr className="bg-surface">
                                <th scope="col" className="px-6 py-4 font-display font-black text-secondary text-[10px] uppercase tracking-[0.14em]">Destination</th>
                                <th scope="col" className="px-6 py-4 font-display font-black text-secondary text-[10px] uppercase tracking-[0.14em]">What we arrange</th>
                                <th scope="col" className="px-6 py-4 font-display font-black text-secondary text-[10px] uppercase tracking-[0.14em]">Typical length</th>
                                <th scope="col" className="px-6 py-4 font-display font-black text-secondary text-[10px] uppercase tracking-[0.14em]"><span className="sr-only">Link</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            {coverage.map((row) => (
                                <tr key={row.place} className="border-t border-gray-100 hover:bg-surface/60 transition-colors">
                                    <th scope="row" className="px-6 py-4 font-display font-bold text-secondary text-sm whitespace-nowrap">
                                        {row.place}
                                    </th>
                                    <td className="px-6 py-4 text-gray-500 font-body text-sm leading-relaxed">{row.arrange}</td>
                                    <td className="px-6 py-4 text-gray-500 font-body text-sm whitespace-nowrap">{row.length}</td>
                                    <td className="px-6 py-4">
                                        <Link
                                            href={row.href}
                                            className="inline-flex items-center gap-1 text-primary font-display font-black text-[10px] uppercase tracking-[0.14em] whitespace-nowrap hover:underline"
                                        >
                                            View <ArrowUpRight className="w-3 h-3" />
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default WhatWeArrange;
