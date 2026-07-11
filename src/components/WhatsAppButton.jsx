'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { trackEvent } from '../lib/analytics';

const WhatsAppButton = () => {
  const pathname = usePathname();
  const source = pathname === '/' ? 'the Flyinco home page' : `the ${pathname} page on flyinco.com`;
  const text = `Hi Flyinco! I'm visiting ${source} and would like to know more.`;

  return (
    <a
      href={`https://wa.me/966556182021?text=${encodeURIComponent(text)}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent('whatsapp_click', { page: pathname })}
      className="fixed bottom-8 right-8 z-[100] w-14 h-14 bg-[#25D366] text-white rounded-[16px] flex items-center justify-center shadow-lg hover:bg-[#128C7E] transition-all hover:-translate-y-1 group cursor-pointer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8" />
    </a>
  );
};

export default WhatsAppButton;
