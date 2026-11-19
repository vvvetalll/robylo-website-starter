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


## All five Studio Plates — 2026-11-18

Collaborator: ChatGPT/Codex. **Approved:** owner explicitly confirmed Chicago v3 visually approved and requested the remaining four real-site plates, integration, testing, production guidelines and GitHub delivery. This supersedes the earlier single-card restriction for this task only. **Implemented:** Home5894 Work58c9fc4 / native carousel063712a, four existing media wrappers; Chicago card unchanged. **Verified:** actual authenticated root in Chrome at1440/1024/768/390/320. Coming Soon remains the anonymous public response; no launch or merge.

Genuine captures and PNG/WebP exports: [all-four sources/assets](design/2026-11-18-portfolio-studio-plates/), [desktop contact sheet](design/2026-11-18-portfolio-studio-plates/all-five-desktop-plates.png), [portrait contact sheet](design/2026-11-18-portfolio-studio-plates/all-five-mobile-plates.png). Existing v2 and approved Chicago v3 are unchanged. Batch adapter reuses the exact v3 HTML; no new dependency, theme code, custom site CSS/JS, global token or component was added.

Native paired e-image widgets switch display at767/768; media wrappers use4:3 desktop,4:5 mobile with zero padding. Card widths, caption typography, links, gaps and controls are preserved. Final Media Library IDs: Chicago6145/6146; GCPRO6167/6168; Kolo6169/6170; Dental6171/6172; Elite6173/6174. Earlier6150–6157 are superseded capture iterations, retained for recovery. [Exact IDs, URLs and unchanged-tree check](verification/2026-11-18-studio-plate-v3/implementation.json). Final tree differs outside the four media wrappers only in document staged=false; Chicago card is identical to the pre-expansion tree. The earlier single-card step changed only Chicago's media wrapper and published behind the gate.

All five visible image variants decode at every tested width. Desktop media480×360 at1440 and400×300 at1024/768; portrait320×400 at390 and256×320 at320. Names/descriptions/links remain intact. Visually reviewed all five real cards at all five widths, complete phone outlines and compressed exports. No horizontal page overflow. Navigation-state document heights remain3943/4027/4235/5093/5301px respectively; this is a scoped layout-stability check, not a measured cold-load CLS score.

Actual controls: default→hover→press→release→leave on1440/390, Tab→visible focus→Enter/Space→retained focus, previous/next disabled boundaries, rapid forward/reverse clicks; native touch tap/release and swipe at390; all five View project links actually opened their expected sites. No blur workaround. An admin-only SiteGround helper intercepted an initial input attempt; it was excluded temporarily and successful checks repeated. During final visual review a pointer artifact revealed superseded uploads, so only four image pairs were reassigned to clean exports and the five-width image/navigation pass repeated. Earlier interaction checks remain applicable because the correction changed image IDs only.

The initial Chicago step required one owner-approved Elementor generated-files clear and one SiteGround purge because published local CSS was stale. No further cache purge. Subsequent native editor Publish correctly compiled responsive styles. Native settings alone were not accepted as visual verification.

Evidence: [actual desktop](verification/2026-11-18-studio-plate-v3/homepage-1440-first.jpg), [actual mobile](verification/2026-11-18-studio-plate-v3/homepage-390-first.jpg), [all five actual desktop card crops](verification/2026-11-18-studio-plate-v3/all-five-live-cards-1440.png), [all five mobile card crops](verification/2026-11-18-studio-plate-v3/all-five-live-cards-390.png), [measurements/interactions/links](verification/2026-11-18-studio-plate-v3/checks.json). Contact strips join actual crops from successive carousel positions; they are not a changed five-column layout. Source/public evidence excludes admin bars, private data and signed preview URLs.

[Reusable production guidelines](portfolio-image-guidelines.md). Review while logged in: [homepage](https://robylo.com/#work) or [native editor](https://robylo.com/wp-admin/post.php?post=5894&action=elementor). Limitations: Chrome responsive/touch emulation only; no physical-device, Safari, Firefox or screen-reader test. No PHP changes; PHP is unavailable locally, so PHP lint was not run. No complete portable native export or fresh-target import validation is claimed.


## 2026-11-18 — Quickzy Cleaning and Selected Work copy

**Approved:** owner requested a sixth card and count-free copy. **Implemented:** Home 5894, Work 58c9fc4, carousel 063712a. Native slide 79928cc9 is appended after Elite Mechanical Services and uses Media Library attachments 6179 and 6180. The existing Section Head component 6010 is used under the original wrapper with instance 5602cb and the requested heading and paragraph overrides. The direct connector update did not render the overrides, so only that page-local instance was replaced. Published tree comparison confirmed the first five cards, their order, the carousel and all unrelated elements matched the baseline. The published page tree contained no remaining reference to exactly five projects.

The Quickzy site confirms the description “Professional cleaning services.” Captured at desktop viewport 1440 × 992 (1425 × 1854 PNG content crop) and mobile 480 × 1100 at 1× in Chrome. The existing renderer produced 1600 × 1200 and 1000 × 1250 Studio Plate v3 WebPs, plus lossless masters and the 800 × 600 desktop derivative. Only the Quickzy render was regenerated. [Asset sources and exports](design/2026-11-18-portfolio-studio-plates/) · [Capture record](verification/2026-11-18-quickzy/capture.json) · [Render report](design/2026-11-18-portfolio-studio-plates/quickzy-cleaning-render-report.json) · [Elementor IDs](verification/2026-11-18-quickzy/implementation.json).

**Verified:** actual authenticated homepage at 1440, 1024, 768, 390 and 320 px in Chrome. Visually reviewed all six cards at each width. One matching desktop or mobile composition per card, complete phone silhouettes, no horizontal page overflow and stable document height across slide positions. All six View project links opened their expected sites. Verified previous/next boundaries, hover, press, release and leave, rapid forward/reverse clicks, Tab and retained visible focus with Enter/Space at 1440/390, and an emulated swipe plus tap/release at 390. Temporarily excluded the admin-only helper in the test browser. Anonymous HTTP 200 continued to show Coming Soon document 5858. Safari, physical devices, screen readers and cold-load CLS were outside this verification. PHP was unchanged and PHP lint was unavailable locally.

[Actual desktop with Quickzy](verification/2026-11-18-quickzy/homepage-1440-quickzy.jpg) · [Actual mobile with Quickzy](verification/2026-11-18-quickzy/homepage-390-quickzy.jpg) · [All six card crops at 390](verification/2026-11-18-quickzy/six-cards-390.jpg) · [Viewport checks](verification/2026-11-18-quickzy/checks.json) · [Interactions](verification/2026-11-18-quickzy/interaction-checks.json) · [Opened links](verification/2026-11-18-quickzy/link-checks.json).


## 2026-11-18 — Approved homepage copy and Chicago positioning
Contributor: ChatGPT/Codex. **Approved scope:** owner-supplied “Implement Approved Homepage Copy” brief. **Implemented / visually verified in Chrome.** Final exact copy and positioning are preserved in [ROBYLO-CONCEPT.md](ROBYLO-CONCEPT.md#approved-homepage-positioning-and-final-copy--2026-11-18). Primary market Chicago and surrounding suburbs, Illinois; independent studio/direct implementer relationship. Claude's copy analysis was read on design/impact-section-concepts-2026-11-18; the owner's supplied copy takes precedence where different.

### Exact native changes
Home5894 updated13 existing content instances only:
- 67f04a14 Hero paragraph;32319aa0 Big Picture paragraph.
- 56ee3694 Services heading/intro overrides of6010: “Four areas of expertise. One point of contact.” and approved introduction.
- 5602cb Work intro override of6010; existing “Selected work. Recent projects.” preserved.
- 2d9754ca Approach intro override of6010;766cb141 After launch paragraph override of6019.
- 1026ad5a Contact paragraph.
- Six existing5864 link instances6763114/3b1d6f1/5729e9f/bc72877/5937a59/5b5589c4: text “View project”→“Visit site”; existing URLs/target settings untouched.
- Active Footer5893 instance374a8b64: existing5889 message property overridden with approved tagline. Reusable component5889 origin, logo, location, navigation and copyright preserved.
- Existing AIOSEO ability updated only Home5894 title/description. Exact title/description verified in stored SEO data and rendered HTML: one title, one meta description. Robots/indexing, canonical/social/schema fields unchanged; no duplicate SEO implementation/plugin.

Home and Footer saved/promoted behind the active Coming Soon gate under the standing owner review instruction. No launch, unrelated page edits or merge. No styling, spacing, responsive control, native carousel setting, component definition, global class/token, CSS/JavaScript/dependency changes were needed.

### Actual verification and evidence
Authenticated root visually inspected at1440/1024/768/390/320. Exact approved paragraphs/heading text, semantic H1/H2/H3, unchanged Manrope hierarchy, gray lines, readable wrapping and no clipping/overlap confirmed. Long Services subtitle wraps naturally (two gray lines at390; three at320); approved text was not shortened or resized. No horizontal document overflow: measured scrollWidth1425/1009/753/375/305 respectively, less than the corresponding innerWidth because of the Windows scrollbar.
- Native audit139→139 nodes, no additions/deletions/reparenting, only the13 authorized content settings changed. All local styles and all12 portfolio image elements/asset references unchanged. Footer template change is solely the message override.
- All six “Visit site” links actually clicked and opened the expected live destinations: Chicago Mounting→chicagomounting.com; GCPRO→gcprochicago.com; Kolo→kolo-properties.com; Center For Dental Healing→glenviewsmiles.com; Elite→elitemechanical.services; Quickzy→quickzycleaning.com. Existing destinations retained, no project claims/metrics added.
- Native carousel Enter advances with retained visible focus at1440/390; Space reverse exercised; desktop hover/press/release/leave on both arrows preserves monochrome and clears active. Actual mobile swipe advances track0→-336px; tap/release exercised. No navigation mechanism changed.
- Hero “See our work” anchor, existing #contact/contact email destinations checked. Native mobile Menu opens via Enter, Escape closes and returns focus to a button. Pre-existing limitation: menu anchors do not automatically close the popup; unchanged.
- Images were initially lazy placeholders before their cards entered view; actual first Studio Plate loaded before final screenshots. No lazy-load setting or image edited.
- Anonymous rootHTTP200 still renders Coming Soon5858 and does not expose5894. No indexing/Coming Soon settings changed.
- [Full desktop1440](verification/2026-11-18-approved-copy/homepage-1440.jpg)
- [Full mobile390](verification/2026-11-18-approved-copy/homepage-390.jpg)
- [Full mobile320](verification/2026-11-18-approved-copy/homepage-320.jpg)
- [Rendered text, metadata, links, interaction measurements and native audit](verification/2026-11-18-approved-copy/checks.json)

Screenshots are actual browser renders at the stated widths. A tall capture viewport was used to paint below-the-fold content; captures end at the actual footer and omit the admin bar. Browser assistant/cursor overlays may remain. Chrome responsive/touch emulation, not physical-device, Safari or screen-reader certification. No email was sent. Existing configuration remains in the WordPress database, not a portable native export. Home pre-change undo6188; Footer5893 pre-change undo5899. Check intervening edits before any whole-document restore. SEO rollback: title/description previously inherited defaults (null).

Existing PR18/feat/quickzy-work-2026-11-18 updated because it contains the current sixth project and Studio Plate work. PR15's separate diagram/arrow work remains unmerged and was not overwritten or merged. Other PRs untouched.


## 2026-11-18 — Website architecture and page skeletons
Contributor: ChatGPT/Codex. **Owner-authorized scope implemented and visually verified for review.** Created16 standard Pages with17-URL sitemap including unchanged Home; owner explicitly approved global Header/Footer navigation changes. [Actual IDs, parents, URLs/statuses and implementation](current-implementation.md#website-architecture-and-page-skeletons--2026-11-18).

Every new page loaded in the authenticated browser at1440 and390px: one H1, one relevant sentence, appropriate title/description, rendered noindex, shared navigation and no page horizontal overflow. Actual16-page Hero captures visually inspected in desktop/mobile contact sheets. Services additionally checked1024/768/320 and long Center For Dental Healing title at320. Existing typography/spacing retained with no responsive overrides.
- All16 canonical URLs resolve to the expected H1. Final WordPress list20 Pages =17 planned + three existing utility/authoring pages; no duplicate target URL. Four children of6191, six children of6193.
- Services' four directory hrefs and Work's six hrefs target verified created Pages. Actual keyboard navigation checked Services→Web Design, Work→Chicago Mounting, mobile menu→About and Footer→FAQ. Existing48px link target and visible black focus confirmed.
- Native mobile menu opens on a case-study page. Tab reaches About with white2px visible outline at390;320px composition inspected. Full page About navigation closes the popup naturally. No custom blur/events.
- Homepage assigned5894; body remains139 identical nodes/settings/styles/content/media/links. Actual root H1, approved SEO and six external project URLs preserved. Hero CTA reaches#contact; carousel Enter advances and Space reverse exercised.
- New-page noindex uses AIOSEO; homepage/global indexing untouched. Existing global class/variable registries match pre-task snapshots.
- Anonymous HTTP200 at all17 planned URLs renders Coming Soon5858 with no Home/new-page content. Rechecked after site-wide Popup condition; no automatic triggers.

Evidence:
- [All16 desktop Hero skeletons](verification/2026-11-18-architecture/all-pages-1440.jpg)
- [All16 mobile Hero skeletons](verification/2026-11-18-architecture/all-pages-390.jpg)
- [Services desktop Header/Hero/Footer](verification/2026-11-18-architecture/services-full-1440.jpg)
- [Services mobile Header/Hero/Footer](verification/2026-11-18-architecture/services-full-390.jpg)
- [Mobile menu focus](verification/2026-11-18-architecture/menu-390.jpg)
- [Sitemap, rendered checks, public gate and limits](verification/2026-11-18-architecture/checks.json)

No full designs or detailed content produced. Chrome responsive emulation, not physical-device/Safari/screen-reader certification. Logged-in WordPress admin bar consumes mobile popup space; primary links remain visible, secondary email may require a short scroll. Existing browser assistant/cursor overlays may appear. No email sent or live launch. Native configuration remains DB-held, not a portable export.

Rollback must preserve intervening edits: Header component pre-task6255; Footer component6257; Popup6259; active Header5892 pre-task5897. Popup condition was formerly Home-only and must be restored separately if rolling back. New page IDs6191–6221 (odd IDs) can be returned to draft using native WordPress controls if requested; do not delete unrelated pages. Homepage body was never edited. Dedicated implementation/site-architecture-2026-11-18 branch stacks on PR18; no unrelated PR merged.


## 2026-11-19 — Homepage process numerals and mobile carousel end alignment
Contributor: ChatGPT/Codex. **Owner-authorized / Implemented as staged Home5894 only / Visually verified for review.** Latest instruction explicitly prohibits merge or deployment. No publish-document, component publish, global-class/token change or merge performed. Coming Soon5858 remains public HTTP200; authenticated ordinary Home remains the original139-node version without the new numerals. Use [Home Elementor editor → Preview Changes](https://robylo.com/wp-admin/post.php?post=5894&action=elementor). Signed agent verification snapshots are intentionally excluded.

### Native changes
- Existing Approach step wrappers6311bb78/460dfd57/3e1a140f: add position:relative, overflow:hidden and isolation:isolate. Existing padding, grid columns and mobile final-step margin preserved. Clipping is local to each step; no page overflow suppression.
- Add three native e-paragraph elements283cd2a/45180c90/5657317, rendered as spans1/2/3. Native common attributes set aria-hidden=true on each outer span. Inline HTML aria attributes are sanitized, so native common attributes are essential; actual frontend DOM and accessibility tree were checked.
- Numbers use existing rb-font Manrope700, normal/upright, rb-ink at6% opacity;280px desktop,240px tablet,200px mobile; line-height1, zero letter-spacing/margin/padding. Absolute left0/top50%, translate(-50%,-50%), width:auto, z-index:-1, pointer-events:none. Local isolated stacking contexts keep them behind content. Each is50% clipped at its step's left boundary. No text/divider movement or new font weight/family.
- Existing final carousel slide79928cc9 receives only mobile margin-inline-end:calc(var(--rb-gutter) + var(--rb-space-2)). Native runtime track includes a trailing gap-sized padding; the combined margin compensates that16px and leaves the existing20px mobile gutter in the final trimmed snap. Desktop/tablet and all preceding slide geometry unchanged. Native trimSnaps engine,300ms setting, arrows, images, text and external links preserved.
- Actual current carousel contains SIX projects, not five: Quickzy was already appended in PR18. All six retained. Before-state already reached the final card, but it finished flush against the viewport edge. An unreachable fifth card was not reproducible on this current six-card version; this patch corrects the observed end alignment rather than replacing the working engine.

### Verification
Actual Chrome rendering at1440/1024/768/390/320px; screenshots visually inspected. Native staged audit139→142 nodes: exactly3 number additions and4 existing local-style changes (three wrappers plus final slide), no deleted/replaced/reparented content, no existing setting/content changes. Component6019 and shared typography/classes/tokens unchanged.
- All six cards reached through native next navigation; first/last aria-disabled states correct. At390 cards1–5 align left20/right340; final card left50/right370. At320 final left44/right300. Both mobile endpoints leave20px at the right; full final image/title/action visible, no excessive trailing space. Partial neighboring card remains visible.
- Desktop/tablet last snaps retain existing geometry and show the last complete card. No horizontal document overflow at any tested width.
- Three numeral boxes measure50% crop, Manrope700, opacity0.06 and the prescribed responsive sizes at all widths. Existing section heights and text geometry match live baseline; maximum measured text-coordinate difference below0.001px at1440/1024/768/320.390px section height also matches809.77px. Text/dividers remain readable and unmoved.
- Desktop keyboard Enter advances, Space reverses, visible focus retained. Mouse click→release→leave returns white.390px native swipe advances; four rapid clicks reach the fifth card; swipe from fifth reaches final with correct disabled next; touch previous tap/release returns white; mobile Enter/Space retains visible focus. Tab proceeds to the next existing action. No blur/event workaround.
- No new animation or transition. Existing reduced-motion handler is untouched. A separate emulation attempt did not retain the media override after navigation and is **not counted as a passed reduced-motion test**. Physical devices, Safari and screen-reader speech output were not certified; semantic aria-hidden was verified.
- Live-root native baseline has no decorative numerals, confirming no promotion. Anonymous HTTP200 still returns Coming Soon5858, not Home5894. Header/Footer, other sections, SEO, page architecture and public gate unchanged.

Evidence (actual browser captures, admin bar cropped out):
- [Approach desktop](verification/2026-11-19-home-ui/approach-1440.jpg) · [390px](verification/2026-11-19-home-ui/approach-390.jpg) · [320px](verification/2026-11-19-home-ui/approach-320.jpg)
- [Carousel final desktop](verification/2026-11-19-home-ui/carousel-1440.jpg) · [390px](verification/2026-11-19-home-ui/carousel-390.jpg) · [320px](verification/2026-11-19-home-ui/carousel-320.jpg)
- [Five-width geometry/navigation evidence](verification/2026-11-19-home-ui/checks.json)

Configuration remains in the WordPress staged autosave, not a portable export or Git-driven deployment. Pre-task undo6267; preserve intervening work before whole-document rollback. Surgical rollback removes the three new spans and the four listed local additions. Branch stacks on unmerged PR19 without merging it or other dependencies. Stop for owner review; no launch approval.


### Follow-up: remove the previous-card sliver on mobile

The earlier staged preview reproduced the reported gray strip. At 390px, Elite ended at x=34 while the carousel viewport began at x=20, leaving 14px visible. The phone screenshot alone does not identify its revision. The public homepage still serves Coming Soon.

Only Quickzy slide `79928cc9` changed in the staged Home 5894 document. The mobile end margin now uses `calc(100% - min(320px, 100vw - 64px) + var(--rb-space-2))`. This accounts for the remaining viewport width and the gap Elementor uses in its native end calculation, so the final snap aligns Quickzy with the other cards at x=20. The existing card widths and adjacent-card previews on earlier slides are preserved. All six cards, the native carousel, and its arrows remain in place.

In Chrome mobile emulation at 320px and 390px, both the Next arrow and a swipe from Elite reached the same final position. Quickzy was fully visible, Elite's right edge stayed 16px outside the carousel viewport, Next was disabled, and no horizontal page overflow appeared. Previous returned to Elite at both widths. The change is saved in the Elementor draft for owner review.

[320px final position](verification/2026-11-19-home-ui/carousel-final-320.jpg) · [390px final position](verification/2026-11-19-home-ui/carousel-final-390.jpg) · [Browser measurements](verification/2026-11-19-home-ui/carousel-final-checks.json).

## 2026-11-19 — Selected Work native slide alignment

The previous end-margin compensation is superseded in the Home 5894 Elementor draft. The six local slide styles forced fixed widths at each breakpoint while the native carousel positioned its last group based on the viewport and measured track width. In the authenticated published view, the previous card remained visible at the end after the track clamped to its final position.

Removed the fixed `flex` sizing and mobile `max-width` on slides `5751938`, `f84437a`, `d55796c`, `4c5d9f1`, `1263166` and `79928cc9`, including the Quickzy-only end margin. Elementor's existing responsive Slides per view now supplies sizing for the six cards. It is set to one on mobile and tablet, two on desktop. The slides, gap, native controls and shared styles were kept.

Saved and read back the six changes. Opened the authenticated page preview in Chrome. The owner took over visual verification before the responsive interaction matrix and screenshots were completed. The change remains in the editor draft alongside pending homepage edits. The anonymous root still returns Coming Soon page 5858. Undo revision for this edit is 6296.
