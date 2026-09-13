# Suraj Patel — Portfolio

A DevOps/SRE-flavored portfolio: dark mission-control aesthetic, monospace telemetry accents, a live status bar, and a git-log-styled experience timeline. Built with React, TypeScript, Tailwind CSS v4, and Framer Motion.

Content (bio, experience, projects, skills, certifications) lives in one place: `src/data/content.ts`. Edit that file to update the site.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
npm run preview # preview the production build locally
```

## Deploy

The output of `npm run build` is a static site (`dist/`) — deploy it to any static host:

- **Vercel**: `npx vercel` (auto-detects Vite)
- **Netlify**: drag-and-drop the `dist/` folder, or connect the repo (build command `npm run build`, publish directory `dist`)
- **GitHub Pages**: push `dist/` to a `gh-pages` branch, or use the `gh-pages` npm package

## Notes

- The résumé linked from the nav bar is served from `public/Suraj_Patel_Resume.pdf` — replace that file to update it.
- Update social links, email, and bio text in `src/data/content.ts`.
