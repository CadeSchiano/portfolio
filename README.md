# Cade Schiano Portfolio

Employer-facing portfolio for Cade Schiano, a Computer Science student at Bowling Green State University. The site foregrounds current full-stack, backend, and data/ML work, including Repolume, Scrimnet, and the NFL Quantitative Game Model.

## Stack

React, TypeScript, Vite, Framer Motion, Lucide, and CSS.

## Local development

```bash
npm ci
npm run dev
```

## Validation and production build

```bash
npm run build
```

The build runs TypeScript project checks and creates the static `dist/` output.

## Deployment

Pushes to `main` deploy through GitHub Actions to GitHub Pages at [cadeschiano.github.io/portfolio](https://cadeschiano.github.io/portfolio/). The workflow passes GitHub Pages' base path to Vite and enables Pages on its first run.

## Updating content

Project copy, links, and skills live in [src/data.ts](src/data.ts). The résumé asset is [public/resume-cade-schiano.pdf](public/resume-cade-schiano.pdf). Before adding project media, use only sanitized screenshots captured from current public builds.
