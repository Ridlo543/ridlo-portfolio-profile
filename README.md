# Ridlo Abdullah Ulinnuha Portfolio

Single-page bento portfolio for Ridlo Abdullah Ulinnuha, a Software Engineer
focused on Laravel production systems, education operations, MySQL query
optimization, feature testing, and ML/API integration.

## Highlights

- Astro 6, React, Tailwind CSS v4, and pnpm
- Single-page bento homepage with light, dark, and system theme switching
- Project modal with professional, web, mobile, and data/ML filters
- Certificates modal with category filters and downloadable public files
- CV-backed experience timeline and education/certification content
- Bilingual CV download menu from `public/cv/`

## Content Sources

- `public/cv/ridlo-software-engineer-en.pdf`
- `public/cv/ridlo-software-engineer-id.pdf`
- `public/certificates/` as the downloadable certificate asset directory
- `docs/exports/github/`
- Public repositories from [Ridlo543](https://github.com/Ridlo543)

## Data Management

- `src/data/projectData.js` stores project metadata, filters, links, and featured
  project derivation.
- `src/data/experienceData.js` stores CV-backed experience records and featured
  experience derivation.
- `src/data/certificateData.js` stores education metadata, certificate filters,
  featured certificates, and download paths for files in `public/certificates/`.

## Commands

All commands are run from the project root:

| Command                 | Action                                 |
| :---------------------- | :------------------------------------- |
| `pnpm install`          | Install dependencies                   |
| `pnpm run dev`          | Start the local dev server             |
| `pnpm run build`        | Build the production site to `./dist/` |
| `pnpm run preview`      | Preview the production build locally   |
| `pnpm exec astro check` | Run Astro diagnostics                  |
