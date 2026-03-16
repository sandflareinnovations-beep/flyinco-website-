import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, MapPin, Star, CheckCircle, ChevronRight, Plane, Building, Car, Map as MapIcon, Share2, Heart, Calendar } from 'lucide-react';
import { packagesData } from '../data/packagesData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ItineraryPage = () => {
    const { slug } = useParams();
    const pkg = packagesData.find(p => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!pkg) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
                <h1 className="text-4xl font-display font-black text-secondary mb-4">Package Not Found</h1>
                <Link to="/" className="text-primary font-bold hover:underline flex items-center gap-2">
                    Back to Home <ChevronRight className="w-4 h-4" />
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
                <img
                    src={pkg.img}
                    alt={pkg.name}
                    className="w-full h-full object-cover scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end pb-16 px-6 md:px-12">
                    <div className="max-w-[1240px] mx-auto w-full">
                        <nav className="flex items-center gap-2 text-sm font-bold text-white/70 mb-6 uppercase tracking-widest">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <ChevronRight className="w-4 h-4 text-white/40" />
                            <span>{pkg.category} Packages</span>
                            <ChevronRight className="w-4 h-4 text-white/40" />
                            <span className="text-white">{pkg.name}</span>
                        </nav>
                        
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                            <div>
                                <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-6 leading-tight">
                                    {pkg.title}
                                </h1>
                                <div className="flex flex-wrap items-center gap-6 text-white/90">
                                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
                                        <Clock className="w-4 h-4 text-primary" />
                                        <span className="font-bold text-sm">{pkg.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
                                        <MapPin className="w-4 h-4 text-primary" />
                                        <span className="font-bold text-sm">{pkg.locations}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-[#FFB800] text-[#FFB800]" />
                                        ))}
                                        <span className="font-bold text-sm ml-2">5.0 (24 Reviews)</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-[2.5rem] p-8 shadow-2xl min-w-[300px] border border-gray-100 flex flex-col items-center">
                                <span className="text-gray-400 font-bold text-xs uppercase tracking-widest mb-1 w-full text-center">Starting from</span>
                                <div className="text-4xl font-display font-black text-secondary mb-6">{pkg.price}</div>
                                <button className="w-full bg-primary text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all mb-4">
                                    Enquire Now
                                </button>
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Instant response within 24 hours</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 max-w-[1240px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Highlights */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-display font-black text-secondary mb-8 flex items-center gap-4">
                                <span className="w-10 h-1 bg-primary rounded-full"></span>
                                Package Highlights
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {pkg.highlights.map((highlight, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-5 bg-gray-50 rounded-3xl border border-gray-100 group hover:border-primary/30 transition-all">
                                        <div className="bg-primary/10 text-primary p-2 rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                                            <CheckCircle className="w-5 h-5" />
                                        </div>
                                        <span className="font-bold text-secondary text-sm mt-1.5">{highlight}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Itinerary */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-display font-black text-secondary mb-12 flex items-center gap-4">
                                <span className="w-10 h-1 bg-primary rounded-full"></span>
                                Tour Itinerary
                            </h2>
                            <div className="space-y-12">
                                {pkg.itinerary.map((item, idx) => (
                                    <div key={idx} className="relative pl-12">
                                        {/* Timeline line */}
                                        {idx !== pkg.itinerary.length - 1 && (
                                            <div className="absolute left-5 top-10 bottom-[-40px] w-0.5 bg-gray-100"></div>
                                        )}
                                        {/* Timeline dot */}
                                        <div className="absolute left-0 top-0 w-10 h-10 bg-primary/10 rounded-2xl border-2 border-primary flex items-center justify-center z-10">
                                            <span className="text-primary font-black text-xs">D{item.day}</span>
                                        </div>
                                        <div className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all">
                                            <h3 className="text-xl font-display font-black text-secondary mb-4 flex items-center justify-between">
                                                Day {item.day}: {item.title}
                                                <Calendar className="w-5 h-5 text-gray-200" />
                                            </h3>
                                            <p className="text-gray-500 font-body leading-relaxed text-sm">
                                                {item.detail}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Inclusions */}
                        <div className="p-10 bg-secondary rounded-[3rem] text-white">
                            <h2 className="text-2xl font-display font-black mb-8 text-center uppercase tracking-widest">Included Services</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-primary transition-all shadow-xl"><Plane className="w-6 h-6" /></div>
                                    <span className="text-[10px] font-black uppercase tracking-widest">Flights</span>
                                </div>
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-primary transition-all shadow-xl"><Building className="w-6 h-6" /></div>
                                    <span className="text-[10px] font-black uppercase tracking-widest">Hotels</span>
                                </div>
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-primary transition-all shadow-xl"><Car className="w-6 h-6" /></div>
                                    <span className="text-[10px] font-black uppercase tracking-widest">Transfers</span>
                                </div>
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-primary transition-all shadow-xl"><MapIcon className="w-6 h-6" /></div>
                                    <span className="text-[10px] font-black uppercase tracking-widest">Trips</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="sticky top-32">
                            <div className="bg-gray-50 rounded-[2.5rem] p-8 border border-gray-100 mb-8">
                                <h3 className="text-xl font-display font-black text-secondary mb-6">Need Assistance?</h3>
                                <p className="text-sm text-gray-400 font-bold mb-8 leading-relaxed">Our travel experts are ready to help you plan your perfect trip.</p>
                                <div className="space-y-4">
                                    <a href="tel:+966556182021" className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 hover:border-primary transition-all">
                                        <div className="bg-primary/10 text-primary p-3 rounded-xl"><Share2 className="w-5 h-5" /></div>
                                        <div>
                                            <div className="text-[10px] text-gray-400 font-black uppercase tracking-tighter">Call Us</div>
                                            <div className="text-sm font-bold text-secondary">+966 55 618 2021</div>
                                        </div>
                                    </a>
                                    <a href="https://wa.me/966556182021" className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 hover:border-primary transition-all">
                                        <div className="bg-green-500/10 text-green-500 p-3 rounded-xl"><Heart className="w-5 h-5" /></div>
                                        <div>
                                            <div className="text-[10px] text-gray-400 font-black uppercase tracking-tighter">WhatsApp</div>
                                            <div className="text-sm font-bold text-secondary">Chat Support</div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="rounded-[2.5rem] overflow-hidden relative h-[400px]">
                                <img src="https://images.unsplash.com/photo-1544333346-64e4fea19bca?auto=format&fit=crop&q=80&w=800" alt="Promo" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] flex flex-col justify-center items-center text-center p-8">
                                    <h4 className="text-white font-display font-black text-3xl mb-4 leading-tight uppercase tracking-tighter">Get 15% Off Your First Booking</h4>
                                    <button className="bg-white text-primary px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-widest shadow-xl hover:scale-105 transition-all">Redeem Code: FLYCO15</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ItineraryPage;
