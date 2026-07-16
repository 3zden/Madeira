<div align="center">

# Madeira

**Travel is better with the right people.**

A landing site for a travel-social app — share trips, ask the community, match with
compatible travel buddies, and let AI plan the whole journey.

[![React](https://img.shields.io/badge/React-18-20232a?logo=react&logoColor=61dafb)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646cff?logo=vite&logoColor=white)](https://vitejs.dev)
[![CSS](https://img.shields.io/badge/CSS-vanilla-1572b6?logo=css3&logoColor=white)](#)
[![Status](https://img.shields.io/badge/status-landing%20page-1f8a5b)](#)

</div>

---

## Overview

Madeira is the marketing / landing page for a travel-social product — think Instagram
for travel, Reddit + Quora for travel questions, and a compatibility-scored way to find
people to travel with. This repository contains the **front-end landing site** only: a
single-page React app built with Vite and vanilla CSS.

The visual direction is a clean, editorial system — the Onest typeface, a monochrome
near-black palette with a single desaturated green accent, black pill buttons, light-grey
rounded panels, bento grids, and two pixel-sorted landscape images used as a recurring
motif throughout the page.

## Features

The page presents the product's core concept end to end:

- **Travel feed** — photos, videos, itineraries, hidden gems, reviews, and location tags.
- **Ask the community** — real answers from people who've been there.
- **Travel buddy matching** — a live compatibility score across interests, budget,
  travel style, age, and languages, with filters.
- **AI travel assistant** — an interactive demo that returns a full 7-day itinerary,
  budget, and stops.
- **Destination communities** — a community per destination and traveler type.
- **Saved itineraries** — publish day-by-day trips others can save and reuse.
- **Differentiators** — travel compatibility score, expense sharing, safety
  verification, and a local-experts marketplace.
- **Pricing** — free tier, `$8/mo` premium, and a partner / affiliate model.
- Responsive down to mobile, with hover/press states and keyboard focus styles.

## Tech stack

| Area        | Choice                                             |
| ----------- | -------------------------------------------------- |
| Framework   | React 18                                           |
| Build tool  | Vite 5 (`@vitejs/plugin-react`)                    |
| Styling     | Vanilla CSS (single design-system stylesheet)      |
| Typography  | [Onest](https://fonts.google.com/specimen/Onest) via Google Fonts |
| Icons       | Local inline-SVG set (`src/icons.jsx`) — no icon library |

## Project structure

```text
Madeira/
├─ public/
│  ├─ BG.png          # cool green mossy-mountain motif (hero, CTA band, footer wordmark)
│  └─ morocco.png     # warm Marrakech / Aït Benhaddou motif (Morocco-themed cards)
├─ src/
│  ├─ App.jsx         # all page sections + demo state (tabs, AI demo)
│  ├─ icons.jsx       # <Icon name="…"/> inline-SVG set
│  ├─ index.css       # design tokens + every component style
│  └─ main.jsx        # React entry
├─ index.html         # Vite HTML entry (loads the Onest font)
├─ vite.config.js
└─ package.json
```

## Getting started

**Prerequisites:** Node.js 18+ and npm.

```bash
# install dependencies
npm install

# start the dev server (http://localhost:5173)
npm run dev

# create a production build in dist/
npm run build

# preview the production build locally
npm run preview
```

## Available scripts

| Script            | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start Vite with hot-module reload.       |
| `npm run build`   | Bundle the site into `dist/`.            |
| `npm run preview` | Serve the built `dist/` for a final check. |

## Design notes

- **One stylesheet, tokens first.** `src/index.css` opens with CSS custom properties
  (`--ink`, `--accent`, `--panel`, …) that the rest of the file builds on.
- **Recurring imagery.** `BG.png` (cool) and `morocco.png` (warm) are reused rather than
  adding new assets — as section backgrounds, masked card fills, and the image-clipped
  footer wordmark.
- **Icons are local.** A small inline-SVG set (`24×24`, `1.75` stroke, `currentColor`) is
  used everywhere instead of pulling in an icon dependency, so icons inherit each
  surface's colour automatically.

## Notes & caveats

- This repo is the **landing page**, not the full product. The application (feed,
  matching engine, AI planner, communities) is not included here.
- Two runtime assets load from the network in the browser: **Google Fonts** (Onest) and
  **pravatar.cc** (testimonial avatars). Vendor them locally if you need a fully
  offline / self-contained build.

## Roadmap

Planned product build-out beyond this landing page:

- **Backend:** Java 21 · Spring Boot · Spring Security · PostgreSQL · Redis ·
  Elasticsearch (traveler & destination search).
- **AI:** LLM-backed trip planning with retrieval over a destination knowledge base.
- **Web app:** the authenticated product experience (feed, matching, communities).
- **Mobile:** React Native or Flutter client.
- **Infra:** Docker · GitHub Actions · cloud hosting.

## License

No license file yet — add one (e.g. [MIT](https://choosealicense.com/licenses/mit/))
before distributing.
