import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

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
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.765 0 1.25.32 2.456.928 3.52c-.085.31-.226.837-.502 1.838.932-.236 1.488-.383 1.868-.485 1.054.59 2.234.908 3.473.908 3.181 0 5.767-2.586 5.767-5.765 0-3.179-2.586-5.781-5.767-5.781zM11.95 19.33c-1.144 0-2.261-.295-3.237-.852l-2.09.52.535-2.034a7.087 7.087 0 01-1.002-3.66c0-3.923 3.193-7.11 7.106-7.11A7.118 7.118 0 0119.06 13.3c0 3.923-3.182 7.11-7.11 7.11z" />
        <path d="M16.14 15.11a3.03 3.03 0 00-.91-.12c-.52.01-.84.28-1 .47-.1.12-.2.27-.32.41-.12.14-.26.25-.45.28-.19.03-.45-.04-1-.31a4.918 4.918 0 01-1.87-1.78c-.28-.5-.1-.7.05-.88.16-.2.43-.53.5-.66.07-.13.06-.27-.01-.4-.14-.29-.62-1.5-.85-2.06-.23-.55-.46-.48-.63-.48-.17 0-.36 0-.55 0-.19 0-.5.06-.76.34-.26.28-1 .97-1 2.37 0 1.39 1.03 2.74 1.17 2.93.14.19 2 3.03 4.85 4.26 2.85 1.22 2.85.81 3.37.76.52-.06 1.66-.68 1.9-1.34.24-.65.24-1.22.17-1.34z" />
      </svg>
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
