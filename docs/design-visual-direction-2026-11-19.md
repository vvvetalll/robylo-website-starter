# ROBYLO — Visual audit, art direction and Services redesign

| Record | Value |
| --- | --- |
| Status | **Proposed.** Visual direction and redesign specification for owner review. Not approved; not implemented. |
| Author / date | Claude (design), 2026-11-19 |
| Brief | Owner brief "ROBYLO — Visual Direction & Art Direction Review", 2026-11-19 |
| Evidence | Live pages opened anonymously in a cloud Chrome browser at 1440 px on 2026-11-19: `/`, `/services/`, `/services/web-design/`. About from PR #21 capture `docs/verification/2026-11-19-about/about-1440.jpg`. No owner screenshots were attached to the brief. |
| Mockup | [Services redesign, desktop 1440](design/2026-11-19-visual-direction/services-redesign-desktop-1440.jpg) · [mobile 390](design/2026-11-19-visual-direction/services-redesign-mobile-390.jpg) · [source HTML + SVG drawings](design/2026-11-19-visual-direction/source/) |
| Copy | Unchanged. All copy is the approved Services copy from [design-services-page-2026-11-19.md](design-services-page-2026-11-19.md). This document changes composition only. |
| WordPress | Services 6191 (/services/). Later: Home 5894, About 6197, Website Design & Development 6203. |
| Open decisions | Listed in the last section. |

> **Live-site issue found during the audit (2026-11-19):** robylo.com is publicly reachable without login, and `/services/` and `/services/web-design/` show the literal markers **[Confirm]** in 8 and 10 places. Either restore Coming Soon or remove the markers and their unconfirmed claims. This is outside the visual scope but should be fixed first.

## 1. Visual diagnosis

**Verdict:** the type is good, the grid is clean, and the copy is strong. The problem is that four of the five pages use one composition over and over: an eyebrow, a two-tone heading on the left, gray text on the right, then 1 px rules separating rows of text. The site *says* it builds things, but it shows almost nothing built. A visitor scrolling `/services/` sees about 7,500 px of text on white and light gray, with no image after the hero.

### What already works (keep)

- **Two-tone headlines** ("Solve the right problem. / Build it properly."). This is the strongest brand device on the site, it is recognizable, and it costs nothing.
- **Homepage Big Picture diagram.** The only original graphic on the main pages, and it explains something.
- **Studio Plates in the homepage carousel and the Web Design hero.** Real proof, consistently framed.
- **The annotated phone diagram on `/services/web-design/`** ("What a working website needs"). Numbered markers tie the picture to the text. This is the best section on the site and the seed of the direction below.
- **The black contact section.** One strong contrast per page.

### Weak sections, with reasons

| Page · section | What you see | Why it is weak |
| --- | --- | --- |
| Services · 1 Hero | H1 left, paragraph right, four underlined links in a row | The four services, the core product, are shown as the smallest text on the screen. Nothing visual. |
| Services · 2 Problems | Six rows: grey statement left, link + paragraph right, rule between | The most human content on the site (an owner's own words) looks like a table. Six identical rows, about 1,000 px. |
| Services · 3 What each covers | Four blocks: three text columns each, rules between | The densest part of the page and no picture of any service. Reads like a spec sheet. |
| Services · 4 Standards | 2 × 2 grid of H3 + paragraph | The brand promise "Build it properly" is set the same size as body copy. No emphasis. |
| Services · 5 Two ways | Two text columns | The two engagement formats are visually identical. Nothing shows that one is a fixed project and the other an ongoing relationship. |
| Web Design · 2, 3, 5, 6 | Signs list, four-column scope, three columns, six-column timeline | All built from the same rule-and-text unit. Only section 4 (phone diagram) and the hero carry an image. |
| About · founder | Gray box where the portrait should be | The empty gray rectangle is the most visible "image" on the page. The page about a person has no person. |
| About · principles | "01 / Direct communication" rows | Same row pattern as the homepage services and Services problems. |
| Homepage · What we do | Four rule rows | Same row pattern again, directly after the diagram that already says the same thing graphically. |

### Where the layout repeats

One unit does most of the work across the site: a **rule, then a heading on the left, then gray text on the right**. Counted on the live pages:

| Page | Sections built from rule-rows or plain text columns |
| --- | --- |
| Home | 3 of 6 (What we do, How we work, contact text) |
| About | 4 of 6 |
| Services | 5 of 6 |
| Web Design | 6 of 9 |

Section backgrounds also only alternate white and #F5F5F5. On a long page, these two values are too close to mark a new chapter. On Services, the black band appears only at the very end.

### Typography and whitespace

- **Hierarchy has two levels, not four.** Display and H2 are strong. Below them, H3 (24 px), lead text (20 px) and body (16 px) sit close together, all in near-black or #444, so sections read as uniform grey texture. A third, louder level is missing: a large statement size inside sections, used for one idea per page (for example a standard or a quote).
- **The gray second line is overused.** It is on every H2 on every page. When everything has it, it stops signaling anything.
- **Whitespace is even, not intentional.** Every section has the same top and bottom padding and the same 8 + 4 head. Nothing gets more room because it matters more.
- **Underlined links do all the navigation.** On Services there are 25 body links, nearly all underlined text with an arrow. The service links, which are the destinations that matter, look the same as minor links.

### Compared with strong contemporary studios

Observed in earlier research (2026-11-18, [portfolio research](design-portfolio-presentation-research-2026-11-18.md)) and on stripe.com (opened 2026-11-19):

- Good studio sites **show the product in nearly every section**: a screen, a diagram, an object. Text explains the picture. On ROBYLO's pages the order is reversed: text explains text.
- They **vary section shape**: tiles, a large single image, a dark band, a list. A visitor can feel where one chapter ends and the next begins. ROBYLO's sections are distinguishable only by their headings.
- They **use one visual language consistently** (Stripe's product UI fragments, Apple's object-on-a-field). ROBYLO already has the beginning of one, the line drawings on Home and Web Design, but uses it only twice.
- What ROBYLO does better than many: restraint, honest copy, real local work. The direction below keeps that and adds pictures.

## 2. Recommended creative direction: **Working Drawings**

**One idea:** ROBYLO shows how things work, the way an architect or engineer would, through **precise monochrome line drawings of the actual things it builds**: website pages, search results, the path from an ad to a call, the route of a form into a calendar. These drawings sit beside **real Studio Plates** of client sites, which are the proof. Typography stays the main voice. The drawings are the second voice.

**Why it fits ROBYLO**

- **Business:** ROBYLO sells working systems, not looks. A drawing that shows a form going to a calendar *demonstrates* understanding in a way stock photos or abstract shapes cannot. It also suits the copy, which is already about what works and how.
- **Audience:** contractors, cleaners and dental offices are practical people. Simple diagrams of a phone page, a Google result or a call read instantly. No jargon, no metaphors.
- **Brand:** it grows out of things already approved and liked: the Big Picture diagram, the Studio Plates and the phone diagram on Web Design. It needs no new colors, no gradients, no photography budget, and no new font.
- **Founder-led honesty:** drawings are generic by design, with no invented clients, results or screenshots. Real proof stays in the Studio Plates.
- **Maintainability:** the drawings are static SVG images. Elementor places them like any image. They weigh 1–3 KB each, load instantly and never break.

**What it is not:** no isometric 3D, no illustrated people, no icons as decoration, no gradient blobs, no "glassmorphism", no scroll-jacking animation.

### The visual rules

| Element | Rule |
| --- | --- |
| Line drawings | 1.5 px #000 strokes, fills #FFFFFF, #F5F5F5, #D6D6D6 only. Rounded caps. Placeholder bars instead of text: never readable fake names, prices, reviews or results. One solid black element per drawing marks the point (the call button, the result, the hub). |
| Drawing frame | Sits on a #F5F5F5 panel, 4 px radius, generous inner padding (36 px desktop, 20 px mobile). On black sections the drawing is inverted: white strokes, no panel. |
| Marker dot | A filled 8 px circle in front of eyebrows and service links. It is the single repeated graphic accent, and echoes the black center of the Big Picture diagram. |
| Proof | Real Studio Plates only, framed as approved in [portfolio-image-guidelines.md](portfolio-image-guidelines.md). |
| Section rhythm | Every page alternates at least three section shapes: **tiles**, **image + text split**, **black band**, **statement list**. No two neighbouring sections share a shape. |
| Black | Use one black band mid-page as well as the black contact section. Black is the strongest contrast available in a monochrome system; using it only at the end wastes it. |
| Type levels | Display 76/56/36 (hero, final CTA) · Statement 64/48/34 (one list per page, e.g. standards) · H2 44/36/30 · Quote 28/24/22 · H3 32/24/24 in split layouts, 24/22/20 elsewhere · Lead 20/18/17 · Body 16/16/15–16 · Small labels 14. All Manrope; weights 700 for display, statement and H2, 600 for quote, H3 and labels, 400 for text. |
| Gray second line | Keep on H1 and on at most two H2s per page. Other H2s are single-tone. *(Applies to later pages. On Services the approved copy has two-tone H2s in every section; the mockup keeps them and the owner can decide.)* |
| Motion | One pattern only: drawings and Studio Plates fade up 16 px once when they enter the viewport (Elementor's native entrance animation, about 400 ms, ease-out). No parallax, no scroll-linked animation. Respect reduced motion. |
| Links | Service destinations use a black **arrow disc** (32 px circle with →) or the marker dot. Minor links stay underlined text. |

## 3. Services page redesign

Copy, order, headings, links and CTAs are unchanged from the approved spec. Section numbers match it. Five of the six sections change composition; four new compositions are used (tiles, black quote band, zigzag, statement list, contrast pair).

Mockup: [desktop 1440](design/2026-11-19-visual-direction/services-redesign-desktop-1440.jpg) · [mobile 390](design/2026-11-19-visual-direction/services-redesign-mobile-390.jpg). The mockup is HTML/CSS for review, not code for production; Work builds it natively.

### Section-by-section

**1 · Hero: index becomes service tiles**

- **Layout (1440):** top row as now: eyebrow and H1 in the left 7 columns, intro + button + text link in the right 4 (column 9–12), bottom-aligned with the H1. 88 px below, **four equal tiles** across the 1200 container (282 px wide, 24 px gaps).
- **Tile:** #F5F5F5 panel, 4 px radius, 20 px padding. Line drawing at 4:3 on top (the service's drawing, see assets). Below it: service name 18 px / 600, left; a 32 px black arrow disc, right. The whole tile is one link. Hover: 1 px #000 border (no lift, no shadow). Focus: existing visible focus ring.
- **Purpose:** the four services become the most visible thing after the H1, and each gets a recognizable picture that is reused in section 3 and on its own service page.
- **Mobile (390):** H1 36 px, then intro, button, text link. Tiles in a **2 × 2 grid**, 12 px gaps, 12 px padding, name 14 px, arrow disc 24 px. The tiles stay above the fold's second screen, so the services remain visible early.
- **Reuse:** hero head = existing two-tone heading + Heading and text 5877 pattern; button = Primary button 5864. Tiles are four instances of **one new tile component** (see section 4 of this document).

**2 · What's getting in the way?: black quote band**

- **Background:** #000. Text white; intro and descriptions #BDBDBD / #A6A6A6; gray H2 line #8A8A8A.
- **Layout:** head in the 8 + 4 pattern. Then a **3 × 2 grid** of problems. Each cell: 1 px #333 top rule; the problem as a **quote** in curly quotation marks, 28 px / 600, white, line-height 1.25; 22 px below, the service link (16 px / 600, white, preceded by a white marker dot); under it the one-line answer (15 px, #A6A6A6). Cells top-aligned; give the quote a minimum height of three lines so the links line up across a row.
- **Purpose:** these are the owner's own words. Setting them as large quotes on black makes the page feel like it is listening, and it breaks the page into two chapters: problems (black), then solutions (white).
- **Mobile:** one column, six cells, quote 22 px, 24 px top padding.
- **Reuse:** existing black section background and text colors from the contact section. Grid = native Atomic grid.

**3 · What each service covers: zigzag with drawings**

- **Layout:** head (H2 only, no right column). Four rows, alternating sides:
  - **Row A (Website, Ads):** drawing panel in columns 1–6 (#F5F5F5, 36 px padding, drawing at 4:3); text in columns 8–12.
  - **Row B (SEO, Automation):** text in columns 1–5; drawing panel in columns 7–12.
  - 56 px vertical padding per row, 1 px #D6D6D6 rule between rows (none above the first).
- **Text column:** H3 32 px / 700; the "For" line as lead text 18 px; "Includes" label 14 px / 600 #8A8A8A, then the native list in **two columns** with 6 px black dots (15 px text); the pairing sentence as a **2 px black left-border callout** (15 px, the bold "Works well with …" part in black); links underlined.
- **Purpose:** each service gets a picture of what it actually does. The zigzag breaks the long block into four distinct scenes. The callout makes the "works well with" idea (the brand's connected-services argument) visible, not just stated.
- **Mobile:** each row stacks: drawing panel first (20 px padding), then text. List becomes one column. H3 24 px.
- **Reuse:** native list, existing text-link style. Drawing panel = the same tile background style as section 1 without the label row.

**4 · What "properly" means: statement list**

- **Background:** #F5F5F5.
- **Layout:** head (H2 only). Four full-width rungs separated by 1 px rules. Each rung: the standard as **Statement size, 64 px / 700**, tracking −0.035 em, in columns 1–7, preceded by a 22 px circle; the explanation 16 px in columns 9–12, baseline-aligned. Circles alternate **filled / outline** (Built to work ● · Easy to manage ○ · Yours to own ● · Made to last ○) to give rhythm without numbers.
- **Purpose:** "Build it properly" is the page's promise. Four huge lines make it the typographic climax of the page, the thing a visitor remembers.
- **Mobile:** each rung stacks: statement 34 px with a 14 px circle, then the text. 24–28 px vertical padding.
- **Reuse:** native headings (H3, styled at statement size via one class), existing rule color.

**5 · Two ways to work together: contrast pair**

- **Layout:** head (H2 only). Two equal panels, 24 px gap, 4 px radius, 40 px padding, min-height 420 px:
  - **One-Time Projects:** white panel with a 1 px #000 border. Small label "Start and finish" (14 px / 600 #8A8A8A). Drawing: a straight line with a filled dot at each end and three ticks, meaning a defined start and finish.
  - **Ongoing Support:** black panel, white text. Label "Every month". Drawing: a white loop (∞) with a dot at its center, meaning a continuous cycle.
  - Then H3 32 px / 700 and the approved text.
- Text link "Talk about what you need →" 32 px below the panels.
- **Purpose:** the two formats now *look* different, so the difference is understood before it is read.
- **Mobile:** panels stack; 24 px padding; no min-height.
- **New labels:** "Start and finish" and "Every month" are new micro-copy. **[Owner approval needed]**; without approval, leave the label slot empty.

**6 · Not sure where to start?: full-width display CTA**

- **Background:** #000.
- **Layout:** the H2 set at **display size, 76 px / 700**, across the full container width on two lines (white / #8A8A8A). 56 px below, in columns 9–12, the body (18 px #BDBDBD), then a **white** Primary button "Start a conversation" and the email as a white underlined link.
- **Purpose:** the ending matches the hero in scale, so the page closes as strongly as it opens.
- **Mobile:** H2 36 px, then body, button and link stacked.
- **Reuse:** existing black contact section, with an inverted (white) variant of button 5864. If the component has no inverted variant, use the homepage contact button's existing style.

### Assets needed

| Asset | File (in this PR) | Size | Used in |
| --- | --- | --- | --- |
| Website drawing: desktop page + phone, call button marked | `source/svg/web.svg` | 400 × 300 viewBox | Tile 1, zigzag row 1, later Web Design page |
| Local search drawing: search bar, map with pin, result list | `source/svg/seo.svg` | 400 × 300 | Tile 2, zigzag row 2, later SEO page |
| Ads drawing: ad → landing page → call, with tracking line | `source/svg/ads.svg` | 400 × 300 | Tile 3, zigzag row 3, later Ads page |
| Automation drawing: form → hub → calendar, inbox, list | `source/svg/automation.svg` | 400 × 300 | Tile 4, zigzag row 4, later Automation page |
| Project line | `source/svg/project.svg` | 400 × 140 | Section 5, left panel |
| Ongoing loop (white strokes) | `source/svg/ongoing.svg` | 400 × 140 | Section 5, right panel |

All drawings are plain SVG with no scripts, no text and no external references, at 1–3 KB each. Upload them to the Media Library as SVG if the site allows it; otherwise export 2× PNG (800 × 600) from the same files. Alt text: the tiles and zigzag panels are decorative next to the service names (`alt=""`); the section 5 drawings are decorative as well.

### Typography scale used on Services (desktop / tablet / mobile)

| Role | Size px | Weight | Where |
| --- | --- | --- | --- |
| Display | 76 / 56 / 36 | 700 | H1, final CTA H2 |
| Statement | 64 / 48 / 34 | 700 | Section 4 standards |
| H2 | 44 / 36 / 30 | 700 | Section heads |
| H3, split | 32 / 28 / 24 | 700 | Section 3 services, section 5 formats |
| Quote | 28 / 24 / 22 | 600 | Section 2 problems |
| Tile label | 18 / 16 / 14 | 600 | Section 1 tiles |
| Lead | 20 / 18 / 17 | 400 | Hero intro, "For" lines (18) |
| Body | 16 / 16 / 15 | 400 | All paragraphs |
| Label | 14 | 600 | Eyebrows, "Includes", panel labels |

Display, H2, H3 at 24/22/20 and body already exist in the permanent standard. **Statement** and **Quote** are the only new roles; implement each as one global class, not as new variables.

## 4. Site-wide visual system: six patterns

These six patterns replace "rule + text rows" as the default building blocks. Each page uses at least three different ones, and no two adjacent sections use the same pattern.

| # | Pattern | What it is | Native implementation |
| --- | --- | --- | --- |
| P1 | **Drawing tile** | #F5F5F5 panel, line drawing, label + arrow disc; whole tile is a link | **One new component** (image, text, arrow). Used for service tiles, Work/Approach links, later related-service links |
| P2 | **Split with drawing** | Drawing or Studio Plate panel on one side, text on the other; alternates sides when repeated | Existing section + grid; drawing panel uses the P1 panel class |
| P3 | **Black band** | Black section mid-page with large quote or statement text | Existing black section background |
| P4 | **Statement list** | Large 64 px lines with alternating filled/outline dots, short text beside | One new class (statement size) on native headings |
| P5 | **Contrast pair** | Two panels, one outlined white, one solid black, each with a small drawing | Existing containers with border/background |
| P6 | **Plate rail** | The approved Studio Plate carousel and single plates | Existing (homepage carousel, Web Design hero) |

Shared accents: the **marker dot** on eyebrows and service links, the **arrow disc** on primary destinations, the **2 px left-border callout** for "works well with" sentences.

**New items in total:** one component (P1 tile), two global classes (Statement, Quote), one inverted button style (if missing), six SVG files. No new colors, variables or fonts.

### Applying it to the other pages (direction; each page gets its own spec when approved)

| Page | Keep | Change |
| --- | --- | --- |
| **Home** | Hero, Big Picture diagram, Studio Plate carousel (P6), black contact | **What we do** → four **P1 drawing tiles** (same tiles as Services; the diagram above already explains the connection, so the rows are redundant). **How we work** → keep numerals, but on a **P3 black band** so the page has a mid-page contrast. |
| **About** | Hero, black CTA | **Founder** → real portrait (approved photo) in a 4:5 frame, P2 split. Until the photo exists, set the name at display size in the slot, not a gray box. **The idea** → P3 black band with the line "The right solution starts with understanding the problem — not selling another service." as a quote. **Principles** → P4 statement list (alternating dots, no "01 /" numerals). **Go deeper** → two P1 tiles (Work with a Studio Plate thumbnail; Approach with the project line drawing). |
| **Website Design & Development** | Hero with Studio Plate, the phone diagram section | **Signs** → P3 black band with the seven signs as quotes. **Fix / redesign / rebuild** → P5 contrast-style trio (three panels with small drawings: one patched block, a reshaped page, a new page). **Includes** → P2 split with `web.svg`. **Ownership** → P4 statement list. **Works well with** → three P1 tiles (SEO, Ads, Automation drawings). |
| **SEO, Ads, Automation pages** | Shared service template | Hero uses the service's drawing large instead of a Studio Plate; signature section expands the same drawing with numbered markers, like the Web Design phone diagram. |

## 5. Visual references

Only sites I actually opened are listed.

| Site | Adopt | Do not copy |
| --- | --- | --- |
| [Stripe](https://stripe.com/) (opened 2026-11-19) | Every product section shows a fragment of the actual product UI, which explains the service instantly. Two-tone headline (black statement + gray continuation), the same device ROBYLO already uses. Tiles of different sizes in one grid. | Gradients, color, glossy 3D cards, heavy motion. Scale of content; a small studio can't sustain a mega-site. |
| [Apple iPhone page](https://www.apple.com/iphone/) (2026-11-18) | One object per tile on a neutral field; tiles as navigation; generous, confident type. | Per-product color fields; full-bleed product photography. |
| [Locomotive — Work](https://locomotive.ca/en/work) (2026-11-18) | Strict caption grammar; confidence through restraint. | Hover-only imagery; text-only index for a homepage. |
| [Clay — Websites](https://clay.global/work/web) (2026-11-18) | A real website screen on a neutral mat (Art Bridges card), like the Studio Plate. | Mixing many presentation styles on one page. |
| [Metalab — Work](https://www.metalab.com/work) (2026-11-18) | Services listed in muted gray beside each project; a dark page that still feels calm. | All-dark site; famous-logo-driven layouts. |
| [AREA 17 — Clients](https://area17.com/clients) (2026-11-18) | A large single sentence per client; a "since" marker as credibility without numbers. | Lifestyle photography that ROBYLO doesn't have. |
| [Fantasy](https://fantasy.co/work) (2026-11-18) | — | 3D device renders and colored gradients: the opposite of this direction. |
| [Halo Lab](https://www.halo-lab.com/projects) (2026-11-18) | — | Different art direction on every card; loud color. |

## 6. Implementation plan for ChatGPT Work

Do not start before the owner approves this direction. Then work in this order; each step is a separate, reviewable change on the staged site behind owner review.

| Priority | Step | Details | Done when |
| --- | --- | --- | --- |
| 0 | Remove the public **[Confirm]** markers | Restore Coming Soon or remove unconfirmed lines (owner decides) | No "[Confirm]" text on any public URL |
| 1 | Upload the six SVGs | From `docs/design/2026-11-19-visual-direction/source/svg/`. If SVG upload is blocked, export 2× PNG from the same files. Do not redraw. | Files in Media Library |
| 2 | Create two global classes | `rb-statement` (64/48/34, 700, line-height 1.0, tracking −0.035 em) and `rb-quote` (28/24/22, 600, line-height 1.25, tracking −0.015 em). Use existing variables where they exist. | Classes render at all breakpoints |
| 3 | Create the **Drawing tile** component (P1) | Link wrapper → panel (#F5F5F5, radius 4, padding 20/12) → image 4:3 → row (label 18/16/14 px 600 + 32/24 px black circle with →). Properties: image, label, link. Hover: 1 px #000 border; keep the existing focus ring. | One component, four instances work |
| 4 | Services section 1 | Replace the link row with four tile instances in a 4-column grid (2 × 2 under 768 px) | Matches the mockup at 1440 and 390 |
| 5 | Services section 2 | Black background; 3 × 2 grid; problems as `rb-quote` paragraphs with curly quotes; marker dot before service links | Same |
| 6 | Services section 3 | Four split rows, alternating sides; drawing panels; two-column native list; 2 px left-border callout | Same |
| 7 | Services section 4 | Four rungs; `rb-statement` H3 with alternating filled/outline 22 px circle (14 px mobile) | Same |
| 8 | Services section 5 | Two panels (outlined white / black) with the line and loop drawings; labels only if approved | Same |
| 9 | Services section 6 | H2 at display size spanning the container; white button | Same |
| 10 | Entrance motion | Native Elementor entrance animation (fade in up, ~400 ms) on drawings, tiles and plates only; check reduced-motion behaviour | No other animated elements |
| 11 | QA | AGENTS.md checks at 1440/1024/768/390/320: overflow, wrapping, 48 px tap targets, focus, tile hover/focus/press cycle | Recorded in verification.md |

Home, About and Web Design follow only after the Services result is reviewed. Each will get its own committed spec under the rule in AGENTS.md.

**Breakpoint notes:** at 1024 the zigzag becomes 6/6 columns with 24 px panel padding; tiles stay 4 across down to 1024 and become 2 × 2 at ≤ 767. The statement list uses 48 px at tablet. The black quote grid becomes 2 columns at tablet.

## 7. Open decisions for the owner

1. Approve the **Working Drawings** direction.
2. Approve the six drawings as the service visuals (they will also be used on the four service pages).
3. Approve the new micro-copy labels in section 5 ("Start and finish", "Every month") or leave them empty.
4. Two new type roles (Statement, Quote) and one new component (Drawing tile): approve.
5. Gray second line on H2s: keep on every section as approved, or reduce to the hero and at most two sections per page from the next pages on.
6. Corner radius 4 px for panels (the system variable is 0 px; see [design-system-index](design-system-index-2026-11-19.md), known conflicts).
7. The public [Confirm] markers: restore Coming Soon or remove them.
