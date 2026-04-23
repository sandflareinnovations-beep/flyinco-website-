import React from 'react';
import { Quote, CreditCard, FileText, CheckCircle2 } from 'lucide-react';

const steps = [
    {
        icon: <Quote className="w-8 h-8" />,
        title: 'Get Quote',
        desc: 'Submit your requirements and get a precise quote.'
    },
    {
        icon: <CreditCard className="w-8 h-8" />,
        title: 'Make Payment',
        desc: 'Secure and easy payment options via multiple channels.'
    },
    {
        icon: <FileText className="w-8 h-8" />,
        title: 'Submit Documents',
        desc: 'Upload or courier your documents for verification.'
    },
    {
        icon: <CheckCircle2 className="w-8 h-8" />,
        title: 'Receive Visa',
        desc: 'Get your visa delivered right to your doorstep or inbox.'
    },
];

const VisaProcess = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
                <h2 className="text-3xl md:text-4xl font-display font-black text-secondary mb-16">
                    Simplify Your Visa Application
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[60px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-gray-100 to-transparent -z-10" />

                    {steps.map((step) => (
                        <div key={step.title} className="flex flex-col items-center group">
                            <div className="w-20 h-20 bg-white border border-gray-100 rounded-3xl shadow-xl shadow-gray-100 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform group-hover:bg-primary group-hover:text-white group-hover:shadow-primary/20">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-black text-secondary mb-3">{step.title}</h3>
                            <p className="text-sm text-gray-500 font-body leading-relaxed max-w-[200px]">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VisaProcess;
