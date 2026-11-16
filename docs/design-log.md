# Design log

Maintained by Claude (design). Newest entry first. This file keeps the design process: what was explored, what was dropped and why, and what is currently recommended. It is a history, not an approval record. Approvals live in [decisions.md](decisions.md).

Statuses used here: **Current proposal** (recommended, awaiting owner approval), **Exploration** (earlier work, kept for reference), **Rejected** (dropped, with the reason).

## Current recommended design

**Homepage proposal, 2026-11-16 — Current proposal, not approved.**
Specification: [design-homepage-handoff-2026-11-16.md](design-homepage-handoff-2026-11-16.md).
Mockups: [desktop 1440](design/2026-11-16-homepage-proposal-desktop-1440.png), [mobile 390](design/2026-11-16-homepage-proposal-mobile-390.png).

## Open questions

- Owner approval of the homepage proposal and of its five foundation changes (radius 4px, logo image in header, navigation in header, text-link secondary action, single gap between sections).
- Verified Chicago Mounting results, the client's permission to be shown, and confirmation of the case description.
- Two additional projects (names, screenshots, permissions), or removal of the preview row at launch.
- Footer email and phone. Logo as SVG.
- Open state of the mobile menu is not designed.
- Optional mobile type tweak raised by Claude and not adopted: H3 26 → 24 and H4 22 → 20, because 26 / 22 / 18 are close together. The foundation keeps 26 / 22.

---

## 2026-11-16 — Iteration 3: homepage proposal on the built foundation

**Status: Current proposal.**

Input: owner's collaboration brief (Manrope, monochrome, and the minimalist direction are approved; do not restart), the visual handoff package from ChatGPT Work, and the original logo.

What changed from iteration 2:

- Inter replaced by Manrope with the foundation's exact scale, weights, line heights, and tracking.
- Colors, container, gutter, and section spacing taken from the existing `rb-*` variables instead of mockup-only values.
- Original logo image used in header and footer instead of a typed wordmark.
- Secondary actions became underlined text links, following the owner's typography sample. The outline button from iteration 2 was dropped, so the page has one button style.
- Contact section moved from a gray band to white with a single top rule, because the built footer already uses the gray surface and two gray blocks in a row merged visually.
- Footer extended with logo, contact lines, navigation, and privacy link, keeping the existing message and surface.
- Mobile section spacing follows `rb-section-space` (56px at 390) instead of the 72px drawn first.

Decisions made by Claude in this iteration, all still Proposed:

| Decision | Reason |
| --- | --- |
| No hero image | The Chicago Mounting screenshot is the only visual on the page, so the eye goes to the proof. |
| Services as rows with hairlines, no icons or numbers | Readable, quick to build, and consistent with the brief's ban on cards and technical-looking decoration. |
| Featured case keeps its real colors | One colored element on a monochrome page reads as evidence, not decoration. |
| No homepage form | One button to the Contact page keeps the section short. |
| 4px radius | The owner's brief asked for subtle rounding and the typography sample shows it; the built foundation has 0px. Needs a recorded decision. |

Checks run: both mockups rendered in headless Chrome at 1440 and 390 CSS px with locally installed Manrope; document scroll width equaled viewport width at both sizes; visual review of the full-page captures. Not checked: anything in WordPress or Elementor.

## 2026-11-16 — Iteration 2: simplified Concept A (Inter)

**Status: Exploration, superseded by iteration 3.**
Mockups: [desktop](design/2026-11-16-exploration-simplified-inter-desktop-1440.jpg), [mobile](design/2026-11-16-exploration-simplified-inter-mobile-390.jpg).

Input: owner's "Simplify and Refine" brief. Concept A as the starting point, simplified significantly; one sans-serif family; rectangular buttons with subtle rounding; no diagrams, numbering, labels, oversized type, or experimental layouts; real screenshots as the main visual. The brief fixed the structure and most of the copy: header, hero "Good business. Hard to find?", "What we do" with five services, Selected Work led by Chicago Mounting, contact "Let's grow your business.", footer.

What was established here and carried forward: the six-block structure, the service descriptions, the two-column case layout, a real Chicago Mounting screenshot, and separately designed desktop and mobile layouts.

Superseded because the owner then approved Manrope and ChatGPT Work built the foundation with its own variables; see iteration 3.

## 2026-11-16 — Iteration 1: three concepts

**Status: Exploration.** The owner selected Concept A as the base and asked for it to be simplified. B and C were not continued.

Input: the first creative brief in [ROBYLO-CONCEPT.md](ROBYLO-CONCEPT.md): three genuinely different monochrome directions, distinctive buttons, editorial and asymmetric layouts, geometric accents.

| Concept | Idea | Mockups | Outcome |
| --- | --- | --- | --- |
| A — Editorial Minimalism | White ground, large grotesque with a serif italic accent, side labels, services as ruled rows | [desktop](design/2026-11-16-exploration-concept-a-desktop-1440.jpg), [mobile](design/2026-11-16-exploration-concept-a-mobile-390.jpg) | Chosen as the base, then simplified |
| B — Modern Experimental | Black hero with very large type, the problem told as staggered owner quotes, three circles for Build / Get found / Grow, pill buttons with a detached arrow circle | [desktop](design/2026-11-16-exploration-concept-b-desktop-1440.jpg), [mobile](design/2026-11-16-exploration-concept-b-mobile-390.jpg) | Not continued |
| C — Architectural Monochrome | Visible grid of black rules, uppercase headings, services drawn as building levels on a foundation, case shown as a spec sheet | [desktop](design/2026-11-16-exploration-concept-c-desktop-1440.jpg), [mobile](design/2026-11-16-exploration-concept-c-mobile-390.jpg) | Not continued |

Claude's recommendation at the time was A as the base plus the quote section from B and the levels diagram from C. The owner rejected a hybrid.

What survived from this round: left-aligned layout, services as ruled rows (from A), and the headline "Good business. Hard to find?" (written for B, then adopted by the owner for the final hero).

## Rejected ideas

| Idea | Where it appeared | Why it was dropped |
| --- | --- | --- |
| Hybrid of A, B, and C | Claude's recommendation after iteration 1 | Owner: do not combine the concepts into a complicated hybrid. |
| Serif italic accent words | Concept A | Owner: one sans-serif family. |
| Numbered sections and uppercase side labels ("01 — The problem") | Concepts A and C | Owner: no excessive numbering, labels, or technical-looking decoration. |
| Found / Trusted / Chosen dot indicator, three-circle diagram, building-levels diagram, plan drawing | Concepts A, B, C | Owner: no decorative diagrams or abstract illustrations. |
| Very large display type (up to about 190px) and outlined text | Concept B | Owner: no oversized typography that hurts readability. |
| Split buttons, pill with one square corner, round call-to-action, arrow-in-a-cell buttons | Concepts A, B, C | Owner: simple rectangular buttons with subtle rounded corners. |
| Visible full-page grid lines and cell layout | Concept C | Owner: minimal borders and dividers. |
| Separate "problem" section | All three concepts | Not part of the owner's simplified structure; the hero headline now carries that message. |
| Placeholder metric rings and timeline graphics in the case study | Concepts A, B, C | No verified data exists; empty indicators add decoration without proof. |
| Black contact section | Concept A | Would need an inverse button variant; the simplified design stays white. |
| Gray contact band | Iteration 2 | Sat directly on the gray footer in the built foundation. |
| Outline secondary button | Iteration 2 | Replaced by a text link so there is one button style. |
| Inter | Iteration 2 | Owner approved Manrope. |

## Notes for future entries

Add a dated section at the top for each meaningful checkpoint: input, what changed, status, mockup links, checks run. Move the previous "current" entry down as an exploration and update the pointer at the top. Put dropped ideas in the rejected table with a one-line reason. Images go in `docs/design/` with a date prefix; only sanitized captures.
