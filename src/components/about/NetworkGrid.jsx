import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

// Only contact channels that already exist elsewhere in the repo are listed.
// No street addresses — publishing an approximate address on the page a search
// engine treats as authoritative is worse than publishing none, because it
// disagrees with the Google Business Profile listing.
const offices = [
    {
        city: 'Riyadh',
        country: 'Saudi Arabia',
        role: 'Head office',
        body:
            'The head office, open since 2015. Saudi tour operations, Umrah and visit visa processing, corporate accounts and hotel contracting all run from Riyadh.',
        tel: '+966556182021',
        display: '+966 55 618 2021',
    },
    {
        city: 'Manama',
        country: 'Bahrain',
        role: 'Gulf desk',
        body:
            'Serves travellers across Bahrain and the wider Gulf on the same holiday packages, Saudi tours and visa services, on a local Bahraini line.',
        tel: '+97333372021',
        display: '+973 3337 2021',
    },
    {
        city: 'Dubai',
        country: 'United Arab Emirates',
        role: 'UAE desk',
        body:
            'Handles UAE-based enquiries, Dubai city and desert itineraries, and onward international holiday bookings.',
        mail: 'info@flyinco.com',
        display: 'info@flyinco.com',
    },
    {
        city: 'Mumbai',
        country: 'India',
        role: 'India desk',
        body:
            'Arranges Kerala, Kashmir, Goa, Rajasthan and Andaman itineraries, group departures and family holidays home for travellers leaving Saudi Arabia and Bahrain.',
        mail: 'visa@flyinco.com',
        display: 'visa@flyinco.com',
    },
];

const NetworkGrid = () => {
    return (
        <section className="py-20 md:py-24 bg-gray-50" aria-labelledby="about-network">
            <div className="max-w-[1240px] mx-auto px-6 md:px-12">
                <p className="flex items-center gap-3 text-primary font-display font-bold uppercase tracking-[0.24em] text-[10px] sm:text-xs mb-4">
                    <span className="h-px w-8 bg-primary/50" aria-hidden="true" />
                    Where we are
                </p>
                <h2
                    id="about-network"
                    className="text-3xl md:text-5xl font-display font-black text-secondary tracking-tight mb-4 max-w-2xl"
                >
                    Four desks across the Gulf and India
                </h2>
                <p className="font-body text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mb-14">
                    Every desk below is a real line with a person behind it. Riyadh is the head
                    office; the other three run on the same packages and the same operations team.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {offices.map((office) => (
                        <div
                            key={office.city}
                            className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm flex flex-col"
                        >
                            <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-primary/10 px-3 py-1 font-display font-black text-[10px] uppercase tracking-[0.14em] text-primary mb-5">
                                {office.role}
                            </span>
                            <h3 className="font-display font-black text-xl text-secondary tracking-tight mb-1">
                                {office.city}
                            </h3>
                            <p className="flex items-center gap-1.5 font-body text-xs font-bold text-gray-400 mb-4">
                                <MapPin className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />
                                {office.country}
                            </p>
                            <p className="font-body text-sm text-gray-600 leading-relaxed mb-6 flex-1">
                                {office.body}
                            </p>
                            <a
                                href={office.tel ? `tel:${office.tel}` : `mailto:${office.mail}`}
                                className="flex items-center gap-2 font-display font-bold text-sm text-secondary hover:text-primary transition-colors break-all"
                            >
                                {office.tel ? (
                                    <Phone className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                                ) : (
                                    <Mail className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                                )}
                                {office.display}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NetworkGrid;
