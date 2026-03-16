import React from 'react';
import { Instagram, Facebook, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import { SiX } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-secondary text-gray-400 py-16" id="contact">
            <div className="max-w-[1240px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-12">

                {/* Col 1 */}
                <div className="flex flex-col">
                    <Link to="/" className="flex items-center gap-2 mb-6 cursor-pointer opacity-90 hover:opacity-100 transition-opacity max-w-max">
                        <img src="/logo-white.png" alt="Flyinco Travel & Tourism" className="h-10 object-contain" />
                    </Link>
                    <p className="font-body text-sm font-medium leading-relaxed mb-6 text-gray-300">
                        Headquartered in Saudi Arabia with operating branches in Bahrain, UAE, and India. We manage high-quality holiday packages globally.
                    </p>
                </div>

                {/* Col 2 */}
                <div>
                    <h4 className="font-display font-bold text-white text-sm uppercase tracking-wide mb-6 border-l-2 border-primary pl-3">Holiday Packages</h4>
                    <ul className="flex flex-col gap-3 font-medium text-sm text-gray-400">
                        <li><Link to="/saudi-packages" className="hover:text-primary transition-colors">Saudi Arabia Tours</Link></li>
                        <li><Link to="/india-packages" className="hover:text-primary transition-colors">India Destinations</Link></li>
                        <li><Link to="/international-packages" className="hover:text-primary transition-colors">International Packages</Link></li>
                        <li><Link to="/visa" className="hover:text-primary transition-colors">Visa Services</Link></li>
                    </ul>
                </div>

                {/* Col 3 */}
                <div>
                    <h4 className="font-display font-bold text-white text-sm uppercase tracking-wide mb-6 border-l-2 border-primary pl-3">Quick Links</h4>
                    <ul className="flex flex-col gap-3 font-medium text-sm text-gray-400">
                        <li><a href="/#about" className="hover:text-primary transition-colors">About Us</a></li>
                        <li><Link to="/visa" className="hover:text-primary transition-colors">Visa Services</Link></li>
                        <li><Link to="/visa" className="hover:text-primary transition-colors">Travel Insurance</Link></li>
                        <li><a href="https://www.flyincochauffeur.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Chauffeur Service</a></li>
                        <li><a href="#contact" className="hover:text-primary transition-colors">Contact Support</a></li>
                    </ul>
                </div>

                {/* Col 4 */}
                <div>
                    <h4 className="font-display font-bold text-white text-sm uppercase tracking-wide mb-6 border-l-2 border-primary pl-3">Contact Us</h4>
                    <div className="flex flex-col gap-4 text-sm text-gray-300 font-medium">
                        <div className="flex gap-3">
                            <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <p>Riyadh / Bahrain / Dubai / Mumbai</p>
                        </div>
                        <div className="flex gap-3 mt-2 text-white/90">
                            <Phone className="w-4 h-4 text-primary shrink-0" />
                            <a href="tel:+966556182021" className="hover:text-primary transition-colors">+966 55 618 2021</a>
                        </div>
                        <div className="flex gap-3 text-white/90">
                            <Phone className="w-4 h-4 text-primary shrink-0" />
                            <a href="tel:+97333372021" className="hover:text-primary transition-colors">+973 33 37 2021</a>
                        </div>
                        <div className="flex gap-3 text-white/90">
                            <Mail className="w-4 h-4 text-primary shrink-0" />
                            <a href="mailto:info@flyinco.com" className="hover:text-primary transition-colors">info@flyinco.com</a>
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="max-w-[1240px] mx-auto px-4 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-400">
                <p>&copy; 2024 Flyinco Travel & Tourism. All rights reserved. KSA | BAHRAIN | UAE | INDIA</p>

                <div className="flex items-center gap-4">
                    <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-primary hover:text-white text-white transition-colors"><Facebook className="w-4 h-4" /></a>
                    <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-primary hover:text-white text-white transition-colors"><Instagram className="w-4 h-4" /></a>
                    <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-primary hover:text-white text-white transition-colors"><SiX className="w-4 h-4" /></a>
                    <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-primary hover:text-white text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;

