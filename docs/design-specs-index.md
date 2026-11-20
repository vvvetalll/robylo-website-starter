# ROBYLO design and content specifications — index

Maintained by Claude. One row per specification. The spec file is the source ChatGPT Work implements from; implementation details and checks live in verification.md and current-implementation.md; approvals live in decisions.md. Status terms follow AGENTS.md: Proposed, Approved, Implemented, Verified. Updated 2026-11-19.

Specs live in the existing flat `docs/` structure as dated `design-*.md` files, as AGENTS.md requires. No separate `docs/concepts/` folder was created.

| Page / topic | Specification (latest first) | Status | WordPress | PR | Outstanding |
| --- | --- | --- | --- | --- | --- |
| Homepage — copy, positioning and SEO | [ROBYLO-CONCEPT.md §§ "Approved homepage positioning and final copy", "2. Approved homepage copy", "3. SEO metadata"](ROBYLO-CONCEPT.md#approved-homepage-positioning-and-final-copy--2026-11-18) | **Approved** (owner, 2026-11-18), Implemented and Verified in Chrome, staged | Home 5894 | #18 | Public launch not authorized |
| Homepage — structure and visual design | [design-homepage-v2-handoff-2026-11-16.md](design-homepage-v2-handoff-2026-11-16.md) | **Approved** visual direction (owner, 2026-11-17, PR #8 at 37ef6a0); Implemented for review; the structural baseline named in the 2026-11-18 owner standard | Home 5894 | #8, #10–#13, #20 | Open questions in [design-log.md](design-log.md) |
| Homepage — earlier copy recommendation | [design-homepage-copy-review-2026-11-18.md](design-homepage-copy-review-2026-11-18.md) | Proposed, **superseded** by the owner-approved copy | — | #14 | None (historical) |
| Homepage — earlier explorations | [design-homepage-handoff-2026-11-16.md](design-homepage-handoff-2026-11-16.md), [design-impact-section-concepts-2026-11-18.md](design-impact-section-concepts-2026-11-18.md), [design-big-picture-refinement-2026-11-18.md](design-big-picture-refinement-2026-11-18.md) | Exploration / Proposed | Home 5894 | #14 | — |
| Portfolio presentation and Studio Plates | [design-portfolio-presentation-research-2026-11-18.md](design-portfolio-presentation-research-2026-11-18.md) → [design-studio-plate-chicago-mounting-2026-11-18.md](design-studio-plate-chicago-mounting-2026-11-18.md) → [portfolio-image-guidelines.md](portfolio-image-guidelines.md) (v3) | v3 production **Approved** (2026-11-18), Implemented | Home 5894, Work 6193 | #14, #16, #17, #18 | — |
| About | [design-about-page-2026-11-19.md](design-about-page-2026-11-19.md) | Owner copy **Approved**, Implemented as staged review; Claude concept Proposed (historical) | About 6197 | #21, #24 | Founder portrait; child-theme `aria-current` filter unverified |
| Services hub | [design-services-page-2026-11-19.md](design-services-page-2026-11-19.md) | Direction **Approved** (owner, 2026-11-19); Implemented as owner-review draft | Services 6191 | #24 | 8 owner confirmations |
| Website Design & Development | [design-service-web-design-2026-11-19.md](design-service-web-design-2026-11-19.md) | **Proposed** | 6203 | — | Owner review; 9 owner confirmations |
| Service-page template (all four) | [design-service-pages-architecture-2026-11-19.md](design-service-pages-architecture-2026-11-19.md) | **Proposed** | 6203, 6205, 6207, 6209 | — | Specs for SEO, Ads, Automation pages |
| Visual direction "Working Drawings" + Services redesign | [design-visual-direction-2026-11-19.md](design-visual-direction-2026-11-19.md) | **Proposed** | Services 6191 first; later Home, About, 6203 | (this PR) | Owner approval; 7 open decisions |
| Customer-first messaging review | [design-customer-first-messaging-2026-11-20.md](design-customer-first-messaging-2026-11-20.md) | Direction **Approved** (owner, 2026-11-20); wording **Proposed**, pending editorial approval | Home 5894, Services 6191, 6203 | (this PR) | 6 open decisions + [Confirm] items |
| Site architecture (17 URLs) | [current-implementation.md — Website architecture and page skeletons](current-implementation.md#website-architecture-and-page-skeletons--2026-11-18) | **Approved** (owner, 2026-11-18), Implemented as staged skeletons | All pages | #19 | Page designs per spec |
| Shared design system | [design-system-index-2026-11-19.md](design-system-index-2026-11-19.md) (index to the authoritative sources) | Index; sources carry their own status | — | — | Type-scale and radius conflicts |
| Theme architecture, Sept 2026 | [theme-architecture-2026-09-17-superseded.md](theme-architecture-2026-09-17-superseded.md) | **Superseded** | — | — | None (historical) |

## Not recoverable or not stored here

- **Owner's About copy brief** (2026-11-19, sent to ChatGPT Work). The original is not in the repository. The approved text is preserved from the rendered evidence in the About spec, Part A.
- **First draft of the Services concept** (2026-11-19). It was overwritten in place in the same Claude Doc by the approved refinement and was never committed. Only its summary survives inside the final spec ("What changed from the first draft").
- **Chat-only design reviews** of the staged homepage (2026-11-16 to 2026-11-18). They were conversation answers, not documents.
- **Impact-section PDF** (2026-11-18). This was a presentation export of [design-impact-section-concepts-2026-11-18.md](design-impact-section-concepts-2026-11-18.md) and its committed source HTML/PNGs. The PDF itself was not committed.

- [2026-11-20 · Customer-first Home and Services composition](design-customer-first-home-services-2026-11-20.md) — owner-authorized private implementation scope and proposed line edits. About and Web Design are audit-only in this pass.

- [2026-11-20 · Global typography and visual hierarchy](design-global-typography-2026-11-20.md) — owner-authorized style refinement preserving approved copy and behavior.

- [2026-11-20 · Outline navigation and service composition](design-outline-navigation-2026-11-20.md) — owner-authorized refinement, based on PRs #31 and #32.
| 2026-11-20 | [Visual composition and divider cleanup](design-visual-composition-2026-11-20.md) | Owner scope and placeholder proposals |
