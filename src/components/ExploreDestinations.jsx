import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const popularDestinations = [
    { id: 1, title: 'Al-Ula Heritage', img: 'https://images.unsplash.com/photo-1629667051607-e412f1c493c0?auto=format&fit=crop&q=80&w=800' },
    { id: 2, title: 'Jeddah Red Sea', img: 'https://images.unsplash.com/photo-1586715065342-98d1f6016fd1?auto=format&fit=crop&q=80&w=800' },
    { id: 3, title: 'Modern Riyadh', img: 'https://images.unsplash.com/photo-1663900108404-a05e8bf82cda?auto=format&fit=crop&q=80&w=800' },
    { id: 4, title: 'Abha Mountains', img: 'https://images.unsplash.com/photo-1705428193181-0cea0bf8e814?auto=format&fit=crop&q=80&w=800' },
    { id: 5, title: 'NEOM Future', img: 'https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&q=80&w=800' },
];

const ExploreDestinations = () => {
    const handleError = (e) => {
        e.target.src = 'https://images.unsplash.com/photo-1507608616172-50162bd9395e?auto=format&fit=crop&q=80&w=800';
    };

    return (
        <section className="py-24 bg-white" id="destinations">
            <div className="max-w-[1240px] mx-auto px-4">

                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6">
                    <div>
                        <h4 className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3 text-center md:text-left">Saudi Excellence</h4>
                        <h2 className="text-4xl md:text-5xl font-display font-black text-secondary tracking-tight">
                            Explore Popular Destinations
                        </h2>
                    </div>
                    <Link to="/international-packages" className="bg-primary/5 text-primary px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center gap-3 hover:bg-primary hover:text-white transition-all group">
                        View All <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                    {popularDestinations.map((dest, idx) => (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            key={dest.id}
                            className="relative group h-[340px] rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-50"
                        >
                            <img
                                src={dest.img}
                                alt={dest.title}
                                className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[1.5s]"
                                    onError={(e) => {
                                        e.target.src = 'https://images.unsplash.com/photo-1507608616172-50162bd9395e?auto=format&fit=crop&q=80&w=800';
                                    }}
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex items-end h-full">
                                <h3 className="text-white font-display font-black leading-tight drop-shadow-md text-xl">
                                    {dest.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ExploreDestinations;
