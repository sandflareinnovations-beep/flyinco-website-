import React from 'react';
import { MapPin, Instagram } from 'lucide-react';

const galleryItems = [
    { id: 1, location: 'Paris', img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800' },
    { id: 2, location: 'Manali', img: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=800' },
    { id: 3, location: 'Kerala', img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800' },
    { id: 4, location: 'Maldives', img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800' },
];

const Gallery = () => {
    return (
        <section className="py-24 bg-white" id="gallery">
            <div className="max-w-[1240px] mx-auto px-4">

                <div className="mb-12 flex flex-col items-center">
                    <h4 className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-3 text-center">Visual Stories</h4>
                    <h2 className="text-4xl md:text-5xl font-display font-black text-secondary tracking-tight text-center">Journey In Frames</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {galleryItems.map((item) => (
                        <div key={item.id} className="relative group rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer aspect-[3/4] border border-gray-50">
                            <img src={item.img} alt={item.location} className="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[1.5s]" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-primary/20 transition-colors duration-500" />

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="bg-white p-4 rounded-full shadow-2xl scale-50 group-hover:scale-100 transition-transform duration-500">
                                    <Instagram className="w-6 h-6 text-primary" />
                                </div>
                            </div>

                            <div className="absolute inset-x-0 bottom-6 px-6 flex justify-start">
                                <span className="bg-white/95 backdrop-blur-md text-secondary font-black text-[10px] uppercase tracking-[0.15em] px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2 border border-white/20">
                                    <MapPin className="w-3.5 h-3.5 text-primary" />
                                    {item.location}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Gallery;
