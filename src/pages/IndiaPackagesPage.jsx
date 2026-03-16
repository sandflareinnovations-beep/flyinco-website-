import React, { useState, useEffect } from 'react';
import { Search, MapPin, ChevronRight, Plus, Minus, Clock, Star } from 'lucide-react';
import { packagesData } from '../data/packagesData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VisaLinks from '../components/visa/VisaLinks';
import { Link } from 'react-router-dom';

const IndiaPackagesPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [openFaq, setOpenFaq] = useState(null);

    const indiaPackages = packagesData.filter(p => p.category === 'India');
    
    const filteredPackages = indiaPackages.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.locations.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const faqs = [
        { q: 'What are the best Indian destinations for a family trip?', a: 'Kerala, Andaman, and Rajasthan are top choices for families, offering a mix of culture, nature, and comfort.' },
        { q: 'Is travel insurance included in our India packages?', a: 'Basic travel insurance can be added to any package. We highly recommend it for all travelers.' },
        { q: 'Can I customize my India tour itinerary?', a: 'Absolutely! All our India packages can be tailored to your specific preferences, duration, and budget.' }
    ];

    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gray-50">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <nav className="flex items-center gap-2 text-sm font-bold text-gray-400 mb-8 uppercase tracking-widest">
                        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-secondary">Packages</span>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-primary">India</span>
                    </nav>

                    <h1 className="text-4xl md:text-6xl font-display font-black text-secondary mb-4 leading-tight">
                        Explore Popular India Destinations
                    </h1>
                    <p className="text-gray-500 font-body text-lg max-w-2xl mb-12">
                        Discover the diverse beauty of India with our expertly curated holiday packages.
                    </p>

                    <div className="relative max-w-3xl">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
                        <input
                            type="text"
                            placeholder="Search Indian destinations..."
                            className="w-full bg-white border border-gray-100 rounded-[2rem] py-6 pl-16 pr-8 shadow-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-body"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
            </section>

            {/* Packages Grid */}
            <section className="py-24">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        {filteredPackages.map((pkg) => (
                            <div key={pkg.id} className="bg-white rounded-[3rem] overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-50 flex flex-col">
                                <div className="h-72 overflow-hidden relative">
                                    <img
                                        src={pkg.img}
                                        alt={pkg.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]"
                                    />
                                    <div className="absolute top-6 left-6 z-10">
                                        <span className="bg-white/90 backdrop-blur-md text-secondary text-[10px] font-black px-4 py-2 rounded-full shadow-lg uppercase tracking-widest border border-white/20">
                                            {pkg.duration}
                                        </span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                    <div className="absolute bottom-6 left-8 right-8 flex justify-between items-end">
                                        <div>
                                            <div className="flex items-center gap-1 mb-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className="w-3 h-3 fill-[#FFB800] text-[#FFB800]" />
                                                ))}
                                            </div>
                                            <h3 className="text-white font-display font-black text-2xl group-hover:text-primary transition-colors">{pkg.name}</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-10 flex-1 flex flex-col">
                                    <div className="flex items-center gap-2 text-primary mb-4">
                                        <MapPin className="w-4 h-4" />
                                        <span className="text-xs font-black uppercase tracking-widest">{pkg.locations}</span>
                                    </div>
                                    <p className="text-sm text-gray-400 font-bold mb-8 tracking-wide leading-relaxed">{pkg.desc}</p>
                                    
                                    <div className="mt-auto pt-8 border-t border-gray-50 flex items-center justify-between">
                                        <div>
                                            <span className="text-[10px] text-gray-400 font-black uppercase tracking-tighter block mb-1">Starting from</span>
                                            <span className="text-2xl font-display font-black text-secondary">{pkg.price}</span>
                                        </div>
                                        <Link 
                                            to={`/package/${pkg.slug}`}
                                            className="bg-secondary text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-black transition-all shadow-lg"
                                        >
                                            View Itinerary
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {filteredPackages.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-gray-400 font-bold text-xl uppercase tracking-widest">No India packages found matching your search.</p>
                        </div>
                    )}
                </div>
            </section>

             {/* FAQs */}
             <section className="py-24 bg-gray-50">
                <div className="max-w-[1000px] mx-auto px-6">
                    <h2 className="text-3xl font-display font-black text-secondary mb-16 text-center">India Tour FAQs</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="border border-gray-100 rounded-[2rem] overflow-hidden bg-white shadow-sm">
                                <button
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                                >
                                    <span className="font-black text-secondary uppercase tracking-wide text-sm">{faq.q}</span>
                                    {openFaq === idx ? <Minus className="w-5 h-5 text-primary" /> : <Plus className="w-5 h-5 text-primary" />}
                                </button>
                                {openFaq === idx && (
                                    <div className="px-8 pb-6 text-gray-400 font-bold text-sm leading-relaxed border-t border-gray-50 pt-4 bg-gray-50/50">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <VisaLinks />
            <Footer />
        </div>
    );
};

export default IndiaPackagesPage;
