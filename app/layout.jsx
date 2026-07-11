import React from 'react';
import Script from 'next/script';
import '../src/index.css';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import WhatsAppButton from '../src/components/WhatsAppButton';
import Analytics from '../src/components/Analytics';

export const metadata = {
  metadataBase: new URL('https://www.flyinco.com'),
  title: 'Flyinco | Travel & Tourism',
  description: 'Flyinco Travel & Tourism - KSA, BAHRAIN, UAE, INDIA',
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Analytics />
        <div className="bg-[#FAFAFA] w-screen overflow-x-hidden min-h-screen relative font-body text-secondary">
          <Navbar />
          {children}
          <Footer />
          <WhatsAppButton />
        </div>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "xemgf8jqdz");`}
        </Script>
      </body>
    </html>
  );
}
