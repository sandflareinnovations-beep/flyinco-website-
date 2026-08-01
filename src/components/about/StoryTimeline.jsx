import React from 'react';

// Only the founding is dated, because 2015 is the only year that has been
// confirmed. The branch openings are ordered rather than dated — an invented
// year on an About page is the kind of detail that gets a business contradicted
// by its own registration records, so the sequence is stated and nothing more.
const milestones = [
    {
        marker: '2015',
        title: 'Founded in Riyadh',
        body:
            'Flyinco Travel & Tourism was founded in Riyadh, Saudi Arabia in 2015, arranging holiday packages, tours and visa services for residents of the Kingdom.',
    },
    {
        marker: 'Then',
        title: 'Saudi tours built out',
        body:
            'The Riyadh office grew beyond ticketing into operated tours — Riyadh city and heritage days, Diriyah evenings, Al-Ula and Hegra itineraries, and Jeddah and Red Sea trips.',
    },
    {
        marker: 'Next',
        title: 'Bahrain desk opened',
        body:
            'A Manama desk followed, serving travellers across Bahrain and the wider Gulf on the same packages and visa services, with its own local phone line.',
    },
    {
        marker: 'Then',
        title: 'UAE and India desks',
        body:
            'Desks in the UAE and India extended the network, handling India holiday itineraries and group departures for travellers leaving Saudi Arabia and Bahrain.',
    },
    {
        marker: 'Today',
        title: 'Four countries, one operation',
        body:
            'Flyinco operates across Saudi Arabia, Bahrain, the UAE and India, covering Saudi tours, Umrah and visa processing, international holidays and managed corporate travel.',
    },
];

const StoryTimeline = () => {
    return (
        <section className="py-20 md:py-24 bg-white" aria-labelledby="about-story">
            <div className="max-w-[1240px] mx-auto px-6 md:px-12">
                <p className="flex items-center gap-3 text-primary font-display font-bold uppercase tracking-[0.24em] text-[10px] sm:text-xs mb-4">
                    <span className="h-px w-8 bg-primary/50" aria-hidden="true" />
                    Our story
                </p>
                <h2
                    id="about-story"
                    className="text-3xl md:text-5xl font-display font-black text-secondary tracking-tight mb-4 max-w-2xl"
                >
                    From one Riyadh office to a four-country network
                </h2>
                <p className="font-body text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mb-14">
                    Flyinco has operated out of Riyadh since 2015. The order below is how the
                    business actually grew.
                </p>

                {/* An ordered list, not decorative divs — the sequence is the
                    content here, and crawlers read <ol> as a sequence. */}
                <ol className="relative border-l-2 border-primary/15 ml-3 md:ml-4 flex flex-col gap-10">
                    {milestones.map((item) => (
                        <li key={item.title} className="relative pl-8 md:pl-12">
                            <span
                                className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-white"
                                aria-hidden="true"
                            />
                            <span className="block font-display font-black text-[11px] uppercase tracking-[0.18em] text-primary mb-2">
                                {item.marker}
                            </span>
                            <h3 className="font-display font-black text-xl md:text-2xl text-secondary tracking-tight mb-2">
                                {item.title}
                            </h3>
                            <p className="font-body text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl">
                                {item.body}
                            </p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default StoryTimeline;
