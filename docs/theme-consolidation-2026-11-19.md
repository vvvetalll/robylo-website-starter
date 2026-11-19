# ROBYLO child theme consolidation

**2026-11-19 · ChatGPT/Codex · Implemented on robylo.com.** The owner authorized direct production cleanup with Coming Soon enabled. The prior protected staging copy was left untouched during this task.

## Production architecture

WordPress 7.1.5 and PHP 8.2.36 run **ROBYLO Child 1.0.0** (`wp-content/themes/robylo-child/`) with **Hello Elementor 3.5.2** as its parent. The two maintained source files in [theme/robylo-child](../theme/robylo-child/) match the installed originals. The uploaded archive was compared to commit `51f28fc1db7e6648a958f783e9968dfea8d19775`, and both installed files were read back in WordPress. SiteGround serves an optimized copy of the child stylesheet. Generated CSS stays outside Git.

Elementor and Elementor Pro 4.4.1 retain ownership of Kit 5744, Atomic variables, global classes, styles, components, page content, media references, Header 5892, Footer 5893, popup 5996 and the native carousel. This task changed no page, template, kit, media, or SEO settings. The code-only theme installation does not carry WordPress database content.

The child stylesheet loads once. The only additional behavior marks the two existing Atomic About navigation links with `aria-current="page"` on About and gives each a visible indicator. The links use interaction IDs `5d11a8d2` and `3cba38b3`. The saved Atomic links lack route-aware current-page semantics. The scoped PHP and CSS preserve the existing header and popup, including keyboard behavior. The implementation from [PR #21](https://github.com/vvvetalll/robylo-website-starter/pull/21) was not merged.

## Removed from production

- Removed `wp-content/themes/robylo/` and the obsolete sibling installer `robylo.zip`. This retired legacy `inc/{assets,nav,elementor}.php`, CSS and JavaScript enqueues, Smart Header and navigation handlers, the `[robylo_menu]` shortcode, and theme editor integrations. The parent theme stays installed.
- Retired Elementor Custom Code #399 (Header Scroll) and #2058 (Case Card) individually by moving them to the recoverable WordPress Trash. Both scripts stopped appearing in rendered HTML. Their selectors had no consumers in the inspected saved Elementor trees and published views. The shortcode was confirmed in the legacy Header 5803 editor, whose Theme Builder assignment is `exclude/general`. That template remains preserved and excluded. If restored for use later, its navigation will need replacement.
- Reviewed the 40 Elementor trees from [audit PR #22](https://github.com/vvvetalll/robylo-website-starter/pull/22), the current Theme Builder conditions and the published views. Native portfolio cards use explicit project links. Native mobile navigation uses popup 5996. Legacy popup 2550 was preserved.

## Recovery

SiteGround backup `ROBYLO pre-theme consolidation 2026-11-19` at 09:49 Chicago time remains available. Before removing the old theme, **Security → Backups → Restore Files** successfully restored just its directory into private `.RESTORES`. Verified its `functions.php`, `style.css`, `inc/` and `assets/` there. No live files or database were overwritten in this recovery check. For theme rollback, restore only that theme folder, then activate ROBYLO Starter. Restore individual Custom Code records from Trash only if needed. [SiteGround selective recovery](https://www.siteground.com/kb/restoring-specific-site-data).

## Verification

| Area | Actual result |
| --- | --- |
| Home | Checked 1440, 1024, 768, 390 and 320px. Expected hero, Header/Footer and Kit 5744 loaded. No document-level horizontal overflow or failed loaded images in the checks. Homepage SEO title matched the pre-change baseline. |
| About and internal pages | Checked published internal routes at desktop and 390px, plus About at 320px. Section titles and content rendered without horizontal overflow. On About, desktop underline and mobile inset indicator rendered with `aria-current="page"`. Home's About nav link had no current-page attribute. |
| Mobile navigation | Keyboard opened the native popup. Escape closed it and returned focus to the menu toggle. |
| Portfolio | Six native cards remained. Mouse and keyboard arrows and emulated touch swipe advanced slides. Quickzy Cleaning was reachable, with the next arrow disabled at the end. The existing previous-card strip still measured about 13px at 320px and 19px at 390px. Its separate fix remains in [PR #20](https://github.com/vvvetalll/robylo-website-starter/pull/20). |
| Elementor editor | Home document loaded at desktop and in Mobile Portrait, including hero and portfolio. No edits saved. |
| Errors and public access | No captured JS errors on Home or in the Home editor. SiteGround reported no recent server errors. Anonymous Home returned 200 and served Coming Soon 5858 with the new theme. Neither legacy snippet nor the old theme path appeared. |

No real contact form submission was sent. A separate PHP CLI lint and a database restore were outside the checks performed. PR #23 remains open and unmerged.
