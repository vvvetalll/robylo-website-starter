# ROBYLO — Portfolio visual presentation research

2026-11-18 · Claude (design) · Status: **Proposed** — research and visual direction only. Nothing was changed on the site, in WordPress or in Elementor.

Live version of this document: https://claude.ai/artifact/LrrnA4cMoFea9zVRDXDk3P

> Update 2026-11-18: the plate was prototyped on Chicago Mounting and the geometry was adjusted (no shadow, margins 80, both screens bleed off the bottom, mobile crop 3:4). See [Studio Plate prototype](design-studio-plate-chicago-mounting-2026-11-18.md); where the two differ, the prototype is current.

## Summary

**Recommendation: one "Studio plate" for every project — a single 4:3 image per card in which the client's real desktop screen sits on a neutral ROBYLO gray, cut by the bottom edge, with the phone screen overlapping it in the lower right.** No laptop or phone frames, no props, no colour from ROBYLO. The plate is exported as one finished image, so Elementor only places a picture.

- The owner's proposed direction (desktop + mobile on a neutral background) is right. The research supports it; this only tightens it: one fixed geometry, one crop rule and one export pipeline, so five very different brands read as one set.
- What the best studios have in common is not the device or the mockup. It is that every card on the page has **the same ratio, the same background logic and the same caption grammar**.
- Device mockups (laptop + phone renders) are the most common premium look, but a poor fit for ROBYLO: they add a second visual language, date quickly and need 3D or stock assets. Plain full-width screenshots are the opposite failure: raw, and five clashing palettes side by side.
- On mobile the same image file is reused, cropped to its **right** 4:5 with `object-fit: cover` so the phone screen leads. One asset, two crops.

## Research: 8 live studio sites

All eight were opened in a browser at 1440px on 2026-11-18. "Observed" is what the page showed; "Opinion" is the design reading and fit for ROBYLO. Ueno, Koto and BASIC/DEPT were also checked, but their work pages were offline or returned 404, so they are excluded.

| Studio | Observed | Opinion: why it works / fit for ROBYLO |
| --- | --- | --- |
| [Apple — iPhone "Explore the lineup"](https://www.apple.com/iphone/) | Horizontal carousel on a light gray section. Cards are equal size, about 3:4, large radius, each product on its own colour field. Heading left-aligned with the page content; a text link at the right of the heading row; previous/next buttons below the cards; the last card is cut by the viewport edge. | The reference ROBYLO already chose. What transfers: identical card size, heading row on the content grid, controls outside the image, the cut-off next card. What does not: per-card background colours — Apple can afford them because the products are one family. |
| [Locomotive](https://locomotive.ca/en/work) | Work index is a text table: name, industry, city. Images appear only on hover. 47 projects. | Strongest proof that **caption grammar** creates consistency. Their "name / industry / place" row is what ROBYLO's cards already carry. Hover-only images are wrong for five projects on a homepage. |
| [Clay — Websites](https://clay.global/work/web) | Large feature image, then a two-column grid. Mixed treatments: full-bleed brand photography, a hand holding a tablet, a flat website screen over artwork on a pale gray mat. Title + one line under each. | Shows the risk of mixing treatments: individually beautiful, together uneven. The Art Bridges card — a real site screen on a neutral mat — is closest to what ROBYLO should do. |
| [Metalab](https://www.metalab.com/work) | Dark index of rows: client logo, one-sentence description, services in muted gray. A few rows open a full image (monitor on a pedestal, phone on a record, laptop on a desk). | Most projects are text-only, which works because the logos are famous. ROBYLO's clients are not, so text-only rows would undersell them. **Services in muted gray** is worth reusing. |
| [Instrument](https://www.instrument.com/work) | Stack of large media cards, mostly autoplaying video, then client name and one line; "Case Study" label and hashtags. Stack/grid toggle. | Motion makes it lively but needs video production per project. Not practical for ROBYLO now. |
| [AREA 17 — Clients](https://area17.com/clients) | Full-width rounded media, then a two-up row. Mostly lifestyle photography and video, not website screens. Caption: client name + "Since 2024" in gray, then a large one-line sentence. | "Since 2024" is a credibility device that needs no metrics. The photography approach does not fit: ROBYLO has no shoots of these clients. |
| [Fantasy](https://fantasy.co/work) | Hero is a 3D-rendered laptop and phone on a coloured gradient. Project list numbered 01/…12/ with oversized type. | The polished device-render look many call "premium". Needs per-project 3D renders; colour comes from the render, not the client. Wrong for a monochrome studio. |
| [Halo Lab](https://www.halo-lab.com/projects) | Two-column cards with big brand-coloured visuals (UI fragments, a phone on fabric), short title and a long descriptive headline. | Loud; each card a different art direction. A counter-example of what ROBYLO is moving away from. |

Common to all eight: a short caption under or beside the image (name, then category or one sentence); the image carries the colour and the page stays quiet; no studio uses a full-length raw screenshot.

## Strongest patterns

1. **One container, many brands.** The most curated studios (Apple, Locomotive, Metalab) give every project the same frame; only the content inside changes. The busiest ones (Halo Lab, Clay's grid) art-direct each card separately.
2. **Caption grammar over imagery.** Name, category, place or year, in a fixed order and type style. Cheap, honest, and does most of the work of consistency.
3. **Colour lives inside the image, never around it.** Backgrounds, captions and controls stay neutral.
4. **Carousels follow Apple's shape:** equal cards, heading on the content grid, controls beside the heading, the next card cut by the edge.
5. **Device renders are reserved for hero moments,** not repeating cards (Fantasy, Metalab, Clay feature image).

Opinion: pattern 1 is the one ROBYLO most needs. Five local businesses with different brand colours only read as one portfolio if the frame around them never changes.

## Comparison of the four approaches

Scores are a judgement for ROBYLO specifically (1 = poor, 5 = strong).

| Approach | Consistency across 5 brands | Shows a real, working site | Premium feel | Mobile carousel | Production effort | Fit with monochrome ROBYLO |
| --- | --- | --- | --- | --- | --- | --- |
| Desktop screenshot only | 3 — palettes clash edge to edge | 4 | 2 — reads as raw | 2 — text unreadable at 320px | Very low | 3 |
| Mobile screenshot only | 4 | 3 — hides that we build full sites | 3 | 5 | Low | 4 |
| Desktop + mobile on neutral plate | **5** — the plate is the constant | **5** | **4** | 4 — crop to the phone side | Medium, one template | **5** |
| Editorial crop (close-up detail) | 4 | 2 — you can't tell what the business is | 5 | 4 | High — every crop art-directed | 4 |

Editorial crops are the most stylish, but with unknown local businesses the visitor first needs to see *a whole site that works on a phone*. Crops are better saved for a future case-study page.

## Three visual directions

### A · Studio plate (recommended)
Real desktop screen + real phone screen, no device frames, on a flat ROBYLO gray mat. Desktop screen bleeds off the bottom edge; phone overlaps lower right.
- References: Clay — Art Bridges card; Apple — equal cards, neutral field, carousel shape.
- Gains: shows a whole, working, responsive site in one glance; the mat neutralises five palettes; one template, cheap to produce and update.
- Costs: less dramatic than renders or video; quality depends on clean captures.

### B · Single screen on a mat
Only the desktop homepage, top of page, inset on the same mat. No phone.
- References: Apple product cards; Metalab's restraint.
- Gains: calmest and simplest.
- Costs: hides the mobile work, a key selling point for small businesses whose customers arrive on phones. Five desktop heroes in a row look repetitive.

### C · Editorial crop
One large close-up per project (a headline, a booking block, a service grid), cropped tight.
- References: AREA 17; Instrument.
- Gains: most premium and magazine-like; hides weaker parts of a site.
- Costs: the visitor cannot tell what the business is or judge the whole site; each crop needs art direction, so consistency drifts.

Rejected: 3D device renders (Fantasy) — off-brand and expensive; mixed per-project art direction (Halo Lab, Clay grid) — the inconsistency we are trying to avoid.

## Recommended system: the Studio plate

**Plate (master export, 1600 × 1200, 4:3)**

| Element | Spec |
| --- | --- |
| Mat | Flat `#F5F5F5` (rb-surface) if the section is white. If the section is #F5F5F5, use `#EBEBEB`. No gradient, texture or shadow on the mat. |
| Desktop screen | x 96, y 96, width 1248 px (78%). Top of the page from a 1440-wide capture, cut by the plate's bottom edge. 1px `#D6D6D6` outline, 4px top corners. |
| Phone screen | 300 × 650 (from a 390 × 844 capture), right edge at x 1504, bottom at y 1104. Radius 24px (screen shape, not a device). 1px `#D6D6D6` outline. One shadow: `0 12px 32px rgba(0,0,0,.12)`. |
| Text on the plate | None. No logos, labels or arrows added by ROBYLO. |

**Card in the carousel (desktop 1440)**
- Image 4:3, card width 560 px, gap 24 px: two full cards inside the 1200 container, the third cut by the viewport edge. Card radius 4px.
- Caption under the image, left-aligned: client name (H3, 24, rb-ink), then `Industry · Town` (16, rb-mute). Optional third line: services in rb-mute. No metrics, no quotes.
- Heading row on the container grid: section title left, prev/next buttons right.

**Mobile adaptation (390)**
- Card width 85vw (≈ 332 px), gap 16 px, next card peeks.
- Same image file, shown at 4:5 with `object-fit: cover; object-position: 100% 50%`, keeping the phone screen fully in view. One asset, no second export.
- Caption identical to desktop; swipe only, arrows hidden under 768 px.

Implementation note (confidence Medium): the 4:3 → 4:5 switch needs only aspect-ratio and object-position changes per breakpoint. Not verified whether the Atomic V4 image widget exposes object-position per breakpoint natively; ChatGPT Work should check before choosing a small CSS rule instead.

## Composition per project

Same plate for all five; only the two captures change. These are capture instructions, not claims about the sites; check each against the live site at capture time.

| Project | Desktop screen | Phone screen | Watch out for |
| --- | --- | --- | --- |
| Chicago Mounting (lead card) | Homepage, top, hero fully loaded | Homepage hero on phone, or the services page if the hero repeats the desktop too closely | Video or slider heroes: capture a still frame that shows the headline |
| GCPRO Restoration | Homepage, top | A second real page (service or project page) | Emergency banners, chat widgets, pop-ups: hide before capture |
| Kolo Properties | Homepage, top | Homepage on phone, scrolled to the first content block if the hero is only a photo | A full-bleed photo hero can dominate; the mat and outline must still frame it |
| Center For Dental Healing | Homepage, top | Homepage on phone with the booking/contact entry point visible, if the site has one | Cookie and booking pop-ups |
| Elite Mechanical Services | Homepage, top | Homepage on phone | Place in the order so similar hues are not adjacent |

Making five brands feel like one portfolio:
1. The mat, geometry, outline and shadow never change.
2. Capture all five on the same day, same browser, same viewport, same scroll position (top).
3. Order the carousel by hero tone after capture so dark and light heroes alternate.
4. Captions use one grammar: name, then `Industry · Town`. No logos added by ROBYLO.
5. If one site looks weaker, use a better real page of that site, not a crop that misrepresents it.

## Dimensions, formats, export

**Capture**
- Desktop: Chrome, viewport 1440 × 900, DPR 2, scrolled to top, fonts and lazy images loaded, animations finished. Capture 1440 × 1100 css px so there is enough to bleed off the plate.
- Phone: viewport 390 × 844, DPR 3 (or 2 if file size matters).
- Hide cookie banners, chat widgets, pop-ups, admin bars and scrollbars. No browser chrome, no status bar.
- Live public site only. No retouching of client content.

**Export**

| File | Size | Format | Target weight |
| --- | --- | --- | --- |
| Plate, master | 1600 × 1200 | WebP, quality 80 | ≤ 250 KB |
| Plate, small | 800 × 600 | WebP, quality 80 | ≤ 90 KB |
| Source | 3200 × 2400 | PNG, kept in `docs/design/` only, not uploaded to WordPress | — |

- Let WordPress build `srcset` from the 1600 master.
- Naming: `robylo-work-<client-slug>-plate.webp` (e.g. `robylo-work-chicago-mounting-plate.webp`).
- Alt text: `<Client> website shown on desktop and phone` — describes the image, makes no claims.
- Build the plate from one HTML/Figma template so every project uses identical numbers. Re-capture all five together when any site is redesigned.

## Final recommendation

**Go with A · Studio plate.**

- **Against plain screenshots:** the mat and fixed geometry turn five unrelated palettes into a set; raw screenshots edge to edge make the carousel look like a link list.
- **Against device mockups:** ROBYLO is monochrome and minimal; hardware renders add a third visual language and date quickly. Real screens without frames look current and honest.
- **Against single desktop screens (B):** ROBYLO's clients' customers mostly arrive on phones. The phone screen is the proof that matters, and it costs one overlay.
- **Against editorial crops (C):** unknown local brands need to be recognisable as real businesses with whole working sites first. Save crops for case studies.
- **Practical:** one template, one capture routine, one image per card, no new Elementor components; the existing carousel only receives images.

Next step after approval: mock the plate with the existing Chicago Mounting captures and show the carousel at 1440 and 390 before capturing the other four.
