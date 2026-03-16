import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BrowseCategories = () => {
    return (
        <section className="py-24 bg-gray-50" id="categories">
            <div className="max-w-[1240px] mx-auto px-4">

                <div className="mb-12 flex flex-col items-center">
                    <h4 className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-3 text-center">Your Style</h4>
                    <h2 className="text-4xl md:text-5xl font-display font-black text-secondary tracking-tight">
                        Browse By Choice
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className="relative h-[400px] rounded-[3rem] overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-700 cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?auto=format&fit=crop&q=80&w=1200" alt="Honeymoon" className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[2s]" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent p-12 flex flex-col justify-center">
                            <h3 className="text-4xl md:text-5xl font-display font-black text-white mb-4 leading-tight">Honeymoon <br /> Packages</h3>
                            <p className="text-white/80 text-base font-bold max-w-[70%] mb-10 leading-relaxed border-l-4 border-primary pl-6">Take romantic walks around our beautiful honeymoon locations specially designed for couples.</p>
                            <Link to="/honeymoon-packages" className="bg-white text-secondary font-black text-xs uppercase tracking-widest px-10 py-5 rounded-full w-max hover:bg-primary hover:text-white transition-all shadow-xl flex items-center gap-3">
                                Explore <ArrowUpRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    <div className="relative h-[400px] rounded-[3rem] overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-700 cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80&w=1200" alt="Adventure" className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[2s]" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent p-12 flex flex-col justify-center">
                            <h3 className="text-4xl md:text-5xl font-display font-black text-white mb-4 leading-tight">Adventure <br /> Packages</h3>
                            <p className="text-white/80 text-base font-bold max-w-[70%] mb-10 leading-relaxed border-l-4 border-primary pl-6">Enjoy adrenaline-filled activities designed to unleash your adventurous side effectively.</p>
                            <Link to="/adventure-tours" className="bg-white text-secondary font-black text-xs uppercase tracking-widest px-10 py-5 rounded-full w-max hover:bg-primary hover:text-white transition-all shadow-xl flex items-center gap-3">
                                Explore <ArrowUpRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default BrowseCategories;
