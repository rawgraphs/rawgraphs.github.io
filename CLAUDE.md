# RAWGraphs website: notes for AI agents

Rebuild of the [RAWGraphs](https://rawgraphs.io) website (SvelteKit, static, Tailwind v4, Sveltia
CMS). The old Gatsby site lives only in the git history. Read `README.md` first: it documents the
stack, the project structure, the design system levels, the CMS collections and the deployment.
This file only adds what the README does not say. For what has been done and what is left, read
[`docs/DIARY.md`](docs/DIARY.md).

## Branch and deploy

- The working branch is `svelte-website`, not `main`. There is no `develop` any more.
- **Every push to `svelte-website` deploys the live site** (GitHub Pages) and the CMS commits to
  the same branch. Do not push, or open a PR, unless the user asks.
- The deployed site is at <https://rawgraphs.github.io/>. The custom domain `rawgraphs.io` is the
  goal; check the repository settings before assuming it is live.

## Commands

Node 24 (`.nvmrc`). Dev server: `npm run dev` on **http://localhost:6273** (the user usually has
it running already: check with `curl -sI http://localhost:6273/` before starting another).

Before saying a change is done: `npm run check` (0 errors expected), and `npx prettier --check`
on the files you touched. `npm run lint` also runs ESLint over the whole project.

## Conventions

- **Design system first.** Colors, spacing, radii and text styles come from the DLS tokens
  (`src/lib/styles/`): use `bg-surface`, `p-sm`, `type-body`… and do not introduce arbitrary
  values or raw hex colors. To change a value, change the token. The one pattern already in use
  for one-off sizes is an arbitrary value such as `min-h-[500px]`.
- **Pages only compose.** `src/routes/(site)/**/+page.svelte` assemble organisms and pass them
  content. New UI goes in `atoms/`, `molecules/` or `organisms/` according to the four levels in
  the README, each component with a `@component` doc comment like its neighbours.
- **Icons** are SVG masks in `src/lib/assets/icons/` (24px, `stroke="#333333"`, 2px rounded
  stroke): add the file, then its name to `IconName` (and to `sizes` if it is not 16px) in
  `Icon.svelte`.
- **Content shape lives in three places** that must change together: `src/lib/cms/config.ts`
  (CMS fields), `src/lib/content.ts` (types) and the page/organism that renders the field.
- **Responsive.** Mobile-first. The main menu switches at Tailwind's `lg` (1024px): below it the
  navbar is a hamburger with a full-height scrollable panel (`Navbar.svelte`). The site is checked
  at **768 (tablet)** and **375 (mobile)**.
- Formatting is enforced by Prettier (tabs, single quotes, no trailing commas, 100 columns,
  Tailwind class sorting). Run `npx prettier --write` on what you edit.
- Commit messages: imperative subject, a body that explains why, in English. Do not commit or
  push without being asked.
- User-facing replies are in the language the user writes in (usually Italian); code, comments,
  commit messages and docs are in English.

## Things that will trip you up

- **Do not edit `content/` by hand for editorial changes** the user makes through the CMS, and
  expect commits from the CMS on the remote: `git pull --rebase` before pushing.
- The hero of the home page is a **video** (`static/uploads/intro-rawgraphs.mp4`), not an image.
  It has non-square pixels (display ratio 1466:907) and the recording itself cuts the app on the
  right. `HomeHero.svelte` uses `aspect-[1466/907]` so that it fills its box. Fixing the
  illegible text on mobile needs a re-exported video, not CSS.
- Images use `loading="lazy"` (`Media.svelte`): in a full-page screenshot the ones below the fold
  look blank. Scroll the page, or wait, before concluding that an image is broken.
- `/admin` (Sveltia CMS) is client-only and is not styled by the site CSS.
- The CMS login on the live site goes through a Cloudflare worker (`base_url` in
  `src/lib/cms/config.ts`); its secrets are not in this repository.

## Checking the layout in a browser

If the Claude in Chrome tools are not connected, Playwright can drive the installed Chrome
(`chromium.launch({ channel: 'chrome' })`; the bundled Chromium may not match the Playwright
version). Install it in a scratch directory, not in this project. The checks that were useful:

- `document.documentElement.scrollWidth === clientWidth` on every route (no horizontal scroll);
- elements whose bounding box leaves the viewport and are not clipped by an `overflow` ancestor;
- console errors and HTTP responses ≥ 400;
- images with `naturalWidth === 0` after scrolling the whole page;
- the mobile menu opened at 375×812, 375×667 and 667×375: the last link ("Use it now!") must be
  reachable inside the panel.

Routes to cover: `/`, `/about`, `/news`, a news post, `/support-us`, `/sponsors`, `/learning`,
`/courses`, `/faq`, `/gallery`, `/custom-charts`, `/documentation`, `/privacy`.
