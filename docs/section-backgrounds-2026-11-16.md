# Base Section background variants — 2026-11-16

Collaborator: ChatGPT/Codex through the authorized Elementor connector.
Status: **Implemented, browser-verified and visually approved by the owner on 2026-11-16.** See [approval record](decisions.md#owner-visual-approval-and-next-scope--2026-11-16).
Owner authorization: “ROBYLO — Build and Test Base Section Backgrounds.” This authorizes this demonstration only, not the remaining homepage.

## Actual changes

- Reused Base Section **5869** three times, retaining nested Heading and text **5877** and Primary button **5864**. No component was created or rewritten.
- Atomic Lab **5776**: inserted “Section background variants” group **27f556e0** immediately after the introduction. White → light gray → black are consecutive, full-width sections. Preserved all pre-existing specimens and older experiments below.
- Instances: Light **60454997**, Soft **1596fb6b**, Dark **45a124e7**. Each overrides heading (H2), description, CTA text and destination through the existing component properties. CTA and inline links point to /styleguide/.
- Each instance sits in a native div wrapper with padding 0 and min-width 0; the Base Section still owns its original section padding, gutters, content measure and spacing.
- Added only **two global classes**: rb-section--soft (**g-e8156d1**) and rb-section--dark (**g-216e3c8**). Light uses the existing rb-section default, with no new light class.
- Class priority: dark, soft, existing rb-section, preserving the relative ordering of all older classes. Apply exactly one background modifier to a zero-padding wrapper around the Base Section instance.
- Existing rb-section (**g-048cfe8**) received only paragraph-link underline, inherited color and visible keyboard-focus rules. Its original native background, spacing and responsive declarations were retained.
- All 20 global variables, Atomic typography defaults, button component, Base Section definition, Header, Footer, homepage and Coming Soon were left unchanged. Lab document changes were saved/published behind the existing Coming Soon gate.

## Native settings and scoped CSS exception

Background/color declarations and wrapper sizing use the native Atomic style/class system. The connector does not expose a component background/color variant property; applying classes directly to an e-component instance did not propagate them to its rendered section root. Native heading/paragraph defaults explicitly set dark colors, so a parent color alone could not reverse them.

The minimum fallback is descendant CSS stored with the existing Elementor global-class definitions, managed through the supported class tool. It reaches the nested section, headings, paragraph, links and primary CTA. No theme CSS, HTML widget, script, duplicate component, new token, decorative shadow or gradient was introduced. Local wrapper styles contain only native padding/min-width; the contextual rules have one owner in the global classes.

New Soft class declarations:

```css
background-color: var(--rb-surface);
& section { background-color: var(--rb-surface); }
& p a { color: inherit; text-decoration: underline; }
& p a:hover { color: var(--rb-ink); }
& p a:focus-visible { outline: 2px solid currentColor; outline-offset: 3px; }
```

New Dark class declarations:

```css
background-color: var(--rb-ink);
color: var(--rb-paper);
& section { background-color: var(--rb-ink); }
& h1, & h2, & h3, & h4, & p, & a { color: var(--rb-paper); }
& p a { text-decoration: underline; }
& p a:hover { color: var(--rb-surface); }
& p a:focus-visible { outline: 2px solid currentColor; outline-offset: 3px; }
& .rb-btn--primary {
  background-color: var(--rb-paper);
  color: var(--rb-ink);
  border-color: var(--rb-paper);
}
& .rb-btn--primary:hover {
  background-color: var(--rb-surface);
  color: var(--rb-ink);
  border-color: var(--rb-surface);
}
```

Additions to existing rb-section (patch, not replacement):

```css
& p a { color: inherit; text-decoration: underline; }
& p a:hover { text-decoration: underline; }
& p a:focus-visible { outline: 2px solid currentColor; outline-offset: 3px; }
```

The dark CTA reverses its normal/hover palette for visibility. Its font, size, padding, border width, square radius and existing focus behavior are retained. The pre-existing white/black focus ring remains; this task adds no decorative shadow. These variants are intended for a Base Section with its primary CTA, not arbitrary nested components or nested themed sections.

## Rendered verification

Browser: authenticated desktop Chrome, viewport emulation; not physical-device testing.

| Check | Result |
| --- | --- |
| 1440 / 1024 / 768 / 390 / 320px | No horizontal overflow; sections meet edge-to-edge with no added gap |
| H2 | 48 / 40 / 40 / 32 / 32px at those widths; original line heights |
| Body | Manrope 18px throughout; actual loaded Manrope 400/600/700 observed |
| Light | #FFFFFF; heading black, paragraph/link #444444; black/white CTA |
| Soft | #F5F5F5; heading black, paragraph/link #444444; black/white CTA |
| Dark | #000000; heading/paragraph/link white; white/black CTA |
| Pointer hover, 1440 / 768 / 390 | Light/Soft CTA #333333 with white text; Dark CTA #F5F5F5 with black text |
| Keyboard, same three widths | Inline link and CTA both reached through Tab/Shift+Tab; :focus-visible and contrasting outline/ring observed |
| Buttons | Approximately 53.3 CSS px rendered height; prior minimum/padding preserved |
| Anonymous public homepage | HTTP 200, Coming Soon copy present, Lab demo absent |
| Saved configuration | Lab group and all three component references read back; Base Section unchanged; 20 variables unchanged |

Calculated color contrast: black/white 21:1; #444444 on white about 9.74:1; #444444 on #F5F5F5 about 8.93:1; white on #333333 about 12.63:1. All exceed 4.5:1 for the demonstrated text. Focus uses the existing white/black CTA ring and currentColor inline-link outline.

## Evidence and review

- [Desktop screenshot, 1440px viewport](verification/2026-11-16-sections-desktop-1440.jpg)
- [Mobile screenshot, 390px viewport](verification/2026-11-16-sections-mobile-390.jpg)
- [Atomic Lab review](https://robylo.com/atomic-lab/?preview_id=5776&preview=true) — requires WordPress editor login.
- [Atomic Lab editor](https://robylo.com/wp-admin/post.php?post=5776&action=elementor).

Screenshots are actual rendered section-group crops, not recreated mockups. Desktop capture width excludes the scrollbar (1424px); mobile capture is 390px. The purple editor assistant overlay is not part of the intended public design. No admin toolbar, account information or signed preview token is included in committed evidence.

## Limitations and rollback

- The owner approved these variants without adjustments and authorized a basic homepage section foundation only. See the later approval record in decisions.md; detailed homepage components still need approval. Header, Footer and Coming Soon remain outside this implementation.
- H1/H3/H4 are covered by the dark selector but were not separately rendered in this H2 demonstration. No blanket claim about all component types, outline buttons or nested themes.
- Native class/kit export and fresh-install import remain unverified; this record is not a portable Elementor export.
- To roll back just this task, remove Lab group 27f556e0, remove the two new global classes, and remove only the added paragraph-link selector rules from rb-section. Preserve older declarations, components and unrelated Lab content; review the current state first. Initial Lab undo revision 5948 predates this task, but a full revision restore would also discard later edits and is inappropriate if collaborators have since changed the page.
