import React from 'react';
import dynamic from 'next/dynamic';
import Hero from '../components/Hero';
import HotelDeals from '../components/HotelDeals';
import VisaBanner from '../components/VisaBanner';
import SaudiOnePackageBanner from '../components/SaudiOnePackageBanner';
import BrowseCategories from '../components/BrowseCategories';
import Testimonials from '../components/Testimonials';
import GoogleReviews from '../components/GoogleReviews';
import HotDealBanner from '../components/HotDealBanner';
import Gallery from '../components/Gallery';
import WhyChooseUs from '../components/WhyChooseUs';

import CorporateTravel from '../components/CorporateTravel';
import RiyadhAgencySection from '../components/RiyadhAgencySection';

// Below-the-fold client components (carousels, forms) are code-split so their
// JS loads after hydration instead of on the critical path. They are still
// server-rendered, so their content stays in the HTML for SEO.
const PopularPackages = dynamic(() => import('../components/PopularPackages'));
const ExploreDestinations = dynamic(() => import('../components/ExploreDestinations'));
const PackagesGrid = dynamic(() => import('../components/PackagesGrid'));
const RequestCallback = dynamic(() => import('../components/RequestCallback'));

const HomePage = () => {
    return (
        <main>
            <Hero />
            {/* Visa Banner + Hotel Deals side by side */}
            <section className="bg-secondary py-10 md:py-14">
                <div className="max-w-[1240px] mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-4 items-stretch">
                        {/* Visa Banner - left side */}
                        <div className="lg:w-[380px] shrink-0">
                            <VisaBanner />
                        </div>
                        {/* Hotel Deals - right side */}
                        <div className="flex-1 min-w-0">
                            <HotelDeals />
                        </div>
                    </div>
                </div>
            </section>
            <SaudiOnePackageBanner />
            <PopularPackages />
            <ExploreDestinations />
            <BrowseCategories />
            <PackagesGrid />
            <Testimonials />
            <GoogleReviews />
            <HotDealBanner />
            <Gallery />
            <CorporateTravel />
            <WhyChooseUs />
            <RiyadhAgencySection />
            <RequestCallback />
        </main>
    );
};

export default HomePage;
