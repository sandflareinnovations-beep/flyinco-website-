'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Clock, MapPin, Star, CheckCircle, ChevronRight, Plane, Building, Car, Map as MapIcon, Share2, Heart, Calendar, User, Mail, Phone, Users, Send } from 'lucide-react';
import { packagesData } from '../data/packagesData';

const ItineraryPage = ({ slug }) => {
    const pkg = packagesData.find(p => p.slug === slug);

    const [form, setForm] = useState({
        name: '',
        email: '',
        countryCode: '+966',
        phone: '',
        people: '1',
        travelDate: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Every enquiry is sent to visa@flyinco.com via the visitor's mail client.
        const subject = `Call Back Request: ${pkg?.title || 'Package Enquiry'}`;
        const body = [
            `Package: ${pkg?.title || ''}`,
            `Name: ${form.name}`,
            `Email: ${form.email}`,
            `Phone: ${form.countryCode} ${form.phone}`,
            `Number of People: ${form.people}`,
            `Travel Date: ${form.travelDate}`,
        ].join('\n');

        const mailto = `mailto:visa@flyinco.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailto;

        setSubmitted(true);
    };

    const scrollToEnquiry = () => {
        document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    if (!pkg) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
                <h1 className="text-4xl font-display font-black text-secondary mb-4">Package Not Found</h1>
                <Link href="/" className="text-primary font-bold hover:underline flex items-center gap-2">
                    Back to Home <ChevronRight className="w-4 h-4" />
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen">

            {/* Hero Section */}
            <section className="relative min-h-[580px] md:h-[60vh] md:min-h-[500px] w-full overflow-hidden">
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
                                    {pkg.meetingPoint && (
                                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
                                            <Building className="w-4 h-4 text-primary" />
                                            <span className="font-bold text-sm">Meet: {pkg.meetingPoint}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="bg-white rounded-[2.5rem] p-6 md:p-8 shadow-2xl w-full md:min-w-[300px] border border-gray-100 flex flex-col items-center">
                                <span className="text-secondary font-display font-black text-xl mb-6 w-full text-center">Pricing on Request</span>
                                <button
                                    onClick={scrollToEnquiry}
                                    className="w-full bg-primary text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all mb-4"
                                >
                                    Enquire Now
                                </button>
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Instant response within 24 hours</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-14 md:py-24 max-w-[1240px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
                    
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
                                            <span className="text-primary font-black text-xs">{item.time ? `${idx + 1}` : item.stop ? `${item.stop}` : `D${item.day}`}</span>
                                        </div>
                                        <div className="bg-white border border-gray-100 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all">
                                            {item.image && (
                                                <div className="h-56 w-full overflow-hidden">
                                                    <img
                                                        src={item.image}
                                                        alt={item.title}
                                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                                    />
                                                </div>
                                            )}
                                            <div className="p-8">
                                                {item.time && (
                                                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-xl mb-4">
                                                        <Clock className="w-3.5 h-3.5" />
                                                        <span className="text-xs font-black tracking-tight">{item.time}</span>
                                                    </div>
                                                )}
                                                <h3 className="text-xl font-display font-black text-secondary mb-4 flex items-center justify-between gap-4">
                                                    {item.time ? item.title : item.stop ? `Stop ${item.stop}: ${item.title}` : `Day ${item.day}: ${item.title}`}
                                                    <Calendar className="w-5 h-5 text-gray-200 shrink-0" />
                                                </h3>
                                                <p className="text-gray-500 font-body leading-relaxed text-sm">
                                                    {item.detail}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Inclusions */}
                        <div className="p-6 md:p-10 bg-secondary rounded-[2.5rem] md:rounded-[3rem] text-white">
                            <h2 className="text-2xl font-display font-black mb-8 text-center uppercase tracking-widest">Included Services</h2>
                            {pkg.included ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {pkg.included.map((inc, idx) => (
                                        <div key={idx} className="flex items-start gap-4 p-5 bg-white/5 rounded-2xl border border-white/10">
                                            <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                            <span className="font-bold text-sm text-white/90">{inc}</span>
                                        </div>
                                    ))}
                                </div>
                            ) : (
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
                            )}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="sticky top-32">
                            <div id="enquiry-form" className="bg-gray-50 rounded-[2.5rem] p-8 border border-gray-100 mb-8 scroll-mt-32">
                                <h3 className="text-xl font-display font-black text-secondary mb-2">Need Assistance?</h3>
                                <p className="text-sm text-gray-400 font-bold mb-6 leading-relaxed">Request a call back and our travel experts will reach out to plan your perfect trip.</p>

                                {submitted ? (
                                    <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6 text-center">
                                        <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-3" />
                                        <h4 className="font-display font-black text-secondary mb-1">Thank you, {form.name.split(' ')[0] || 'traveller'}!</h4>
                                        <p className="text-xs text-gray-500 font-bold">We've received your request and will call you back shortly.</p>
                                    </div>
                                ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Name */}
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={form.name}
                                            onChange={handleChange}
                                            placeholder="Full Name"
                                            className="w-full bg-white border border-gray-100 rounded-2xl py-3.5 pl-11 pr-4 text-sm font-bold text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                        />
                                    </div>
                                    {/* Email */}
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="Email Address"
                                            className="w-full bg-white border border-gray-100 rounded-2xl py-3.5 pl-11 pr-4 text-sm font-bold text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                        />
                                    </div>
                                    {/* Phone with country code */}
                                    <div className="relative flex gap-2">
                                        <div className="relative shrink-0 w-24">
                                            <select
                                                name="countryCode"
                                                value={form.countryCode}
                                                onChange={handleChange}
                                                className="w-full appearance-none bg-white border border-gray-100 rounded-2xl py-3.5 pl-3 pr-6 text-sm font-bold text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                            >
                                                <option value="+966">🇸🇦 +966</option>
                                                <option value="+971">🇦🇪 +971</option>
                                                <option value="+973">🇧🇭 +973</option>
                                                <option value="+974">🇶🇦 +974</option>
                                                <option value="+965">🇰🇼 +965</option>
                                                <option value="+968">🇴🇲 +968</option>
                                                <option value="+91">🇮🇳 +91</option>
                                                <option value="+44">🇬🇧 +44</option>
                                                <option value="+1">🇺🇸 +1</option>
                                            </select>
                                        </div>
                                        <div className="relative flex-1">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                value={form.phone}
                                                onChange={handleChange}
                                                placeholder="Phone Number"
                                                className="w-full bg-white border border-gray-100 rounded-2xl py-3.5 pl-11 pr-4 text-sm font-bold text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                            />
                                        </div>
                                    </div>
                                    {/* Number of people */}
                                    <div className="relative">
                                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                                        <input
                                            type="number"
                                            name="people"
                                            min="1"
                                            required
                                            value={form.people}
                                            onChange={handleChange}
                                            placeholder="Number of People"
                                            className="w-full bg-white border border-gray-100 rounded-2xl py-3.5 pl-11 pr-4 text-sm font-bold text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                        />
                                    </div>
                                    {/* Travel date */}
                                    <div className="relative">
                                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                                        <input
                                            type="date"
                                            name="travelDate"
                                            required
                                            value={form.travelDate}
                                            onChange={handleChange}
                                            className="w-full bg-white border border-gray-100 rounded-2xl py-3.5 pl-11 pr-4 text-sm font-bold text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-primary text-white py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                                    >
                                        <Send className="w-4 h-4" /> Request a Call Back
                                    </button>
                                </form>
                                )}

                                <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-gray-100">
                                    <a href="tel:+966556182021" className="flex items-center justify-center gap-2 p-3 bg-white rounded-2xl border border-gray-100 hover:border-primary transition-all">
                                        <Share2 className="w-4 h-4 text-primary" />
                                        <span className="text-[10px] font-black uppercase tracking-tighter text-secondary">Call Us</span>
                                    </a>
                                    <a href="https://wa.me/966556182021" className="flex items-center justify-center gap-2 p-3 bg-white rounded-2xl border border-gray-100 hover:border-primary transition-all">
                                        <Heart className="w-4 h-4 text-green-500" />
                                        <span className="text-[10px] font-black uppercase tracking-tighter text-secondary">WhatsApp</span>
                                    </a>
                                </div>
                            </div>

                            <div className="rounded-[2.5rem] overflow-hidden relative h-[400px]">
                                <img src="https://images.unsplash.com/photo-1578895101408-1a36b834405b?auto=format&fit=crop&q=80&w=800" alt="Discover Saudi Arabia" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/50 to-primary/30 flex flex-col justify-center items-center text-center p-8">
                                    <h4 className="text-white font-display font-black text-3xl mb-4 leading-tight uppercase tracking-tighter drop-shadow-lg">Get 15% Off Your First Booking</h4>
                                    <button className="bg-white text-primary px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-widest shadow-xl hover:scale-105 transition-all">Redeem Code: FLYCO15</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ItineraryPage;
