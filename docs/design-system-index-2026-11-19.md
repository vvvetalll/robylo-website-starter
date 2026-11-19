# ROBYLO — Shared design system: where each rule lives

| Record | Value |
| --- | --- |
| Status | **Index only.** This file creates no new rules or values. AGENTS.md forbids a second design system, so each topic points to the document that is authoritative for it, with the latest approved version identified. |
| Compiled by | Claude, 2026-11-19, from the documents linked below on branch `implementation/site-architecture-2026-11-18` (PR #19 head f67d30d). |
| Outstanding | The conflicts listed in "Known conflicts" need an owner or Codex decision. |

## Authoritative sources by topic

| Topic | Authoritative source | Status |
| --- | --- | --- |
| Visual principles: monochrome, Manrope, unchanged supplied logo, no decorative shapes, gradients or shadows | [AI-CONTEXT.md](../AI-CONTEXT.md), "Current state" (later owner brief) | Owner brief |
| Permanent quality standard: compact mobile, role-based type hierarchy, 1200 px grid, gray secondary lines, rendered verification at 1440/1024/768/390/320 | [ROBYLO-CONCEPT.md — Permanent visual quality standard, owner direction 2026-11-18](ROBYLO-CONCEPT.md#permanent-visual-quality-standard--owner-direction-2026-11-18) | **Approved** (owner, 2026-11-18); mandatory per AGENTS.md |
| Current homepage type hierarchy: display 76/56/36 px; section H2 44/36/30 px (700); service and Approach H3 24/22/20 px (600); portfolio mobile titles 20 px, descriptions/actions 12 px | Same section of ROBYLO-CONCEPT.md | **Approved** (2026-11-18), latest |
| Global variables (20): rb-ink #000000, rb-paper #FFFFFF, rb-text #444444, rb-surface #F5F5F5, rb-line #D6D6D6, rb-hover #333333, rb-font Manrope, spacing, container 1200 px, radius, fluid sizes | [current-implementation.md — Global variables](current-implementation.md) | Implemented snapshot, 2026-11-16 |
| Global classes (26) and the primary button spec | [current-implementation.md — Global classes](current-implementation.md) | Implemented snapshot, 2026-11-16 |
| Reusable native components: 5864 Primary button, 5877 Heading and text, 5869 Base section, 5886 Base header, 5889 Base footer | [current-implementation.md — Reusable native components](current-implementation.md) | Implemented |
| Shared navigation: Header 5892/5886, Footer 5893/5889, mobile Popup 5996 | current-implementation.md, "Shared navigation" (PR #19) | Implemented as staged review |
| Elementor Atomic ownership: Atomic owns variables, tag defaults, global classes, layouts and components; child theme only for gaps | [AGENTS.md — Scope and ownership](../AGENTS.md); [elementor.md](elementor.md) | Current rule |
| Portfolio images: Studio Plate v3 geometry and capture process | [portfolio-image-guidelines.md](portfolio-image-guidelines.md) | **Approved** (2026-11-18) |
| Atomic and custom-code audit | PR #22 `audit/elementor-atomic-2026-11-19` (based on main, open) | Pending review; not on this branch |

## Page-level patterns used across the approved and proposed pages

These patterns appear in the implemented homepage and in the Services, About and Website specs. They are recorded here so later pages reuse them. They introduce no new tokens; values come from the sources above. Each pattern's approval follows the page it appears on.

| Pattern | Where defined | Notes |
| --- | --- | --- |
| Two-tone heading (black first line, gray second line in one heading element) | Homepage V2 handoff; all page specs | Used for every H1/H2 |
| Section head "8 + 4": heading in the left 8 columns, intro in the right 4 | Homepage V2; Services and Website specs | Stacks on mobile |
| Rule rows: 1 px rb-line top rule per row, no cards, shadows or hover lifts | Homepage service rows; Services spec | Problems, scope blocks, works-with rows |
| Background rhythm: white and #F5F5F5 alternate; black only for the final contact section | Homepage; Services and Website specs | One black section per page |
| Shared black contact section, copy changed per page | Homepage; About; Services and Website specs | Reuse the structure, change only the copy |
| Numerals only where they carry meaning (process steps, diagram markers) | Homepage How We Work (PR #20); Website spec section 4 | Not used on service or principle rows |
| FAQ always open, no accordion or JavaScript | Website spec | Shared service-page section |
| Text links with →; one primary (black) button per section at most | Services spec | Anchor text names the destination |

## Known conflicts (not resolved here)

1. **Type scale.** current-implementation.md (snapshot 2026-11-16) lists H1 72/56/40, H2 48/40/32, H3 32/28/26. The owner's permanent standard (2026-11-18) records the current homepage hierarchy as display 76/56/36, H2 44/36/30, H3 24/22/20. The later approved standard is the current one. The 2026-11-16 table is a historical snapshot and is not updated by this file.
2. **Corner radius.** `rb-radius` is saved as 0 px (current-implementation.md), with square primary buttons. Claude's mockups and specs use 4 px on images and cards (for example the Studio Plate and carousel cards). Whether 4 px is the approved image radius is not recorded in decisions.md and needs a decision.
3. **September 2026 theme architecture.** An earlier "locked" decision (CSS tokens in the child theme, empty Global Classes, Elementor Variables not used) is superseded by the current AGENTS.md rule that Elementor Atomic owns variables and classes. It is preserved for history in [theme-architecture-2026-09-17-superseded.md](theme-architecture-2026-09-17-superseded.md).
