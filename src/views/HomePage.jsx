import React from 'react';
import dynamic from 'next/dynamic';
import Hero from '../components/Hero';
import HotelDeals from '../components/HotelDeals';
import SaudiOnePackageBanner from '../components/SaudiOnePackageBanner';
import UmrahVisaBanner from '../components/UmrahVisaBanner';
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
const OurOffices = dynamic(() => import('../components/OurOffices'));
const WhatWeArrange = dynamic(() => import('../components/WhatWeArrange'));

const HomePage = () => {
    return (
        <main>
            <Hero />
            {/* Umrah visa promo — leads right under the hero */}
            <UmrahVisaBanner />
            {/* Discover Saudi banner (with Package Visa eligibility card) */}
            <SaudiOnePackageBanner />
            {/* Exclusive Hotel Deals — standalone full-width section */}
            <HotelDeals />
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
            {/* Saudi / Bahrain / India desks — the three-country network */}
            <OurOffices />
            {/* Answer-first service + destination summary, for search engines and
                AI assistants as much as for readers */}
            <WhatWeArrange />
            <RiyadhAgencySection />
            <RequestCallback />
        </main>
    );
};

export default HomePage;
