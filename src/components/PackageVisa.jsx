'use client';

import React, { useState } from 'react';
import { X, Users, ArrowRight, CheckCircle, FileText, Plane, Building, Car, Camera, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { trackEvent } from '../lib/analytics';

const INCLUSIONS = [
    { icon: Plane, label: 'Flights' },
    { icon: Building, label: 'Hotels' },
    { icon: FileText, label: 'Visa' },
    { icon: Car, label: 'Transfers' },
    { icon: Camera, label: 'Sightseeing' },
];

// Nationalities currently eligible for the Saudi Package Visa programme.
const ELIGIBLE_NATIONALITIES = [
    'India',
    'Pakistan',
    'Jordan',
    'Egypt',
    'Mexico',
    'Indonesia',
    'Bangladesh',
];

const RESIDENCE_COUNTRIES = [
    'India',
    'Pakistan',
    'Jordan',
    'Egypt',
    'Mexico',
    'Indonesia',
    'Bangladesh',
    'Saudi Arabia',
    'United Arab Emirates',
    'Bahrain',
    'Qatar',
    'Kuwait',
    'Oman',
    'United Kingdom',
    'United States',
    'Canada',
    'Germany',
    'France',
    'Italy',
    'Spain',
    'Turkey',
    'Malaysia',
    'Singapore',
    'Australia',
    'South Africa',
];

const PackageVisa = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [nationality, setNationality] = useState('');
    const [residence, setResidence] = useState('');
    const [checked, setChecked] = useState(false);

    const openModal = () => {
        trackEvent('package_visa_check_open', {});
        setChecked(false);
        setModalOpen(true);
    };

    const closeModal = () => setModalOpen(false);

    const handleCheck = (e) => {
        e.preventDefault();
        trackEvent('package_visa_eligibility_check', { nationality, residence });
        setChecked(true);
    };

    const whatsappHref = `https://wa.me/966556182021?text=${encodeURIComponent(
        `Hi Flyinco! I'm interested in the Saudi All-in-One Package (flights, hotels, visa, transfers & sightseeing). I'm a ${nationality} national residing in ${residence}.`
    )}`;

    return (
        <section className="py-14 md:py-20 bg-white">
            <div className="max-w-[1240px] mx-auto px-4">

                {/* Banner */}
                <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#1A0933] via-[#3b1360] to-[#6A2B86] p-8 md:p-14 shadow-2xl shadow-primary/20">
                    <div className="absolute -right-24 -top-24 w-96 h-96 bg-primary/40 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
                    <div className="absolute -left-16 -bottom-24 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>

                    <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
                        {/* Copy */}
                        <div className="lg:col-span-3">
                            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
                                <FileText className="w-3.5 h-3.5 text-[#FFB800]" />
                                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/90">Saudi All-in-One Package</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-display font-black text-white tracking-tight mb-5 leading-tight">
                                Package Visa
                            </h2>
                            <p className="text-white/75 font-body font-medium leading-relaxed mb-8 text-sm md:text-base max-w-xl">
                                Enjoy a smoother, more convenient journey with a tourism visit visa
                                included in your travel package. Everything is arranged for you in one
                                booking, so you can focus on exploring Saudi Arabia's diverse
                                destinations, rich culture, and exceptional experiences.
                            </p>
                            <div className="flex flex-wrap items-center gap-4">
                                <button
                                    onClick={openModal}
                                    className="inline-flex items-center gap-2 bg-white text-secondary px-7 py-3.5 rounded-full font-black text-xs uppercase tracking-[0.15em] hover:bg-[#FFB800] hover:text-secondary transition-all shadow-lg"
                                >
                                    Check Eligibility <ArrowRight className="w-4 h-4" />
                                </button>
                                <a
                                    href="https://wa.me/966556182021?text=Hi%20Flyinco!%20I%20want%20to%20learn%20more%20about%20the%20Saudi%20All-in-One%20Package%20Visa."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-white font-black text-xs uppercase tracking-[0.15em] border-b-2 border-white/40 pb-1 hover:border-[#FFB800] hover:text-[#FFB800] transition-colors"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>

                        {/* Inclusions card */}
                        <div className="lg:col-span-2">
                            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-[1.5rem] p-6 md:p-8">
                                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/60 mb-5">
                                    Everything included
                                </p>
                                <ul className="space-y-3.5">
                                    {INCLUSIONS.map(({ icon: Icon, label }) => (
                                        <li key={label} className="flex items-center gap-4">
                                            <span className="w-9 h-9 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                                                <Icon className="w-4 h-4 text-[#FFB800]" />
                                            </span>
                                            <span className="text-xs font-black uppercase tracking-widest text-white">{label}</span>
                                            <CheckCircle className="w-4 h-4 text-green-400 ml-auto" />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Eligibility modal */}
                {modalOpen && (
                    <div
                        className="fixed inset-0 z-[130] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                        onClick={closeModal}
                    >
                        <div
                            role="dialog"
                            aria-modal="true"
                            aria-label="Check Package Visa eligibility"
                            className="bg-white rounded-[2rem] w-full max-w-xl p-8 md:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={closeModal}
                                aria-label="Close"
                                className="absolute top-6 right-6 p-2 rounded-xl bg-gray-50 text-secondary hover:bg-gray-100 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                                <Users className="w-6 h-6 text-primary" />
                            </div>

                            <h3 className="text-xl md:text-2xl font-display font-black text-secondary mb-1">
                                Find your visa to travel to Saudi Arabia
                            </h3>
                            <p className="text-sm text-gray-400 font-bold mb-8">What brings you to Saudi Arabia?</p>

                            {checked ? (
                                <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6 text-center">
                                    <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-3" />
                                    <h4 className="font-display font-black text-secondary mb-2">
                                        Great news, you&apos;re eligible!
                                    </h4>
                                    <p className="text-xs text-gray-500 font-bold leading-relaxed mb-5">
                                        As a {nationality} national residing in {residence}, you qualify for the
                                        Saudi All-in-One Package with your visit visa included.
                                    </p>

                                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                                        {INCLUSIONS.map(({ icon: Icon, label }) => (
                                            <div key={label} className="flex items-center gap-1.5 bg-white border border-gray-100 rounded-xl px-3 py-1.5">
                                                <Icon className="w-3.5 h-3.5 text-primary" />
                                                <span className="text-[9px] font-black uppercase tracking-widest text-secondary">{label}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <p className="text-[11px] font-black uppercase tracking-widest text-secondary mb-3">
                                        Contact our Visa Consultant
                                    </p>
                                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                                        <a
                                            href={whatsappHref}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={() => trackEvent('package_visa_apply_click', { nationality, residence })}
                                            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3.5 rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-[0.15em] hover:bg-[#128C7E] transition-all shadow-lg"
                                        >
                                            <FaWhatsapp className="w-4 h-4" /> WhatsApp Us
                                        </a>
                                        <a
                                            href={`mailto:visa@flyinco.com?subject=${encodeURIComponent('Saudi All-in-One Package Visa Enquiry')}&body=${encodeURIComponent(`Nationality: ${nationality}\nCountry of residence: ${residence}\n\nI'm interested in the Saudi All-in-One Package (flights, hotels, visa, transfers & sightseeing).`)}`}
                                            onClick={() => trackEvent('package_visa_email_click', { nationality, residence })}
                                            className="inline-flex items-center gap-2 bg-white text-secondary border border-gray-200 px-6 py-3.5 rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-[0.15em] hover:border-primary hover:text-primary transition-all"
                                        >
                                            <Mail className="w-4 h-4" /> visa@flyinco.com
                                        </a>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={handleCheck} className="space-y-6">
                                    <div>
                                        <label htmlFor="pv-nationality" className="block text-sm font-black text-secondary mb-2">
                                            Nationality <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            id="pv-nationality"
                                            required
                                            value={nationality}
                                            onChange={(e) => setNationality(e.target.value)}
                                            className="w-full appearance-none bg-white border border-gray-200 rounded-2xl py-4 px-5 text-sm font-bold text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                        >
                                            <option value="" disabled>Select your nationality</option>
                                            {ELIGIBLE_NATIONALITIES.map((c) => (
                                                <option key={c} value={c}>{c}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="pv-residence" className="block text-sm font-black text-secondary mb-2">
                                            What&apos;s your country of residence? <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            id="pv-residence"
                                            required
                                            value={residence}
                                            onChange={(e) => setResidence(e.target.value)}
                                            className="w-full appearance-none bg-white border border-gray-200 rounded-2xl py-4 px-5 text-sm font-bold text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                        >
                                            <option value="" disabled>Select your country of residence</option>
                                            {RESIDENCE_COUNTRIES.map((c) => (
                                                <option key={c} value={c}>{c}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <button
                                        type="submit"
                                        className="bg-primary text-white px-7 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.15em] hover:bg-primary/90 transition-all shadow-lg shadow-primary/30"
                                    >
                                        Show Eligible Visas
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default PackageVisa;
