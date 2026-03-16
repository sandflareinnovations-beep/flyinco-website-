import React, { useState } from 'react';
import { Plane, Building, Car, Map as MapIcon, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const regionsData = [
    { id: 1, name: 'Saudi Arabia', img: 'https://images.unsplash.com/photo-1663900108404-a05e8bf82cda?auto=format&fit=crop&q=80&w=800', type: 'country' }, // Riyadh Kingdom Centre
    { id: 2, name: 'India', img: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800', type: 'country' }, // Taj Mahal
    { id: 9, name: 'Azerbaijan', img: 'https://images.unsplash.com/photo-1689188930114-6a6824a21390?auto=format&fit=crop&q=80&w=800', type: 'country' },
    { id: 3, name: 'United Arab Emirates', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800', type: 'country' },
    { id: 4, name: 'Maldives', img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800', type: 'country' },
    { id: 5, name: 'Thailand', img: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=800', type: 'country' },
    { id: 6, name: 'Singapore', img: 'https://images.unsplash.com/photo-1702085241418-e87b3b60a497?auto=format&fit=crop&q=80&w=800', type: 'country' }, // Marina Bay Sands
    { id: 7, name: 'Bali', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800', type: 'country' },
    { id: 8, name: 'Japan', img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800', type: 'country' },
];

const PackagesGrid = () => {
    return (
        <section className="py-24 bg-white overflow-hidden" id="regions">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">

                <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="max-w-2xl">
                        <h4 className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-3">Global Gateway</h4>
                        <h2 className="text-4xl md:text-6xl font-display font-black text-secondary tracking-tight">
                            Explore the <span className="text-primary">World</span> One Row at a Time
                        </h2>
                    </div>
                    <Link to="/international-packages" className="bg-secondary text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] flex items-center gap-3 hover:bg-black hover:scale-105 transition-all shadow-xl shadow-secondary/20 w-max shrink-0">
                        Explore All Countries <ChevronRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Swiper Slider */}
                <div className="visa-swiper-container">
                    <Swiper
                        modules={[Pagination, Autoplay, Navigation]}
                        spaceBetween={32}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 3.5 },
                        }}
                        className="pb-16"
                    >
                        {regionsData.map((dest) => (
                            <SwiperSlide key={dest.id}>
                                <div className="bg-white rounded-[2.5rem] overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer flex flex-col border border-gray-50 h-full">
                                    <div className="h-64 overflow-hidden relative">
                                        <img
                                            src={dest.img}
                                            alt={dest.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]"
                                            onError={(e) => {
                                                e.target.src = 'https://images.unsplash.com/photo-1507608616172-50162bd9395e?auto=format&fit=crop&q=80&w=800';
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                        <div className="absolute top-6 right-6">
                                            <span className="bg-white/90 backdrop-blur-md text-secondary text-[10px] font-black px-4 py-2 rounded-full shadow-lg uppercase tracking-widest border border-white/20">
                                                Famous Destination
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-10 flex-1 flex flex-col items-center">
                                        <h3 className="font-display font-black text-secondary text-2xl mb-3 group-hover:text-primary transition-colors">{dest.name}</h3>
                                        <p className="text-sm text-gray-400 font-bold mb-8 text-center uppercase tracking-widest leading-loose">Experience the unique charm of {dest.name}</p>

                                        <div className="flex justify-center gap-4 mt-auto border-t border-gray-50 pt-8 w-full">
                                            <div className="flex flex-col items-center gap-2 group/icon">
                                                <div className="bg-primary/5 text-primary p-3 rounded-2xl group-hover/icon:bg-primary group-hover/icon:text-white transition-colors"><Plane className="w-5 h-5" /></div>
                                                <span className="text-[9px] text-gray-300 font-black uppercase tracking-tighter">Flights</span>
                                            </div>
                                            <div className="flex flex-col items-center gap-2 group/icon">
                                                <div className="bg-primary/5 text-primary p-3 rounded-2xl group-hover/icon:bg-primary group-hover/icon:text-white transition-colors"><Building className="w-5 h-5" /></div>
                                                <span className="text-[9px] text-gray-300 font-black uppercase tracking-tighter">Hotels</span>
                                            </div>
                                            <div className="flex flex-col items-center gap-2 group/icon">
                                                <div className="bg-primary/5 text-primary p-3 rounded-2xl group-hover/icon:bg-primary group-hover/icon:text-white transition-colors"><Car className="w-5 h-5" /></div>
                                                <span className="text-[8px] text-gray-300 font-black uppercase tracking-tighter text-center leading-none">Chauffeur<br/>Service</span>
                                            </div>
                                            <div className="flex flex-col items-center gap-2 group/icon">
                                                <div className="bg-primary/5 text-primary p-3 rounded-2xl group-hover/icon:bg-primary group-hover/icon:text-white transition-colors"><MapIcon className="w-5 h-5" /></div>
                                                <span className="text-[9px] text-gray-300 font-black uppercase tracking-tighter">Trips</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
        </section>
    );
};

export default PackagesGrid;
