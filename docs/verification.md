# Verification and completed-task record

Do not interpret saved configuration as rendered verification, or a historical check as a fresh test. Every significant task should add a dated entry with collaborator, scope/status, files or WordPress IDs, actual checks, evidence and unresolved issues.

## 2026-11-16 — Existing foundation / typography evidence

Source: prior ChatGPT Work/Codex implementation records and read-only visual handoff inspection from the ROBYLO conversation. The handoff ZIP was delivered to Claude outside GitHub. The ZIP, screenshots, typography PDF and raw measurements are not committed here, so these historical results are reported evidence rather than independently reproducible repository tests.

- **Implemented:** existing native Manrope variables/defaults/classes, reusable components and base templates described in [current-implementation.md](current-implementation.md).
- **Previously verified:** authenticated homepage, Styleguide and Atomic Lab at 1440, 1024, 768, 390 and 320px; no horizontal overflow was reported at those widths.
- **Previously verified:** real locally served Manrope loaded; rendered 400/600/700 weights checked. Navigation 500 is configured but no finished active navigation exists.
- **Previously verified:** primary button hover #333333 and visible keyboard-focus ring.
- **Previously verified:** anonymous Coming Soon returned the public page at all five widths, without reported horizontal overflow.
- **Visual handoff:** ten actual desktop/mobile captures: full homepage, active Header, active Footer, Atomic Lab and Styleguide. Reference viewports 1440 and 390 CSS px; image width may exclude scrollbar. Some captures retain an editor assistant overlay, not part of the public design.
- **Not verified:** the new full hero headline on a built homepage, a rendered homepage H4/final navigation, complete accessibility/performance audit, client case-study claims, child-theme runtime deployment or fresh-install Elementor import.
- **Known differences:** provisional header text brand; square buttons (rb-radius 0); legacy Coming Soon wordmark family exception; older Lab experiments with non-approved weights/default styling.

Do not cite these checks as results for Claude's future design. Recheck the actual approved implementation and record new screenshots/results when that implementation is authorized.

## 2026-11-16 — Shared GitHub collaboration documentation

Collaborator: ChatGPT/Codex. Scope: documentation only, under the owner's explicit authorization to commit and push to main.

- Read the existing README, AGENTS, AI-CONTEXT, business concept, Elementor/setup documentation, ignore rules and both child-theme source files.
- Confirmed the connected GitHub identity has repository push permission; main was unprotected at inspection. This confirms this connection only, not every future collaborator/session.
- Updated README, AGENTS, AI-CONTEXT, docs/elementor.md and docs/setup.md; added docs/current-implementation.md, docs/decisions.md and this record.
- Documented actual source-installation state from the existing handoff/evidence; preserved historical starter notes and business concept. No WordPress operation, code change, homepage implementation or deployment is part of this task.
- **Verified (documentation):** reviewed proposed file contents/diff, checked relative Markdown links against the repository file inventory, and confirmed only eight Markdown files are changed. Source, ignore rules and business concept remain untouched. Re-read main before publication; use an expected-head, non-forced update to preserve concurrent work. The resulting Git commit records the exact changes; publication confirmation belongs to the final GitHub execution report.
- Remaining limitations: each collaborator needs its own authorized GitHub connection; WordPress access is separate; there is no automatic synchronization/deployment, committed visual handoff, native Elementor export or fresh-target import verification. Installed-version compatibility remains to be recorded.

## 2026-11-16 — Homepage design proposal and design history

Collaborator: Claude. Scope: design documentation and mockup images only, under the owner's request to save the homepage design work and its iterations to GitHub.

- Status: **Proposed**. Not approved, not implemented. No WordPress operation; Claude has no WordPress access.
- Added docs/design-homepage-handoff-2026-11-16.md, docs/design-log.md and ten images in docs/design/ (two current-proposal mockups, eight exploration captures). Updated docs/decisions.md (homepage row, radius row, one new row for proposed foundation changes), AI-CONTEXT.md (pointer to the proposal) and this record.
- Read before editing: README, AGENTS, AI-CONTEXT, decisions, current-implementation and this file at main c810f2c.
- **Checks run:** the two proposal mockups were rendered in headless Chrome at 1440 and 390 CSS px with locally installed Manrope 400–700; document scroll width equaled the viewport at both widths; full-page captures were reviewed visually. Relative Markdown links in the new and changed files were checked against the repository file list.
- **Not verified:** any Elementor build, real-device rendering, accessibility or performance. Mockup values follow docs/current-implementation.md, not a fresh site inspection.
- Images: the proposal mockups include a capture of the public chicagomounting.com homepage (2026-11-16) and bracketed placeholders. No credentials, admin screens or private data. Client permission to feature the case publicly is still an open item.
- Delivery: task branch design/homepage-proposal-2026-11-16 with a pull request to main.
- Remaining / next owner: owner review of the proposal and of the five foundation changes; content items listed in the handoff, section 5.

## Future entry template

- Date / collaborator / task:
- Scope and approval source:
- Status: Proposed / Approved / Implemented / Verified (state each separately):
- Changed files or WordPress IDs:
- Checks actually run, environment and viewport widths:
- Evidence: commit/PR and sanitized screenshots or reports:
- Remaining issues / next owner:

## 2026-11-16 — Base Section background demonstration

Collaborator: ChatGPT/Codex via Elementor MCP. Owner authorized this incremental test. **Implemented and verified; visual approval pending.** Three instances of component 5869 in Lab 5776; two new global modifiers, existing rb-section paragraph-link patch; no new component, variable, homepage or template change.

[Implementation record and actual screenshots](section-backgrounds-2026-11-16.md) include exact classes, instance IDs, scoped CSS limitation and rollback. Checked rendered layout at 1440/1024/768/390/320; no horizontal overflow. Manrope and H2/body proportions preserved. Keyboard focus and real pointer hover checked at 1440/768/390. Anonymous HTTP 200 still shows Coming Soon. Saved group, component definition and unchanged variable inventory read back. Browser emulation only; no physical-device or complete accessibility audit. Other homepage work is gated on owner review.

## 2026-11-16 — Homepage V2 design proposal

Collaborator: Claude. Scope: design artifacts and documentation only, under the owner's "Premium Homepage Design Challenge" brief (design branch, pull request, no merge).

- Status: **Proposed**. Not approved, not implemented. No WordPress or Elementor operation.
- Added docs/design-homepage-v2-handoff-2026-11-16.md, four mockup images and the mockup source folder in docs/design/. Updated docs/design-log.md, docs/decisions.md (two Proposed rows) and this record. AI-CONTEXT.md was left unchanged to avoid conflicts with open PRs #3–#7; its pointer to the first proposal is now one iteration behind.
- Read before editing: README, AGENTS, AI-CONTEXT, decisions, design log, first handoff, current-implementation, elementor, section-backgrounds and this file at main 0a3d8f8; PRs #3–#7 and the V1 screenshots in PR #7.
- **Checks run:** mockup rendered in headless Chrome at 1440×900 and 390×844 (device scale 2) with Manrope loaded; document scroll width equaled the viewport at both widths; full-page captures reviewed visually. Relative links in the new and changed Markdown files checked against the file list.
- **Not verified:** any Elementor build, tablet or 320px rendering, real devices, accessibility tooling, performance, the mobile menu's native implementation path.
- Images: captures of the five public client homepages taken 2026-11-16 (one also at phone width). No credentials, admin screens or private data. The two logo files in the source folder were rebuilt from a screenshot of the public 300×80 PNG for mockup use only and must not be used in production.
- Delivery: branch design/homepage-v2-2026-11-16 with a pull request to main.
- Remaining / next owner: owner review; open decisions listed in the V2 handoff, section 8.



## 2026-11-17 — Homepage V2 private preview

Implemented and compared against Claude's V2 source and desktop/mobile/menu screenshots. Rendered width checks: 1440,1024,768,390,320; no page horizontal overflow, no missing project images, one H1, Manrope loaded. Actual desktop/mobile screenshots, keyboard/hover checks, live-link HTTP checks and limitations are in [the implementation record](homepage-v2-implementation-2026-11-17.md). Public root remains Coming Soon 5858 (HTTP 200). Lab, Styleguide and Coming Soon lean element trees match pre-task snapshots. Native Popup Enter/Escape/focus-return pass; section-anchor auto-close does not. Owner visual review and launch authorization remain pending.

## 2026-11-17 — V2 continuation: Hero-only Glide and keyboard skip target

ChatGPT/Codex continued the owner's selected newer V2 from PR9 without rebuilding or launching Home5894. Native Save Draft persisted two local changes: detach Contact's Glide opt-in and give Main1117679b native ID content/tabindex=-1. Five requested widths passed overflow/image/font/action-height checks; keyboard focus/skip, Work navigation, menu Enter/Escape and reduced motion were checked. Full desktop/mobile screenshots and sanitized HTTP/interaction records are committed. Anonymous root remains Coming Soon5858; five portfolio destinations return200. No new classes, tokens, components, CSS, JS, dependencies or protected-document edits. Existing menu anchor auto-close, physical-device and screen-reader limitations remain. [Current implementation and exact evidence](homepage-v2-implementation-2026-11-17.md#owner-selected-v2-continuation--2026-11-17). Branch stacks on PR9; no merge or public publication.

## 2026-11-17 — Horizontal portfolio placeholder prototype

ChatGPT/Codex implemented the owner's Selected Work-only experiment in staged Home5894, section58c9fc4/#work, using native Atomic carousel and five equal gray16:10 placeholders. Save Draft only. Existing project text/URLs preserved; no new media or custom code. Responsive alignment/overflow passed1440/1024/768/390/320; button, Enter, focus and emulated swipe checked. [Exact elements, native classes, screenshots, recipe and verification limits](horizontal-portfolio-prototype-2026-11-17.md). Owner visual approval pending; no launch or PR merge.

Owner-reported arrow-state follow-up: confirmed native hover/focus specificity over normal color and browser-retained pointer focus. Added scoped native modifier rb-btn--carousel to arrows a01fd95/ac514e2; preserves existing keyboard ring, handles native aria-disabled, and suppresses sticky touch hover only on hover:none. Complete pointer, keyboard Enter/Space, boundary, emulated tap/release and rapid-click cycles checked on desktop1440 and mobile390. [Root cause, exact saved fix, actual results and evidence](horizontal-portfolio-prototype-2026-11-17.md#owner-reported-arrow-state-defect--follow-up-2026-11-17). Updated recipe and AGENTS interaction-QA requirement. Save Draft only; PR11 updated without merge/publication.

Subsequent owner-requested mobile-header correction: existing rb-header__toggle mobile width/flex/margin now aligns Menu contents to the right gutter. Actual shared Close consumer checked;320/390 alignment and1440 hidden state verified, with pointer/keyboard/touch/rapid interaction checks. [Fix and evidence](horizontal-portfolio-prototype-2026-11-17.md#mobile-menu-alignment--owner-correction-2026-11-17). No homepage publication or maintenance change.

Later owner clarification supersedes draft-only delivery: promote current Home5894 for normal logged-in root, keep anonymous Coming Soon active. Native Publish completed; confirmed and purged stale Cloudflare CSS after an approved single Elementor clear and SiteGround purge. Actual root now has right-aligned mobile Menu and horizontal carousel; complete arrow interaction cycle rerun there. Anonymous mobile-UA HTTP200 still returns Coming Soon5858. [Current delivery, cache findings and actual-root evidence](horizontal-portfolio-prototype-2026-11-17.md#current-delivery-logged-in-root-behind-coming-soon--2026-11-17).

Owner's continuing phone Menu report: replaced Header5886 div-block trigger1193db17 with intrinsic native e-button344e021f, preserving existing global class and Popup selector. No new styles or script. Actual-root320/390/430 alignment,1440 hidden state, complete pointer/keyboard/touch/rapid cycles verified; anonymous Coming Soon200 retained. [Exact change, measured QA and phone-verification limit](horizontal-portfolio-prototype-2026-11-17.md#native-menu-button-replacement--2026-11-17).

Owner clarified stacked phone portfolio cards. Disabled SiteGround's Remove Query Strings from Static Resources; actual root now includes native Elementor asset revision parameters.390px row geometry and a settled -336px touch advance were verified. Owner confirmed horizontal scrolling on the physical phone and also cleared its cache. No further layout/code change. [Exact setting, URLs, results and confirmation limits](horizontal-portfolio-prototype-2026-11-17.md#phone-confirmed-carousel-recovery-and-asset-versions--2026-11-17).


## 2026-11-18 — Compact portfolio cards and consistent native chevrons

Owner-authorized Selected Work-only refinement, informed by the supplied Apple typography reference. Existing five native slides/placeholders preserved; title26/24/22px/600 and description15px/400 shared roles, image/caption gap16/12px, View project labels with unchanged external destinations. Same48px controls/handlers retain states; text glyphs replaced by matching18px native Font Awesome chevrons. All1440/1024/768/390/320 widths checked, no page horizontal overflow; mobile next-card glimpse34/28px. Complete desktop/mobile pointer cycle, Enter/Space and retained2px focus, both disabled boundaries, eight rapid clicks each direction, coarse tap/release and direct swipe0→-336px verified. [Exact settings, before/after images, QA and limitations](horizontal-portfolio-prototype-2026-11-17.md#compact-cards-and-consistent-chevrons--owner-refinement-2026-11-18). Home remains staged; no Publish, PR merge, custom CSS or new JavaScript. Anonymous root200 still serves Coming Soon5858. Updated existing PR11 branch in place; previous records preserved.

## Homepage global visual refinement — 2026-11-18
Implemented in WordPress and promoted to the existing published Homepage5894 **after the owner explicitly requested publication to review it**. Coming Soon remains active: anonymous GET / returned HTTP200 with Elementor5858 and Coming Soon copy, without Homepage5894. No PR merged.

Existing shared classes patched (no classes, variables, dependencies or custom CSS added):
- rb-display-xl g-9858763: 76/56/36px, existing weight700 and line heights retained; tracking -3.04/-2.24/-1.26px.
- rb-section-title g-b881735:44/36/30px,700; rb-item-title g-11b543f:24/22/20px,600.
- rb-grid-aside g-b352eba:16px, mobile15px, LH1.6; rb-hero__subtitle g-efbc920:18px, mobile16px, LH1.55.
- rb-meta g-d97ed86:mobile14px; existing higher-priority portfolio description class retains12px.
- rb-nav-link g-403d4fb:14px, mobile minimum44px; rb-header__toggle g-ca8e57d:mobile14px; rb-menu-row g-f570396:32px with18px vertical padding.
- rb-action-row g-c3579fd:32px top/gap24 desktop,24px top/gap8 mobile. Existing button states, geometry and Glide mechanism unchanged.

Home native section padding reduced: Hero56/80px desktop,40/64 tablet,32/48 mobile; Services and Approach80px desktop,64 tablet,48 mobile. Contact96/80 desktop,80/64 tablet,56/48 mobile. Work retains native full-bleed grid and zero inline padding; vertical rhythm uses existing section variable where inherited. Hero strip margin56/40/32px, mobile Hero/Contact lead margin16px. Removed double heading/carousel spacing by changing carousel top margin40→0px.
Existing components6010 section heading margin64→40 desktop and40→28 mobile;6013 service row vertical padding40→32 desktop and28→24 mobile;6019 Approach title margins24/12 desktop and16/8 mobile, description reuses rb-meta instead of unclassified18px default. Components promoted in place. Header/Footer document structure and logo assets untouched; shared navigation/meta refinements apply to their consumers.

Native AST audit: Home110→110 nodes, SectionHead3→3, ServiceRow19→19, Approach4→4. IDs, element types, tags and child order unchanged; no copy, links or interactions replaced. Only expected style fields and Approach description's existing-class attachment changed.
Services list25445844 is e-list/ul. Direct e-list-item/li IDs4cfeab36,4388f2f4,32b3b331 each retain marker→content order. Marker/content pairs b6c3d70/276177d1,7c1decb8/5127be1f,71d29fed/31d170f7 retain divider/hr and paragraph/p children. No repair was required. Browser DOM at all five widths has four ULs, three LI children each, marker then content.

Actual browser checks: all five widths load Manrope and show zero document horizontal overflow. Display/H2/service H3 respectively76/44/24 at1440;56/36/22 at1024 and768;36/30/20 at390 and320. Portfolio mobile20/12 retained. Full-page390 capture reduced from5241px to4359px (~17%);320 after4653px. Native next-card glimpse and full-width Work composition preserved.
Carousel pointer390: hover black/white; press gray/white active; release clears active; pointer leave returns transparent/black while focus remains. Enter and Space advance/reverse; keyboard focus-visible2px retained. Repeated reverse reaches disabled first boundary with opacity.35. Native touch swipe advances runtime track from -336 to -672px and clears active state. Desktop click/Enter/Space also retain navigation/focus. Native Menu Enter and Space open; Close/Escape work and return visible focus. Temporary touch/media/viewport overrides reset.
Remaining QA limitation: exhaustive rapid-cycle testing of every non-carousel action and all consumer authoring documents was not repeated in this pass. Known existing native Popup limitation remains: anchor navigation does not automatically close the popup; Close/Escape are available. No JavaScript workaround added. Five portfolio images remain intentionally neutral placeholders.

Screenshots: [before390](screenshots/visual-discipline-2026-11-18/before-390.jpg), [after390](screenshots/visual-discipline-2026-11-18/after-390.jpg), [after1440](screenshots/visual-discipline-2026-11-18/after-1440.jpg).
Review actual page while logged in: https://robylo.com/ or https://robylo.com/?preview_id=5894&preview=true.
Component editors: [SectionHead6010](https://robylo.com/wp-admin/post.php?post=6010&action=elementor), [ServiceRow6013](https://robylo.com/wp-admin/post.php?post=6013&action=elementor), [Approach6019](https://robylo.com/wp-admin/post.php?post=6019&action=elementor).
These are native database changes; this documentation and screenshots are not a portable Elementor export.

## 2026-11-18 — Impact section concepts (design only)

Collaborator: Claude. Scope: three design concepts for the section below the Hero, desktop and mobile mockups, evaluation and recommendation. Status **Proposed**.

- Added docs/design-impact-section-concepts-2026-11-18.md, six mockup PNGs and the source folder docs/design/2026-11-18-impact-source/. Updated docs/design-log.md, docs/decisions.md and this file.
- Branch design/impact-section-concepts-2026-11-18 from prototype/horizontal-portfolio-placeholders-2026-11-17 at 4bfa4ce, so the design log continues from the newest records; PR targets that branch, matching the existing stacked-PR chain. No PR merged, no WordPress or Elementor operation, no website change.
- **Checks run:** headless Chrome renders at 1440×900 and 390×844 (2×) with Manrope loaded; scroll width equals viewport for all six; visual review of full-page captures; Markdown links checked.
- **Not verified:** 1024/768/320 renders, Elementor feasibility beyond documented native capabilities, real devices, assistive technology.
- Images: public chicagomounting.com captures (homepage 2026-11-16, services page 2026-11-18). No admin screens, credentials or private data. All results, metrics, dates and the client's starting point are marked placeholders; no client data was invented.

## 2026-11-18 — Big Picture refinement (design only)

Collaborator: Claude. Added docs/design-big-picture-refinement-2026-11-18.md, desktop and mobile mockups and source folder; design-log entry. Status **Proposed**; no WordPress change. Checks: headless Chrome renders at 1440 and 390 (2×), scroll width equals viewport. Not verified: Elementor, 1024/768/320, devices.


## 2026-11-18 — Portfolio visual presentation research (research only)

Collaborator: Claude. Added docs/design-portfolio-presentation-research-2026-11-18.md; design-log and decisions entries. Status **Proposed**. Evidence: 8 studio work pages opened in a cloud browser at 1440px on 2026-11-18; Ueno, Koto and BASIC/DEPT excluded (offline/404). Not verified: plate mockup renders, Atomic V4 per-breakpoint object-position support, captures of the five client sites. No WordPress, Elementor or website change; no PR opened.

## 2026-11-18 — Studio Plate prototype, Chicago Mounting (design only)

Collaborator: Claude. Added docs/design-studio-plate-chicago-mounting-2026-11-18.md and docs/design/2026-11-18-studio-plate-chicago-mounting/ (plate WebP 1600 and 800, two carousel previews, source PNG, captures, HTML and render scripts); design-log and decisions entries. Status **Proposed**.

- Captures: public chicagomounting.com homepage, 2026-11-18, cloud Chrome. Desktop 1440 × 992 viewport, two captures stitched (seam checked visually); mobile 500 × 992 viewport (site's mobile breakpoint). No admin screens, credentials or private data.
- **Checks run:** headless Chrome plate render 1600 × 1200 at 1×; carousel previews at 1440 × 900 and 390 × 844 at 2× with Manrope loaded, scrollWidth equals viewport at both; card image measured 560 × 420 and 332 × 442; visual review of plate, both previews and the 3:4 crop; committed source scripts re-run from a clean copy and reproduced the plate with zero pixel difference; WebP weights 80 KB / 34 KB.
- **Not verified:** a true 390 px capture (cloud browser minimum width is 500), real devices, tablet widths, Elementor Atomic V4 per-breakpoint aspect ratio and object-position.
- No WordPress, Elementor or website change. No PR merged.

## 2026-11-18 — Studio Plate v3, Chicago Mounting (design artifacts only)

Collaborator: ChatGPT/Codex. **Approved scope:** owner's explicit v3 visual-refinement request. **Implemented:** new artifacts under `docs/design/2026-11-18-studio-plate-chicago-mounting/v3/`, existing prototype document/design log/decision log/this record updated. **Verified:** local renders. **Proposed:** visual design, awaiting owner approval. Base: Claude source branch `design/impact-section-concepts-2026-11-18` at `2eb03bd29b6d72b68545dca4d355dbc5b579c95a`; isolated branch `design/studio-plate-v3-2026-11-18`.

- Complete thin phone silhouette, speaker/camera, visible bottom, overlap and neutral mat. A portrait composition preserves the complete desktop width on mobile; pricing start stays visible on the phone, while the overlap covers part of desktop pricing. Source screenshots are reused unchanged; the original phone capture is 480px wide, not newly recaptured at390.
- **Actual checks:** local headless Chrome157.0.8103.52 on Windows; 1600×1200 and 1000×1250 plates at1×, 1440/1024/768/390/320 carousel renders at2×. All five passed overflow, decoded images, Manrope loading, responsive source selection, zero failed requests/page errors. Opened and visually reviewed master PNG/WebP, compressed portrait/small WebP, all five previews and comparisons. Repeated rendering reproduced all plate PNG/WebP exports byte-for-byte. Chrome rasterization of the 390px preview image varied between runs; preview byte identity is not claimed. JavaScript syntax and local document links checked; original v2 assets match Git objects. No packages installed.
- **Evidence:** [specification and files](design-studio-plate-chicago-mounting-2026-11-18.md#studio-plate-v3--visual-refinement-2026-11-18), [render report](design/2026-11-18-studio-plate-chicago-mounting/v3/render-report.json), [desktop](design/2026-11-18-studio-plate-chicago-mounting/v3/carousel-v3-desktop-1440.png), [mobile](design/2026-11-18-studio-plate-chicago-mounting/v3/carousel-v3-mobile-390.png), [side-by-side](design/2026-11-18-studio-plate-chicago-mounting/v3/comparison-v2-v3-mobile.png). WebPq90: master103,804bytes, portrait78,628bytes, small44,284bytes.
- No theme/PHP changes; PHP is unavailable locally, so PHP syntax validation was not run. No WordPress, Elementor, live-site or existing carousel change; no other client images created; original v2 sources/assets preserved. Static inherited preview controls are not functional carousel implementation; no interaction changes or interaction-test claims.
- **Remaining:** owner visual approval, physical-device review, possible future native art-direction feasibility work and final reusable production guidance. No merge or production rollout.
