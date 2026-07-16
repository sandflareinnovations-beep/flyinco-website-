import React from 'react';
import dynamic from 'next/dynamic';
import Hero from '../components/Hero';
import HotelDeals from '../components/HotelDeals';
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
            {/* Discover Saudi banner (with Package Visa eligibility card) under the hero */}
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
            <RiyadhAgencySection />
            <RequestCallback />
        </main>
    );
};

export default HomePage;
