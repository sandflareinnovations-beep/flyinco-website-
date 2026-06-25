import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import VisaPage from './pages/VisaPage';
import InternationalPackagesPage from './pages/InternationalPackagesPage';
import IndiaPackagesPage from './pages/IndiaPackagesPage';
import SaudiPackagesPage from './pages/SaudiPackagesPage';
import HoneymoonPackagesPage from './pages/HoneymoonPackagesPage';
import AdventurePackagesPage from './pages/AdventurePackagesPage';
import ItineraryPage from './pages/ItineraryPage';
import CorporateTravelPage from './pages/CorporateTravelPage';

// WhatsApp Floating Button Component
const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/966556182021"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] w-14 h-14 bg-[#25D366] text-white rounded-[16px] flex items-center justify-center shadow-lg hover:bg-[#128C7E] transition-all hover:-translate-y-1 group cursor-pointer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8" />
    </a>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="bg-[#FAFAFA] w-screen overflow-x-hidden min-h-screen relative font-body text-secondary">
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/visa" element={<VisaPage />} />
        <Route path="/international-packages" element={<InternationalPackagesPage />} />
        <Route path="/india-packages" element={<IndiaPackagesPage />} />
        <Route path="/saudi-packages" element={<SaudiPackagesPage />} />
        <Route path="/honeymoon-packages" element={<HoneymoonPackagesPage />} />
        <Route path="/adventure-tours" element={<AdventurePackagesPage />} />
        <Route path="/package/:slug" element={<ItineraryPage />} />
        <Route path="/corporate-travel" element={<CorporateTravelPage />} />
      </Routes>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
