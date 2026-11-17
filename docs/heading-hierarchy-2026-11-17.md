# Homepage V2 heading hierarchy refinement — 2026-11-17

**Owner-approved scope:** improve H2 versus service/item H3 hierarchy across Homepage V2 at all breakpoints. This later request supersedes the earlier mobile-only request and its 26px mobile H3 suggestion. **Implemented and rendered-verified** by ChatGPT Work/Codex. Public launch remains unauthorized.

## Native implementation

Existing semantic h2/h3 defaults are used elsewhere (Lab, Styleguide and legacy components), while rb-grid-main is a layout class and rb-heading-mute also serves Hero/Contact. Changing these globally would affect unrelated consumers. No existing scoped section/item typography role existed. Added only two native kit Global Classes, using existing rb-font, with no new variables, custom CSS, duplicate components or widget-level typography overrides:

| Role/class | Desktop | Tablet ≤1024 | Mobile ≤767 |
|---|---|---|---|
| rb-section-title — g-b881735 | Existing H2: 48px / 700 | Existing H2: 40px / 700 | 36px / 700 |
| rb-item-title — g-11b543f | 26px / 600 | 24px / 600 | 24px / 600 |

rb-section-title sets Manrope via rb-font, weight 700 and only the mobile 36px override; desktop/tablet size, line height and tracking continue to inherit existing H2 defaults. rb-item-title sets Manrope via rb-font, weight 600 and 26/24/24 sizes; existing H3 line height 1.25 and tracking remain.

Attachments:
- [Section head 6010](https://robylo.com/wp-admin/post.php?post=6010&action=elementor), heading 4c7cb36d: rb-section-title.
- [Service row 6013](https://robylo.com/wp-admin/post.php?post=6013&action=elementor), title 4e4f4619: rb-item-title.
- [Approach step 6019](https://robylo.com/wp-admin/post.php?post=6019&action=elementor), statement 7035b741: rb-item-title.
- Home 5894 existing five portfolio H3s: 398df07, 8100744, c31d2f5, 31f149a, c41db73: same rb-item-title class.

All pre-existing classes, native layout styles, content and semantic tags were preserved. Reusable components were promoted so existing instances render the change; the Home document's five class bindings are saved in the staged autosave. No publish-document call was made for Home. Review in [Home Elementor → Preview Changes](https://robylo.com/wp-admin/post.php?post=5894&action=elementor).

## Consumer inspection before editing

Read current native variables/class inventory, actual component trees and rendered H1/H2/H3 consumers. Enumerated available pages/posts, published/draft site parts and all 14 available reusable components, reading their element trees rather than inferring use from names. The two new classes had no prior consumers.
- Section head 6010: Home's Services, Selected Work and Approach; also authoring draft 6040's existing heading instance 26e4f4c6. That authoring instance inherits the revised mobile H2 as expected from the shared component; its page was not edited or published.
- Service row 6013: four instances on Home only.
- Approach step 6019: three instances on Home only.
- Five portfolio H3s are raw native headings in the current Home carousel. The separate draft 6040 portfolio H3s were not modified.
- No other available page/template/component references these three compositions. No existing global class definition was edited, so Hero, Contact, Header/Footer, buttons, global tag defaults, Styleguide and Lab retain their definitions.

Read-back of the three component trees found exactly one changed class binding per component. All other settings, local styles and interactions were identical. Home's published tree is unchanged, consistent with its new five class bindings being staged. Actual authenticated Preview Changes renders all five portfolio H3s with the new class.

## Actual rendered verification

| Viewport | Section H2 | All 12 item H3s | Hero / Contact display | Page overflow |
|---|---|---|---|---|
| 1440 | 48px / 700; LH55.2 | 26px / 600; LH32.5 | 88px / 700 | No |
| 1024 | 40px / 700; LH47 | 24px / 600; LH30 | 64px / 700 | No |
| 768 | 40px / 700; LH47 | 24px / 600; LH30 | 64px / 700 | No |
| 390 | 36px / 700; LH43.2 | 24px / 600; LH30 | 44px / 700 | No |
| 320 | 36px / 700; LH43.2 | 24px / 600; LH30 | 44px / 700 | No |

Measured actual computed family, size, weight, line height, tracking, color, heading boxes, margins and body typography at each width. H2:H3 size ratio is now 1.85 desktop, 1.67 tablet and 1.50 mobile; weight is 700 versus 600. This establishes hierarchy without relying on gray/black alone. At 390 the first service title fits on one line; at 320 it wraps to two; AI & Business Automation wraps to two at 320. No clipping or forced line breaks were introduced.

Existing section-head bottom spacing stays 64px desktop/tablet and 40px mobile. Service row padding stays 40/28px, scope-list gap and descriptions stay unchanged; Approach heading margins stay 32/16px desktop and 20/12px mobile. These larger section gaps and smaller item titles already provide clear grouping, so no extra spacing overrides were necessary.

The gray inline secondary lines preserve their markup, #8A8A8A color and inherited weight. They remain part of their H2 and follow its mobile size. Hero/Contact retain their separate rb-display-xl 88/64/44 scale, line height, tracking and two-tone treatment. Body remains 18px/400/1.6, project/service metadata 16px; no body settings were changed.

### Actual screenshot evidence
- [Before, 390](verification/2026-11-17-heading-before-390.jpg)
- [After, 390](verification/2026-11-17-heading-after-390.jpg)
- [After, 320](verification/2026-11-17-heading-after-320.jpg)
- [After, 1440](verification/2026-11-17-heading-after-1440.jpg)
- [Five-width computed measurements](verification/2026-11-17-heading-measurements.json)

These are actual Services → Selected Work excerpts, not regenerated mockups. An existing admin-only assistant bubble/pointer highlight appears in captures and is not part of the typography change. A desktop before capture intersected the admin toolbar and was excluded from repository evidence; the clean mobile before/after pair is retained. Browser emulation was used; physical-device testing was not performed. Tablet rendering was also visually inspected; no tablet screenshot artifact is claimed.

Anonymous public root freshly returned HTTP200 with Coming Soon 5858 and its expected headline. Coming Soon visibility settings were not edited. Homepage was not launched.

## Git and persistence

This focused branch stacks on PR #12 (`4b956f800afc5bc0d8971aae27209d3832cc6728`) so the latest Services-list and portfolio work is preserved; no open PR was merged. Git stores documentation, sanitized native mutation records and screenshots. It does not deploy the WordPress database. No portable Elementor export was produced.
Audit/rollback: [native changes and consumers](implementation/2026-11-17-heading-hierarchy.json). Undo revisions returned by native tools: component 6010 →6072; 6013 →6069; 6019 →6075; Home →6077. Restoring a revision replaces subsequent changes, so inspect current state before rollback.
