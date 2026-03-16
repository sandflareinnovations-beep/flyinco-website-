import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: 'Couple Travel',
        destination: 'Amazing Trip',
        text: 'Best service. It was a wonderful experience with Flyinco. The arrangements were impeccable.',
        img: 'https://picsum.photos/seed/travel7/800/600',
    },
    {
        id: 2,
        name: 'Family Trip',
        destination: 'Great Support',
        text: 'It was a wonderful experience with Flyinco. They arranged our entire Europe trip meticulously.',
        img: 'https://picsum.photos/seed/travel8/800/600',
    },
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-white" id="testimonials">
            <div className="max-w-[1240px] mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary tracking-tight">Travel experiences</h2>
                </div>
                <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
                    {testimonials.map((item) => (
                        <div key={item.id} className="bg-white rounded-[2rem] p-8 flex-1 flex flex-col justify-between shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                            <p className="font-body text-gray-500 mb-8 italic leading-relaxed font-medium">"{item.text}"</p>
                            <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                                <img src={item.img} alt={item.name} className="w-14 h-14 rounded-full object-cover border-2 border-primary/20" />
                                <div>
                                    <h4 className="font-display font-bold text-secondary text-lg">{item.name}</h4>
                                    <p className="font-body text-xs text-primary font-bold uppercase tracking-wider">{item.destination}</p>
                                </div>
                                <div className="ml-auto flex gap-1 bg-grayLight px-3 py-1.5 rounded-full">
                                    <Star className="w-4 h-4 fill-[#FFB800] text-[#FFB800]" />
                                    <span className="text-sm font-bold text-secondary">5.0</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
