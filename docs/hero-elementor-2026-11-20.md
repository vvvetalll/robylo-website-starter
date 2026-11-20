# Elementor Hero — 2026-11-20

Collaborator: ChatGPT/Codex. Scope: homepage 5894 Hero only, under the owner's explicit direction to implement in WordPress instead of developing the standalone prototype.

## Actual status

The Business Hub Hero with **Your business** in its center was published to the protected homepage at the owner's request. Coming Soon and noindex remained enabled. The subsequent mobile line-contrast and CTA-spacing corrections are **staged, not published**, following the owner's latest instruction. PR #36 remains draft and unmerged.

Native Atomic articles and paragraphs keep labels accessible; native SVG supplies icons, orbit and connectors. Existing Manrope tokens, container, buttons and component 5864 are reused. No JavaScript, library, theme change or new token. Added Hero-specific classes: rb-hub-card (g-6eb5b38), rb-hub-label (g-f018d12), rb-hub-icon (g-89d106c). Media IDs 6401–6405 contain approved vector artwork.

The complete homepage configuration outside Hero 239c5c36 was compared before publication and was unchanged. The standalone prototype is now a reference only.

## Latest targeted mobile corrections

- Connections widget 50b1986e: mobile ellipse/path stroke uses existing rb-mute (#8A8A8A), 1.25px non-scaling stroke; connection dots use the same token. Desktop white strokes are unchanged.
- Primary CTA wrapper 5afea73d: mobile arrow offsets now match the button's 14px horizontal padding. Previously its shared 24px arrow offsets conflicted with the compact padding, collapsing the intended text/arrow gap.
- Card positions, typography, circle dimensions, copy and desktop layout are unchanged.

These are local Atomic style rules, centrally stored on the two existing elements, not a new stylesheet. SVG internals and the existing Glide-Over pseudo-elements require narrowly scoped descendant rules; other appearance/layout values use native Atomic properties. The earlier SVG fill:none correction prevents Elementor's root currentColor fill from filling outline artwork.

## Verification

Actual authenticated Chrome frontend, not a standalone prototype:
- Mobile correction visually inspected at exact 320, 375 and 390 CSS px using mobile emulation; no horizontal overflow. Default label/arrow separation and all four connector branches/orbit visible.
- Desktop 1440 checked: original white connectors and 24px arrow offsets remain.
- Initial Hero also visually inspected at 768 and around 1024 (1023/1025 due Chrome desktop zoom rounding). Do not claim an exact 1024 check from those captures.
- Keyboard Tab produced a visible outline; Enter on See our work navigated to #work. #contact and #work exist. Shared button interactions retained.
- Frontend robots: noindex, nofollow. Maintenance Mode ON and Search Engines Blocked remained present. Anonymous browser displayed Coming Soon.
- Initial publication exposed stale generated CSS. Cleared Elementor files/data once, then SiteGround cache; authenticated normal Home then rendered correctly.
- Screenshots below are actual renders with the WordPress toolbar cropped away. No real-device or exhaustive accessibility audit claimed.

[Desktop](evidence/hero-elementor-2026-11-20/desktop.jpg) · [320](evidence/hero-elementor-2026-11-20/mobile-320.jpg) · [375](evidence/hero-elementor-2026-11-20/mobile-375.jpg) · [390](evidence/hero-elementor-2026-11-20/mobile-390.jpg)

## Original slider recovery — still unresolved

Searched all fetched reachable Git history: 38 branches, 36 PR heads, 100 commits, 345 unique textual versions, no tags/deleted-file entries. Current homepage 5894 contains one native carousel, Selected Work 063712a with six projects, not a Hero slider. Atomic Lab 5776's original Hero experiment fae4b84 is static. Inspected current Home and oldest retained revision 6359 read-only; did not apply it.

Concrete references: design-homepage-v2-handoff-2026-11-16.md line 211 specifies a native-overflow preview strip without a slider script; everything-connected-2026-11-18.md records removal of strip 5e5ef0c7; horizontal-portfolio-prototype-2026-11-17.md describes the Apple-inspired Selected Work carousel. The exact historical Hero slider source, settings and additional approved slides remain absent from inspected evidence. Not all retained WordPress revisions were individually inspected. No substitute slider, fake pagination or new slide content was invented. Slider restoration is not complete.

## Recovery and records

Undo revision 6406 predates the Hero replacement; 6411 predates only the latest mobile correction. Restore through native Elementor revisions if needed; do not overwrite unrelated later work. Full pre-edit backup retained privately. hero-config.json is a scoped configuration snapshot for review, not a portable native template export. Original SVG sources are included beside it. No credentials, nonces, full database dump or authenticated URL is committed.
