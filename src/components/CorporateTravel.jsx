import React from 'react';
import { Building2, Globe, ShieldCheck, BadgePercent, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CorporateTravel = ({ hideButton = false }) => {
    const benefits = [
        { icon: <Building2 className="w-8 h-8" />, title: 'SME & Corporate Rates', desc: 'Pre-negotiated rates with major airlines and hotel chains globally.' },
        { icon: <ShieldCheck className="w-8 h-8" />, title: 'Risk Management', desc: 'Duty of care and traveler tracking to ensure your team is safe.' },
        { icon: <BadgePercent className="w-8 h-8" />, title: 'Expense Control', desc: 'Transparent reporting and policy compliance to optimize your budget.' },
        { icon: <Globe className="w-8 h-8" />, title: 'Global Presence', desc: 'Support branches in KSA, UAE, Bahrain, and India.' }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden relative" id="corporate-deals">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2">
                        <h4 className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-4">Corporate Excellence</h4>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-secondary mb-8 leading-tight">
                            Streamline Your <span className="text-primary">Business</span> Travel
                        </h2>
                        <p className="text-gray-600 font-body text-lg mb-12 max-w-xl">
                            From small startups to large enterprises, we provide integrated travel management solutions that save time and reduce costs without compromising on comfort.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            {benefits.map((benefit, i) => (
                                <div key={i} className="group">
                                    <div className="text-primary mb-4 p-4 bg-primary/10 rounded-2xl w-fit group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-secondary font-display font-black text-xs uppercase tracking-widest mb-2">{benefit.title}</h3>
                                    <p className="text-gray-600 text-[11px] font-bold leading-relaxed">{benefit.desc}</p>
                                </div>
                            ))}
                        </div>

                        {!hideButton && (
                            <Link to="/corporate-travel#inquiry-form" className="w-max inline-flex bg-primary text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] items-center gap-3 hover:bg-secondary hover:text-white transition-all shadow-xl shadow-primary/20">
                                Get a Corporate Quote <ChevronRight className="w-5 h-5" />
                            </Link>
                        )}
                    </div>

                    {/* Right Visual */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative">
                            <div className="rounded-[4rem] overflow-hidden border-[12px] border-white shadow-2xl skew-y-3 group hover:skew-y-0 transition-all duration-700">
                                <img 
                                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                                    alt="Modern Office" 
                                    className="w-full h-[600px] object-cover group-hover:scale-110 transition-transform duration-[2s]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
                            </div>
                            
                            {/* Floating Stats */}
                            <div className="absolute -bottom-10 -left-10 bg-primary p-8 rounded-[2rem] shadow-2xl border-4 border-white flex flex-col items-center gap-1">
                                <span className="text-3xl font-black font-display text-white">500+</span>
                                <span className="text-[10px] font-black uppercase tracking-widest text-white/80">Corporate Clients</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CorporateTravel;
