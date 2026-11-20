# ROBYLO homepage visual concept

**Proposed for owner review · 2026-11-20.** Open [index.html](index.html) in a browser. The prototype works offline, with no build, scripts, or dependencies. Browse the [1440px desktop capture](screenshots/homepage-1440.jpg) and [390px mobile capture](screenshots/homepage-390.jpg).

The reference archive contains seven screenshots. The service images, customer journey, large case preview and clear closing action informed the relative scale and section rhythm. No reference branding, colors, typography, content, artwork, case claims, or layout was copied.

## Composition

| Section | Visual decision |
| --- | --- |
| Hero | Updated to the owner-supplied Business Hub reference on 2026-11-20: live Manrope headline, two CTA links, four semantic HTML service cards, a dark ROBYLO hub, CSS depth and SVG connections. See the current Hero captures below. |
| The Big Picture | Shows the customer journey in three steps. Local search and ads lead to the website, then a customer inquiry leads to follow-up. Tiny static interface sketches illustrate each step. Phone layouts pair each sketch with its explanation on the same row. |
| What We Do | Gives Website Design & Development a full-width feature with the GCPRO plate. Local search, advertising and automation use the three existing illustrative previews. Each service has one benefit and one existing destination. |
| Selected Work | Uses a black portfolio area with two larger projects followed by four smaller ones. The phone layout shows the first two full-width, then two columns. Each plate and its live site link remain available without swiping. The grid is a concept decision for review. |
| How We Work | Uses a numbered vertical sequence next to the existing introductory copy. It stacks on mobile. |
| Final CTA | Groups the existing short headline, supporting copy and email action. The desktop composition is centered and the phone layout is left aligned. |

The original wordmark, Manrope, Kit 5744 monochrome colors, 1200px content cap, and 4px buttons carry through the concept. The hero location label, the three short journey explanations and the one-action service labels are proposed wording. Service descriptions, the collaboration copy, and the six live project destinations are carried over. Main prototype navigation jumps to its sections. The About and footer destinations remain on the existing site.

## Asset inventory

- **ROBYLO wordmark and Manrope.** The original logo file is used across the header and footer. The footer inverts the same mark. The local variable font includes its [OFL license](assets/manrope-OFL.txt).
- **Six Studio Plate pairs.** Chicago Mounting (6145/6146), GCPRO Restoration (6167/6168), Kolo Properties (6169/6170), Center For Dental Healing (6171/6172), Elite Mechanical Services (6173/6174), and Quickzy Cleaning (6179/6180). The prototype packages the exact desktop files and the current site's 768×960 mobile renditions. Their crops and project colors are retained.
- **Three existing illustrative previews.** Local search, advertising and automation from the Services work (6319, 6320, 6321 respectively). The prototype re-encodes the existing previews as WebP.
- **Proposed visuals.** The three static HTML/CSS sketches in The Big Picture are review compositions. They contain no client data or interactive functionality. If the concept is approved, the sketches can guide original final artwork. The three existing service previews can stay or be refined into more specific local-search, campaign and follow-up examples with owner approval.

## Verification

Visually inspected full desktop and mobile renders in Chrome. Checked the prototype at 320, 390, 768, 1024 and 1440 CSS px. All six sections and six project links are present. No horizontal overflow or missing image in the delivered captures. The intended Manrope font loaded. The mobile menu opened and closed from the keyboard, and visible focus was verified on a Hero link. The static pages include noindex. WordPress, Elementor, the Atomic Lab, Kit 5744, and Coming Soon were untouched.

Baseline reviewed in [PR #34](https://github.com/vvvetalll/robylo-website-starter/pull/34) and [PR #35](https://github.com/vvvetalll/robylo-website-starter/pull/35). The existing [ROBYLO concept](https://github.com/vvvetalll/robylo-website-starter/blob/a7b2c937e24d73d729596350df11f40f24b98d41/docs/ROBYLO-CONCEPT.md) guided the visual hierarchy and asset rules. Owner approval of this prototype is required before Elementor implementation.


## Hero reference implementation — 2026-11-20

**Implemented and visually verified; owner review pending. Slider remains blocked.** Codex changed only the Hero markup and Hero-scoped styles in this standalone prototype. Header, all sections from The Big Picture onward, global variables, existing assets and destinations are unchanged. No WordPress/Elementor operations, merge or deployment occurred.

- Replaced the Chicago Mounting Hero plate with an accessible `figure`, caption and semantic list of four service cards. All service text is selectable HTML; the logo remains the existing PNG. CSS provides the circular hub, positioning, translucent cards, lighting, shadows and curved background. Inline SVG supplies the orbit, connections and monochrome icons. The reference screenshot is not embedded or used as a background.
- Applied the exact supplied eyebrow, headline, supporting paragraph and two CTA labels. The primary action still targets `#contact`; the outline action targets `#work`.
- Desktop uses two columns; at 768px and below the copy precedes the hub. At 390/320px, card labels remain 12px and the two buttons have 48px targets. Mobile connector paths adapt to the taller diagram without duplicating the cards or their text.
- Used `overflow: clip` to contain the Hero background without creating an internal scrolling area. Initial interaction checks exposed clipping after following an anchor with `overflow: hidden`; the final implementation was rechecked after correcting the source.

### Actual browser evidence

[1440 desktop](screenshots/hero-1440.jpg) · [1024](screenshots/hero-1024.jpg) · [768](screenshots/hero-768.jpg) · [390 mobile](screenshots/hero-390.jpg) · [320 mobile](screenshots/hero-320.jpg) · [Keyboard focus](screenshots/hero-keyboard-focus.jpg) · [Measurements](screenshots/hero-verification.json)

Visually inspected Chrome renders at all five widths. No clipped service text, overlap or horizontal page overflow was observed. Logo loaded; no console errors were captured. Tab produced a visible 2px black outline on the secondary CTA; Enter navigated to Selected Work; the primary CTA reached Contact. Returning to the top preserved the complete Hero. The hub is informational and creates no artificial tab stops. It is static, with no motion, so reduced-motion preferences require no animation override.

### Differences and unresolved requirement

The previously implemented Apple-style **Hero** slider could not be located in the available branch/history, project archives or the current prototype. The identifiable Apple-inspired carousel belongs to Selected Work, which is explicitly outside this task's scope. PR #36 originally contained no Hero slider, script or approved additional slides. The supplied reference depicts three positions but specifies content for only one. Accordingly, no additional slides, substitute slider, inert arrows or decorative pagination were fabricated. **Slider navigation, pagination and transitions are not implemented or verified.** Restore them only when the original source and approved slides are identified.

CSS gradients/shadows approximate the reference's soft rendered lighting; they are not a flattened copy of its artwork. The existing Header is preserved. On mobile/tablet the diagram stacks below the copy and its labels reflow for legibility. The monochrome icons follow the supplied reference as simple inline SVG paths.

The older `homepage-1440.jpg` and `homepage-390.jpg` full-page images above record the initial concept; the dated Hero captures in this section show the current Hero. All other section markup and baseline styling were checked for preservation.
