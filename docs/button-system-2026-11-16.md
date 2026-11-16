# ROBYLO button system — 2026-11-16

Status: **Implemented and browser-verified; awaiting owner review and animation reference.**
Collaborator: ChatGPT/Codex via authorized native Elementor tools.

## Inspection and scope

Read latest main 0a3d8f88f7710531088b84f8e9407e309d9a00c4, README, AGENTS, AI-CONTEXT, decisions, current implementation/verification and section-background notes. PR #3 remains a separate pending homepage documentation review; this work does not merge or overwrite it.

Inspected Primary Button 5864/root 393d1527, existing button classes and rb-radius. Loaded page styles showed rb-radius 0px used for primary button corners; older outline specimens still fell back to widget defaults, and an older raw button had a 0.3s transition.

Owner authorization: **4px rounding**, four named variants, all three backgrounds, no animation. Native class/component operations were used. No theme CSS, JavaScript, dependency, new token, additional variant or duplicate component.

## Actual settings

| Item | Actual change |
| --- | --- |
| rb-radius / e-gv-e6dc8df | Existing size variable: 0px → 4px; only variable value changed |
| rb-btn / g-aec96cc | Common geometry and typography; native focus-visible treatment; transitions and animation disabled |
| rb-btn--primary / g-13d4717 | Black/white normal palette; #333333 functional hover/focus; active black |
| rb-btn--outline / g-2c2e51d | Transparent, 1px current palette border; inverted fill on hover; transparent focus |
| rb-btn--sm / g-0d020db | Compact padding 8px/16px using rb-space-1/2; minimum 48px target |
| rb-btn--text / g-e61c4f8 | **Only new class**: transparent, borderless, underline with 4px offset; hover/focus colors |
| rb-section--dark / g-216e3c8 | Retains section/text behavior; reverses Primary/Small and provides contrasting Outline/Text states |
| Primary Button 5864 / root 393d1527 | Existing native button now has rb-btn + rb-btn--primary; text/link properties, UID, markup and root ID preserved |
| Atomic Lab 5776 | New “Button System” group 3a2ddc70 immediately after introduction; all previous content preserved |

Primary Button component was saved/published through the native component workflow; no component created. Lab demonstration was saved/published behind Coming Soon.

**Expected shared impact:** existing consumers of component 5864 inherit the common geometry, functional focus and approved 4px radius. This includes existing buttons inside the Header/homepage foundation; their documents/content/layouts were not edited. A shared token/style change cannot be isolated from its existing consumers. No new rounding was applied to images/screenshots or other unrelated elements.

## Geometry and usage

- All variants: Manrope from rb-font, 16px, 600, line-height 1.25, zero tracking.
- Standard Primary/Outline: 16px vertical / 24px horizontal padding using rb-space-2/3; 1px border; minimum width/height 48px; actual target height about 53.3 CSS px in this browser.
- Small: 8px/16px padding; **48px minimum height**, retaining 16px typography. Compact footprint without shrinking its target.
- Text Link: no background or border, 8px vertical/0 horizontal padding, underline and 48px minimum height.
- All use rb-radius 4px and retain a visible white/black keyboard-focus ring plus outline. This is an accessibility treatment, not a decorative shadow.
- No transition, movement, arrow, sliding background or animation. Existing legacy transition was neutralized on the reusable button classes.

Use the same component **5864** for all four actions. Override text and destination with the existing properties. Place it in a zero-padding, min-width-0, fit-content native wrapper; attach rb-btn--outline, rb-btn--text or rb-btn--sm to that wrapper for the corresponding variant. Primary needs no modifier wrapper. Do not combine Outline and Text modifiers. The demo wraps these in a native flex row with 24px gap and flex-wrap.

For a raw native e-button, apply rb-btn with rb-btn--primary, rb-btn--outline or rb-btn--text; Small adds rb-btn--sm to Primary. Variant selectors support both the native button itself and the wrapper pattern. The surrounding approved rb-section--dark supplies contextual colors.

The component root remains one native button/link. A future approved animation can target that stable element without replacing the component; this task does not prescribe an animation structure.

## Light, Soft and Dark behavior

| Variant | Light / Soft normal | Light / Soft hover | Dark normal | Dark hover |
| --- | --- | --- | --- | --- |
| Primary / Small | Black fill, white text | #333333 fill, white text | White fill, black text | #F5F5F5 fill, black text |
| Outline | Transparent, black border/text | Black fill, white text | Transparent, white border/text | White fill, black text |
| Text Link | Transparent, black underlined text | #333333 text | Transparent, white underlined text | #D6D6D6 text |

Keyboard focus is independently visible on every variant. Outline/Text retain transparent backgrounds under focus; Primary/Small use their contrasting functional focus palette.

## Native / scoped-selector boundary

Common geometry, typography, radius and primary palette use native class styles. As established in the section work, the component instance does not expose a variant/class property that propagates to its rendered root. The existing context-class fallback therefore uses narrowly scoped descendant selectors for wrapper modifiers and dark combinations, saved in Elementor global classes. There is one styling owner; no per-page duplicate button CSS.

The exact declarations used are included below for audit. They are **not a native Elementor export**.

### rb-btn

```css
min-height:48px; min-width:48px; max-width:100%; box-sizing:border-box; display:inline-flex; align-items:center; justify-content:center; padding:var(--rb-space-2) var(--rb-space-3); border:1px solid var(--rb-ink); border-radius:var(--rb-radius); font-family:var(--rb-font); font-size:16px; font-weight:600; line-height:1.25; letter-spacing:0em; text-align:center; text-decoration:none; cursor:pointer; transition:none; animation:none; &:focus-visible { outline:2px solid var(--rb-ink); outline-offset:2px; box-shadow:0px 0px 0px 3px #FFFFFF, 0px 0px 0px 5px #000000; }
```

### rb-btn--primary

```css
background-color:var(--rb-ink); color:var(--rb-paper); border-color:var(--rb-ink); &:hover { background-color:var(--rb-hover); color:var(--rb-paper); } &:focus-visible { background-color:var(--rb-hover); color:var(--rb-paper); } &:active { background-color:var(--rb-ink); }
```

### rb-btn--outline

```css
&.e-button-base, & .e-button-base { background-color:transparent; color:var(--rb-ink); border:1px solid var(--rb-ink); border-radius:var(--rb-radius); } &.e-button-base:hover, & .e-button-base:hover { background-color:var(--rb-ink); color:var(--rb-paper); } &.e-button-base:focus-visible, & .e-button-base:focus-visible { background-color:transparent; color:var(--rb-ink); }
```

### rb-btn--sm

```css
&.e-button-base, & .e-button-base { padding:var(--rb-space-1) var(--rb-space-2); min-height:48px; min-width:48px; }
```

### rb-btn--text

```css
&.e-button-base, & .e-button-base { background-color:transparent; color:var(--rb-ink); border:0px solid transparent; border-radius:var(--rb-radius); padding:var(--rb-space-1) 0px; min-height:48px; text-decoration:underline; text-underline-offset:4px; } &.e-button-base:hover, & .e-button-base:hover { background-color:transparent; color:var(--rb-hover); } &.e-button-base:focus-visible, & .e-button-base:focus-visible { background-color:transparent; color:var(--rb-ink); }
```

### rb-section--dark

```css
background-color:var(--rb-ink); color:var(--rb-paper);
& section { background-color:var(--rb-ink); }
& h1, & h2, & h3, & h4, & p, & a { color:var(--rb-paper); }
& p a { text-decoration:underline; } & p a:hover { color:var(--rb-surface); } & p a:focus-visible { outline:2px solid currentColor; outline-offset:3px; }
& .rb-btn--primary { background-color:var(--rb-paper); color:var(--rb-ink); border-color:var(--rb-paper); }
& .rb-btn--primary:hover, & .rb-btn--primary:focus-visible { background-color:var(--rb-surface); color:var(--rb-ink); border-color:var(--rb-surface); }
& .rb-btn--outline.e-button-base, & .rb-btn--outline .e-button-base { background-color:transparent; color:var(--rb-paper); border-color:var(--rb-paper); }
& .rb-btn--outline.e-button-base:hover, & .rb-btn--outline .e-button-base:hover { background-color:var(--rb-paper); color:var(--rb-ink); }
& .rb-btn--outline.e-button-base:focus-visible, & .rb-btn--outline .e-button-base:focus-visible { background-color:transparent; color:var(--rb-paper); }
& .rb-btn--text.e-button-base, & .rb-btn--text .e-button-base { background-color:transparent; color:var(--rb-paper); border:0px solid transparent; }
& .rb-btn--text.e-button-base:hover, & .rb-btn--text .e-button-base:hover { background-color:transparent; color:var(--rb-line); }
& .rb-btn--text.e-button-base:focus-visible, & .rb-btn--text .e-button-base:focus-visible { background-color:transparent; color:var(--rb-paper); }
```

## Demonstration and verification

Three native sections: Light 27ec8928, Soft 34855939, Dark 406ee00. Each has four instances of component 5864 (twelve total), labelled Primary / Outline / Text link / Small. Reference links use /styleguide/. Normal state is shown; hover with the pointer or navigate using Tab.

Actual authenticated desktop Chrome viewport emulation:

| Check | Result |
| --- | --- |
| Layout at 1440 / 1024 / 768 / 390 / 320px | No horizontal overflow; wrapping row fits each viewport |
| All twelve action targets, each tested width | At least 48px high; smallest observed width about 63px |
| Typeface and geometry | Manrope 16/600, 20px line-height, 4px corners throughout |
| Hover and keyboard navigation | 36 checks: all 12 actions at 1440 / 768 / 390; real mouse hover and keyboard :focus-visible confirmed |
| Light / Soft / Dark palettes | Normal, hover and focus match the table above; text remains legible |
| Motion | All twelve have computed transition duration 0s and animation-name none |
| Protected documents | Homepage 5894, Header 5892, Footer 5893 and Coming Soon 5858 element trees unchanged |
| Variables | Only rb-radius value changed; existing spacing/font/color tokens retained |
| Anonymous public homepage | HTTP 200, Coming Soon present, Button System content absent |

CSS specifies 1px borders; this browser's device scaling reports about 0.667 CSS px after pixel rounding. No thinner border value was authored. Contrast for the enabled palettes is at least about 12.63:1 (white on #333333); black/white is 21:1. Focus uses the contrasting white/black ring.

### Disabled-state limitation

The current e-button schema exposes text, link and tag; component 5864 exposes text/link. Neither exposes a disabled attribute or custom attributes through this connector. **No functional disabled control or simulated disabled anchor was created, and disabled behavior is not claimed tested.** Add native disabled semantics when the supported editor/connector exposes them; disabled links must not remain activatable. Do not use opacity as a substitute for disabled behavior.

Browser emulation is not physical-device testing. A complete accessibility/performance audit and native export/import test remain separate work.

## Evidence and review

- [Desktop normal state — 1440px](verification/2026-11-16-buttons-desktop-1440.jpg)
- [Mobile normal state — 390px](verification/2026-11-16-buttons-mobile-390.jpg)
- [Keyboard focus — Text Link](verification/2026-11-16-buttons-keyboard-focus.jpg)
- [Real pointer hover — Dark Outline](verification/2026-11-16-buttons-outline-hover.jpg)
- [Atomic Lab review](https://robylo.com/atomic-lab/?preview_id=5776&preview=true) — editor login required.
- [Primary Button component](https://robylo.com/wp-admin/post.php?post=5864&action=elementor).

Actual rendered demo crops, reviewed visually; no admin toolbar/account data or preview tokens are included. Purple assistant bubble is an editor overlay, not part of the design.

Stop here. Await owner review and the animation reference; do not continue the homepage or merge other pending work. Before rollback, inspect concurrent edits: initial component undo revision 5956 and Lab undo revision 5959 precede this task, but a full restore would discard later unrelated edits. Token/global classes require their own deliberate rollback.

## Later scoped prototype — 2026-11-16

The supplied reference now supports a separate, owner-authorized [Glide-Over Lab prototype](glide-over-prototype-2026-11-16.md). The non-animated foundation described above remains unchanged. Only three opt-in Lab instances animate; this does not authorize global animation or further homepage work.
