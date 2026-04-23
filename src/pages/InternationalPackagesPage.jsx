import React, { useState } from 'react';
import { Search, MapPin, ChevronRight, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VisaLinks from '../components/visa/VisaLinks';

const destinations = [
    { name: 'Saudi Arabia', img: 'https://images.unsplash.com/photo-1663900108404-a05e8bf82cda?auto=format&fit=crop&q=80&w=800', desc: 'The Kingdom of wonders: From Riyadh to Al-Ula.', path: '/saudi-packages' },
    { name: 'India', img: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800', desc: 'A land of diversity, culture, and ancient heritage.', path: '/india-packages' },
    { name: 'United Arab Emirates', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800', desc: 'Modern marvels and desert adventures.', path: '/package/dubai-city-desert' },
    { name: 'Maldives', img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800', desc: 'Escape to private island paradise.', path: '/package/maldives-overwater-luxury' },
    { name: 'Thailand', img: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=800', desc: 'Discover the land of smiles and beaches.', path: '/package/thailand-explorer' },
    { name: 'Singapore', img: 'https://images.unsplash.com/photo-1702085241418-e87b3b60a497?auto=format&fit=crop&q=80&w=800', desc: 'A futuristic city-state with vibrant culture.', path: '/package/singapore-city' },
    { name: 'Turkey', img: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=800', desc: 'Where East meets West in stunning harmony.' },
    { name: 'Japan', img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800', desc: 'A perfect blend of tradition and technology.' },
    { name: 'Switzerland', img: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=800', desc: 'Breathtaking Alpines and serene lakes.' },
    { name: 'Egypt', img: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&q=80&w=800', desc: 'Uncover the secrets of ancient civilizations.' },
];

const faqs = [
    { q: 'Do I need a visa for international travel?', a: 'Visa requirements vary by destination and your nationality. We provide complete visa assistance as part of our packages.' },
    { q: 'What are the best international holiday packages for families?', a: 'Destinations like Dubai, Singapore, and Bali are great for families with theme parks and kid-friendly activities.' },
    { q: 'How early should I book my international trip?', a: 'We recommend booking 3-6 months in advance for the best deals and flight availability.' },
];

const InternationalPackagesPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [openFaq, setOpenFaq] = useState(null);

    const filteredDestinations = destinations.filter(d =>
        d.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gray-50">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <nav className="flex items-center gap-2 text-sm font-bold text-gray-400 mb-8 uppercase tracking-widest">
                        <a href="/" className="hover:text-primary transition-colors">Home</a>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-secondary">Packages</span>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-primary">International</span>
                    </nav>

                    <h1 className="text-4xl md:text-6xl font-display font-black text-secondary mb-4 leading-tight">
                        Explore Popular International Destinations
                    </h1>
                    <p className="text-gray-500 font-body text-lg max-w-2xl mb-12">
                        Discover amazing places across the globe with our curated travel experiences.
                    </p>

                    <div className="relative max-w-3xl">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
                        <input
                            type="text"
                            placeholder="Search destinations..."
                            className="w-full bg-white border border-gray-100 rounded-[2rem] py-6 pl-16 pr-8 shadow-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-body"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
            </section>

            {/* Destination Grid */}
            <section className="py-24">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {filteredDestinations.map((dest, idx) => (
                            <div key={idx} className="bg-white rounded-[2.5rem] overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-50">
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
                                </div>
                                <div className="p-8">
                                    <h3 className="font-display font-black text-secondary text-2xl mb-2 group-hover:text-primary transition-colors">{dest.name}</h3>
                                    <p className="text-sm text-gray-400 font-bold mb-6 tracking-wide line-clamp-2">{dest.desc}</p>
                                    <Link 
                                        to={dest.path || '#'} 
                                        className="inline-block w-full bg-primary/5 text-primary py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all text-center"
                                    >
                                        Explore Country
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    {filteredDestinations.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-gray-400 font-bold text-xl uppercase tracking-widest">No destinations found matching your search.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Info Section */}
            <section className="py-24 bg-gray-50 border-y border-gray-100">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    <h2 className="text-3xl font-display font-black text-secondary mb-12">Travel Around The World</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-500 font-body leading-relaxed">
                        <p>
                            Pack your bags and get ready for an unforgettable journey across the globe. From the bustling streets of Tokyo to the tranquil beaches of Maldives, our international holiday packages are designed to offer you the best of every destination.
                        </p>
                        <p>
                            Whether you're looking for a romantic honeymoon, a family adventure, or a solo discovery, we have the perfect itinerary for you. Our expert team ensures seamless travel planning, including flights, hotels, and local experiences.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24">
                <div className="max-w-[1000px] mx-auto px-6">
                    <h2 className="text-3xl font-display font-black text-secondary mb-16 text-center">International Tour FAQs</h2>
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

            {/* Links Section */}
            <VisaLinks />

            <Footer />
        </div>
    );
};

export default InternationalPackagesPage;
