import React from 'react';
import { Inter, Poppins } from 'next/font/google';
import '../src/index.css';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import WhatsAppButton from '../src/components/WhatsAppButton';
import Analytics from '../src/components/Analytics';
import ClarityLoader from '../src/components/ClarityLoader';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://www.flyinco.com'),
  title: 'Flyinco — Travel Agency in Riyadh | Travel & Tourism',
  description:
    'Flyinco Travel & Tourism — travel agency in Riyadh, Saudi Arabia. Holiday packages, tours, visa services and corporate travel across KSA, Bahrain, UAE and India.',
  icons: { icon: '/favicon.png' },
  openGraph: {
    siteName: 'Flyinco Travel & Tourism',
    type: 'website',
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <Analytics />
        <div className="bg-[#FAFAFA] w-screen overflow-x-hidden min-h-screen relative font-body text-secondary">
          <Navbar />
          {children}
          <Footer />
          <WhatsAppButton />
        </div>
        <ClarityLoader />
      </body>
    </html>
  );
}
