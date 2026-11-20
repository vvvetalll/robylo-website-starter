# ROBYLO — design decision integrity and handoff guardrails

**Date:** 2026-11-20
**Status:** Approved workflow correction by owner; mobile Big Picture redesign remains **Proposed** pending a specific visual approval.
**Page:** Home 5894
**Scope:** Decision tracking and review only; no Elementor changes.

## Confirmed source of truth and discrepancy

- `AGENTS.md` requires approved specifications committed before implementation and distinct Proposed / Approved / Implemented / Verified states.
- `docs/design-mobile-customer-path-2026-11-20.md` records the **currently approved and implemented** mobile Big Picture: solid 32px dark numbered circles with white digits, descriptions and illustrations beneath, arrows between stages. This must not be silently rewritten as though it were never approved.
- The owner has now raised a **different visual direction**: large translucent 01 / 02 / 03 along the left, with text and each illustration visibly grouped. This is a new redesign request, **not yet an approved rendered composition**. It must be prototyped and explicitly approved before changing Elementor.
- Desktop Big Picture is approved and locked; no changes to it are in scope.

## Required preflight for every future ROBYLO task

1. Read `AGENTS.md`, `AI-CONTEXT.md`, `docs/decisions.md`, the design-spec index, relevant latest design specification and implementation/verification record **on the actual working branch**.
2. Report the current approved baseline, proposed changes, immutable areas and unresolved contradictions **before** issuing implementation instructions.
3. For conflicts between chat ideas and committed approved specs, **do not choose silently**. Preserve the existing approved state, label the new direction Proposed, and request/record explicit owner approval of a concrete reference.
4. Save the newly approved spec and update the index/decisions **before** implementation. Mark superseded decisions explicitly and preserve their history.
5. Implementation agents must compare actual responsive screenshots with the approved reference and report discrepancies, not only successful DOM/overflow tests.
6. Publishing requires explicit task authorization and real post-publication verification. Never infer approval from an agent report, prototype or a draft PR.
7. Keep task-specific changes narrow. Do not mix visual experiments with approved typography, animation or unrelated sections.
8. Before declaring completion, provide a traceable chain: owner decision → spec → implementation → visual evidence → verification limits.

## Earlier mobile exploration (Proposed at the time)

- Produce a full-section 320px and 390px visual prototype with large low-contrast left-aligned 01/02/03 as editorial numbers.
- Each stage must visibly unite its number, heading, description and supporting illustration; avoid a disconnected stack of giant visuals.
- Preserve legibility and avoid text-on-number collisions; no heavy pills or oversized cards.
- Keep desktop untouched. No Elementor changes or publishing before the owner approves the new mobile composition.

**Important:** This document is a governance correction and a design proposal, not an approval to replace the current published mobile step badges.


## Final phone prototype for owner review · November 20, 2026

**Proposed for Elementor.** The owner approved the vertical composition as a direction and requested these final refinements to the browser prototype. The latest direction places 01, 02 and 03 at the bottom right. The earlier left placement above is retained as decision history. Approval of the finished prototype and authorization for Stage 2 are pending.

- Each number shares a grid row with its illustration and aligns to the lower right. The figures use the same Manrope settings, tabular numerals and 13% near-black. The bottom of each number box sits 38 px below its illustration. At a given width all three illustrations end on the same right edge.
- The existing website mockup keeps its artwork and quote action. Its 5 px near-black frame becomes a 1 px warm-gray border with the same soft shadow as the other illustrations.
- Each step takes its natural height. The description leads into the illustration with 13 px of space. The next heading begins 22 px below the preceding number box.

Chrome prototype review covered the complete section and transition into What We Do at 320, 360, 375 and 390 px. Text remained readable, decorative numbers stayed behind the illustrations, and horizontal overflow measured zero. Full-section screenshots matched the preceding prototype pixel for pixel at 768, 1024 and 1440 px. These checks apply to the local prototype only. The protected homepage still uses the published layout documented in [the mobile sequence specification](design-mobile-customer-path-2026-11-20.md).

[320 px prototype](evidence/mobile-path-proposed/final-320.png) · [390 px prototype](evidence/mobile-path-proposed/final-390.png)
