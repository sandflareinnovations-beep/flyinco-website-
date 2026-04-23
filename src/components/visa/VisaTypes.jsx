import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const visaTypes = [
    {
        title: 'Tourist Visa',
        desc: 'Explore the world with ease. We handle everything from documentation to submission for your leisure trips.',
        image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=600'
    },
    {
        title: 'Business Visa',
        desc: 'Seamless business travel. Swift processing for meetings, conferences, and corporate engagements.',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600'
    },
    {
        title: 'Umrah Visa',
        desc: 'Specialized assistance for your spiritual journey to Saudi Arabia with dedicated Umrah visa services.',
        image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=600'
    },
    {
        title: 'Student Visa',
        desc: 'Unlock global education. Expert guidance for students aiming to study at top universities abroad.',
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600'
    },
    {
        title: 'Work Visa',
        desc: 'Career growth without borders. Professional assistance for employment visas in your dream destination.',
        image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800'
    },
    {
        title: 'Visa Extension',
        desc: 'Stay longer without stress. Quick and legal extension services for your current visa.',
        image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=600'
    }
];

const VisaTypes = () => {
    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-display font-black text-secondary mb-4">
                        Types of Visa Services We Offer
                    </h2>
                    <p className="text-gray-500 font-body text-sm font-medium">Swipe to explore our specialized visa solutions</p>
                </div>

                <div className="relative visa-swiper-container">
                    <Swiper
                        modules={[Autoplay, Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        pagination={{ clickable: true }}
                        navigation={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="pb-16"
                    >
                        {visaTypes.map((type) => (
                            <SwiperSlide key={type.title}>
                                <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all group flex flex-col border border-gray-100 p-4 h-full">
                                    <div className="rounded-[2rem] overflow-hidden h-64 mb-6">
                                        <img
                                            src={type.image}
                                            alt={type.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            onError={(e) => {
                                                e.target.src = 'https://images.unsplash.com/photo-1454165833767-131435bb4496?auto=format&fit=crop&q=80&w=800';
                                            }}
                                        />
                                    </div>
                                    <div className="px-4 pb-4">
                                        <h3 className="text-xl font-black text-secondary mb-3">{type.title}</h3>
                                        <p className="text-sm text-gray-400 font-bold leading-relaxed">
                                            {type.desc}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Disclaimer */}
                <div className="mt-20 p-8 md:p-12 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm">
                    <h4 className="text-xl font-black text-secondary mb-8">Disclaimer</h4>
                    <ul className="space-y-4">
                        {[
                            'We do not provide any job or employment guarantee.',
                            'Our services are purely based on visa processing and document assistance as per the respective embassy guidelines.',
                            'Visa approval is at the sole discretion of the embassy/consulate.',
                            'The visa fee and service charge are non-refundable regardless of the visa decision.',
                            'Incomplete documents or misinformation may lead to visa rejection.'
                        ].map((text, i) => (
                            <li key={i} className="flex gap-3 text-sm text-gray-500 font-bold leading-relaxed">
                                <span className="text-red-500 mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                                {text}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default VisaTypes;
