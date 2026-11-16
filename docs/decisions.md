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
| Subtle button rounding | Proposed visual direction; Claude's handoff proposes rb-radius 4px (2026-11-16) | Current rb-radius is 0px. A change requires a recorded design decision before implementation. |
| Portable Elementor exports and fresh-install import | Unfinished technical work | No deployable native configuration package committed; requires a separate scoped task and validation. |

The supplied homepage brief requests “Good business. Hard to find?”, Work / Services / About / Contact, five service rows, Chicago Mounting and a contact action. This is design input, not evidence of a built or verified homepage. Do not invent client results or testimonials.

Use separate records for proposals, owner approvals, implemented changes and verified results. Supersede a decision explicitly; do not silently erase older rationale or turn exploratory notes into approvals.

## Incremental authorization — 2026-11-16

The owner authorized building/testing Light (#FFFFFF), Soft (#F5F5F5) and Dark (#000000) Base Section variants in Atomic Lab and committing the results. [Implementation and evidence](section-backgrounds-2026-11-16.md). This is authorization to create the demonstration, **not visual approval of the result or authorization for other homepage components**. The two new modifiers and limited scoped descendant-CSS exception are documented for review. Typography, spacing, Header, Footer and Coming Soon remain unchanged.

## Owner visual approval and next scope — 2026-11-16

**Approved:** the owner visually reviewed Light (#FFFFFF), Soft (#F5F5F5) and Dark (#000000) in Atomic Lab and explicitly accepted the existing implementation without visual adjustments. Approval source: “ROBYLO — Approve Base Sections and Continue Homepage Foundation” in the owner conversation. [PR #2](https://github.com/vvvetalll/robylo-website-starter/pull/2) was checked clean and unchanged at reviewed head 1d9a039a6ec1ebdd93226a6e486a6081956111d3, then merged as [0a3d8f8](https://github.com/vvvetalll/robylo-website-starter/commit/0a3d8f88f7710531088b84f8e9407e309d9a00c4).

**Authorized next:** basic homepage section structure and background rhythm only. Four sections are staged for review: Hero / Light → Services / Soft → Selected Work / Light → Contact / Dark. This arrangement is **implemented in a draft and browser-verified, but awaits owner visual approval**. [Details and screenshots](homepage-foundation-2026-11-16.md).

This supersedes the earlier pending-approval status for the three Base Section variants only. Claude's entire homepage proposal, final content, detailed components, header/footer changes, radius changes and publication remain unapproved. Keep Coming Soon active and stop before individual homepage components/content.
