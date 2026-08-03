'use client';

import React, { useState } from 'react';
import { Send, User, Mail, Phone, MessageSquare } from 'lucide-react';
import CountryCodeSelect from '../CountryCodeSelect';
import { DEFAULT_COUNTRY_CODE } from '../../data/countryCodes';
import { trackEvent } from '../../lib/analytics';

// Matches the site's existing enquiry pattern: there is no backend, so the
// submission opens the visitor's own mail client addressed to visa@flyinco.com.
const SERVICES = [
    'Holiday Package',
    'Visa',
    'Umrah',
    'Corporate Travel',
    'Chauffeur',
];

const inputClass =
    'w-full bg-white border border-gray-100 rounded-2xl py-3.5 pl-11 pr-4 text-sm font-medium text-secondary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all';

const ContactForm = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        countryCode: DEFAULT_COUNTRY_CODE,
        phone: '',
        service: SERVICES[0],
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const subject = `Contact enquiry: ${form.service}`;
        const body = [
            `Service interest: ${form.service}`,
            `Name: ${form.name}`,
            `Email: ${form.email}`,
            `Phone: ${form.countryCode} ${form.phone}`,
            '',
            'Message:',
            form.message,
        ].join('\n');

        trackEvent('contact_form_submit', { service: form.service });
        window.location.href = `mailto:visa@flyinco.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setSubmitted(true);
    };

    return (
        <div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-10 border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-display font-black text-secondary mb-2">
                Send us an enquiry
            </h2>
            <p className="text-gray-500 font-body text-sm mb-8">
                Tell us what you are planning and the Riyadh team will come back with a written quote.
            </p>

            {submitted ? (
                <p role="status" className="text-secondary font-body text-sm leading-relaxed bg-white border border-gray-100 rounded-2xl p-6">
                    Thanks — your mail client should have opened with the enquiry ready to send. If it
                    did not, email us directly at{' '}
                    <a href="mailto:visa@flyinco.com" className="text-primary font-bold hover:underline">visa@flyinco.com</a>.
                </p>
            ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="relative">
                        <User className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" aria-hidden="true" />
                        <label htmlFor="contact-name" className="sr-only">Full name</label>
                        <input
                            id="contact-name" name="name" type="text" required
                            value={form.name} onChange={handleChange}
                            placeholder="Full name" className={inputClass}
                        />
                    </div>

                    <div className="relative">
                        <Mail className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" aria-hidden="true" />
                        <label htmlFor="contact-email" className="sr-only">Email address</label>
                        <input
                            id="contact-email" name="email" type="email" required
                            value={form.email} onChange={handleChange}
                            placeholder="Email address" className={inputClass}
                        />
                    </div>

                    <div className="flex gap-3">
                        <div className="shrink-0 w-28">
                            <CountryCodeSelect
                                value={form.countryCode}
                                onChange={handleChange}
                                className="w-full appearance-none bg-white border border-gray-100 rounded-2xl py-3.5 pl-3 pr-6 text-sm font-bold text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            />
                        </div>
                        <div className="relative flex-1">
                            <Phone className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" aria-hidden="true" />
                            <label htmlFor="contact-phone" className="sr-only">Phone number</label>
                            <input
                                id="contact-phone" name="phone" type="tel" required
                                value={form.phone} onChange={handleChange}
                                placeholder="Phone number" className={inputClass}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="contact-service" className="block text-xs font-display font-black uppercase tracking-[0.14em] text-secondary/60 mb-2">
                            Service interest
                        </label>
                        <select
                            id="contact-service" name="service"
                            value={form.service} onChange={handleChange}
                            className="w-full appearance-none bg-white border border-gray-100 rounded-2xl py-3.5 px-4 text-sm font-bold text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        >
                            {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                    </div>

                    <div className="relative">
                        <MessageSquare className="w-4 h-4 text-gray-400 absolute left-4 top-4" aria-hidden="true" />
                        <label htmlFor="contact-message" className="sr-only">Message</label>
                        <textarea
                            id="contact-message" name="message" rows={5} required
                            value={form.message} onChange={handleChange}
                            placeholder="Travel dates, group size, and what you would like to arrange"
                            className={`${inputClass} resize-y`}
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-primary text-white rounded-2xl py-4 font-display font-black text-xs uppercase tracking-[0.15em] inline-flex items-center justify-center gap-2.5 hover:bg-secondary transition-colors shadow-lg shadow-primary/20"
                    >
                        Send enquiry <Send className="w-4 h-4" aria-hidden="true" />
                    </button>
                </form>
            )}
        </div>
    );
};

export default ContactForm;
