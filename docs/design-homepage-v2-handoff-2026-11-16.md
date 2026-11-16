# ROBYLO homepage V2 — design rationale and Elementor handoff

Prepared by Claude (design), 2026-11-16, in response to the owner's "Premium Homepage Design Challenge" brief.

**Status: Proposed.** Not approved, not implemented. Nothing in WordPress was touched; Claude has no WordPress access. Coming Soon stays active. This document supersedes [design-homepage-handoff-2026-11-16.md](design-homepage-handoff-2026-11-16.md) as the current design proposal once the owner approves it; until then both are proposals.

## Mockups

| Artifact | File |
| --- | --- |
| Desktop, 1440px, full page | [design/2026-11-16-homepage-v2-desktop-1440.png](design/2026-11-16-homepage-v2-desktop-1440.png) |
| Desktop, first screen (1440×900) | [design/2026-11-16-homepage-v2-desktop-1440-first-screen.png](design/2026-11-16-homepage-v2-desktop-1440-first-screen.png) |
| Mobile, 390px, full page (2× capture) | [design/2026-11-16-homepage-v2-mobile-390.png](design/2026-11-16-homepage-v2-mobile-390.png) |
| Mobile menu, open state | [design/2026-11-16-homepage-v2-mobile-390-menu-open.png](design/2026-11-16-homepage-v2-mobile-390-menu-open.png) |
| Mockup source (HTML/CSS reference, **not** theme code) | [design/2026-11-16-homepage-v2-source/index.html](design/2026-11-16-homepage-v2-source/index.html) |

The source file exists so exact values can be read instead of measured from a PNG. Do not copy it into the theme; rebuild natively.

## What was reviewed

- `main` at `0a3d8f8`: README, AGENTS, AI-CONTEXT, decisions, design log, the first handoff, current-implementation, elementor, section-backgrounds, verification.
- Open PRs #3 (homepage skeleton), #4 (button system, 4px radius), #5 (Glide-Over), #6 (Coming Soon portfolio), #7 (Homepage V1). None merged by this work. This design depends on the WordPress state documented in #4, #5 and #7.
- The V1 screenshots from PR #7 (`docs/verification/2026-11-16-homepage-v1-*.jpg`). The live Elementor preview was not inspected (no access).
- The five public client sites, captured 2026-11-16 at 1440px, plus one phone-width capture of Chicago Mounting.

## 1. Why V1 feels unfinished

What works and is kept: Manrope scale, Light/Soft/Dark rhythm, 4px radius, the headline, four services, real screenshots, dark contact section.

What does not work:

| V1 problem | Cause |
| --- | --- |
| Hero looks empty | All content sits in the left 45% of the container; the right half and the area under the buttons have no role. |
| Header is not a website header | Text brand plus an "Explore the styleguide" button; on mobile it stacks into two rows. |
| Services read as a plain list | Heading in a narrow left column, a 384px text list pushed to the right, 290px of unused space between title and copy. |
| Screenshots are raw | Full-width image at natural height (about 700px) with scrollbars visible; three different crops; no frame. |
| Portfolio hierarchy is broken | One huge image, two medium, then two projects with no image at all. |
| No shared grid | Each section picks its own column split (1:2, 1:1, 1:1:1), so nothing lines up from section to section. |
| No identity | Nothing would tell you this is ROBYLO if the logo were removed. |

## 2. Design rationale

**One idea carries the page: two-tone statements.** Every major heading is a black statement followed by a gray second line. In the hero the gray line is the problem ("Hard to find?"), literally harder to see. The contact section inverts it on black: gray "Good business." then white "Easy to find." The page opens with the question and closes with the answer. Section headings use the same device ("What we do. / Four services, one team."). It needs no graphics, no new font and no color, and it is recognizably ROBYLO's.

**One spine.** Every section uses the same 8 + 4 column split. The right column always starts at the same x position (936px in a 1200px container): hero paragraph, section introductions, service descriptions, featured-project caption, contact paragraph, footer contact. This is what removes the "stacked sections" feeling.

**Color only as evidence.** The interface stays black, white and gray. Client screenshots are the only color on the page and appear in full color only in Selected Work. In the hero the same five sites appear as small grayscale thumbnails, so the first screen shows proof without breaking the monochrome hero.

**One image treatment.** Every screenshot sits in a soft-gray "mat" panel, inset from the top and sides and cut off by the bottom edge. Five sites with five different palettes read as one portfolio. No raw screenshots, no scrollbars, no text-only projects.

**Full, not empty.** The first 900px now contain header, headline, paragraph, two actions and five projects. Section spacing is unchanged (`rb-section-space`); the density comes from composition, not from shrinking whitespace.

**Deliberately not done** (owner rejected these earlier, see the design log): section numbers, uppercase labels, serif accents, diagrams, visible grid lines, outline or pill buttons, type above 88px.

## 3. Reuse, refinements, new

### 3.1 Existing, reused unchanged

- All 20 variables. Colors `rb-ink`, `rb-paper`, `rb-text`, `rb-surface`, `rb-line`, `rb-hover`; `rb-container`, `rb-gutter`, `rb-section-space`, `rb-space-1…4`, `rb-radius` 4px (live per PR #4).
- Manrope tag defaults: H2 48/40/32, H3 32/28/26, H4 24/23/22, body 18, hero paragraph 20/20/18, small 14, navigation 16/500, buttons 16/600.
- Classes `rb-section`, `rb-section--soft`, `rb-section--dark`, `l-container`, `rb-btn`, `rb-btn--primary`, `rb-btn--sm`, `rb-btn--text`, `rb-btn--glide`.
- Components: Primary button 5864 (every action on the page), Heading and text 5877, Base section 5869 where its structure fits.
- Glide-Over: on exactly two buttons, hero "Let's talk" and contact "Start a conversation". Not on the header button, not on text links.

### 3.2 Refinements to existing elements (need owner approval)

| # | Refinement | Reason |
| --- | --- | --- |
| R1 | Header 5886: text brand → original logo image; styleguide button → navigation + small primary "Let's talk" | Brief: real navigation, original logo, no styleguide button. |
| R2 | Footer 5889: Soft → Dark, with logo, navigation, contact, legal row | Contact and footer become one continuous dark ending. Needs the white logo file. |
| R3 | `rb-section--dark`: add a rule so text marked with the muted class renders `rb-mute`, and footer hairlines use `rb-hover` | Needed for the inverted headline and dark footer. |

### 3.3 New (need owner approval)

| # | New item | Type | Why existing items do not cover it |
| --- | --- | --- | --- |
| N1 | `rb-mute` = `#8A8A8A` | 1 color variable | The gray headline line. `rb-text` is too close to black, `rb-line` fails contrast. `#8A8A8A` is 3.45:1 on white, 3.2:1 on `rb-surface`, 6.1:1 on black. **Use only at 32px and larger**, plus footer small text on black. |
| N2 | Display size: 88 / 64 / 44px, weight 700, line-height 1.02 / 1.04 / 1.06, tracking -0.04 / -0.04 / -0.035em | 1 size variable or class `rb-display-xl` | Used twice only: hero H1 and contact H2. H1 default stays 72 for other pages. If rejected, the layout works at 72px with no other change. |
| N3 | `rb-heading-mute` | 1 class | Color `rb-mute`, inherits size from the heading it follows. |
| N4 | `rb-mat` | 1 class | Screenshot panel: background `rb-surface`, radius `rb-radius`, overflow hidden. |
| N5 | Components: Section head, Service row, Project tile, Approach step | 4 components | Each repeats 3–5 times; exposed properties listed in section 4. |

No custom JavaScript. No theme CSS. The only CSS beyond native controls is what `rb-section--dark` already uses (scoped descendant rules stored in the global class).

## 4. Section specifications

All values are desktop at 1440px unless stated. "Left" = 8 columns, "Right" = 4 columns.

**Grid in flex terms** (container 1200px, gap 24px): Left 792px = `66%`, Right 384px = `32%`, row `justify-content: space-between`. Use native Grid if the installed version exposes it (12 columns, 24px gap); otherwise flex with these widths. Tablet and mobile behavior is in section 5.

Anchors (native General → Settings → ID, as in PR #7): `services`, `work`, `approach`, `contact`.

### 4.1 Header

- Height 88px, white, no border, not sticky. Content in `l-container`, row, space-between, vertically centered.
- Left: logo image, **18px tall**, links to `/`, alt `ROBYLO`.
- Right: `Services`, `Work`, `Approach` (navigation style 16/500, `rb-ink`, no underline, hover `rb-hover`), then Primary button 5864 with `rb-btn--sm`: `Let's talk` → `#contact`. Gap 40px between all four items.
- "Contact" is the button, so it is not repeated as a link. There is no About page yet, so no About link.

### 4.2 Hero (Light)

- Section padding: top **72px**, bottom `rb-section-space`. Gutters from `rb-section`.
- Row 1, aligned to the bottom: Left = H1; Right = paragraph, bottom edge 10px above the H1's bottom.
- H1, display size N2, two elements or one H1 with a line break: `Good business.` in `rb-ink`, `Hard to find?` in `rb-mute`. One H1 on the page.
- Paragraph, hero-paragraph style (20/1.6, `rb-text`): `We build websites, local search visibility, ad campaigns and practical automation for small and growing businesses.`
- Row 2, 48px below: `Let's talk` (Primary 5864 + `rb-btn--glide`) → `#contact`; 32px gap; `See our work` (`rb-btn--text`) → `#work`.
- Row 3, **88px** below the buttons: project strip. Five equal columns, gap 24px (each 220.8px wide).
  - Image: grayscale, ratio **16:10**, object-fit cover, object-position left top, 1px `rb-line` border, radius 4px.
  - Caption 12px below: project name, 14px / 600 / `rb-ink`.
  - Each item links to `#work`. Order: Chicago Mounting, GCPRO Restoration, Kolo Properties, Center For Dental Healing, Elite Mechanical Services.

### 4.3 Section head (component, used in Services, Work, Approach)

- Row aligned to the bottom, 64px margin below.
- Left: H2 in `rb-ink`, followed by a second line in the same H2 size with `rb-heading-mute`. Build as H2 plus a paragraph styled like H2, or one H2 with a span, whichever survives Elementor's sanitizer.
- Right: one body paragraph (18/1.6, `rb-text`), bottom 6px above the heading's bottom.
- Exposed properties: heading, muted line, paragraph.

| Section | Heading | Muted line | Paragraph |
| --- | --- | --- | --- |
| Services | What we do. | Four services, one team. | Each one works on its own. Together they cover how customers find you, what they see, and what happens after they get in touch. |
| Work | Selected work. | Five businesses, five live sites. | Websites we designed and built for local businesses in the Chicago area. Each one is live. Open any of them. |
| Approach | How we work. | Practical, start to finish. | No packages and no jargon. We look at the business first and build only what it needs. |

### 4.4 Services (Soft)

Four Service row components, stacked, no gap between them.

- Row: padding 40px top and bottom, 1px top border. **First row's top border is `rb-ink`**, the others `rb-line`; the last row also has a 1px `rb-line` bottom border.
- Left: H3 (32/600) title. 12px below: three scope items in one line, small text (14/1.5, `rb-text`), separated by a middle dot in `rb-mute` with 10px on each side.
- Right: body paragraph, top aligned to the H3's first baseline.
- No icons, numbers, cards or hover state (rows are not links until service pages exist).
- Exposed properties: title, description, three scope items.

| Title | Description | Scope items |
| --- | --- | --- |
| Website Design & Development | Clear, fast websites that explain what you do and make it easy to call, book or buy. | Design and copy structure · WordPress development · Care and updates |
| SEO & Local Visibility | Show up when people nearby search for what you offer, in Google Search and on Maps. | Google Business Profile · Service and location pages · Technical SEO |
| Digital Advertising | Focused campaigns built around your services and budget, with reports you can read. | Google Ads · Landing pages · Call and form tracking |
| AI & Business Automation | Practical tools that take follow-ups, scheduling and other routine work off your plate. | AI assistants · Workflow automation · Connecting the tools you use |

### 4.5 Selected work (Light)

**Featured project (Chicago Mounting)**

- Mat (`rb-mat`): full container width, **height 480px**, padding 72px top/left/right, 0 bottom. Row, gap 56px, items aligned to the top.
- Desktop screenshot: fills remaining width (750px), natural 16:10 height (469px), so its bottom 61px is cut by the mat.
- Phone screenshot: **250px wide**, pushed down 40px, natural height (482px), cut by the mat.
- Both images: 1px `rb-line` border on top and sides, radius 4px on the top corners only, no shadow.
- Caption, 24px below the mat: Left = H3 `Chicago Mounting`. Right = `TV mounting and AV installation · Chicago, IL` (16px, `rb-text`), 6px below it the text link `chicagomounting.com ↗` (`rb-btn--text`, opens in a new tab).

**Four project tiles**, 72px below the featured caption

- Two rows, row gap 64px, column gap 24px. Row A: **7 columns + 5 columns** (688px + 488px = `57.33%` + `40.67%`). Row B: **5 + 7**. The alternation is intentional.
- Order: GCPRO Restoration (7), Kolo Properties (5), Center For Dental Healing (5), Elite Mechanical Services (7).
- Tile mat: **height 380px for every tile**, padding 40px top/left/right, 0 bottom. Image width 100%, height 100%, object-fit cover, **object-position left top**. Wide tiles show the full width of the site; narrow tiles crop the right side and keep the headline. Same border and radius as above.
- Caption, 20px below: H4 name. 4px below, one row, space-between, baseline aligned: descriptor (16px, `rb-text`) left, domain text link right.
- Exposed properties: image, alt, name, descriptor, link text, URL.

| Project | Descriptor | Link |
| --- | --- | --- |
| GCPRO Restoration | Disaster restoration · Lombard, IL | gcprochicago.com → https://gcprochicago.com/ |
| Kolo Properties | Property management · Park Ridge, IL | kolo-properties.com → https://kolo-properties.com/ |
| Center For Dental Healing | Dental practice · Glenview, IL | glenviewsmiles.com → https://glenviewsmiles.com/ |
| Elite Mechanical Services | HVAC and refrigeration · West Chicago, IL | elitemechanical.services → https://elitemechanical.services/ |

Images are not links (PR #7 found that duplicate image links add unstyled focus stops); the domain link is the single destination per project. No results, metrics or testimonials anywhere.

### 4.6 Approach (Soft)

- Three equal columns, gap 24px. Each step: 1px `rb-ink` top border, 24px padding above the content, 24px right padding.
- Small label (14px / 600 / `rb-ink`), then 32px, then H3 (32/600), then 16px, then body paragraph.
- Exposed properties: label, statement, paragraph.

| Label | Statement | Paragraph |
| --- | --- | --- |
| First | Start with the business, not a template. | We learn how customers find you today and how work moves through your day before we design anything. |
| Then | Build what you'll actually use. | The simplest site, campaign or automation that does the job. Nothing you have to babysit. |
| After launch | Stay for what comes next. | One point of contact for updates, fixes and the next improvement as your business changes. |

### 4.7 Contact (Dark)

- Section padding: top **128px**, bottom **112px**. Same structure as the hero, mirrored in color.
- H2, display size N2: `Good business.` in `rb-mute`, `Easy to find.` in `rb-paper`.
- Right, bottom-aligned: `Tell us what you need. We'll figure out the next step together.` (20/1.6, `rb-line`).
- 48px below: `Start a conversation` (Primary 5864 + `rb-btn--glide`, inverse colors from `rb-section--dark`) → `mailto:info@robylo.com`; 32px gap; text link `info@robylo.com` → same mailto. The email is owner-confirmed (PR #7).

### 4.8 Footer (Dark)

- Black background, directly under the contact section, same gutters, content in `l-container`.
- Top row: 1px `rb-hover` top border, padding 56px top, 64px bottom. Text 16px.
  - Columns 1–5: white logo 16px tall; 20px below, `Websites and digital support for growing businesses.` in `rb-mute`, max width 300px.
  - Columns 6–8: label `Menu` (14px / 600 / `rb-mute`), then `Services`, `Work`, `Approach`, `Contact` (16px / 500 / `rb-paper`), 10px gap.
  - Columns 9–12 (starts on the spine): label `Contact`, then `info@robylo.com`, `Chicago, IL`.
- Bottom row: 1px `rb-hover` top border, padding 24px top, 32px bottom, space-between, 14px `rb-mute`: `© 2026 ROBYLO` left, `Privacy Policy` right.

## 5. Responsive behavior

### Tablet (≤1024px)

- Display size 64px. Hero and section heads: heading full width, paragraph below it (24px gap), max 8 of 12 columns.
- Service row: title and scope 7 columns, description 5 columns.
- Tiles: both rows become 6 + 6. Featured mat: padding 48px, height 400px.
- Project strip stays five across. Header unchanged down to 768px.

### Mobile (≤767px), drawn at 390px

- **Header:** height 64px. Logo 15px tall left. Right: one button, text `Menu` (16/600) plus a two-line icon (22px wide, 2px lines, 6px apart), 48px tap height, `aria-label="Open menu"`. The stacked two-row header must not appear.
- **Menu, open:** full-screen black panel. Top bar 64px: white logo, `Close` with an X. Links 40px / 700 / tracking -0.03em, each row 22px vertical padding with a 1px `rb-hover` rule and a `rb-mute` arrow on the right: Services, Work, Approach, Contact. Pinned to the bottom: full-width inverse primary `Let's talk`, then centered text link `info@robylo.com`.
- **Hero:** padding 40px top, 56px bottom. Display 44px. Paragraph 18px, 24px below. `Let's talk` full width; `See our work` centered below, 8px gap, 48px tap height. Strip becomes a horizontal scroll row: items **232px** wide, 12px gap, running off the right edge so the second item is visibly cut. Native horizontal overflow, no slider script.
- **Section head:** stacked, paragraph 16px below, 40px margin below.
- **Service row:** padding 28px. Order: title (H3 26px), description (10px gap), scope items as three stacked lines (14px gap above, no dots).
- **Featured project:** mat height 400px, padding 40px top. **Only the phone screenshot is shown**, 230px wide, centered, cut by the bottom edge. The desktop screenshot is hidden on mobile. Caption stacked: name, descriptor, link (48px tap height).
- **Tiles:** one column, 40px apart. Mat height 236px, padding 24px. Caption stacked.
- **Approach:** one column; each step keeps its black top rule; 20px above content, 36px below.
- **Contact:** padding 72px top, 64px bottom. Display 44px. Button full width, email link centered below.
- **Footer:** one column: logo and message, Menu, Contact (36px between groups), legal row.
- Every tap target is at least 48px tall. No horizontal page scroll (mockup scroll width equals 390px).

## 6. Assets

| Asset | Mockup file | Production requirement |
| --- | --- | --- |
| Five desktop captures | `design/2026-11-16-homepage-v2-source/shots/*.jpg`, 1372×857 | Recapture at 1440px viewport, 2× density, crop to **16:10 from the top**, no scrollbar, WebP. Wait for entrance animations and counters to finish. |
| Chicago Mounting phone capture | `shots/chicago-mounting-mobile.jpg`, 482×930 | Recapture at 390–430px viewport, 2×, crop about 1:1.93 from the top, WebP. |
| Grayscale thumbnails | Same files with a CSS filter | Preferred: export five grayscale WebP files (442×276). Alternative: native filter control if the installed Atomic version has one. |
| Logo, dark | `shots/logo-dark.png` | **Do not use the mockup file.** It was rebuilt from a screenshot of the 300×80 PNG for this mockup only. Use the original (attachment 5972) or an SVG. |
| Logo, white | `shots/logo-light.png` | **Do not use the mockup file.** An official white logo exists (it is in the footer of glenviewsmiles.com); the owner needs to supply it. |

Alt text for portfolio images: `[Project name] homepage` / `[Project name] homepage on a phone`. Strip thumbnails are decorative next to their captions: empty alt.

## 7. Interaction

- Buttons and text links: existing hover and focus states, unchanged.
- Glide-Over: two buttons only (4.2 and 4.7). Reduced-motion and touch behavior as already implemented.
- Optional, only if native controls allow it without custom code: strip thumbnails change from grayscale to color on hover, 200ms. If not available natively, skip it.
- Nothing else moves. No scroll animations, parallax or entrance effects.

## 8. Open decisions and content to confirm

1. Approve or reject N1 (`rb-mute`) and N2 (88px display size). The design depends on N1; N2 is optional.
2. Approve the header and footer changes (R1, R2). PR #7 recorded an owner instruction to leave the header unchanged for V1; this brief asks for a new navigation, so the newer instruction is assumed to win.
3. Mobile menu implementation. Not verified by Claude. Options for ChatGPT Work to check, in order: a native off-canvas/popup element in the installed Elementor Pro; a native navigation element with a full-screen dropdown; if neither can match the drawing, report back before adding any script.
4. Scope items in the Services table are Claude's wording. Owner to confirm each is a service ROBYLO sells.
5. Project descriptors and towns come from each client's public site (addresses in their footers). Owner to confirm, and to confirm that "designed and built" is accurate for all five and that each client may be shown.
6. `Privacy Policy` link: hide it until the page exists.
7. Headline wording kept as "Good business. Hard to find?". The closing "Good business. Easy to find." is new copy.
8. Navigation uses in-page anchors. When Services, Work or About pages exist, the links change and "About" can be added.

## 9. Acceptance checks for the build

1. At 1440px the left edges of logo, H1, every H2, every row and the footer align at the container edge; hero paragraph, section paragraphs, service descriptions, featured caption, contact paragraph and footer Contact column share one left edge.
2. First screen at 1440×900 shows header, full headline, both actions and the top of the project strip.
3. All five projects have an image in Selected Work. All tile mats are the same height. No scrollbars inside screenshots.
4. Exactly one H1. Heading order H1 → H2 → H3/H4.
5. `rb-mute` appears only on text 32px or larger, and on footer small text over black.
6. Mobile 390 and 320: no horizontal page scroll; header is one row; featured project shows the phone capture; every tap target ≥ 48px.
7. Keyboard: visible focus on logo, navigation, menu button, every button and project link; menu can be opened and closed from the keyboard.
8. Anonymous visitors still see Coming Soon.

## 10. Checks run on the mockup

Rendered `index.html` in headless Chrome at 1440×900 and 390×844 (device scale 2) with Manrope variable font loaded (`document.fonts.check` true). Document scroll width equaled the viewport at both sizes (1440, 390). Full-page captures reviewed visually section by section. Not checked: anything in WordPress or Elementor, real devices, 1024/768/320 renders, accessibility tooling, performance.
