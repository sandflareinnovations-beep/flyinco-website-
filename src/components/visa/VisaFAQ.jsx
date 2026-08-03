'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { visaFaqs } from '../../data/visaFaqs';

const VisaFAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-14 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                <h2 className="text-3xl md:text-4xl font-display font-black text-secondary mb-12 text-center md:text-left">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    {visaFaqs.map((faq, index) => (
                        <div key={index} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm transition-all">
                            <button
                                className={`w-full p-6 text-left flex justify-between items-center transition-colors ${openIndex === index ? 'bg-secondary text-white' : 'bg-white hover:bg-gray-50'}`}
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                            >
                                <span className="font-bold font-display">{faq.q}</span>
                                {openIndex === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                            </button>
                            {openIndex === index && (
                                <div className="p-8 bg-gray-50 text-gray-600 font-body text-sm leading-relaxed border-t border-gray-100">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VisaFAQ;
