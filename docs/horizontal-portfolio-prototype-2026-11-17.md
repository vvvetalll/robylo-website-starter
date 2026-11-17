# Selected Work horizontal prototype — 2026-11-17

Collaborator: ChatGPT/Codex. Owner approved a controlled V2 portfolio experiment and subsequently required neutral placeholders only. **Implemented privately; specified responsive and interaction checks verified; visual acceptance pending.** No screenshots of client sites were captured or downloaded, and no media assets were created.

## Saved Elementor state

Home5894: native Save Draft, section `58c9fc4`, HTML section ID `work`, inside Main1117679b between Services2b42c245 and Approach8b0906a. Replaces old Work2c8eb799. Hero239c5c36, Services2b42c245, Approach8b0906a and Contact327759eb retain their IDs. Header, Footer, Hero, Services, Approach, Contact and Coming Soon were not edited. No Publish or maintenance-mode operation occurred.

Because MCP reads published V1 while the editor contains staged V2, the composition was assembled on private authoring draft6040, then moved with native Copy/Paste and navigator drag. Draft6040 remains unpublished as the reconstruction reference; it is not a second public homepage. Do not use a published-V1 MCP tree to overwrite staged Home5894.

Native elements: section e-div-block; existing Section head component6010; e-carousel → e-carousel-viewport → e-carousel-container → five e-carousel-slide elements; native previous/next arrow elements with text glyphs. Every slide contains an e-div-block placeholder and centered project-name paragraph, followed by H3, factual category paragraph and existing button component5864 styled with rb-btn--text. All five existing titles, descriptions and external URLs are preserved; links retain target=_blank.

## Layout and reuse

Existing Manrope, rb-section, rb-mat, rb-meta, rb-btn variants, rb-ink, rb-gutter, rb-container and spacing variables are reused. No new variable, component, plugin, library, theme CSS, custom-CSS block, PHP or JavaScript was added. Three native Atomic classes supply repeated structures absent from the existing library:

- rb-portfolio-placeholder: centered label, width100%, 16:10 ratio, 24px padding. Existing rb-mat supplies #F5F5F5 and 4px radius.
- rb-portfolio-caption: column, start alignment, 4px gap.
- rb-portfolio-slide: column, 24px content gap, 16px mobile; responsive width basis. The existing l-container was removed from slides because its auto margins suppress native carousel spacing.

Native local layout styles implement the section's three-column grid and right-edge track. Heading uses column2; carousel spans columns2–3. Grid column gap is zero, with 40px margin above the carousel. Card flex basis is480px desktop,400px tablet, calc(100vw - 64px) capped320px mobile. Native controls are48×48px. No layout rules were added outside Elementor.

Compatibility findings: fractional slides_per_view values are truncated by this installation, despite the numeric schema. Native full flex values are required at each breakpoint: changing flex-shrink alone resets basis to auto. Using gap40px on the section grid adds unwanted mobile side space; gap0 plus carousel margin preserves the content gutter. The [installation-specific composition recipe](implementation/2026-11-17-portfolio-placeholder-recipe.json) records the final values and native follow-up.

Carousel settings: slide transition300ms, one slide per advance, equal height, autoplay=false, loop=false, arrows enabled, pagination none. Native drag/swipe and focus behavior are retained. Claude's V2.1 critique was reviewed; only portfolio consistency/caption grouping was applied. Its unrelated Hero, heading and menu proposals were excluded.

## Targeted verification

Fresh saved authenticated preview checked in desktop Chrome emulation at1440/1024/768/390/320px. [Measurements](verification/2026-11-17-portfolio-responsive.json) show zero page horizontal overflow, identical heading/first-card left positions and track ending at the viewport edge. Card widths480/400/400/320/256px; placeholders300/250/250/200/160px high, preserving16:10. Desktop and mobile section captures were visually reviewed; navigation stays inside the viewport.

Next-button activation and keyboard Enter advance the track. Keyboard focus has a visible black2px outline. Emulated touch swipe advanced the native track from -336px to -672px. Mouse drag moved the track; a later browser interaction timed out, so the complete end-stop sequence was not certified. All five exact link hrefs and target=_blank were read from the saved preview; destinations were not recrawled. Selected Work has zero img elements.

Evidence: [desktop1440](verification/2026-11-17-portfolio-placeholder-1440.jpg), [mobile390](verification/2026-11-17-portfolio-placeholder-390.jpg). Captures contain only the frontend section, with no admin toolbar, credentials or authenticated preview URL.

Limits: browser emulation only; physical touch/trackpad, native horizontal wheel, screen readers and carousel reduced-motion handling were not independently verified. No scrolling video was produced. No whole-site regression or image-quality audit was run. Existing Coming Soon was left untouched; this pass did not repeat its anonymous HTTP test. Real images and public launch await owner review.

Branch `prototype/horizontal-portfolio-placeholders-2026-11-17` stacks on PR10's `implementation/homepage-v2-review-2026-11-17` branch, preserving the PR10 → PR9 → PR8 dependency chain. GitHub stores the recipe and sanitized evidence; merging a documentation PR does not deploy Elementor. No PR was merged.

## Owner-reported arrow state defect — follow-up 2026-11-17

**Confirmed root cause:** native Elementor `.e-carousel-arrow-prev-base:focus` / next equivalent and `:hover` set arrow color to rgba(238,238,238,.9) on transparent. These state selectors have greater specificity than the prototype's normal local black color. After a pointer click, native browser focus correctly remains on the button; :focus therefore keeps the arrow almost white after mouse leave. This was a styling/cascade defect, not a stuck :active state or failed carousel click. The before evidence records focus=true, focus-visible=false, hover=false, active=false with the near-white color.

**Exact fix:** attach one narrow native Global Class `rb-btn--carousel` (`g-85ea9ae`) to Home5894 previous arrow `a01fd95` and next arrow `ac514e2`, retaining rb-btn / rb-btn--outline / rb-btn--sm. Normal :focus uses existing rb-ink on transparent; native hover uses paper on ink; active uses paper on rb-hover. Elementor maps native hover styling to focus-visible as well; the existing2px black keyboard outline remains. Native aria-disabled=true overrides all visual interaction states with black/transparent, opacity.35 and not-allowed cursor. This carousel uses aria-disabled and e--disabled, not the HTML disabled property; reading button.disabled alone gives a false result.

Touch QA also reproduced Chromium's sticky :hover after tap, separate from focus retention. A hover:none media condition resets only hover:not(:focus-visible):not(:active) to ink/transparent. Keyboard focus appearance and pressed feedback remain intact. Native-state styling and the two conditional rules live together in this single Atomic modifier; no widget CSS duplication, foundation-class change, theme CSS, JavaScript or blur handler. Exact saved class input is in the updated recipe. The connector discarded a top-level hover:none media block; nesting it inside the class's conditional selector preserved it in generated CSS. Emulation resets on reload, so hover:none/coarse pointer was explicitly re-enabled and read back before the final touch check.

Saved through native Save Draft; fresh preview confirmed both class attachments. Only the two arrows consume the new modifier. Draft6040 is the earlier authoring reference and predates this follow-up. No Home publication, maintenance switch, protected-section edit or PR merge occurred.

### Actual interaction results

Chrome desktop1440×900 and mobile390×1100 (the taller mobile viewport keeps the authenticated SiteGround assistant away from controls):

| Cycle | Observed result |
| --- | --- |
| Default → hover → press → release → leave, desktop and mobile with pointer | Black/transparent → white/black → white/#333 → hover appearance → black/transparent. Active=false after release. Pointer-only focus remains without the pale arrow. |
| Tab → focus → Enter and Space, desktop and mobile | Native track advances; focus and focus-visible remain on the control; black2px outline stays visible. Keyboard focus styling may correctly remain after a later pointer click on that same focused control. |
| Disabled → enabled → disabled | Previous: disabled at start, enabled after advancing, disabled on return. Next: enabled at start, disabled at end, re-enabled by previous, disabled on advancing again. Both use opacity.35 and retain the same black/transparent colors under hover/press. Disabled activation does not advance the track. |
| Touch tap → release, coarse pointer / hover:none | Tap advances the track. Chromium may retain hover=true, but the final settled appearance returns to black/transparent with active=false and focus-visible=false. No blur was used. |
| Eight rapid clicks in each direction, desktop and mobile | Native track reaches its boundary without looping. Disabled/enabled states update correctly. After settling, desktop transforms were0 and -1184px; mobile keyboard/touch advances were -336/-672/-1008px. No pressed or inappropriate hover appearance remains. |

[Computed-state evidence](verification/2026-11-17-carousel-states.json) includes the initial pale-focus failure, pointer cycles, keyboard retention, boundary states, the intermediate sticky-touch reproduction and the final coarse-pointer fix. Transform samples during animation are explicitly intermediate; settled samples are separately labeled. Initial samples taken while the admin-only assistant obscured a control were excluded and rerun after dismissing that panel. No assistant configuration was changed.

Sanitized visual evidence: [desktop controls after pointer click and leave](verification/2026-11-17-carousel-states-desktop.jpg), [mobile layout and controls](verification/2026-11-17-carousel-states-mobile.jpg). Computed state records are the evidence for transient focus/active states; still captures are layout/context evidence. No admin toolbar or personal data is included.

The previous complete-end-stop verification gap is resolved for the controls. Limits remain: browser emulation rather than physical devices, no Safari/Firefox or screen-reader certification, no horizontal-wheel or reduced-motion certification. This follow-up tested the affected carousel only. The owner-required complete interaction cycle is now recorded in AGENTS.md for future interactive changes.

## Mobile Menu alignment — owner correction 2026-11-17

Owner explicitly requested fixing the misplaced mobile Menu. Its native div-block button occupied238px of remaining header width at390px and centered its76.6px contents, putting the label/icon far from the right gutter. Updated existing Global Class rb-header__toggle/g-ca8e57d at the mobile breakpoint only: width:fit-content; flex:0 0 auto; margin-inline-start:auto. No new class, script, component, local CSS duplicate, homepage Publish or maintenance operation.

Menu now occupies76.6px and ends exactly at the existing container's right edge at320/390px; no page overflow. Desktop1440 keeps the toggle hidden. The actual shared consumer, Popup5996's Close link, was inspected and remains right-aligned with48px height. Pointer hover/press/release/leave, Enter/Space opening, Escape closing with focus return and2px outline, touch tap/release and six rapid presses were exercised. Rapid presses produced no duplicate popup; a subsequent tap reopened normally. Disabled transitions are not applicable to Menu/Close. Native open/close animations are allowed to settle between distinct checks; existing anchor auto-close limitation remains.

The carousel's two48px arrows are present and display:flex at320 and390px, below the cards. No images were added: gray placeholders remain per the owner's earlier explicit instruction. The owner's unclear mobile-visibility phrase was sent for clarification; no speculative gallery redesign was made.

[Mobile header screenshot](verification/2026-11-17-mobile-header-right-alignment.jpg), [measurements and interaction record](verification/2026-11-17-mobile-header-alignment.json). Browser emulation only; no whole-site audit. The recipe records the exact shared-class patch and its two actual consumers.
