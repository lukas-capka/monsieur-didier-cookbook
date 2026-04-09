# Monsieur Didier

Astro site for Monsieur Didier's coastal French recipes, with a homepage, recipe listings, individual recipe pages, and a dedicated About Me page.

## Local development

Run from the project root:

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local server at `localhost:4321` |
| `npm run build` | Build production output to `dist/` |
| `npm run preview` | Preview production build |

## GitHub Pages deployment (free-tier friendly)

This repository deploys with GitHub Actions using `.github/workflows/deploy.yml`.

### Current setup

- Trigger: push to `main` (plus manual `workflow_dispatch`)
- Build output: `dist/`
- Deploy target: GitHub Pages
- Base path in production: `/wave-vent-cookbook` (configured in `astro.config.mjs`)

### One-time GitHub setup

1. Keep the repository public (GitHub Free requirement for Pages via Actions).
2. In GitHub, open `Settings -> Pages`.
3. Under source, select `GitHub Actions`.
4. Ensure `main` is the active deployment branch for pushes.

### Deploy flow

1. Merge or push changes to `main`.
2. GitHub Action builds Astro and deploys to Pages.
3. Site is published at:
   - `https://<github-username>.github.io/wave-vent-cookbook/`

## Foundation notes

- Content is markdown-driven under `src/content/recipes/`.
- About page content is in `src/pages/about-me.md`.
- Keep route structure stable (`/recipes/`, `/recipes/[slug]/`, `/about-me/`) to avoid broken links in future iterations.
