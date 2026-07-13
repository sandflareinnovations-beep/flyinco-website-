'use client';

import React, { useState } from 'react';
import { User, Mail, Phone, Users, Calendar, Send, CheckCircle } from 'lucide-react';
import { trackEvent } from '../lib/analytics';

const RequestCallback = () => {
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

        const subject = 'Call Back Request - Flyinco';
        const body = [
            `Name: ${form.name}`,
            `Email: ${form.email}`,
            `Phone: ${form.countryCode} ${form.phone}`,
            `Number of People: ${form.people}`,
            `Travel Date: ${form.travelDate}`,
        ].join('\n');

        const mailto = `mailto:visa@flyinco.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        trackEvent('callback_form_submit', { page: 'home' });
        window.location.href = mailto;

        setSubmitted(true);
    };

    return (
        <section className="bg-white py-14 md:py-20" id="request-callback">
            <div className="max-w-[1240px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

                    {/* Call Back Form */}
                    <div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-10 border border-gray-100">
                        <h2 className="text-3xl font-display font-black text-secondary mb-2">Need Assistance?</h2>
                        <p className="text-sm text-gray-600 font-bold mb-8 leading-relaxed">
                            Request a call back and our travel experts will reach out to plan your perfect trip.
                        </p>

                        {submitted ? (
                            <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8 text-center">
                                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                                <h4 className="font-display font-black text-secondary mb-1">Thank you, {form.name.split(' ')[0] || 'traveller'}!</h4>
                                <p className="text-xs text-gray-500 font-bold">We've received your request and will call you back shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                                    <input
                                        type="text" name="name" required value={form.name} onChange={handleChange}
                                        placeholder="Full Name" aria-label="Full Name"
                                        className="w-full bg-white border border-gray-100 rounded-2xl py-3.5 pl-11 pr-4 text-sm font-bold text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    />
                                </div>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                                    <input
                                        type="email" name="email" required value={form.email} onChange={handleChange}
                                        placeholder="Email Address" aria-label="Email Address"
                                        className="w-full bg-white border border-gray-100 rounded-2xl py-3.5 pl-11 pr-4 text-sm font-bold text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    />
                                </div>
                                <div className="relative flex gap-2">
                                    <div className="relative shrink-0 w-24">
                                        <select
                                            aria-label="Country code"
                                            name="countryCode" value={form.countryCode} onChange={handleChange}
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
                                            type="tel" name="phone" required value={form.phone} onChange={handleChange}
                                            placeholder="Phone Number" aria-label="Phone Number"
                                            className="w-full bg-white border border-gray-100 rounded-2xl py-3.5 pl-11 pr-4 text-sm font-bold text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="relative">
                                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                                        <input
                                            type="number" name="people" min="1" required value={form.people} onChange={handleChange}
                                            placeholder="People" aria-label="Number of people"
                                            className="w-full bg-white border border-gray-100 rounded-2xl py-3.5 pl-11 pr-4 text-sm font-bold text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                        />
                                    </div>
                                    <div className="relative">
                                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                                        <input
                                            type="date" name="travelDate" aria-label="Travel date" required value={form.travelDate} onChange={handleChange}
                                            className="w-full bg-white border border-gray-100 rounded-2xl py-3.5 pl-11 pr-3 text-sm font-bold text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                        />
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-primary text-white py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                                >
                                    <Send className="w-4 h-4" /> Request a Call Back
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Discount Card */}
                    <div className="rounded-[2.5rem] overflow-hidden relative min-h-[400px]">
                        <img
                            loading="lazy"
                            src="https://images.unsplash.com/photo-1578895101408-1a36b834405b?auto=format&fit=crop&q=80&w=800"
                            alt="Discover Saudi Arabia"
                            className="w-full h-full object-cover absolute inset-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/60 to-primary/40 flex flex-col justify-center items-center text-center p-10">
                            <span className="bg-white/15 backdrop-blur-sm text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-white/20">Limited Time Offer</span>
                            <h3 className="text-white font-display font-black text-4xl md:text-5xl mb-4 leading-tight uppercase tracking-tighter drop-shadow-lg">
                                Get 15% Off Your First Booking
                            </h3>
                            <p className="text-white/70 font-bold text-sm mb-8 max-w-sm">
                                Plan your next escape with Flyinco and enjoy an exclusive welcome discount.
                            </p>
                            <button className="bg-white text-primary px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest shadow-xl hover:scale-105 transition-all">
                                Redeem Code: FLYCO15
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default RequestCallback;
