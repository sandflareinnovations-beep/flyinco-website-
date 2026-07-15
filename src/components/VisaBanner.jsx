'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck, ArrowRight, Phone } from 'lucide-react';

const WHATSAPP = 'https://wa.me/966556182021';

const countries = ['SA', 'AE', 'BH', 'IN', 'US', 'GB', 'JP', 'TH', 'MY', 'SG'];

const VisaBanner = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative rounded-[24px] border border-white/15 bg-white/[0.07] backdrop-blur-xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)] overflow-hidden flex flex-col"
        >
            {/* Background accents */}
            <div className="absolute -top-20 -right-20 w-[200px] h-[200px] rounded-full bg-primary/30 blur-[100px]" />

            {/* Image */}
            <div className="relative h-36 overflow-hidden">
                <img
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&q=80&w=800"
                    alt="Visa services - passport and travel documents"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent" />
                <span className="absolute top-3 left-3 rounded-full px-3 py-1 text-[9px] font-display font-black uppercase tracking-[0.18em] text-secondary bg-white shadow-md">
                    Visa Services
                </span>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-4">
                <div className="flex items-center gap-2 mb-2">
                    <FileCheck className="w-4 h-4 text-white/80" />
                    <h3 className="font-display font-bold text-white text-base leading-snug">
                        Hassle-Free Visa Processing
                    </h3>
                </div>

                <p className="text-white/60 text-[11px] font-body leading-relaxed mb-3">
                    Fastest visa processing for 22+ countries. Expert guidance from application to approval.
                </p>

                {/* Country flags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                    {countries.map((code) => (
                        <img
                            key={code}
                            loading="lazy"
                            src={`https://flagcdn.com/w40/${code.toLowerCase()}.png`}
                            alt={code}
                            className="h-3.5 w-auto object-contain rounded-sm shadow-sm"
                        />
                    ))}
                </div>

                <div className="mt-auto flex flex-col gap-2">
                    <a
                        href="/visa"
                        className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 font-display font-black text-[11px] uppercase tracking-[0.18em] text-secondary bg-white hover:bg-white/90 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]"
                    >
                        Explore Visa Services <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    <a
                        href={`${WHATSAPP}?text=${encodeURIComponent('Hello Flyinco, I would like to enquire about visa services.')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 text-white/70 text-[11px] font-body hover:text-white transition-colors"
                    >
                        <Phone className="w-3 h-3" /> Or call us directly
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default VisaBanner;
