# AI collaboration context

Updated 2026-11-16. This repository is the shared workspace for Claude, ChatGPT Work and ChatGPT/Codex.

## Read before working

Read [README](README.md), [AGENTS](AGENTS.md), [approved decisions](docs/decisions.md), [current implementation](docs/current-implementation.md) and [verification record](docs/verification.md), plus the documents relevant to your task. Fetch the latest remote state before editing. The repository is authoritative for committed code, recorded decisions and handoffs; WordPress remains authoritative for configuration that has not been exported.

## Responsibilities and independent contributions

| Collaborator | Primary scope |
| --- | --- |
| Claude | Design concepts, mockups, visual decisions and design handoffs |
| ChatGPT Work | Native Elementor implementation, screenshots, testing and implementation documentation |
| ChatGPT/Codex | Architecture, code, audits and technical documentation |

Each collaborator may contribute its authorized work directly to GitHub through its own connection or checkout. Follow the concurrency and task-record rules in AGENTS.md. GitHub access does not grant WordPress access; Claude does not have the WordPress environment.

## Current state

The existing ROBYLO WordPress + Elementor Atomic V4 foundation has Manrope variables/defaults/classes, five reusable foundation components, active base Header/Footer, Styleguide and Atomic Lab. The homepage is a two-section base template, not the new marketing homepage. Anonymous visitors continue to see Coming Soon. See the [dated implementation snapshot](docs/current-implementation.md) for exact values and unfinished work.

The visual handoff ZIP has been delivered to Claude outside GitHub. It and the typography PDF/screenshots are not committed repository assets. Claude submitted a homepage proposal on 2026-11-16: [handoff](docs/design-homepage-handoff-2026-11-16.md), [design log](docs/design-log.md). It is Proposed; no final homepage design approval or implementation is recorded. Keep Coming Soon active.

[ROBYLO-CONCEPT.md](docs/ROBYLO-CONCEPT.md) preserves earlier business and exploratory notes. Its experimental concepts and decorative suggestions are proposals, not the current approved direction. The later owner brief calls for simple monochrome layouts, Manrope, the unchanged supplied logo, and no decorative shapes, gradients or shadows.

## Handoff and implementation boundaries

1. Record the requested outcome, contributor and approval scope; distinguish proposed, approved, implemented and verified states.
2. Claude submits design artifacts and responsive/component notes for owner review. Do not implement an unapproved concept.
3. Before authorized WordPress changes, ChatGPT Work verifies the target, installed versions, capabilities and relevant saved configuration, then reuses native variables/classes/components.
4. Record exact settings/components changed, identifiers, actual rendered checks and unsupported capabilities. Do not write directly to Elementor database records.
5. Codex adds theme functionality only for an approved gap that native Elementor cannot adequately cover; document the reason. Do not recreate the design system in CSS/PHP.
6. Record every significant completed task in GitHub. Review current remote changes and the diff before committing; never overwrite another collaborator's contribution.
7. Before repeatable deployment, validate sanitized native exports/imports on a fresh target. Documentation and a child-theme ZIP do not reproduce WordPress configuration.

## Current authorization

This task authorizes minimal collaboration/documentation changes, review, commit and push to existing main. It does not authorize WordPress changes, a homepage build, launch, or deployment. Future actions follow their own owner-approved scope.

No automatic sync or deployment is established. Each session must independently confirm its GitHub permissions and, where needed, WordPress access.

## Latest incremental task — 2026-11-16

The owner subsequently authorized only the Base Section background demonstration. Light/Soft/Dark examples are now implemented and tested in Atomic Lab; [record and screenshots](docs/section-backgrounds-2026-11-16.md). Two global modifiers were added, no components duplicated. The owner has since visually approved the variants; PR #2 is merged. The next authorized step is only the homepage section foundation described below.

## Latest scope — homepage section foundation, 2026-11-16

Four Base Section 5869 instances are staged on homepage 5894: Light Hero → Soft Services → Light Selected Work → Dark Contact. [Implementation and screenshots](docs/homepage-foundation-2026-11-16.md). This draft arrangement awaits owner visual review; the published two-section template and public Coming Soon are retained. Do not proceed to final content, individual components, Header/Footer changes or publication. Claude's full proposal remains Proposed. The owner-approved section variants and this limited draft work supersede the earlier task-scope paragraphs only to that extent.
