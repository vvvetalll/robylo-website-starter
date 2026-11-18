# Everything Connected — implementation and owner review
Date: 2026-11-18 (America/Chicago). Contributor: ChatGPT/Codex.

## Scope and delivery
**Approved:** owner's Everything Connected brief replaces only the Hero's small website-preview strip. It does not approve a public launch or PR merge. Prior explicit owner instruction to publish review changes behind Coming Soon remains applicable: saved Homepage5894 was promoted so the owner can see it at the ordinary authenticated root. **Public gate remains active.** Anonymous GET / returns200/ComingSoon5858 and no new headline. No Header, Footer, Lab, Coming Soon page, existing component or main carousel definition changed.

Open [ROBYLO while logged into WordPress](https://robylo.com/) or [Home editor](https://robylo.com/wp-admin/post.php?post=5894&action=elementor).
Screenshots: [desktop section](screenshots/everything-connected-2026-11-18/desktop-1440.jpg), [mobile section](screenshots/everything-connected-2026-11-18/mobile-390.jpg), [desktop in context](screenshots/everything-connected-2026-11-18/context-desktop-1440.jpg), [mobile in context](screenshots/everything-connected-2026-11-18/context-mobile-390.jpg). Authenticated screenshots omit the admin toolbar; existing admin assistant/cursor overlays may remain.

## Native Atomic implementation
New section7d73938f / #everything-connected is Main1117679b's second child, immediately after Hero239c5c36. Existing rb-section, l-container, rb-section-title, rb-hero__eyebrow, rb-hero__subtitle and rb-meta are reused unchanged. Existing tokens and approved [permanent visual standard](ROBYLO-CONCEPT.md#permanent-visual-quality-standard--owner-direction-2026-11-18) govern its typography and proportions.

Desktop/tablet: text and diagram in two equal columns, centered vertically; desktop64px gap/tablet32px. Mobile: one column with24px gap and a compact two-by-two system. All four nodes are linked through a shared rail, with individual stems. Labels remain actual text, not an image. Three numbered outcomes form a compact supporting row; numbers sit above labels to avoid cramped inline wrapping. Exact supplied copy retained.

Only two new global classes, both specific to the new diagram:
- **rb-system-node g-2cfcaa4**: native linked container; white,1px rb-line border, rb-radius4px, min-height72 desktop/tablet and56 mobile. Existing rb-meta label is black/600,16px desktop/tablet and14 mobile. Hover/focus darken its border and inherited stem color; focus-visible adds2px black outline offset4; press uses rb-line background. Four native anchors go to existing #services, a real destination. No fake toggle state.
- **rb-system-stem g-59f80bc**: native decorative1px by17px line, absolute center, currentColor. Top nodes connect down, bottom nodes up. Shared rail5231240 uses native absolute geometry: left calc(25% - 8px), width calc(50% + 16px), top50%, height1px. This compensates for the32px grid gap.

Node IDs: Website7f48d571, LocalSEO742cb473, Advertising3e001470, Automation4b59072c. Diagram993e1f7, editorial grid1b75e559, container32e0f3fc, outcomes57453cf6.
No JavaScript, libraries, animations, transitions, assets, new variables, duplicated component or external/page/theme CSS added. Native state controls plus currentColor inheritance provide the required highlight; **no custom CSS exception required**.

Old Hero strip5e5ef0c7 and its15 descendants were removed only after actual replacement captures passed desktop/mobile inspection. Hero copy/actions remain; its bottom padding becomes48px desktop,40 tablet,32 mobile to fit the replacement. Main Work carousel063712a/#work and its five placeholders, captions, links, controls and handlers remain unchanged.

## Structural verification
Complete native before tree captured from Home5894; after tree captured from undo snapshot6107 and confirmed after promotion. Node count110→119:25 new section nodes,16 strip nodes removed. Only existing modified nodes: Main1117679b child order, Hero239c5c36 bottom padding, Hero container73b8bb4c removal of strip child. All other existing nodes/settings/styles/interactions are unchanged. [Structural audit](everything-connected-2026-11-18-audit.json).

Services native list/component structure is untouched; actual DOM retains12 LI children across four ULs at all widths. Main carousel retains5 slides; keyboard Next advances settled runtime track to -336px on mobile and Previous Space reverses. Existing native Menu Enter/Escape also works. No homepage rebuild.

## Actual browser verification
Chrome with WordPress editor session; viewport emulation, not a physical device. [Measured results and pointer states](everything-connected-2026-11-18-qa.json).

| Viewport | Section H2 | Diagram labels | Node min height | Horizontal overflow |
|---|---|---|---|---|
|1440|44px|16px|72px|None|
|1024|36px|16px|72px|None|
|768|36px|16px|72px|None|
|390|30px|14px|56px|None|
|320|30px|14px|56px|None|

All Manrope400/500/600/700 font checks pass. Actual rendered section height about550px at390 and572px at320, including bottom spacing. Classic scrollbar can reduce layout width by15px; the QA's negative overflow value reflects that, not clipping.
- Pointer default→hover→press→release→leave: border/stem gray→black, press background gray, active clears on release; pointer leave restores default.
- Native Tab navigation gives visible2px outline and a black corresponding stem. Enter follows #services; the existing native anchor navigation moves focus away from the link with the section jump. No blur handler or keyboard-focus suppression introduced. Space retains standard link/page-scroll semantics.
- Touch tap/release follows #services; settled nodes have no active or sticky hover state. Repeated Advertising activations leave exactly4 nodes, no stuck active state.
- Reduced-motion emulation: zero animations and0s transitions; diagram remains fully understandable without hover/movement. Overrides reset.
- Disabled-state cycling is not applicable to these ordinary service anchors; no invented disabled state. Existing carousel's disabled behavior was not changed.
- Confirmed actual ordinary authenticated root after publication: new heading present, old strip absent,5 main slides. Anonymous root still Coming Soon.

Limits: not a screen-reader certification or physical-phone test. Existing native menu anchor auto-close limitation remains unrelated and unchanged. Existing sitewide anchor focus behavior is documented above. No public launch, unrelated PR merge or other section work.

## GitHub dependency, persistence and rollback
Dedicated branch stacks on PR11's current head4bfa4ce, targeting that branch so the diff contains only this feature. PR14 contains a separate unapproved impact exploration; it was reviewed, not merged or implemented. PR12/13 remain separate; no contributor changes overwritten.

WordPress is the source of truth; GitHub holds records/screenshots and sanitized audit, not a portable Elementor export. Review/merge does not deploy database configuration.
Pre-feature undo revision6101; pre-strip-removal6105. Restoration replaces the whole document, so inspect later owner edits before using it. Prefer surgical rollback of section7d73938f and the two now-unconsumed diagram classes, with a verified strip restoration if requested.
