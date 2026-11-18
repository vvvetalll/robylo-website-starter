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
| Homepage V2: two-tone headings, 8 + 4 grid, project strip, mat-framed portfolio of five projects, Approach section, dark contact and footer, new header and mobile menu | Proposed; submitted by Claude 2026-11-16 in [design-homepage-v2-handoff-2026-11-16.md](design-homepage-v2-handoff-2026-11-16.md) | Awaiting owner review. Replaces the earlier Claude proposal only if approved. Not implemented. |
| New color variable rb-mute #8A8A8A (large text only) and optional 88 / 64 / 44 display size for hero H1 and contact H2 | Proposed by Claude 2026-11-16 (V2 handoff, section 3.3) | Foundation additions; each requires a recorded owner decision before implementation. |
| Subtle button rounding | Proposed visual direction; Claude's handoff proposes rb-radius 4px (2026-11-16) | Current rb-radius is 0px. A change requires a recorded design decision before implementation. |
| Portable Elementor exports and fresh-install import | Unfinished technical work | No deployable native configuration package committed; requires a separate scoped task and validation. |

The supplied homepage brief requests “Good business. Hard to find?”, Work / Services / About / Contact, five service rows, Chicago Mounting and a contact action. This is design input, not evidence of a built or verified homepage. Do not invent client results or testimonials.

Use separate records for proposals, owner approvals, implemented changes and verified results. Supersede a decision explicitly; do not silently erase older rationale or turn exploratory notes into approvals.

## Incremental authorization — 2026-11-16

The owner authorized building/testing Light (#FFFFFF), Soft (#F5F5F5) and Dark (#000000) Base Section variants in Atomic Lab and committing the results. [Implementation and evidence](section-backgrounds-2026-11-16.md). This is authorization to create the demonstration, **not visual approval of the result or authorization for other homepage components**. The two new modifiers and limited scoped descendant-CSS exception are documented for review. Typography, spacing, Header, Footer and Coming Soon remain unchanged.


## 2026-11-17 — Homepage V2 implementation baseline

**Approved by owner:** Claude's complete V2 visual direction in PR #8 at 37ef6a05bbf7b57c293792edbf36fc306d6ab861, including proposed typography refinements, muted gray and Header/Footer redesign. Approval source: explicit Homepage V2 implementation request. This supersedes the earlier proposed/unapproved status for that baseline; it is not launch approval.

**Implemented for review:** staged Home 5894 V2, same Header/Footer components updated, native fullscreen Popup, four reusable compositions and genuine project captures. **Not yet approved:** actual implemented result and public launch. **Known limitation:** native anchor navigation does not close Popup automatically; no improvised JavaScript added. [Record](homepage-v2-implementation-2026-11-17.md). No existing PR was merged.

## 2026-11-18 — Compact global homepage refinement
Owner requested compact mobile proportions using the supplied Apple references, preserving V2 structure. After the earlier no-publish instruction, owner explicitly authorized publishing so the implementation could be reviewed. Homepage5894 and refined existing components6010/6013/6019 promoted behind unchanged Coming Soon. No PR merge authorized or performed. Permanent visual rules and actual QA are recorded in ROBYLO-CONCEPT.md and verification.md. This supersedes earlier oversized homepage typography values; portfolio mobile20/12 remains approved.

## 2026-11-18 — Impact section exploration

**Proposed by Claude, not approved:** replace the Hero thumbnail strip with one Impact section; three concepts with recommendation A · Editorial Case. [Concepts and evaluation](design-impact-section-concepts-2026-11-18.md). No implementation authorized; Homepage V2 structure otherwise unchanged.

## 2026-11-18 — Portfolio visual presentation research

**Proposed by Claude, not approved:** present all five portfolio projects with one "Studio plate" (real desktop + phone screens on a neutral mat, 4:3, mobile crop 4:5). [Research](design-portfolio-presentation-research-2026-11-18.md). No implementation authorized; existing horizontal carousel unchanged.

## 2026-11-18 — Studio Plate prototype (Chicago Mounting)

**Proposed by Claude, not approved:** Studio Plate v2 geometry and 3:4 mobile card crop, demonstrated on Chicago Mounting. [Prototype](design-studio-plate-chicago-mounting-2026-11-18.md). Awaiting owner review; production guidelines for all projects follow only after approval. No implementation authorized.

## 2026-11-18 — Studio Plate v3 owner-directed refinement

**Approved scope:** owner request in GCPRO on 2026-11-18 approves the overall Studio Plate direction and authorizes Chicago Mounting v3 visual refinement, local renders, comparison, documentation, commit and push on a separate branch. Requires a recognizable complete smartphone and a better mobile balance, using existing real captures. Preserves v2; excludes WordPress, Elementor, live ROBYLO, existing carousel, other four projects, merge and final production guidelines.

**Implemented as local artifacts; Proposed for visual approval:** [v3 composition](design-studio-plate-chicago-mounting-2026-11-18.md#studio-plate-v3--visual-refinement-2026-11-18), including a separate portrait asset for the mobile preview. This supersedes the earlier unapproved status only for the overall direction and requested exploration; it does not approve the new geometry, mobile asset strategy or production rollout.


## 2026-11-18 — Approved all-five Studio Plate production

Owner request **Complete All Five Portfolio Studio Plates** explicitly approves Chicago v3 as the unchanged production reference and authorizes genuine captures of the remaining four sites, replacement of the four Work placeholders, actual responsive/interaction verification and reusable production guidance. Implemented and verified behind Coming Soon; no launch or merge approval. [Implementation/evidence](horizontal-portfolio-prototype-2026-11-17.md#all-five-studio-plates--2026-11-18), [guidelines](portfolio-image-guidelines.md). Earlier proposed/single-card-only records are historical for this scope.


## 2026-11-18 — Quickzy Cleaning and count-free portfolio copy

**Approved:** owner request to append Quickzy Cleaning with a genuine Studio Plate v3 and use “Selected work. Recent projects.” plus the supplied supporting paragraph. Scope is Home 5894 Selected Work behind Coming Soon. [Implementation and verification](verification.md#2026-11-18--quickzy-cleaning-and-selected-work-copy).


## 2026-11-18 — Final homepage copy and primary market
**Approved by owner:** supplied final homepage copy, primary market Chicago and surrounding suburbs, Illinois; independent digital studio with direct contact with the person implementing/managing the work. This supersedes earlier copy proposals, including “One team” and earlier portfolio/SEO wording. Exact approved text: [concept record](ROBYLO-CONCEPT.md#approved-homepage-positioning-and-final-copy--2026-11-18). **Implemented/verified:** Home5894 content, active Footer5893 message override and existing AIOSEO title/description; six existing projects/images/destinations and all styling preserved. [Actual checks/screenshots](verification.md#2026-11-18--approved-homepage-copy-and-chicago-positioning). Coming Soon retained; no public launch or merge approval.


## 2026-11-18 — Website architecture and skeleton scope
**Approved by owner:**17-URL sitemap,16 minimal Page skeletons, hierarchical Services/Work children, six verified-project shells, per-page noindex and authenticated review behind Coming Soon. Owner separately confirmed shared navigation changes across all pages while leaving homepage content unchanged. This authorizes Header/Footer/Popup links, not a homepage redesign or public launch. **Implemented/verified:** [actual sitemap](current-implementation.md#website-architecture-and-page-skeletons--2026-11-18), [evidence](verification.md#2026-11-18--website-architecture-and-page-skeletons). Full page designs/content and removal of noindex remain future approval scopes. No merge authorized.
