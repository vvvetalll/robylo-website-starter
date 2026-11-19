# ROBYLO child theme consolidation

**2026-11-19 · ChatGPT/Codex · Candidate prepared; staging activation blocked by authenticated access.** The owner approved one minimal Hello Elementor child theme, with staging and verified rollback required before replacing the production theme. Publication and merge require separate approval.

## Source of truth

| Layer | Current state | Target |
| --- | --- | --- |
| Hello Elementor | Installed parent `hello-elementor` 3.5.2 | Keep installed, update independently |
| ROBYLO theme | Production uses ROBYLO Starter 1.0.5 at `wp-content/themes/robylo/` | Install the two tracked files in [theme/robylo-child](../theme/robylo-child/) under `wp-content/themes/robylo-child/`. The separate slug allows staging rollback by reactivation. |
| Elementor 4.4.1 and Pro 4.4.1 | WordPress database holds Kit 5744, defaults, variables, classes, components, templates, popup, page content, carousel, Custom Code and active/draft revisions | Keep the existing database and use Atomic controls for the UI. Theme installation transfers none of these settings. |

The repository previously held a small starter. This branch expands it only enough to support the observed navigation gap. Production still runs the legacy files backed up at SiteGround. The candidate has not been installed.

## Theme scope and legacy dependencies

The candidate loads a single child stylesheet using the existing conditional parent dependency. It supplies no templates, shortcode, menu registration, scripts, editor assets or design tokens. The only style rules distinguish the current About link visually. The PHP adds `aria-current="page"` to two known Atomic About links on the About route. Their interaction IDs are `5d11a8d2` (shared header) and `3cba38b3` (native mobile popup). The saved links do not expose WordPress menu current-item semantics in the observed output. This scoped fallback requires runtime validation in both Elementor render paths, including cache and popup behavior. [PR #21](https://github.com/vvvetalll/robylo-website-starter/pull/21) targeted the previous starter without establishing production parity and was not merged.

| Dependency | Evidence and action |
| --- | --- |
| Legacy `inc/assets.php`, `assets/css/{base,header}.css`, generated minified CSS, `assets/js/main.js` | Omitted from the candidate. Legacy scripts, sticky header and navigation behavior are described in [audit PR #22](https://github.com/vvvetalll/robylo-website-starter/pull/22). Check all active and draft templates and fixed/scroll/mobile behavior before retiring the installed files. |
| Legacy `inc/nav.php` and `[robylo_menu]` | Omitted from the candidate. A review of 40 Elementor trees found legacy `rb-smart-header` in Header 5803, excluded by its recorded Theme Builder condition. Its shortcode widget `d8acf88` has settings unavailable in the discovery surface. Inspect the setting and scan saved content, revisions, template references, widgets and shortcode consumers before declaring it unnecessary. |
| Legacy `inc/elementor.php` | Omitted from the candidate. Compare Atomic editor, responsive preview and Save/reopen before removing the installed integration. |
| Custom Code #399 Header Scroll and #2058 Case Card | Both were published globally in the audit and remain unchanged. Inspected trees and sampled pages did not show required current consumers, but absence in those samples is insufficient. Check template and popup conditions, global saved content and triggers. Disable one at a time on staging only after confirming the dependency, and retest before proceeding. |
| Native Header 5892, Footer 5893, navigation popup 5996, legacy form popup 2550 | Elementor owns them. Preserve document data and conditions. Check whether 2550 is reachable through an existing CTA and validate its form without sending a real message. |

## Backup and rollback

SiteGround manual full backup `ROBYLO pre-theme consolidation 2026-11-19` was present on 2026-11-19 at 09:49 Chicago time under **Security → Backups**. The backup contains site files and databases, including the installed theme and Elementor settings. Store credentials, backup contents and customer data outside Git.

SiteGround staging copy `theme-cleanup` was created at 09:52 Chicago time and has never been deployed. The staging copy excluded the nonstandard root items `php_errorlog` and `/media`. No root `/media/` references were found in the inspected Elementor trees. Treat media parity as a test requirement, especially for content outside those trees. The staging hostname has its own DNS record, Let's Encrypt certificate and root access protection. Public HTTPS returned 401 at the staging root; an unauthenticated request to staging wp-admin returned 403. SiteGround's WordPress sign-in did not establish an authenticated staging session.

Once staging access is available:

1. Record staging theme, versions, kit and template IDs, snippet states, homepage/reading configuration and Coming Soon before changes. Capture baselines at the requested widths. Keep the existing theme installed.
2. Verify the dependency checks above and test eligible snippet disables independently on staging. Install and activate the tracked child theme on staging. Compare output against baseline and confirm the candidate files match the reviewed source.
3. Rehearse rollback on staging. Reactivate ROBYLO Starter and restore any changed snippet states. Compare the old theme, Kit 5744, menus, frontend, editor, and gate with baseline. Use SiteGround's file/database backup on an isolated restore target if a snapshot restore is needed. The existence of a backup does not establish a successful restore.
4. Reapply the candidate and rerun the verification matrix. Record the actual output and any deviations. Leave production promotion, obsolete-theme removal and merge pending owner approval. Do not deploy the entire staging database over production as part of a theme-only change.

## Checks and evidence

- **Verified before changes, production:** Authenticated Home at 1440px and 390px used `wp-child-theme-robylo`, showed six carousel cards and exposed matching document scroll/client widths. Shared nav included Services, Work, Approach, About and Contact, with the expected internal destinations. Baseline captures are outside Git. The anonymous homepage still served Coming Soon page 5858.
- **Verified, staging setup:** SiteGround shows the staging copy and backup. Browser-trusted HTTPS and anonymous root denial were confirmed. The candidate ZIP contains only `robylo-child/functions.php` and `robylo-child/style.css`. Both archive entries were compared with the working source files.
- **Pending:** PHP lint (PHP CLI unavailable), authenticated staging baseline, candidate activation, rollback rehearsal, and post-change visual and functional checks. At 1440, 1024, 768, 390 and 320px compare public gate, Home, all current pages and approved previews, footer, keyboard/popup Escape and focus return, About ARIA state, carousel controls/swipe/end alignment, form validation/contact actions, editor preview, SEO/hierarchy, asset requests, errors and horizontal overflow. Also verify there is one copy of child CSS and no duplicate parent CSS.
