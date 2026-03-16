import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { 
            name: 'Saudi Arabia', 
            path: '/saudi-packages',
            dropdown: [
                { name: 'Riyadh Heritage', path: '/package/riyadh-heritage-tour' },
                { name: 'Al-Ula Wonders', path: '/package/al-ula-wonders' },
                { name: 'Jeddah Red Sea', path: '/package/jeddah-red-sea-escape' },
                { name: 'Umrah Packages', path: '/package/spiritual-umrah-journey' },
            ]
        },
        { 
            name: 'India', 
            path: '/india-packages',
            dropdown: [
                { name: 'Kerala Paradise', path: '/package/kerala-backwaters-paradise' },
                { name: 'Royal Rajasthan', path: '/package/royal-rajasthan-heritage' },
                { name: 'Andaman Bliss', path: '/package/andaman-island-escape' },
            ]
        },
        { 
            name: 'World', 
            path: '/international-packages',
            dropdown: [
                { name: 'Maldives Luxury', path: '/package/maldives-overwater-luxury' },
                { name: 'Bali Retreat', path: '/package/bali-ubud-beach-retreat' },
                { name: 'Dubai City', path: '/package/dubai-city-desert' },
            ]
        },
        { 
            name: 'Speciality Tours', 
            path: '#',
            dropdown: [
                { name: 'Honeymoon Packages', path: '/honeymoon-packages' },
                { name: 'Adventure Tours', path: '/adventure-tours' },
            ]
        },
        { name: 'Chauffeur Service', path: 'https://www.flyincochauffeur.com/', external: true },
        { name: 'Visa', path: '/visa' },
        { name: 'About', path: '/#about' },
        { name: 'Corporate Travel', path: '/corporate-travel' },
    ];

    const [activeDropdown, setActiveDropdown] = useState(null);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
                className={`fixed w-full z-[100] transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm shadow-sm py-4'}`}
            >
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between items-center">

                    {/* Logo */}
                    <Link to="/" className="flex items-center cursor-pointer">
                        <img src="/logo.png" alt="Flyinco Travel & Tourism" className="h-10 md:h-12 object-contain" />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-6 font-display font-semibold text-[13px] text-secondary">
                        {navLinks.map((link) => (
                            <div 
                                key={link.name} 
                                className="relative group py-5"
                                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                {link.external ? (
                                    <a 
                                        href={link.path}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-primary transition-colors flex items-center gap-1"
                                    >
                                        {link.name}
                                    </a>
                                ) : (
                                    <Link
                                        to={link.path}
                                        className={`hover:text-primary transition-colors flex items-center gap-1 ${location.pathname === link.path ? 'text-primary' : ''}`}
                                    >
                                        {link.name}
                                        {link.dropdown && <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
                                    </Link>
                                )}
                                
                                {link.dropdown && (
                                    <AnimatePresence>
                                        {activeDropdown === link.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-2xl p-4 border border-gray-100 flex flex-col gap-2 z-[110]"
                                            >
                                                {link.dropdown.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        to={subItem.path}
                                                        className="px-4 py-2 hover:bg-primary/5 hover:text-primary rounded-xl transition-all text-xs font-bold"
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Action */}
                    <div className="hidden lg:flex items-center">
                        <button className="bg-primary text-white border-2 border-primary px-8 py-2.5 rounded-full font-bold hover:bg-white hover:text-primary transition-all transform hover:-translate-y-0.5 text-sm uppercase tracking-wider shadow-md">
                            Contact Us
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button className="lg:hidden text-secondary" onClick={() => setMobileMenuOpen(true)}>
                        <Menu className="w-8 h-8" />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-white z-[120] lg:hidden flex flex-col p-8 overflow-y-auto"
                    >
                        <div className="flex items-center justify-between mb-12">
                            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
                                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                                    <span className="text-white font-black text-xl">F</span>
                                </div>
                                <span className="font-display font-black text-2xl tracking-tighter text-secondary uppercase">Flyinco</span>
                            </Link>
                            <button onClick={() => setMobileMenuOpen(false)} className="p-3 bg-gray-50 rounded-2xl text-secondary">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <div key={link.name} className="flex flex-col">
                                    {link.dropdown ? (
                                        <>
                                            <button 
                                                onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                                                className="flex items-center justify-between py-4 text-xl font-black text-secondary uppercase tracking-tight"
                                            >
                                                {link.name}
                                                <ChevronDown className={`w-6 h-6 transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                                            </button>
                                            <AnimatePresence>
                                                {activeDropdown === link.name && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="flex flex-col gap-3 pl-4 overflow-hidden border-l-2 border-primary/20 ml-2 mb-4"
                                                    >
                                                        {link.dropdown.map((subItem) => (
                                                            <Link
                                                                key={subItem.name}
                                                                to={subItem.path}
                                                                onClick={() => setMobileMenuOpen(false)}
                                                                className="py-2 text-sm font-bold text-gray-500 hover:text-primary transition-colors"
                                                            >
                                                                {subItem.name}
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </>
                                    ) : link.external ? (
                                        <a
                                            href={link.path}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="py-4 text-xl font-black text-secondary uppercase tracking-tight"
                                        >
                                            {link.name}
                                        </a>
                                    ) : (
                                        <Link
                                            to={link.path}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="py-4 text-xl font-black text-secondary uppercase tracking-tight"
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 pt-12 border-t border-gray-100">
                            <Link
                                to="/visa"
                                onClick={() => setMobileMenuOpen(false)}
                                className="w-full bg-primary text-white py-6 rounded-3xl font-black text-sm uppercase tracking-[0.2em] flex items-center justify-center shadow-2xl shadow-primary/30"
                            >
                                Apply for Visa
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
