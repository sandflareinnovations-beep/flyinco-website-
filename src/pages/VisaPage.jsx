import React, { useEffect } from 'react';
import VisaHero from '../components/visa/VisaHero';
import CountryGrid from '../components/visa/CountryGrid';
import VisaStats from '../components/visa/VisaStats';
import VisaProcess from '../components/visa/VisaProcess';
import VisaTypes from '../components/visa/VisaTypes';
import VisaFAQ from '../components/visa/VisaFAQ';
import VisaForm from '../components/visa/VisaForm';
import VisaLinks from '../components/visa/VisaLinks';

const VisaPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="bg-white">
            <VisaHero />
            <CountryGrid />
            <VisaStats />
            <VisaProcess />
            <VisaTypes />
            <VisaFAQ />
            <VisaForm />
            <VisaLinks />
        </main>
    );
};

export default VisaPage;
