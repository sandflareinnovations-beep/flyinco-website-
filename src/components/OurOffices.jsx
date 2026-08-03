'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Mail, ArrowUpRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { trackEvent } from '../lib/analytics';
import { offices as officeAddresses, formatAddressLine } from '../data/offices';

// Visible postal address per desk, read from the shared NAP source so the
// homepage citation matches /contact and the footer exactly.
const addressFor = (id) => {
    const match = officeAddresses.find((o) => o.id === id);
    return match ? formatAddressLine(match) : null;
};

const offices = [
    {
        addressId: 'riyadh',
        city: 'Riyadh',
        country: 'Saudi Arabia',
        role: 'Head office',
        timeZone: 'Asia/Riyadh',
        blurb:
            'Where every itinerary is built. Saudi heritage tours through Diriyah and Al-Ula, Red Sea escapes, Umrah and visit visas, and managed corporate travel for companies across the Kingdom.',
        handles: ['Saudi tours', 'Umrah & visit visas', 'Corporate travel'],
        tel: '+966556182021',
        telDisplay: '+966 55 618 2021',
        whatsapp: '966556182021',
        link: { label: 'Saudi packages', href: '/saudi-packages' },
    },
    {
        addressId: 'bahrain',
        city: 'Manama',
        country: 'Bahrain',
        role: 'Gulf branch',
        timeZone: 'Asia/Bahrain',
        blurb:
            'Our Gulf desk, a causeway from the Kingdom. Weekend breaks, GCC holidays and onward flights for travellers based in Bahrain, with visa paperwork handled in the same office.',
        handles: ['GCC holidays', 'Bahrain–KSA travel', 'Visa assistance'],
        tel: '+97333372021',
        telDisplay: '+973 3337 2021',
        whatsapp: '97333372021',
        link: { label: 'Gulf packages', href: '/international-packages' },
    },
    {
        addressId: 'mumbai',
        city: 'India',
        country: 'India desk',
        role: 'Outbound desk',
        timeZone: 'Asia/Kolkata',
        blurb:
            'For travellers heading out of India and for expat families heading home. Kerala, Kashmir and Goa itineraries, group departures, and Saudi and GCC visa support from the Indian side.',
        handles: ['India holidays', 'Group departures', 'GCC visas'],
        mail: 'visa@flyinco.com',
        whatsapp: '966556182021',
        link: { label: 'India packages', href: '/india-packages' },
    },
];

// Local clocks make the point the copy is making: someone is at a desk now.
// Rendered only after mount so the server HTML and first paint agree.
const useLocalTimes = () => {
    const [times, setTimes] = useState(null);

    useEffect(() => {
        const read = () =>
            setTimes(
                Object.fromEntries(
                    offices.map((o) => [
                        o.city,
                        new Intl.DateTimeFormat('en-GB', {
                            hour: '2-digit',
                            minute: '2-digit',
                            timeZone: o.timeZone,
                        }).format(new Date()),
                    ])
                )
            );
        read();
        const timer = setInterval(read, 30000);
        return () => clearInterval(timer);
    }, []);

    return times;
};

const OurOffices = () => {
    const times = useLocalTimes();

    return (
        <section className="py-16 md:py-24 bg-surface scroll-mt-24" id="offices">
            <div className="max-w-[1240px] mx-auto px-4">

                <div className="max-w-2xl mb-12 md:mb-16">
                    <p className="flex items-center gap-3 font-display text-primary font-bold uppercase tracking-[0.28em] text-[10px] sm:text-xs mb-5">
                        <span className="h-px w-8 bg-primary/60" aria-hidden="true" />
                        Three desks, one team
                    </p>
                    <h2 className="text-3xl md:text-5xl font-display font-black text-secondary leading-[1.05] tracking-tight mb-5">
                        Booked in Riyadh, answered in Manama, planned from India
                    </h2>
                    <p className="text-secondary/60 font-body font-medium leading-relaxed text-base">
                        Flyinco runs its own offices in Saudi Arabia, Bahrain and India rather than
                        handing you to an agent abroad. Whichever desk you reach, the same consultants
                        see your booking — so a visa filed in Manama and a tour running in Al-Ula stay
                        on one file.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                    {offices.map((office) => (
                        <article
                            key={office.city}
                            className="bg-white rounded-[1.75rem] border border-surfaceDeep p-7 md:p-8 flex flex-col hover:border-primary/50 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex items-start justify-between gap-4 mb-1">
                                <p className="font-display text-primary font-bold uppercase tracking-[0.2em] text-[10px]">
                                    {office.role}
                                </p>
                                {times && (
                                    <p className="font-display text-secondary/45 font-bold text-[10px] tabular-nums tracking-wider">
                                        {times[office.city]} local
                                    </p>
                                )}
                            </div>

                            <h3 className="font-display font-black text-secondary text-2xl md:text-3xl leading-tight tracking-tight">
                                {office.city}
                            </h3>
                            <p className="font-body font-bold text-secondary/50 text-xs uppercase tracking-[0.14em] mt-1 mb-3">
                                {office.country}
                            </p>

                            {addressFor(office.addressId) && (
                                <address className="not-italic text-secondary/60 font-body text-xs leading-relaxed mb-5">
                                    {addressFor(office.addressId)}
                                </address>
                            )}

                            <p className="text-secondary/60 font-body text-sm leading-relaxed mb-6">
                                {office.blurb}
                            </p>

                            <ul className="flex flex-wrap gap-2 mb-7">
                                {office.handles.map((h) => (
                                    <li
                                        key={h}
                                        className="text-[10px] font-display font-black uppercase tracking-[0.12em] text-secondary/70 bg-surface rounded-full px-3 py-1.5 border border-surfaceDeep"
                                    >
                                        {h}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto pt-6 border-t border-surfaceDeep flex flex-col gap-3">
                                {office.tel ? (
                                    <a
                                        href={`tel:${office.tel}`}
                                        onClick={() => trackEvent('office_call', { office: office.city })}
                                        className="flex items-center gap-2.5 text-secondary font-display font-black text-sm hover:text-primary transition-colors"
                                    >
                                        <Phone className="w-4 h-4 text-primary shrink-0" />
                                        {office.telDisplay}
                                    </a>
                                ) : (
                                    <a
                                        href={`mailto:${office.mail}`}
                                        onClick={() => trackEvent('office_email', { office: office.city })}
                                        className="flex items-center gap-2.5 text-secondary font-display font-black text-sm hover:text-primary transition-colors break-all"
                                    >
                                        <Mail className="w-4 h-4 text-primary shrink-0" />
                                        {office.mail}
                                    </a>
                                )}

                                <div className="flex items-center gap-2 flex-wrap">
                                    <a
                                        href={`https://wa.me/${office.whatsapp}?text=${encodeURIComponent(
                                            `Hi Flyinco! I'd like to speak to your ${office.city} desk.`
                                        )}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => trackEvent('office_whatsapp', { office: office.city })}
                                        className="flex items-center gap-2 bg-primary text-white rounded-full px-4 py-2.5 font-display font-black text-[10px] uppercase tracking-[0.14em] hover:bg-secondary transition-colors"
                                    >
                                        <FaWhatsapp className="w-3.5 h-3.5" />
                                        WhatsApp
                                    </a>
                                    <Link
                                        href={office.link.href}
                                        className="flex items-center gap-1.5 text-secondary/70 font-display font-black text-[10px] uppercase tracking-[0.14em] px-3 py-2.5 rounded-full hover:text-primary transition-colors"
                                    >
                                        {office.link.label}
                                        <ArrowUpRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurOffices;
