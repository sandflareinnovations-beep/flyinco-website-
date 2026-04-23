import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

const cities = [
    { id: 1, name: 'Mumbai', packages: 120, img: 'https://images.unsplash.com/photo-1570160897040-30430ef2015a?auto=format&fit=crop&q=80&w=800' }, // Gateway of India
    { id: 2, name: 'Dubai', packages: 250, img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800' }, // Burj Al Arab
    { id: 3, name: 'Hong Kong', packages: 85, img: 'https://images.unsplash.com/photo-1507450491953-ad4771440702?auto=format&fit=crop&q=80&w=800' }, // Skyline
    { id: 4, name: 'Singapore', packages: 140, img: 'https://images.unsplash.com/photo-1525625239514-75390b13da82?auto=format&fit=crop&q=80&w=800' }, // MBS
    { id: 5, name: 'Tokyo', packages: 95, img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=800' }, // Shibuya Crossing
    { id: 6, name: 'Istanbul', packages: 210, img: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=800' }, // Blue Mosque
    { id: 7, name: 'Amsterdam', packages: 70, img: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&q=80&w=800' }, // Canals
];

const AnimatedCounter = ({ value }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    // A simple representation of an animated counter for the DOM
    return (
        <span ref={ref} className="font-bold text-accent">
            {isInView ? (
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {value}+
                </motion.span>
            ) : '0+'}
        </span>
    );
};

const RegionalSections = () => {
    return (
        <section className="py-24 bg-dark text-white overflow-hidden relative" id="regions">
            {/* Decorative bg elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-12 relative z-10 flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                    <h4 className="text-accent font-bold tracking-widest uppercase mb-2">Global Reach</h4>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white">Top Operating Regions</h2>
                </div>
                <button className="text-sm font-bold border border-white/30 hover:bg-white hover:text-dark px-6 py-3 rounded-full transition-colors whitespace-nowrap">
                    View All Regions
                </button>
            </div>

            <div className="w-full relative z-10 pl-6 md:pl-12">
                <Swiper
                    modules={[Autoplay, FreeMode]}
                    spaceBetween={20}
                    slidesPerView="auto"
                    freeMode={true}
                    speed={3000}
                    autoplay={{ delay: 0, disableOnInteraction: false }}
                    className="city-swiper pb-10"
                >
                    {cities.map((city) => (
                        <SwiperSlide key={city.id} className="!w-64 md:!w-80">
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="group relative rounded-3xl overflow-hidden glass-card h-[400px]"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent z-10" />
                                <img
                                    src={city.img}
                                    alt={city.name}
                                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000"
                                />

                                <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                                    <h3 className="text-3xl font-display font-bold text-white mb-2 group-hover:text-accent transition-colors">
                                        {city.name}
                                    </h3>
                                    <div className="flex justify-between items-center mt-4">
                                        <p className="text-sm text-gray-300 font-medium">
                                            <AnimatedCounter value={city.packages} /> Packages
                                        </p>
                                        <button className="text-sm bg-white/20 hover:bg-accent backdrop-blur-sm text-white px-4 py-2 rounded-full font-bold transition-colors">
                                            View Tours
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default RegionalSections;
