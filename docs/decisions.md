# Decisions and approval status

Updated 2026-11-16. Approval source is the owner's instructions in the ROBYLO conversation; private conversation transcripts are not stored here. No public approval URL is available. Future records should link the review/issue/PR where approval occurs and state its scope.

| Decision | Status / source | Implementation and limits |
| --- | --- | --- |
| Native Elementor Atomic V4 owns visual variables, defaults, classes, layouts and reusable components; child theme handles approved integration gaps | Approved project architecture; existing repository instructions | Current foundation uses native configuration. Theme deployment/runtime validation is separate. |
| Manrope content typography, weights 400/500/600/700 and specified responsive scale | Approved owner typography implementation brief, recorded 2026-11-16 | Implemented in native foundation; dated checks and exceptions are in verification.md and current-implementation.md. |
| Preserve original supplied ROBYLO logo | Approved owner restriction, recorded 2026-11-16 | Asset must remain unchanged. Active base header currently uses a provisional text brand, not the supplied PNG. |
| Simple modern monochrome design, readable hierarchy, no decorative effects | Approved owner design brief, recorded 2026-11-16 | Existing foundation provides constraints; final homepage composition remains pending. |
| Keep Coming Soon active; do not publish unfinished pages | Approved owner restriction, recorded 2026-11-16 | Existing public Coming Soon retained; no website changes in GitHub setup. |
| Shared GitHub collaboration, minimal documentation updates, commit and push to main | Approved owner GitHub Collaboration Setup request, 2026-11-16 | Documentation scope only; execution record in verification.md. |
| Claude's new homepage layout, final navigation, case-study presentation and contact section | Proposed; submitted by Claude 2026-11-16 in [design-homepage-handoff-2026-11-16.md](design-homepage-handoff-2026-11-16.md), history in [design-log.md](design-log.md) | Awaiting owner review. No final design approval or implementation recorded. Do not infer approval from mockups or older concept notes. |
| Header logo image and navigation, text-link secondary action, single section gap (handoff section 2, items 2–5) | Proposed by Claude 2026-11-16 | Foundation changes; each requires a recorded owner decision before implementation. |
| Subtle button rounding | Approved by owner Button Design System request, 2026-11-16: rb-radius 4px | Implemented through the existing token. Applies to existing shared button consumers; no screenshot/image rounding change was added. Animation remains unapproved. |
| Portable Elementor exports and fresh-install import | Unfinished technical work | No deployable native configuration package committed; requires a separate scoped task and validation. |

The supplied homepage brief requests “Good business. Hard to find?”, Work / Services / About / Contact, five service rows, Chicago Mounting and a contact action. This is design input, not evidence of a built or verified homepage. Do not invent client results or testimonials.

Use separate records for proposals, owner approvals, implemented changes and verified results. Supersede a decision explicitly; do not silently erase older rationale or turn exploratory notes into approvals.

## Button foundation authorization — 2026-11-16

The owner approved 4px button corners and authorized Primary, Outline, Text Link and Small variants on Light/Soft/Dark backgrounds. Reuse component 5864 and existing button classes; animation is explicitly reserved. [Implementation, evidence and disabled-state limitation](button-system-2026-11-16.md). The button foundation is implemented and tested, awaiting review. This does not approve further homepage work or merge pending PR #3.

## Incremental authorization — 2026-11-16

The owner authorized building/testing Light (#FFFFFF), Soft (#F5F5F5) and Dark (#000000) Base Section variants in Atomic Lab and committing the results. [Implementation and evidence](section-backgrounds-2026-11-16.md). This is authorization to create the demonstration, **not visual approval of the result or authorization for other homepage components**. The two new modifiers and limited scoped descendant-CSS exception are documented for review. Typography, spacing, Header, Footer and Coming Soon remain unchanged.

## Glide-Over prototype scope — 2026-11-16

The owner supplied the second animation reference and authorized a **controlled Atomic Lab prototype only**. [Observed reference, native limitation, exact centralized CSS and evidence](glide-over-prototype-2026-11-16.md). One opt-in rb-btn--glide class was added; the existing system/component/variables remain intact. This supersedes the prior “animation reserved” restriction only for these three Lab examples. Global animation rollout remains unapproved; no existing PR is merged by this task.
