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


## 2026-11-17 — Homepage V2 private review snapshot

The older foundation snapshot above is historical. Actual Home 5894 now has a staged V2 autosave (not promoted); Header/Footer components 5886/5889 were updated in place and published behind Coming Soon. Four new reusable Atomic compositions: 6010 Section head, 6013 Service row, 6016 Project tile, 6019 Approach step. Native mobile-menu Popup 5996 is scoped only to Home with no automatic triggers. Kit adds rb-mute #8A8A8A and 13 scoped V2 classes; existing Manrope defaults, spacing tokens, 4px radius, Button 5864 and Glide remain. Full IDs, exact classes, persistence/rollback, screenshots and native-menu limitation: [implementation record](homepage-v2-implementation-2026-11-17.md). The accompanying recipe is site-ID-dependent documentation, not a portable Elementor export. Coming Soon, Atomic Lab and Styleguide element trees are unchanged.


## 2026-11-18 — All five Work cards implemented

Home5894 ordinary authenticated root now displays five real Studio Plates, with native desktop/portrait visibility at767/768 and uniform media proportions. Chicago v3 unchanged in the four-card expansion. Captions, links, typography, card widths, navigation and unrelated sections preserved. Coming Soon still public. [Exact settings, IDs, actual five-width checks and limits](horizontal-portfolio-prototype-2026-11-17.md#all-five-studio-plates--2026-11-18). [Production process](portfolio-image-guidelines.md).


## 2026-11-18 — Quickzy Cleaning added to Selected Work

Home 5894 now has six native carousel cards, with Quickzy Cleaning appended after Elite Mechanical Services. The section heading is “Selected work. Recent projects.” and its supporting paragraph is count-free. The comparison against the before-state confirmed the other five cards and unrelated elements were unchanged. Coming Soon remains the public response. [Implementation and verification](verification.md#2026-11-18--quickzy-cleaning-and-selected-work-copy).


## 2026-11-18 — Final homepage copy snapshot
Home5894 now renders the owner-approved Chicago/suburbs and direct-implementer copy. Six existing Studio Plates/project destinations retained; link labels “Visit site.” Footer5893 reuses5889 message property for the approved tagline. Existing AIOSEO stores the supplied Chicago SEO title/description; robots/Coming Soon unchanged. No layout/class/token/component-definition change. [Approved copy](ROBYLO-CONCEPT.md#approved-homepage-positioning-and-final-copy--2026-11-18), [exact IDs and verification](verification.md#2026-11-18--approved-homepage-copy-and-chicago-positioning). Earlier snapshots above remain historical.


## Website architecture and page skeletons — 2026-11-18
**Approved scope / Implemented / Verified in Chrome.** Owner authorized17 planned URLs: existing Home plus16 internal pages. Owner subsequently confirmed updating shared navigation across all pages while leaving homepage content unchanged.

### Actual sitemap
All16 internal pages are standard WordPress Pages. Native page parents/slugs provide hierarchical URLs. Published here means accessible to authenticated reviewers behind the unchanged public Coming Soon gate; no launch approval.

| Page | WordPress / Elementor ID | Parent ID | Slug | URL | Status | Indexing |
| --- | --- | --- | --- | --- | --- | --- |
| Home | [5894](https://robylo.com/wp-admin/post.php?post=5894&action=elementor) | — | `/` | [/](https://robylo.com/) | Published, gated | Unchanged |
| Services | [6191](https://robylo.com/wp-admin/post.php?post=6191&action=elementor) | — | `services` | [/services/](https://robylo.com/services/) | Published, gated | noindex |
| Work | [6193](https://robylo.com/wp-admin/post.php?post=6193&action=elementor) | — | `work` | [/work/](https://robylo.com/work/) | Published, gated | noindex |
| Approach | [6195](https://robylo.com/wp-admin/post.php?post=6195&action=elementor) | — | `approach` | [/approach/](https://robylo.com/approach/) | Published, gated | noindex |
| About | [6197](https://robylo.com/wp-admin/post.php?post=6197&action=elementor) | — | `about` | [/about/](https://robylo.com/about/) | Published, gated | noindex |
| FAQ | [6199](https://robylo.com/wp-admin/post.php?post=6199&action=elementor) | — | `faq` | [/faq/](https://robylo.com/faq/) | Published, gated | noindex |
| Contact | [6201](https://robylo.com/wp-admin/post.php?post=6201&action=elementor) | — | `contact` | [/contact/](https://robylo.com/contact/) | Published, gated | noindex |
| Website Design & Development | [6203](https://robylo.com/wp-admin/post.php?post=6203&action=elementor) | 6191 | `web-design` | [/services/web-design/](https://robylo.com/services/web-design/) | Published, gated | noindex |
| SEO & Local Visibility | [6205](https://robylo.com/wp-admin/post.php?post=6205&action=elementor) | 6191 | `local-seo` | [/services/local-seo/](https://robylo.com/services/local-seo/) | Published, gated | noindex |
| Digital Advertising | [6207](https://robylo.com/wp-admin/post.php?post=6207&action=elementor) | 6191 | `digital-advertising` | [/services/digital-advertising/](https://robylo.com/services/digital-advertising/) | Published, gated | noindex |
| AI & Business Automation | [6209](https://robylo.com/wp-admin/post.php?post=6209&action=elementor) | 6191 | `ai-automation` | [/services/ai-automation/](https://robylo.com/services/ai-automation/) | Published, gated | noindex |
| Chicago Mounting | [6211](https://robylo.com/wp-admin/post.php?post=6211&action=elementor) | 6193 | `chicago-mounting` | [/work/chicago-mounting/](https://robylo.com/work/chicago-mounting/) | Published, gated | noindex |
| GCPRO Restoration | [6213](https://robylo.com/wp-admin/post.php?post=6213&action=elementor) | 6193 | `gcpro-restoration` | [/work/gcpro-restoration/](https://robylo.com/work/gcpro-restoration/) | Published, gated | noindex |
| Kolo Properties | [6215](https://robylo.com/wp-admin/post.php?post=6215&action=elementor) | 6193 | `kolo-properties` | [/work/kolo-properties/](https://robylo.com/work/kolo-properties/) | Published, gated | noindex |
| Center For Dental Healing | [6217](https://robylo.com/wp-admin/post.php?post=6217&action=elementor) | 6193 | `center-for-dental-healing` | [/work/center-for-dental-healing/](https://robylo.com/work/center-for-dental-healing/) | Published, gated | noindex |
| Elite Mechanical Services | [6219](https://robylo.com/wp-admin/post.php?post=6219&action=elementor) | 6193 | `elite-mechanical-services` | [/work/elite-mechanical-services/](https://robylo.com/work/elite-mechanical-services/) | Published, gated | noindex |
| Quickzy Cleaning | [6221](https://robylo.com/wp-admin/post.php?post=6221&action=elementor) | 6193 | `quickzy-cleaning` | [/work/quickzy-cleaning/](https://robylo.com/work/quickzy-cleaning/) | Published, gated | noindex |

Home5894 remains the assigned front page. Its WordPress title and underlying body were not edited; root / is its front-page URL. Atomic Lab5776, Styleguide5774 and authoring draft6040 remain outside the planned sitemap and were not duplicated.

### Native implementation
- All16 use main#content → one section(rb-section) → l-container → one H1(rb-section-title) and one short paragraph(rb-hero__subtitle). Existing44/36/30px heading role, Manrope, monochrome tokens, section/gutter spacing retained; homepage display size is not imposed on internal H1s.
- Services includes four plain links to child service Pages; Work includes six child case-study links, inside the same Hero. Contact includes info@robylo.com. Links reuse5864 and rb-btn--text, including48px minimum targets; no cards or additional content sections.
- Base Section5869 inspected and preserved. Its fixed action composition has no directory-content slot, so new page layouts reuse existing section/container classes directly rather than duplicating or changing that component.
- Native Elementor Full Width layout with theme title hidden prevents duplicate H1s. Minimal native container controls remove default padding and stack content with existing spacing tokens; no global style change.
- Case intros use only existing homepage categories/towns: TV/AV Chicago; restoration Lombard; property management Park Ridge; dental Glenview; HVAC/refrigeration West Chicago; professional cleaning with no unverified town.
- Introductions are scaffold copy, not approved final narratives. No fabricated results/testimonials or stock images. No new component, token/class, CPT/taxonomy, plugin, CSS/JavaScript file or dependency.
- Slugs/parents configured through native WordPress page controls; Elementor creation does not expose those WordPress fields.
- Existing AIOSEO holds basic title/description for each new page and explicit per-page noindex. Global indexing and homepage metadata unchanged.

### Shared navigation
- Existing Header component5886: Services/Work/Approach destinations become page URLs; About5d11a8d2 added using existing link styling. Active Header5892 instance3fb52a02 uses existing action_text/action_link properties for Contact→/contact/. Logo and layout preserved.
- Existing Footer component5889: four destinations become page URLs; About3f7369af and FAQ77469702 added with existing styles. Active Footer5893 message/copyright overrides retained.
- Existing native Popup5996: five primary page destinations, About3cba38b3 added, CTA→/contact/. Site-wide include/general matches the shared Header; automatic triggers/timing remain empty. Full page navigation closes the prior menu document naturally, without JavaScript.
- Homepage Hero #contact/#work actions, all six external Visit site destinations and Studio Plates unchanged. Native Home body139 nodes identical before/after. Global class/variable registries unchanged.

[Verification/evidence](verification.md#2026-11-18--website-architecture-and-page-skeletons). Native page trees, parents/slugs/status, component overrides, Popup conditions and AIOSEO settings remain database-held, not portable exports. Full page designs/content, noindex removal and eventual launch are separate future scopes.

## 2026-11-19 — Services visual implementation

**Implemented for authenticated review.** WordPress page 6191, `/services/`. The five sections above the existing CTA have been redesigned. The six section roots and `#where-to-start` were retained. The existing CTA subtree `46a02eb3` is identical to its pre-change read-back. The global footer, Homepage, About and Web Design were outside the edit scope.

- Split hero with four instances of Atomic component 6316, **ROBYLO / Drawing tile**. The component exposes one link destination, image and label. The native grid uses four columns at 1440, 1024 and 768px and two at 390 and 320px. The Primary Button component 5864 remains in use.
- A black band groups six customer quotes, followed by four alternating text and visual panels with native lists and a service pairing callout. Mobile puts the visual above each text group.
- Statement rows on the soft section use `rb-statement` (64/48/34px, 700), and problem quotes use `rb-quote` (28/24/22px, 600). Existing Manrope and Kit 5744 variables remain authoritative. The native tile and panel controls set radius to 0px locally because the current shared `rb-radius` token is 4px.
- The engagement panels use contrast and the approved “Start and finish” and “Every month” labels. The supplied schematics are omitted from the rendered page. The six SVGs imported during the initial scope remain in the Media Library under 6308–6312 and 6315.
- Visuals are the existing Chicago Mounting Studio Plate 6145 and [three illustrative UI previews](design/services-studio-visuals-2026-11-19/) under attachments 6319–6321. The previews use generic interface labels without client records or performance figures.

No new theme styles, scripts, packages or global variables. All edits are native Atomic. The editor data, component, media and global classes live in WordPress. GitHub carries the approved source art and implementation notes. Revision 6325 is the pre-redesign Elementor rollback snapshot. A whole-page export would include owner-review copy and depends on the installed kit and component. Keep that data within WordPress and private review channels.

## 2026-11-19 — Services visual refinement

**Saved for review in Elementor on page 6191.** The staged changes are limited to the customer problems, service details and four standards. The approved copy, links, four images, SEO fields and section order were preserved. The hero, engagement panels and black CTA subtrees match the published baseline. The global footer and Homepage are outside the change. Restore revision 6336 for the baseline before this pass.

- Customer problems retain the existing black background and 3/2/1-column grid. The shared dark modifier made all paragraphs white, so the section uses the existing ink and paper tokens through its native Atomic controls. Quotes use weight 700 and answers render at 16px / 1.6 in their existing gray. Tablet quote minimum height is 60px.
- Service lists and related-service callouts use 16px type. The 4:3 desktop illustration slots are 624px wide, previously 576px for the Studio Plate and 560px for the three UI previews. Removed the extra UI panel padding and tightened row spacing. Tablet illustrations align to the start of the text. Mobile keeps the same full-width image-first sequence.
- The four standards use smaller markers and 56/42/30px statement text with a wider explanation column. The intermediate rules are gone. The top and bottom rules frame the group. Explanations use 17px on desktop and tablet and 16px on mobile.

All changes use existing Elementor Atomic settings and class roles. No shared tokens, components, stylesheets or scripts were added. Coming Soon is active and the edited version is unpublished.

## 2026-11-19 — Services ownership copy

**Saved for owner review.** Only the paragraph under “Yours to own.” on Services 6191 changed. The [approved wording](design-services-page-2026-11-19.md#2026-11-19--approved-ownership-copy-revision) replaces that paragraph and its specific review marker. The other eight marker occurrences and the previous visual refinement are preserved in the saved draft.

## 2026-11-19 — Website Design composition with approved assets

**Staged for composition approval.** WordPress 6203 keeps its nine sections, existing approved copy, CTA, links and SEO fields. Existing Hero asset 6145 and signature diagram 6305 retain their original placements and settings. The new Work proof references the existing GCPRO Restoration Studio Plate 6167, with its original 4:3 aspect ratio and attachment alt text.

The fix, redesign and rebuild choices use equal charcoal panels on large screens and stack on phones. They use the existing `rb-hover` (#333333), `rb-paper` and `rb-line` colors. The Scope section groups its four existing phases next to a neutral temporary visual. Its two-column phase grid becomes one column on mobile. All styling is native Atomic and the design system has no new tokens.

| Remaining asset slot | Purpose and treatment |
| --- | --- |
| Web Design 6203 · Design review preview | Labeled neutral 4:3 placeholder. Replace only placeholder child `6ecbeb65` inside the existing slot `4eef8dd9` with an approved design-review visual after owner sign-off. |
| About 6197 · Founder portrait | Existing portrait placeholder `5c42ac2c`, checked for inventory only. It remains pending the separately approved photo. |

No media, icon, theme or shared component changes. Other unfinished pages follow the same approval sequence, starting from their own structure and hierarchy. Homepage, Services and the global footer are outside the changes. Elementor revision 6347 was created immediately before this Web Design pass.

Final action hierarchy uses the existing Hero and final CTA components. The standalone “How every ROBYLO project works” (`6cda9e60`) and “More questions” (`9f3988a`) links retain their native Atomic text-link styling and `/approach/` and `/faq/` destinations. Their labels gained a right arrow. Linked service headings, inline links and shared components were preserved.

## 2026-11-19 — Website Design targeted refinement and native FAQ

**Implemented for owner review, WordPress 6203, [PR #29](https://github.com/vvvetalll/robylo-website-starter/pull/29).** The comparison keeps three graphite cards with 28px desktop, 22px tablet and 20px mobile padding, stronger white headings and light-gray descriptions. Scope uses a full-width two-by-two stage grid that stacks on phones. The process uses three columns on desktop, two on tablet and one on phones. Existing step numbers are 36px, 32px and 28px respectively. Ownership groups the original copy in a readable text column next to the reused 4:3 review slot and stacks the preview below the copy on phones.

The review placeholders are the four decorative Atomic icon slots (Plan `7931603b`, Design `1eb245f5`, Build `9f7ef65`, Launch and after `3687beca`) and the **Website editing preview** slot (`4eef8dd9`, replace its placeholder child `6ecbeb65`). The preview slot moved from Scope to Ownership. The icon slots are 44px square on larger screens and 36px square on phones. Final assets await owner approval. No graphic assets were created or uploaded.

The FAQ uses Atomic `e-accordion` `4361048c` with all six answers collapsed on load, one answer open at most, and existing library plus/minus indicators. The entire native summary row is operable and has a visible 2px keyboard focus outline. FAQ structured data is disabled, maintaining the existing SEO scope. All approved copy, link destinations and 12 `[Confirm]` occurrences remain. Elementor revision 6353 is the checkpoint before this pass.

## 2026-11-20 — Customer-first Home and Services private drafts

**Implemented for owner review.** The [composition plan](design-customer-first-home-services-2026-11-20.md) records the audited sections, exact draft wording and outstanding owner decisions. About 6197 and Web Design 6203 were reviewed. This pass changes Home 5894 and Services 6191 only.

- Home keeps the current hero and matching final CTA, diagram, six-project carousel, approved Studio Plates and navigation anchors. Hero, diagram and proof copy are more direct. The existing `#services` section now has one native linked heading and one short benefit per category. The grid uses the existing typography, border and spacing tokens and switches to one column on phones. The four existing service destinations are linked. The shared service-row component and templates remain intact. The project process uses its existing reusable steps with shorter copy.
- Services keeps the hero tiles, eight placements of existing imagery, six problem links, four illustrated detail blocks, project proof, engagement paths and CTA. Each service explains its core scope in a short paragraph. Repeated lists were consolidated and the existing review-marked capability lines remain in their respective sections. Four build standards use a compact grid. The approved client-ownership statement is byte-for-byte unchanged, and commitment boundaries and all eight confirmation occurrences remain.
- Native Atomic edits only. No new media, global tokens, theme code or shared component changes. Restore Elementor revision 6359 for the Home baseline and 6358 for the pre-pass Services draft. No merge or public release.
