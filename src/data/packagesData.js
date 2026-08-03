// --- Riyadh City Tour: real on-location photos ---
import riyadhAlDiriyahDusk from '../assets/images/Al diriyah/WhatsApp Image 2026-06-23 at 5.30.29 PM.jpeg';
import riyadhAlDiriyahEvening from '../assets/images/Al diriyah/WhatsApp Image 2026-06-23 at 5.30.29 PM (1).jpeg';
import riyadhKingdomSkyBridge from '../assets/images/kingdom tower/WhatsApp Image 2026-06-23 at 5.30.30 PM (1).jpeg';
import riyadhNationalMuseum from '../assets/images/Souq al zal Museum/WhatsApp Image 2026-06-23 at 5.30.28 PM (1).jpeg';
import riyadhSouqAlZal from '../assets/images/Souq al zal Museum/WhatsApp Image 2026-06-23 at 5.30.28 PM.jpeg';
import riyadhCamelRide from '../assets/images/camel ride/WhatsApp Image 2026-06-23 at 5.30.29 PM (3).jpeg';
import riyadhEdgeOfTheWorld from '../assets/images/edge of the world/WhatsApp Image 2026-06-23 at 5.30.30 PM.jpeg';
import hariqahDam from '../assets/images/Hariqah Dam /WhatsApp Image 2026-06-24 at 2.11.18 PM.jpeg';
// Hosted locally rather than hotlinked: Wikimedia asks that upload.wikimedia.org
// not be used as a CDN for production traffic. The licence requires credit, so
// this package carries an `imageCredit` that the itinerary hero renders.
import trabzonUzungol from '../assets/images/trabzon/uzungol-lake-and-town.jpg';

export const packagesData = [
  // --- SAUDI ARABIA PACKAGES ---
  {
    id: 'saudi-riyadh-heritage',
    slug: 'riyadh-heritage-tour',
    category: 'Saudi',
    name: 'Riyadh City Tour',
    title: 'Riyadh City Tour: A Full Day of Heritage & Wonders',
    img: riyadhAlDiriyahDusk,
    desc: 'A complete one-day journey through the highlights of Riyadh and beyond.',
    duration: '1 Day Trip',
    price: '',
    locations: 'Riyadh',
    highlights: ['Al Diriyah UNESCO Site', 'National Museum', 'Kingdom Centre Sky Bridge', 'Souq Al Zal', 'Camel Ride', 'The Edge of the World'],
    itinerary: [
      { day: 1, stop: 1, title: 'Al Diriyah', detail: 'Begin the day at the birthplace of the Saudi state. Explore the historic mud-brick At-Turaif district and the lively Bujairi Terrace.', image: riyadhAlDiriyahEvening },
      { day: 1, stop: 2, title: 'Kingdom Centre Sky Bridge', detail: 'Ascend the iconic Kingdom Centre Tower and walk across the Sky Bridge for breathtaking panoramic views of the Riyadh skyline.', image: riyadhKingdomSkyBridge },
      { day: 1, stop: 3, title: 'National Museum of Saudi Arabia', detail: 'Discover the rich history of the Kingdom through interactive exhibits, ancient artefacts, and immersive galleries.', image: riyadhNationalMuseum },
      { day: 1, stop: 4, title: 'Souq Al Zal', detail: 'Wander through Riyadh\'s oldest traditional market, browsing carpets, antiques, handicrafts, and authentic Saudi souvenirs.', image: riyadhSouqAlZal },
      { day: 1, stop: 5, title: 'Camel Ride', detail: 'Experience an authentic desert tradition with a relaxing camel ride across the golden sands on the outskirts of the city.', image: riyadhCamelRide },
      { day: 1, stop: 6, title: 'The Edge of the World', detail: 'End the day at the dramatic Jebel Fihrayn cliffs, where the desert plateau drops sharply to reveal endless horizons at sunset.', image: riyadhEdgeOfTheWorld }
    ]
  },
  {
    id: 'saudi-hariqah-dam',
    slug: 'hariqah-dam-tour',
    category: 'Saudi',
    name: 'Hariqah Dam Tour',
    title: 'Hariqah Dam Tour: Cycling, Hiking & Relaxation',
    img: hariqahDam,
    desc: '5 hours of adventure and relaxation with cycling and hiking at the scenic Hariqah Dam.',
    duration: '5 Hours',
    price: '',
    locations: 'Hariqah Dam',
    meetingPoint: 'Flyinco, Al-Ulya Street',
    highlights: ['Cycling Session', 'Hiking Adventure', 'Scenic Dam Views', 'Breakfast & Refreshments'],
    included: ['Cycling equipment & safety helmets', 'Breakfast, water, and refreshments', 'Round-trip transport from meeting point', 'Professional guide & supervision'],
    itinerary: [
      { time: '04:10 PM', title: 'Meeting & Departure', detail: 'Gather at Flyinco (Al-Ulya Street) and depart towards the destination.', image: hariqahDam },
      { time: '04:50 PM', title: 'Arrival at Destination', detail: 'Arrive at Hariqah Dam after a 30-minute scenic drive.' },
      { time: '04:50 - 05:05 PM', title: 'Warm-up & Preparation', detail: '15 minutes of warm-up and gear preparation before the activities begin.' },
      { time: '05:05 - 05:45 PM', title: 'Cycling Session', detail: 'A guided 40-minute cycling session along the dam trails.' },
      { time: '05:45 - 06:00 PM', title: 'Short Break', detail: 'A short rest and hydration break.' },
      { time: '06:00 - 07:30 PM', title: 'Hiking Adventure', detail: '1.5 hours of hiking through the natural landscapes around the dam.' },
      { time: '07:30 - 08:00 PM', title: 'Breakfast & Relaxation', detail: 'Enjoy a relaxing breakfast with refreshments in the open air.' },
      { time: '08:00 - 08:30 PM', title: 'Free Tour & Sightseeing', detail: 'Free time to explore and take photos around the area.' },
      { time: '08:30 PM', title: 'Heading Back', detail: 'End of activities and departure back to the meeting point.' },
      { time: '09:10 PM', title: 'Arrival Back', detail: 'Arrive back at the initial meeting point at Flyinco, Al-Ulya Street.' }
    ]
  },
  {
    id: 'saudi-diriyah-trip',
    slug: 'diriyah-evening-trip',
    category: 'Saudi',
    name: 'Diriyah Trip',
    title: 'Diriyah Evening Trip: Heritage, Culture & Dinner',
    img: riyadhAlDiriyahDusk,
    desc: 'An immersive evening exploring the historic At-Turaif district, a clay workshop, shopping, and dinner.',
    duration: '5.5 Hours',
    price: '',
    locations: 'Diriyah & Riyadh',
    meetingPoint: 'Flyinco Main Office, Al-Ulya',
    highlights: ['At-Turaif Historical District', 'Traditional Clay Workshop', 'Al-Bujairi Overlook', 'Dinner & Shopping'],
    included: ['Round-trip bus transfer', 'Guided historical storytelling tour', 'Interactive clay workshop', 'Dinner at a designated restaurant'],
    itinerary: [
      { time: '04:20 - 05:00 PM', title: 'Departure', detail: 'Gathering at the main office (Al-Ulya) and transfer by bus to Diriyah.', image: riyadhAlDiriyahEvening },
      { time: '05:00 - 05:15 PM', title: 'Arrival', detail: 'Welcome and a brief overview of the program itinerary.' },
      { time: '05:15 - 06:15 PM', title: 'Al-Turaif Tour', detail: 'A historical storytelling tour, museum visit, and sunset viewing across the UNESCO district.' },
      { time: '06:15 - 06:45 PM', title: 'Clay Workshop', detail: 'A live, interactive experience in traditional Najdi building and carving techniques.' },
      { time: '06:45 - 07:15 PM', title: 'Al-Bujairi Overlook', detail: 'A short walk to explore the modern area before transferring to the bus.' },
      { time: '07:15 - 07:40 PM', title: 'Transfer to Riyadh Park', detail: 'Transfer from Diriyah to Riyadh Park with a cultural overview along the way.' },
      { time: '07:40 - 08:30 PM', title: 'Free Shopping Time', detail: 'Time at leisure to purchase souvenirs and local products at the mall.' },
      { time: '08:30 - 09:30 PM', title: 'Dinner', detail: 'Dinner at the designated restaurant.' },
      { time: '09:30 - 10:00 PM', title: 'Departure', detail: 'Check-out and arrival back at the main office (Al-Ulya) for the end of the program.' }
    ]
  },
  {
    id: 'saudi-al-ula',
    slug: 'al-ula-wonders',
    category: 'Saudi',
    name: 'Al-Ula',
    title: 'Wonders of Al-Ula: Hegra & Beyond',
    img: 'https://images.unsplash.com/photo-1629667051607-e412f1c493c0?auto=format&fit=crop&q=80&w=800',
    desc: 'Breathtaking landscapes and ancient civilizations in the heart of the desert.',
    duration: '2 Nights / 3 Days',
    price: '',
    locations: 'Al-Ula',
    highlights: ['Hegra (UNESCO)', 'Elephant Rock', 'Old Town AlUla', 'Maraya Concert Hall'],
    itinerary: [
      { day: 1, title: 'Arrival & Elephant Rock', detail: 'Arrive at AlUla Airport. Visit the iconic Elephant Rock (Jabal AlFil) at sunset.' },
      { day: 2, title: 'Hegra & Dadan', detail: 'Full day exploring the Nabataean tombs of Hegra and the ancient city of Dadan and Jabal Ikmah.' },
      { day: 3, title: 'Old Town & Departure', detail: 'Walk through the narrow streets of AlUla Old Town. Visit the Oasis Heritage Trail before departure.' }
    ]
  },
  {
    id: 'saudi-jeddah-red-sea',
    slug: 'jeddah-red-sea-escape',
    category: 'Saudi',
    name: 'Jeddah',
    title: 'Jeddah: Red Sea Escape & Al-Balat',
    img: 'https://images.unsplash.com/photo-1586715065342-98d1f6016fd1?auto=format&fit=crop&q=80&w=800',
    desc: 'A blend of historical Al-Balad and the modern Jeddah Corniche.',
    duration: '3 Nights / 4 Days',
    price: '',
    locations: 'Jeddah',
    highlights: ['Al-Balad Old City', 'King Fahd Fountain', 'New Corniche', 'Floating Mosque'],
    itinerary: [
      { day: 1, title: 'Arrival in Jeddah', detail: 'Transfer to your sea-view hotel. Evening stroll along the Jeddah Corniche.' },
      { day: 2, title: 'Al-Balad Heritage', detail: 'Guided tour of Al-Balad (Old Jeddah), a UNESCO World Heritage site. Visit the Naseef House.' },
      { day: 3, title: 'Red Sea Adventure', detail: 'Morning boat trip for snorkeling in the Red Sea. Afternoon visit to the Floating Mosque.' },
      { day: 4, title: 'Departure', detail: 'Leisurely breakfast and transfer to King Abdulaziz International Airport.' }
    ]
  },
  {
    id: 'saudi-farasan-islands',
    slug: 'farasan-islands-trip',
    category: 'Saudi',
    name: 'Farasan Islands',
    title: 'Trip to the Farasan Islands: Sunrise, Snorkeling & Heritage',
    img: 'https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?auto=format&fit=crop&q=80&w=800',
    desc: 'An early-morning Red Sea escape — sunrise over the mangroves, snorkeling crystal-clear bays, and the heritage of Al-Qassar village.',
    duration: '6 Hours',
    price: '',
    locations: 'Farasan Islands, Jazan',
    highlights: ['Sunrise Boat Ride', 'Al-Qandal Mangrove Forest', 'Snorkeling at Al-Ghadir Bay', 'Al-Qassar Heritage Village', 'Ottoman Castle', 'Traditional Farasani Breakfast'],
    itinerary: [
      { time: '04:00 - 05:00 AM', title: 'Set Sail Under the Stars', detail: 'Head out early on the boat. The perfect time to just chill, enjoy the breeze, and catch the stars while the sea is completely still.' },
      { time: '05:00 - 06:30 AM', title: 'Al-Qandal Forest & Sunrise', detail: 'Boat ride through Al-Qandal Forest. Catch an amazing sunrise over the mangroves and spot some cool migratory birds out and about.' },
      { time: '06:30 - 08:00 AM', title: 'Swimming & Snorkeling', detail: 'Swimming and snorkeling at Ras Al-Qarn or Al-Ghadir Bay. The water is super clear early on, making it great for checking out the coral reefs.', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800' },
      { time: '08:00 - 09:00 AM', title: 'Al-Qassar Heritage Village', detail: 'Walk around Al-Qassar Heritage Village and the old Ottoman Castle to see the traditional stone architecture.' },
      { time: '09:00 - 10:00 AM', title: 'Al-Rifai House & Breakfast', detail: 'Drop by the historic Al-Rifai House, then wrap up the morning with a traditional Farasani breakfast (local fresh fish and Maghsh).' }
    ]
  },
  {
    id: 'saudi-obhur-diving',
    slug: 'obhur-al-shamaliyah-diving',
    category: 'Saudi',
    name: 'Obhur Diving',
    title: 'Obhur Al Shamaliyah Diving Experience | Elite Abyss',
    img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800',
    desc: '5 hours of adventure and deep-sea exploration off North Obhur, Jeddah — guided reef diving with certified instructors, a sunset boat cruise, and refreshments.',
    duration: '5 Hours',
    price: '',
    locations: 'North Obhur, Jeddah',
    meetingPoint: 'Elite Abyss',
    highlights: ['Guided Reef Diving', 'Certified Dive Instructor', 'Coral Reef Exploration', 'Sunset Boat Cruise', 'Snacks & Refreshments'],
    included: ['Diving equipment, air tanks, and safety gear', 'Professional certified diving instructor', 'Snacks, water, and refreshments'],
    itinerary: [
      { time: '03:30 PM', title: 'Meeting & Departure', detail: 'Meet at the departure point (Elite Abyss) and head out.' },
      { time: '04:10 PM', title: 'Arrival at Dive Site', detail: 'Arrive at the diving site in North Obhur after a 40-minute drive.' },
      { time: '04:10 - 04:30 PM', title: 'Briefing & Gear Fitting', detail: 'Briefing, safety instructions, and gear fitting (20 mins).' },
      { time: '04:30 - 05:45 PM', title: 'Diving Session', detail: 'Diving session and exploring the coral reefs (1 hour 15 mins).', image: 'https://images.unsplash.com/photo-1530053969600-caed2596d242?auto=format&fit=crop&q=80&w=800' },
      { time: '05:45 - 06:15 PM', title: 'Sunset Break', detail: 'Exiting the water, changing, and a short break during sunset (30 mins).' },
      { time: '06:15 - 07:15 PM', title: 'Boat Cruise & Refreshments', detail: 'Boat cruise or relaxation session with snacks and refreshments (1 hour).' },
      { time: '07:15 - 07:45 PM', title: 'Beachside Free Tour', detail: 'Free tour and exploring the beachside area (30 mins).' },
      { time: '07:45 PM', title: 'Heading Back', detail: 'Wrapping up activities and heading back.' },
      { time: '08:30 PM', title: 'Arrival Back', detail: 'Arrive back at the initial meeting point (Elite Abyss).' }
    ]
  },

  // --- JEDDAH EXPERIENCES ---
  {
    id: 'saudi-jeddah-al-balad',
    slug: 'jeddah-al-balad-heritage-walk',
    category: 'Saudi',
    name: 'Al-Balad Heritage Walk',
    title: 'Historic Jeddah (Al-Balad) Walking Tour — UNESCO Old Town',
    img: 'https://images.unsplash.com/photo-1586715065342-98d1f6016fd1?auto=format&fit=crop&q=80&w=800',
    desc: 'A guided walking tour of Historic Jeddah, the UNESCO World Heritage old town — coral-stone houses, carved rawasheen balconies, Souq Al-Alawi and the Naseef House, ending with Hijazi coffee.',
    duration: '4 Hours',
    price: '',
    locations: 'Al-Balad, Historic Jeddah',
    meetingPoint: 'Bab Makkah gate, Al-Balad',
    highlights: ['UNESCO World Heritage Site', 'Naseef House', 'Souq Al-Alawi', 'Rawasheen Balconies', 'Al-Shafi Mosque', 'Hijazi Coffee Tasting'],
    included: ['English and Arabic speaking heritage guide', 'Entry to Naseef House', 'Hijazi coffee and dates', 'Bottled water'],
    itinerary: [
      { time: '04:00 PM', title: 'Meet at Bab Makkah', detail: 'Meet your guide at the old Bab Makkah gate for an introduction to the walled city and 1,400 years of Jeddah as the gateway to Makkah.' },
      { time: '04:30 PM', title: 'Souq Al-Alawi', detail: 'Walk the spice and textile lanes of Souq Al-Alawi, the oldest market in Jeddah, still trading incense, dates and Hijazi fabrics.' },
      { time: '05:15 PM', title: 'Naseef House', detail: 'Tour Bayt Naseef, the coral-stone merchant house where King Abdulaziz stayed in 1925, and climb its famous ramp staircase.', image: 'https://images.unsplash.com/photo-1586715065342-98d1f6016fd1?auto=format&fit=crop&q=80&w=800' },
      { time: '06:15 PM', title: 'Rawasheen at Golden Hour', detail: 'Photograph the carved teak rawasheen balconies of Al-Balad as the light drops — the best hour of the day for the old town.' },
      { time: '07:00 PM', title: 'Hijazi Coffee & Wrap-up', detail: 'Finish in a restored courtyard café with Hijazi coffee, dates and time to browse the surrounding shops.' }
    ]
  },
  {
    id: 'saudi-jeddah-corniche',
    slug: 'jeddah-corniche-fountain-evening',
    category: 'Saudi',
    name: 'Jeddah Corniche Evening',
    title: 'Jeddah Corniche & King Fahd Fountain Evening Tour',
    img: 'https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?auto=format&fit=crop&q=80&w=800',
    desc: 'An evening along the Red Sea waterfront — the Jeddah Corniche promenade, open-air sculpture museum, the Floating Mosque at sunset, and the King Fahd Fountain lit against the water.',
    duration: '4 Hours',
    price: '',
    locations: 'Jeddah Corniche, Jeddah',
    meetingPoint: 'Jeddah Waterfront, North Corniche',
    highlights: ['King Fahd Fountain', 'Al-Rahmah Floating Mosque', 'Jeddah Waterfront', 'Open-Air Sculpture Museum', 'Red Sea Sunset', 'Seafood Dinner Stop'],
    included: ['Private air-conditioned vehicle and driver', 'English speaking guide', 'Bottled water'],
    itinerary: [
      { time: '05:00 PM', title: 'Jeddah Waterfront', detail: 'Start on the renewed North Corniche promenade — beaches, play areas and the Red Sea on one side, the city skyline on the other.' },
      { time: '05:45 PM', title: 'Open-Air Sculpture Museum', detail: 'Drive the Corniche sculpture route past works by Henry Moore, Joan Miró and Victor Vasarely, installed along the seafront in the 1970s.' },
      { time: '06:30 PM', title: 'Al-Rahmah Floating Mosque', detail: 'Sunset at the white Al-Rahmah Mosque, built on stilts over the Red Sea. Time for photographs from the shoreline.', image: 'https://images.unsplash.com/photo-1586715065342-98d1f6016fd1?auto=format&fit=crop&q=80&w=800' },
      { time: '07:30 PM', title: 'King Fahd Fountain', detail: 'View the tallest fountain in the world, throwing seawater over 300 metres and floodlit after dark.' },
      { time: '08:15 PM', title: 'Seafood Stop', detail: 'Optional dinner stop at a Corniche seafood restaurant before the transfer back to your hotel.' }
    ]
  },
  {
    id: 'saudi-jeddah-city-tour',
    slug: 'jeddah-city-tour-full-day',
    category: 'Saudi',
    name: 'Jeddah City Tour',
    title: 'Jeddah Full-Day City Tour — Old Town, Corniche & Souqs',
    img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800',
    desc: 'A full day covering Jeddah end to end — Historic Al-Balad, the fish market, the Corniche, King Fahd Fountain and the modern malls, with a private guide and vehicle throughout.',
    duration: '8 Hours',
    price: '',
    locations: 'Jeddah',
    meetingPoint: 'Your Jeddah hotel',
    highlights: ['Al-Balad Old Town', 'Jeddah Fish Market', 'King Fahd Fountain', 'Floating Mosque', 'Corniche Drive', 'Hotel Pickup & Drop-off'],
    included: ['Private air-conditioned vehicle with driver', 'English speaking guide for the full day', 'Hotel pickup and drop-off in Jeddah', 'Bottled water'],
    itinerary: [
      { time: '09:00 AM', title: 'Hotel Pickup', detail: 'Collection from your Jeddah hotel and a briefing on the day ahead.' },
      { time: '09:45 AM', title: 'Historic Al-Balad', detail: 'Guided walk through the UNESCO-listed old town — Naseef House, Souq Al-Alawi and the coral-stone merchant quarter.' },
      { time: '12:00 PM', title: 'Jeddah Fish Market', detail: 'Visit the central fish market to see the Red Sea catch come in, with lunch at an adjoining grill if you would like it.' },
      { time: '02:00 PM', title: 'Corniche & Floating Mosque', detail: 'Drive the length of the Corniche, stopping at Al-Rahmah Floating Mosque and the sculpture route.', image: 'https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?auto=format&fit=crop&q=80&w=800' },
      { time: '04:00 PM', title: 'Modern Jeddah', detail: 'A stop in the modern city — Tahlia Street or Red Sea Mall — for shopping and coffee.' },
      { time: '05:00 PM', title: 'Return Transfer', detail: 'Drop-off back at your hotel, or continue to the Corniche for the fountain at night on request.' }
    ]
  },
  {
    id: 'saudi-jeddah-yacht-snorkel',
    slug: 'jeddah-red-sea-yacht-snorkelling',
    category: 'Saudi',
    name: 'Red Sea Yacht Day',
    title: 'Jeddah Red Sea Yacht Cruise & Snorkelling Day',
    img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800',
    desc: 'A private yacht day out of Obhur — swimming and snorkelling over Red Sea coral reefs, lunch on board, and the run back along the Jeddah coastline at sunset.',
    duration: '6 Hours',
    price: '',
    locations: 'Obhur Marina, Jeddah',
    meetingPoint: 'Obhur Marina, North Jeddah',
    highlights: ['Private Yacht Charter', 'Coral Reef Snorkelling', 'Lunch On Board', 'Swimming Platform', 'Sunset Return', 'Family Friendly'],
    included: ['Private yacht with captain and crew', 'Snorkelling masks, fins and life jackets', 'Lunch, soft drinks and water on board', 'Towels'],
    itinerary: [
      { time: '10:00 AM', title: 'Board at Obhur Marina', detail: 'Meet the crew at Obhur Marina, safety briefing and cast off into the Red Sea.' },
      { time: '11:00 AM', title: 'First Reef Stop', detail: 'Anchor over a shallow coral reef for snorkelling and swimming from the yacht platform.', image: 'https://images.unsplash.com/photo-1530053969600-caed2596d242?auto=format&fit=crop&q=80&w=800' },
      { time: '01:00 PM', title: 'Lunch On Board', detail: 'Lunch served on deck while anchored in a sheltered bay, with time to swim again afterwards.' },
      { time: '03:00 PM', title: 'Second Reef & Free Time', detail: 'Move to a second reef for snorkelling, or stay on board for sunbathing and fishing.' },
      { time: '04:00 PM', title: 'Coastal Cruise Back', detail: 'Cruise back along the Jeddah coastline as the light drops, arriving at Obhur Marina around sunset.' }
    ]
  },

  // --- INDIA PACKAGES ---
  {
    id: 'india-kerala-paradise',
    slug: 'kerala-backwaters-paradise',
    category: 'India',
    name: 'Kerala',
    title: 'God\'s Own Country: Kerala Backwaters Paradise',
    img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800',
    desc: 'Lush greenery, serene backwaters, and misty hill stations.',
    duration: '5 Nights / 6 Days',
    price: '',
    locations: 'Munnar, Alleppey & Kochi',
    highlights: ['Tea Gardens', 'Houseboat Stay', 'Chinese Fishing Nets', 'Kathakali Show'],
    itinerary: [
      { day: 1, title: 'Arrival in Kochi', detail: 'Arrival at Kochi Airport. Transfer to hotel. Evening sightseeing in Fort Kochi.' },
      { day: 2, title: 'Kochi to Munnar', detail: 'Scenic drive to Munnar. Visit Cheeyappara and Valara waterfalls on the way.' },
      { day: 3, title: 'Munnar Sightseeing', detail: 'Explore Mattupetty Dam, Echo Point, and the Tea Museum.' },
      { day: 4, title: 'Munnar to Alleppey', detail: 'Drive to Alleppey. Board a traditional Kettuvallam (houseboat) for an overnight cruise through the backwaters.' },
      { day: 5, title: 'Alleppey to Kochi', detail: 'Breakfast on the houseboat. Return to Kochi for shopping at Lulu Mall.' },
      { day: 6, title: 'Departure', detail: 'Transfer to Kochi Airport for your onward journey.' }
    ]
  },
  {
    id: 'india-rajasthan-royal',
    slug: 'royal-rajasthan-heritage',
    category: 'India',
    name: 'Rajasthan',
    title: 'Royal Rajasthan: Palaces & Forts',
    img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800',
    desc: 'Experience the grandeur of India\'s royal history in Jaipur and Udaipur.',
    duration: '6 Nights / 7 Days',
    price: '',
    locations: 'Jaipur, Jodhpur & Udaipur',
    highlights: ['Amber Fort', 'Mehrangarh Fort', 'City Palace Udaipur', 'Lake Pichola'],
    itinerary: [
      { day: 1, title: 'Arrival in Jaipur', detail: 'Welcome to the Pink City. Rest and evening visit to Chokhi Dhani.' },
      { day: 2, title: 'Jaipur Exploration', detail: 'Visit Amber Fort, Hawa Mahal, Jantar Mantar, and City Palace.' },
      { day: 3, title: 'Jaipur to Jodhpur', detail: 'Travel to the Blue City. Visit the magnificent Mehrangarh Fort.' },
      { day: 4, title: 'Jodhpur to Udaipur', detail: 'Drive to Udaipur, visiting Ranakpur Jain Temple en route.' },
      { day: 5, title: 'Udaipur - City of Lakes', detail: 'Explore City Palace, Saheliyon-ki-Bari, and enjoy a boat ride on Lake Pichola.' },
      { day: 6, title: 'Udaipur Leisure', detail: 'Day at leisure for local exploration and shopping.' },
      { day: 7, title: 'Departure', detail: 'Transfer to Udaipur Airport.' }
    ]
  },
  {
    id: 'india-andaman-island',
    slug: 'andaman-island-escape',
    category: 'India',
    name: 'Andaman',
    title: 'Andaman Bliss: Tropical Island Getaway',
    img: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&q=80&w=800',
    desc: 'Pristine beaches, crystal clear waters, and colonial history.',
    duration: '4 Nights / 5 Days',
    price: '',
    locations: 'Port Blair & Havelock',
    highlights: ['Cellular Jail', 'Radhanagar Beach', 'Scuba Diving', 'Elephant Beach'],
    itinerary: [
      { day: 1, title: 'Arrival in Port Blair', detail: 'Transfer to hotel. Evening Light and Sound show at Cellular Jail.' },
      { day: 2, title: 'Port Blair to Havelock', detail: 'Cruise to Havelock Island. Afternoon at Radhanagar Beach (Asia\'s best beach).' },
      { day: 3, title: 'Elephant Beach Adventure', detail: 'Boat ride to Elephant Beach for snorkeling and water sports.' },
      { day: 4, title: 'Havelock to Port Blair', detail: 'Cruise back to Port Blair. Visit Ross Island in the afternoon.' },
      { day: 5, title: 'Departure', detail: 'Transfer to airport for departure.' }
    ]
  },

  // --- SPECIALITY: HONEYMOON PACKAGES ---
  {
    id: 'honeymoon-maldives',
    slug: 'honeymoon-maldives-exclusive',
    category: 'Honeymoon',
    name: 'Maldives Honeymoon',
    title: 'Exclusive Maldives Honeymoon Experience',
    img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800',
    desc: 'Celebrate your love in the most romantic overwater villas on earth.',
    duration: '4 Nights / 5 Days',
    price: '',
    locations: 'Private Island Resort',
    highlights: ['Candlelit Beach Dinner', 'Overwater Villa', 'Couples Spa', 'Floating Breakfast'],
    itinerary: [
      { day: 1, title: 'Arrival & Welcome', detail: 'Luxury speedboat transfer to your resort. Check-in to your decorated villa.' },
      { day: 2, title: 'Couple Relaxation', detail: 'Side-by-side aromatherapy massage and lounging by the private pool.' },
      { day: 3, title: 'Romantic Adventure', detail: 'Private sunset cruise with champagne. Professional photoshoot on the beach.' },
      { day: 4, title: 'Leisure Day', detail: 'Enjoy water sports or simply relax on the pristine sands.' },
      { day: 5, title: 'Farewell', detail: 'Return transfer to Male after a romantic getaway.' }
    ]
  },
  {
    id: 'honeymoon-kerala',
    slug: 'honeymoon-kerala-serenity',
    category: 'Honeymoon',
    name: 'Kerala Honeymoon',
    title: 'Honeymoon in God\'s Own Country',
    img: 'https://images.unsplash.com/photo-1593181629936-11c609b8db9b?auto=format&fit=crop&q=80&w=800',
    desc: 'A perfect blend of misty mountains and serene backwaters.',
    duration: '5 Nights / 6 Days',
    price: '',
    locations: 'Munnar & Alleppey',
    highlights: ['Houseboat Stay', 'Private Plantation Tour', 'Elephant Safari', 'Ayurvedic Treatment'],
    itinerary: [
      { day: 1, title: 'Arrival in Kochi', detail: 'Transfer to the mist-covered hills of Munnar. Evening walk in tea gardens.' },
      { day: 2, title: 'Romantic Munnar', detail: 'Visit Eravikulam National Park and enjoy a private tea tasting session.' },
      { day: 3, title: 'Munnar to Thekkady', detail: 'Scenic drive to spiceland. Boat ride in Periyar Lake.' },
      { day: 4, title: 'Alleppey Backwaters', detail: 'Board a luxury private houseboat with personalized honeymoon decor.' },
      { day: 5, title: 'Beaches & Farewells', detail: 'Short stay in Cherai Beach before returning to Kochi.' }
    ]
  },

  // --- SPECIALITY: ADVENTURE PACKAGES ---
  {
    id: 'adventure-nepal',
    slug: 'adventure-nepal-everest',
    category: 'Adventure',
    name: 'Nepal Trek',
    title: 'Everest Base Camp Helicopter Tour',
    img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=800',
    desc: 'The ultimate adventure: See the world\'s highest peak up close.',
    duration: '4 Nights / 5 Days',
    price: '',
    locations: 'Kathmandu & Lukla',
    highlights: ['Himalayan Views', 'Helicopter Ride', 'Sherpa Culture', 'Buddhist Monasteries'],
    itinerary: [
      { day: 1, title: 'Arrival in Kathmandu', detail: 'Welcome to the city of temples. Gear briefing and preparation.' },
      { day: 2, title: 'To the Mountains', detail: 'Fly to Lukla. Short trek to Phakding to acclimate.' },
      { day: 3, title: 'High Altitude Adventure', detail: 'Helicopter flight to Kala Patthar for the best views of Mt. Everest.' },
      { day: 4, title: 'Cultural Immersion', detail: 'Explore monasteries and local Sherpa villages.' },
      { day: 5, title: 'Return', detail: 'Transfer to Kathmandu for homebound flight.' }
    ]
  },
  {
    id: 'adventure-south-africa-masai-mara',
    slug: 'south-africa-masai-mara-safari',
    category: 'Adventure',
    name: 'South Africa & Masai Mara',
    title: 'South Africa & Masai Mara: Big Five Safari Adventure',
    img: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&q=80&w=800',
    desc: 'Game drives in search of the Big Five, paired with vibrant cities, heritage citadels and coastal sunsets.',
    duration: '3 Nights / 4 Days',
    price: '',
    locations: 'South Africa & Masai Mara',
    highlights: ['Big Five Game Drive', 'Sunset Waterfront Cruise', 'National Museum', 'Historic Citadel'],
    itinerary: [
      { day: 1, title: 'Arrival & City Breeze', detail: 'Arrival and transfer to the hotel to check in and relax from the journey. Enjoy a scenic evening boat ride along the waterfront at sunset, then a night tour through the vibrant local markets with coffee at a traditional cafe.' },
      { day: 2, title: 'Safari & Ancient Wildlife', detail: 'Morning safari game drive through the Masai Mara nature reserve in search of the "Big Five". Explore the National Museum and its treasures of ancient African tribes and peoples, then take in panoramic sunset views over the rolling hills.' },
      { day: 3, title: 'Citadels & Historic Landmarks', detail: 'Tour the ancient fortresses and monuments that tell stories of resilience and heritage. Explore the old town\'s historic religious complexes, churches and mosques, and end with a relaxing evening stroll in the national park.' },
      { day: 4, title: 'Shopping & Heading Home', detail: 'A quick visit to the Civilization Museum to learn about ancient royal mummies and cultural heritage, a walking tour downtown for souvenirs and handmade crafts, then transfer to the international airport for your flight home.' }
    ]
  },

  // --- UMRAH PACKAGES ---
  {
    id: 'saudi-umrah-spiritual',
    slug: 'spiritual-umrah-journey',
    category: 'Saudi',
    name: 'Umrah Journey',
    title: 'Spiritual Umrah Package: Makkah & Madinah',
    img: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=800',
    desc: 'A complete spiritual experience with luxury stays near the Harams.',
    duration: '7 Nights / 8 Days',
    price: '',
    locations: 'Makkah & Madinah',
    highlights: ['5-Star Hotels', 'Private Transfers', 'Ziyarah Tours', '24/7 Support'],
    itinerary: [
      { day: 1, title: 'Arrival in Jeddah', detail: 'Transfer to Makkah in a private luxury vehicle.' },
      { day: 2, title: 'Umrah Rituals', detail: 'Guided assistance for performing Umrah and religious guidance.' },
      { day: 3, title: 'Makkah Ziyarah', detail: 'Visit Jabal al-Nour, Cave of Hira, and Mount Arafat.' },
      { day: 4, title: 'Leisure in Makkah', detail: 'Day for prayers and personal reflection at Masjid al-Haram.' },
      { day: 5, title: 'To Madinah', detail: 'Luxury high-speed train (Haramain) to the City of the Prophet.' },
      { day: 6, title: 'Madinah Ziyarah', detail: 'Visit Masjid Quba, Mount Uhud, and the Qiblatain Mosque.' },
      { day: 7, title: 'Personal Worship', detail: 'Spend time in the peaceful atmosphere of Masjid an-Nabawi.' },
      { day: 8, title: 'Departure', detail: 'Transfer to Madinah Airport for your flight home.' }
    ]
  },

  // --- INTERNATIONAL PACKAGES ---
  {
    id: 'intl-maldives-luxury',
    slug: 'maldives-overwater-luxury',
    category: 'International',
    name: 'Maldives',
    title: 'Maldives: Overwater Villa Experience',
    img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800',
    desc: 'The ultimate romantic getaway in an overwater paradise.',
    duration: '3 Nights / 4 Days',
    price: '',
    locations: 'Private Island Resort',
    highlights: ['Overwater Villa', 'Sunset Cruise', 'Snorkeling', 'Romantic Dinner'],
    itinerary: [
      { day: 1, title: 'Arrival & Welcome', detail: 'Luxury speedboat or seaplane transfer to your private island.' },
      { day: 2, title: 'Island Bliss', detail: 'Full day at leisure. Snorkel with turtles or enjoy the infinity pool.' },
      { day: 3, title: 'Sunset & Spa', detail: 'Morning yoga session. Evening sunset cruise with dolphin watching.' },
      { day: 4, title: 'Departure', detail: 'Leisurely breakfast before transfer back to Velana International Airport.' }
    ]
  },
  {
    id: 'intl-bali-spiritual',
    slug: 'bali-ubud-beach-retreat',
    category: 'International',
    name: 'Bali',
    title: 'Bali: Spiritual Ubud & Beach Bliss',
    img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800',
    desc: 'Explore the cultural heart of Ubud and the vibrant beaches of Seminyak.',
    duration: '5 Nights / 6 Days',
    price: '',
    locations: 'Ubud & Kuta/Seminyak',
    highlights: ['Tegalalang Rice Terrace', 'Monkey Forest', 'Uluwatu Temple', 'Mount Batur Sunrise'],
    itinerary: [
      { day: 1, title: 'Arrival in Bali', detail: 'Welcome to the Island of Gods. Transfer to your Ubud retreat.' },
      { day: 2, title: 'Cultural Ubud', detail: 'Visit the Tegalalang Rice Terrace and the sacred Monkey Forest.' },
      { day: 3, title: 'Mount Batur Trek', detail: 'Early morning hike for sunrise over Mount Batur. Refresh in natural hot springs.' },
      { day: 4, title: 'Ubud to Seminyak', detail: 'Drive to the coast. Visit Tanah Lot temple at sunset.' },
      { day: 5, title: 'Beach & Temples', detail: 'Explore the southern tip. Visit Uluwatu temple and watch the Kecak Fire Dance.' },
      { day: 6, title: 'Departure', detail: 'Transfer to Denpasar International Airport.' }
    ]
  },
  {
    id: 'intl-dubai-city',
    slug: 'dubai-city-desert',
    category: 'International',
    name: 'Dubai',
    title: 'Dubai: City Lights & Desert Dunes',
    img: 'https://images.unsplash.com/photo-1601994725833-c65037b22a94?auto=format&fit=crop&q=80&w=800',
    desc: 'The perfect mix of modern architecture and traditional desert adventure.',
    duration: '4 Nights / 5 Days',
    price: '',
    locations: 'Dubai City & Desert',
    highlights: ['Burj Khalifa', 'Desert Safari', 'Dubai Mall', 'Old Dubai Souks'],
    itinerary: [
      { day: 1, title: 'Arrival in Dubai', detail: 'Transfer to your city hotel. Free evening to explore the local area.' },
      { day: 2, title: 'Modern Dubai Tour', detail: 'Visit the Burj Khalifa (Level 124), Dubai Mall, and watch the fountain show.' },
      { day: 3, title: 'Old Dubai & Desert Safari', detail: 'Morning tour of Bastakiya and Gold Souk. Afternoon 4x4 Desert Safari with BBQ dinner.' },
      { day: 4, title: 'Leisure or Optional Tours', detail: 'Full day at leisure. Optional visit to Abu Dhabi or Atlantis Aquaventure.' },
      { day: 5, title: 'Departure', detail: 'Transfer to Dubai International Airport.' }
    ]
  },
  {
    id: 'intl-azerbaijan-baku',
    slug: 'azerbaijan-baku-escape',
    category: 'International',
    name: 'Azerbaijan',
    title: 'Azerbaijan: Land of Fire & Baku Lights',
    img: 'https://images.unsplash.com/photo-1689188930114-6a6824a21390?auto=format&fit=crop&q=80&w=800',
    desc: 'Uncover the futuristic skyline of Baku and ancient mountain villages.',
    duration: '4 Nights / 5 Days',
    price: '',
    locations: 'Baku & Gabala',
    highlights: ['Flame Towers', 'Old City Baku', 'Gabala Cable Car', 'Mud Volcanoes'],
    itinerary: [
      { day: 1, title: 'Arrival in Baku', detail: 'Transfer to hotel. Evening stroll along the Baku Boulevard.' },
      { day: 2, title: 'Baku City Tour', detail: 'Visit the Flame Towers, Highland Park, and the Maiden Tower in Old City.' },
      { day: 3, title: 'Gabala Excursion', detail: 'Day trip to Gabala. Enjoy the Tufandag cable car and Nohur Lake.' },
      { day: 4, title: 'Gobustan & Mud Volcanoes', detail: 'Explore ancient petroglyphs and the unique mud volcanoes.' },
      { day: 5, title: 'Departure', detail: 'Shopping at Nizami Street before departure.' }
    ]
  },
  {
    id: 'intl-malaysia-kuala-lumpur',
    slug: 'malaysia-kuala-lumpur-delight',
    category: 'International',
    name: 'Malaysia',
    title: 'Malaysia: Twin Towers, Batu Caves & Melaka Heritage',
    img: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&q=80&w=800',
    desc: 'Modern skyscrapers, rich cultural heritage, tropical nature and world-famous street food.',
    duration: '3 Nights / 4 Days',
    price: '',
    locations: 'Kuala Lumpur, Melaka & Putrajaya',
    highlights: ['Petronas Twin Towers', 'Batu Caves', 'KL Tower Skydeck', 'Melaka & Putrajaya'],
    itinerary: [
      { day: 1, title: 'Arrival & Metropolitan Breeze', detail: 'Arrival at Kuala Lumpur International Airport (KLIA) and transfer to the hotel. Evening stroll around KLCC Park for the Lake Symphony fountain light show beneath the Petronas Twin Towers, then a night tour of Jalan Alor food street and Bukit Bintang for Malaysian delicacies and traditional white coffee.' },
      { day: 2, title: 'Cultural Treasures & Skyline Views', detail: 'Morning tour of the magnificent Batu Caves, climbing the colourful 272 steps to the Hindu temples inside the limestone caverns. Explore the National Museum and the colonial architecture of Merdeka Square, then take in panoramic sunset views from the KL Tower observation deck.' },
      { day: 3, title: 'Historic Citadels & Lakeside Charm', detail: 'Tour the A Famosa fortress and Dutch heritage monuments of Melaka, explore historic religious complexes and the pink-domed Putrajaya Mosque, then unwind on an evening river cruise or lakeside promenade stroll at sunset.' },
      { day: 4, title: 'Shopping & Heading Home', detail: 'A refreshing visit to the Perdana Botanical Garden and Orchid Park, a walking tour through Central Market and downtown for batik souvenirs and handmade crafts, then transfer to KLIA for your flight home.' }
    ]
  },
  {
    id: 'intl-thailand-bangkok-phuket',
    slug: 'thailand-bangkok-phuket',
    category: 'International',
    name: 'Thailand',
    title: 'Thailand: Temples & Tropical Islands',
    img: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=800', // Thai Temple
    desc: 'From the bustling streets of Bangkok to the serene beaches of Phuket.',
    duration: '6 Nights / 7 Days',
    price: '',
    locations: 'Bangkok & Phuket',
    highlights: ['Grand Palace', 'Phi Phi Islands', 'Floating Market', 'Patong Beach'],
    itinerary: [
      { day: 1, title: 'Arrival in Bangkok', detail: 'Transfer to your city center hotel.' },
      { day: 2, title: 'Bangkok Culture', detail: 'Visit the Grand Palace and Wat Arun.' },
      { day: 3, title: 'Floating Market', detail: 'Morning trip to Damnoen Saduak Floating Market.' },
      { day: 4, title: 'Fly to Phuket', detail: 'Domestic flight to Phuket. Relax at Patong Beach.' },
      { day: 5, title: 'Phi Phi Islands', detail: 'Full day speedboat tour to Phi Phi Islands.' },
      { day: 6, title: 'Phuket Leisure', detail: 'Free day to explore or enjoy a Thai massage.' },
      { day: 7, title: 'Departure', detail: 'Transfer to Phuket airport for departure.' }
    ]
  },
  {
    id: 'intl-egypt-cairo',
    slug: 'cairo-pyramids-nile',
    category: 'International',
    name: 'Cairo',
    title: 'Cairo: Pyramids, the Nile & Old Islamic Quarters',
    img: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&q=80&w=800',
    desc: 'Four days across the Giza Pyramids, the Grand Egyptian Museum and the historic heart of old Cairo.',
    duration: '3 Nights / 4 Days',
    price: '',
    locations: 'Cairo & Giza',
    highlights: ['Giza Pyramids & The Sphinx', 'Grand Egyptian Museum', 'Nile Felucca Ride', 'Khan El-Khalili Bazaar'],
    itinerary: [
      { day: 1, title: 'Arrival & Nile Breeze', detail: 'Arrival and transfer to the hotel to check in and relax. Enjoy a scenic evening Felucca boat ride along the Nile Corniche, followed by a night tour of Khan El-Khalili through Al-Muizz Street with coffee at the historic El-Fishawy Cafe.' },
      { day: 2, title: 'Pyramids & Ancient History', detail: 'Visit the Giza Pyramids and The Sphinx, then explore the magnificent ancient Egyptian treasures at the Grand Egyptian Museum. End the day with panoramic sunset views over the city from Cairo Tower.' },
      { day: 3, title: 'Citadel & Old Cairo', detail: 'Tour Salah El-Din Citadel and the beautiful Muhammad Ali Mosque, then explore the historic Religious Complex and the Hanging Church in Old Cairo. Finish with a relaxing evening stroll through Al-Azhar Park.' },
      { day: 4, title: 'Shopping & Heading Home', detail: 'A quick visit to the National Museum of Egyptian Civilization to see the famous Royal Mummies Hall, then a walking tour through the Khedivial streets of Downtown for shopping and souvenirs before your airport transfer.' }
    ]
  },
  {
    id: 'intl-turkey-trabzon',
    slug: 'trabzon-uzungol-black-sea',
    category: 'International',
    name: 'Trabzon',
    title: 'Trabzon: Uzungöl, Sumela & the Green Black Sea',
    img: trabzonUzungol,
    imageCredit: {
        text: 'Uzungöl by İhsan Deniz Kılıçoğlu, CC BY-SA 3.0',
        href: 'https://commons.wikimedia.org/wiki/File:Uzung%C3%B6l_lake_and_town.jpg',
    },
    desc: 'Five days through misty highlands, alpine lakes, cliffside monasteries and Black Sea coastline.',
    duration: '4 Nights / 5 Days',
    price: '',
    locations: 'Trabzon, Uzungöl & Ayder',
    highlights: ['Uzungöl Lake', 'Sumela Monastery', 'Ayder Plateau', 'Boztepe Hill Sunset'],
    itinerary: [
      { day: 1, title: 'Arrival & Coastal Vibe', detail: 'Arrival at Trabzon Airport and transfer to the hotel. Stroll around the lively Trabzon Meydan city centre over local tea, then watch the sunset from Boztepe Hill with its panoramic view of the Black Sea.' },
      { day: 2, title: 'Magic of Uzungöl', detail: 'Drive to the famous Uzungöl lake hidden between lush green mountains. Capture iconic photos from the Gladiat viewpoint above the lake, then relax at Harekedi Cafe beside the rushing river streams and waterfalls.' },
      { day: 3, title: 'History & Nature\'s Marvels', detail: 'Visit the historic Sumela Monastery carved into the Black Sea cliffs, walk through the dense foggy pine forests of Altindere Valley, and taste the world-famous traditional rice pudding (Sütlaç) in Hamsiköy Village.' },
      { day: 4, title: 'High Altitude Clouds', detail: 'Day trip to the Ayder Plateau with its alpine meadows and wooden cabins. Optional zipline experience over the roaring Fırtına River, then relax by the beautiful Gelin Tülü bridal-veil waterfall.' },
      { day: 5, title: 'Culture & Departure', detail: 'Tour the white Atatürk Pavilion and its rose gardens, take a quick morning boat ride on serene Sera Lake, then head to the airport for your flight home.' }
    ]
  },
  {
    id: 'intl-jordan-amman-petra',
    slug: 'jordan-amman-heritage',
    category: 'International',
    name: 'Jordan',
    title: 'Jordan: Amman, Ancient Citadels & Desert Reserves',
    img: 'https://images.unsplash.com/photo-1548786811-dd6e453ccca7?auto=format&fit=crop&q=80&w=800',
    desc: 'Four days across Amman\'s modern boulevards, ancient fortresses and rare Arabian wildlife reserves.',
    duration: '3 Nights / 4 Days',
    price: '',
    locations: 'Amman, Jerash & Dana',
    highlights: ['Amman Citadel', 'Shaumari Wildlife Reserve', 'The Jordan Museum', 'Abdali Boulevard'],
    itinerary: [
      { day: 1, title: 'Arrival & City Breeze', detail: 'Arrival and transfer to the hotel in Amman to check in and relax. Enjoy a scenic evening stroll along Abdali Boulevard at sunset, then a night tour through the vibrant downtown markets with coffee at a traditional cafe.' },
      { day: 2, title: 'Wildlife & Ancient Treasures', detail: 'Morning game drive through the Shaumari or Dana nature reserve to spot the rare Arabian Oryx. Explore the historical and cultural treasures of ancient tribes at The Jordan Museum, then enjoy panoramic sunset views over the rolling hills.' },
      { day: 3, title: 'Citadels & Historic Landmarks', detail: 'Tour the ancient fortresses of the Amman Citadel or Ajloun Castle. Explore the historic religious complexes, churches and mosques of Jerash and the old downtown, then unwind with an evening stroll in the national park.' },
      { day: 4, title: 'Shopping & Heading Home', detail: 'A quick visit to the Civilization Museum for ancient artefacts and royal heritage, a walking tour through the lively streets for souvenirs and handmade crafts, then transfer to the international airport.' }
    ]
  },
  {
    id: 'intl-grand-european-tour',
    slug: 'grand-european-tour',
    category: 'International',
    name: 'Grand European Tour',
    title: 'Grand European Tour: France, Switzerland, Italy & Spain',
    img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800',
    desc: 'A comprehensive 14-day journey across four European nations, from Paris to Barcelona.',
    duration: '13 Nights / 14 Days',
    price: '',
    locations: 'Paris, Interlaken, Rome & Barcelona',
    highlights: ['Eiffel Tower & Versailles', 'Jungfraujoch "Top of Europe"', 'Venice, Rome & Vatican City', 'Sagrada Família & Park Güell'],
    included: ['A single Schengen visa covers all four countries', 'High-speed rail (TGV) between neighbouring countries', 'Rome to Barcelona flight (approx. 1.5 hours)', 'Arrival in Paris, departure from Barcelona'],
    itinerary: [
      { day: 1, title: 'Arrival in Paris & Seine River Sunset Cruise', detail: 'Arrive at Paris Charles de Gaulle Airport and transfer to the hotel. Walk the Champs-Élysées and capture photos at the Arc de Triomphe, then enjoy a sunset cruise along the Seine past illuminated landmarks including the Eiffel Tower.' },
      { day: 2, title: 'Parisian Icons & Palace of Versailles', detail: 'Ascend the Eiffel Tower for sweeping panoramic views, explore the Louvre Museum and the Mona Lisa, then tour the grand Palace of Versailles and its opulent gardens with fountain displays.' },
      { day: 3, title: 'Disneyland Paris or Montmartre & Shopping', detail: 'An optional full day at Disneyland Park and Walt Disney Studios, or visit the Sacré-Cœur Basilica and the Artists\' Square in Montmartre, followed by luxury shopping at Galeries Lafayette.' },
      { day: 4, title: 'High-Speed Train to Switzerland & Lake Geneva', detail: 'Board the TGV from Paris to Geneva. Walk the Lake Geneva promenade to see the Jet d\'Eau and the Flower Clock, then settle into your hotel in Interlaken between Lake Thun and Lake Brienz.' },
      { day: 5, title: 'Jungfraujoch "Top of Europe" & Grindelwald', detail: 'Ride the cogwheel railway to Europe\'s highest railway station at 3,454m amid permanent glaciers. Walk the Ice Palace tunnels and Sphinx Observatory deck, then visit the alpine village of Grindelwald.' },
      { day: 6, title: 'Charming Lucerne & Lauterbrunnen Waterfalls', detail: 'Tour Lucerne\'s wooden Chapel Bridge, Water Tower and Lion Monument, relax on a steamboat cruise across Lake Thun or Lake Brienz, and marvel at the Lauterbrunnen valley of 72 waterfalls including Staubbach Falls.' },
      { day: 7, title: 'Fashion Capital Milan & Scenic Lake Como', detail: 'Travel through the Swiss-Italian Alps into Milan. Tour Piazza del Duomo and shop at the Galleria Vittorio Emanuele II, then take an excursion to the lakeside town of Como.' },
      { day: 8, title: 'Floating Beauty of Venice', detail: 'Arrive in the city of canals and bridges. Visit St. Mark\'s Basilica, the Doge\'s Palace and the Rialto Bridge, then experience a traditional gondola ride through the narrow waterways.' },
      { day: 9, title: 'The Wonders of Ancient Rome', detail: 'Travel south to Italy\'s capital. Step inside the Colosseum and explore the Roman Forum, then toss a coin into the Trevi Fountain and enjoy the evening piazzas around the Spanish Steps.' },
      { day: 10, title: 'Vatican City & Flight to Spain', detail: 'Visit St. Peter\'s Basilica and the Vatican Museums, then transfer to Rome airport for a short flight to Barcelona. Check in and enjoy an evening stroll along La Rambla.' },
      { day: 11, title: 'Gaudí Masterpieces & Gothic Quarter', detail: 'Guided tour of Antoni Gaudí\'s Basílica de la Sagrada Família, a stroll through the colourful mosaic gardens of Park Güell, then wander the medieval streets and tapas bars of the Barri Gòtic.' },
      { day: 12, title: 'Montjuïc Hill, Cable Car & Flamenco Night', detail: 'Ride the Telefèric de Montjuïc for harbour vistas and visit Montjuïc Castle, explore the open-air architectural museum of Poble Espanyol, and attend an authentic Flamenco performance with dinner.' },
      { day: 13, title: 'Camp Nou Stadium & Maremagnum Marina', detail: 'Tour FC Barcelona\'s legendary stadium museum at Spotify Camp Nou, then enjoy seaside shopping and traditional Spanish paella at the Maremagnum waterfront before a final evening of souvenir shopping.' },
      { day: 14, title: 'Plaça de Catalunya & Departure', detail: 'A relaxed morning walk around Plaça de Catalunya for last-minute shopping, then transfer to Barcelona El Prat Airport for your return flight home.' }
    ]
  }
];
