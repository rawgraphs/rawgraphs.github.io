# RAWGraphs website

This repository contains the source of the [RAWGraphs](https://rawgraphs.io) project website.

> **Work in progress.** The website is being refactored from scratch. The previous Gatsby
> codebase has been removed from the working tree and replaced with a new SvelteKit
> scaffold; the old code and content are still available in the git history.

If you are looking for the app, go to [app.rawgraphs.io](https://app.rawgraphs.io).

## Stack

- [SvelteKit](https://svelte.dev/docs/kit) with [`adapter-static`](https://svelte.dev/docs/kit/adapter-static): the whole site is prerendered to static files
- [Tailwind CSS](https://tailwindcss.com) v4, with the typography plugin
- [Bits UI](https://bits-ui.com) for headless, accessible components
- [Fontsource](https://fontsource.org) for self-hosted fonts (Inter Variable and Crimson Text)
- [Sveltia CMS](https://sveltiacms.app) for editing content, served at `/admin`
- GitHub Pages for hosting, deployed by a GitHub Action

## Development

Requirements: Node.js 24 (see `.nvmrc`) and npm.

```sh
npm install
npm run dev
```

The dev server runs at <http://localhost:6273>.

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Start the dev server                          |
| `npm run build`   | Build the static site into `build/`           |
| `npm run preview` | Serve the production build locally            |
| `npm run check`   | Type-check the project with `svelte-check`    |
| `npm run lint`    | Check formatting (Prettier) and lint (ESLint) |
| `npm run format`  | Format all files with Prettier                |

## Project structure

```
content/                 Content edited through the CMS (Markdown)
src/
  lib/                   Shared code, imported through the `#lib` alias
    cms/config.ts        Sveltia CMS configuration (backend, collections)
  routes/
    +layout.ts           Enables prerendering for every route
    (site)/              Public pages, with the Tailwind stylesheet and fonts
    admin/               Sveltia CMS (client-only, not styled by the site CSS)
static/                  Files copied as-is to the site root
  uploads/               Media uploaded through the CMS
.github/workflows/       Deploy workflow
```

SvelteKit is configured in `vite.config.ts`; there is no `svelte.config.js`.

## Content management

Sveltia CMS is available at `/admin` (<http://localhost:6273/admin> in development). Its
configuration is in `src/lib/cms/config.ts`: add or change collections there.

Content is stored as Markdown files with front matter in `content/`, one folder per collection:

| Collection    | Folder                   | Served at                                                                                                                                                |
| ------------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Pages         | `content/pages/`         | `/`, `/about`, `/support-us`, `/news`, `/sponsors`, `/learning`, `/courses`, `/gallery`, `/faq`, `/documentation`, `/custom-charts` (one route per file) |
| News          | `content/news/`          | `/news`, `/news/<slug>`                                                                                                                                  |
| Gallery       | `content/gallery/`       | `/gallery`, `/gallery/<slug>`                                                                                                                            |
| Learning      | `content/learning/`      | `/learning`, `/learning/<slug>`                                                                                                                          |
| Courses       | `content/courses/`       | `/courses` only: courses have no page of their own                                                                                                       |
| Custom charts | `content/custom-charts/` | `/custom-charts`, `/custom-charts/<slug>`                                                                                                                |
| Text pages    | `content/text-pages/`    | `/<slug>`                                                                                                                                                |
| Sponsors      | `content/sponsors/`      | Home and `/sponsors`, for the sponsor types selected in each page                                                                                        |
| Ribbons       | `content/ribbons/`       | Before the footer of the pages that select one in their "Ribbon" field                                                                                   |
| Site → Footer | `content/site/footer.md` | Footer of every page                                                                                                                                     |

Some section titles on the site (e.g. "Main Features" and "Sponsors" in the home page, and the
sponsor types) are the labels of the corresponding fields in the CMS configuration: rename them
there.

The files are read at build time by `src/lib/server/content.ts`; the field types are in
`src/lib/content.ts`. When you change the fields of a collection, update the CMS configuration,
the types and the page that renders them. Adding a new unique page to "Pages" also requires a
new route in `src/routes/(site)/`.

- **Local editing:** open `/admin` in a Chromium-based browser, choose "Work with Local
  Repository" and select the project folder. Changes are written straight to your working
  tree, with no authentication.
- **Editing on the live site:** the GitHub backend commits to the `develop` branch of
  `rawgraphs/rawgraphs.github.io`. Signing in requires either a GitHub personal access token
  or an OAuth client; see the
  [Sveltia CMS GitHub backend docs](https://sveltiacms.app/en/docs/backends/github). No OAuth
  client is configured yet.

## Deployment

`.github/workflows/deploy.yml` builds the site and publishes `build/` to GitHub Pages:

- on every push to `develop`
- manually, from the **Actions** tab (**Deploy to GitHub Pages → Run workflow**), on any branch

One-time repository setup:

1. In **Settings → Pages**, set **Source** to **GitHub Actions**.
2. In the same page, set the custom domain to `rawgraphs.io`. With Actions-based deploys the
   domain is stored in the repository settings, so no `CNAME` file is needed.
3. To deploy manually from a branch other than `develop`, allow that branch in
   **Settings → Environments → github-pages**.

The site is served from the domain root, so no base path is configured. If it ever has to be
served from a subpath, set `paths.base` in the SvelteKit options in `vite.config.ts`.
