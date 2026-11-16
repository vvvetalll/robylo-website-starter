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
| Claude's new homepage layout, final navigation, case-study presentation and contact section | Proposed / design in progress | No final design approval or implementation recorded. Do not infer approval from mockups or older concept notes. |
| Subtle button rounding | Proposed visual direction | Current rb-radius is 0px. A change requires a recorded design decision before implementation. |
| Portable Elementor exports and fresh-install import | Unfinished technical work | No deployable native configuration package committed; requires a separate scoped task and validation. |

The supplied homepage brief requests “Good business. Hard to find?”, Work / Services / About / Contact, five service rows, Chicago Mounting and a contact action. This is design input, not evidence of a built or verified homepage. Do not invent client results or testimonials.

Use separate records for proposals, owner approvals, implemented changes and verified results. Supersede a decision explicitly; do not silently erase older rationale or turn exploratory notes into approvals.
