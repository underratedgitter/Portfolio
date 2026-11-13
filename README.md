# Suraj Patel — Portfolio

A monochrome editorial portfolio: black and white, Instrument Serif for display type with Geist and Geist Mono for text and labels, a hairline-framed grid layout, and hand-drawn SVG architecture plates for each featured project (`src/components/ProjectPlate.tsx`). Built with React, TypeScript, Tailwind CSS v4, and Motion.

Content (bio, experience, projects, skills, certifications, education) lives in one place: `src/data/content.ts`. Edit that file to update the site.

## Develop

Requires Node 24 (the version CI pins, in `.github/workflows/ci.yml`).

```bash
npm install
npm run dev    # Vite dev server on http://localhost:5173
```

## Lint

```bash
npm run lint             # oxlint
npm run lint -- --deny-warnings   # how CI runs it
```

## Build

```bash
npm run build   # tsc -b && vite build → dist/
npm run preview # preview the production build locally
```

## Deploy

`dist/` is a static site, and deploys automatically: on every push to `main`, GitHub Actions (`.github/workflows/ci.yml`) runs `npm run lint -- --deny-warnings`, `npm run build`, an `npm audit --omit=dev --audit-level=high` check, then rsyncs `dist/` to the VPS at `/var/www/portfolio/`. That step needs four repository secrets: `VPS_SSH_KEY`, `VPS_KNOWN_HOSTS`, `VPS_USER` and `VPS_HOST`.

Because the output is plain static files, any static host also works:

- **Vercel**: `npx vercel` (auto-detects Vite)
- **Netlify**: drag-and-drop the `dist/` folder, or connect the repo (build command `npm run build`, publish directory `dist`)
- **GitHub Pages**: push `dist/` to a `gh-pages` branch, or use the `gh-pages` npm package

### After deploying

- In `index.html`, change `og:image` and `twitter:image` from `/og-image.png` to the full URL (e.g. `https://yourdomain.com/og-image.png`). LinkedIn and WhatsApp ignore relative image paths.
- Add a `public/sitemap.xml` listing the live URL, and a `Sitemap: https://yourdomain.com/sitemap.xml` line to `public/robots.txt`.

## Notes

- Fonts are self-hosted in `public/fonts/` (no requests to Google): Instrument Serif, Geist and Geist Mono are from Google Fonts under the SIL Open Font License, loaded via `src/fonts.css`.
- The hero name uses **Akira Expanded** by Typologic (`public/fonts/akira-expanded.woff2`), downloaded from DaFont as the free demo. It is free for personal use only; commercial use requires the full license from https://creativemarket.com/typologic/4868098-Akira-Expanded.
- The link preview image is `public/og-image.png` (1200×630).

- The résumé is served from `public/Suraj_Patel_Resume.pdf` and linked from the nav bar, the hero and the about section — replace that file to update it.
- Update social links, email, and bio text in `src/data/content.ts`.
