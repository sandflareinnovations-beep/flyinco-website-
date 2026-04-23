import React from 'react';
import { Phone, ChevronRight } from 'lucide-react';

const VisaHero = () => {
    return (
        <section className="pt-32 pb-16 bg-white overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-8 font-body">
                    <a href="/" className="hover:text-primary transition-colors">Home</a>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-secondary font-semibold">Visa Services</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-display font-black text-secondary mb-12">
                    Visa Services
                </h1>

                {/* Banner */}
                <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-100 shadow-xl">
                    <div className="flex flex-col md:flex-row items-center">
                        {/* Left Logic: Image */}
                        <div className="w-full md:w-1/3 h-[300px] md:h-auto overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1507510165971-ce492f9747d1?auto=format&fit=crop&q=80&w=800"
                                alt="Traveler"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.src = 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800';
                                }}
                            />
                        </div>

                        {/* Middle Logic: Info */}
                        <div className="w-full md:w-1/3 p-8 md:p-12 text-center md:text-left">
                            <h4 className="text-gray-600 font-bold uppercase tracking-widest text-xs mb-4">Expert assistance for</h4>
                            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 inline-block mb-6">
                                <h2 className="text-3xl font-black text-primary leading-tight uppercase italic underline decoration-primary/30 underline-offset-8">
                                    HASSLE-FREE <br /> SERVICES
                                </h2>
                            </div>

                            <a href="tel:+966556182021" className="bg-primary hover:bg-secondary text-white p-5 rounded-2xl inline-flex items-center gap-4 shadow-xl shadow-primary/20 transition-all transform hover:-translate-y-1">
                                <div className="bg-white/20 p-2 rounded-lg">
                                    <Phone className="w-6 h-6 fill-current" />
                                </div>
                                <div className="text-left">
                                    <p className="text-[10px] font-black uppercase tracking-widest opacity-80">Call Experts</p>
                                    <p className="text-xl font-black tracking-tighter">+966 55 618 2021</p>
                                </div>
                            </a>
                        </div>

                        {/* Right Logic: Flags */}
                        <div className="w-full md:w-2/3 p-8 md:p-12 bg-white/50 backdrop-blur-sm self-stretch flex flex-col justify-center">
                            <h3 className="text-2xl font-black text-secondary mb-6 leading-tight">
                                &quot;Global Access, Seamless Travel <br /> Your Visa, Your World!&quot;
                            </h3>
                            <div className="flex flex-wrap gap-3 max-w-lg">
                                {[
                                    'AU', 'BH', 'CA', 'CN', 'EG', 'GE', 'HK', 'JP', 'KW', 'MY', 'PH', 'RU', 'SA', 'SG', 'KR', 'LK', 'TH', 'AE', 'GB', 'US', 'UZ', 'VN'
                                ].map((code) => (
                                    <img
                                        key={code}
                                        src={`https://flagcdn.com/w40/${code.toLowerCase()}.png`}
                                        alt={code}
                                        className="h-6 w-auto object-contain rounded-sm shadow-sm grayscale-[0.2] hover:grayscale-0 transition-all cursor-pointer hover:scale-110"
                                    />
                                ))}
                            </div>
                            <p className="mt-6 text-sm font-bold text-primary italic">Fastest Visa for all countries</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisaHero;
