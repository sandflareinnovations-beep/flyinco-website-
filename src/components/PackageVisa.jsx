'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle, FileText } from 'lucide-react';
import EligibilityModal, { INCLUSIONS } from './EligibilityModal';
import { trackEvent } from '../lib/analytics';

const PackageVisa = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        trackEvent('package_visa_check_open', {});
        setModalOpen(true);
    };

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
                                <FileText className="w-3.5 h-3.5 text-white/90" />
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
                                    className="inline-flex items-center gap-2 bg-white text-secondary px-7 py-3.5 rounded-full font-black text-xs uppercase tracking-[0.15em] hover:bg-white/90 transition-all shadow-lg"
                                >
                                    Check Eligibility <ArrowRight className="w-4 h-4" />
                                </button>
                                <a
                                    href="https://wa.me/966556182021?text=Hi%20Flyinco!%20I%20want%20to%20learn%20more%20about%20the%20Saudi%20All-in-One%20Package%20Visa."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-white font-black text-xs uppercase tracking-[0.15em] border-b-2 border-white/40 pb-1 hover:border-white hover:text-white/90 transition-colors"
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
                                                <Icon className="w-4 h-4 text-white/90" />
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

                <EligibilityModal open={modalOpen} onClose={() => setModalOpen(false)} />
            </div>
        </section>
    );
};

export default PackageVisa;
