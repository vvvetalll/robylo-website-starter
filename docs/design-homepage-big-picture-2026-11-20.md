# Homepage · The Big Picture — customer path redesign

**Status: Proposed. The owner made and revised the final render; explicit approval is still needed before implementation.**
Date: 2026-11-20. Author of the spec: Claude (design). Implementation: ChatGPT Work, after approval. Page: Home 5894.

The owner's brief for this section said: "Do not write code or modify WordPress yet… Wait for approval before implementation." This document records the concept so it can be approved. It does not authorize any WordPress or Elementor change.

## Reference

| File | What it is |
| --- | --- |
| [owner-render-final-2026-11-20.webp](design/2026-11-20-big-picture/owner-render-final-2026-11-20.webp) | **Target composition.** The owner's render with all review fixes applied. |
| [mobile-390-reference.webp](design/2026-11-20-big-picture/mobile-390-reference.webp) | Phone order and proportions. Built from crops of the owner render, so it shows layout, not production quality. Source: [source/mobile-reference/](design/2026-11-20-big-picture/source/mobile-reference/mobile.html). |
| [owner-render-iteration-2-2026-11-20.webp](design/2026-11-20-big-picture/owner-render-iteration-2-2026-11-20.webp) | The owner's previous iteration, kept for history. |
| [claude-mockup-superseded-desktop-1440.webp](design/2026-11-20-big-picture/claude-mockup-superseded-desktop-1440.webp), [mobile-390](design/2026-11-20-big-picture/claude-mockup-superseded-mobile-390.webp) | Claude's first flat mockup. **Superseded** by the owner render. Source: [source/claude-mockup-superseded/](design/2026-11-20-big-picture/source/claude-mockup-superseded/index.html). The font file is not copied here; use the repo's Manrope. |

The owner's first alternative render, which still had the colored Google logo and a star rating, was reviewed in chat only. It is not stored here. All of its issues are fixed in the final render.

## Why the section changes

- The staged homepage shows a "Your business" hub twice. The Hero has the four-direction hub, and The Big Picture repeats it in a smaller circular diagram. The path design removes this repeat.
- A hub explains *what* ROBYLO does. The path explains *why it matters to the owner*: one customer moving from a search to an inquiry. This matches the approved customer-first direction (2026-11-20).
- The 70/30 rule (2026-11-19) asks for meaningful visuals instead of text-and-rules sections. This section becomes the homepage's main explanatory visual after the Hero.

## What this replaces

Once approved, this supersedes these approved or staged items. Each one needs the owner's explicit confirmation, so none is changed silently:

| Item | Approved / staged now | Proposed |
| --- | --- | --- |
| Visual | "Preserve the existing diagram and its four categories. Do not rebuild the visual." (ROBYLO-CONCEPT.md, 2026-11-18) | Three-step path with laptop centerpiece |
| Heading | A website is just the beginning. | From a Google search. / To a new customer. |
| Body | Staged 32319aa0: "We connect your website, Google listing, ads, and business tools so they work together. You get one point of contact and keep ownership of your digital assets." | See copy below. The one-contact and ownership facts are dropped from this section (open decision 3). |
| Outcomes row | Get found · Win customers · Save time | Step titles: Get found · Win the customer · Stay organized |

Codex's homepage prototype (PR #36, `prototypes/homepage-visual-concept/`) also proposes a three-step customer journey with small interface sketches. If this spec is approved, it supersedes that Big Picture section. The idea is the same, and the owner's render is now the reference.

## Copy (exact)

- **Eyebrow:** The big picture
- **H2 line 1:** From a Google search.
- **H2 line 2 (secondary tone):** To a new customer.
- **Lede:** Every new customer takes the same path. Your Google listing, website, ads and everyday tools each handle one step. We make them work as one, so fewer customers slip away.

| # | Step title (H3) | Caption | Card content |
| --- | --- | --- | --- |
| 1 | Get found | Show up when customers search in your area. | Search field "your service near me"; one listing row: map-pin tile and three neutral bars |
| 2 | Win the customer | Turn visits into calls and quote requests. | Laptop showing a generic site: neutral bars, mountain placeholder image, black button "Request a quote →", three small tiles (image, calendar, person icons) |
| 3 | Stay organized | Every inquiry lands in one place, ready for a reply. | Header "New inquiry" · "Just now"; check rows "Sent to your inbox" and "Added to your customer list" |

Copy rules this follows:
- No logos, ratings, review counts or results. The card text describes the mechanics, not outcomes.
- "Google" appears as a word only. No Google logo, colors or icon.
- "Request a quote" uses sentence case, like all buttons on the site.
- No calendar or "Booked" state. A booking feature has not been confirmed as part of the offer.

## Desktop layout (1440)

**Section**
- Background: neutral gradient from #FFFFFF at the top to #F5F5F5 at the bottom. The section then flows into "What we do", which already uses #F5F5F5.
- Large background arc: a thin white or very light highlight, decorative.
- Use only neutral grays. The render has a slight blue tint (about #F6F7FA). Do not copy it.
- Padding about 120px top and 96px bottom. Match the neighbouring sections in browser rather than fixing it at a number.

**Head**
- Aligned to the site's content container, the same left edge as the Hero.
- Eyebrow: the native 13px / 600 eyebrow role.
- H2: an existing Kit heading role at display size. Line 2 follows the global two-tone rule (design-global-typography-2026-11-20.md): weight 600, about 88% of the main size, secondary gray.
- Lede: max width about 640px, body copy at 18px.

**Stage**
- Maximum width 1200px, centered. It may be wider than the text container, as in the render.
- CSS grid with three columns, about `1fr 1.3fr 1fr`, and two rows:
  - Row 1: the three step labels. Label 1 sits about 48px lower and label 3 about 32px lower than label 2, which makes the gentle arc in the render.
  - Row 2: card 1, laptop, card 3. The laptop sits in the center column, with its base about 40px lower than the side cards.
- Use grid, not absolute positioning, so the layout survives copy changes and resizing.

**Step label** (pill)
- White, radius 999px, padding about 18px 32px 18px 56px.
- A soft shadow, `0 12px 32px rgba(0,0,0,.08)`.
- A black 44px circle with a white numeral 18px / 700, overlapping the label's left edge by about half its width.
- Title: H3 role 24px / 700. Caption: 15–16px / 1.45, #444, wraps to two lines.

**Side cards**
- White, radius 24px, 1px border #EDEDED, shadow `0 24px 60px rgba(0,0,0,.08)`, padding 24px.
- **Keep them flat. Do not use the render's 3D tilt.** Live text on a CSS-tilted element renders soft and harder to read. Depth comes from the laptop, the shadows and the arc.
- Icons: simple line icons, 1.75px stroke, black, `aria-hidden`.

**Laptop**
- An image asset, about 620px wide, WebP with a transparent background, exported at 2× (about 1240px).
- The neutral screen content may be part of the image. It is illustrative, so the button text is decorative too.

**Connectors**
- Two thin light curves with a soft white glow, from card 1 to the laptop and from the laptop to card 3.
- One inline SVG over the stage, `aria-hidden`.
- Shown at 1024px and up only.

**Motion**
- None required. The 70/30 rule says no unnecessary motion.
- Optional: one fade-up of the stage on first view, at most 300ms. It must respect `prefers-reduced-motion`.

## Tablet (768–1023)

- Head as on desktop, in the narrower container.
- Steps in one column using the phone pattern, centered with a maximum width of 560px.
- Connectors and the background arc are hidden.

## Phone (390; check at 320–430)

See [mobile-390-reference.webp](design/2026-11-20-big-picture/mobile-390-reference.webp).

- Order: eyebrow → H2 → lede → step 1 label → card 1 → step 2 label → laptop → step 3 label → card 3.
- Each label overlaps the top of its card by about 6–8px.
- Spacing: about 36px between steps; padding about 56px top and 64px bottom; 16px gutters.
- Labels may run full width with the caption on two lines. Cards use the full container width.
- The laptop is about 100% of the container width, scaled down.
- No connectors and no arc.
- H2 at the mobile heading size, about 32–34px. Line 2 uses the same two-tone rule.
- Text stays live. No text appears only inside an image, apart from the decorative laptop screen.

## Structure and accessibility

- One `section` with the existing eyebrow, then the H2 as one heading element (line 2 in a span). The steps form an ordered list (`ol`), and each `li` holds the H3, the caption and the card.
- The laptop image uses `alt=""`. The steps already describe the same content in text.
- Card text is real text, so screen readers get "your service near me", "New inquiry", and so on.
- Contrast: captions in #444 on white pass AA. Do not lighten them to the mute gray.
- No interactive elements in this section. The cards look like UI but are not buttons or links.

## Elementor Atomic notes for ChatGPT Work

- Reuse component 5869 (Base section) and 5877 (Heading and text) for the head. Do not create new global colors. Add new global classes only for the label, side card and stage grid, prefixed like the existing classes.
- Build the label and cards from Atomic div blocks and headings or paragraphs. Use inline SVG or icon widgets for icons.
- Save the connector SVG as its own asset in the repo, the same way PR #36 stored the Hero hub SVGs.
- Before editing, record a rollback snapshot of the current Big Picture section: element IDs, its diagram and the staged copy 32319aa0.
- Work on a staged draft behind Coming Soon. No publishing without the owner's word.

## Assets and approval

The laptop is the only image in this section, plus optionally the arc as an image. Cards, labels and text are live.

The render is about 1774px wide, so the laptop inside it is about 715px — too small for a sharp 2× asset at 620px. Production needs a new laptop export at about 1240px or wider, on a transparent background, with the same neutral screen.

Until that asset exists and the owner approves it, use a neutral labelled placeholder ("Laptop illustration — pending approval"), following the placeholder workflow (2026-11-19). The owner made the render, so he approves the final asset. Record the approval in decisions.md.

## Acceptance checks

- Desktop at 1440 matches the owner render in composition. Allowed differences: flat cards, neutral background, real text.
- No horizontal scroll at 320, 375, 390, 768, 1024 or 1440.
- All text is selectable and is in the DOM in reading order: H2 → lede → step 1 → 2 → 3.
- No Google logo, stars, ratings, numbers or colored elements anywhere in the section.
- The connectors are hidden below 1024. Nothing overlaps text at any width.
- The laptop image is under 150 KB as WebP and is lazy-loaded (the section sits below the first screen).
- The neighbouring Hero and What we do sections are unchanged.

## Open decisions for the owner

1. Approve this render as the Big Picture direction. This supersedes the rule "preserve the existing diagram".
2. Approve the step titles "Win the customer" and "Stay organized", which replace the approved outcomes "Win customers" and "Save time".
3. The staged body says "one point of contact" and "keep ownership of your digital assets". The new lede drops both. Claude's recommendation: keep them out of this section. They are already on Services ("Yours to own") and should be in the Hero or How we work. If you want them on Home, add the short line "One point of contact. Everything stays in your name." under the stage.
4. Laptop asset: a new high-resolution export from your render tool, or a neutral placeholder until one exists.
5. Serial comma: the lede uses none ("ads and everyday tools"), while ChatGPT Work's staged copy uses one ("ads, and business tools"). Pick one style for the whole site. Claude's recommendation: no serial comma, matching the approved Hero copy.
