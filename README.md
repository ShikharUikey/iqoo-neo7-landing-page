# iQOO Neo 7 — Cinematic Landing Page Experience

![iQOO Neo 7 Showcase](https://img.shields.io/badge/Status-Completed-success) ![Next.js](https://img.shields.io/badge/Next.js-14-black) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC) ![GSAP](https://img.shields.io/badge/GSAP-ScrollTrigger-88CE02)

A world-class, Apple-level product landing page built to showcase the **iQOO Neo 7** smartphone. This project demonstrates high-end creative development, immersive scroll-driven storytelling, and extreme frontend performance. 

Instead of a traditional e-commerce page, this project treats the product like a premium global launch event—where every scroll reveals a new layer of the smartphone’s engineering.

## ✨ Key Features & Technical Highlights

- **HTML5 Canvas Animation Engine**: A custom-built, highly optimized 163-frame image sequence engine that natively preloads assets and renders them to a full-screen sticky canvas.
- **Scroll-Driven Storytelling (Scrollytelling)**: Leverages **GSAP ScrollTrigger** synchronized with the user's scroll progress to smoothly scrub through the device frames.
- **Silky Smooth Scrolling**: Integrated with **Lenis** to provide a buttery-smooth, fluid scrolling experience across all browsers and devices, overriding native jank.
- **Glassmorphism & Luxury UI**: A bespoke design system built with **Tailwind CSS**, utilizing heavy backdrop blurs, semi-transparent borders, and deep dark-mode contrasts (`#050505`).
- **Intersection Observer Animations**: Staggered text reveals, custom counting animations (`easeOutExpo`), and fading UI elements that trigger exactly when they enter the viewport.
- **Next.js 14 App Router**: Fully leveraging the latest React architecture for optimized builds, automatic image handling, and lightning-fast load times.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (React, TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [GSAP (ScrollTrigger)](https://gsap.com/), [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/)
- **Font**: Inter & Outfit (Google Fonts)

## 🚀 Running Locally

First, clone the repository and install the dependencies:

```bash
git clone https://github.com/ShikharUikey/iqoo-neo7-landing-page.git
cd iqoo-neo7-landing-page
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to experience the site.

## 📱 Project Structure

- `src/components/ScrollCanvas.tsx`: The core logic handling image preloading and rendering frames to the HTML5 Canvas based on GSAP scroll progress.
- `src/components/ScrollOverlays.tsx`: The synchronized text sequences that overlay the sticky canvas animation.
- `src/providers/SmoothScrollProvider.tsx`: The Lenis smooth scroll loop linked directly to GSAP's ticker for perfectly synced animations.
- `src/components/ui/`: Reusable, highly-polished components like Glass cards, Gradient buttons, and CSS-animated particle fields.

## 💡 About The Developer

This project was built as a technical showcase to demonstrate advanced capabilities in creative frontend development, performance optimization, and cinematic web experiences. 

---
*Disclaimer: This is a fan-made/showcase project and is not officially affiliated with iQOO or Vivo.*
