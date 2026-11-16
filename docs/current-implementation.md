# Current ROBYLO WordPress / Elementor foundation

Snapshot: 2026-11-16 (America/Chicago). Sources: the prior saved-settings/rendered verification and the read-only visual handoff inspection on this date. This GitHub task reviews those records; it does not change or freshly retest WordPress. See [verification.md](verification.md) for evidence limits.

## Actual pages and active templates

| WordPress ID | Item | Actual state |
| --- | --- | --- |
| 5894 | ROBYLO / Base page template, homepage / | Published foundation: two Base Section instances; not the new marketing homepage |
| 5892 | ROBYLO / Base header — draft | Published and active, include/general; instance of component 5886 |
| 5893 | ROBYLO / Base footer — draft | Published and active, include/general; instance of component 5889 |
| 5774 | Styleguide, /styleguide/ | Published type/color/button samples; not an exhaustive component catalogue |
| 5776 | Atomic Lab, /atomic-lab/ | Published base specimens plus unfinished older experiments |
| 5858 | Coming Soon | Active public page for anonymous visitors |
| 5803 | Older ROBYLO HEADER | Published but inactive, exclude/general; do not use as the active-header reference |

“Draft” in a template title describes design readiness, not its WordPress post status. Active kit ID: 5744. IDs are source-installation references, not portable identifiers.

Homepage content currently reads:

- H1: “A stronger digital foundation.” Paragraph: “A clear website. A connected presence. Practical support as your business grows.” Button: “Explore the styleguide” → /styleguide/.
- H2: “Make the next step clear.” Paragraph: “Explain what you do, show credible work, and give people a simple way to reach you.” Button: “View the components” → /atomic-lab/.

The active header has a text “ROBYLO” home link and “Explore the styleguide” button. It does not render the original supplied logo PNG or the proposed marketing navigation. Text-brand styling is Manrope 24px/600, line-height 1.5, tracking -0.04em; it is provisional branding, not a replacement logo.

The active footer uses the secondary surface, “Websites and digital support for growing businesses.” and “© 2026 ROBYLO.” No completed marketing footer navigation exists.

## Global variables: 20 existing entries

Values in px assume a 16px root where rem is used.

| Variable | Saved value |
| --- | --- |
| rb-ink | #000000 |
| rb-paper | #FFFFFF |
| rb-text | #444444 |
| rb-surface | #F5F5F5 |
| rb-line | #D6D6D6 |
| rb-hover | #333333 |
| rb-font | Manrope |
| rb-space-1 | 0.5rem / 8px |
| rb-space-2 | 1rem / 16px |
| rb-space-3 | 1.5rem / 24px |
| rb-space-4 | 2rem / 32px |
| rb-container | 75rem / 1200px |
| rb-radius | 0px |
| rb-body | 1.125rem / 18px |
| rb-gutter | clamp(1.25rem, 4vw, 3rem) |
| rb-section-space | clamp(3.5rem, 7vw, 7rem) |
| rb-display | clamp(2.5rem, 5vw, 4.5rem) |
| rb-heading | clamp(2rem, 3.333333vw, 3rem) |
| rb-subheading | clamp(1.625rem, 2.222222vw, 2rem) |
| rb-measure | 65ch |

## Implemented Manrope typography

Desktop values are at the 1440px reference; heading variables can interpolate. Tablet overrides apply at ≤1024px; mobile at ≤767px. Line heights are unitless; tracking is em. A 768px viewport still uses tablet rules.

| Role | Desktop / tablet / mobile px | Weight | Line height D / T / M | Tracking D / T / M |
| --- | --- | --- | --- | --- |
| H1 / hero | 72 / 56 / 40 | 700 | 1.08 / 1.10 / 1.12 | -0.03 / -0.0275 / -0.025 |
| H2 | 48 / 40 / 32 | 700 | 1.15 / 1.175 / 1.20 | -0.025 / -0.0225 / -0.02 |
| H3 | 32 / 28 / 26 | 600 | 1.25 | -0.015 / -0.0125 / -0.01 |
| H4 | 24 / 23 / 22 | 600 | 1.30 | -0.01 |
| Body | 18 / 18 / 18 | 400 | 1.60 | 0 |
| Hero paragraph | 20 / 20 / 18 | 400 | 1.60 | 0 |
| Small | 14 / 14 / 14 | 400 | 1.50 | 0 |
| Navigation | 16 / 16 / 16 | 500 | 1.50 | 0 |
| Buttons | 16 / 16 / 16 | 600 | 1.25 | 0 |

Native tag defaults cover h1–h4, p, nav, button and inherited div family. Legacy global font presets are Manrope: Primary 700, Secondary 600, Text 400, Accent 600. Site Settings body is Manrope 18/400, line-height 1.6 and zero tracking.

Exceptions and evidence limits:

- Styleguide's internal H1 deliberately uses 48 / 40 / 32px; do not force a 72px hero onto every internal page.
- H4 and navigation defaults are saved; the homepage has no finished specimen of either.
- The pre-existing Coming Soon text wordmark preserves Arial/Helvetica/sans-serif, weight 800, as a branding exception. Its content copy uses Manrope. This exception is not a second website content family.
- Old Lab components retain some 800/900 weights and legacy visual effects; they are not compliant approved components.

## Global classes: 26 existing labels

These are classes, not reusable component records. Retained names do not prove current use or design approval.

- Layout: l-container, rb-section, rb-chrome-row.
- Buttons: rb-btn, rb-btn--primary, rb-btn--outline, rb-btn--sm.
- Hero: rb-hero, rb-hero__inner, rb-hero__content, rb-hero__visual, rb-hero__actions, rb-hero__eyebrow, rb-hero__title, rb-hero__subtitle.
- Header / legacy navigation: rb-header, rb-header--sticky, js-header, rb-header__inner, rb-header__brand, rb-header__toggle, js-nav-toggle, rb-header__logo, rb-header__actions, rb-header-cta, rb-smart-header.

Typography implementation updated the existing hero title/subtitle/eyebrow, button variants/header CTA, and smart-header typography rather than creating duplicate tokens. rb-smart-header belongs to the older inactive header; it does not establish a finished active navigation.

rb-section supplies white background, fluid section space and gutters. l-container is a left-aligned column, max-width 1200px, gap 24px. rb-chrome-row is a wrapping horizontal row with space-between/center alignment, 24px gap and vertical padding; at ≤767px it becomes a left-aligned column.

Primary button: black fill, white text, 1px black border, square corners via rb-radius, Manrope 16/600 with 1.25 line-height, padding 16px vertically and 24px horizontally, min-height 48px (natural height about 54px). Hover is #333333. Keyboard focus uses a visible white/black ring; this accessibility treatment is distinct from decorative shadows.

## Reusable native components

| ID | Component | Structure and exposed content |
| --- | --- | --- |
| 5864 | ROBYLO / Primary button | Native button; text/link |
| 5877 | ROBYLO / Heading and text | l-container heading + paragraph; heading, heading_tag, description |
| 5869 | ROBYLO / Base section | rb-section + l-container; nested 5877 and 5864; heading, heading_tag, description, text, link |
| 5886 | ROBYLO / Base header | Text home-brand + primary-button instance; action_text/action_link |
| 5889 | ROBYLO / Base footer | Message/copyright overrides |

Reuse these before introducing alternatives, subject to the approved design. Historical components remain preserved: CTA 5389 is an empty shell; Wide Card 4740 and Wide cards 4735 have older card styling/hover shadows; Digit Cards 4683 uses placeholder content, 900 weights and hover movement; Flexbox Number Card 4663 is incomplete with 900 weights. Review before reuse; do not silently delete or call them approved.

## Atomic Lab, Styleguide and unfinished work

Atomic Lab contains current button, Base Section and Heading/Text specimens, followed by an older hero experiment with “This is a title,” “Type your paragraph here,” “Click here,” a blue/default button and seven large image placeholders. Its excessive page length is not a homepage design.

Styleguide contains current typography/color/button examples, including “ROBYLO foundation,” “A clear visual hierarchy.” and “Room for the details.” It does not demonstrate every configured tag or a finished navigation.

Not implemented: the requested “Good business. Hard to find?” hero, Work / Services / About / Contact navigation, five final service rows, Chicago Mounting case-study presentation, finished contact section/form and marketing footer. No project metrics/testimonials are established. Claude's new homepage design is in progress.

## What exists only in WordPress

The repository currently contains documentation and the minimal child-theme source, not a portable Elementor installation.

| WordPress-held configuration | Portable representation in repository |
| --- | --- |
| Kit 5744 variables, typography presets and Site Settings | Described above; no native kit export |
| Atomic tag defaults, global classes, priorities and breakpoint overrides | Described above; no complete importable export |
| Components, properties, nested instances, overrides and local styles | Inventory only; no native component exports |
| Homepage, Styleguide, Lab and template element trees | Descriptions only; no portable page/template exports |
| Header/Footer display conditions and homepage assignment | Descriptions only; no tested transferable settings |
| Coming Soon template HTML, mode and assignment | Status documented; no portable export |
| Media attachment references and font configuration | No reviewed portable media/font package |

Generated CSS and font/cache files are runtime outputs, not the authoritative portable configuration. The child theme does not recreate any of these database settings; its activation on the current site is not established by this snapshot. No database dump, secrets or private connection details belong in Git.

Export/import and dependency mapping still need a separately authorized native round-trip test on a fresh installation. Record exact WordPress, PHP, Hello Elementor, Elementor/Pro and connector versions during that task; a complete version matrix is not available in this repository.

## Incremental update — section backgrounds, 2026-11-16

Atomic Lab now includes three consecutive Light / Soft / Dark examples after its introduction, all referencing unchanged Base Section 5869. Added rb-section--soft and rb-section--dark (global class count now 28); Light uses the existing default. Existing rb-section gained accessible paragraph-link styles. No variables or typography values changed. See [exact changes, CSS exception, screenshots and checks](section-backgrounds-2026-11-16.md). The earlier snapshot above remains historical; the new marketing homepage is still unimplemented and visual approval of these variants is pending.

## Incremental update — Coming Soon portfolio, 2026-11-16

Document 5858 is now a published native Atomic composition with the original PNG logo and five portfolio links. This supersedes the earlier HTML-widget snapshot for that document only. Existing Manrope defaults and text-link classes are reused; no global settings, components, Header/Footer, homepage or Lab were edited. Coming Soon remains active. [Exact settings, corrected destinations, verification and public screenshots](coming-soon-2026-11-16.md).
