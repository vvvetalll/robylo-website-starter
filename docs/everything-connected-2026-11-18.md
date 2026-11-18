# Everything Connected — implementation and owner review
Date: 2026-11-18 (America/Chicago). Contributor: ChatGPT/Codex.

Current visualization: BUSINESS-centered infographic; see the owner-requested correction at the end. Earlier four-rectangle records/captures below are retained as history.

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

## Owner-requested correction — BUSINESS-centered infographic, 2026-11-18

**Supersedes the original diagram description and captures above.** The owner rejected the four bordered rectangles as visually unrelated buttons. Only diagram993e1f7 and its two existing classes were refined; the section headline, lead, eyebrow, outcomes, editorial columns, Hero and all other sections remain unchanged.

### Visual result and native settings
- Added one visually dominant black BUSINESS circle: container62d16689 + text7145e957;104px desktop/tablet,88px mobile;14px Manrope700 white label. It is static content, not another button.
- Existing four linked capability nodes retain their IDs and #services destinations. Removed their rectangular borders/backgrounds. They now read as text labels around a central business rather than four cards.
- Desktop/tablet: cardinal layout, Website above, LocalSEO left, Advertising right, Automation below;280px-high diagram. Four1px gray spokes meet the circle exactly.
- Mobile: a separate240px-high composition. Four labels occupy the corners around central BUSINESS; four L-shaped branches join the circle's left/right center. This avoids the very short right-hand spoke a reduced desktop layout produced at320px. Surrounding labels remain14px/600. All connections are visible in default rb-mute; no label overlaps the hub.
- Reused **rb-system-node g-2cfcaa4** and **rb-system-stem g-59f80bc** in place. Native relative/absolute layout, flex and side-border controls construct the lines. currentColor carries hover/focus highlight into the corresponding connection. Hover/focus raises that branch to z-index2 so another shared branch cannot paint over it; BUSINESS stays above at z-index3. Focus-visible retains2px black outline; no blur handler.
- Deleted obsolete shared rail5231240. Both existing classes still have four consumers in the current homepage tree; neither is unused, so neither was removed. No new global class, variable, component, typography-system change, custom CSS exception, JavaScript, asset or dependency.
- Saved and promoted to existing Home5894 behind Coming Soon, consistent with the owner's standing request to see review changes at the authenticated root. No PR merged/public launch.

### Verification and preservation
Native before/after audit119→120 nodes: added only62d16689/7145e957, removed only5231240. Changed IDs are confined to diagram993e1f7 and its capability labels/connections. No changes outside the diagram; compare [correction audit](everything-connected-business-audit-2026-11-18.json). Hero, section copy/outcomes, Services, Selected Work, Approach and Contact native trees remain identical. Header/Footer components and global typography/spacing tokens were not edited.

Actual Chrome render was visually inspected at1440,1024,768,390,320, including closeups of all five. Zero document horizontal overflow. Circle104/104/104/88/88px; labels16/16/16/14/14px; connection endpoint gaps below0.02px (rounding). Mobile branches remain about22px wide even at320; lines are not disconnected. CSS1px side borders can rasterize to0.667 CSSpx at the current display scaling.
Desktop pointer hover→press→release→leave: selected connection black, active cleared on release, default gray restored after leaving. Tab highlights corresponding line with visible2px focus; Enter preserves existing #services link navigation. Native links have standard Space page-scroll semantics, no disabled state. Repeated Automation clicks produced four nodes/no stuck active state. Physical mouse-cycle testing needed a fresh tab after the earlier debugging session timed out; final results were sampled in that fresh tab.
Actual390px touch emulation: tap/release follows #services, settled active0/hover0. Reduced-motion emulation shows no animations and0s transitions. Main carousel keyboard Next still advances to -336px and Previous Space reverses; five slides retained. Tests are browser emulation, not a physical-device or screen-reader certification.
Anonymous GET / remains200/ComingSoon5858 withoutHome5894. Temporary viewport/touch/media overrides cleared. Existing native anchor focus behavior and menu auto-close limitation remain unchanged.

### Current screenshots and QA
- [Diagram desktop1440](screenshots/everything-connected-2026-11-18/business-diagram-desktop-1440.jpg)
- [Diagram mobile390](screenshots/everything-connected-2026-11-18/business-diagram-mobile-390.jpg)
- [Full homepage desktop1440](screenshots/everything-connected-2026-11-18/business-full-desktop-1440.jpg)
- [Full homepage mobile390](screenshots/everything-connected-2026-11-18/business-full-mobile-390.jpg)
- [Measured geometry and interaction samples](everything-connected-business-qa-2026-11-18.json)

Admin toolbar/private account details are excluded from committed full-page captures. Existing authenticated-only assistant/cursor overlays may appear; these were not added to the website. This correction awaits owner visual review in PR15. WordPress remains the source of truth; records are not a portable native export. Pre-correction page undo6108 exists, but shared class restoration must also be reviewed separately; never roll back unrelated later edits.

## Mobile cross alignment — owner refinement, 2026-11-18
**Current mobile design supersedes the corner/L-branch composition above.** Owner approved the desktop cross as the visual direction and requested the same arrangement on mobile. Website is above BUSINESS, LocalSEO left, Advertising right, Automation below, with four straight visible spokes.

Only native responsive properties changed:
- Reused the same four anchors, four stems and BUSINESS node; no new/removed HTML, class, variable or dependency.
- rb-system-node retains all existing states; mobile gap becomes4px. rb-system-stem's obsolete mobile absolute/L-border variant removed so the native relative flex line is inherited.
- Cleared the old per-stem mobile insets and borders; mobile lines now use relative positioning, auto insets and zero borders. Horizontal stems remain1px high; vertical stems1px wide.
- Mobile circle80px (from88), same14px BUSINESS label; capability labels remain14px/600. Top/bottom regions120px wide; side regions calc(50% - 40px). Mobile diagram height stays240px. Section spacing, copy/outcomes and every other section stay unchanged. Desktop104px circle/280px diagram and all desktop element styles are byte-identical to before.
- At320px, shorter horizontal gaps preserve actual visible side spokes of roughly23px left/12px right, without tiny type or label collisions. Connections meet the hub within0.02px rounding and center error stays below0.01px.

Actual Chrome captures were visually inspected at1440,1024,768,390,320. No horizontal overflow. [Desktop](screenshots/everything-connected-2026-11-18/mobile-cross-1440.jpg), [390px](screenshots/everything-connected-2026-11-18/mobile-cross-390.jpg), [320px](screenshots/everything-connected-2026-11-18/mobile-cross-320.jpg). Existing authenticated assistant overlay may appear at the edge; it is not part of the diagram.

Fresh320px pointer hover/press/release/leave confirms black selected line and restoration to gray, no stuck active state. Tab gives2px visible focus and black corresponding line; Enter retains native #services navigation. Touch tap/release at320 settles with active0/hover0. Reduced-motion emulation:0s transitions. Repeated Automation clicks tested. Links have standard Space scrolling and no disabled states. No focus-blurring JavaScript introduced. [Measured checks](everything-connected-mobile-cross-qa-2026-11-18.json). Browser emulation only; physical device/screen-reader certification not performed.

Native audit120→120 nodes, identical types/tags/order/content/links. Only nine diagram elements' responsive styles differ; all their desktop styles are unchanged. Both reused classes still have four consumers; none was removed. No duplication or extra CSS location. Home5894 saved/promoted behind unchanged Coming Soon for authenticated owner review. Anonymous root200 still serves5858 and no5894. No PR merge. Existing diagram rollback begins at page revision6115; shared-class mobile settings must also be restored deliberately if rollback is requested.

## Outcomes typography refinement — owner request, 2026-11-18
**Supersedes all numbered/three-column outcome presentations above.** Current message is one native paragraph: “Get found. Win customers. Save time.” Periods provide rhythm; no numbers, dashes, dots, micro-labels, icons or added decoration.

Reused outcomes container57453cf6 and paragraph1e527e25. Removed only the other two paragraphs5e6454a2/4a4711a6. Paragraph now uses existing rb-item-title (24/22/20px,600), native rb-ink and line-height1.4. Nonbreaking spaces inside each phrase keep its words together while normal spaces between phrases allow natural wrapping. No manual line breaks or separate cards.

Container uses block flow instead of three grid columns; removed its border and padding. On desktop/tablet it aligns with the diagram column and centers the text beneath it; mobile uses full content width and left alignment. Removed the existing24px flex gap from parent32e0f3fc, whose two direct children are the unchanged editorial grid and outcomes. Outcome top margin8px now gives an actual8px diagram-to-outcome box gap. Diagram geometry, section outer spacing, headline/lead/eyebrow and every other section are unchanged.

Actual rendered inspection at1440/1024/768/390/320: no horizontal overflow; fonts24/22/22/20/20px at600. One line at1440 and1024; natural two-line wrapping at768,390,320. Mobile20px remains readable and does not use forced equal columns. All five captures visually inspected; final desktop/mobile captures reflect the final right-column alignment.
- [Desktop1440](screenshots/everything-connected-2026-11-18/outcomes-section-1440.jpg)
- [Mobile390](screenshots/everything-connected-2026-11-18/outcomes-section-390.jpg)
- [Mobile320](screenshots/everything-connected-2026-11-18/outcomes-section-320.jpg)
- [Audit and measured QA](everything-connected-outcomes-qa-2026-11-18.json)

Native audit120→118 nodes, no additions: only the two redundant outcome paragraphs removed. Changed only parent32e0f3fc gap, outcomes57453cf6 layout and paragraph1e527e25 content/class/type settings. BUSINESS diagram's complete tree remains identical; no global class definition/token/component/theme/JS/CSS file changed. Interaction handlers and focus behavior are unchanged; this static text edit required no new interaction logic.

Saved/promoted existingHome5894 behind active Coming Soon under the standing owner-review publication instruction. Anonymous root returns200/5858 and no5894. SamePR15 branch, no merge. Browser emulation, not a physical-device test. Pre-change page undo6121; inspect subsequent owner edits before whole-document restoration.

## Compact informational outcome pills — owner refinement, 2026-11-18
**Current treatment supersedes the oversized outcome sentence above.** Three static labels: Get found / Win customers / Save time. No punctuation, numbering, icons, borders, shadows or button behavior.

Native implementation:
- Reused outcomes57453cf6 and first text element1e527e25; added only two native e-paragraph elements15616841/2d1863ba. All render as ordinary span elements, without links, role=button, tabindex or interactions.
- One new scoped shared class **rb-outcome-label g-01beb91**, used by all3 labels. Existing typography/button classes cannot supply this informational treatment without changing their consumers, so they remain unchanged.
- Uses existing rb-font Manrope, rb-surface#F5F5F5, rb-ink and rb-radius4px. Weight500; font14px desktop/tablet,12px mobile; line-height1.5; padding6px10px desktop/tablet and6px8px mobile. Width fit-content, flex0 0 auto, cursor default, no state variants.
- Existing group switches to wrapping flex row, centered below the diagram. Gap8px desktop/tablet,6px mobile; existing diagram-to-group spacing8px preserved. No equal-width columns or full-container stretching.
- Cleared only the first outcome's obsolete rb-item-title class/local typography. No existing shared class or token changed; no new component, script, library, custom CSS file or exception. BUSINESS diagram and its interactive structure, section headline/lead and all unrelated sections remain untouched.

Actual browser inspection1440/1024/768/390/320 confirms one row at all widths, no horizontal overflow, content-driven widths and identical label heights. Desktop/tablet33px high, mobile30px; all three static spans have cursor default and no focusability. At320, the group is about255px wide inside the available content, retaining12px typography rather than shrinking further.
Screenshots visually inspected:
- [Desktop1440](screenshots/everything-connected-2026-11-18/pills-section-1440.jpg)
- [Mobile390](screenshots/everything-connected-2026-11-18/pills-section-390.jpg)
- [Mobile320](screenshots/everything-connected-2026-11-18/pills-section-320.jpg)
- [Measured QA and structural audit](everything-connected-pills-qa-2026-11-18.json)

Native audit118→120 nodes: added only the two labels, changed only outcomes57453cf6 and first text1e527e25. No removed nodes and no diagram/other section changes. Labels have no hover, focus or click handlers, so interactive-component tests are not applicable to them. Existing diagram handlers and styles were not edited. Browser viewport emulation, not a physical-device certification.

Home5894 saved/promoted behind unchanged Coming Soon for authenticated owner review under the existing instruction. Anonymous root200 still serves5858 without5894. SamePR15, no merge/public launch. WordPress configuration remains database-held; documentation is not a portable export. Pre-change page undo6128; if rolled back, inspect later edits and remove the new class only after confirming no remaining consumers.

## Integrated transition strip — owner refinement, 2026-11-18
**Current treatment supersedes the separated pills above.** Three equal-width static segments now form one rb-surface#F5F5F5 strip at the bottom of Everything Connected, directly touching Services' gray background. No gutters between segments, rounded corners, icons, numbering, shadows or interactions.

Native changes:
- Reused outcomes57453cf6 and all three span labels; grid repeat(3,minmax(0,1fr)), gap0, full content-container width. At1440 the strip is1200px wide and each segment400px.
- Reused **rb-outcome-label g-01beb91** after confirming its three tracked consumers1e527e25/15616841/2d1863ba. Replaced obsolete fit-content/pill radius/flex sizing with full-cell flex centering and radius0. No duplicate class/component/token.
- Existing Manrope500 retained:14px desktop/tablet,12px mobile. Segment minimum44px desktop/tablet,36px mobile. Padding10px12px desktop;9px0px mobile so the longest label remains readable at320.
- Added native left borders only to the second and third labels15616841/2d1863ba:1px rb-line, no outer border. Existing spans remain noninteractive with default cursor, no links/tabindex/handlers/state variants.
- To place the strip flush against Services without negative margins/overlap, only this section7d73938f's local bottom padding becomes0. The previous80/64/48px bottom rhythm is reused as the strip's top margin at desktop/tablet/mobile. Global rb-section, spacing tokens and Services settings are untouched. No JavaScript, custom CSS file, page CSS or dependency.
- Headline, description, BUSINESS diagram tree/interactions, Hero and every other section remain unchanged.

Actual rendered section+Services transition was visually inspected at1440/1024/768/390/320. Segment widths equal within0.02px rounding, same row/heights, no text/page overflow. Strip left edge and width exactly match content container; Services top minus strip bottom is0px at every width. Backgrounds match; dividers distinguish the labels without separate cards. At320 each segment about88px with12px text and36px height. No overlaps or negative margins.
- [Desktop transition1440](screenshots/everything-connected-2026-11-18/transition-1440.jpg)
- [Mobile transition390](screenshots/everything-connected-2026-11-18/transition-390.jpg)
- [Mobile transition320](screenshots/everything-connected-2026-11-18/transition-320.jpg)
- [Measured QA and audit](everything-connected-transition-qa-2026-11-18.json)

Native audit120→120 nodes, identical IDs/types/tags/child order/content/destinations. Only section7d73938f local padding, strip57453cf6 layout and two labels' divider styles changed. Native local-style references were added to those labels; all changes remain within the authorized section. Shared label-class geometry refined in place; no global section-style edit. Static labels have no interaction test surface; existing diagram behavior was not changed. Browser emulation, not physical-device certification.

Home5894 saved/promoted behind unchanged Coming Soon for authenticated owner review under the existing instruction. Anonymous root200 serves5858 without5894. SamePR15, no merge or public launch. Pre-change page undo6131; review subsequent edits before restoration and handle the shared label class separately.
