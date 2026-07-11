'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import Link from 'next/link';

import riyadhSkyline from '../assets/images/kafd/riyadh-skyline.jpg';
import diriyahEvening from '../assets/images/Al diriyah/WhatsApp Image 2026-06-23 at 5.30.29 PM (1).jpeg';
import kingdomSkyBridge from '../assets/images/kingdom tower/WhatsApp Image 2026-06-23 at 5.30.30 PM (1).jpeg';
import hariqahDam from '../assets/images/Hariqah Dam /WhatsApp Image 2026-06-24 at 2.11.18 PM.jpeg';

const popularDestinations = [
    { id: 1, title: 'Riyadh City Tour', location: 'Riyadh', img: riyadhSkyline, path: '/package/riyadh-heritage-tour' },
    { id: 2, title: 'Diriyah Evening', location: 'Diriyah', img: diriyahEvening, path: '/package/diriyah-evening-trip' },
    { id: 3, title: 'Al-Ula Wonders', location: 'Al-Ula', img: 'https://images.unsplash.com/photo-1629667051607-e412f1c493c0?auto=format&fit=crop&q=80&w=800', path: '/package/al-ula-wonders' },
    { id: 4, title: 'Jeddah Red Sea', location: 'Jeddah', img: 'https://images.unsplash.com/photo-1586715065342-98d1f6016fd1?auto=format&fit=crop&q=80&w=800', path: '/package/jeddah-red-sea-escape' },
    { id: 5, title: 'Farasan Islands', location: 'Jazan', img: 'https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?auto=format&fit=crop&q=80&w=800', path: '/package/farasan-islands-trip' },
    { id: 6, title: 'Obhur Diving', location: 'Jeddah', img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800', path: '/package/obhur-al-shamaliyah-diving' },
    { id: 7, title: 'Hariqah Dam', location: 'Riyadh', img: hariqahDam, path: '/package/hariqah-dam-tour' },
    { id: 8, title: 'Kingdom Sky Bridge', location: 'Riyadh', img: kingdomSkyBridge, path: '/package/riyadh-heritage-tour' },
];

const ExploreDestinations = () => {
    return (
        <section className="py-14 md:py-24 bg-white" id="destinations">
            <div className="max-w-[1240px] mx-auto px-4">

                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6">
                    <div>
                        <h4 className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3 text-center md:text-left">Saudi Excellence</h4>
                        <h2 className="text-4xl md:text-5xl font-display font-black text-secondary tracking-tight">
                            Explore Popular Destinations
                        </h2>
                    </div>
                    <Link href="/saudi-packages" className="bg-primary/5 text-primary px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center gap-3 hover:bg-primary hover:text-white transition-all group shrink-0">
                        View All <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
                    {popularDestinations.map((dest, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (idx % 4) * 0.08, duration: 0.5 }}
                            key={dest.id}
                        >
                            <Link
                                href={dest.path}
                                className="relative group h-[260px] md:h-[300px] rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-50 block"
                            >
                                <img
                                    src={dest.img}
                                    alt={dest.title}
                                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[1.5s]"
                                    onError={(e) => {
                                        e.target.src = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=800';
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                                <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col gap-1">
                                    <div className="flex items-center gap-1.5 text-white/70">
                                        <MapPin className="w-3.5 h-3.5 text-primary" />
                                        <span className="text-[10px] font-black uppercase tracking-widest">{dest.location}</span>
                                    </div>
                                    <h3 className="text-white font-display font-black leading-tight drop-shadow-md text-lg group-hover:text-primary transition-colors">
                                        {dest.title}
                                    </h3>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ExploreDestinations;
