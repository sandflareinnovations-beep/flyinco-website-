import React from 'react';

const stats = [
    { label: 'VISA PROCESSED', value: '25K+' },
    { label: 'COUNTRIES SERVED', value: '40+' },
    { label: 'SUCCESS RATE', value: '98%' },
    { label: 'EXPERT SUPPORT', value: '24x7' },
];

const VisaStats = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden border-y border-gray-50">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-display font-black text-secondary mb-6">Why Choose Us For Visa Services</h2>
                <p className="text-gray-500 mb-20 max-w-2xl mx-auto font-body text-base font-medium leading-relaxed">
                    We combine our expertise and passion for travel to provide you with seamless visa solutions that turn global travel dreams into reality.
                </p>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {stats.map((stat) => (
                        <div key={stat.label} className="flex flex-col items-center group">
                            <div className="mb-6 p-1 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl group-hover:scale-110 transition-transform">
                                <span className="text-4xl md:text-6xl font-display font-black text-primary tracking-tighter">
                                    {stat.value}
                                </span>
                            </div>
                            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.25em] text-gray-400 text-center leading-none">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VisaStats;
