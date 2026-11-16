# Homepage design handoff — 2026-11-16

Collaborator: Claude (design). For: owner review, then ChatGPT Work.

**Status: Proposed.** Not approved by the owner and not implemented. Coming Soon stays active. Do not build this until the owner's approval is recorded in [decisions.md](decisions.md).

| Artifact | File |
| --- | --- |
| Desktop mockup, 1440px | [design/2026-11-16-homepage-proposal-desktop-1440.png](design/2026-11-16-homepage-proposal-desktop-1440.png) |
| Mobile mockup, 390px | [design/2026-11-16-homepage-proposal-mobile-390.png](design/2026-11-16-homepage-proposal-mobile-390.png) |
| How the design got here, rejected ideas | [design-log.md](design-log.md) |

The mockups are static renders made outside WordPress with the foundation's documented values ([current-implementation.md](current-implementation.md)). Claude has no WordPress access; every statement about the current build comes from that document and the visual handoff package. The mockups contain bracketed placeholders and a capture of the public chicagomounting.com homepage taken on 2026-11-16.

## 1. What stays exactly as built

Use the existing variables without changes:

- Colors: `rb-ink #000000`, `rb-paper #FFFFFF`, `rb-text #444444`, `rb-surface #F5F5F5`, `rb-line #D6D6D6`, `rb-hover #333333`
- Manrope, weights 400 / 500 / 600 / 700, with the configured H1–H4, body, hero paragraph, navigation, button, and small-text sizes, line heights, and tracking
- `rb-container` 1200px, `rb-gutter`, `rb-section-space`, `rb-measure`, `rb-space-1…4`
- Primary button: 16px/600, 16/24 padding, 48px minimum height, 1px black border, existing hover and focus ring

No new colors, fonts, type sizes, or animations are introduced.

## 2. Proposed changes to the foundation (need owner approval)

| # | Change | Why |
|---|---|---|
| 1 | `rb-radius`: 0 → **4px**, applied to buttons, screenshots, and image placeholders | The owner's brief asked for subtly rounded corners; the approved typography sample already shows them. One token. |
| 2 | Header brand: text link → **original logo image** (PNG now, SVG when available), 20px tall desktop / 18px mobile, linked to home, `alt="ROBYLO"` | The handoff says the text link is temporary and must not become the logo. |
| 3 | Header content: primary button → **navigation**: Work / Services / About / Contact | Approved structure. The hero already carries the primary action. |
| 4 | New **text-link action** style: 16px/600, `rb-ink`, underline 1px, underline offset 6px, hover `rb-hover` | Used for every secondary action. Replaces the outline button on this page, so there is only one button style. |
| 5 | Section rhythm: each homepage section uses `rb-section-space` as **bottom padding only**; only the hero has top padding | Stacked Base sections currently produce a double gap (about 200px at 1440). The page should have one gap between sections. |

If change 5 is awkward inside component 5869, a modifier class on `rb-section` that zeroes the top padding is enough.

## 3. Page structure

Six blocks, in this order. Content is left-aligned inside `rb-container` throughout.

### 3.1 Header
- Row, vertically centered, space-between. Height 96px desktop, 72px mobile.
- Left: logo image. Right: four navigation links, 40px gap, navigation type style, color `rb-ink`, no underline.
- **Mobile (≤767):** logo left, one menu button right (two-line icon, 44×44px tap area, `aria-label="Open menu"`). The current stacked mobile header (163px tall) should not be kept. The open-menu state is not designed yet; a simple full-width list of the four links below the header is fine.

### 3.2 Hero
- Padding: `rb-section-space` top and bottom.
- H1: `Good business.` line break `Hard to find?` Use a real line break so it never wraps mid-phrase.
- Hero paragraph, max width 600px, 24px below the H1: `We build websites and digital solutions that help small businesses get found, win customers, and grow.`
- Actions, 40px below the paragraph: primary button `Let's talk` (to the contact section) and text link `View our work` (to the work section), 32px apart.
- **Mobile:** button full width; text link centered below it with an 8px gap and a 48px tap height.
- No image, no eyebrow label.

### 3.3 Services — "What we do"
- Desktop: two columns, 1fr / 2fr, 48px gap. Left: H2 `What we do`. Right: the list.
- List: five rows. Each row has a 1px `rb-line` top border and 28px vertical padding; the last row also has a bottom border. Inside a row: title column 320px (H4 style), description in the remaining width (body), aligned on the first baseline, 32px gap.
- **Mobile:** H2, then rows stacked: title (H4), 8px, description. 22px vertical padding per row.
- No numbers, icons, or cards.

| Title | Description |
|---|---|
| Websites | Clean, fast websites that explain what you do and make it easy for customers to reach you. |
| Local SEO & Google Maps | Show up when people nearby search for the services you offer. |
| Digital Marketing | Google Ads and campaigns that fit your budget, with reports you can actually read. |
| Automation & AI | Simple tools that take care of follow-ups, scheduling, and other routine work. |
| Ongoing Support | Updates, fixes, and improvements. One person to call when you need help. |

Suggested as one reusable component, "ROBYLO / Service row", with exposed title and description.

### 3.4 Selected work
- H2 `Selected work`, 48px above the image (24px mobile).
- Featured case: full-width screenshot of the Chicago Mounting homepage, 1px `rb-line` border, `rb-radius`. This is the only color on the page, on purpose.
- Below the image (40px): two columns with a 96px gap.
  - Left: H3 `Chicago Mounting`; body text `A TV mounting company serving Chicago and the suburbs. We're their long-term digital partner, taking care of the website, local search, and day-to-day support.`; text link `View case study`.
  - Right: two label/value pairs. Label in small text, weight 500, `rb-text`; value in body size, `rb-ink`. `Services` → `Website · Local SEO & Google Maps · Ongoing support`. `Results` → verified results only.
- Then, 96px lower (48px mobile): two project previews side by side, 48px gap. Each: 16:10 image, H4 client name, one 16px line with industry and service.
- **Mobile:** everything in a single column, in the same order.

### 3.5 Contact
- A 1px `rb-line` rule at container width, then 96px (56px mobile) to the heading.
- H2 `Let's grow your business.`; hero-paragraph style text `Tell us what you need. We'll figure out the next step together.`; primary button `Start a conversation`, full width on mobile.
- White background. No form on the homepage; the button goes to the Contact page.

### 3.6 Footer
- Keeps `rb-surface` background and the existing message.
- Desktop top row, three groups, space-between: (1) logo 18px tall plus `Websites and digital support for growing businesses.`; (2) email, phone, `Chicago, IL` on three lines; (3) the four navigation links in a column.
- Bottom row above a 1px `rb-line` rule: `© 2026 ROBYLO` left, `Privacy Policy` right, small text.
- **Mobile:** single column in that order; navigation links wrap in one row; bottom row unchanged.

## 4. Mapping to existing components

| Block | Reuse | New work |
|---|---|---|
| Header | 5886 Base header | Swap text brand for logo image; replace action with navigation; mobile menu button |
| Hero | 5877 Heading and text, 5864 Primary button | Text-link action beside the button |
| Services | 5877 for the H2 | Service row component, two-column wrapper |
| Selected work | 5877 for headings and text | Featured-case layout, preview item |
| Contact | 5869 Base section pattern | Top rule, flush-top spacing |
| Footer | 5889 Base footer | Logo, contact lines, navigation, privacy link |

Service row, featured case, and preview item are new components and are **Proposed**. Do not reuse the historical components (CTA 5389, Wide Card 4740, Wide cards 4735, Digit Cards 4683, Flexbox Number Card 4663).

## 5. Content the owner still has to supply

- **Verified results** for Chicago Mounting, with source and date. Until then, hide the Results pair rather than publishing a placeholder.
- Confirmation of the Chicago Mounting description and the client's permission to be shown.
- Two more projects: client name, screenshot, permission. If they are not ready at launch, remove the preview row instead of showing empty boxes.
- Contact email and phone for the footer.
- Logo as SVG if one exists. The supplied PNG is 300×80 with transparent padding; the artwork itself is about 272×35, so it is sharp only up to roughly 140px wide on 2× screens.
- The Chicago Mounting screenshot in the mockup is a 1319×642 capture taken on November 16, 2026. For production, capture it at 2× (about 2400px wide) and export as WebP.

## 6. Checks before calling it done

1. At 1440px: content is 1200px wide, left edges of logo, H1, H2s, image, and footer line up.
2. At 390px: no horizontal scroll, no stacked header, every tap target is at least 44px tall.
3. H1 breaks as two lines at every width; no single-word last lines in headings.
4. Only one filled button style on the page; all secondary actions are text links.
5. No placeholder text in brackets is visible to anonymous visitors.
6. Keyboard: visible focus on logo, navigation, menu button, both action styles.
7. Coming Soon is still active for anonymous visitors after the work is saved.

## 7. Open design decisions

- Open state of the mobile menu.
- Whether the header should be sticky. Recommendation: not sticky, to keep it simple.
- Hover state for the service rows. Recommendation: none until the rows link to service pages.
