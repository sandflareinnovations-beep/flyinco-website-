import React from 'react';
import { CalendarCheck, Repeat, Clock3, Smartphone, PackageCheck, Ban, FileText, Phone, IdCard, Ticket, MessageCircle } from 'lucide-react';
import { whatsappLink } from '../lib/analytics';

const FEATURES = [
    { icon: CalendarCheck, label: '365-day visa validity' },
    { icon: Repeat, label: 'Multiple entries throughout the year' },
    { icon: Clock3, label: 'Up to 90 days total stay' },
    { icon: Smartphone, label: 'Umrah permit via the Nusuk app' },
    { icon: PackageCheck, label: 'Approved service package required' },
    { icon: Ban, label: 'Not valid during the Hajj season' },
];

const DOCUMENTS = [
    { icon: FileText, label: 'Passport copy' },
    { icon: Phone, label: 'Mobile number' },
    { icon: IdCard, label: 'Iqama copy' },
    { icon: Ticket, label: 'Confirmed arrival ticket' },
];

// One-Year Multiple-Entry Umrah Visa promo — same dark-gradient card pattern
// as PackageVisa, so it reads as part of the same product family.
const UmrahVisaBanner = () => {
    return (
        <section className="py-10 md:py-14 bg-white">
            <div className="max-w-[1240px] mx-auto px-4">
                <div className="relative rounded-[2rem] overflow-hidden p-6 md:p-10 shadow-2xl shadow-primary/20 bg-[#1A0933]">
                    <img
                        loading="lazy"
                        src="https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?auto=format&fit=crop&crop=bottom&q=80&w=1600"
                        alt="Pilgrims performing tawaf around the Kaaba at Masjid al-Haram, Mecca"
                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1A0933]/90 via-[#3b1360]/85 to-[#6A2B86]/80" aria-hidden="true"></div>
                    <div className="absolute -right-24 -top-24 w-96 h-96 bg-primary/40 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
                    <div className="absolute -left-16 -bottom-24 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>

                    <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                        {/* Copy */}
                        <div className="lg:col-span-3">
                            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-2 mb-4 backdrop-blur-sm">
                                <CalendarCheck className="w-3.5 h-3.5 text-white/90" />
                                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/90">One-Year Multiple-Entry</span>
                            </div>
                            <h2 className="text-2xl md:text-4xl font-display font-black text-white tracking-tight mb-3 leading-tight">
                                Umrah Visa
                            </h2>
                            <p className="text-white/80 font-body font-medium leading-relaxed mb-6 text-sm max-w-xl">
                                Perform Umrah as many times as you like within a full year, on a
                                single visa. We handle the application and the Nusuk permit so
                                you can focus on the journey.
                            </p>

                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-7">
                                {FEATURES.map(({ icon: Icon, label }) => (
                                    <li key={label} className="flex items-center gap-3">
                                        <span className="w-7 h-7 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                                            <Icon className="w-3.5 h-3.5 text-white/90" />
                                        </span>
                                        <span className="text-xs md:text-sm font-bold text-white/90 leading-snug">{label}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={whatsappLink('the One-Year Multiple-Entry Umrah Visa')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-white text-secondary px-7 py-3.5 rounded-full font-black text-xs uppercase tracking-[0.15em] hover:bg-white/90 transition-all shadow-lg"
                            >
                                <MessageCircle className="w-4 h-4" /> Ask on WhatsApp
                            </a>
                        </div>

                        {/* Required documents card */}
                        <div className="lg:col-span-2">
                            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-[1.5rem] p-5 md:p-6">
                                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/60 mb-4">
                                    What you&apos;ll need
                                </p>
                                <ul className="space-y-3">
                                    {DOCUMENTS.map(({ icon: Icon, label }) => (
                                        <li key={label} className="flex items-center gap-4">
                                            <span className="w-9 h-9 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                                                <Icon className="w-4 h-4 text-white/90" />
                                            </span>
                                            <span className="text-xs font-black uppercase tracking-widest text-white">{label}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UmrahVisaBanner;
