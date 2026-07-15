"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, Check, ArrowRight } from 'lucide-react';
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
        alt: 'Exterior facade of Ramada by Wyndham Riyadh at King Fahd Road',
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.15 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const enquiryLink = (hotelName) =>
    `${WHATSAPP}?text=${encodeURIComponent(
        `Hello Flyinco, I would like to enquire about the exclusive corporate rate for ${hotelName}.`
    )}`;

const HotelDeals = () => {
    return (
        <div className="relative">
            {/* Gentle perpetual float on the whole glass banner */}
            <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 48, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="rounded-[24px] border border-white/15 bg-white/[0.07] backdrop-blur-xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)] p-4 sm:p-6 md:p-8"
                >
                    {/* Header */}
                    <div className="text-center mb-5">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[9px] md:text-[10px] font-display font-bold uppercase tracking-[0.22em] text-white/80">
                            Deal Valid Until 31 December 2026
                        </span>
                        <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-display font-black text-white leading-tight">
                            Exclusive Hotel Deals in Riyadh
                        </h2>
                        <p className="mt-2 text-white/70 font-body text-xs md:text-sm max-w-xl mx-auto">
                            Stay at carefully selected hotels with exclusive Flyinco corporate rates.
                        </p>
                    </div>

                    {/* Cards: swipe carousel on mobile, 2-up on tablet, 2-up on desktop (side layout) */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-3"
                    >
                        {hotels.map((hotel) => (
                            <motion.article
                                key={hotel.name}
                                variants={cardVariants}
                                className="group relative flex flex-col rounded-[20px] overflow-hidden border border-white/10 bg-white/[0.06] backdrop-blur-md shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_-15px_rgba(0,0,0,0.6)] hover:border-white/25"
                            >
                                {/* Shimmer sweep on hover */}
                                <div className="pointer-events-none absolute inset-0 z-10 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-out" />

                                <div className="relative h-36 overflow-hidden">
                                    <img
                                        loading="lazy"
                                        src={hotel.img}
                                        alt={hotel.alt}
                                        width="880"
                                        height="660"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
                                    <span className="absolute top-3 left-3 rounded-full px-3 py-1 text-[9px] font-display font-black uppercase tracking-[0.18em] text-secondary bg-white shadow-md">
                                        Exclusive
                                    </span>
                                </div>

                                <div className="flex flex-col flex-1 p-3">
                                    <div className="flex items-center gap-1 mb-2" aria-label={`${hotel.stars} star hotel`}>
                                        {Array.from({ length: hotel.stars }).map((_, i) => (
                                            <Star key={i} className="w-3 h-3 text-white" fill="currentColor" stroke="none" />
                                        ))}
                                        <span className="ml-1.5 text-[10px] uppercase tracking-widest text-white/50 font-body">
                                            {hotel.stars} Star
                                        </span>
                                    </div>
                                    <h3 className="font-display font-bold text-white text-sm leading-snug">
                                        {hotel.name}
                                    </h3>
                                    <p className="mt-1 flex items-center gap-1.5 text-white/60 text-[11px] font-body">
                                        <MapPin className="w-3 h-3 text-white/60" />
                                        {hotel.area}
                                    </p>
                                    <a
                                        href={enquiryLink(hotel.name)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-2 inline-flex items-center gap-1.5 self-start text-[10px] font-display font-black uppercase tracking-[0.18em] text-white border-b border-white/30 pb-0.5 transition-colors hover:text-white hover:border-white"
                                    >
                                        View Details <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                                    </a>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>

                    {/* Footer: assurances, notice, CTA */}
                    <div className="mt-5 text-center">
                        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
                            <span className="inline-flex items-center gap-1.5 text-white/80 text-xs font-body">
                                <Check className="w-3.5 h-3.5 text-white/70" /> Special Corporate Rates
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-white/80 text-xs font-body">
                                <Check className="w-3.5 h-3.5 text-white/70" /> Valid until 31 December 2026
                            </span>
                        </div>
                        <p className="mt-2 mx-auto max-w-2xl text-white/50 text-[11px] md:text-xs font-body italic leading-relaxed">
                            All hotel bookings must be processed through Flyinco Travel Management Company to
                            receive these exclusive negotiated rates.
                        </p>
                        <a
                            href={`${WHATSAPP}?text=${encodeURIComponent('Hello Flyinco, I would like to book a hotel stay in Riyadh at your exclusive corporate rates.')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center gap-2 rounded-full px-6 py-3 font-display font-black text-[11px] uppercase tracking-[0.2em] text-secondary bg-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(255,255,255,0.3)]"
                        >
                            Book Your Stay <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default HotelDeals;
