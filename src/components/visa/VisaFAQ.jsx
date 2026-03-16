import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
    {
        question: 'What is the processing time for a visa?',
        answer: 'Processing times vary greatly depending on the country and type of visa. Generally, it can take anywhere from 5 working days to several weeks. We recommend applying at least a month in advance.'
    },
    {
        question: 'How much are the visa fees?',
        answer: 'Visa fees are determined by the respective embassies and are subject to change. They depend on the visa type, duration, and the nationality of the applicant.'
    },
    {
        question: 'Do I need a travel insurance?',
        answer: 'For many countries, travel insurance is a mandatory requirement for visa approval. Even if not mandatory, we highly recommend it for your financial protection during travel.'
    },
    {
        question: 'What documents are required?',
        answer: 'Standard documents usually include a valid passport, recent photographs, flight itinerary, hotel booking, and proof of financial means. Specific requirements vary by country.'
    }
];

const VisaFAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                <h2 className="text-3xl md:text-4xl font-display font-black text-secondary mb-12 text-center md:text-left">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <div key={index} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm transition-all">
                            <button
                                className={`w-full p-6 text-left flex justify-between items-center transition-colors ${openIndex === index ? 'bg-secondary text-white' : 'bg-white hover:bg-gray-50'}`}
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                            >
                                <span className="font-bold font-display">{faq.question}</span>
                                {openIndex === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                            </button>
                            {openIndex === index && (
                                <div className="p-8 bg-gray-50 text-gray-600 font-body text-sm leading-relaxed border-t border-gray-100">
                                    {faq.answer}
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
