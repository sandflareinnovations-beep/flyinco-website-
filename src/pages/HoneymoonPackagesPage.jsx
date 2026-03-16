import React, { useState, useEffect } from 'react';
import { Search, MapPin, ChevronRight, Plus, Minus, Star } from 'lucide-react';
import { packagesData } from '../data/packagesData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VisaLinks from '../components/visa/VisaLinks';
import { Link } from 'react-router-dom';

const HoneymoonPackagesPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [openFaq, setOpenFaq] = useState(null);

    const honeymoonPackages = packagesData.filter(p => p.category === 'Honeymoon');
    
    const filteredPackages = honeymoonPackages.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.locations.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const faqs = [
        { q: 'What makes your honeymoon packages special?', a: 'We focus on privacy, luxury, and romantic inclusions like candlelit dinners, room decor, and private transfers.' },
        { q: 'Can we add a professional photoshoot to our honeymoon?', a: 'Yes, most of our exclusive honeymoon packages include or offer optional photography services to capture your moments.' },
        { q: 'Is it possible to combine two destinations for a honeymoon?', a: 'Certainly! Many couples choose a mountain-and-beach combo, like Munnar and Alleppey or Dubai and Maldives.' }
    ];

    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-[#FFF5F7]">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
                    <nav className="flex items-center justify-center gap-2 text-sm font-bold text-gray-400 mb-8 uppercase tracking-widest">
                        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-secondary">Speciality</span>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-primary">Honeymoon</span>
                    </nav>

                    <h1 className="text-4xl md:text-6xl font-display font-black text-secondary mb-4 leading-tight">
                        Romantic Honeymoon Getaways
                    </h1>
                    <p className="text-gray-500 font-body text-lg max-w-2xl mx-auto mb-12">
                        Celebrate your new beginning with our most romantic and luxurious handpicked destinations.
                    </p>

                    <div className="relative max-w-3xl mx-auto">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
                        <input
                            type="text"
                            placeholder="Find your perfect romantic spot..."
                            className="w-full bg-white border border-pink-100 rounded-[2rem] py-6 pl-16 pr-8 shadow-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-body text-center"
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
                                        <span className="bg-white/90 backdrop-blur-md text-[#FF4D8D] text-[10px] font-black px-4 py-2 rounded-full shadow-lg uppercase tracking-widest border border-white/20">
                                            {pkg.duration}
                                        </span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                    <div className="absolute bottom-6 left-8 right-8">
                                        <h3 className="text-white font-display font-black text-2xl group-hover:text-primary transition-colors">{pkg.name}</h3>
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
                                            <span className="text-[10px] text-gray-400 font-black uppercase tracking-tighter block mb-1">Packages from</span>
                                            <span className="text-2xl font-display font-black text-secondary">{pkg.price}</span>
                                        </div>
                                        <Link 
                                            to={`/package/${pkg.slug}`}
                                            className="bg-secondary text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-black transition-all shadow-lg"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* FAQs */}
             <section className="py-24 bg-gray-50">
                <div className="max-w-[1000px] mx-auto px-6">
                    <h2 className="text-3xl font-display font-black text-secondary mb-16 text-center">Honeymoon Travel FAQs</h2>
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

export default HoneymoonPackagesPage;
