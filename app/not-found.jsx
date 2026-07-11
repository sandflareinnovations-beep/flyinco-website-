import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found | Flyinco Travel & Tourism',
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 pt-32 pb-24 text-center">
      <p className="text-primary font-display font-black text-7xl mb-4">404</p>
      <h1 className="text-3xl md:text-4xl font-display font-black text-secondary mb-4">
        This destination isn&apos;t on our map
      </h1>
      <p className="text-gray-500 font-body font-medium max-w-md mb-10">
        The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back
        on the road.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="bg-primary text-white px-8 py-4 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all"
        >
          Back to Home
        </Link>
        <Link
          href="/saudi-packages"
          className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-all"
        >
          Browse Packages
        </Link>
        <a
          href="https://wa.me/966556182021"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white px-8 py-4 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-lg hover:bg-[#128C7E] transition-all"
        >
          Chat on WhatsApp
        </a>
      </div>
    </main>
  );
}
