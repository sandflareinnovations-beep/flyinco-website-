import React from 'react';
import { Plane, Users, HeadphonesIcon, Globe2, Tag, BookOpen, Clock, HeartHandshake, CheckCircle2 } from 'lucide-react';

const icons = [
    { id: 1, icon: <Tag className="w-8 h-8" strokeWidth={1.5} />, title: 'Premium Value', desc: 'Top tier experiences at the most competitive rates.' },
    { id: 2, icon: <Users className="w-8 h-8" strokeWidth={1.5} />, title: 'Global Support', desc: 'Round-the-clock assistance wherever you are.' },
    { id: 3, icon: <HeartHandshake className="w-8 h-8" strokeWidth={1.5} />, title: 'Tailored Trips', desc: 'Custom itineraries designed around your preferences.' },
    { id: 4, icon: <Globe2 className="w-8 h-8" strokeWidth={1.5} />, title: '100+ Destinations', desc: 'Spanning across every continent for every taste.' },
];

const WhyChooseUs = () => {
    return (
        <section className="py-24 bg-white overflow-hidden" id="about">
            <div className="max-w-[1240px] mx-auto px-4 flex flex-col lg:flex-row gap-20 items-center">

                {/* Left Graphics - Collage of 4 Images */}
                <div className="w-full lg:w-1/2 relative">
                    {/* Background blob */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />

                    <div className="grid grid-cols-2 gap-6 relative z-10">
                        <div className="flex flex-col gap-6 mt-12">
                            <div className="rounded-[3rem] overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-700 aspect-[4/5] border-8 border-white">
                                <img src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=600" alt="Dubai" className="w-full h-full object-cover" />
                            </div>
                            <div className="rounded-[3rem] overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-700 aspect-square border-8 border-white">
                                <img src="https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&q=80&w=600" alt="Kashmir" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="rounded-[3rem] overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-700 aspect-square border-8 border-white">
                                <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=600" alt="Paris" className="w-full h-full object-cover" />
                            </div>
                            <div className="rounded-[3rem] overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-700 aspect-[4/5] border-8 border-white">
                                <img src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=600" alt="Maldives" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                    {/* Floating badge */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-[2rem] shadow-2xl border border-gray-100 flex flex-col items-center gap-2 z-20 hover:scale-110 transition-transform">
                        <span className="text-4xl font-black font-display text-primary">15+</span>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary text-center leading-tight">Years of <br /> Excellence</span>
                    </div>
                </div>

                {/* Right Content */}
                <div className="w-full lg:w-1/2">
                    <h4 className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-4">Our Legacy</h4>
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-display font-black text-secondary mb-8 leading-tight tracking-tight">
                        Expertise That Turns Trips Into Legacies
                    </h2>

                    <p className="text-gray-500 mb-6 font-body leading-relaxed text-base font-medium">
                        Flyinco isn't just a travel agency; we are your curators of global experiences. With a history of managing thousands of successful journeys, we bring a level of precision and insight that ensures every itinerary is optimized for both adventure and comfort.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                        {icons.map((item) => (
                            <div key={item.id} className="flex gap-4 group">
                                <div className="text-primary group-hover:scale-110 transition-transform p-3 bg-primary/5 rounded-2xl h-fit">
                                    {item.icon}
                                </div>
                                <div>
                                    <h5 className="font-black text-xs text-secondary font-display uppercase tracking-widest mb-1.5">{item.title}</h5>
                                    <p className="text-[11px] text-gray-400 font-bold leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="bg-primary text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-black hover:shadow-2xl transition-all shadow-xl shadow-primary/20 flex items-center gap-3">
                        Learn More About Us <CheckCircle2 className="w-5 h-5" />
                    </button>

                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;
