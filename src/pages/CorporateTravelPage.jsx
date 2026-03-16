import React from 'react';
import CorporateTravel from '../components/CorporateTravel';
import CorporateInquiryForm from '../components/CorporateInquiryForm';
import { motion } from 'framer-motion';

const CorporateTravelPage = () => {
    return (
        <main className="pt-24 bg-grayLight min-h-screen">
            {/* Page Header */}
            <div className="w-full py-16 bg-secondary relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full">
                    <img 
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
                        alt="Corporate Header" 
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-transparent" />
                </div>
                <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 text-center">
                    <motion.h4 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-4"
                    >
                        VIP Business Solutions
                    </motion.h4>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-display font-black text-white tracking-tight"
                    >
                        Corporate <span className="text-primary">Travel</span> Hub
                    </motion.h1>
                </div>
            </div>

            {/* Corporate Details Section */}
            <CorporateTravel hideButton={true} />

            {/* Inquiry Form Section */}
            <CorporateInquiryForm />
        </main>
    );
};

export default CorporateTravelPage;
