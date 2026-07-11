# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Flyinco is a marketing/booking website for a travel agency (packages + visa services), built with Next.js (App Router). All pages are statically generated (SSG) so full content is present in the initial HTML — there is no backend. Enquiries are sent via the visitor's own mail client (`mailto:` to `visa@flyinco.com`) or WhatsApp (`https://wa.me/966556182021`).

## Commands

- `npm run dev` — Next.js dev server
- `npm run build` — production build (SSG) to `.next/`
- `npm run start` — serve the production build
- `npm run lint` — ESLint over the repo

There are no tests.

## Stack

- React 18 + Next.js 15 App Router (`next.config.mjs`)
- Tailwind CSS 3 (`tailwind.config.js`, processed via `postcss.config.js`)
- `framer-motion` for animation, `lucide-react` / `react-icons` for icons, `swiper` for carousels

## Architecture

- `app/` — Next.js App Router routes. `app/layout.jsx` holds the persistent `Navbar`, `Footer`, floating `WhatsAppButton`, fonts, and metadata. Each `app/<route>/page.jsx` is a thin server component that renders a view from `src/views/` and exports route metadata. Add new pages by adding an `app/<route>/page.jsx`.
- `src/views/` — one component per route (HomePage, VisaPage, package category pages, ItineraryPage, CorporateTravelPage). Interactive views/components are marked `"use client"`; keep new sections as server components unless they need hooks, framer-motion/swiper, or event handlers.
- Do NOT create a `pages/` or `src/pages/` directory — Next.js would treat it as a Pages Router root.
- `src/components/` — shared/section components; `src/components/visa/` holds visa-page sections.
- `src/data/packagesData.js` — single source of truth for all travel packages, exported as `packagesData` array.

### Package data model (important)

All package content lives in `src/data/packagesData.js`. Each object has: `id`, `slug`, `category`, `name`, `title`, `img`, `desc`, `duration`, `price`, `locations`, `highlights[]`, `itinerary[]`, and optionally `meetingPoint` / `included[]`.

- Category pages filter by `category` (e.g. `packagesData.filter(p => p.category === 'Saudi')`). Known categories include `Saudi`, `Honeymoon`, `Adventure`, `International`, `India`.
- `app/package/[slug]/page.jsx` (route `/package/<slug>`) is SSG via `generateStaticParams` and renders `src/views/ItineraryPage.jsx`. `slug` must be unique and URL-safe.
- `PopularPackages.jsx` references packages by `id`.
- `itinerary[]` items use either a `day`/`stop` shape (multi-day tours) or a `time` shape (single-day timed tours) — match the existing entries in the same category.

To add a package: add an object to `packagesData.js` with a unique `id` and `slug`; it surfaces automatically on its category page and at `/package/<slug>`.

## Conventions

- Styling is Tailwind utility classes inline in JSX. Brand colors are defined in `tailwind.config.js`: `primary` (#6A2B86), `secondary`/`dark` (#1A0933). Fonts: `font-display` (Poppins), `font-body` (Inter). Prefer these tokens over hardcoded hex when they apply.
- Images are mostly remote Unsplash URLs embedded in `packagesData.js`. `update-images.cjs` is a one-off helper script for bulk-replacing image URLs; not part of the build.
- Contact actions are mailto/WhatsApp links — keep the email (`visa@flyinco.com`) and WhatsApp number consistent when adding new forms.
