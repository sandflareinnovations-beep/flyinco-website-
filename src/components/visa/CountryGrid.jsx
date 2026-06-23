import React from 'react';
import { Phone } from 'lucide-react';

const countries = [
    { name: 'Saudi Umrah Visa', code: 'SA', image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=600' },
    { name: 'Australia', code: 'AU', image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=600' },
    { name: 'Azerbaijan', code: 'AZ', image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&q=80&w=600' },
    { name: 'Bahrain', code: 'BH', image: 'https://images.unsplash.com/photo-1572252821143-035a024857ac?auto=format&fit=crop&q=80&w=600' },
    { name: 'Canada', code: 'CA', image: 'https://images.unsplash.com/photo-1668882698355-923d532fa985?auto=format&fit=crop&q=80&w=600' },
    { name: 'China', code: 'CN', image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&q=80&w=600' },
    { name: 'Egypt', code: 'EG', image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80&w=600' },
    { name: 'Georgia', code: 'GE', image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80&w=600' },
    { name: 'Hong Kong', code: 'HK', image: 'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&q=80&w=600' },
    { name: 'Japan', code: 'JP', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=600' },
    { name: 'Kuwait', code: 'KW', image: 'https://images.unsplash.com/photo-1551918120-9739cb430c6d?auto=format&fit=crop&q=80&w=600' },
    { name: 'Malaysia', code: 'MY', image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=600' },
    { name: 'Philippines', code: 'PH', image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&q=80&w=600' },
    { name: 'Russia', code: 'RU', image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&q=80&w=600' },
    { name: 'Saudi Arabia', code: 'SA', image: 'https://images.unsplash.com/photo-1663900108404-a05e8bf82cda?auto=format&fit=crop&q=80&w=600' },
    { name: 'Singapore', code: 'SG', image: 'https://images.unsplash.com/photo-1702085241418-e87b3b60a497?auto=format&fit=crop&q=80&w=600' },
    { name: 'South Korea', code: 'KR', image: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&q=80&w=600' },
    { name: 'Sri Lanka', code: 'LK', image: 'https://images.unsplash.com/photo-1586500036706-41963de24d8b?auto=format&fit=crop&q=80&w=600' },
    { name: 'Thailand', code: 'TH', image: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&q=80&w=600' },
    { name: 'UAE', code: 'AE', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=600' },
    { name: 'United Kingdom', code: 'GB', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=600' },
    { name: 'United States', code: 'US', image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=600' },
    { name: 'Uzbekistan', code: 'UZ', image: 'https://images.unsplash.com/photo-1604357209793-fca5dca89f97?auto=format&fit=crop&q=80&w=600' },
    { name: 'Vietnam', code: 'VN', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=600' },
];

const CountryGrid = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
                <h2 className="text-3xl md:text-4xl font-display font-black text-secondary mb-12">
                    Specialist in <span className="text-red-500 italic">VISA</span> for all countries
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {countries.map((country) => (
                        <div key={country.name} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col h-full border border-gray-100">
                            {/* Flag & Image Container */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={country.image}
                                    alt={country.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    onError={(e) => {
                                        e.target.src = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=600';
                                    }}
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-1 rounded-lg shadow-md border border-white">
                                    <img
                                        src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`}
                                        alt={country.name}
                                        className="h-4 w-auto object-contain"
                                    />
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-6 flex flex-col flex-grow text-left">
                                <h3 className="text-lg font-black text-secondary mb-1">{country.name}</h3>
                                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-50">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest group-hover:text-primary transition-colors">Price On Request</p>
                                    <a href="tel:+966556182021" className="bg-primary p-2 rounded-full text-white shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                                        <Phone className="w-4 h-4 fill-current" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CountryGrid;
