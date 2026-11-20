# Homepage palette decision

**Recommendation: warm hybrid.** The change from pure black and cool gray to near-black and warm off-white is most evident where the Hero leads into The Big Picture. The laptop and search panel gain separation without relying on a dark shadow. In Selected Work, Chicago Mounting’s green and GCPRO Restoration’s blue remain the strongest colors. The restrained blue quote action is sufficient to test a single accent.

| Direction | What the comparison shows | Implication for Atomic |
| --- | --- | --- |
| Current monochrome | Crisp logo and CTAs, with clear separation from client imagery. The dark hub, black numbered circles and panel shadows compete for attention. | Already implemented. No adoption cost. |
| Warm hybrid | Softer transitions through Hero, The Big Picture, services and process. The dark final CTA still gives the page a clear ending. The pictures carry most of the personality. | A small set of existing surface, text and shadow roles could carry the treatment after approval. Keep the single blue accent selective. |
| Soft pastel | The blue and green badges make the progression easiest to follow. Repeating the blue tint across the homepage gives it a cooler, more product-oriented character. | Adds distinct status and accent roles. Their meaning and use on other pages would need to be agreed. |

## Visual comparison

[Desktop board](desktop-comparison.jpg) · [Mobile board](mobile-comparison.jpg) · [The Big Picture and Selected Work together](big-picture-and-work.jpg)

| Full-page Chrome capture | 1440 px | 390 px |
| --- | --- | --- |
| Current monochrome | [Desktop](mono-1440.jpg) | [Mobile](mono-390.jpg) |
| Warm hybrid | [Desktop](warm-1440.jpg) | [Mobile](warm-390.jpg) |
| Soft pastel | [Desktop](pastel-1440.jpg) | [Mobile](pastel-390.jpg) |

All six images use the existing authenticated homepage, page 5894. The two alternatives use temporary browser-only paint changes over the same published markup. The pastel comparison extends the trial colors to neighboring sections to evaluate the full page. The separate Elementor draft colors only The Big Picture. All captures include the header, Hero, The Big Picture, What We Do, Selected Work, How We Work, final CTA and footer. The generic laptop and all client media retain their existing sources. No replacement assets were produced. The palette previews lightly tone the laptop without changing its screen content. The existing floating support widget can appear at a different position or outside the full-page capture depending on Chrome's capture height.

## Checks

- Compared full-page desktop and mobile screenshots side by side. Desktop screenshots are 1440 × 4314 and mobile screenshots are 390 × 5407, excluding the WordPress toolbar. The section grid, text wrapping, card positions and carousel starting position match at each width.
- All three palettes had zero horizontal page overflow at 320, 375, 390, 768, 1024 and 1440 CSS pixels. The measured six section heights were identical across treatments at the four intermediate checks. The six customer projects, their links and the black header logo use the original page content.
- Calculated contrast for the warm secondary heading on off-white is 6.59:1. White on the blue quote action is 6.62:1. In the pastel treatment, navy on the blue and green badges is 8.13:1 and 8.53:1. The pastel secondary headline on ice is 4.46:1, suitable for the large heading. Use a darker color for normal-size text. These checks are for the named pairs, not a full accessibility audit.
- Anonymous WordPress requests returned Coming Soon. The authenticated homepage declared noindex. Browser overrides were cleared after review.

## Preserved Elementor draft

Before the owner redirected the work to comparison, local styles on 39 existing Big Picture elements had been staged. The global kit, copy, media references and sibling sections were unchanged in the subsequent configuration comparison. The full homepage tree contained 189 elements before and after. The current monochrome version is still the published, protected homepage.

The [before-and-after style record](staged-styles.json) preserves the original and staged local CSS for each affected element. Elementor reported pre-change revision **6423**. For a future section-only reversal, reapply only the recorded before styles to their matching IDs after checking for intervening edits. A full revision restore also rolls back unrelated later document changes.

The CSS files here reproduce the two temporary review treatments in Chrome. They are review materials and are not enqueued by WordPress. Owner approval is pending.
