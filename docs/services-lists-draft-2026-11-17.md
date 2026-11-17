# Services editorial lists — preparation and approved application,2026-11-17

ChatGPT/Codex. Owner authorized refining only the three feature items in each of the four Services rows. The later design correction supersedes the initial icon request: short gray lines, no icon library/SVG/emoji. Initially delivered as saved drafts. **Owner subsequently approved application with «роби»; component6013 and Home5894 drafts were promoted. Logged-in root now shows the approved lists; anonymous Coming Soon remains active.**

## Native implementation and scope

Existing Service row component6013 now has a pending draft revision. Its existing title, description and grid remain; the three feature paragraphs are grouped into native Atomic e-list → e-list-item → marker/content slots. Each marker contains an e-divider set through native width/height/background controls:12×1px, rb-mute (#8A8A8A). Marker slots are natively aria-hidden. Content uses existing rb-meta and rb-text: Manrope16px/1.6, secondary to the unchanged18px description.

Marker width12px plus rb-space-1 gap8px gives a20px hanging indent. Native marker height1lh centers the line on the first text line; separate content slots retain the indent when text wraps. List items have zero native padding, nowrap marker/content layout and min-width0. Mobile uses a vertical list with8px between items. Desktop/tablet retain the existing inline/wrapping feature arrangement, with the same line treatment. Existing12px desktop /14px mobile description-to-features spacing is retained.

Reused rb-grid-12, rb-grid-main, rb-grid-aside, rb-meta, rb-text, rb-mute and rb-space-1. No class, variable, component, image asset, custom-CSS block, JavaScript or dependency added. All style strings in the [recipe](implementation/2026-11-17-services-lists-draft.json) configure native Atomic layout, spacing, sizing or typography properties. Native controls were sufficient; no CSS exception was necessary.

Home5894 pending draft updates only the existing four Service row instance overrides:1ddb8d61,103b1686,5d1cb921,15c5fe44. Feature copy is preserved; old separator spans were removed from scope overrides because the native lines replace them. Title/description override keys and text are preserved. No unrelated section, template, header, carousel or maintenance setting was edited.

Draft component metadata maps the same five override keys to the updated native elements. No duplicate component was created. The authenticated Home draft preview resolves staged6013 for all four rows:4 semantic lists,12 list items,12 native lines, zero SVGs. Normal authenticated root still shows the published Services with0 native lists. Both component6013 and Home5894 must be promoted only after separate owner approval; that was not done.

## Targeted verification and comparison

Chrome responsive emulation at1440/768/390/320px: all12 markers measured12×1px, all text indents20px, all feature text fits its content slot and page horizontal overflow is0. Desktop/tablet lists flow horizontally with wrapping; mobile lists flow vertically. At1440px all four titles/descriptions matched the published baseline exactly in text, font size, description line height, horizontal position and width. Headings remain32/28/26px by breakpoint; descriptions remain18px.

Compared visually with the owner's supplied mobile screenshot: feature groups no longer read as consecutive unmarked lines; each has a distinct understated line and more vertical separation. The existing headings, descriptions, separators, background, section structure and typography hierarchy remain.

Existing copy fits at the four required widths. An additional targeted240px wrapping stress check produced two-line items with51.19px content height, one-line25.59px marker height,20px indent and no text overflow, confirming the hanging indentation without changing any copy.240px is a stress case, not an approved page breakpoint.

Evidence: [responsive measurements and baseline](verification/2026-11-17-services-list-responsive.json), [wrapping stress check](verification/2026-11-17-services-list-wrap-check.json), [desktop1440—all four Services](verification/2026-11-17-services-lists-desktop-1440.jpg), [mobile390—first two rows for comparison](verification/2026-11-17-services-lists-mobile-390.jpg). Captures were visually reviewed and exclude admin toolbar/personal details. These are static lists; no interactive component changed, so unrelated menu/carousel interaction cycles were not rerun. Limits: browser emulation only, no physical-device or screen-reader certification and no whole-site regression audit.

Review: [Home5894 editor](https://robylo.com/wp-admin/post.php?post=5894&action=elementor), [Service row6013 editor](https://robylo.com/wp-admin/post.php?post=6013&action=elementor). Branch refine/services-lists-2026-11-17 stacks on PR11. No PR was merged.

## Approved application

After the owner's «роби», published the pending component6013 and Home5894 revisions through supported Elementor tools. No additional design change. Ordinary authenticated root verified at390px:4 lists,12 items,12 gray12×1px lines, zero SVGs, no page horizontal overflow and preserved copy. [Applied-state measurements](verification/2026-11-17-services-lists-applied.json), [actual root mobile capture](verification/2026-11-17-services-lists-applied-mobile.jpg). The capture includes the existing admin-only SiteGround assistant bubble. Anonymous root with browser User-Agent returns200 and Coming Soon5858. Earlier four-width checks apply to this same promoted composition; no unrelated interaction/regression checks were repeated.
