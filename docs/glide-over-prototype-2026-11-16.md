# Glide-Over button prototype — 2026-11-16

Status: **Implemented in Atomic Lab only; ready for owner review. Not approved for global rollout.**
Collaborator: ChatGPT/Codex through the authorized Elementor connector.

## Reference inspected

Owner-supplied video: “Recording 2026-11-16 142333.mp4”, 1678×524, approximately 12.76 seconds. SHA-256: 95ED5C40F23A84A7E4CE9050BD97E58CE942007E7464707648B6B3E1886CE53B. The middle **Glide-Over** interaction is visible around 7.7–9.35 seconds.

Observed behavior: trailing arrow exits right; an arrow enters from the left; the label shifts right into previously reserved space. Hover-out reverses the movement. This prototype reproduces that coordinated motion, rather than translating the whole button or substituting a background effect. Original reference footage is not uploaded to the public repository.

## Reused foundation and actual changes

Inspected actual Primary Button **5864 / 393d1527**, Lab **5776**, global classes/variables, native interaction schema and the latest repository context. main is 0a3d8f8; button foundation [PR #4](https://github.com/vvvetalll/robylo-website-starter/pull/4) is still unmerged at 501745d. This prototype branch is based on that exact button-foundation commit and targets its branch to keep the review focused. It does not merge PR #3 or #4.

- Reused all existing button classes, Manrope 16/600, 4px radius, spacing tokens and Light/Soft/Dark context.
- **One new class only:** rb-btn--glide, ID **g-3560e9a**. Its purpose is explicit opt-in motion on three Lab instances, without changing shared base buttons.
- Added three instances of existing component 5864; **no component created or library component edited**.
- Label override is native supported inline markup: `<span>Glide-Over</span>`. Text remains one accessible label; empty CSS pseudo-elements draw decorative arrows.
- Wrappers remain native divs, padding 0, min-width 0, width fit-content, with rb-btn--glide attached. No motion styling exists in their local styles.
- Existing Button System group **3a2ddc70** now shows Primary → Glide-Over → Outline → Text link → Small on each background. Original non-animated Primary remains immediately adjacent on desktop and 390px; natural wrapping occurs at narrow widths.
- Updated only the three Lab instruction paragraphs. Fifteen component instances are now demonstrated, three animated and twelve unchanged controls.
- Lab changes saved/published behind Coming Soon. No animation class was attached outside this Lab demonstration.

| Background | Wrapper | Component instance |
| --- | --- | --- |
| Light | 13218e4e | 78658fa8 |
| Soft | 516080af | 82faca4 |
| Dark | 5b118bca | 796b275 |

Global variables and existing classes were not changed. Primary Button's library text/link properties, classes and empty native interaction list are unchanged. Homepage 5894, Header 5892, Footer 5893 and Coming Soon 5858 element trees match the earlier snapshots.

## Native limitation and single styling owner

Native hover interactions are available, but the exposed schema has no pseudo-element targets or reduced-motion media option. The button/component properties expose text/link/tag, not a coordinated leading/trailing arrow and moving label system. Animating the entire native element would move its geometry and would not match the reference.

**Chosen centralized location:** active kit **5744 → Global Classes → rb-btn--glide (g-3560e9a)**, managed with Elementor's supported global-class tool. This is the only runtime location for the animation exception. No page/widget/component Custom CSS, Additional CSS, child-theme stylesheet, inline styling, JavaScript, library or dependency was added.

The class tool dropped a top-level arbitrary media query in the first check. Nesting the media query inside the class's descendant rule preserved it in the rendered global-class stylesheet. The final saved rule was read from actual rendered CSS and tested. No duplicate fallback rule was left elsewhere.

### Exact centralized class declarations

These document the WordPress configuration; they are not an importable native export or a second runtime stylesheet.

```css
& .e-button-base {
position:relative; overflow:hidden;
& > span { display:inline-block; padding-inline-end:calc(1em + var(--rb-space-1)); }
&::before, &::after { content:""; position:absolute; inset-block-start:50%; margin-top:-0.5em; width:1em; height:1em; background-color:currentColor; clip-path:polygon(0% 44%,70% 44%,42% 16%,50% 8%,92% 50%,50% 92%,42% 84%,70% 56%,0% 56%); pointer-events:none; }
&::before { inset-inline-start:var(--rb-space-3); transform:translateX(-2em); opacity:0; }
&::after { inset-inline-end:var(--rb-space-3); transform:translateX(0px); opacity:1; }
@media (hover:hover) and (pointer:fine) and (prefers-reduced-motion:no-preference) {
& > span { transition:transform 350ms cubic-bezier(0.22,1,0.36,1); }
&::before, &::after { transition:transform 350ms cubic-bezier(0.22,1,0.36,1), opacity 200ms ease; }
&:is(:hover,:focus-visible) > span { transform:translateX(1.5em); }
&:is(:hover,:focus-visible)::before { transform:translateX(0px); opacity:1; }
&:is(:hover,:focus-visible)::after { transform:translateX(2em); opacity:0; }
}
}
```

All motion is inside the fine-pointer, hover-capable, no-reduced-motion media gate. Other modes keep a static trailing arrow and zero transition. Existing hover colors and focus ring still apply.

## Geometry, timing and comparison limits

- Label travel: **24px / 1.5em**. Each decorative arrow travels **32px / 2em**.
- Motion: 350ms cubic-bezier(0.22, 1, 0.36, 1); arrow opacity 200ms.
- Reserved trailing space: 1em + rb-space-1, preventing width changes.
- Prototype target measured approximately **155.24×53.33px**, unchanged across normal/hover/focus/active samples. No layout shift from the animation.
- Approved 4px corners, Manrope and existing button palettes replace the reference's pill shape/font/background. No blur, glow or bounce.
- Timing/easing and the CSS-drawn arrow are an interpretation of the recorded movement; source animation code/exact easing was not provided. No claim of pixel-identical reproduction.
- Keyboard focus also triggers the coordinated motion on eligible fine-pointer devices while retaining the original ring. This is an accessibility extension to the reference hover interaction.
- At 320px, actions wrap rather than shrinking targets or overflowing. On touch, the prototype remains a normal single-tap native link with a static arrow.

## Actual verification

Authenticated desktop Chrome, responsive and device/preference emulation; no physical-device test.

| Check | Actual result |
| --- | --- |
| 1440 / 768 / 390 / 320px | Fifteen actions, three opted into motion, no horizontal overflow; minimum target height 48px |
| Existing controls | Original twelve retain 4px radius, Manrope and no transition on their button roots |
| Prototype dimensions | Same width/height across sampled normal, hover and focus states on all four widths |
| Keyboard and active states | All 12 prototype/background/width combinations registered visible keyboard focus and active state; contrasting colors retained |
| Pointer hover / reverse | Exercised at all four widths; actual desktop screencast shows trailing-to-leading arrow exchange, label travel and reverse |
| Reduced motion | All three have transform none, transition 0s, leading arrow hidden/trailing arrow visible under reduce; keyboard ring retained |
| Touch emulation | pointer:coarse true, pointer:fine false, hover capability false; all three have static label/arrow and transition 0s |
| Touch activation | Native link activated /styleguide/; destination returned a Cloudflare 525 SSL-handshake error during the check |
| Public homepage | Anonymous HTTP 200, Coming Soon present, prototype text absent |
| Protected documents / component | Homepage/Header/Footer/Coming Soon trees and shared component definition unchanged |

Timed style samples sometimes caught transitions at their start or partway through browser painting; they are not presented as fixed-time pass/fail evidence. The actual browser screencast is the visual evidence of forward/reverse motion. No unperformed end-to-end timing or cross-browser test is claimed.

The Styleguide 525 response is an unresolved destination-loading issue encountered during a successful link activation, not evidence of a blocked button. No hosting/security/cache change was made as part of this prototype.

## Evidence and review

- [Actual live motion recording — GIF](verification/2026-11-16-glide-over-live.gif), approximately 2.39 seconds / 28 captured browser frames.
- [Desktop comparison — 1440px](verification/2026-11-16-glide-over-desktop-1440.jpg).
- [Mobile comparison — 390px](verification/2026-11-16-glide-over-mobile-390.jpg).
- [Atomic Lab review](https://robylo.com/atomic-lab/?preview_id=5776&preview=true) — WordPress editor login required.

The recording uses actual Chrome screencast frames, cropped to the unchanged Primary and opt-in prototype. It is not a recreated animation. Screenshots are actual Lab content crops; the purple assistant bubble is an editor overlay. No admin toolbar, private account data, cookies or preview tokens are committed.

## Remaining review and rollback

Owner review is required. No global rollout, merge or deployment is authorized here. Disabled controls remain outside the exposed Atomic button schema, as recorded in the button-foundation notes.

To remove this prototype, delete only the three new Lab wrappers, restore the three instruction paragraphs, and remove rb-btn--glide after checking for consumers. Keep component 5864, all original controls, existing class priority and variables intact. Initial Lab undo revision **5964** predates this task; a full restore would discard later edits, so inspect concurrent work first.
