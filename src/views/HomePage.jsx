import React from 'react';
import Hero from '../components/Hero';
import SaudiOnePackageBanner from '../components/SaudiOnePackageBanner';
import PopularPackages from '../components/PopularPackages';
import ExploreDestinations from '../components/ExploreDestinations';
import BrowseCategories from '../components/BrowseCategories';
import PackagesGrid from '../components/PackagesGrid';
import Testimonials from '../components/Testimonials';
import GoogleReviews from '../components/GoogleReviews';
import HotDealBanner from '../components/HotDealBanner';
import Gallery from '../components/Gallery';
import WhyChooseUs from '../components/WhyChooseUs';

import CorporateTravel from '../components/CorporateTravel';
import RequestCallback from '../components/RequestCallback';

const HomePage = () => {
    return (
        <main>
            <Hero />
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
            <RequestCallback />
        </main>
    );
};

export default HomePage;
