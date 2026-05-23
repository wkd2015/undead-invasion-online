# Undead Invasion Project Status

Last updated: 2026-05-24

## Current Stage

Technical SEO recovery in progress. The focus is canonical redirect correctness, structured-data cleanup, and preserving the existing playable-first game experience.

## Completed

- Reviewed GSC, GA4, and Clarity exports dated 2026-05-24.
- Confirmed the site has early organic activity but weak search scale.
- Identified a production canonicalization issue: apex HTTPS was redirecting to `www` with a temporary 307 instead of permanent 301/308.
- Identified structured-data mismatch: production had `SoftwareApplication` plus `FAQPage` JSON-LD for an ordinary game site.
- Updated site URL resolution to prefer `https://www.undeadinvasiononline.com/` in production metadata.
- Added a permanent apex-to-`www` redirect in Next config.
- Replaced `SoftwareApplication`/`FAQPage` JSON-LD with a visible-content-aligned `VideoGame` JSON-LD component.
- Kept visible FAQ content, but removed FAQPage schema eligibility risk.
- Removed lazy loading from the primary game iframe so the playable area loads sooner.

## Next Actions

- Run local `lint` and production build.
- Commit and push the optimization branch to trigger deployment.
- Verify production behavior:
  - `https://www.undeadinvasiononline.com/` returns 200.
  - `https://undeadinvasiononline.com/` redirects permanently with 301/308.
  - Homepage JSON-LD contains `VideoGame` only, with no `FAQPage` or `SoftwareApplication`.
  - `robots.txt` and `sitemap.xml` remain accessible and canonical.
- If production still returns 307 after deployment, fix the Vercel domain redirect setting for this project.
- Request GSC validation for the auto-redirect issue after the permanent redirect is confirmed.

## SEO Notes

- Do not create new pages until the canonical and structured-data cleanup is deployed and validated.
- Keep the homepage playable-first and keep SEO content in server-rendered HTML.
- Recheck mobile impressions after technical fixes have settled.

## Risks

- Existing Vercel domain-level redirect behavior may override framework redirects.
- Clarity shows low average scroll and bot-heavy sessions, so future content changes should be measured against real-user sessions.
- External iframe stability remains a dependency.

## Useful Links

- Production: https://www.undeadinvasiononline.com/
- Apex redirect: https://undeadinvasiononline.com/
- Sitemap: https://www.undeadinvasiononline.com/sitemap.xml
