'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Plane } from 'lucide-react';
import kafdRiyadh from '../assets/images/kafd/riyadh-skyline.webp';
import { alulaHero } from '../lib/heroImages';
import { whatsappLink, trackEvent } from '../lib/analytics';

const SLIDE_MS = 6500;

// Serve Unsplash images at the viewport's real width instead of a fixed 2000px.
const unsplashSrcSet = (base) =>
    [640, 1080, 1600, 2000].map((w) => `${base}?auto=format&fit=crop&q=70&w=${w} ${w}w`).join(', ');

// Small still for the thumbnail rail — never the 2000px hero file.
const thumb = (base) => `${base}?auto=format&fit=crop&q=60&w=240`;

const slides = [
    {
        image: alulaHero.src,
        srcSet: alulaHero.srcSet,
        thumb: alulaHero.src,
        region: 'AlUla · Saudi Arabia',
        title: 'Al-Ula Heritage',
        subtitle: 'Sandstone tombs, desert canyons and 200,000 years of history — two days out of Riyadh.',
    },
    {
        image: kafdRiyadh,
        thumb: kafdRiyadh,
        region: 'Riyadh · Saudi Arabia',
        title: 'Modern Riyadh',
        subtitle: 'Sky Bridge sunsets, Diriyah evenings and the capital our head office knows street by street.',
    },
    {
        image: 'https://images.unsplash.com/photo-1586715065342-98d1f6016fd1?auto=format&fit=crop&q=70&w=2000',
        srcSet: unsplashSrcSet('https://images.unsplash.com/photo-1586715065342-98d1f6016fd1'),
        thumb: thumb('https://images.unsplash.com/photo-1586715065342-98d1f6016fd1'),
        region: 'Jeddah · Red Sea',
        title: 'The Red Sea',
        subtitle: 'Coral reefs, Al-Balad lanes and the warm side of the Kingdom, on the water.',
    },
    {
        image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=70&w=2000',
        srcSet: unsplashSrcSet('https://images.unsplash.com/photo-1602216056096-3b40cc0c9944'),
        thumb: thumb('https://images.unsplash.com/photo-1602216056096-3b40cc0c9944'),
        region: 'Kerala · India',
        title: 'Backwaters & Hills',
        subtitle: 'Houseboats, tea country and family holidays home, arranged by our India desk.',
    },
];

const destinations = [
    'Saudi Arabia',
    'Bahrain & the Gulf',
    'India',
    'Europe & worldwide',
    'Umrah & Ziyarah',
];

const tripTypes = ['Family holiday', 'Honeymoon', 'Adventure', 'Corporate travel', 'Visa only'];

// Each desk is a real phone line, so the row tells a visitor who picks up
// rather than just listing flags.
const desks = [
    { label: 'Riyadh', note: 'Head office', tel: '+966556182021', display: '+966 55 618 2021' },
    { label: 'Manama', note: 'Bahrain', tel: '+97333372021', display: '+973 3337 2021' },
    { label: 'India', note: 'Desk', mail: 'visa@flyinco.com', display: 'visa@flyinco.com' },
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [destination, setDestination] = useState(destinations[0]);
    const [tripType, setTripType] = useState(tripTypes[0]);

    const [paused, setPaused] = useState(false);
    const reduceMotion = useReducedMotion();

    // The first slide must be visible in the server-rendered HTML (it's the
    // page's LCP element), so entrance animations only apply to later slides.
    const hasMounted = useRef(false);
    useEffect(() => {
        hasMounted.current = true;
    }, []);

    // Auto-advancing content has to be stoppable (WCAG 2.2.2), so the rotation
    // holds while the pointer or keyboard focus is inside the hero, and never
    // starts at all for visitors who asked for reduced motion.
    const playing = !paused && !reduceMotion;

    useEffect(() => {
        if (!playing) return undefined;
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, SLIDE_MS);
        return () => clearInterval(timer);
    }, [currentSlide, playing]);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    const planHref = whatsappLink(`a ${tripType.toLowerCase()} to ${destination}`);
    const slide = slides[currentSlide];

    return (
        <section
            className="relative min-h-[92vh] lg:min-h-[760px] w-full flex items-center pt-32 md:pt-28 pb-12 md:pb-20"
            id="home"
            aria-roledescription="carousel"
            aria-label="Featured destinations"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
        >

            {/* Background frame */}
            <div className="absolute top-24 md:top-20 left-4 right-4 bottom-4 md:bottom-12 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl bg-secondary">
                <AnimatePresence initial={false}>
                    <motion.div
                        key={currentSlide}
                        initial={hasMounted.current ? { opacity: 0 } : false}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.1, ease: 'easeInOut' }}
                        className="absolute inset-0"
                    >
                        <img
                            src={slide.image}
                            srcSet={slide.srcSet}
                            sizes="100vw"
                            alt={`${slide.title} — ${slide.region}`}
                            fetchPriority={currentSlide === 0 ? 'high' : 'auto'}
                            className="w-full h-full object-cover ken-burns"
                            onError={(e) => {
                                e.target.src = 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2000';
                            }}
                        />
                        {/* Scrims in the brand's own dark purple. These carry the
                            text contrast, so they are sized for the brightest
                            photograph in the set (white mosque, sunlit palms), not
                            the darkest — a weaker ramp lost the headline on both. */}
                        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-secondary/95 via-secondary/80 via-40% to-secondary/15" />
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary/75 via-transparent to-transparent" />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Foreground */}
            <div className="relative z-20 w-full max-w-[1240px] mx-auto px-8 md:px-12 lg:px-16">

                {/* Both copies share one grid cell so the outgoing slide fades
                    across the incoming one. `mode="wait"` used to run them in
                    sequence, which left ~400ms with no readable headline at all.
                    The fixed min-height stops the plan bar below from jumping
                    when a title wraps to two lines. */}
                <div className="grid max-w-2xl min-h-[188px] sm:min-h-[248px] lg:min-h-[268px] items-end">
                    <AnimatePresence initial={false}>
                        <motion.div
                            key={currentSlide}
                            initial={hasMounted.current ? { y: 16, opacity: 0 } : false}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.55, ease: 'easeOut' }}
                            className="[grid-area:1/1]"
                        >
                            <p className="flex items-center gap-3 text-white/80 font-display font-bold uppercase tracking-[0.28em] text-[10px] sm:text-xs mb-5">
                                <span className="h-px w-8 bg-white/45" aria-hidden="true" />
                                {slide.region}
                            </p>
                            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black text-white mb-5 leading-[0.95] tracking-tight drop-shadow-2xl">
                                {slide.title}
                            </h1>
                            <p className="text-sm sm:text-lg text-white/85 font-body font-medium leading-relaxed max-w-md drop-shadow">
                                {slide.subtitle}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Plan bar */}
                <div className="mt-8 md:mt-10 bg-white/95 backdrop-blur-md rounded-[1.75rem] p-2 shadow-2xl border border-white/40 max-w-2xl flex flex-col sm:flex-row gap-2">
                    <div className="flex-1 px-5 py-3">
                        <label htmlFor="hero-destination" className="block text-[10px] uppercase tracking-[0.18em] font-black text-gray-400 mb-1">
                            Where to
                        </label>
                        <select
                            id="hero-destination"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            className="bg-transparent outline-none w-full text-secondary font-display font-bold text-sm cursor-pointer focus-visible:ring-2 focus-visible:ring-primary rounded"
                        >
                            {destinations.map((d) => <option key={d}>{d}</option>)}
                        </select>
                    </div>

                    <div className="hidden sm:block w-px bg-gray-200 my-3" aria-hidden="true" />

                    <div className="flex-1 px-5 py-3 border-t sm:border-t-0 border-gray-100">
                        <label htmlFor="hero-trip-type" className="block text-[10px] uppercase tracking-[0.18em] font-black text-gray-400 mb-1">
                            Trip type
                        </label>
                        <select
                            id="hero-trip-type"
                            value={tripType}
                            onChange={(e) => setTripType(e.target.value)}
                            className="bg-transparent outline-none w-full text-secondary font-display font-bold text-sm cursor-pointer focus-visible:ring-2 focus-visible:ring-primary rounded"
                        >
                            {tripTypes.map((t) => <option key={t}>{t}</option>)}
                        </select>
                    </div>

                    <a
                        href={planHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackEvent('hero_plan_trip', { destination, trip_type: tripType })}
                        className="bg-primary text-white rounded-[1.25rem] px-7 py-4 font-display font-black text-xs uppercase tracking-[0.15em] flex items-center justify-center gap-2.5 hover:bg-secondary transition-colors shadow-lg shadow-primary/25 shrink-0"
                    >
                        Plan my trip <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

                {/* Desk row */}
                <div className="mt-6 flex flex-wrap items-center gap-2 sm:gap-2.5">
                    {desks.map((desk) => (
                        <a
                            key={desk.label}
                            href={desk.tel ? `tel:${desk.tel}` : `mailto:${desk.mail}`}
                            aria-label={`${desk.label} desk — ${desk.display}`}
                            className="group flex items-baseline gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm px-3.5 sm:pl-4 sm:pr-3 py-2 hover:bg-white hover:border-white transition-colors"
                        >
                            <span className="font-display font-black text-[11px] uppercase tracking-[0.14em] text-white group-hover:text-secondary transition-colors">
                                {desk.label}
                            </span>
                            <span className="hidden sm:inline text-[10px] font-bold text-white/60 group-hover:text-gray-500 transition-colors">
                                {desk.display}
                            </span>
                        </a>
                    ))}
                    <a
                        href="https://travelfare.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackEvent('hero_special_fare_click')}
                        className="flex items-center gap-2 rounded-full bg-primary pl-3.5 pr-4 py-2 hover:bg-secondary transition-colors"
                    >
                        <Plane className="w-3.5 h-3.5 text-white" />
                        <span className="font-display font-black text-[11px] uppercase tracking-[0.14em] text-white">
                            Special fares
                        </span>
                    </a>
                </div>

                {/* Thumbnail rail */}
                <div className="mt-8 md:mt-10 flex items-end gap-3 md:gap-4 justify-start md:justify-end overflow-x-auto hide-scrollbar -mx-2 px-2 pb-1">
                    <div className="hidden lg:flex gap-2 mr-2 pb-1">
                        <button
                            onClick={prevSlide}
                            aria-label="Previous destination"
                            className="w-10 h-10 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white hover:text-secondary transition-colors"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={nextSlide}
                            aria-label="Next destination"
                            className="w-10 h-10 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white hover:text-secondary transition-colors"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>

                    {slides.map((s, idx) => {
                        const active = idx === currentSlide;
                        return (
                            <button
                                key={s.title}
                                onClick={() => setCurrentSlide(idx)}
                                aria-label={`Show ${s.title}`}
                                aria-current={active ? 'true' : undefined}
                                className="group shrink-0 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-2xl"
                            >
                                <span
                                    className={`block rounded-2xl overflow-hidden border-2 transition-all duration-500 ${active ? 'w-24 h-16 md:w-32 md:h-20 border-white shadow-xl' : 'w-16 h-16 md:w-20 md:h-20 border-white/25 opacity-65 group-hover:opacity-100 group-hover:border-white/60'}`}
                                >
                                    <img
                                        loading="lazy"
                                        src={s.thumb}
                                        alt=""
                                        aria-hidden="true"
                                        className="w-full h-full object-cover"
                                    />
                                </span>
                                <span className="mt-2 block h-0.5 w-full bg-white/25 rounded-full overflow-hidden">
                                    {active && (playing ? (
                                        // scaleX rather than width: the countdown runs
                                        // every frame and must not trigger layout.
                                        <motion.span
                                            key={`${currentSlide}-run`}
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: 1 }}
                                            transition={{ duration: SLIDE_MS / 1000, ease: 'linear' }}
                                            className="block h-full w-full origin-left bg-primary"
                                        />
                                    ) : (
                                        <span className="block h-full w-full bg-primary" />
                                    ))}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Hero;
