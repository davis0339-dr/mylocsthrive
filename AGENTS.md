# My Locs Thrive Project Guide

## Overview

My Locs Thrive is a single-page editorial marketing site for Dr Lisa's loc education brand. It introduces her story, explains the resources she is creating, offers an interactive readiness self-check, and collects newsletter signups through Netlify Forms.

## Architecture

- **Framework:** TanStack Start with React 19 and file-based TanStack Router routes
- **Deployment:** Netlify via the TanStack Start Vite plugin
- **Styling:** A custom responsive design system in `src/styles.css`, with Tailwind available but not required for page styling
- **Icons:** `lucide-react`
- **Forms:** Netlify Forms with a React AJAX submission and a matching static registration form

## Key Directories

- `src/routes/__root.tsx` defines document metadata, global styles, and the root HTML shell.
- `src/routes/index.tsx` contains the complete landing page, interactive quiz, mobile navigation, and newsletter form behavior.
- `src/styles.css` contains design tokens, layout, motion, responsive rules, and accessible interaction states.
- `public/images/` contains the supplied brand photography and loc journey story images.
- `public/newsletter-form.html` is the hidden static form Netlify scans during deployment.
- `public/favicon.svg` is the custom crown favicon.

## Coding Conventions

- Use TypeScript and functional React components.
- Keep page copy and repeated content in small data arrays when it improves readability.
- Use semantic HTML, descriptive alt text, visible focus states, and reduced-motion support.
- Use CSS variables from `src/styles.css` instead of introducing one-off colors.
- Prefer CSS Grid for major layouts and transform/opacity for animation.
- Keep the site dependency-light; use Lucide icons instead of adding another icon package.

## Non-Obvious Decisions

- Newsletter submissions must post to `/newsletter-form.html`, not `/`, because TanStack Start's SSR catch-all otherwise intercepts the request before Netlify Forms can process it.
- The form names `locs-thrive-guide`, `locs-thrive-circles` and `locs-thrive-contact`, together with all field names, must stay synchronized between the React forms and `public/newsletter-form.html`.
- The horizontal story gallery is intentionally swipeable and uses scroll snapping instead of a JavaScript carousel.
- The original supplied HTML embedded its photography as base64 data. Those images were extracted into `public/images/` for caching, maintainability, and better page delivery.

## Local Development

Use `pnpm dev` for the standard Vite development server. Use Netlify Dev when testing platform behavior such as form routing. Netlify Forms submissions themselves should be verified on a deployed preview.
