# Project diary

Last updated: 2026-11-05. Branch: `svelte-website`. Check `git log` and `git status` for anything
newer: this file is a hand-written summary, not a source of truth.

## Where the project is

The new SvelteKit site is built, content has been imported from the old site into `content/`, and
it is deployed to GitHub Pages from `svelte-website`. The CMS (`/admin`) works on the live site:
sign-in goes through the Sveltia CMS Authenticator on Cloudflare, and a test post made from the
CMS was committed and deployed. All 13 routes render, with no console errors, no broken images
and no horizontal scroll at 768 and 375.

## History

| Date       | What                                                                                           |
| ---------- | ---------------------------------------------------------------------------------------------- |
| 2026-10-08 | SvelteKit scaffold, content definition and import (the Gatsby site is only in the git history) |
| 2026-10-09 | DLS update and content; deploy made manual, then automatic on every push to `svelte-website`   |
| 2026-10-09 | CMS sign-in through the authenticator worker; first post created from the CMS (`hello-world`)  |
| 2026-11-05 | Responsive review at tablet (768) and mobile (375), and the fixes below                        |

## Responsive review, 2026-11-05

Done on the live site with Chrome driven by Playwright, then re-checked on localhost.

**Fixed**

1. **Mobile menu was cut off.** The open menu was 949px tall inside a sticky header with no
   maximum height, so "Documentation" and the "Use it now!" button could not be reached on phones
   (375×812, 375×667, landscape). Now the header is at most `100dvh` and the panel scrolls on its
   own; the page behind does not scroll (`html:has(#mobile-menu)` in `base.css`).
   Files: `Navbar.svelte`, `base.css`.
2. **Menu toggle accessibility.** The icon becomes a close "X" (new `close` icon), the label is
   "Open menu" / "Close menu", and Escape closes the menu and returns focus to the button.
3. **Hero video side bars.** The container was 16:9 but the video displays at 1466:907, which left
   light-grey bars on both sides. `HomeHero.svelte` now uses `aspect-[1466/907]`.

**Decided not to do (for now)**

- **Low contrast of the secondary "Github" button** in the hero: white on `rgb(179,197,181)` is
  about 1.8:1 (WCAG AA asks for 4.5:1). The `secondary` variant in `Button.svelte` is the cause;
  check its other uses if this is picked up.
- **Small touch targets and text in the footer:** links are 18–20px tall (WCAG 2.5.8 asks for at
  least 24px, 44px is recommended), and "Privacy info" and the three credit links are 12px.

**Open, depends on a new asset**

- **Hero video on mobile.** At 335px wide the video is shown at 17% of its size and the app's
  text is unreadable. The recording also cuts the app on the right edge (visible on every
  viewport), and the file uses non-square pixels (SAR 6597:7256). Proposed: re-export the video
  with square pixels and without the cut; serve a second version for narrow screens, cropped or
  zoomed on the central panel (4:3 or 1:1), with `<source media="(max-width: 767px)">`; add a
  `poster` and respect `prefers-reduced-motion` (it always autoplays now). Needs the source
  recording.
- **Platinum sponsor logos** (Fastweb, Inova) look very washed out on the home page. Check
  whether this is intended by the DLS or a missing logo variant.

## Next steps

1. Check that the deploy of commit `34f56cc` (responsive fixes, removal of the `hello-world` test
   post and its image, these notes) went through, and look at the mobile menu on the live site.
2. Decide on the open items above (hero video, sponsor logos, contrast and touch targets).
3. Finish the import and review of the old content: the import commit was marked work in
   progress. Compare each section of the old site (in the git history, before `e7dcb39`) with the
   new routes.
4. Repository settings still to confirm: Pages source set to GitHub Actions, the custom domain
   `rawgraphs.io`, and the `svelte-website` branch allowed in the `github-pages` environment (see
   "Deployment" in the README).
5. Run `npm run lint` over the whole project: it was not part of the responsive work.
