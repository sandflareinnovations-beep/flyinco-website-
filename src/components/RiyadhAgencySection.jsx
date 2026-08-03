import React from 'react';
import Link from 'next/link';
import JsonLd from './seo/JsonLd';
import { faqPageJsonLd } from '../lib/seo';

const quickLinks = [
    { name: 'Saudi Arabia Packages', path: '/saudi-packages' },
    { name: 'Riyadh City Tour', path: '/package/riyadh-heritage-tour' },
    { name: 'Jeddah City Tour', path: '/package/jeddah-city-tour-full-day' },
    { name: 'Al-Balad Heritage Walk', path: '/package/jeddah-al-balad-heritage-walk' },
    { name: 'Visa Services', path: '/visa' },
    { name: 'Corporate Travel', path: '/corporate-travel' },
    { name: 'Honeymoon Packages', path: '/honeymoon-packages' },
    { name: 'International Packages', path: '/international-packages' },
];

const faqs = [
    {
        q: 'Where is Flyinco located?',
        a: 'Flyinco Travel & Tourism is a travel agency headquartered in Riyadh, Saudi Arabia, with offices in Bahrain and operations covering the UAE and India.',
    },
    {
        q: 'What services does Flyinco offer in Riyadh?',
        a: 'From Riyadh we arrange holiday packages, city and heritage tours (Riyadh, Diriyah, Al-Ula, Jeddah), visa services, honeymoon and adventure trips, and corporate travel management for businesses in Saudi Arabia.',
    },
    {
        q: 'How do I book a tour or package with Flyinco?',
        a: 'Choose a package on the website, then send your enquiry by email to visa@flyinco.com or message us on WhatsApp at +966 55 618 2021. Our Riyadh team will confirm availability, pricing and the full itinerary.',
    },
    {
        q: 'Does Flyinco handle visas for travel to and from Saudi Arabia?',
        a: 'Yes. Our visa team in Riyadh assists with tourist, visit and business visa applications for Saudi Arabia and popular international destinations, including document guidance and eligibility checks.',
    },
    {
        q: 'What tours does Flyinco run in Jeddah?',
        a: 'Flyinco runs guided Jeddah tours including a walking tour of Historic Jeddah (Al-Balad), a UNESCO World Heritage site; an evening tour of the Jeddah Corniche, Al-Rahmah Floating Mosque and King Fahd Fountain; a full-day Jeddah city tour with hotel pickup; and Red Sea yacht, snorkelling and diving days from Obhur Marina. Tours range from 4 hours to a 4-day Red Sea escape.',
    },
    {
        q: 'Does Flyinco have an office in Bahrain?',
        a: 'Yes. Flyinco has a branch office in Manama, Bahrain, reachable on +973 3337 2021. The Bahrain team arranges GCC holidays, onward flights, Bahrain–Saudi travel and visa assistance, and shares one booking file with the Riyadh head office.',
    },
    {
        q: 'Can Flyinco book holidays to India from Saudi Arabia or Bahrain?',
        a: 'Yes. Flyinco has a dedicated India desk covering Kerala backwaters, Kashmir, Goa, Rajasthan and the Andaman Islands, with group departures and family holidays for expatriates travelling home from Saudi Arabia and Bahrain. Enquire at visa@flyinco.com.',
    },
    {
        q: 'Does Flyinco arrange Umrah packages?',
        a: 'Yes. Flyinco arranges Umrah travel including visa processing, private transfers between Jeddah, Makkah and Madinah, and hotel bookings near the Haram. Umrah bookings are handled by the Riyadh visa team on +966 55 618 2021.',
    },
    {
        q: 'How much do Flyinco tour packages cost?',
        a: 'Prices depend on your travel dates, group size, hotel category and whether flights are included, so every itinerary is quoted individually rather than sold at a fixed rate. Send your dates by WhatsApp on +966 55 618 2021 or email visa@flyinco.com and you will receive a written quote.',
    },
];

// Built from the `faqs` array this component renders below, so the schema can
// never describe a question the visitor cannot see.
const faqJsonLd = faqPageJsonLd(faqs, { path: '/' });

const RiyadhAgencySection = () => {
    return (
        <section className="py-14 md:py-20 bg-white" id="riyadh-travel-agency">
            <JsonLd data={faqJsonLd} />
            <div className="max-w-[1240px] mx-auto px-4">
                <p className="font-display text-primary font-bold uppercase tracking-[0.2em] text-xs mb-4 text-center">
                    Flyinco Travel & Tourism
                </p>
                <h2 className="text-3xl md:text-5xl font-display font-black text-secondary mb-8 leading-tight tracking-tight text-center">
                    Your Travel Agency in Riyadh, Saudi Arabia
                </h2>

                <div className="max-w-3xl mx-auto text-center mb-10">
                    <p className="text-gray-500 font-body leading-relaxed text-base font-medium mb-4">
                        Flyinco is a full-service travel agency based in Riyadh, trusted by families,
                        honeymooners and businesses across Saudi Arabia. From our Riyadh office we plan
                        Saudi heritage tours through Diriyah and Al-Ula, Red Sea escapes in Jeddah,
                        international holidays, and complete visa support — all handled by one local team.
                    </p>
                    <p className="text-gray-500 font-body leading-relaxed text-base font-medium">
                        Whether you need a weekend Riyadh city tour, a tailor-made honeymoon, or managed
                        corporate travel for your company, our consultants build every itinerary around
                        your dates, budget and travel style.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mb-14">
                    {quickLinks.map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            className="px-5 py-2.5 rounded-full border border-gray-200 text-secondary text-xs font-black uppercase tracking-widest hover:bg-primary hover:text-white hover:border-primary transition-all"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="max-w-3xl mx-auto">
                    <h3 className="text-xl md:text-2xl font-display font-black text-secondary mb-6 text-center">
                        Frequently Asked Questions
                    </h3>
                    <div className="space-y-4">
                        {faqs.map(({ q, a }) => (
                            <details
                                key={q}
                                className="group bg-[#FAFAFA] rounded-2xl border border-gray-100 px-6 py-4"
                            >
                                <summary className="cursor-pointer list-none font-display font-bold text-secondary text-sm md:text-base flex items-center justify-between gap-4">
                                    {q}
                                    <span className="text-primary text-xl leading-none group-open:rotate-45 transition-transform">+</span>
                                </summary>
                                <p className="text-gray-500 font-body text-sm leading-relaxed mt-3">{a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RiyadhAgencySection;
