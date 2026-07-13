import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import alulaBanner from '../assets/images/alula/alula-discover-banner.webp';

// Contained promo banner under the home hero — Al-Ula campaign artwork with a
// minimal headline and CTA, matching the card style used across the site.
const SaudiOnePackageBanner = () => {
    return (
        <section className="bg-white py-10">
            <div className="max-w-[1240px] mx-auto px-4">
                <Link
                    href="/saudi-packages"
                    className="relative block rounded-[24px] overflow-hidden group shadow-md hover:shadow-xl transition-shadow h-[240px] sm:h-[300px] md:h-[340px]"
                >
                    <img
                        loading="lazy"
                        src={alulaBanner}
                        alt="Traveller walking towards Elephant Rock in Al-Ula, Saudi Arabia"
                        className="absolute inset-0 w-full h-full object-cover object-bottom group-hover:scale-[1.03] transition-transform duration-1000"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent flex items-end">
                        <div className="p-8 md:p-12">
                            <p className="font-display text-white/70 font-bold uppercase tracking-[0.25em] text-[10px] mb-2">
                                Riyadh · Diriyah · Al-Ula · Jeddah
                            </p>
                            <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-black text-white leading-tight drop-shadow-lg mb-4">
                                Discover Saudi in One Package
                            </h2>
                            <span className="inline-flex items-center gap-2 text-white font-black text-[10px] md:text-xs uppercase tracking-[0.2em] border-b-2 border-white/60 pb-1 group-hover:border-primary group-hover:text-primary transition-colors">
                                Explore Saudi Packages <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default SaudiOnePackageBanner;
