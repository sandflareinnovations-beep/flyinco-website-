import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import kafdRiyadh from '../assets/images/kafd/kafd-riyadh.jpg';

// Wide promo banner under the home hero, inspired by Visit Saudi campaign art:
// Al-Ula backdrop, bold headline, and a Sadu-weave style colour strip.
const SaudiOnePackageBanner = () => {
    return (
        <section className="bg-white pt-10 pb-2">
            <div className="max-w-[1240px] mx-auto px-4">
                <Link
                    href="/saudi-packages"
                    className="relative block rounded-[2rem] overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow"
                >
                    <div className="h-[300px] md:h-[380px] w-full overflow-hidden flex">
                        <img
                            src="https://images.unsplash.com/photo-1629667051607-e412f1c493c0?auto=format&fit=crop&q=80&w=1200"
                            alt="Elephant Rock in Al-Ula, Saudi Arabia at dusk"
                            className="w-3/5 h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                        />
                        <img
                            src={kafdRiyadh}
                            alt="KAFD skyline in Riyadh, Saudi Arabia"
                            className="w-2/5 h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                        />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent flex items-end">
                        <div className="p-8 md:p-12 pb-10 md:pb-14 w-full">
                            <p className="font-display text-white/80 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-3">
                                Riyadh · Diriyah · Al-Ula · Jeddah
                            </p>
                            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-white leading-tight drop-shadow-2xl mb-5">
                                Discover Saudi in One Package
                            </h2>
                            <span className="inline-flex items-center gap-2 bg-white text-secondary px-6 py-3 rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.2em] shadow-xl group-hover:bg-primary group-hover:text-white transition-all">
                                Explore Saudi Packages <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </div>
                    </div>

                    {/* Sadu-weave inspired colour strip */}
                    <div
                        aria-hidden="true"
                        className="absolute bottom-0 left-0 right-0 h-2.5"
                        style={{
                            background:
                                'repeating-linear-gradient(90deg, #6A2B86 0 28px, #E4572E 28px 56px, #17A398 56px 84px, #FFB800 84px 112px, #1A0933 112px 140px, #C1292E 140px 168px)',
                        }}
                    />
                </Link>
            </div>
        </section>
    );
};

export default SaudiOnePackageBanner;
