"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, ArrowRight, BadgeCheck } from 'lucide-react';
import holidayInnImg from '../assets/images/hotels/holiday-inn-al-qasr.webp';
import novotelImg from '../assets/images/hotels/novotel-suites-olaya.webp';
import menaImg from '../assets/images/hotels/mena-hotel-nasiriyah.webp';
import ramadaImg from '../assets/images/hotels/ramada-wyndham-riyadh.jpg';

const WHATSAPP = 'https://wa.me/966556182021';

const hotels = [
    {
        name: 'Holiday Inn Al Qasr Riyadh',
        stars: 4,
        area: 'Al Qasr, Riyadh',
        img: holidayInnImg,
        alt: 'Illuminated entrance of Holiday Inn Al Qasr Riyadh at dusk',
    },
    {
        name: 'Novotel Suites Riyadh Olaya',
        stars: 4,
        area: 'Al Olaya, Riyadh',
        img: novotelImg,
        alt: 'Exterior facade of Novotel Suites Riyadh Olaya',
    },
    {
        name: 'MENA Hotel Nasiriyah',
        stars: 3,
        area: 'Nasiriyah, Riyadh',
        img: menaImg,
        alt: 'Street view of MENA Hotel Nasiriyah in Riyadh at twilight',
    },
    {
        name: 'Ramada by Wyndham Riyadh',
        stars: 5,
        area: 'King Fahd Road, Riyadh',
        img: ramadaImg,
        alt: 'Ramada by Wyndham Riyadh tower illuminated at night',
    },
];

const enquiryLink = (hotelName) =>
    `${WHATSAPP}?text=${encodeURIComponent(
        `Hello Flyinco, I would like to enquire about the exclusive corporate rate for ${hotelName}.`
    )}`;

const HotelDeals = () => {
    return (
        <section className="bg-[#F7F5FA] py-14 md:py-20">
            <div className="max-w-[1240px] mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8 md:mb-10"
                >
                    <div>
                        <p className="text-[11px] font-display font-bold uppercase tracking-[0.22em] text-primary">
                            Riyadh · Corporate Rates
                        </p>
                        <h2 className="mt-2 text-3xl md:text-4xl font-display font-black text-secondary leading-tight">
                            Exclusive Hotel Deals
                        </h2>
                        <p className="mt-2 text-gray-500 font-body text-sm md:text-base max-w-xl">
                            Stay at carefully selected Riyadh hotels with negotiated Flyinco
                            corporate rates.
                        </p>
                    </div>
                    <div className="flex items-center gap-4 shrink-0">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/15 bg-primary/5 px-3.5 py-1.5 text-[11px] font-body font-medium text-primary whitespace-nowrap">
                            <BadgeCheck className="w-3.5 h-3.5" />
                            Valid until 31 Dec 2026
                        </span>
                        <a
                            href={`${WHATSAPP}?text=${encodeURIComponent('Hello Flyinco, I would like to book a hotel stay in Riyadh at your exclusive corporate rates.')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:inline-flex items-center gap-2 whitespace-nowrap rounded-full px-6 py-3 font-display font-bold text-[11px] uppercase tracking-[0.15em] text-white bg-primary transition-all duration-300 hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
                        >
                            Book Your Stay <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                    </div>
                </motion.div>

                {/* Hotel cards — one horizontal row on desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {hotels.map((hotel, index) => (
                        <motion.article
                            key={hotel.name}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
                            className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-[0_2px_12px_rgba(26,9,51,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-12px_rgba(26,9,51,0.18)]"
                        >
                            <div className="relative h-44 overflow-hidden">
                                <img
                                    loading="lazy"
                                    src={hotel.img}
                                    alt={hotel.alt}
                                    width="880"
                                    height="660"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <span className="absolute top-3 left-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-body font-semibold text-secondary shadow-sm">
                                    Corporate Rate
                                </span>
                            </div>

                            <div className="flex flex-col flex-1 p-5">
                                <div className="flex items-center gap-1" aria-label={`${hotel.stars} star hotel`}>
                                    {Array.from({ length: hotel.stars }).map((_, i) => (
                                        <Star key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" stroke="none" />
                                    ))}
                                    <span className="ml-1.5 text-[11px] text-gray-400 font-body">
                                        {hotel.stars}-star hotel
                                    </span>
                                </div>
                                <h3 className="mt-2 font-display font-bold text-secondary text-base leading-snug">
                                    {hotel.name}
                                </h3>
                                <p className="mt-1.5 flex items-center gap-1.5 text-gray-500 text-xs font-body">
                                    <MapPin className="w-3.5 h-3.5 shrink-0 text-primary/60" />
                                    {hotel.area}
                                </p>
                                {/* Stretched link — the whole card is clickable */}
                                <a
                                    href={enquiryLink(hotel.name)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-auto pt-4 inline-flex items-center gap-1.5 text-[13px] font-body font-semibold text-primary transition-colors group-hover:text-secondary after:absolute after:inset-0"
                                >
                                    Get corporate rate
                                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                                </a>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Footer: disclaimer + mobile CTA */}
                <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <p className="text-gray-400 text-xs font-body leading-relaxed max-w-lg">
                        Bookings must be processed through Flyinco Travel Management Company to
                        receive these negotiated rates.
                    </p>
                    <a
                        href={`${WHATSAPP}?text=${encodeURIComponent('Hello Flyinco, I would like to book a hotel stay in Riyadh at your exclusive corporate rates.')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="md:hidden inline-flex items-center justify-center gap-2 self-start rounded-full px-6 py-3 font-display font-bold text-[11px] uppercase tracking-[0.15em] text-white bg-primary transition-colors hover:bg-primary/90"
                    >
                        Book Your Stay <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HotelDeals;
