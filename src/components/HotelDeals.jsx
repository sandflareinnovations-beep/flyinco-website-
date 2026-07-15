"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, Check, ArrowRight } from 'lucide-react';
import holidayInnImg from '../assets/images/hotels/holiday-inn-al-qasr.webp';
import novotelImg from '../assets/images/hotels/novotel-suites-olaya.webp';
import menaImg from '../assets/images/hotels/mena-hotel-nasiriyah.webp';

const GOLD = '#D4AF37';
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

// Minimal Riyadh skyline silhouette (Kingdom Centre + Al Faisaliyah among towers).
const RiyadhSkyline = (props) => (
    <svg viewBox="0 0 1200 160" fill="currentColor" preserveAspectRatio="xMidYMax slice" aria-hidden="true" {...props}>
        <path d="M0 160V120h40v-18h14v18h30V96h12V82h12v14h12v64h44V70h10V52h10v18h10v90h56v-36h30v36h48V60l32-38 32 38v34h-10v66h60v-24h26v24h50V78c0-30 14-52 34-62 20 10 34 32 34 62v18h-16v64h58V90h12V72h12v18h12v70h48v-30h28v30h46V54h10V36h10v18h10v106h52v-44h26v44h46V88l28-56 28 56v72h52v-26h24v26h44V96h12V80h12v16h12v64H0Z" />
    </svg>
);

const HotelDeals = () => {
    return (
        <section className="relative overflow-hidden bg-secondary py-16 md:py-20">
            {/* Faint travel dot-grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
                    backgroundSize: '28px 28px',
                }}
            />
            {/* Brand glow accents */}
            <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-primary/40 blur-[140px]" />
            <div className="absolute -bottom-24 -right-24 w-[380px] h-[380px] rounded-full blur-[150px]" style={{ backgroundColor: 'rgba(212,175,55,0.18)' }} />
            {/* Riyadh skyline silhouette */}
            <RiyadhSkyline className="absolute bottom-0 left-0 w-full h-28 md:h-36 text-white/[0.05] pointer-events-none" />

            <div className="relative max-w-[1240px] mx-auto px-4">
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
                        className="rounded-[24px] border border-white/15 bg-white/[0.07] backdrop-blur-xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)] p-6 sm:p-10 md:p-12"
                    >
                        {/* Header */}
                        <div className="text-center mb-10">
                            <span
                                className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[10px] md:text-[11px] font-display font-bold uppercase tracking-[0.22em]"
                                style={{ color: GOLD, borderColor: 'rgba(212,175,55,0.4)', backgroundColor: 'rgba(212,175,55,0.08)' }}
                            >
                                Deal Valid Until 31 December 2026
                            </span>
                            <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-display font-black text-white leading-tight">
                                Exclusive Hotel Deals in <span style={{ color: GOLD }}>Riyadh</span>
                            </h2>
                            <p className="mt-4 text-white/70 font-body text-sm md:text-base max-w-xl mx-auto">
                                Stay at carefully selected hotels with exclusive Flyinco corporate rates.
                            </p>
                        </div>

                        {/* Cards: swipe carousel on mobile, 2+1 on tablet, 3-up on desktop */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-60px' }}
                            className="flex overflow-x-auto snap-x snap-mandatory gap-5 -mx-6 px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:mx-0 md:px-0 md:pb-0"
                        >
                            {hotels.map((hotel) => (
                                <motion.article
                                    key={hotel.name}
                                    variants={cardVariants}
                                    className="group relative flex flex-col min-w-[80%] sm:min-w-[55%] snap-center md:min-w-0 md:last:col-span-2 md:last:justify-self-center md:last:w-[calc(50%-10px)] lg:last:col-span-1 lg:last:w-auto rounded-[24px] overflow-hidden border border-white/10 bg-white/[0.06] backdrop-blur-md shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_-15px_rgba(0,0,0,0.6)] hover:border-white/25"
                                >
                                    {/* Shimmer sweep on hover */}
                                    <div className="pointer-events-none absolute inset-0 z-10 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-out" />

                                    <div className="relative h-52 md:h-56 overflow-hidden">
                                        <img
                                            loading="lazy"
                                            src={hotel.img}
                                            alt={hotel.alt}
                                            width="880"
                                            height="660"
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
                                        <span
                                            className="absolute top-4 left-4 rounded-full px-3 py-1 text-[9px] font-display font-black uppercase tracking-[0.18em] text-secondary shadow-md"
                                            style={{ backgroundColor: GOLD }}
                                        >
                                            Exclusive
                                        </span>
                                    </div>

                                    <div className="flex flex-col flex-1 p-5 md:p-6">
                                        <div className="flex items-center gap-1 mb-2" aria-label={`${hotel.stars} star hotel`}>
                                            {Array.from({ length: hotel.stars }).map((_, i) => (
                                                <Star key={i} className="w-3.5 h-3.5" fill={GOLD} stroke="none" />
                                            ))}
                                            <span className="ml-1.5 text-[10px] uppercase tracking-widest text-white/50 font-body">
                                                {hotel.stars} Star
                                            </span>
                                        </div>
                                        <h3 className="font-display font-bold text-white text-lg leading-snug">
                                            {hotel.name}
                                        </h3>
                                        <p className="mt-1.5 flex items-center gap-1.5 text-white/60 text-xs font-body">
                                            <MapPin className="w-3.5 h-3.5" style={{ color: GOLD }} />
                                            {hotel.area}
                                        </p>
                                        <a
                                            href={enquiryLink(hotel.name)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-5 inline-flex items-center gap-2 self-start text-[11px] font-display font-black uppercase tracking-[0.18em] text-white border-b pb-1 transition-colors hover:text-[#D4AF37]"
                                            style={{ borderColor: 'rgba(212,175,55,0.5)' }}
                                        >
                                            View Details <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                                        </a>
                                    </div>
                                </motion.article>
                            ))}
                        </motion.div>

                        {/* Footer: assurances, notice, CTA */}
                        <div className="mt-10 text-center">
                            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
                                <span className="inline-flex items-center gap-2 text-white/80 text-sm font-body">
                                    <Check className="w-4 h-4" style={{ color: GOLD }} /> Special Corporate Rates
                                </span>
                                <span className="inline-flex items-center gap-2 text-white/80 text-sm font-body">
                                    <Check className="w-4 h-4" style={{ color: GOLD }} /> Valid until 31 December 2026
                                </span>
                            </div>
                            <p className="mt-4 mx-auto max-w-2xl text-white/50 text-xs md:text-sm font-body italic leading-relaxed">
                                All hotel bookings must be processed through Flyinco Travel Management Company to
                                receive these exclusive negotiated rates.
                            </p>
                            <a
                                href={`${WHATSAPP}?text=${encodeURIComponent('Hello Flyinco, I would like to book a hotel stay in Riyadh at your exclusive corporate rates.')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-7 inline-flex items-center gap-2 rounded-full px-8 py-3.5 font-display font-black text-xs uppercase tracking-[0.2em] text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(212,175,55,0.5)]"
                                style={{ backgroundColor: GOLD }}
                            >
                                Book Your Stay <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HotelDeals;
