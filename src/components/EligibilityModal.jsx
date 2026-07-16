'use client';

import React, { useEffect, useState } from 'react';
import { X, Users, CheckCircle, FileText, Plane, Building, Car, Camera, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { trackEvent } from '../lib/analytics';

export const INCLUSIONS = [
    { icon: Plane, label: 'Flights' },
    { icon: Building, label: 'Hotels' },
    { icon: FileText, label: 'Visa' },
    { icon: Car, label: 'Transfers' },
    { icon: Camera, label: 'Sightseeing' },
];

// Nationalities currently eligible for the Saudi Package Visa programme.
const ELIGIBLE_NATIONALITIES = [
    'India',
    'Pakistan',
    'Jordan',
    'Egypt',
    'Mexico',
    'Indonesia',
    'Bangladesh',
];

const RESIDENCE_COUNTRIES = [
    'India',
    'Pakistan',
    'Jordan',
    'Egypt',
    'Mexico',
    'Indonesia',
    'Bangladesh',
    'Saudi Arabia',
    'United Arab Emirates',
    'Bahrain',
    'Qatar',
    'Kuwait',
    'Oman',
    'United Kingdom',
    'United States',
    'Canada',
    'Germany',
    'France',
    'Italy',
    'Spain',
    'Turkey',
    'Malaysia',
    'Singapore',
    'Australia',
    'South Africa',
];

const QUALIFICATIONS = [
    'Valid visa from the US/UK/Schengen countries (Entered at least once)',
    'Valid residence in the GCC countries (No less than three months)',
    'Permanent residence in the US/UK/EU',
    'None',
];

// Shared Package Visa eligibility modal. The trigger component owns the
// open/close state; form state lives here and resets each time it opens.
const EligibilityModal = ({ open, onClose }) => {
    const [nationality, setNationality] = useState('');
    const [residence, setResidence] = useState('');
    const [qualification, setQualification] = useState('');
    const [checked, setChecked] = useState(false);

    const isEligible = qualification !== 'None';

    useEffect(() => {
        if (open) {
            setChecked(false);
            setQualification('');
        }
    }, [open]);

    if (!open) return null;

    const handleCheck = (e) => {
        e.preventDefault();
        trackEvent('package_visa_eligibility_check', { nationality, residence, qualification });
        setChecked(true);
    };

    const whatsappHref = `https://wa.me/966556182021?text=${encodeURIComponent(
        `Hi Flyinco! I'm interested in the Saudi All-in-One Package (flights, hotels, visa, transfers & sightseeing). I'm a ${nationality} national residing in ${residence}. Qualification: ${qualification}.`
    )}`;

    return (
        <div
            className="fixed inset-0 z-[130] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-label="Check Package Visa eligibility"
                className="bg-white rounded-[2rem] w-full max-w-xl p-8 md:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    aria-label="Close"
                    className="absolute top-6 right-6 p-2 rounded-xl bg-gray-50 text-secondary hover:bg-gray-100 transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Users className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-xl md:text-2xl font-display font-black text-secondary mb-1">
                    Find your visa to travel to Saudi Arabia
                </h3>
                {!checked && (
                    <p className="text-sm text-gray-400 font-bold mb-8">What brings you to Saudi Arabia?</p>
                )}
                {checked && <div className="mb-6" />}

                {checked ? (
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${isEligible ? 'bg-green-50' : 'bg-primary/10'}`}>
                                {isEligible
                                    ? <CheckCircle className="w-5 h-5 text-green-500" />
                                    : <Users className="w-5 h-5 text-primary" />}
                            </span>
                            <h4 className="font-display font-black text-secondary text-lg">
                                {isEligible ? "You're eligible" : 'Let us check for you'}
                            </h4>
                        </div>
                        <p className="text-sm text-gray-500 font-medium leading-relaxed mb-7 pl-12">
                            {isEligible
                                ? `As a ${nationality} national residing in ${residence}, you qualify for the Saudi All-in-One Package with your visit visa included.`
                                : `Based on your answers you may still have visa options. Our consultants will review your case as a ${nationality} national residing in ${residence} and guide you to the right route.`}
                        </p>

                        <div className="grid grid-cols-5 gap-2 mb-8">
                            {INCLUSIONS.map(({ icon: Icon, label }) => (
                                <div key={label} className="flex flex-col items-center gap-2 py-3 rounded-2xl bg-gray-50">
                                    <Icon className="w-4 h-4 text-primary" />
                                    <span className="text-[8px] md:text-[9px] font-black uppercase tracking-wider text-gray-500">{label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="border-t border-gray-100 pt-6">
                            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-400 mb-4">
                                Contact our Visa Consultant
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <a
                                    href={whatsappHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => trackEvent('package_visa_apply_click', { nationality, residence })}
                                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.1em] hover:bg-[#128C7E] transition-colors"
                                >
                                    <FaWhatsapp className="w-4 h-4" /> WhatsApp Us
                                </a>
                                <a
                                    href={`mailto:visa@flyinco.com?subject=${encodeURIComponent('Saudi All-in-One Package Visa Enquiry')}&body=${encodeURIComponent(`Nationality: ${nationality}\nCountry of residence: ${residence}\nQualification: ${qualification}\n\nI'm interested in the Saudi All-in-One Package (flights, hotels, visa, transfers & sightseeing).`)}`}
                                    onClick={() => trackEvent('package_visa_email_click', { nationality, residence })}
                                    className="inline-flex items-center justify-center gap-2 bg-white text-secondary border border-gray-200 px-6 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.1em] hover:border-primary hover:text-primary transition-colors"
                                >
                                    <Mail className="w-4 h-4" /> visa@flyinco.com
                                </a>
                            </div>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleCheck} className="space-y-6">
                        <div>
                            <label htmlFor="pv-nationality" className="block text-sm font-black text-secondary mb-2">
                                Nationality <span className="text-red-500">*</span>
                            </label>
                            <select
                                id="pv-nationality"
                                required
                                value={nationality}
                                onChange={(e) => setNationality(e.target.value)}
                                className="w-full appearance-none bg-white border border-gray-200 rounded-2xl py-4 px-5 text-sm font-bold text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            >
                                <option value="" disabled>Select your nationality</option>
                                {ELIGIBLE_NATIONALITIES.map((c) => (
                                    <option key={c} value={c}>{c}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="pv-residence" className="block text-sm font-black text-secondary mb-2">
                                What&apos;s your country of residence? <span className="text-red-500">*</span>
                            </label>
                            <select
                                id="pv-residence"
                                required
                                value={residence}
                                onChange={(e) => setResidence(e.target.value)}
                                className="w-full appearance-none bg-white border border-gray-200 rounded-2xl py-4 px-5 text-sm font-bold text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            >
                                <option value="" disabled>Select your country of residence</option>
                                {RESIDENCE_COUNTRIES.map((c) => (
                                    <option key={c} value={c}>{c}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="pv-qualification" className="block text-sm font-black text-secondary mb-2">
                                Which of the following applies? <span className="text-red-500">*</span>
                            </label>
                            <select
                                id="pv-qualification"
                                required
                                value={qualification}
                                onChange={(e) => setQualification(e.target.value)}
                                className="w-full appearance-none bg-white border border-gray-200 rounded-2xl py-4 px-5 text-sm font-bold text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            >
                                <option value="" disabled>Select an option</option>
                                {QUALIFICATIONS.map((q) => (
                                    <option key={q} value={q}>{q}</option>
                                ))}
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="bg-primary text-white px-7 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.15em] hover:bg-primary/90 transition-all shadow-lg shadow-primary/30"
                        >
                            Show Eligible Visas
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default EligibilityModal;
