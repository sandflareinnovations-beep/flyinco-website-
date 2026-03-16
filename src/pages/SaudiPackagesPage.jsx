import React, { useState, useEffect } from 'react';
import { Search, MapPin, ChevronRight, Plus, Minus, Clock, Star, Landmark } from 'lucide-react';
import { packagesData } from '../data/packagesData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const SaudiPackagesPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [openFaq, setOpenFaq] = useState(null);

    const saudiPackages = packagesData.filter(p => p.category === 'Saudi');
    
    const filteredPackages = saudiPackages.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.locations.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const faqs = [
        { q: 'What is the best time to visit Saudi Arabia?', a: 'The best time is from November to March when the weather is cool and pleasant for sightseeing.' },
        { q: 'Are there any specific dress codes for tourists?', a: 'While the dress code has relaxed, it is recommended to dress modestly in public places. Abayas are no longer mandatory for female tourists.' },
        { q: 'Can I visit Al-Ula throughout the year?', a: 'Al-Ula is best visited during the winter months. Many attractions may have limited hours during the peak summer heat.' }
    ];

    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-secondary text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 skew-x-12 transform translate-x-20"></div>
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
                    <nav className="flex items-center gap-2 text-sm font-bold text-white/50 mb-8 uppercase tracking-widest">
                        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-white/70">Packages</span>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-primary">Saudi Arabia</span>
                    </nav>

                    <h1 className="text-4xl md:text-6xl font-display font-black mb-4 leading-tight">
                        Discover the Kingdom of Saudi Arabia
                    </h1>
                    <p className="text-white/60 font-body text-lg max-w-2xl mb-12">
                        Explore ancient heritage, futuristic cities, and breathtaking desert landscapes in the heart of the Middle East.
                    </p>

                    <div className="relative max-w-3xl">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
                        <input
                            type="text"
                            placeholder="Search Saudi destinations (Riyadh, Al-Ula, Jeddah...)"
                            className="w-full bg-white text-secondary border border-white/10 rounded-[2rem] py-6 pl-16 pr-8 shadow-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-body"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-12 bg-primary/5 border-b border-primary/10">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="flex items-center gap-4">
                            <div className="bg-primary text-white p-3 rounded-2xl"><Landmark className="w-6 h-6" /></div>
                            <span className="text-xs font-black text-secondary tracking-widest uppercase">UNESCO Heritage</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="bg-primary text-white p-3 rounded-2xl"><Clock className="w-6 h-6" /></div>
                            <span className="text-xs font-black text-secondary tracking-widest uppercase">24/7 Support</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="bg-primary text-white p-3 rounded-2xl"><Star className="w-6 h-6" /></div>
                            <span className="text-xs font-black text-secondary tracking-widest uppercase">Luxury Stays</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="bg-primary text-white p-3 rounded-2xl"><MapPin className="w-6 h-6" /></div>
                            <span className="text-xs font-black text-secondary tracking-widest uppercase">Local Experts</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Packages Grid */}
            <section className="py-24">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {filteredPackages.map((pkg) => (
                            <div key={pkg.id} className="bg-white rounded-[3rem] overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-50 flex flex-col md:flex-row h-full">
                                <div className="md:w-1/2 h-64 md:h-auto overflow-hidden relative">
                                    <img
                                        src={pkg.img}
                                        alt={pkg.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                                </div>
                                <div className="md:w-1/2 p-10 flex flex-col">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{pkg.duration}</span>
                                        <div className="flex items-center gap-1">
                                            <Star className="w-3 h-3 fill-[#FFB800] text-[#FFB800]" />
                                            <span className="text-[10px] font-bold text-gray-400">5.0</span>
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-display font-black text-secondary mb-4 group-hover:text-primary transition-colors">{pkg.name}</h3>
                                    <p className="text-sm text-gray-400 font-bold mb-8 leading-relaxed line-clamp-3">{pkg.desc}</p>
                                    
                                    <div className="mt-auto space-y-6">
                                        <div className="flex items-center gap-2 text-secondary/60">
                                            <MapPin className="w-4 h-4 text-primary" />
                                            <span className="text-xs font-bold">{pkg.locations}</span>
                                        </div>
                                        <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                                            <div>
                                                <span className="text-[10px] text-gray-400 font-black uppercase tracking-tighter block">From</span>
                                                <span className="text-2xl font-display font-black text-secondary">{pkg.price}</span>
                                            </div>
                                            <Link 
                                                to={`/package/${pkg.slug}`}
                                                className="bg-primary text-white p-4 rounded-2xl group-hover:bg-secondary transition-all shadow-lg"
                                            >
                                                <ChevronRight className="w-6 h-6" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-secondary text-white">
                <div className="max-w-[1000px] mx-auto px-6">
                    <h2 className="text-3xl font-display font-black mb-16 text-center">Saudi Travel Tips & FAQs</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="border border-white/10 rounded-[2rem] overflow-hidden bg-white/5 backdrop-blur-sm">
                                <button
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/10 transition-colors"
                                >
                                    <span className="font-black uppercase tracking-wide text-sm">{faq.q}</span>
                                    {openFaq === idx ? <Minus className="w-5 h-5 text-primary" /> : <Plus className="w-5 h-5 text-primary" />}
                                </button>
                                {openFaq === idx && (
                                    <div className="px-8 pb-6 text-white/60 font-body text-sm leading-relaxed border-t border-white/5 pt-4">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default SaudiPackagesPage;
