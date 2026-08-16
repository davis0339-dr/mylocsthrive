# My Locs Thrive

A warm, editorial website for Dr Lisa's loc education community. The site helps women and girls explore healthy loc care through a personal story, practical resources, a gentle interactive self-check, and a newsletter signup.

## Key Features

- Responsive, accessible single-page marketing experience
- Original supplied photography presented in a swipeable loc journey gallery
- Interactive five-question loc readiness self-check
- Separate starter-guide and Learning Circles email lists powered by Netlify Forms
- A downloadable six-page Gentle Starter Guide PDF
- Five practical beginner resources, with three featured on the homepage
- Mobile navigation, custom motion, reduced-motion support, and clear focus states
- Custom metadata and branded crown favicon

## Technology

- TanStack Start
- React 19
- TypeScript
- Vite
- Tailwind CSS 4 tooling with custom CSS
- Lucide React icons
- Netlify Forms

## Run Locally

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

The default Vite server runs on port `3000`.

To emulate Netlify routing locally, use:

```bash
netlify dev --port 8889
```

Netlify Forms registration and submissions should be confirmed on a deployed preview because the production Forms service is not available in a normal local Vite session.

## Project Structure

```text
src/routes/index.tsx       Main page and interactive behavior
src/routes/__root.tsx      Document shell and metadata
src/styles.css             Global visual system and responsive layout
public/images/             Brand and loc journey photography
public/newsletter-form.html Netlify Forms registration markup
```

## Deployment

The project is configured for Netlify in `netlify.toml`. Netlify runs the Vite production build and publishes `dist/client`.
