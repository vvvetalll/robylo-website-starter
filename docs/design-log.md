# Design log

Maintained by Claude (design). Newest entry first. This file keeps the design process: what was explored, what was dropped and why, and what is currently recommended. It is a history, not an approval record. Approvals live in [decisions.md](decisions.md).

Statuses used here: **Current proposal** (recommended, awaiting owner approval), **Exploration** (earlier work, kept for reference), **Rejected** (dropped, with the reason).


## 2026-11-19 — Specifications recovered into GitHub

Claude committed the complete specifications that existed only as Claude Docs: [Services](design-services-page-2026-11-19.md) (direction approved, 8 confirmations open), [Website Design & Development](design-service-web-design-2026-11-19.md) (Proposed, 9 confirmations open), [About](design-about-page-2026-11-19.md) (owner copy approved and staged; Claude concept historical), and the [service-page template](design-service-pages-architecture-2026-11-19.md) (Proposed). It also added the superseded homepage [copy review](design-homepage-copy-review-2026-11-18.md) from PR #14, the superseded September [theme architecture](theme-architecture-2026-09-17-superseded.md), a [design-system index](design-system-index-2026-11-19.md) and a [specs index](design-specs-index.md). From now on, specs are committed before implementation (AGENTS.md).

## 2026-11-18 — Owner-approved final homepage copy implemented
ChatGPT/Codex implemented the supplied final copy, Chicago/suburbs positioning and direct-implementer message. Content only; original Hero/contact headlines, circular diagram, six Studio Plates, native carousel and Atomic styling preserved. Six external project actions now say “Visit site.” **Approved scope / Implemented / Verified in Chrome**; no redesign or public launch. Owner copy supersedes differing recommendations in Claude's copy analysis, which was reviewed on its design branch. [Exact approved copy](ROBYLO-CONCEPT.md#approved-homepage-positioning-and-final-copy--2026-11-18), [implementation and screenshots](verification.md#2026-11-18--approved-homepage-copy-and-chicago-positioning).

## 2026-11-18 — Approved Studio Plate v3 produced for all five projects

ChatGPT/Codex implemented the owner's all-five production request using unchanged Chicago v3 geometry and genuine live desktop/mobile captures. Four new asset pairs are integrated in native Elementor; Chicago remains unchanged. All five cards visually checked at1440/1024/768/390/320, links and carousel interactions tested. [Assets/contact sheets](design/2026-11-18-portfolio-studio-plates/), [actual site verification](horizontal-portfolio-prototype-2026-11-17.md#all-five-studio-plates--2026-11-18), [approved production process](portfolio-image-guidelines.md). Status: **Approved scope / Implemented / Verified in Chrome**, Coming Soon retained, no merge. Older proposal statuses below are historical.

## Current recommended design

**Homepage V2, 2026-11-16 — Current proposal, not approved.**
Specification and rationale: [design-homepage-v2-handoff-2026-11-16.md](design-homepage-v2-handoff-2026-11-16.md).
Mockups: [desktop 1440](design/2026-11-16-homepage-v2-desktop-1440.png), [desktop first screen](design/2026-11-16-homepage-v2-desktop-1440-first-screen.png), [mobile 390](design/2026-11-16-homepage-v2-mobile-390.png), [mobile menu open](design/2026-11-16-homepage-v2-mobile-390-menu-open.png). Source: [design/2026-11-16-homepage-v2-source/](design/2026-11-16-homepage-v2-source/index.html).

The iteration 3 proposal ([handoff](design-homepage-handoff-2026-11-16.md)) is kept below as an exploration.

**Impact section under the Hero, 2026-11-18 — Proposed exploration.** Three concepts replacing the thumbnail strip; Claude recommends A · Editorial Case. [Concepts, evaluation and recommendation](design-impact-section-concepts-2026-11-18.md).

## Open questions

- Owner approval of Homepage V2, including one new color variable (`rb-mute` #8A8A8A), the optional 88px display size, the new header and the dark footer.
- Mobile menu implementation path in Elementor (not verified by Claude).
- Confirmation of service scope items, project descriptors and towns, and that each client may be shown.
- Official white logo file and, if available, an SVG. Production screenshots at 2×.
- Privacy Policy page (link hidden until it exists).
- Impact section: owner choice of direction; Chicago Mounting start year, starting point, scope wording, any verified result with source, client permission; whether Chicago Mounting stays in the Work carousel.
- Still open from iteration 3: optional mobile type tweak H3 26 → 24 and H4 22 → 20. Not adopted.

---

## 2026-11-18 — Studio Plate v3: complete phone and deliberate mobile composition

ChatGPT/Codex, owner-authorized refinement of Chicago Mounting only. **Implemented as design artifacts; visual result Proposed.** The owner approved the Studio Plate direction, not v2 geometry or a production rollout. Added a thin dark phone outline with rounded corners, a subtle speaker/camera and a visible bottom edge. The desktop screenshot now has an inset bottom edge too. All capture content is reused unchanged.

The portrait preview is recomposed from those same captures, preserving the complete desktop width instead of v2's right-side crop. Tradeoff: an additional 1000 × 1250 mobile export; 4:5 card, complete phone, desktop hero/headline retained, some desktop pricing naturally covered by the overlap. The caption follows the permanent 20/12 mobile scale. No live carousel changes or finalized guidelines.

Evidence: [v3 specification and verification](design-studio-plate-chicago-mounting-2026-11-18.md#studio-plate-v3--visual-refinement-2026-11-18), [desktop](design/2026-11-18-studio-plate-chicago-mounting/v3/carousel-v3-desktop-1440.png), [mobile](design/2026-11-18-studio-plate-chicago-mounting/v3/carousel-v3-mobile-390.png), [v2/v3 plate comparison](design/2026-11-18-studio-plate-chicago-mounting/v3/comparison-v2-v3-plate.png), [v2/v3 mobile comparison](design/2026-11-18-studio-plate-chicago-mounting/v3/comparison-v2-v3-mobile.png). Local renders checked visually at 1440/1024/768/390/320; v2 preserved. Branch `design/studio-plate-v3-2026-11-18`; no WordPress change or merge.

## 2026-11-18 — Studio Plate prototype: Chicago Mounting

**Exploration, Proposed.** First real Studio Plate built from fresh public captures of chicagomounting.com: [plate 1600 × 1200](design/2026-11-18-studio-plate-chicago-mounting/robylo-work-chicago-mounting-plate.webp), [carousel desktop 1440](design/2026-11-18-studio-plate-chicago-mounting/2026-11-18-studio-plate-carousel-desktop-1440.png), [carousel mobile 390](design/2026-11-18-studio-plate-chicago-mounting/2026-11-18-studio-plate-carousel-mobile-390.png). [Specification and rationale](design-studio-plate-chicago-mounting-2026-11-18.md). Geometry changed from the research after testing: no shadow (owner brief), both screens bleed off the bottom, margins 80, mobile card crop 3:4 instead of 4:5 so the crop line avoids cutting the headline.

## 2026-11-18 — Portfolio visual presentation research

**Exploration, Proposed.** Research of 8 live studio portfolios (Apple, Locomotive, Clay, Metalab, Instrument, AREA 17, Fantasy, Halo Lab) on how website projects are presented in carousels. Recommendation: one "Studio plate" for all five projects — real desktop + phone screens on a flat neutral mat, fixed geometry, one caption grammar; mobile reuses the same image cropped to 4:5. Alternatives (single desktop screen, editorial crop, 3D device renders) evaluated and not recommended. [Research and specification](design-portfolio-presentation-research-2026-11-18.md). No mockup yet; no implementation authorized.

## 2026-11-18 — Big Picture refinement

**Status: Proposed.** Owner kept The Big Picture (philosophy) separate from What we do (services). Claude withdrew its suggestion to fold the block into Services and proposed refinements instead: a ring connecting the four directions, a lighter "Your business" center, no capitals, the outcome row as plain text, and a Services intro that no longer repeats the Big Picture message. [Proposal](design-big-picture-refinement-2026-11-18.md).

## 2026-11-18 — Iteration 5: Impact section concepts

**Status: Proposed exploration.**

Input: owner request to replace the five-thumbnail strip below the Hero with a section showing how ROBYLO helps a real business, explored as three concepts (Editorial Case, Data Story, Visual Journey), using Chicago Mounting, with no invented results.

Baseline read: `prototype/horizontal-portfolio-placeholders-2026-11-17` at `4bfa4ce`, including the new permanent visual quality standard (display 76/56/36, H2 44/36/30, H3 24/22/20).

| Decision | Reason |
| --- | --- |
| Draw each concept in context (Header, Hero, concept, top of Services) | Fit with the page is a judging criterion; isolated cards hide it. |
| Two placeholder markers: gray bracketed data, outlined Draft tag for ROBYLO scope copy | Keeps invented-looking content impossible to mistake for real copy. |
| Client's public Google rating not used | It is the client's reputation, not a ROBYLO result. |
| Chart axes relative to launch (−6 mo … +12 mo), dashed gray line labelled illustrative | Shows the composition without fake dates or values. |
| Mobile layouts recomposed: phone capture only (A), sparkline and side-by-side before/after (B), segmented one-step carousel (C) | Owner standard: compact mobile, not stacked desktop. |
| Recommend A | Credible with existing material, reuses V2 structure, has a slot for one verified metric later. |

Rejected while designing: using the client's review count as an outcome; a dated chart axis; three stacked Journey panels on mobile (about 1,500px tall); CSS-positioned overlapping screenshots for the build (one composite image instead).

Checks: rendered at 1440 and 390 for each concept; scroll width equal to viewport; visual review fixed four defects. Not checked: 1024/768/320, Elementor, devices.

## 2026-11-16 — Iteration 4: Homepage V2 ("two-tone statements")

**Status: Current proposal.**

Input: the owner's "Premium Homepage Design Challenge" brief. It keeps the foundation (monochrome, Manrope, 4px radius, restrained interaction) and asks for a distinctive, art-directed page: no empty hero, no plain service list, all five real projects with images, an Approach section, dark contact, real navigation. It lists four services instead of five and names the five projects.

Reviewed first: main at 0a3d8f8, open PRs #3–#7, and the Homepage V1 screenshots from PR #7. V1 is treated as a technical draft.

What changed from iteration 3:

- Headings became two-tone: black statement, gray second line. The hero asks "Good business. / Hard to find?"; the contact section answers on black with "Good business. / Easy to find."
- One 8 + 4 column split is used by every section, so the right column starts at the same position down the whole page.
- Hero gained a strip of the five projects as grayscale thumbnails. The hero paragraph moved to the right column.
- Services: four rows (was five), each with title, three scope items and description. "Ongoing Support" is no longer a separate service; it appears as "Care and updates" and in the Approach section.
- Selected Work: all five projects have images. Featured project shows desktop and phone captures; four tiles alternate 7 + 5 and 5 + 7 columns at one fixed height. Every screenshot sits in a soft-gray mat and is cut by its bottom edge.
- New Approach section: three statements labelled First / Then / After launch.
- Contact is black and mirrors the hero. Footer is black and continuous with it.
- Header: logo image, Services / Work / Approach, small primary "Let's talk". Mobile menu open state is designed.
- Glide-Over prototype is used on two buttons.

Decisions made by Claude in this iteration, all Proposed:

| Decision | Reason |
| --- | --- |
| New variable `rb-mute` #8A8A8A, large text only | The two-tone device needs a gray that passes 3:1 at display sizes; no existing variable does. |
| Display size 88 / 64 / 44 for hero H1 and contact H2 only | 72px left the hero underweight next to a full-width strip. Layout also works at 72. |
| Grayscale thumbnails in the hero, full color only in Selected Work | Proof on the first screen without color in the hero. |
| Mat panels with screenshots cut by the bottom edge | One treatment for five differently colored sites; hides raw screenshot edges. |
| Descriptors are industry and town, not services delivered | Verifiable from each public site; no claims about results or scope. |
| No section numbers, uppercase labels, diagrams, serif accents | Rejected by the owner in iterations 1–2; the new brief did not reverse that. |
| Navigation without About | No About page exists; anchors only. |

Reversal of an earlier rejection: "Black contact section" was dropped in iteration 2 because it needed an inverse button. The Dark section and inverse button now exist (owner-approved Base Section variants), and the brief asks for the Dark treatment, so it is used.

Checks run: mockup rendered in headless Chrome at 1440×900 and 390×844 (2×) with Manrope loaded; scroll width equaled the viewport at both sizes; full-page captures reviewed section by section. Client sites captured from their public URLs on 2026-11-16. Not checked: anything in WordPress or Elementor, tablet and 320px renders, real devices.

## 2026-11-16 — Iteration 3: homepage proposal on the built foundation

**Status: Exploration, superseded by iteration 4.**
Mockups: [desktop](design/2026-11-16-homepage-proposal-desktop-1440.png), [mobile](design/2026-11-16-homepage-proposal-mobile-390.png).

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
| Hero with no visual at all | Iteration 3 | Owner: the result had excessive blank space and weak composition. |
| Services as a text list in a narrow right column | Iteration 3, built in V1 | Owner: unstructured service list. |
| Full-width raw screenshot at natural height | Iteration 3, built in V1 | Owner: oversized screenshots. |
| Projects shown as text-only link rows | V1 build | Owner: no text-only project placeholders. |
| White contact section with a top rule | Iteration 3 | Owner asked for the Dark treatment; a white ending was too weak. |
| Service index list in the hero's right column | Iteration 4, while designing | Repeated the Services section directly below it. |
| Drop shadow under the phone screen in the Studio Plate | Portfolio research | Owner brief: no shadows; a mat-coloured ring separates the screens instead. |
| 4:5 mobile crop of the Studio Plate | Portfolio research | Crop line fell through the desktop headline; 3:4 crop lands in empty space. |
| Headline line in `rb-line` gray | Iteration 4, while designing | 1.5:1 contrast; replaced by `rb-mute` at 3.45:1. |

## Notes for future entries

Add a dated section at the top for each meaningful checkpoint: input, what changed, status, mockup links, checks run. Move the previous "current" entry down as an exploration and update the pointer at the top. Put dropped ideas in the rejected table with a one-line reason. Images go in `docs/design/` with a date prefix; only sanitized captures.
