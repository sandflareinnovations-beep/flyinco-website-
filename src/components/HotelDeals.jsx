"use client";

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { MapPin, Star, ArrowRight, ArrowLeft, BadgeCheck } from 'lucide-react';
import { trackEvent } from '../lib/analytics';
import holidayInnImg from '../assets/images/hotels/holiday-inn-al-qasr.webp';
import novotelImg from '../assets/images/hotels/novotel-suites-olaya.webp';
import menaImg from '../assets/images/hotels/mena-hotel-nasiriyah.webp';
import ramadaImg from '../assets/images/hotels/ramada-wyndham-riyadh.jpg';

const WHATSAPP = 'https://wa.me/966556182021';

const hotels = [
    {
        name: 'Ramada by Wyndham Riyadh',
        stars: 5,
        area: 'King Fahd Road, Riyadh',
        note: 'Business district, walkable to Kingdom Centre',
        img: ramadaImg,
        alt: 'Ramada by Wyndham Riyadh tower illuminated at night',
    },
    {
        name: 'Holiday Inn Al Qasr Riyadh',
        stars: 4,
        area: 'Al Qasr, Riyadh',
        note: 'Family rooms and airport transfers on request',
        img: holidayInnImg,
        alt: 'Illuminated entrance of Holiday Inn Al Qasr Riyadh at dusk',
    },
    {
        name: 'Novotel Suites Riyadh Olaya',
        stars: 4,
        area: 'Al Olaya, Riyadh',
        note: 'Apartment-style suites for longer stays',
        img: novotelImg,
        alt: 'Exterior facade of Novotel Suites Riyadh Olaya',
    },
    {
        name: 'MENA Hotel Nasiriyah',
        stars: 3,
        area: 'Nasiriyah, Riyadh',
        note: 'Best value of the four, close to the diplomatic quarter',
        img: menaImg,
        alt: 'Street view of MENA Hotel Nasiriyah in Riyadh at twilight',
    },
];

const enquiryLink = (hotelName) =>
    `${WHATSAPP}?text=${encodeURIComponent(
        `Hello Flyinco, I would like to enquire about the exclusive corporate rate for ${hotelName}.`
    )}`;

const bookAllLink = `${WHATSAPP}?text=${encodeURIComponent(
    'Hello Flyinco, I would like to book a hotel stay in Riyadh at your exclusive corporate rates.'
)}`;

const HotelDeals = () => {
    const railRef = useRef(null);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);
    const [overflows, setOverflows] = useState(false);

    // Arrows disable at the ends rather than looping, and disappear entirely on
    // wide screens where all four cards already fit — two dead buttons read as
    // broken.
    const syncEdges = useCallback(() => {
        const el = railRef.current;
        if (!el) return;
        setOverflows(el.scrollWidth > el.clientWidth + 48);
        setAtStart(el.scrollLeft <= 8);
        setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8);
    }, []);

    useEffect(() => {
        syncEdges();
        window.addEventListener('resize', syncEdges);
        return () => window.removeEventListener('resize', syncEdges);
    }, [syncEdges]);

    const scrollRail = (direction) => {
        const el = railRef.current;
        if (!el) return;
        const card = el.querySelector('[data-card]');
        const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
        el.scrollBy({ left: direction * step, behavior: 'smooth' });
    };

    return (
        <section className="bg-surface py-14 md:py-20 overflow-hidden scroll-mt-24" id="hotel-deals">
            {/* Header stays inside the container; the rail below breaks out to the
                right edge so cards run off-screen the way the reference does. */}
            <div className="max-w-[1240px] mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8 md:mb-10">
                    <div className="max-w-xl">
                        <p className="flex items-center gap-3 text-[11px] font-display font-bold uppercase tracking-[0.22em] text-primary">
                            <span className="h-px w-8 bg-primary/50" aria-hidden="true" />
                            Riyadh · Corporate rates
                        </p>
                        <h2 className="mt-4 text-3xl md:text-5xl font-display font-black text-secondary leading-[1.05] tracking-tight">
                            Where to stay in Riyadh
                        </h2>
                        <p className="mt-3 text-gray-500 font-body text-sm md:text-base">
                            Four hotels we book often enough to hold negotiated rates at. Tell us your
                            dates and we will quote the corporate price, not the public one.
                        </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/15 bg-primary/5 px-3.5 py-1.5 text-[11px] font-body font-medium text-primary whitespace-nowrap">
                            <BadgeCheck className="w-3.5 h-3.5" />
                            Valid until 31 Dec 2026
                        </span>
                        <div className={`${overflows ? 'hidden md:flex' : 'hidden'} gap-2`}>
                            <button
                                onClick={() => scrollRail(-1)}
                                disabled={atStart}
                                aria-label="Previous hotels"
                                className="w-11 h-11 rounded-full border border-secondary/15 text-secondary flex items-center justify-center transition-all hover:bg-primary hover:border-primary hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-secondary disabled:hover:border-secondary/15"
                            >
                                <ArrowLeft className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => scrollRail(1)}
                                disabled={atEnd}
                                aria-label="More hotels"
                                className="w-11 h-11 rounded-full border border-secondary/15 text-secondary flex items-center justify-center transition-all hover:bg-primary hover:border-primary hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-secondary disabled:hover:border-secondary/15"
                            >
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div
                ref={railRef}
                onScroll={syncEdges}
                className="flex gap-5 overflow-x-auto hide-scrollbar snap-x snap-mandatory scroll-smooth pl-4 lg:pl-[max(1rem,calc((100vw-1240px)/2+1rem))] pr-4 pb-2"
            >
                {hotels.map((hotel) => (
                    <article
                        key={hotel.name}
                        data-card
                        className="group relative snap-start shrink-0 w-[78vw] sm:w-[46vw] lg:w-[295px] aspect-[3/4] rounded-[1.75rem] overflow-hidden bg-secondary shadow-[0_2px_12px_rgba(26,9,51,0.08)] transition-shadow duration-300 hover:shadow-[0_18px_40px_-12px_rgba(26,9,51,0.28)]"
                    >
                        <img
                            loading="lazy"
                            src={hotel.img}
                            alt={hotel.alt}
                            width="880"
                            height="1173"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/45 to-transparent" />

                        <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-display font-black uppercase tracking-[0.12em] text-secondary shadow-sm">
                            Corporate rate
                        </span>

                        <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 flex flex-col">
                            <div className="flex items-center gap-1 mb-2.5" aria-label={`${hotel.stars} star hotel`}>
                                {Array.from({ length: hotel.stars }).map((_, i) => (
                                    <Star key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" stroke="none" />
                                ))}
                            </div>

                            <h3 className="font-display font-black text-white text-lg md:text-xl leading-snug">
                                {hotel.name}
                            </h3>

                            <p className="mt-2 flex items-center gap-1.5 text-white/70 text-xs font-body font-medium">
                                <MapPin className="w-3.5 h-3.5 shrink-0" />
                                {hotel.area}
                            </p>

                            {/* Held at zero height until hover so the resting card stays
                                clean; always visible on touch, where hover never fires. */}
                            <p className="text-white/60 text-[11px] font-body leading-relaxed max-h-10 md:max-h-0 md:opacity-0 overflow-hidden md:group-hover:max-h-16 md:group-hover:opacity-100 transition-all duration-500 mt-2">
                                {hotel.note}
                            </p>

                            <a
                                href={enquiryLink(hotel.name)}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => trackEvent('hotel_rate_enquiry', { hotel: hotel.name })}
                                className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-display font-black uppercase tracking-[0.12em] text-white after:absolute after:inset-0 group-hover:text-white/80 transition-colors"
                            >
                                Get corporate rate
                                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>
                    </article>
                ))}
            </div>

            <div className="max-w-[1240px] mx-auto px-4 mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-gray-400 text-xs font-body leading-relaxed max-w-lg">
                    Bookings must be processed through Flyinco Travel Management Company to
                    receive these negotiated rates.
                </p>
                <a
                    href={bookAllLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('hotel_book_stay')}
                    className="inline-flex items-center justify-center gap-2 self-start rounded-full px-7 py-3.5 font-display font-black text-[11px] uppercase tracking-[0.15em] text-white bg-primary transition-colors hover:bg-secondary shrink-0"
                >
                    Book your stay <ArrowRight className="w-3.5 h-3.5" />
                </a>
            </div>
        </section>
    );
};

export default HotelDeals;
