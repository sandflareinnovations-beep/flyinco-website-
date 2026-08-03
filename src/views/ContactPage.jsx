import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Breadcrumbs from '../components/Breadcrumbs';
import ContactForm from '../components/contact/ContactForm';
import { offices, headOffice, formatAddressLine } from '../data/offices';
import { whatsappLink } from '../lib/analytics';

// Server component — the NAP text is the reason this page exists, so all of it
// ships in the initial HTML rather than waiting on hydration.

const DAY_LABEL = {
    Monday: 'Mon', Tuesday: 'Tue', Wednesday: 'Wed', Thursday: 'Thu',
    Friday: 'Fri', Saturday: 'Sat', Sunday: 'Sun',
};

const formatHours = (slot) => {
    const days = slot.days.map((d) => DAY_LABEL[d] || d);
    const range = days.length > 1 ? `${days[0]}–${days[days.length - 1]}` : days[0];
    return `${range} ${slot.opens}–${slot.closes}`;
};

// Google Maps' keyless embed endpoint. Built from the head-office address so
// the pin follows whatever is in offices.js rather than being a frozen URL.
const mapQuery = headOffice.streetAddress || headOffice.geo
    ? encodeURIComponent(
        headOffice.geo
            ? `${headOffice.geo.latitude},${headOffice.geo.longitude}`
            : `${formatAddressLine(headOffice)}`
    )
    : null;

const OfficeCard = ({ office }) => {
    const address = formatAddressLine(office);
    return (
        <article className="bg-white rounded-[1.75rem] border border-gray-100 p-7 md:p-8 flex flex-col">
            <div className="flex items-baseline justify-between gap-3 mb-1">
                <h3 className="font-display font-black text-secondary text-2xl tracking-tight">
                    {office.city}
                </h3>
                {office.isHeadOffice && (
                    <span className="font-display text-primary font-bold uppercase tracking-[0.18em] text-[10px]">
                        Head office
                    </span>
                )}
            </div>
            <p className="font-body font-bold text-secondary/50 text-xs uppercase tracking-[0.14em] mb-5">
                {office.country}
            </p>

            <address className="not-italic flex flex-col gap-3.5 text-sm text-gray-600 font-body">
                {address && (
                    <span className="flex gap-3">
                        <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{address}</span>
                    </span>
                )}
                {office.tel && (
                    <a href={`tel:${office.tel}`} className="flex gap-3 text-secondary font-bold hover:text-primary transition-colors">
                        <Phone className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                        {office.telDisplay}
                    </a>
                )}
                {office.email && (
                    <a href={`mailto:${office.email}`} className="flex gap-3 text-secondary font-bold hover:text-primary transition-colors break-all">
                        <Mail className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                        {office.email}
                    </a>
                )}
                {office.openingHours?.length > 0 && (
                    <span className="flex gap-3">
                        <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{office.openingHours.map(formatHours).join(' · ')}</span>
                    </span>
                )}
            </address>

            {office.whatsapp && (
                <a
                    href={`https://wa.me/${office.whatsapp}?text=${encodeURIComponent(`Hi Flyinco! I'd like to speak to your ${office.city} desk.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 bg-primary text-white rounded-full px-4 py-2.5 font-display font-black text-[10px] uppercase tracking-[0.14em] hover:bg-secondary transition-colors self-start"
                >
                    <FaWhatsapp className="w-3.5 h-3.5" aria-hidden="true" />
                    WhatsApp {office.city}
                </a>
            )}
        </article>
    );
};

const ContactPage = ({ breadcrumbs }) => {
    const riyadhAddress = formatAddressLine(headOffice);

    return (
        <main>
            <section className="bg-secondary pt-36 md:pt-44 pb-16 md:pb-20">
                <div className="max-w-[1240px] mx-auto px-6 md:px-12">
                    <Breadcrumbs items={breadcrumbs} tone="dark" align="left" className="mb-8" />
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white leading-[1.02] tracking-tight mb-8 max-w-4xl">
                        Contact Flyinco Travel &amp; Tourism — Riyadh, Saudi Arabia
                    </h1>
                    <p className="font-body text-base sm:text-lg text-white/85 leading-relaxed max-w-3xl mb-10">
                        Flyinco Travel &amp; Tourism is a travel agency headquartered in {headOffice.city},{' '}
                        {headOffice.country}, with branch desks in Manama, Dubai and Mumbai. Reach the
                        Riyadh head office on{' '}
                        <a href={`tel:${headOffice.tel}`} className="text-white font-bold underline decoration-white/30 underline-offset-4 hover:decoration-white">
                            {headOffice.telDisplay}
                        </a>{' '}
                        or email{' '}
                        <a href={`mailto:${headOffice.email}`} className="text-white font-bold underline decoration-white/30 underline-offset-4 hover:decoration-white">
                            {headOffice.email}
                        </a>.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        <a
                            href={whatsappLink('contacting the Flyinco Riyadh office')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary text-white rounded-full px-7 py-4 font-display font-black text-xs uppercase tracking-[0.15em] inline-flex items-center gap-2.5 hover:bg-white hover:text-secondary transition-colors shadow-lg shadow-primary/25"
                        >
                            <FaWhatsapp className="w-4 h-4" aria-hidden="true" /> WhatsApp us
                        </a>
                        <a
                            href={`tel:${headOffice.tel}`}
                            className="rounded-full border border-white/30 bg-white/10 px-7 py-4 font-display font-black text-xs uppercase tracking-[0.15em] text-white inline-flex items-center gap-2.5 hover:bg-white hover:text-secondary transition-colors"
                        >
                            <Phone className="w-4 h-4" aria-hidden="true" /> Call {headOffice.telDisplay}
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-20 bg-white" aria-labelledby="offices-heading">
                <div className="max-w-[1240px] mx-auto px-6 md:px-12">
                    <h2 id="offices-heading" className="text-3xl md:text-4xl font-display font-black text-secondary mb-10">
                        Our offices
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
                        {offices.map((office) => <OfficeCard key={office.id} office={office} />)}
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-20 bg-gray-50" aria-labelledby="reach-us-heading">
                <div className="max-w-[1240px] mx-auto px-6 md:px-12">
                    <h2 id="reach-us-heading" className="sr-only">Send an enquiry or find us on the map</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        <ContactForm />

                        <div className="flex flex-col gap-6">
                            {mapQuery ? (
                                <div className="rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm bg-white">
                                    <iframe
                                        title={`Map of the Flyinco Travel & Tourism office in ${headOffice.city}`}
                                        src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="w-full h-[420px] border-0"
                                    />
                                </div>
                            ) : (
                                // No map is rendered while the head-office address is unset: a
                                // Google embed with an incomplete query drops a pin on the
                                // centre of Riyadh, which is a wrong location rather than a
                                // missing one. See the TODOs in src/data/offices.js.
                                <div className="rounded-[2rem] border border-dashed border-gray-200 bg-white p-8 text-center">
                                    <MapPin className="w-6 h-6 text-primary mx-auto mb-3" aria-hidden="true" />
                                    <p className="font-display font-black text-secondary text-sm mb-2">
                                        Visiting the Riyadh office?
                                    </p>
                                    <p className="text-gray-500 font-body text-sm leading-relaxed">
                                        Call{' '}
                                        <a href={`tel:${headOffice.tel}`} className="text-primary font-bold hover:underline">
                                            {headOffice.telDisplay}
                                        </a>{' '}
                                        and the team will share directions and arrange parking.
                                    </p>
                                </div>
                            )}

                            {riyadhAddress && (
                                <p className="text-gray-500 font-body text-sm leading-relaxed">
                                    <strong className="text-secondary">Flyinco Travel &amp; Tourism</strong>
                                    <br />
                                    {riyadhAddress}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ContactPage;
