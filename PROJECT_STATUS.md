# Undead Invasion Project Status

Last updated: 2026-05-24

## Current Stage

Technical SEO recovery deployed and verified. The page-level canonical metadata, structured data, and apex-to-`www` permanent redirect are now aligned with the browser game site rules. A conservative Clarity UX hotfix for the game iframe, reload, and fullscreen flow was completed on 2026-05-24.

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
- Passed local `npm run lint` and `npm run build` on 2026-05-24.
- Committed and pushed `1c87a0a` (`修复规范域名和游戏结构化数据`) to GitHub on 2026-05-24.
- Verified production on 2026-05-24:
  - `https://www.undeadinvasiononline.com/` returns 200.
  - Homepage HTML canonical points to `https://www.undeadinvasiononline.com/`.
  - Homepage JSON-LD now uses `VideoGame`.
  - No `FAQPage` or `SoftwareApplication` JSON-LD is present in the production homepage HTML.
  - `https://www.undeadinvasiononline.com/sitemap.xml` lists the canonical `www` homepage.
- Verified on 2026-05-24 after the Vercel project-domain setting was updated:
  - `https://undeadinvasiononline.com/` now returns 308 to `https://www.undeadinvasiononline.com/`.
  - `https://www.undeadinvasiononline.com/` returns 200.
  - `https://www.undeadinvasiononline.com/sitemap.xml` returns 200.
- After asking NotebookLM on 2026-05-24, completed a conservative Clarity UX hotfix that does not touch URL, title/H1, canonical, robots, sitemap, core SEO text, or structured data:
  - Added a clearer iframe slow-load retry path.
  - Added a reload control and visible status feedback.
  - Changed fullscreen to target the first-party game shell first, with iframe fullscreen only as fallback.
  - Added visible fullscreen/browser-blocked status messaging.
- Local verification on 2026-05-24 passed `npm run lint`, `npm run build`, and Playwright checks for iframe presence, reload feedback, fullscreen shell targeting, H1, and canonical.

## Next Actions

- Request GSC validation for the auto-redirect issue after the permanent redirect is confirmed.
- Watch Clarity for 3-7 days after the 2026-05-24 game-frame UX hotfix to see whether fullscreen usage, short exits, and dead clicks improve.
- Observe GSC indexing, query, and mobile/desktop impression changes for 7-14 days before content expansion.

## SEO Notes

- Do not create new pages until the canonical and structured-data cleanup is deployed and validated.
- Keep the homepage playable-first and keep SEO content in server-rendered HTML.
- Recheck mobile impressions after technical fixes have settled.

## Risks

- Historical 307/redirect reports in GSC may take days to clear after validation starts.
- Clarity shows low average scroll and bot-heavy sessions, so future content changes should be measured against real-user sessions. The 2026-05-24 UX hotfix should be evaluated with fresh post-deploy sessions before larger visual/content changes.
- External iframe stability remains a dependency.

## Useful Links

- Production: https://www.undeadinvasiononline.com/
- Apex redirect: https://undeadinvasiononline.com/
- Sitemap: https://www.undeadinvasiononline.com/sitemap.xml
