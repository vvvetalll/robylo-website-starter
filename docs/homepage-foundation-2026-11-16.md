# Homepage section foundation — 2026-11-16

Collaborator: ChatGPT/Codex through the authorized Elementor connector.
Status: **Implemented as an unpublished draft; browser-verified; awaiting owner visual review.**

## Approval and scope

The owner approved the three Atomic Lab variants without changes. PR #2 was conflict-free and unchanged at reviewed head 1d9a039a6ec1ebdd93226a6e486a6081956111d3; merged as [0a3d8f8](https://github.com/vvvetalll/robylo-website-starter/commit/0a3d8f88f7710531088b84f8e9407e309d9a00c4). See [decisions.md](decisions.md).

Read the latest README, AGENTS, AI-CONTEXT, implementation/verification/decision records, approved section documentation and Claude's homepage handoff. Used the handoff's four body-section roles only. The owner authorized preparing the basic structure/background arrangement, not Claude's entire proposal.

## Exact Elementor changes

Target: existing homepage **5894**, existing Base page wrapper **1abcec4**, Main content **1117679b**.

Replaced only the main container's two old component instances (5452fa5d and 60caf102) in the draft. Original published content is preserved; pre-change undo revision **5953** records the previous page state. No publish action was called.

| Order / role | Background | Wrapper ID | Base Section instance |
| --- | --- | --- | --- |
| 1. Hero | Light / rb-paper #FFFFFF | 3e24b183 | 640d7746 |
| 2. Services | Soft / rb-surface #F5F5F5 | 52f70841 | 6e5276b8 |
| 3. Selected Work | Light / rb-paper #FFFFFF | 5635dbc7 | 621272f1 |
| 4. Contact | Dark / rb-ink #000000 | 2983f565 | 189aee9b |

Every instance references unchanged **Base Section 5869**, nesting existing Heading and text 5877 and Primary button 5864. Each wrapper has native padding 0/min-width 0. Services uses existing rb-section--soft; Contact uses existing rb-section--dark. Light uses the default. **No new class, variable, component, custom CSS or dependency.**

Per-instance overrides only:

- Heading: role label above; Hero uses H1, other sections H2.
- Description: “Section foundation only. Content and layout will be developed after visual approval.”
- CTA: “Foundation reference”, linking to https://robylo.com/atomic-lab/ using the existing native link property.

These labels, descriptions and reference CTAs are explicit review placeholders, not approved marketing content or final homepage actions. The complete “Good business. Hard to find?” hero, services rows, case study, contact component and detailed layouts are not implemented.

## Rhythm and preserved foundation

Proposed arrangement: **White → Light Gray → White → Black**. It uses all approved variants, separates Services from Work and gives Contact a contrasting end section. The arrangement itself awaits review.

Preserved full existing Base Section padding, including top and bottom; did not implement Claude's proposed flush-top spacing, new corners, text-link action, logo/navigation changes or other unapproved refinements. Each section retains the container/measure/gap system and existing Manrope responsive defaults. Hero paragraph remains the base 18px placeholder style; a final hero treatment is not part of this task.

Header 5892, Footer 5893 and Coming Soon 5858 were not edited. Their before/after element trees match. Global variable and class inventories match, including original ordering. The published two-section homepage remains intact; anonymous visitors continue to see Coming Soon.

## Verification

Actual authenticated Chrome WordPress draft preview; browser viewport emulation, not physical devices.

| Viewport | H1 / H2 | Section vertical padding / horizontal gutter | Horizontal overflow |
| --- | --- | --- | --- |
| 1440px | 72 / 48px | 100.8 / 48px | None |
| 1024px | 56 / 40px | 71.68 / 40.96px | None |
| 768px | 56 / 40px | 56 / 30.72px | None |
| 390px | 40 / 32px | 56 / 20px | None |
| 320px | 40 / 32px | 56 / 20px | None |

- Four semantic sections, one H1 and three H2s, in the stated order at every tested width.
- Expected backgrounds #FFFFFF / #F5F5F5 / #FFFFFF / #000000. Black headings on Light/Soft and white heading/body on Dark.
- Sections cover the content width and meet consecutively with no extra wrapper gap (rounding tolerance under 1px).
- Manrope body remains 18px; original typography/breakpoints and section padding retained.
- Existing Header/Footer remain visible and retain their responsive behavior.
- Anonymous homepage: HTTP 200; Coming Soon copy present; draft placeholder sentence absent.
- Visual review of actual desktop/mobile screenshots completed. No claim of final content, performance, full accessibility or launch readiness.

## Screenshots and review

- [Desktop — 1440px viewport](verification/2026-11-16-homepage-foundation-desktop-1440.jpg)
- [Mobile — 390px viewport](verification/2026-11-16-homepage-foundation-mobile-390.jpg)
- [Elementor editor — page 5894](https://robylo.com/wp-admin/post.php?post=5894&action=elementor)

Log in as an editor and use **Preview Changes** from Elementor to see the unpublished draft. The connector-generated signed preview displayed the older published content; the editor-generated WordPress draft preview correctly showed the four saved sections. Do not publish merely to obtain a screenshot. No expiring preview token/nonce is committed.

Screenshots include the unchanged Header/Footer and complete draft content. Administration toolbar is cropped out; widths may exclude the scrollbar (about 1425/375px). The purple assistant bubble and highlighted pointer are editor/browser overlays, not design elements.

## Remaining work / rollback

Stop here for owner visual review. Approval of these section backgrounds does not approve the full homepage proposal, content, individual components or launch. Native portable exports remain unavailable; this is documentation, not an importable Elementor package.

To revert this draft, inspect current edits first, then restore only this task's page changes (undo revision 5953 is the previous page state). A full restore discards later edits, so do not use it if another contributor has changed the page. Do not change the Header/Footer, Coming Soon or shared components as part of rollback.
