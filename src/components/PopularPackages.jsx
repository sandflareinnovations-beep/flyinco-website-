import React from 'react';
import { Star, Heart, MapPin, Clock } from 'lucide-react';
import { packagesData } from '../data/packagesData';
import { Link } from 'react-router-dom';

const bestChoice = [
    { id: 1, title: 'Maldives Paradise', img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800', places: '4 Places', slug: 'maldives-overwater-luxury' },
    { id: 2, title: 'Al-Ula Heritage', img: 'https://images.unsplash.com/photo-1629667051607-e412f1c493c0?auto=format&fit=crop&q=80&w=800', places: '6 Places', slug: 'al-ula-wonders' },
    { id: 3, title: 'Dubai Luxury', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800', places: '9 Places', slug: 'dubai-city-desert' },
    { id: 4, title: 'Kerala Waterfront', img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800', places: '5 Places', slug: 'kerala-backwaters-paradise' },
];

const popularPackageIds = ['intl-azerbaijan-baku', 'saudi-al-ula', 'saudi-jeddah-red-sea', 'india-kerala-paradise'];
const popularPackages = popularPackageIds.map(id => packagesData.find(pkg => pkg.id === id)).filter(Boolean);

const PopularPackages = () => {
    return (
        <div className="py-24 bg-white" id="packages">
            <div className="max-w-[1240px] mx-auto px-4">

                {/* Flyinco's Best Choice */}
                <div className="mb-12 flex flex-col items-center">
                    <h4 className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-3 text-center">Curated for you</h4>
                    <h2 className="text-4xl md:text-5xl font-display font-black text-secondary tracking-tight text-center">Flyinco's Best Choice</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
                    {bestChoice.map((item) => (
                        <Link to={`/package/${item.slug}`} key={item.id} className="relative rounded-[2.5rem] overflow-hidden group h-[400px] shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer">
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]"
                                onError={(e) => {
                                    e.target.src = 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800';
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6 flex flex-col justify-end">
                                <span className="text-white font-black font-display text-2xl mb-1">{item.title}</span>
                                <span className="text-[10px] text-white/90 uppercase tracking-widest font-bold bg-white/20 w-fit px-3 py-1.5 rounded-full backdrop-blur-md border border-white/20">{item.places}</span>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Popular Packages */}
                <div className="mb-12 flex flex-col items-center">
                    <h4 className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-3 text-center">Top rated</h4>
                    <h2 className="text-4xl md:text-5xl font-display font-black text-secondary tracking-tight text-center">Popular Packages</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {popularPackages.map((pkg) => (
                        <div key={pkg.id} className="bg-white rounded-[2.5rem] overflow-hidden flex flex-col group border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                            <div className="h-56 overflow-hidden relative">
                                <img
                                    src={pkg.img}
                                    alt={pkg.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1s]"
                                    onError={(e) => {
                                        e.target.src = 'https://images.unsplash.com/photo-1507608616172-50162bd9395e?auto=format&fit=crop&q=80&w=800';
                                    }}
                                />
                                <div className="absolute top-4 right-4 z-10">
                                    <button className="bg-white/90 backdrop-blur-md p-2.5 rounded-2xl shadow-sm text-secondary hover:text-primary hover:scale-110 transition-all">
                                        <Heart className="w-5 h-5" fill="currentColor" stroke="none" />
                                    </button>
                                </div>
                                <div className="absolute top-4 left-4 z-10">
                                    <span className="bg-primary text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg uppercase tracking-widest">Limited Offer</span>
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center gap-4 text-[11px] text-gray-400 font-bold mb-3 uppercase tracking-widest">
                                    <div className="flex items-center gap-1.5">
                                        <Clock className="w-3.5 h-3.5 text-primary" />
                                        <span>{pkg.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-primary">
                                        <MapPin className="w-3.5 h-3.5" />
                                        <span>{pkg.locations}</span>
                                    </div>
                                </div>

                                <h3 className="font-display font-bold text-secondary text-base mb-4 leading-tight group-hover:text-primary transition-colors line-clamp-2">
                                    {pkg.title}
                                </h3>

                                <div className="flex items-center gap-1 mb-6">
                                    <div className="flex">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star key={i} className={`w-3.5 h-3.5 ${i < 4 ? 'fill-[#FFB800] text-[#FFB800]' : 'text-gray-200'}`} />
                                        ))}
                                    </div>
                                    <span className="text-xs text-gray-400 font-bold ml-1">4.5 (12)</span>
                                </div>

                                <div className="mt-auto pt-4 border-t border-gray-50">
                                    <div className="text-xs text-gray-300 font-bold line-through mb-1 uppercase tracking-tighter">WAS SAR {parseInt(pkg.price.replace(/\D/g, '')) + 1500}</div>
                                    <div className="font-display font-black text-2xl text-secondary mb-6">{pkg.price}</div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <Link 
                                            to={`/package/${pkg.slug}`}
                                            className="bg-secondary text-white text-[10px] font-black py-3.5 rounded-2xl shadow-sm hover:bg-black transition-all uppercase tracking-widest text-center"
                                        >
                                            Details
                                        </Link>
                                        <button className="bg-primary text-white text-[10px] font-black py-3.5 rounded-2xl shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all uppercase tracking-widest">
                                            Enquire
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default PopularPackages;
