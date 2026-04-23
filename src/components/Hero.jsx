import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
    {
        image: 'https://images.unsplash.com/photo-1629667051607-e412f1c493c0?auto=format&fit=crop&q=80&w=2000',
        title: 'Al-Ula Heritage',
        subtitle: 'Journey Through Time in Ancient Landscapes'
    },
    {
        image: 'https://images.unsplash.com/photo-1663900108404-a05e8bf82cda?auto=format&fit=crop&q=80&w=2000',
        title: 'Modern Riyadh',
        subtitle: 'Experience the Fusion of Heritage and Future'
    },
    {
        image: 'https://images.unsplash.com/photo-1586715065342-98d1f6016fd1?auto=format&fit=crop&q=80&w=2000',
        title: 'Jeddah Red Sea',
        subtitle: 'Unforgettable Journeys in the Bride of the Red Sea'
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    return (
        <div className="relative min-h-[90vh] md:h-screen lg:min-h-[700px] w-full flex items-center pt-20 pb-16" id="home">

            {/* Background Slider Section */}
            <div className="absolute top-24 md:top-20 left-4 right-4 bottom-4 md:bottom-12 rounded-[2.5rem] overflow-hidden shadow-2xl">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
                        <img
                            src={slides[currentSlide].image}
                            alt="Hero Image"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.src = 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2000';
                            }}
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Slider Controls - Hidden on very small screens, visible on md+ */}
                <div className="hidden md:flex absolute bottom-10 left-10 z-30 gap-4">
                    <button onClick={prevSlide} className="w-12 h-12 rounded-full border border-white/30 bg-black/10 backdrop-blur-sm text-white flex items-center justify-center hover:bg-primary hover:border-primary transition-all pointer-events-auto">
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button onClick={nextSlide} className="w-12 h-12 rounded-full border border-white/30 bg-black/10 backdrop-blur-sm text-white flex items-center justify-center hover:bg-primary hover:border-primary transition-all pointer-events-auto">
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Slide Indicators - Centered on mobile, right on desktop */}
                <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-auto md:right-10 z-30 flex gap-2">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`h-1.5 transition-all rounded-full pointer-events-auto ${currentSlide === idx ? 'w-8 bg-primary' : 'w-2 bg-white/40'}`}
                        />
                    ))}
                </div>
            </div>

            {/* Content Container */}
            <div className="relative z-20 container mx-auto px-8 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-center md:justify-between gap-12 md:gap-0 h-full mt-10 md:mt-0 pointer-events-none">

                {/* Main Text block */}
                <div className="max-w-xl w-full flex flex-col justify-center text-center md:text-left py-6">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentSlide}
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -30, opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="pointer-events-none flex flex-col items-center md:items-start"
                        >
                            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black text-white mb-4 md:mb-6 leading-tight tracking-tight drop-shadow-2xl">
                                {slides[currentSlide].title}
                            </h1>
                            <p className="text-base sm:text-xl md:text-2xl text-white font-body font-medium drop-shadow-md tracking-wider max-w-sm border-t-4 md:border-t-0 border-l-0 md:border-l-4 pt-4 md:pt-0 border-primary md:pl-6">
                                {slides[currentSlide].subtitle}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Floating Search Bar and Promo (Right side) */}
                <div className="w-full md:w-auto flex flex-col gap-4 sm:gap-6 z-30 px-2 sm:px-0 pb-10 md:pb-0 pointer-events-none text-left">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="bg-white/95 backdrop-blur-md rounded-3xl p-2 sm:p-3 pl-6 sm:pl-8 flex items-center w-full md:w-80 lg:w-96 shadow-2xl border border-white/20 pointer-events-auto mx-auto"
                    >
                        <div className="flex-1">
                            <label className="block text-[10px] uppercase tracking-widest font-black text-gray-400 mb-0.5">Where to?</label>
                            <input
                                type="text"
                                placeholder="Search Destinations"
                                className="bg-transparent outline-none w-full text-secondary font-bold placeholder-gray-400 text-xs sm:text-sm"
                            />
                        </div>
                        <button className="bg-primary text-white w-12 h-12 sm:w-14 sm:h-14 rounded-2xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 flex items-center justify-center group shrink-0">
                            <Search className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                        </button>
                    </motion.div>

                    {/* Flight Promo Card Link */}
                    <motion.a
                        href="https://travelfare.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="group relative w-full md:w-80 lg:w-96 h-40 sm:h-48 rounded-3xl overflow-hidden shadow-2xl block border border-white/20 pointer-events-auto bg-black mx-auto"
                    >
                        <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800" alt="Flyinco Special Fare Flight" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] opacity-80 group-hover:opacity-100" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex flex-col justify-end">
                            <span className="bg-primary text-white text-[9px] sm:text-[10px] font-black uppercase tracking-widest px-3 py-1 sm:py-1.5 rounded-full mb-2 sm:mb-3 w-max shadow-lg shadow-primary/30">Exclusive Offer</span>
                            <div className="flex items-end justify-between">
                                <div>
                                    <h3 className="text-white font-display font-black text-xl sm:text-2xl leading-tight mb-1 group-hover:text-primary transition-colors">Flyinco Special Fare</h3>
                                    <p className="text-gray-300 text-[10px] sm:text-xs font-bold leading-relaxed">Book your next premium flight</p>
                                </div>
                                <div className="bg-white/20 backdrop-blur-md w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors border border-white/30 shrink-0">
                                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:translate-x-0.5 transition-transform" />
                                </div>
                            </div>
                        </div>
                    </motion.a>
                </div>

            </div>
        </div>
    );
};

export default Hero;
