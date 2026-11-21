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

## 2026-11-20 — Global typography and hierarchy

**Implemented.** Three existing classes in Elementor Kit 5744 were adjusted. `rb-heading-mute` now presents secondary spans at 0.88em / 600 in `rb-text` (#444444) on light surfaces. The existing dark section override keeps #8A8A8A on black. Main role sizes, 700-weight headlines, existing palette tokens and Manrope remain. `rb-grid-aside` now uses 16px on mobile. `rb-hero__eyebrow` uses 13px / 600 with 0.02em tracking and 1.4 line height.

Home 5894, Services 6191, About 6197, Web Design 6203 and the shared Home Approach component 6019 are saved as Elementor drafts. Redundant labels removed: Services “Where to start”, “The services”, “How we build”, “How to start”; About “THE PERSON BEHIND ROBYLO”, “THE IDEA”, “GO DEEPER”; Web Design “Signs”, “What you get”, “How we build it”, “Ownership”, “Process”, “Works well with”. Meaningful labels reuse the shared role. About keeps the numbered reference and functional dividers.

Nine decorative dark lines were removed (three repeated Home process lines and six Services problem lines). The one-time panel uses `rb-line`, and related-service annotations use a single 1px `rb-line` left border. Home process and Services engagement body text is at least 16px on phones. No theme or page stylesheet was added, no token values were changed, and there is no new script. Shared kit class changes apply to the current kit. Coming Soon remains active, and page revisions were not promoted.

Rollback: revisions 6364 (Home), 6366 (Services), 6369 (About), 6365 (Web Design), and 6367 (Approach component) predate the page/component changes. Restore the kit class baseline separately if needed: `rb-heading-mute` span block and `rb-mute` color with inherited size/weight; `rb-grid-aside` mobile 15px; `rb-hero__eyebrow` 14px / 400 with zero tracking and 1.5 leading.

## 2026-11-20 — Outline navigation and decorative separators

**Implemented for private review.** Staged in Home 5894, Services 6191, About 6197, Work 6193 and Website Design 6203. Approach 6195 was reviewed and has no section-level action. No Elementor widgets or destinations were added or duplicated. The four Home service links retain their original widgets and text. Their existing Home grid uses quiet white surfaces and stacks on phones. The four Services presentations retain their imagery, alternate order on wider screens, preserve exact scope and keep one outline action each. Related-service references are rendered as compact linked prose after each main action. Main conversion controls are unchanged.

The existing `rb-btn`, `rb-btn--outline`, `rb-btn--sm` and 4px radius are reused. The current outline class has a scoped descendant rule for an anchor inside an existing linked heading, which Elementor's heading wrapper controls do not address directly. Its original native button rules are retained. No theme, page CSS sheet, new token, script, image or plugin was introduced. About and Work reuse their existing wrapped button instances. Website Design uses the native link prop on the existing related headings, preserving destinations and incorporating the existing arrow into the link.

| Page | Removed native divider and frame sources |
| --- | --- |
| Home | Four service cards `5530cb88`, `1c50e861`, `2d2cc32`, `777f41d8`; Big Picture seam `32e0f3fc`. |
| Services | Four visual presentations `1d7088ed`, `ab4014b`, `53c5da5`, `33bad3dc`; standards `4a084813`, `512497e9`, `13f59a31`, `6225cab4`. The One-Time Projects frame `68299d9f` is replaced by the existing soft surface. Four complementary inline references also lose their former left accent. |
| About | Numbered principle rows `58c58e51`, `58664035`, `4ecb57c5`, `4e22ee23`; Explore panels `545f28b3`, `61817e47`. Numbering and content order are retained. |
| Website Design | Signs `77ed2d36`, `587d8066`, `42c13117`, `7c1cfb21`, `680d64ac`, `69aba2ab`, `2d02d129`; Scope `208502bd`, `2c60eb52`, `bbfcab5`, `6e2389de`; signature rows `56c548e6`, `5dd831a9`, `662565f7`, `6576df03`, `1f744146`; related rows `4a1616cf`, `5c79b964`, `2c5c56fb`, `5530dfb9`; temporary editing-preview frame `6ecbeb65`. |

These are 39 horizontal rules across both passes and two static frames. Functional button boundaries, focus indicators, the six FAQ row boundaries and accordion closing edge, the Home orbit and image assets remain. Header and footer templates retain their existing design. Rollback checkpoints before outline changes: 6373 (Home), 6376 (Services), 6375 (About), 6372 (Work), 6377 (Website Design). The later separator pass has checkpoints 6379, 6378, 6381 and 6380 respectively for Home, Services, About and Website Design. The shared selector can be removed from the outline class separately.

## 2026-11-20 — Composition, list hierarchy and divider cleanup

Home, Services, Website Design, About and the shared Footer component have new staged Elementor revisions. The [pass documentation](design-visual-composition-2026-11-20.md) identifies the exact elements, retained borders, verified behavior and rollback revisions. Work, Approach and Contact remain starter pages with composition proposals only. At the owner's request, the previous PR #31–33 versions were promoted to their normal authenticated URLs before this pass. Coming Soon and noindex remain active. The composition revisions remain staged.

## 2026-11-20 — The Big Picture on Home 5894

The owner approved PR #37's customer path. ChatGPT/Codex replaced the contents of existing section 7d73938f in the protected Elementor draft. The section contains the exact lede and a single two-tone H2, three numbered H3s with captions, a search/listing interface, a schematic website with an editable quote label, and an inquiry/inbox interface. Each stage is an Atomic article. This differs from the proposed ordered list because the installed Atomic list exposes an unordered list. Manrope, the existing content container and kit variables supply the foundation. Section-local styles control the stage composition without changes to shared components. The fixed head/base components were not changed or nested in the existing section.

The [desktop laptop](evidence/big-picture-elementor/assets/bp-laptop.webp) is a 713 × 406 transparent review cutout from the owner's reference, 20.6 KB. A [compact website crop](evidence/big-picture-elementor/assets/bp-compact-site.webp) and live quote label replace the shell below 1024 px. The requested 2× production source remains outstanding. The [connector and arc SVG](evidence/big-picture-elementor/assets/bp-laptop-path.svg) anchors both curves to the laptop frame. Panels stay flat as specified. Attachment IDs 6413, 6414 and 6420. Undo revision 6416 restores the previous section as part of the pre-change homepage revision. Reconcile any later edits before restoring a page revision.


## 2026-11-20 — Published Warm hybrid homepage

The owner selected the middle comparison in PR #38 for the six existing sections of Home 5894. The published page uses warm off-white surfaces (#F7F7F5), near-black headings and conversion section (#15171C), graphite body text (#3F434B), secondary headings (#6A6F78) and softer shadows. Blue (#2E5AAC) is confined to the quote example on the laptop. Existing assets retain their original colors. Changes are scoped to the Home document and reuse its existing Atomic elements. The kit, shared components, header, footer and other pages received no edits.

On phones, the Business Hub uses 84% of its previous width and has 32 px of clear space below the CTAs. The three-stage sequence uses 84% width with a 250 px minimum. Each step label has a 22 px corner radius, 18.75 px title, 14.5 px caption, 6 px between them and a circular 31 px number. Only the three label wrappers received the mobile radius change. The tablet and desktop label radius is 54 px.

The [local Atomic style record](evidence/warm-home/elementor-styles.json) identifies affected elements and records the previous published, previously staged and final local styles. WordPress revision 6423 holds the pre-trial homepage, 6425 the pre-implementation configuration, 6433 the state before the last spacing adjustment and 6435 the state before the mobile label radius. Check for later edits before restoring a whole-page revision.

## 2026-11-20 — Published mobile journey and Hero spacing

Home 5894 now presents its existing three customer-path articles as a vertical sequence on phones. Section 7d73938f no longer uses floating label backgrounds or negative label margins in this layout. Each heading sits beside a 32 px near-black circle with a white digit. Its description follows in the same text column. The existing interface illustration sits 14 px below the description. Two centered neutral arrows connect consecutive articles in their 36 px gaps. The implementation adjusts the existing section-local responsive styles and uses decorative pseudo-elements. Article order, copy, imagery, controls and global tokens are preserved.

The additional Hero change updates the mobile grid gap on 660c22c4 from 32 to 56 px. The container owns the entire adjustment. The graphic retains its internal coordinates and trailing space. Revision 6442 precedes the Hero edit and 6437 precedes the mobile journey redesign. Reconcile intervening edits before restoring a whole-page revision.

## 2026-11-20 — Published What We Do service directory

Homepage 5894 retains its existing services anchor, section 2b42c245 and content container 641b49dd. The introduction and directory are native Atomic elements with editable copy, one H2, four H3s, four links and four decorative SVGs. Desktop uses two columns, with Websites above SEO and advertising above automation. Phones use one column in the approved brief order. Section-local styles provide the structural dividers, arrow hit areas and faint desktop corner curves. Existing SVG media 6403, 6405, 6401 and 6402 and the rb-hub-icon class supply the line icons.

The headline and introductory sentence follow the screenshot. Service names and descriptions follow the written brief, which gives longer descriptions than the image. The laptop and magnifier reuse the studio’s existing icon family in place of the reference monitor and map pin. Revision 6444 contains the homepage immediately before the directory change. Check for later edits before restoring a complete page revision.

## Protected homepage — Business Hub and section eyebrows, 20 November 2026

Home 5894 uses the existing four Atomic cards for the approved PR #43 orbit. Page Settings → Custom CSS contains the [motion rules](evidence/business-hub-orbit-published/business-hub.css) followed by the [approved guide rules](evidence/business-hub-orbit-published/guides-review.css). The named container is the existing Business Hub, 17cfcfea. No theme code or animation library is involved. Removing these two scoped blocks restores the original Hub. The guides use two stationary decorative outlines with 54% and 72% diameters, a 1 px neutral border at 16% opacity, and no pointer interaction.

Kit 5744 global class **rb-section-eyebrow** (g-867b2fb) owns section-label typography for Hero 766544a6, The Big Picture 5e01f3b9 and What We Do 3ce64234. Manrope uses rb-font, weight 700, size 15/12/11 px at desktop/tablet/mobile, line height 1.4, letter spacing 0.015em, uppercase and rb-text (homepage value #3F434B). Each paragraph retains its original margins. The previous rb-hero__eyebrow class also styles process and footer labels and has consumers on internal pages. It remains available to those consumers. Selected Work, How We Work and the final CTA have no separate section eyebrows.

## Mobile Big Picture · protected publication, November 20, 2026

Home 5894 uses its original section 7d73938f, stage grid 4003dd65 and three native articles 38960405, 62643d78 and 34a023ac. Only the section's local Atomic style was edited. The [saved style](evidence/mobile-path-final/section-style.css) contains the native breakpoint settings and scoped CSS. A CSS counter paints decorative, zero-padded numbers with empty alternative text. The original number widgets remain in the tablet/desktop layout. The existing mobile mockup image 435e1435 has a 1 px warm-gray outline. No new nodes, assets, scripts or global styles were added.

The owner approved the final PR #44 composition and subsequently requested more separation. Mobile articles now have a 30 px gap. The earlier 22 px value remains in the decision history. Revision 6461 precedes the section change. Reconcile any later edits before restoring a whole-page revision.

## Hero card height and What We Do typography · 2026-11-20

**Published on protected Home 5894.** Hub `17cfcfea` adds a shared local rule for all four `article.rb-hub-card` elements. The minimum border-box heights match the tallest original orbit card at each width. They are 44.25 px on phones, 55.59375 px on tablet, and 51.15625 px on desktop. The rule runs only in the existing active orbit container and motion preference branch. Local priority overrides the existing orbit rule's `min-height: 0`. The original alignment, padding, intrinsic widths, orbit path, 40-second timing, phases, center and static fallback retain their existing values.

In What We Do, only the two H3 size declarations in directory `28e130a8` changed. The desktop and tablet clamp is `clamp(22px, 2.05vw, 31px)` and the phone override is `20px`. Section H2, eyebrow, descriptions, links, icons, weight and grid rules remain as published before the task.

## 2026-11-20 — Published global header and WordPress navigation

- Global Elementor Header `5892` uses one native shell `5c8ec978`, a linked inline SVG, and the Elementor Pro WordPress Menu widget `4bb36fef`. The widget reads the existing WordPress menu `rbl` (ID `5`) on desktop and mobile. Its page objects are Services `6191`, Work `6193`, Approach `6195`, About `6197`, and Contact `6201`. Contact uses the WordPress menu item class `rb-primary-contact` for its desktop CTA styling.
- The former header used a raster asset, hard-coded button links, and a separate mobile popup trigger. The shared component `5886` and legacy popup `5996` are retained, with the popup’s old trigger absent from the active header.
- Native inline SVG uses the approved source attachment `2983`. The six deployed paths match [the optimized source](../integrations/robylo-wordmark.svg) exactly. Scoped `currentColor` styles provide the dark top treatment and the white wordmark over the dark header.
- Elementor Pro Custom Code `6532` loads [the scoped CSS and script](../integrations/robylo-header.html) in the head. The script needs the new shell and uses the scroll direction pattern reviewed in GCPRO: one passive scroll listener, animation frame scheduling, direction thresholds, and an admin bar offset. The menu stays available during keyboard focus and while open, and releases the page scroll lock on close, link selection, and desktop resize.
- For rollback, Elementor revision `6534` preserves the previous header structure. The runtime activates only when the new shell is present. The original menu is still managed under Appearance → Menus. Coming Soon and noindex stayed active at publication.

See [verification](verification.md#2026-11-20--published-global-header) and [design](design-final-header-2026-11-20.md).

## 2026-11-21 — Shared section eyebrow on the four ROBYLO pages

The first Home eyebrow “Digital partner for small business” is the owner-selected reference. Kit `5744` already generates `rb-section-eyebrow` (`g-867b2fb`) with Manrope via `rb-font`, weight 700, 15 px desktop, 12 px tablet, 11 px mobile, line height 1.4, letter spacing 0.015em, `capitalize` and the existing `rb-mute` color. This supersedes the earlier recorded uppercase and graphite treatment for standard section eyebrows.

| Page | Standard eyebrow elements |
| --- | --- |
| Home `5894` | Digital partner for small business `a1968bc`, The big picture `5e01f3b9`, What we do `3ce64234` |
| Services `6191` | Services · Chicago & suburbs `7936e4b6`, Start and finish `55331e63`, Every month `67b55314` |
| About `6197` | About ROBYLO `657cd6bb`, The difference `525d4cb1` |
| Web Design `6203` | Website Design & Development `82c115`, FAQ `6487d2ac` |

Seven internal-page elements moved from `rb-hero__eyebrow` to the canonical class. About's two elements also dropped `rb-meta`, which carries independent typography. Six redundant light-surface color overrides were removed. “Every month” retains the existing `rb-line` color on its dark panel for contrast. Margins, including What We Do's responsive spacing, were preserved. Three labels stored as all caps were changed to sentence case because CSS `capitalize` does not lowercase the source. The existing class still owns the displayed casing. Brand names and acronyms retain their standard form.

The legacy class remains in use by other roles, including process and footer labels. Atomic Lab is outside the four-page scope and its original document data were restored. No variables, classes, theme styles or components were added. Edits to existing autosaves were scoped to the affected labels. Published pages received only the corresponding element changes through the registered WordPress REST document field after MCP staged the corrections, so existing autosaves were kept separate.

See [frontend and propagation verification](verification.md#2026-11-21--canonical-eyebrow-verification).

## 2026-11-21 — Protected Services directory refinement

Services `6191` retains the original six sections. The hero headline, Hero tile component `6316` and its four destinations, the four build principles, and the final CTA copy and destinations remain in place. Grid `4ed372be` keeps two columns on phones and uses equal rows to keep all four tiles the same size when labels wrap. The six customer problems use problem → explanation → service link. The towns-related problem links to Local SEO from `3609e039`.

The four service articles retain their visual panels and alternating desktop layout, with images preceding copy on phones. Each has an existing native list with 3, 3, 3, and 2 confirmed capabilities and one descriptive link. Pairings, redundant links, selective review solicitation, and all eight visible review markers were removed with their unconfirmed claims. The two engagement panels use the same soft treatment and retain their separate descriptions. The final CTA uses existing primary button component `5864`.

Existing class reuse includes `rb-section`, `l-container`, `rb-section--dark`, `rb-section--soft`, `rb-section-eyebrow`, `rb-display-xl`, `rb-section-title`, `rb-heading-mute`, `rb-item-title`, `rb-quote`, `rb-hero__subtitle`, `rb-btn` and `rb-btn--text`. The eyebrow class retains its current natural casing and its 11/12/15 px sizes. The dark problem band scopes the keyboard focus-ring color to `rb-paper` because the base outline resolved to black on black. All four article links and six problem links share the kit text-link appearance.

Website’s existing 4:3 visual panel `2d8edd58` now contains decorative native Atomic illustration `42d7815f`. Its illustrative browser includes window controls, navigation, a page headline and CTA shape, an image area and three supporting blocks. It uses existing paper, surface, line, text and radius tokens without client content, stock imagery or metrics. Only this Services detail image changed. The Hero tile keeps its Chicago Mounting image with existing alt text, and the SEO, Ads and Automation illustrations keep attachments `6319`, `6320` and `6321`. There are no missing images or icon placeholders in the reviewed layout.

Elementor rollback points `6549` (original page), `6552` (before illustration), and `6554` (before dark focus correction) were recorded. Before restoring a full revision, check for later changes. The homepage, shared kit, global components, footer, portfolio and case study received no edits during this task.

[Approved revision](design-services-page-2026-11-19.md#2026-11-21--owner-authorized-directory-refinement) · [Rendered verification](verification.md#2026-11-21--published-services-directory-verification)

## 2026-11-21 — Sound familiar, Hero illustration and service outline links

The protected Services page `6191` retains its existing six sections. The customer problems section `5ee0ad53` now has the H2 “Sound familiar?” and retains `#where-to-start`. The six approved problem sentences, explanations, arrow links and destination mapping are unchanged. The visual quotation marks are generated through a scoped pseudo-element with an empty accessibility alternative. The situations remain anonymous illustrative examples.

The section reuses `rb-section`, `rb-section--soft`, `l-container`, `rb-section-title`, `rb-heading-mute`, `rb-quote`, `rb-hero__subtitle`, `rb-btn` and `rb-btn--text`. Its native grid and card styling use `rb-paper`, `rb-surface`, `rb-line`, `rb-text`, `rb-mute`, `rb-radius` and the existing spacing variables. Tablet and desktop cards stretch to equal heights with their links aligned at the bottom. Phone cards retain natural heights and shared widths, padding and spacing. The old dark focus override was removed with the dark treatment. The shared focus ring applies on the light surface.

The first Hero tile reuses Drawing tile component `6316`. Its image override points to attachment `6559`, a 600 × 450 render of the original native Website detail artwork `42d7815f`. The new instance `115e569e` retains label, URL and first position. The other three Hero tiles, the existing native detail artwork and portfolio media are unchanged.

Only the four detail actions `77aab827`, `79cdddf2`, `5f9e1c33` and `7366c197` use the compact outline treatment requested in the follow-up. They reuse `rb-btn`, `rb-btn--outline` and `rb-btn--sm` and keep their respective destinations. The single scoped phone padding adjustment keeps the longest requested label on one line at 320 px. It applies only to the four compact outline links in detail section `6540df8`. No new global class, token, stylesheet, script or dependency was added. Other sections and shared template documents were left in place.

[Approved scope](design-services-page-2026-11-19.md#2026-11-21--owner-authorized-customer-problem-cards) · [Rendered verification](verification.md#2026-11-21--services-cards-and-outline-verification)

## 2026-11-21 — Restore original engagement card contrast

The owner asked to restore the original light/dark pairing after the directory refinement gave both engagement cards the soft surface. The historical Elementor configuration showed Ongoing Support `24221aa9` on `rb-ink` with light text. Its restored surface now comes from the existing `rb-section--dark` modifier, with `rb-ink` and `rb-paper` supplying background and text. The body’s light-surface text override was removed so the shared dark treatment supplies its color. One-Time Projects keeps `rb-section--soft`. Both engagement options retain equal standing, their existing geometry, typography and copy.

The final published Elementor tree differs from the original task baseline only in the Ongoing Support class assignment and its body color override. The pre-change revision is `6567`. [Chrome verification](verification.md#2026-11-21--engagement-card-contrast-verification)

## 2026-11-21 — Desktop navigation underline and stable geometry

Elementor Pro's `widget-nav-menu.min.css` sets `padding: 13px 20px` on main-menu anchors in hover/focus through a more specific state selector than the original local link padding of `4px 0`. Published Chrome measurements showed the ordinary hovered anchor gain 40 px in width and the flex line gain 2 px in height. The right-aligned menu starts 40 px farther left, shifting any preceding siblings with it.

Existing Custom Code snippet `6532` now adds one desktop-only CSS block for shell `5c8ec978` and menu widget `4bb36fef`. It keeps the regular link padding invariant, explicitly uses Manrope 16 px / 500 from the existing `rb-font` variable, and preserves the native 22 px spacing and 44 px link height. The desktop list centers its flex line inside its original 44 px resting height. The original Contact anchor keeps its dimensions and its own 2 px native hover growth within that centered line, with the siblings stationary.

The regular links use an absolutely positioned 1 px `currentColor` underline. The underline grows from the left over 200 ms on hover and keyboard focus, and stays visible for the native current page or a menu ancestor supplied by WordPress. It switches immediately under reduced motion. The menu markup, responsive breakpoint, all source rules for the drawer, the Contact rules, header styling and the scroll script remain in the original snippet. The existing named classes and variable were reused without a new kit class or dependency.

[Exact integration source](../integrations/robylo-header.html) · [Published verification](verification.md#2026-11-21--desktop-header-navigation-verification)

## 2026-11-21 — Website Design & Development service-page refinement

Published Elementor page [6203](https://robylo.com/services/web-design/) through the ROBYLO MCP connector. The document now contains eight sections: Hero, Signs, Anatomy, Project process, Ownership, Related services, Questions and Final CTA. The active kit is 5744. This entry supersedes the earlier page record that kept editorial confirmation markers and a separate project-scope section.

| Section | Targeted Elementor changes |
| --- | --- |
| Hero `3c32d34a` | Removed the screenshot caption. Preserved the approved headline, media 6145 and its alt text, primary contact component and Work outline button. The lead now inherits `rb-hero__subtitle`. |
| Signs `6a110340` | Renamed the section and added token-based separators between the seven signs. The three choices now use the shared paper, line, spacing and radius tokens. The diagnostic link remains. |
| Anatomy `50c56d9b` | Preserved the five explanations and existing image widget. Reused the original phone outline, screen contents and inline numbering in media 6576, removing five diagram connectors and the flat outer fill. Added a token-based native frame and matching native numbered indicators. Preserved the diagram alt text. |
| Process `7a90781a` | Combined scope and timeline into one native four-stage list. Removed the duplicate scope and its four blank icon boxes. Kept About and Approach links. |
| Ownership `6f2e4e0f` | Replaced the unfinished editor preview with the native “Your accounts” panel. It labels domain, hosting, WordPress admin and Google accounts as discussion topics. |
| Related services `523282c5` | Replaced separate linked titles and descriptions with three native full-row links. Removed the GCPRO image, caption, duplicate Work link and “six live sites” claim. |
| Questions `7f57a9e6` | Preserved all six native questions and controls. Updated answers to remove unapproved commitments. Changed the stored eyebrow “FAQ” to “Common questions”; it retains `rb-section-eyebrow`. The class’s `capitalize` leaves all-capitals source strings as entered. |
| Final CTA `4f14e386` | Preserved the headline, dark styling, copy, contact component and email. Balanced desktop wrapping on the existing heading. |

The page uses `rb-section`, `rb-section--soft`, `rb-section--dark`, `l-container`, `rb-display-xl`, `rb-section-title`, `rb-heading-mute`, `rb-item-title`, `rb-section-eyebrow`, `rb-hero__subtitle`, the existing button classes and two instances of contact component 5864. Local styles use `rb-ink`, `rb-text`, `rb-paper`, `rb-surface`, `rb-line`, `rb-radius` and `rb-space-1` through `rb-space-4`. The compact related rows keep native Atomic layout, hover and focus rules scoped to this page. The kit, shared templates and other documents received no edits.

Page content describes WordPress and Elementor editing, site structure, mobile design, form routing, basic search setup, testing and redirects for replacement projects. Specific account ownership and credential arrangements, included hosting or analytics, formal training, ongoing-support terms, pricing, fixed timelines, copywriting and automatic replies require separate confirmation. No unfinished illustration or editorial marker remains on the page. Future ownership indicators require explicit approval of the account arrangements.

[Scope and design](design-service-web-design-2026-11-19.md#november-21-refinement) · [Published verification](verification.md#2026-11-21--website-design-service-page-verification)
