import React from 'react';
import Hero from '../components/Hero';
import PopularPackages from '../components/PopularPackages';
import ExploreDestinations from '../components/ExploreDestinations';
import BrowseCategories from '../components/BrowseCategories';
import PackagesGrid from '../components/PackagesGrid';
import Testimonials from '../components/Testimonials';
import HotDealBanner from '../components/HotDealBanner';
import Gallery from '../components/Gallery';
import WhyChooseUs from '../components/WhyChooseUs';

import CorporateTravel from '../components/CorporateTravel';

const HomePage = () => {
    return (
        <main>
            <Hero />
            <PopularPackages />
            <ExploreDestinations />
            <BrowseCategories />
            <PackagesGrid />
            <Testimonials />
            <HotDealBanner />
            <Gallery />
            <CorporateTravel />
            <WhyChooseUs />
        </main>
    );
};

export default HomePage;
