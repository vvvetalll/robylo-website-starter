# Studio Plate prototype — Chicago Mounting

2026-11-18 · Claude (design) · Status: **Proposed** — image prototype for owner review. Nothing was changed on the ROBYLO website, in WordPress or in Elementor.

Based on [Portfolio visual presentation research](design-portfolio-presentation-research-2026-11-18.md), direction A · Studio plate.

## Deliverables

| File | What it is |
| --- | --- |
| [robylo-work-chicago-mounting-plate.webp](design/2026-11-18-studio-plate-chicago-mounting/robylo-work-chicago-mounting-plate.webp) | Finished plate, master 1600 × 1200, WebP q80, 80 KB. This is the file for WordPress. |
| [robylo-work-chicago-mounting-plate-800.webp](design/2026-11-18-studio-plate-chicago-mounting/robylo-work-chicago-mounting-plate-800.webp) | Small size 800 × 600, 34 KB (reference only; WordPress can generate it). |
| [Carousel preview, desktop 1440](design/2026-11-18-studio-plate-chicago-mounting/2026-11-18-studio-plate-carousel-desktop-1440.png) | The plate in the ROBYLO carousel at 1440 px, rendered at 2× |
| [Carousel preview, mobile 390](design/2026-11-18-studio-plate-chicago-mounting/2026-11-18-studio-plate-carousel-mobile-390.png) | Same image file at 390 px, 3:4 crop, rendered at 2× |
| [source/](design/2026-11-18-studio-plate-chicago-mounting/source/) | Lossless PNG of the plate, the two captures, plate and preview HTML, render scripts |

Only card 1 is real. Cards 2–5 in the previews are empty mats with the existing project captions, to show rhythm; their plates are not made yet.

## Captures

- Source: public homepage https://chicagomounting.com/, captured 2026-11-18 in a cloud Chrome browser. No admin screens, cookies or private data. No retouching of client content.
- **Desktop:** viewport 1440 × 992, 1× pixel density. The page area without the scrollbar is 1420 css px wide. Two viewport captures (top, then one page down) were stitched; the seam falls in the white gap above the price cards and was checked visually. Result: 1420 × 1854 px; the plate uses the top 1274 px.
- **Mobile:** viewport 500 × 992, page area without scrollbar 480 css px. The site serves its mobile layout at this width (Elementor reports the `mobile` breakpoint). Result: 480 × 992 px.
- **Limitation:** the cloud browser cannot go below 500 px wide, so the phone screen is a 480 px mobile layout, not 390 px. Text wraps slightly differently from an iPhone. For the final production set, re-capture at 390 × 844 at 2–3× with Chrome DevTools device mode on a local machine.

## Final plate geometry (v2)

Plate 1600 × 1200 (4:3). All values in plate pixels.

| Element | Final value | Notes |
| --- | --- | --- |
| Mat | `#F5F5F5` (rb-surface), flat | No gradient, texture or shadow |
| Desktop screen | x 80, y 80, width 1248, visible height 1120 (bleeds off bottom) | Capture scaled 1248 / 1420 = 0.879. Top corners 6 px. 1 px `#D6D6D6` outline |
| Phone screen | x 1200, y 556, width 320, visible height 644 (bleeds off bottom) | Capture scaled 320 / 480 = 0.667. Top corners 28 px. 1 px `#D6D6D6` outline |
| Phone separation | 10 px ring in mat colour around the phone outline | Replaces the drop shadow from the research |
| Text, logos, devices | None | |
| Outer margins | 80 left, top and right (phone) | |

## Changes from the research spec, and why

1. **No drop shadow on the phone.** The research proposed one soft shadow. AI-CONTEXT.md records the owner brief: no decorative shapes, gradients or shadows. A 10 px ring in the mat colour separates the phone from the desktop screen just as clearly.
2. **The phone bleeds off the bottom edge too.** In the research, the phone sat inside the plate with a visible bottom. A real capture ends mid-content, and a phone that stops at an arbitrary point looked unfinished. When both screens are cut by the same bottom edge, the composition reads as one system.
3. **Mobile card crop is 3:4, not 4:5.** At 4:5 the crop line fell through the desktop headline ("…ITING", a lone "&") and through a price card. With a 3:4 crop (the right 900 × 1200 of the plate), the line falls in the empty gap between the headline and the hero image, and between price cards 2 and 3. The mobile card is 332 × 442 px at 390 instead of 332 × 415.
4. **Margins 96 → 80, desktop moved 16 px left and up.** This places the 3:4 crop line in that gap (css x ≈ 705 on the captured page) and keeps all outer margins equal.
5. **Phone moved down from y 540 to 556.** At 540 a 2 px strip of the next green button showed along the bottom edge.

## Carousel implementation values (for the later handoff)

| | Desktop 1440 | Mobile 390 |
| --- | --- | --- |
| Card width | 560 px, gap 24, first card on the 1200 container | 85vw (332 px), gap 16, 20 px side inset |
| Image ratio | 4:3 | 3:4 |
| Image fit | `object-fit: cover; object-position: 50% 50%` (shows whole plate) | `object-fit: cover; object-position: 100% 50%` (right side, phone leads) |
| Image radius | 4 px | 4 px |
| Caption | Name H3 24/700, meta 16 rb-mute, 20 px gap above | Name 20/700, meta 15 rb-mute, 16 px gap above |
| Controls | Prev/next 48 × 48 on the heading row | Hidden; swipe |

The previews use the existing V2 section title and the existing project captions from the homepage V2 mockup. No new copy or claims were added.

## Checks

| Check | Result |
| --- | --- |
| Plate render | Headless Chrome, 1600 × 1200 at 1×; output 1600 × 1200 |
| Previews | Headless Chrome 1440 × 900 and 390 × 844 at 2×, Manrope loaded, `scrollWidth` equals viewport at both widths. Card image measured 560 × 420 (desktop) and 332 × 442 (mobile) |
| Cropping | Desktop card shows the whole plate. Mobile 3:4 crop: phone fully in view with 80 px right margin; crop line falls in empty areas of the hero and price rows. Centered section titles under the hero are still cut at the crop line ("…RICES IN CHICAGO"); this is unavoidable with any crop of a full page and sits in the lower half |
| Readability | Desktop card (plate at 0.35×): site headline, buttons, hero image and prices readable as a website at a glance; small nav text is not meant to be read. Mobile card (0.37×): the phone screen's headline and hero are recognisable; body text is not readable, which is acceptable for a thumbnail that links out |
| Image quality | Both captures are scaled down (0.879 and 0.667), never up, so the 1600 master is sharp. On a 2× display the desktop card draws 1120 device px from the 1600 file, still a downscale |
| File weight | 80 KB (1600) and 34 KB (800), well under the 250 KB / 90 KB targets |

Not verified: Elementor Atomic V4 support for a per-breakpoint aspect ratio and object-position on the image; real devices; a 390 px capture; tablet 768/1024 card behaviour.

## Open decisions for the owner

1. Approve the v2 geometry (80 px margins, both screens bleeding off the bottom, no shadow).
2. Approve 3:4 for the mobile card (instead of 4:5 from the research).
3. Desktop shows the hero plus the start of the price section. If the owner prefers only the hero, the desktop screen can be made larger (less of the page shows), at the cost of a tighter phone overlap.
4. Approve re-capturing all five sites at true 390 px on a local machine for production.
