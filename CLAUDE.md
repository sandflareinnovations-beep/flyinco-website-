# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Flyinco is a marketing/booking website for a travel agency (packages + visa services), built as a single-page React app. It's a static, client-only site — there is no backend. Enquiries are sent via the visitor's own mail client (`mailto:` to `visa@flyinco.com`) or WhatsApp (`https://wa.me/966556182021`).

## Commands

- `npm run dev` — Vite dev server with HMR
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build
- `npm run lint` — ESLint over the repo

There are no tests.

## Stack

- React 18 + React Router v7 (`BrowserRouter`)
- Vite 5 (`vite.config.js`)
- Tailwind CSS 3 (`tailwind.config.js`, processed via `postcss.config.js`)
- `framer-motion` for animation, `lucide-react` / `react-icons` for icons, `swiper` for carousels

## Architecture

- `src/main.jsx` — entry; wraps `<App />` in `BrowserRouter` + `StrictMode`.
- `src/App.jsx` — defines all `<Routes>`, plus the persistent `Navbar`, `Footer`, a floating `WhatsAppButton`, and `ScrollToTop` (scrolls to top on route change). Add new pages by registering a route here.
- `src/pages/` — one component per route (HomePage, VisaPage, package category pages, ItineraryPage, CorporateTravelPage).
- `src/components/` — shared/section components; `src/components/visa/` holds visa-page sections.
- `src/data/packagesData.js` — single source of truth for all travel packages, exported as `packagesData` array.

### Package data model (important)

All package content lives in `src/data/packagesData.js`. Each object has: `id`, `slug`, `category`, `name`, `title`, `img`, `desc`, `duration`, `price`, `locations`, `highlights[]`, `itinerary[]`, and optionally `meetingPoint` / `included[]`.

- Category pages filter by `category` (e.g. `packagesData.filter(p => p.category === 'Saudi')`). Known categories include `Saudi`, `Honeymoon`, `Adventure`, `International`, `India`.
- `src/pages/ItineraryPage.jsx` (route `/package/:slug`) looks up a package by `slug`. `slug` must be unique and URL-safe.
- `PopularPackages.jsx` references packages by `id`.
- `itinerary[]` items use either a `day`/`stop` shape (multi-day tours) or a `time` shape (single-day timed tours) — match the existing entries in the same category.

To add a package: add an object to `packagesData.js` with a unique `id` and `slug`; it surfaces automatically on its category page and at `/package/<slug>`.

## Conventions

- Styling is Tailwind utility classes inline in JSX. Brand colors are defined in `tailwind.config.js`: `primary` (#6A2B86), `secondary`/`dark` (#1A0933). Fonts: `font-display` (Poppins), `font-body` (Inter). Prefer these tokens over hardcoded hex when they apply.
- Images are mostly remote Unsplash URLs embedded in `packagesData.js`. `update-images.cjs` is a one-off helper script for bulk-replacing image URLs; not part of the build.
- Contact actions are mailto/WhatsApp links — keep the email (`visa@flyinco.com`) and WhatsApp number consistent when adding new forms.
