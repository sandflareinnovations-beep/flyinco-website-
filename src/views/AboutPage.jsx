import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import StoryTimeline from '../components/about/StoryTimeline';
import NetworkGrid from '../components/about/NetworkGrid';
import WhatWeDo from '../components/about/WhatWeDo';
import AboutFaq from '../components/about/AboutFaq';
import { whatsappLink } from '../lib/analytics';

// Server component by design — no hooks, no framer-motion, no carousel. Every
// word on this page ships in the initial HTML, which is what Googlebot and the
// assistant crawlers (GPTBot, ClaudeBot, PerplexityBot) actually read.

const AboutPage = ({ breadcrumbs }) => {
    return (
        <main>
            {/* Answer-first intro. The opening paragraph is written as one
                complete, quotable definition — who, where, since when, doing
                what — because that is the sentence an assistant lifts when
                someone asks it about this company. Nothing above it but the h1. */}
            <section className="bg-secondary pt-36 md:pt-44 pb-20 md:pb-24" aria-labelledby="about-intro">
                <div className="max-w-[1240px] mx-auto px-6 md:px-12">
                    <Breadcrumbs items={breadcrumbs} tone="dark" align="left" className="mb-8" />
                    <p className="flex items-center gap-3 text-white/70 font-display font-bold uppercase tracking-[0.28em] text-[10px] sm:text-xs mb-6">
                        <span className="h-px w-8 bg-white/40" aria-hidden="true" />
                        About Flyinco
                    </p>
                    <h1
                        id="about-intro"
                        className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white leading-[1.02] tracking-tight mb-8 max-w-3xl"
                    >
                        A travel agency in Riyadh, operating since 2015
                    </h1>
                    <p className="font-body text-base sm:text-lg lg:text-xl text-white/85 leading-relaxed max-w-3xl mb-6">
                        Flyinco Travel &amp; Tourism is a travel agency founded in Riyadh, Saudi
                        Arabia in 2015. It arranges holiday packages, guided tours across Saudi
                        Arabia, Umrah travel, visit and tourist visa processing, and corporate
                        travel management, with desks in Bahrain, the United Arab Emirates and
                        India.
                    </p>
                    <p className="font-body text-sm sm:text-base text-white/70 leading-relaxed max-w-3xl mb-10">
                        Saudi tours are operated in-house from the Riyadh office rather than resold,
                        which is why the itineraries name specific sites — Diriyah, Hegra, Al-Balad,
                        Obhur — instead of generic city breaks.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        <a
                            href={whatsappLink('planning a trip with Flyinco')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary text-white rounded-full px-7 py-4 font-display font-black text-xs uppercase tracking-[0.15em] inline-flex items-center gap-2.5 hover:bg-white hover:text-secondary transition-colors shadow-lg shadow-primary/25"
                        >
                            Talk to us <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </a>
                        <Link
                            href="/saudi-packages"
                            className="rounded-full border border-white/30 bg-white/10 px-7 py-4 font-display font-black text-xs uppercase tracking-[0.15em] text-white inline-flex items-center hover:bg-white hover:text-secondary transition-colors"
                        >
                            See Saudi tours
                        </Link>
                    </div>
                </div>
            </section>

            <StoryTimeline />
            <NetworkGrid />
            <WhatWeDo />
            <AboutFaq />
        </main>
    );
};

export default AboutPage;
