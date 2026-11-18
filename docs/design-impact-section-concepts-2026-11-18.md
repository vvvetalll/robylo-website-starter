# Impact section under the Hero — three concepts

Prepared by Claude (design), 2026-11-18, for the owner's request "Explore 3 Visual Concepts for a Real Impact Section".

**Status: Proposed.** Exploration only. Nothing in WordPress was touched. The approved Homepage V2 structure is unchanged except for the one slot the brief names: the five-thumbnail strip directly below the Hero would be replaced by one Impact section.

## Mockups

All three are drawn in context: current Header, current Hero (strip removed), the concept, and the top of the existing Services section.

| Concept | Desktop 1440 | Mobile 390 (2× capture) |
| --- | --- | --- |
| A · Editorial Case | [desktop](design/2026-11-18-impact-a-editorial-desktop-1440.png) | [mobile](design/2026-11-18-impact-a-editorial-mobile-390.png) |
| B · Data Story | [desktop](design/2026-11-18-impact-b-data-desktop-1440.png) | [mobile](design/2026-11-18-impact-b-data-mobile-390.png) |
| C · Visual Journey | [desktop](design/2026-11-18-impact-c-journey-desktop-1440.png) | [mobile](design/2026-11-18-impact-c-journey-mobile-390.png) |

Interactive source with a concept switcher: [design/2026-11-18-impact-source/index.html](design/2026-11-18-impact-source/index.html) (`#editorial`, `#data`, `#journey`). It is a reference for values, not theme code.

## Inputs and constraints

- Read first, at `prototype/horizontal-portfolio-placeholders-2026-11-17` head `4bfa4ce`: AGENTS.md (including the new mandatory visual quality standard), AI-CONTEXT.md, decisions.md, design-log.md, ROBYLO-CONCEPT.md, the V2 handoff and implementation records, and the open PR chain #8 → #13.
- Type scale follows the current build and the quality standard: display 76 / 36, section H2 44 / 30, H3 24 / 20 (desktop / mobile). Manrope, monochrome plus `rb-mute`, 1200px grid, 8 + 4 spine, 4px radius, existing button and text-link styles. No new colors or fonts.
- Example project: Chicago Mounting. Images are captures of the public site (homepage desktop and phone from 2026-11-16, services page from 2026-11-18). An archived "before" capture could not be fetched from this environment.

### Placeholder rules used in every mockup

| Marker | Meaning | Rule |
| --- | --- | --- |
| Gray text in `[brackets]` with a dashed underline | Data or facts that do not exist yet: results, metrics, sources, periods, years, the client's starting point | Must be replaced by verified content with a source, or the element removed. Never published as-is. |
| Small outlined **Draft** tag | Copy describing ROBYLO's own scope, written by Claude | Owner confirms or edits. The tag is not part of the design. |

No results, numbers, quotes, ratings or testimonials were invented. The public Google rating on the client's site was deliberately **not** used as an outcome: it is the client's reputation, not something ROBYLO caused.

## The three concepts

### A · Editorial Case

A compact, typography-led case-study opener.

- **Desktop:** black rule and label row (`Case study · Chicago Mounting` / industry and area). Two-tone H2 on the 8 columns, the client's starting point on the right 4. Below, an 8-column mat with the desktop capture and an overlapping phone capture, both cut by the bottom edge; on the right 4, a short definition list (What we did / Outcome / Measured) and a "Read the case study" link.
- **Mobile:** the phone capture alone, centered in a 300px mat (the desktop capture is dropped, not shrunk). Scope as three short lines; Outcome and Measured side by side in a two-column index. About 900px tall including the label row.
- **Placeholders:** start year, the client's starting point, the outcome, its source and period.

### B · Data Story

One large number, one clean chart, minimal context.

- **Desktop:** left 4 columns: a 112px metric, a one-line statement of what it measures, the source at the bottom. Right 8: a monthly line chart with a single annotation, "New site live", and relative axis labels (−6 mo / Launch / +6 mo / +12 mo), so there are no invented dates. Below, three columns: Before / What changed / After.
- **Mobile:** the number and statement first; the chart becomes a 150px sparkline with two axis labels; Before and After sit side by side so the change reads at a glance, with What changed below.
- **Placeholders:** everything numeric. The chart line is dashed gray and labelled "Illustrative shape only. No real data." It shows the composition only.

### C · Visual Journey

Problem → Solution → Outcome as three panels on a rail.

- **Desktop:** label row, two-tone H2 ("From hard to find to easy to book."), then three equal columns joined by a hairline rail with step dots (outline, outline, filled). Each column: 4:3 mat, H3, one line.
- **Mobile:** a segmented three-step indicator and one step per screen with the next step peeking (native carousel), rather than three tall stacked panels.
- **Placeholders:** the whole Problem panel (no archived "before" image is available) and the whole Outcome panel. Only the Solution panel uses a real image.

## Evaluation

Scores 1–5. "Credibility today" means with the content that exists now; "with data" assumes the placeholders are replaced by verified figures.

| Criterion | A · Editorial Case | B · Data Story | C · Visual Journey |
| --- | --- | --- | --- |
| Clarity | 4: one statement, one image, three facts | 5: one number answers "does it work?" | 3: three panels to read before the point lands |
| Visual quality | 4: real imagery, strong type, calm | 4: striking, very restrained | 3: two of three panels are empty frames today |
| Credibility today | **4**: real work, real scope; one outcome slot empty | **1**: every figure is a placeholder; cannot ship | **2**: before and after both missing |
| Credibility with data | 5 | 5 | 4 |
| Fit with Homepage V2 | **5**: uses the 8 + 4 spine, label rows, mat, definition rows already built | 3: new big-number style; no native chart in Elementor (static SVG or image plus a text alternative) | 3: new rail component; long on desktop |
| Mobile composition | 4 | 5 | 4 |
| Build effort in Atomic V4 | Low: existing grid, mat and row classes; the overlapping desktop + phone should be one exported composite image, not CSS positioning | Medium: chart asset per data update, and a text description for accessibility | Medium: rail and dots plus a mobile carousel |

### Risks shared by all three

- **Duplication with Selected Work.** Chicago Mounting is also the first card in the Work carousel a few hundred pixels lower. If an Impact section is adopted, start the carousel with another project or remove Chicago Mounting from it.
- **Claim-like headlines.** "Built for how people book a TV install." describes what was built and is safe. C's "From hard to find to easy to book." implies an outcome and is acceptable only once the outcome is verified.
- **Public permission.** Showing the client as a case study needs the client's agreement; it is listed as open in earlier records.

## Recommendation: A · Editorial Case

1. **It is honest today.** It runs on real work: real screenshots and ROBYLO's own scope. With no verified result yet, the Outcome row can be hidden and the section still stands. B and C collapse without data.
2. **It belongs to the page.** It reuses the V2 spine, label rows, mat and definition rows, so it reads as part of the homepage rather than a new widget. It is also the cheapest to build and maintain.
3. **It is ready for numbers.** When one verified metric exists, it goes into the Outcome row at 24px. If the metric turns out to be strong, that row can be promoted to B's large-number treatment later. This is a slot, not a hybrid: nothing from B or C is added now.

C is not recommended. It needs two assets that do not exist, and it is the longest of the three. B becomes a strong candidate only after six or more months of verified Google Business Profile or Search Console data with a clear launch date.

## Build notes for A (if approved)

| Part | Specification |
| --- | --- |
| Section | White, padding 0 top (the label rule closes the Hero) and 96 / 72 / 56px bottom (desktop / tablet / mobile). |
| Label row | 1px `rb-ink` top border, 16px (12px mobile) above the text, 14px / 600. Right side: industry and area in `rb-text`, hidden on mobile. |
| Head | Existing Section head 6010 composition: H2 two-tone left 8, paragraph right 4; 40px (20px mobile) below the label row. |
| Media | `rb-mat`, 8 columns, 440px tall (300px mobile). Desktop: one composite WebP (desktop capture 620px wide plus phone 180px wide, overlapping, both cut by the bottom edge). Mobile: phone capture only, 180px wide, centered, 28px from the top. Export at 2×. |
| Facts | Right 4 columns. Rows with 1px `rb-line` top rule (first row `rb-ink`), padding 16 / 20px. Label 14px / 600 `rb-ink`; value 16px, or 24px / 600 for Outcome. Mobile: label 12px `rb-mute`; Outcome and Measured side by side. |
| Link | `rb-btn--text`, "Read the case study", 48px target. Hide until a case-study page exists. |
| Outcome row | Hidden until a verified figure, source and period exist. |

## Open questions for the owner

1. Choose a direction (A recommended), or none.
2. Chicago Mounting's start year and a one-sentence starting point, written or confirmed by you.
3. Scope wording under "What we did".
4. Any verified result, with source and period. If none, A ships without the Outcome row.
5. Client permission to feature the project.
6. Whether Chicago Mounting stays in the Selected Work carousel.

## Checks run

Each concept was rendered in headless Chrome at 1440×900 and 390×844 (2×) with Manrope loaded. Document scroll width equaled the viewport at both widths for all three. Full-page captures were reviewed visually, and four defects found that way were fixed before saving: rail dots not rendering, the placeholder frame collapsing, the desktop capture floating above the mat edge, and a mobile scope separator. Not checked: 1024, 768 and 320px renders, anything in Elementor, real devices, screen readers.
