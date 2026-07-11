import React from 'react';

// Reviews section wired for Google Reviews embedding. Renders nothing until
// NEXT_PUBLIC_GOOGLE_PLACE_ID is set; the embed widget/API call can then be
// dropped into the marked slot without touching the page layout.
const GoogleReviews = () => {
    const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;
    if (!placeId) return null;

    return (
        <section className="py-14 md:py-24 bg-grayLight" id="reviews">
            <div className="max-w-[1240px] mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary tracking-tight">What our travellers say</h2>
                    <p className="text-gray-400 font-bold mt-4 text-sm">Verified reviews from Google</p>
                </div>
                {/* Google Reviews embed slot for the configured Place ID */}
                <div data-google-place-id={placeId} className="flex justify-center">
                    <a
                        href={`https://search.google.com/local/reviews?placeid=${placeId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-all"
                    >
                        Read our Google Reviews
                    </a>
                </div>
            </div>
        </section>
    );
};

export default GoogleReviews;
