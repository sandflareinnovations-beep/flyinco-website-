import React from 'react';

const HotDealBanner = () => {
    return (
        <section className="bg-white py-12">
            <div className="max-w-[1240px] mx-auto px-4">

                <div className="relative rounded-[24px] overflow-hidden group shadow-md hover:shadow-xl transition-shadow cursor-pointer h-[280px]">

                    <img
                        src="https://picsum.photos/seed/vfgffr/800/600"
                        alt="Dubai Deals"
                        className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-8 md:p-12 flex flex-col justify-end">
                        <div className="bg-black/60 backdrop-blur-sm p-6 rounded-xl border border-white/10 max-w-lg">
                            <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-2 leading-tight">
                                Hot Deal - Dubai Coast, Dubai Leisure Tour with Desert Safari & Burj Khalifa
                            </h2>
                            <p className="text-sm text-gray-300 font-medium mb-3">
                                Amazing cashback on Dubai Coast, Luxury Leisure Dubai 4 Nights/5 Days...
                            </p>
                            <button className="bg-primary text-white text-xs font-bold px-4 py-2 uppercase tracking-wide rounded hover:bg-primary/90 transition-colors">
                                Enquire Request
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default HotDealBanner;
