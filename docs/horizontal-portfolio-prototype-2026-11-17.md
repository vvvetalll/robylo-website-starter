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
