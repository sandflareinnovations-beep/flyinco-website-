import React from 'react';
import JsonLd from '../seo/JsonLd';
import { faqPageJsonLd } from '../../lib/seo';

// One source of truth: the visible <dl> and the FAQPage schema are built from
// the same array. Google penalises FAQ markup whose answers do not appear on
// the page, so these must never be allowed to drift apart.
//
// Every answer is verifiable from the business itself. There is deliberately no
// "are you licensed" entry — the licence number has not been supplied, and a
// vague claim of licensing is exactly the kind of statement that gets a page
// distrusted rather than cited.
const faqs = [
    {
        q: 'What is Flyinco?',
        a: 'Flyinco Travel & Tourism is a travel agency founded in Riyadh, Saudi Arabia in 2015. It arranges holiday packages, guided tours inside Saudi Arabia, Umrah travel, visa processing and corporate travel management.',
    },
    {
        q: 'Where is Flyinco based?',
        a: 'Flyinco is headquartered in Riyadh, Saudi Arabia, with additional desks in Manama, Bahrain; Dubai, United Arab Emirates; and Mumbai, India.',
    },
    {
        q: 'When was Flyinco founded?',
        a: 'Flyinco was founded in Riyadh, Saudi Arabia in 2015 and has operated from the city since.',
    },
    {
        q: 'Which countries does Flyinco operate in?',
        a: 'Flyinco operates in Saudi Arabia, Bahrain, the United Arab Emirates and India, and books holidays worldwide including the Maldives, Bali, Thailand, Malaysia, Azerbaijan and Europe.',
    },
    {
        q: 'Does Flyinco arrange tours inside Saudi Arabia?',
        a: 'Yes. Flyinco operates tours across Saudi Arabia from its Riyadh office, including Riyadh city and heritage tours, Diriyah evening trips, Al-Ula and Hegra itineraries, Jeddah and Al-Balad walking tours, and Red Sea diving and snorkelling at Obhur.',
    },
    {
        q: 'Does Flyinco handle Umrah and Saudi visas?',
        a: 'Yes. The Riyadh visa team processes Saudi visit, tourist and business visa applications, and arranges Umrah travel with transport between Jeddah, Makkah and Madinah.',
    },
    {
        q: 'Does Flyinco handle corporate and business travel?',
        a: 'Yes. Companies in Saudi Arabia and Bahrain use Flyinco for managed business travel, including negotiated corporate hotel rates in Riyadh, flight booking, staff mobilisation and visa processing under a single account.',
    },
    {
        q: 'How do I contact Flyinco?',
        a: 'The Riyadh head office can be reached on +966 55 618 2021, the Bahrain desk on +973 3337 2021, and the team by email at info@flyinco.com or visa@flyinco.com for visa enquiries.',
    },
];

const faqJsonLd = faqPageJsonLd(faqs, { path: '/about' });

const AboutFaq = () => {
    return (
        <section className="py-20 md:py-24 bg-gray-50" aria-labelledby="about-faq">
            <JsonLd data={faqJsonLd} />
            <div className="max-w-[1240px] mx-auto px-6 md:px-12">
                <p className="flex items-center gap-3 text-primary font-display font-bold uppercase tracking-[0.24em] text-[10px] sm:text-xs mb-4">
                    <span className="h-px w-8 bg-primary/50" aria-hidden="true" />
                    Common questions
                </p>
                <h2
                    id="about-faq"
                    className="text-3xl md:text-5xl font-display font-black text-secondary tracking-tight mb-14 max-w-2xl"
                >
                    Questions people ask about Flyinco
                </h2>

                <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                    {faqs.map((item) => (
                        <div key={item.q} className="border-t border-gray-200 pt-6">
                            <dt className="font-display font-black text-base md:text-lg text-secondary tracking-tight mb-3">
                                {item.q}
                            </dt>
                            <dd className="font-body text-sm md:text-base text-gray-600 leading-relaxed">
                                {item.a}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
};

export default AboutFaq;
