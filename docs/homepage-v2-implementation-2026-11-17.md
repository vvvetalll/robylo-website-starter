# Homepage V2 — private Elementor implementation
Date: 2026-11-17 (America/Chicago). Status: implemented for owner review; not approved for launch.

## Review the actual page
Open [Home 5894 in Elementor](https://robylo.com/wp-admin/post.php?post=5894&action=elementor), then **Preview Changes**. The V2 body is saved in Elementor's staged autosave, not promoted to the published Home. The ordinary public root still serves Coming Soon 5858. Preview URLs contain authentication nonces; they are deliberately omitted here.
Actual screenshots:
- [Desktop, 1440](verification/2026-11-17-homepage-v2-desktop-1440.jpg)
- [Mobile, 390](verification/2026-11-17-homepage-v2-mobile-390.jpg)
- [Native mobile menu](verification/2026-11-17-homepage-v2-menu-390.jpg)

## Approval and dependencies
The owner explicitly approved Claude's V2 direction, including muted gray, typography refinements, Header/Footer redesign, in the implementation request. Baseline: design PR #8, commit `37ef6a05bbf7b57c293792edbf36fc306d6ab861`; full handoff, HTML source and three mockups were read and inspected.
This implementation branch starts at that exact design head; its PR targets the design branch to keep the implementation diff focused. No existing PR was merged. PRs #3–#7 document earlier database work; their merge state is not proof of the current site state. Reconcile those independently before merging to main.

## Actual implementation
Native Atomic elements in existing Home 5894 / Main 1117679b:
1. White Hero: two-tone display heading, 8+4 aligned supporting text, two actions, five grayscale linked thumbnails.
2. Soft Services: shared section heading and four structured service component instances.
3. White Selected Work: Chicago desktop+phone feature, then alternating 7+5 / 5+7 project tiles, all five owner-provided destinations.
4. Soft Approach: shared heading, three component instances in equal desktop columns.
5. Dark Contact: muted/white display heading, right-aligned lead and two actions.
Existing Header 5892 / Footer 5893 still reference the same components 5886 / 5889, now updated in place. Shared components/classes are published to render the private preview; this is not a site launch and affects authenticated foundation previews using them. Coming Soon uses its own canvas and remains unchanged.

### Existing foundation reused
Kit 5744; Manrope 400/500/600/700; rb-ink, rb-paper, rb-text, rb-surface, rb-line, rb-hover; all spacing/container/radius tokens; l-container; rb-section and Light/Soft/Dark modifiers; existing button classes rb-btn, rb-btn--primary, rb-btn--outline, rb-btn--text, rb-btn--sm, rb-btn--inverse and rb-btn--glide.
Primary Button 5864 is reused throughout, with Glide only on the Hero and Contact primary actions. Its definition, existing hover/focus behavior and animation CSS were not changed. Base Section 5869 and Heading+Text 5877 were preserved; the V2 12-column composition requires a different internal structure, so no duplicate Base Section was created.

### Variables and global classes
Only new variable: **rb-mute #8A8A8A**, ID e-gv-799fb6d. All prior 20 variable values remain unchanged. It is used for large muted heading lines and small text on black; never for small gray body text on white.
New global classes (native kit, no duplicates):
| Class | ID | Responsibility |
|---|---|---|
| rb-display-xl | g-9858763 | Display 88/64/44px; 700; 1.02/1.04/1.06; -3.52/-2.56/-1.54px tracking |
| rb-heading-mute | g-96b4fcf | Block muted inline heading span |
| rb-grid-12 | g-48d317d | 12 columns / 24px; stacked mobile |
| rb-grid-main | g-de4c414 | Left 8-column spine |
| rb-grid-aside | g-b352eba | Right 4-column supporting text, stacked tablet/mobile |
| rb-mat | g-2e58a2a | Surface screenshot mat / radius / clipped image |
| rb-portfolio-thumb | g-ba034ce | Grayscale 16:10 thumbnail, cover top-left |
| rb-action-row | g-c3579fd | Action spacing and mobile stacking |
| rb-nav-link | g-403d4fb | 16px/500 navigation, 48px targets, hover/focus |
| rb-meta | g-d97ed86 | 16px/400/1.6 project metadata |
| rb-footer | g-665de29 | Continuous black footer shell and contextual link hover |
| rb-menu-row | g-f570396 | Fullscreen menu 40px rows / separators / focus |
| rb-service-scope | g-2e9f90b | Desktop scope separators, mobile stacked text |
Existing classes updated in place: rb-header g-93bb252, rb-header__inner g-18f5116, rb-header__toggle g-ca8e57d, rb-section--dark g-216e3c8. Dark gains only muted-span and supporting-lead color rules. Original button classes remain unchanged.
Semantic H1–H4 defaults stay intact; the refined display is applied only to V2 Hero/Contact. Tablet display tracking uses equivalent px values after native conversion of inherited em values produced the wrong rendered result.
Shell gutters are centralized in header/footer classes. Native layout values live in their component definitions; there is no page Custom CSS, WordPress Additional CSS, theme edit, new script or new dependency.

### Components
Four reusable compositions were missing and created once, with native exposed per-instance content:
- [Section head 6010](https://robylo.com/wp-admin/post.php?post=6010&action=elementor): heading and lead; one combined heading property contains the inline muted span.
- [Service row 6013](https://robylo.com/wp-admin/post.php?post=6013&action=elementor): title, description, three scope items. Native parent borders distinguish first/last rows.
- [Project tile 6016](https://robylo.com/wp-admin/post.php?post=6016&action=elementor): image, name, descriptor, link label/destination; reuses Button 5864.
- [Approach step 6019](https://robylo.com/wp-admin/post.php?post=6019&action=elementor): label, statement, body.
Updated existing [Header component 5886](https://robylo.com/wp-admin/post.php?post=5886&action=elementor) and [Footer component 5889](https://robylo.com/wp-admin/post.php?post=5889&action=elementor); UIDs preserved.
[Mobile navigation 5996](https://robylo.com/wp-admin/post.php?post=5996&action=elementor) is a native Popup, not a duplicate Header. [Editor-authenticated popup preview](https://robylo.com/?elementor_library=robylo-mobile-navigation-v2&preview=1&theme_template_id=5996).

### Logo and project assets
Header uses unchanged original PNG attachment 5972; native object-fit crops surrounding whitespace only. Footer/menu use the existing official white SVG attachment 2301, not the recreated logo images in the mockup.
Imported the genuine project captures already supplied with approved V2 source: attachments 5990–5994 (1372×857) and Chicago phone 5995 (482×930). Thumbnail strip is grayscale; Selected Work remains in color as designed. Higher resolution/format optimization is deferred to the owner-approved later visuals refinement.
Project destinations: chicagomounting.com, gcprochicago.com, kolo-properties.com, glenviewsmiles.com (Center For Dental Healing), elitemechanical.services. All are separate-tab links. Contact uses mailto:info@robylo.com.

## Native mobile menu — known limitation
Verified the installed Pro capabilities and actual editor. Off-Canvas is visible in the editor but unavailable to the connector's configurable widget schema. Native Popup can reproduce the fullscreen composition without custom JavaScript:
- 100vw, fit to screen, black, zero popup outer padding/margin.
- open_selector .rb-header__toggle; prevent_scroll yes; a11y_navigation yes.
- Only condition include/singular/page/5894; no automatic triggers or timing rules.
- Native serialized Popup Close action, Escape, and keyboard Enter opening work. Escape returns focus to Menu.
**Unresolved:** section anchors scroll the underlying page correctly but do not automatically close the Popup. Owner was informed; no improvised script or alternative behavior was introduced. This blocks claiming the complete proposed menu behavior.
Authenticated WordPress mobile admin bar adds 46px, so the 100vh popup footer email falls below the initial preview viewport and remains scrollable. Anonymous Home testing is intentionally gated; final menu behavior must be rechecked in launch staging without the admin toolbar.

## Verification and comparison
Actual desktop and full mobile captures were visually inspected against Claude's mockups: same section order, 8+4 spine, 1200px container, five thumbnails, four service rows, 7+5 alternating work grid, three-column Approach and continuous black Contact/Footer.
| Requested viewport | Layout width (classic scrollbar) | Display | Page horizontal overflow | Missing images |
|---|---:|---:|---|---:|
| 1440 | 1425 | 88px / 89.76px | No | 0 |
| 1024 | 1009 | 64px / 66.56px | No | 0 |
| 768 | 753 | 64px / 66.56px | No | 0 |
| 390 | 375 | 44px / 46.64px | No | 0 |
| 320 | 305 | 44px / 46.64px | No | 0 |
Five-width measurements preceded the final shell gutter corrections; final desktop/mobile were checked and captured after correction. The 15px classic scrollbar changes available content width versus Claude's captures; text wrapping can differ accordingly. At 320 the Hero wraps across more lines while retaining approved 44px size. Mobile thumbnail overflow is local/intentional (1208px scroll content); the page is not overflow-hidden to conceal errors.
Manrope document.fonts checks: 400,500,600,700 loaded. One H1. Four section IDs resolve. Actual See our work click scrolls to #work. All five external destinations return HTTP 200 with unchanged final URLs. Hero hover renders existing #333 state and native Glide pseudo-elements; keyboard focus renders 2px visible outline and advances to secondary link. Popup Enter/Escape and focus return tested; full assistive-technology and physical touch-device testing not performed.
Public anonymous root returns HTTP 200, contains Coming Soon page 5858 and its headline, and contains no V2 Hero. Lean element-tree comparisons for 5858, Lab 5776 and Styleguide 5774 are byte-identical to the pre-task snapshots.

### Differences / remaining review
- Native menu anchor auto-close remains unresolved (above); no new JavaScript.
- Footer navigation retains 48px accessible click targets and therefore runs taller than the compact mockup.
- Combined rich-text heading override rather than independent inline-line properties.
- Existing admin-only assistant bubble appears in authenticated captures; it is not a new design element.
- Privacy Policy stays omitted because there is no real destination.
- No new claims, metrics or testimonials. Mockup copy is used verbatim.
- Owner visual approval of the implemented page and launch authorization are still pending.

## Persistence, portability and rollback
The actual page autosave, component definitions, active kit/defaults, Popup display settings, media IDs and Header/Footer assignment remain WordPress-database state. GitHub stores documentation, screenshots and a sanitized implementation recipe; merging this PR does not deploy Elementor changes. No official portable Elementor kit/template export was produced. The recipe is an audit/reconstruction aid tied to these IDs, not a one-click import.
Home pre-V2 undo revision: 6027; it stages restoration through manage-revisions. Header pre-task undo 6025; Footer pre-task undo 5942. Verify revision existence before any rollback, then promote only the intended restored document/component. Do not roll back unrelated owner edits.
