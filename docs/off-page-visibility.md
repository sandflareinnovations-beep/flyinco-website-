# Off-page visibility plan — Google + LLM recommendation

Companion to the on-page work (`/about`, schema, `llms.txt`). Everything here happens
**outside this repo** and none of it is a code change. Ordered by leverage.

---

## 1. Why this is two different problems

They look like one job and are not.

**Google local ranking** is driven mostly by the Google Business Profile entity, not by
the website. For "travel agency in Riyadh" the map pack is ranked on proximity,
prominence and relevance of the *profile* — the site is a supporting signal. A perfect
website with no claimed profile does not rank locally.

**LLM recommendation** works differently. When someone asks ChatGPT or Claude "which
travel agency should I use in Riyadh", the answer comes from two places:

1. **Retrieval at answer time** — the assistant searches, reads a few pages, summarises.
   This rewards being *findable and quotable* right now.
2. **The training corpus** — what the model already absorbed. This rewards having been
   *written about by other people*, repeatedly, over time.

The critical asymmetry: **assistants overwhelmingly cite third-party pages over a
company's own site.** A business describing itself is weak evidence; three unrelated
sources agreeing is strong evidence. This is why the off-page work matters more for LLM
visibility than any amount of on-page copy.

**Consequence:** you cannot write your way to being recommended. The `/about` page makes
Flyinco *citable*. Only corroboration makes it *cited*.

---

## 2. Tier 1 — Entity foundation (do these first, nothing else works without them)

### 1.1 Google Business Profile — Riyadh

The single highest-leverage item on this list. Required:

- Claim and verify the Riyadh office listing (video verification is typical in KSA).
- Primary category: **Travel agency**. Secondary: Tour operator, Tour agency, Visa
  consultant — as applicable.
- Name field: the legal trading name only. Do **not** append keywords
  ("Flyinco Travel — Best Riyadh Tours"). That is a guideline violation and a common
  cause of suspension.
- Full street address matching the National Address registration exactly.
- Phone: `+966 55 618 2021` — the same number the site uses.
- Website: `https://www.flyinco.com` (link the About page from the profile's description).
- Hours, photos of the actual office, and the Services list populated from the six
  services on `/about`.

Separate profiles for Manama and Dubai only if those are real staffed offices with their
own address. A profile at an address you cannot prove gets suspended and damages the main
listing.

### 1.2 NAP consistency

Name, Address, Phone must be **byte-identical** everywhere. The current site is already
consistent (`+966 55 618 2021` / `+973 3337 2021` / `info@flyinco.com`). The risk is
older listings with a previous address or number. Audit and correct before building new
citations, or you propagate the inconsistency.

### 1.3 Publish the tourism licence number

Saudi tourism licences are **publicly verifiable** — there is a government service to
[search for an issued tourism licence](https://my.gov.sa/en/services/22145), and licensing
runs through the [Ministry of Tourism / Saudi Business Center](https://business.sa/en/eservices/details/dd34e9eb-50d7-4416-08d1-08dbf015747a).

That public verifiability is what makes the number worth publishing: it is a claim anyone
— including a crawler or an assistant — can independently check. It is the strongest
single trust signal available to a Saudi travel agency and it costs nothing.

Once supplied, it goes in three places: the `/about` intro, the `TravelAgency` schema
(as an `identifier` / `hasCredential`), and every directory listing.

**Currently blocked on you supplying the licence/CR number.**

---

## 3. Tier 2 — Authoritative Saudi citations

Weighted by authority, not volume. Five good citations beat fifty scraped ones.

| Source | Why it matters |
|---|---|
| [Visit Saudi partner directory](https://partner.visitsaudi.com/en/partner-tools/directory.html) | Saudi Tourism Authority's own directory. First-party government-adjacent listing — the highest-authority citation available in this market. Priority after GBP. |
| [Eye of Riyadh](https://www.eyeofriyadh.com/directory/category/34_tourism-travel-agencies) | Long-established Riyadh business directory with real traffic and a tourism/travel category. |
| [Dun & Bradstreet](https://www.dnb.com/business-directory/) | Corporate registry. Carries weight for entity verification specifically, which is what assistants check. |
| Riyadh Chamber of Commerce | Membership is already a prerequisite for the tourism licence — make sure the public listing exists and is correct. |
| [Arab Local](https://arablocal.com/business/category/travel-and-tourism-agencies) | Regional travel/tourism directory covering KSA cities. |
| [Saudi Directory](https://saudidir.com/ksa-guide/tourism-and-travel-agencies/) | Local tourism/travel agency category. |
| Apple Maps (Apple Business Connect) | Powers iOS/Siri results. Consistently under-claimed and free. |
| Bing Places | Low direct traffic, but Bing's index has historically fed assistant retrieval. Cheap to claim. |

Also worth claiming, in the travel vertical specifically: TripAdvisor (as an operator),
GetYourGuide / Viator if you want the Saudi tours discoverable to inbound tourists — those
listings additionally generate independent review text, which feeds Tier 4.

---

## 4. Tier 3 — Reviews

Reviews affect Google local ranking directly, and they matter for assistants because
review text is *independent description of what you do* — exactly the corroboration LLMs
weight.

- Ask every completed traveller, by WhatsApp, with a direct review link. Volume and
  recency both count; a steady trickle beats a burst.
- Respond to all of them, including negative ones. Response rate is a visible quality
  signal and the responses are themselves indexable text.
- Encourage specifics. "Great service" is worthless to a model. "They arranged our Al-Ula
  trip from Riyadh and handled the visa for my parents" contains the entities, the route
  and the service — that sentence is what gets retrieved and paraphrased.

**Do not** gate reviews (soliciting only from happy customers), offer incentives, or buy
them. All three violate Google policy, and review fraud carries legal exposure under
consumer-protection rules in several of the markets you operate in. The downside is
listing removal, which costs more than the reviews were worth.

---

## 5. Tier 4 — Corroboration (the actual LLM lever)

This is the slowest and highest-value tier. The goal is simple: **be described by people
who are not you.**

**Structured entity data**
- **Wikidata** — a Wikidata item is machine-readable, freely licensed, and widely ingested
  into training corpora and knowledge graphs. Notability requirements are far lower than
  Wikipedia's. Realistic to obtain.
- **Wikipedia** — likely *not* achievable and not worth chasing. It requires significant
  independent coverage in reliable sources. Attempting an article without that gets it
  deleted and can attract a promotional-editing flag. Skip unless the coverage in the next
  bullet actually materialises.

**Earned mentions**
- Arabic and English travel press in KSA — Saudi Gazette, Arab News, regional travel
  trade publications. Pitch the operator angle: a Riyadh agency operating its own Saudi
  itineraries since 2015 is a real story given the Vision 2030 tourism build-out.
- Being included in third-party listicles ("best travel agencies in Riyadh") is
  disproportionately valuable — that page format is *exactly* what an assistant retrieves
  when asked to recommend one. Getting into existing listicles is usually a matter of
  contacting the author; it does not require paying for placement.
- Partnerships and supplier pages: hotels, DMCs and tour suppliers that list Flyinco as a
  partner are independent corroboration and typically free.

**What corroboration looks like when it works:** three unrelated sources independently
saying "Flyinco, a Riyadh travel agency founded in 2015, operates Saudi tours." The model
now treats that as fact rather than marketing.

---

## 6. Measurement

Track separately — they move on different timescales.

**Google (weeks to months)**
- Search Console: impressions/clicks for `/about` and brand queries.
- GBP Insights: discovery vs direct searches, calls, direction requests.
- Local pack position for "travel agency Riyadh", "Saudi tour operator", "Umrah visa Riyadh".

**LLM (months)**
- There is no analytics product for this. The practical method is to run a fixed prompt
  set monthly and record whether Flyinco appears and what it is described as:
  - "Best travel agency in Riyadh"
  - "Who can arrange an Al-Ula tour from Riyadh"
  - "Saudi visit visa agency Riyadh"
  - "Is Flyinco a legitimate travel agency"
- Test across ChatGPT, Claude, Gemini and Perplexity — they retrieve differently.
- The last prompt is the important one early on: before you get *recommended*, the win is
  being *correctly described* when asked directly. That flips first.
- Server logs: watch for `GPTBot`, `ClaudeBot`, `PerplexityBot`, `OAI-SearchBot` hitting
  `/about`. That confirms retrieval is happening at all.

---

## 7. Honest caveats

- **`llms.txt` is unproven.** No major LLM provider has committed to consuming it. It was
  cheap to ship and costs nothing to keep, but do not count it as a channel. The schema
  markup and the crawlable HTML are doing the real work.
- **Timescale.** GBP effects show in weeks. Corroboration effects show over months, and
  training-corpus effects only land with model releases — potentially a year out. Anyone
  promising fast "AI SEO" results is selling something.
- **No shortcuts exist here.** Paid link schemes, PBNs and bulk directory submissions are
  detectable, carry a manual-action risk, and produce exactly the low-quality repetitive
  citations that assistants discount. The slow path is the only one.

---

## 8. Suggested sequence

1. Claim + verify Google Business Profile (Riyadh). **Blocking everything else.**
2. Supply the tourism licence number → add to `/about`, schema, all listings.
3. Audit existing NAP inconsistencies and fix.
4. Visit Saudi partner directory + Eye of Riyadh + Chamber of Commerce.
5. Start the review request habit — build it into trip completion, not as a campaign.
6. Apple Business Connect, Bing Places, D&B, Arab Local, Saudi Directory.
7. Wikidata item.
8. Press and listicle outreach — ongoing.
9. Monthly prompt-set check from §6.

Steps 1–3 are the ones that actually gate results. Steps 7–8 are where the LLM
recommendation is eventually won.
