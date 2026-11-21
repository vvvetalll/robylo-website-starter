Warning: truncated output (original token count: 18584)
Total output lines: 442

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
Home5894 updated13 exist…1584 tokens truncated…ce reverse exercised.
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

## 2026-11-19 — Design specifications recovered into GitHub (documentation only)

Collaborator: Claude. Branch `docs/concept-specs-2026-11-19` from PR #19 head f67d30d. Added docs/design-services-page-2026-11-19.md, docs/design-service-web-design-2026-11-19.md, docs/design-about-page-2026-11-19.md, docs/design-service-pages-architecture-2026-11-19.md, docs/design-system-index-2026-11-19.md, docs/design-specs-index.md, docs/theme-architecture-2026-09-17-superseded.md and docs/design-homepage-copy-review-2026-11-18.md (copied unchanged from PR #14 with a status note). Updated AGENTS.md (specification-before-implementation rule), decisions.md and design-log.md.

- **Sources:** Claude Docs (Services rev 21, Website rev 14, About rev 10), each read on 2026-11-19 with no edits since their last revision; About approved copy from PR #21 `docs/verification/2026-11-19-about/checks.json`; the theme-architecture text from the claude.ai Project document of 2026-09-17.
- **Checks run:** relative links in all new and changed files resolve to existing files; confirmation checklists counted (Services 8, Website 9); phrase searches in the source Claude Docs matched the committed text at the sampled points.
- **Limit:** the Claude Docs export tool returns the file inline as base64 that could not be written to disk, so the three Claude Doc specs were transcribed from the doc content rather than byte-copied. Not a byte-level comparison. If a discrepancy is found, the Claude Doc revision named in each file header is the reference.
- No WordPress, Elementor or website change. No existing PR merged.

## 2026-11-19 — Visual audit and Services redesign mockup (design only)

Collaborator: Claude. Added docs/design-visual-direction-2026-11-19.md and docs/design/2026-11-19-visual-direction/ (desktop 1440 and mobile 390 renders, source HTML, render script, six SVG drawings). Status **Proposed**.

- Evidence: live `/`, `/services/`, `/services/web-design/` opened anonymously in a cloud Chrome browser at 1440 px on 2026-11-19 (site publicly reachable at that time); About from PR #21 capture; stripe.com opened as a reference.
- Checks run: mockup rendered in headless Chrome at 1440 × 900 (1×) and 390 × 844; `scrollWidth` equals viewport at both; Manrope loaded; visual review of all sections at both widths after one layout fix (zigzag alternation and CTA width).
- Not verified: tablet widths (768/1024) of the mockup; native Elementor feasibility of SVG upload on this site; entrance motion.
- Observed issue: public `/services/` and `/services/web-design/` display literal "[Confirm]" markers.
- No WordPress, Elementor or website change. No PR merged.

## 2026-11-19 — Services visual balance and release QA

**Verified in authenticated Chrome.** Opened and visually inspected both PR #27 images before the redesign. Compared the rendered Elementor page on desktop and mobile by section. The hero retains the split introduction and service grid. The six problems form a distinct black band. The four solution visuals alternate on large screens and lead each mobile group. The standards use display-sized statements. Engagement uses shorter contrasting panels with no diagram. The sixth section and footer use their existing designs. Differences in imagery, accent density, engagement panels and CTA follow the owner's later 70/30 and CTA decisions.

- Checked the saved frontend at 1440, 1024, 768, 390 and 320px. No horizontal overflow or clipped tile labels. Card heights exceeded 48px. Checked all eight visual instances, including below-the-fold images after scrolling. Full-page captures are provided privately for owner review.
- All 25 main-content links showed visible keyboard focus at 1440 and 390px. Enter on the hero secondary action reached `#where-to-start`. Pointer entry and leave added and removed the tile outline. A touch-emulated tap on the Web Design tile opened its destination. No new script or animation states were added.
- All nine literal owner-review markers remain in 6191. The full saved CTA subtree matches the original. The SEO title, description, canonical and robots settings match the pre-change read-back. Home, About and Web Design still render their existing content in the authenticated session.
- Coming Soon was restored before visual editing. Logged-out requests to Home, About, Services and Web Design returned the Coming Soon template before and after the save. None showed review markers. Authenticated Services returned `noindex, nofollow`.
- Native revision 6325 provides rollback on this WordPress site. An importable whole-page export and full screenshots are omitted from the public PR because they reproduce owner-review text.

## 2026-11-19 — Services refinement preview QA

**Verified in authenticated Chrome.** Visually compared the published baseline with the staged frontend, using full-page captures at 1440 and 390px and section captures at 1024, 768 and 320px. Rechecked tablet alignment, consistent 4:3 media, text wrapping and the revised statement rhythm. All eight image instances rendered, and none of the five widths had horizontal overflow.

- Full-page capture heights changed from 7742 to 7610px at desktop and 9834 to 9740px at 390px. The six main sections gained 43px at 320px as the larger supporting copy wrapped.
- All 25 main-content links retained visible keyboard focus at 1440 and 390px. Enter on the secondary hero action still targets `#where-to-start`.
- Elementor configuration read-back confirmed unchanged content, URLs and assets. The hero, engagement and CTA subtrees matched the baseline exactly. AIOSEO title, description, canonical and robots flags matched the baseline. The preview emits noindex, and a logged-out request still returns Coming Soon with no review text.
- Before/after captures are provided privately. Elementor remains staged, and no launch or PR merge was performed.

## 2026-11-19 — Services ownership copy QA

Verified the exact approved text in the authenticated Elementor frontend at 1440 and 390px, with the existing Manrope sizes of 17 and 16px and zero horizontal overflow. A complete configuration comparison of the Services draft against its pre-edit state found only the “Yours to own.” paragraph changed. Eight other review markers remain. Coming Soon and noindex were verified, and the ownership revision remains unpublished.

## 2026-11-19 — Visual workflow and Web Design composition QA

**Verified in the authenticated Chrome frontend preview.** Compared the existing and staged page visually, with full-page captures at 1440 and 390px and section checks at 1024, 768 and 320px. All three established attachments loaded. The design-review placeholder and GCPRO proof retained 4:3 proportions, the comparison cards stacked cleanly on mobile, and no viewport had horizontal overflow. The new scope slot measured 487×365px at desktop, 320×240px on 390px mobile and 280×210px at 320px.

All 14 existing content links showed visible keyboard focus at 1440 and 390px. Read-back confirmed all original nodes and content remained present, all nine section roots kept their order and all 12 existing confirmation marker occurrences remained. The Hero, signature and final CTA trees matched the baseline exactly. The pending Services draft also matched its prior state. No changes were made to the global footer.

The edited page emits noindex. Anonymous Home, Services and Web Design requests showed Coming Soon without review copy. No publication or PR merge was performed. Full-page evidence is delivered privately because it includes owner-review content. Composition approval and a final asset for the design-review slot remain pending.

Final pass following the [buttons and links hierarchy](ROBYLO-CONCEPT.md#buttons-and-links-hierarchy): the only additional changes in 6203 were two native link labels. Rechecked the frontend at 320, 390, 768, 1024 and 1440px with zero horizontal overflow, and refreshed full-page desktop and mobile evidence with all three existing visuals loaded. Both updated links retained their transparent underlined style and showed a visible 2px keyboard focus outline at 390 and 1440px. Both destinations opened in the authenticated frontend. The actual Web Design preview still emitted `noindex, nofollow`. Unauthenticated requests returned only the existing Coming Soon page, which did not itself send a robots meta directive or `X-Robots-Tag` during this check. Indexing and gate settings were preserved.

## 2026-11-19 — Web Design targeted refinement and FAQ QA

**Verified in the authenticated Chrome preview.** Visually compared before/after captures at 1440 and 390px and inspected intermediate renders at 320, 768 and 1024px. The graphite cards render with equal widths and contrast, Scope stages wrap and stack with four square icon slots, the process numbers remain prominent, and the editing preview preserves 4:3. No horizontal overflow at any of the five widths. Private review evidence includes the desktop/mobile comparisons and mobile collapsed and open FAQ states.

The FAQ started with all six items closed. Actual mouse clicks on desktop and emulated touch taps at 390px opened the first item, switched to the second and closed it. Enter, Space and Tab worked at 1440 and 390px, with a visible 2px outline and focus retained on the toggled row. Checked all six answers individually and verified native single-open grouping and the visible plus/minus swap. The existing Approach and FAQ text links retained destinations and visible keyboard focus.

Structure comparison found identical order for the nine sections and unchanged Hero, signature illustration, related Work section and final CTA subtrees. FAQ heading and follow-up link were identical. Full content and destination comparison matched after excluding the two updated placeholder labels. All 12 existing review markers remain, including four in FAQ. Web Design preview emitted `noindex, nofollow`, while anonymous Home, Services and Web Design returned Coming Soon. No content was released or merged.

## 2026-11-20 — Customer-first messaging review (documentation only)

Collaborator: Claude. Added docs/design-customer-first-messaging-2026-11-20.md (Proposed). Recorded the approved direction in docs/ROBYLO-CONCEPT.md ("Customer-first communication") and decisions.md; updated design-log.md and design-specs-index.md. Baseline copy taken from ROBYLO-CONCEPT.md (Home), design-services-page-2026-11-19.md and design-service-web-design-2026-11-19.md on branch implementation/visual-placeholder-workflow-2026-11-19 (4d560cb). Checks: relative links resolve. Not verified: rendered fit of proposed copy. No WordPress or website change; no PR merged.

## 2026-11-20 — Customer-first Home and Services verification

**Verified in authorized Chrome frontend previews.** Reviewed Home, Services, About and Web Design. Staged drafts on Home and Services only. Compared visible main-content words from the original and revised renders. Home went from 440 to 375 (about 15% fewer). Services went from 877 to 667 (about 24% fewer). Counts include headings and actions and exclude shared site chrome.

- Checked actual layout at 320, 390, 768, 1024 and 1440 CSS px. Neither page had horizontal overflow. The Home service grid and Services standards stack on phones. Existing project and service imagery remains in place. Private screenshots cover the revised Home service area, Services problem/standards layouts and the existing project proof.
- All four added service links reached their expected paths in the logged-in frontend. SEO, Advertising and Automation remain their existing introductory pages. The four Home service titles show a visible outline when keyboard-focused at 390 and 1440px. Tested the local SEO link with an emulated mobile tap. The existing Services problem link also retained keyboard focus. Tested Home carousel forward/back at 1440 and 390px. The mobile return was verified with keyboard activation after the slider settled.
- Compared Elementor read-backs for unchanged anchors, titles, contact subtrees, carousel and visual placements. Services kept all eight confirmation occurrences, its exact approved ownership copy and all pre-existing link destinations. Authenticated Home and Services previews emitted `noindex, nofollow`. Logged-out Home, Services, About and Web Design still returned Coming Soon. Public launch and approval of new slogans or claim language remain pending.

## 2026-11-20 — Typography and separator QA

**Verified in Chrome.** Checked actual draft rendering of Home, Services, About and Website Design at 320, 390, 768, 1024 and 1440 CSS px. No horizontal overflow or clipped heading lines. Visually inspected the rendered main/secondary relationship, whitespace after dark-divider removal, readable mobile body copy and the About reference. The graphite secondary color measured 9.74:1 on white and 8.93:1 on soft gray. The existing inverse secondary color measured 6.08:1 on black. Checked Manrope 700 black H1 rendering on all other 13 marketing routes and on Styleguide and Atomic Lab.

Compared Elementor read-backs. Exact headline, body, link, interaction and component values were retained apart from the 13 explicitly removed eyebrow labels and the typography/layout styles. Home process labels and About's four numbered rows retain their content and order. Four Services annotations have only their light left edge at all five widths. Keyboard focus on the Services link remained visible, the Web Design FAQ opened and closed via mouse and keyboard with one answer open, and the Home mobile menu opened and closed. The four draft previews emitted `noindex, nofollow`. Logged-out requests still returned Coming Soon. Evidence is provided privately.

## 2026-11-20 — Outline and divider verification

**Verified in authenticated Chrome previews.** Compared 1440 and 390px before/after captures of Home services, the four Services presentations and all affected divider groups. At 320, 390, 768, 1024 and 1440 CSS px all 24 restyled actions render with a transparent fill, a visible outline, 4px radius, 16px type and at least 48px height. No page or action overflow. Checked all 24 actions with keyboard focus at 390 and 1440px (48 passes). Verified the base/hover/mouse-leave cycle across linked headings, direct buttons and wrapped components. A mobile-emulated tap reached Local SEO. The Home Work action still activates the existing hash. All 13 distinct internal page destinations loaded at their existing routes.

Frontend scan at all five widths found no decorative horizontal rules in the four affected page bodies. The Home diagram orbit and Website Design FAQ boundaries remained. Checked the FAQ with Enter, mouse switching and Space and confirmed one answer open at most. Home's six carousel projects and keyboard forward/back worked at 1440 and 390px. Compared all widget IDs, visible labels (excluding arrow marks), destinations, saved content and eight Services and twelve Website Design confirmation entries. The divider-only pass changed styles exclusively. All tested draft previews emitted `noindex, nofollow`. Logged-out requests still served Coming Soon. Sixteen screenshot comparisons are delivered privately.

## 2026-11-20 — Visual composition, seven-route check

Authenticated Chrome at 320/390/768/1024/1440 reported no horizontal overflow. Compared 11 affected sections before and after at 1440/390, with additional breakpoint imagery. Checked desktop/mobile keyboard focus, pointer hover, mobile menu Escape and focus recovery, all six native carousel positions, emulated swipe, native FAQ open/close behavior, final CTA navigation and unchanged review markers. Anonymous requests for all seven reviewed routes returned Coming Soon. [Implementation details, exclusions and QA evidence index](design-visual-composition-2026-11-20.md#verification). Visual evidence delivered privately.

## 2026-11-20 — Customer path visual review

ChatGPT/Codex visually inspected the authenticated WordPress draft for section 7d73938f at each exact Chrome viewport. Captures: [320 px](evidence/big-picture-elementor/320.jpg) · [375 px](evidence/big-picture-elementor/375.jpg) · [390 px](evidence/big-picture-elementor/390.jpg) · [768 px](evidence/big-picture-elementor/768.jpg) · [1024 px](evidence/big-picture-elementor/1024.jpg) · [1440 px](evidence/big-picture-elementor/1440.jpg). Desktop and wide tablet show the connected panels and laptop. At 768 px and below, the sequence stacks with a compact website screen. At 320 px the headline and middle stage title wrap. No horizontal overflow was measured at any width. The section exposes one H2, three H3s, live interface text and zero interactive controls. The initial render showed a gap at the laptop's right port. The final curves are anchored relative to the illustration and the side panels paint above the arc.

The comparison of the complete Elementor Home configuration before and after, excluding only the target section, matched exactly. The previous Hero draft is preserved. Coming Soon was on and the frontend robots tag included noindex. Changes are staged for owner review. PR #37 is stacked on #34; #34, #36 and #37 remain unmerged.


## 2026-11-20 — Warm hybrid homepage verification

Codex inspected the authenticated WordPress frontend in Chrome at 320, 360, 375, 390, 768, 1024 and 1440 px. After publication, the Elementor and SiteGround caches were cleared and the ordinary homepage URL was reopened. No horizontal page overflow was measured at any of the seven widths. The published mobile label radius measured 22 px on every label at all four phone widths and 54 px at 768, 1024 and 1440 px. All three mobile step titles fit on one line. At 390 px the Business Hub width went from 350 to 294 px and its circle from 123 to 103 px. Hero buttons retained their sizes. Sampled text contrast reached at least 6.61:1 for normal text and 4.07:1 for large text. Keyboard activation reached both Hero destinations. The carousel reached Quickzy, the sixth project, and its Next control disabled at the boundary. Returning by swipe restored forward navigation. Phone verification used Chrome emulation.

Published captures: [full desktop](evidence/warm-home/home-1440.jpg), [full mobile](evidence/warm-home/home-390.jpg), [The Big Picture desktop](evidence/warm-home/big-picture-1440.jpg), [The Big Picture mobile](evidence/warm-home/big-picture-390.jpg). Before/after at [320](evidence/warm-home/mobile-320-comparison.jpg), [360](evidence/warm-home/mobile-360-comparison.jpg), [375](evidence/warm-home/mobile-375-comparison.jpg) and [390 px](evidence/warm-home/mobile-390-comparison.jpg). Each before column shows the PR #38 comparison treatment with the original mobile dimensions. Each after column shows the published page. The capture excludes the signed-in admin toolbar.

Anonymous visitors received the Coming Soon screen. The actual authenticated homepage returned noindex, nofollow. The separate anonymous Coming Soon response had neither a robots meta directive nor an X-Robots-Tag header. That response's indexability is a separate site-level issue. Search visibility settings were left intact.

## 2026-11-20 — Published mobile journey and Hero checks

Codex compared signed-in Chrome renders of Home 5894 before editing and after protected publication, clearing Elementor and SiteGround caches and reopening the ordinary homepage URL. At 320, 360, 375 and 390 px all stages have 14 px from caption to illustration, 36 px between articles, one 32 px number per heading and two downward arrows. The circles rendered as #15171C with white digits. Titles aligned vertically with the circles. All three illustrations, headings and descriptions remained visible with no overlap or horizontal page overflow. The prepublication preview needed a browser-only refresh of the saved badge rule to show the final color. All linked evidence is from the published page with no injected style.

At all four phone widths the Business Hub moved down exactly 24 px. Both CTA rectangles, sizes and relative positions of all graphic descendants and clearance below the Hub matched their baselines. At 768, 1024 and 1440 px the before/after section screenshots for both Hero and The Big Picture matched pixel for pixel. Coming Soon was served anonymously. The authenticated homepage retained noindex and nofollow.

Published customer path screenshots: [320 px](evidence/mobile-customer-path/320.jpg), [360 px](evidence/mobile-customer-path/360.jpg), [375 px](evidence/mobile-customer-path/375.jpg), [390 px](evidence/mobile-customer-path/390.jpg). Published Hero: [320 px](evidence/mobile-customer-path/hero-320.jpg), [375 px](evidence/mobile-customer-path/hero-375.jpg), [390 px](evidence/mobile-customer-path/hero-390.jpg).

## 2026-11-20 — What We Do frontend verification

Codex inspected the Elementor preview, corrected the SVG fill and desktop curve positioning, and verified the protected, published homepage after clearing Elementor and SiteGround caches. Chrome showed one service column at 320, 360, 375 and 390 px and two columns at 768, 1024 and 1440 px. All four SVGs rendered, copy wrapped without clipping and page overflow measured zero at all seven widths. The four arrow hit areas mapped to the original service URLs. Keyboard traversal exposed the visible 2 px focus outline.

Compared the complete Elementor trees of the five other homepage sections before and after publication: their configuration matched exactly. Hero and The Big Picture retained their upstream positions. The directory’s new height moves Selected Work and subsequent content down in normal flow. No shared components, kit settings, header or footer templates were written. Anonymous visitors still received Coming Soon, and the authenticated homepage retained noindex and nofollow.

Published desktop and phone captures: [1440 px](evidence/what-we-do/what-we-do-1440.jpg), [390 px](evidence/what-we-do/what-we-do-390.jpg), [320 px](evidence/what-we-do/what-we-do-320.jpg).

## 2026-11-20 — Business Hub orbit feasibility

**Stopped before implementation.** Codex tested a full 40-second linear rotation on the signed-in Chrome frontend of Home 5894. The trial operated only in the browser, using each existing card’s real starting position and dimensions, a fixed center and an equal counter-rotation to keep text upright. The only addition was a temporary scoped stylesheet. The four cards animate using CSS transforms. The test harness sought the timeline in Chrome to inspect intermediate positions and capture frames. It was removed after the test. Nothing was staged or published in WordPress.

The current hub (17cfcfea) is 235.2 px wide at a 320 px viewport. The center is 82.3 px in diameter, leaving 76.4 px on either side inside the composition. The SEO card is 119 px wide. At the side crossing its center has to pass the center circle’s horizontal axis. Even using *all* available viewport width, the centered circle and the SEO card would require at least 320.3 px for a symmetric path with zero clearance (82.3 + 2 × 119). Preserving either the approved side gutters or a visible gap makes the deficit larger. Changing speed or using an ellipse cannot resolve this side-crossing constraint.

| Chrome width | Hub width | Widest upright card | Space to one side of the circle inside the hub | Maximum card bounds beyond viewport on test orbit |
| ---: | ---: | ---: | ---: | ---: |
| 320 | 235 | 119 | 76 | 0 px; SEO intrudes on the center |
| 360 | 269 | 126 | 87 | 1.1 px |
| 375 | 282 | 132 | 92 | 3.4 px |
| 390 | 294 | 138 | 96 | 5.1 px |
| 768 | 680 | 252 | 221 | 24.4 px |
| 1024 | 680 | 252 | 221 | 0 px |
| 1440 | 608 | 225 | 197 | 0 px |

Chrome sampled all four card bounds at each whole degree, including 0° and 360°, at all seven widths. The minimum distance from the center-circle perimeter to the SEO card’s rectangular bounds was −8.0 px at 320 px and 210°. Rounded corners soften the visible intersection. On desktop the sweep still exceeds the allotted illustration box, by up to 63 px at 1440. The SVG’s spokes and endpoint dots are fixed in the original illustration; in the review clips they visibly lose alignment as soon as cards move. Its elliptical outline and endpoints are not independent per-card tracks.

With reduced motion emulated, all seven widths returned zero trial animations and the exact original card and center rectangles. A background-tab frame timing sample was throttled and cannot establish device performance. The previews are Chrome frames sampled at 10 fps and encoded at the requested 40-second loop duration. They illustrate geometry, not real-device frame rate.

[Full mobile rotation, 320 px](evidence/business-hub-orbit/rotation-320.webp) · [Full desktop rotation, 1440 px](evidence/business-hub-orbit/rotation-1440.webp) · [Mobile collision detail](evidence/business-hub-orbit/seo-passing-center-320.png). The recommendation is to keep the existing static composition under the current spacing and readability constraints.

## Business Hub motion review, experiment 2 — 20 November 2026

The compact cards complete one 40-second linear revolution on all seven tested layouts. The four centers are spaced 90° apart, the labels remain upright, and the central disk stays fixed. The experiment uses the existing authenticated Home 5894 markup and Manrope. All homepage trials used a temporary browser stylesheet. No WordPress data was saved. The portable review captures the Hub in isolation with its own review controls.

[Download the standalone HTML review](evidence/business-hub-orbit-2/index.html) · [Mobile loop, 320 px](evidence/business-hub-orbit-2/mobile-orbit-320.webp) · [Desktop loop, 1440 px](evidence/business-hub-orbit-2/desktop-orbit-1440.webp)

| Viewport (px) | Disk diameter | Orbit radius | Closest card to disk | Closest card pair | Closest Hero or viewport edge |
| ---: | ---: | ---: | ---: | ---: | ---: |
| 320 | 54.0 | 95.4 | 2.4 | 5.8 | 4.4 |
| 360 | 76.0 | 110.9 | 6.9 | 27.7 | 8.9 |
| 375 | 76.0 | 114.7 | 10.7 | 33.1 | 12.4 |
| 390 | 76.0 | 118.4 | 14.4 | 38.3 | 16.4 |
| 768 | 238.0 | 214.7 | 13.5 | 142.7 | 87.5 |
| 1024 | 238.0 | 214.7 | 13.5 | 142.7 | 87.5 |
| 1440 | 212.6 | 202.4 | 20.9 | 139.1 | 35.9 |

All distances are CSS pixels. Clearance includes a four-pixel card shadow allowance on the sides and above, and five pixels below. Disk clearance is measured to its solid perimeter. At 320 px the 54 px disk fits the two-line 10.75 px label. On the other three phone widths the disk is 76 px and its label is 12.5 px. Both mobile sizes use Manrope 600, with 4.75 px of measured side clearance at 320 and 12.1 px at 360–390. The service-card type remains 12 px. [Mobile center detail](evidence/business-hub-orbit-2/mobile-center-320.png). The orbit uses existing empty Hero space beside the illustration. On narrower usable canvases the review solver falls back to a two-degree sway if the permitted radius cannot clear the painted rectangular cards.

| Card (width × height, px, rounded) | Phone, 12 px type | Tablet, 15 px type | Desktop, 14 px type |
| --- | --- | --- | --- |
| Websites | 86 × 30 | 110 × 37 | 99 × 34 |
| SEO & Local Visibility | 112 × 44 | 143 × 56 | 129 × 51 |
| Digital Advertising | 98 × 44 | 125 × 56 | 113 × 51 |
| AI & Business Automation | 107 × 44 | 136 × 56 | 123 × 51 |

The desktop pass uses 18 px icons, 6 × 8 px padding and a 5 px icon gap. The responsive mode hides the original fixed connector artwork during motion. Reduced motion restores the approved original sizes, positions and connectors. The review file also has pause/resume and a static comparison.

Chrome checked 801 positions per viewport at 50 ms intervals over the cycle. All seven passed disk and card clearance, containment within the Hero and viewport, upright orientation and stationary center. Section rectangles stayed stable and horizontal page overflow was zero. The 320 px orbit is the tightest, with 2.4 px at the closest card corner including its shadow. CSS transforms drive the motion without per-frame JavaScript or layout reads. The two recordings sample the isolated browser review at 10 fps and each plays for 40 seconds. They demonstrate the path and proportions. Physical-device frame rate was not measured.

## Published Business Hub, guides and eyebrow typography — 20 November 2026

ChatGPT Work tested the protected, authenticated WordPress frontend in Chrome. The four cards run a 40-second linear CSS orbit. A complete cycle was sampled every 50 ms at 320, 360, 375, 390, 768, 1024 and 1440 px. Minimum clearances from the card shadows to the solid central disk were 2.37, 6.87, 10.70, 14.37, 13.49, 13.49 and 20.88 px respectively. All seven had upright cards, a stationary center, positive card-to-card and edge clearance and zero horizontal overflow. Reduced motion restored static geometry and fixed original connectors. On devices with less usable space than the 235 px minimum Hub width, the original static composition is retained.

A post-publication check caught Atomic's generated rules overriding mobile disk width and position. Scoping the animation rules under the existing main content ID fixed the cascade. The corrected center measured 76 × 76 px with less than 0.001 px of center error at 390 px. The two owner-approved guide circles stay behind the moving cards. Their centering, containment and decorative pointer behavior were checked at 320, 375, 390, 768, 1024 and 1440 px. Elementor and SiteGround caches were cleared.

The three section eyebrows matched in all seven typography properties at 320, 375, 390, 768, 1024 and 1440 px. What We Do retained its 14 px mobile and 24 px desktop bottom margin. The draft and published frontend were checked. Maintenance Mode and Search Engines Blocked remained active.

[Published mobile capture](evidence/business-hub-orbit-published/published-390.png) · [Published desktop capture](evidence/business-hub-orbit-published/published-1440.png) · [Mobile motion](evidence/business-hub-orbit-published/mobile-320.webp) · [Desktop motion](evidence/business-hub-orbit-published/desktop-1440.webp). The stills are from the published page. The motion recordings replay its archived rendered markup and styles in isolated Chrome, sampled at 10 fps for 40 seconds. Their orbital geometry was cross-checked against the protected frontend.

## Mobile Big Picture · November 20, 2026

**Published and verified on protected Home 5894.** Chrome rendered the draft and then the published homepage after Elementor cache regeneration and a SiteGround purge. All seven widths had zero horizontal overflow. At 320, 360, 375 and 390 px the figures extend 38 px below their illustrations and both inter-step gaps measure 30 px. Illustration widths measured 242 px at 320 and 252 px at the other three widths. Each illustration loaded, labels remained readable, and the section led into the existing What We Do introduction. Browser zoom/device-pixel rounding can affect the painted width of a 1 CSS px border.

The published section captures matched the final draft at all seven widths. At 768, 1024 and 1440 px the published captures also matched their pre-edit baselines pixel for pixel. Captures exclude the admin-only floating widget. These are responsive Chrome checks, not physical-device captures.

All three shared eyebrows retained the same size at every test width (11/12/15 px by breakpoint). The four Hero cards were observed moving with 40-second animations and two stationary outline guides. Text and link destinations in the other sections, header and footer matched the pre-edit state. All original Atomic descendants in The Big Picture matched the pre-edit structure and settings. The authenticated published response retained noindex and the WordPress toolbar reported maintenance mode active.

[Published 320 px](evidence/mobile-path-final/final-320.png) · [Published 390 px](evidence/mobile-path-final/final-390.png) · [Four phone widths](evidence/mobile-path-final/mobile-widths.jpg) · [Desktop before and after](evidence/mobile-path-final/desktop-comparison.jpg)

## 2026-11-20 — Published Hero card height and service-title refinement

ChatGPT/Codex verified the protected ordinary homepage in Chrome. The four card heights match at all seven widths. Browser measurements confirmed unchanged widths, padding, text sizes, phase offsets, 40-second animation, rotation radius and central circle. Icons and text groups remain centered. A live 320 px spot check observed the transform advancing. The reduced-motion preview rendered all four cards with no animation.

Full-cycle clearance was checked at 801 positions per viewport from the measured Chrome geometry and the published linear orbit. The check added a four-pixel card shadow bound at the sides and top, and five pixels below. It accounted for motion between samples. Positive values cover the central disk, other cards, and Hero/viewport boundaries.

| Viewport (px) | Shared height (px) | Radius (px) | Min. disk gap (px) | Min. card gap (px) | Min. boundary gap (px) |
| ---: | ---: | ---: | ---: | ---: | ---: |
| 320 | 44.25 | 95.41 | 2.38 | 5.78 | 4.39 |
| 360 | 44.25 | 110.92 | 6.87 | 27.70 | 8.88 |
| 375 | 44.25 | 114.67 | 10.61 | 33.00 | 12.63 |
| 390 | 44.25 | 118.41 | 14.38 | 38.31 | 16.39 |
| 768 | 55.59 | 214.72 | 13.49 | 142.65 | 87.49 |
| 1024 | 55.59 | 214.72 | 13.49 | 142.65 | 87.49 |
| 1440 | 51.16 | 202.36 | 20.87 | 139.07 | 35.87 |

The four What We Do service names measured 20 px at 320/360/375/390, 22 px at 768/1024, and 29.52 px at 1440. Each remains smaller than the directory H2 and the adjacent Selected Work H2. Text and link destinations matched the prior measurements. All seven widths had zero horizontal overflow or clipped service labels.

Separate Elementor publications kept the changes scoped. Elementor and SiteGround confirmed cache clearance. Logged-out Home still served Coming Soon, and the authenticated published page retained noindex. The paused How We Work subtree was restored and matched the original Elementor draft exactly.

[Published service titles at 1440 px](evidence/home-hero-service-refinement/services-1440.jpg) · [Full-cycle clearance data](evidence/home-hero-service-refinement/orbit-checks.json).

## 2026-11-20 — Published global header

After Elementor and SiteGround cache purges, Chrome verified the authenticated, published homepage at **320, 360, 375, 390, 768, 1024, and 1440 CSS px**. The mobile menu appeared at 320–390 px and the desktop navigation at 768–1440 px. All seven had zero horizontal overflow. At each mobile width, the published menu exposed all five destinations, used a white wordmark, kept the header in place while opening, and returned focus to the toggle on Escape. The WordPress toolbar, including its wrapped layout at 320 px, stayed above the site header.

The actual page hid the header on downward scroll, revealed the dark treatment with a white wordmark on upward scroll, and restored the light treatment at the top. Main content began at 104 px before and after the scroll test. The existing 40-second Hero animation continued running. Selecting Services through the mobile menu navigated to `/services/` and cleared the open state and scroll lock.

All five published destination pages exposed the corresponding current item in both menu variants, included the underline and noindex, and rendered the six approved wordmark paths. A logged-out homepage request returned the Coming Soon page without the live header or private homepage content. The isolated pre-publication WordPress draft also passed Enter, Space, visible Tab focus, rapid toggling, resize while open, Chrome touch emulation, and a reduced-motion test with a computed transition duration of 0s. That draft was moved to Trash after verification.

[Desktop at 1440 px](evidence/final-header/desktop-1440.jpg) · [Open mobile menu at 390 px](evidence/final-header/mobile-390.jpg) · [Measured results](evidence/final-header/checks.json)

## 2026-11-21 — Canonical eyebrow verification

**Implemented and verified by Codex** on protected Home `5894`, Services `6191`, About `6197` and Web Design `6203`. See the [ten-element inventory](current-implementation.md#2026-11-21--shared-section-eyebrow-on-the-four-robylo-pages). The three Home labels shared `rb-section-eyebrow` before the change, but the uppercase source text for What We Do still rendered in all caps. The seven internal-page labels used the old `rb-hero__eyebrow` and rendered at 13 px with weight 600. About also carried a second typography class. Inspection of the published CSS and computed values confirmed separate class assignments and hard-coded capitalization as the causes.

After clearing Elementor and SiteGround caches, Chrome measured all ten labels on the actual published pages. Each matched the first Home eyebrow in family, size, weight, line height, letter spacing and text transform. All labels remained inside the viewport. All four pages returned noindex. An anonymous request still showed Coming Soon without the private Home copy. The dark Services panel kept the existing contrast color. Comparing the stored Elementor trees against their pre-change snapshots showed exactly the intended element changes, with document settings intact. Atomic Lab's final document matched the original.

| Viewport widths | Font size | Weight | Line height | Computed letter spacing |
| --- | --- | --- | --- | --- |
| 320, 375, 390 px | 11 px | 700 | 15.4 px | 0.165 px |
| 768, 1024 px | 12 px | 700 | 16.8 px | 0.180 px |
| 1440 px | 15 px | 700 | 21 px | 0.225 px |

**Controlled propagation.** A local Chrome fixture combined all ten published label elements with Elementor's generated class and media rules. Changing one declaration on the emitted shared class from `letter-spacing: .015em` to `.045em` changed all ten computed values to 0.495 px at 320 px, 0.540 px at 768 px and 0.675 px at 1440 px. Restoring the rule returned all ten to the baseline values above. The non-eyebrow control retained its spacing. The transient value was applied only to the emitted CSS rule in the fixture. Elementor kit save and regeneration with a test value were outside this isolated browser test.

The first publication attempt briefly produced a fatal render on the affected pages because the update serialized a single-root Elementor array as an object. The exact saved data were restored, and publication was retried with a root-array check and verified on the rendered pages. Existing autosaves were retained separately, including concurrent About draft work.

## 2026-11-21 — Published Services directory verification

**Implemented and verified by Codex.** Elementor page `6191` was published behind the existing Coming Soon protection. Published Chrome measurements were repeated after the final focus correction and Elementor and SiteGround cache clears. All seven widths had six sections, equal Hero cards, a contained H1, zero horizontal overflow, no visible confirmation flags and the three canonical natural-case eyebrows. All 18 body links had hit areas at least 48 px tall.

| Viewport (CSS px) | Each Hero card (px) | Website artwork slot (px) | Eyebrow size |
| --- | --- | --- | --- |
| 320 | 126.5 × 165.9 | 245 × 183.8 | 11px |
| 360 | 146.5 × 180.9 | 285 × 213.8 | 11px |
| 375 | 154 × 168.4 | 300 × 225 | 11px |
| 390 | 161.5 × 174 | 315 × 236.3 | 11px |
| 768 | 154.9 × 197 | 321.8 × 241.3 | 12px |
| 1024 | 213.8 × 220.4 | 439.5 × 329.7 | 12px |
| 1440 | 282 × 286.8 | 613.1 × 459.8 | 15px |

The four articles retained alternating desktop alignment and artwork-before-text on phones. Their capability counts are 3, 3, 3 and 2. All 27 decorative Atomic shapes rendered in the 4:3 website panel. The three retained illustrative images loaded in Chrome at 1440 × 1080 each. The scoped edit removed only the Chicago Mounting image from the Website article. It remains in the Hero card with its descriptive alt text.

Audited the destinations of all 18 body links in Chrome. Activated links to each of the four service routes and both Contact CTAs. The Hero jump reached the unique problem section. The footer of the page body exposes the expected mailto target and its hit area. Real mouse hover and mouse leave were observed on representative dark and light canonical text links. Tab showed a solid 2 px white focus outline on the dark band, and Enter opened the Website service page. A Chrome-emulated touch start and release on the 390 px Hero card opened Website Design. At 390 px the final CTA and email link passed a hit test, and no visible fixed chat overlay blocked the page.

Logged-in Services retained `noindex, nofollow` at every width. An anonymous request returned the Coming Soon page with no private Hero copy. Physical-device and cross-browser testing were outside this run. Removed capability claims remain excluded until confirmed.

[Website illustration at 1440 px](evidence/services-directory-2026-11-21/website-1440.jpg) · [Website illustration at 390 px](evidence/services-directory-2026-11-21/website-390.jpg)

## 2026-11-21 — Services cards and outline verification

**Implemented and verified by Codex.** Chrome verified the final protected publication after Elementor and SiteGround cache purges. The page and every card stayed within the viewport. The cards use 3/2/1 columns with 24 px desktop and 16 px tablet/phone gaps. Body text measured 16 px on phones and 18 px on tablet and desktop. The problem copy measured 22, 24 and 28 px respectively. Each card link kept a 48 px hit area and the same 9 px inset from the bottom of its card.

| Viewport (CSS px) | Columns | Card heights, rounded (px) | All outline buttons (px) |
| --- | --- | --- | --- |
| 320 | 1 | 223, 248, 251, 275, 283 | 48 |
| 360 | 1 | 223, 248, 275 | 48 |
| 375 | 1 | 223, 248 | 48 |
| 390 | 1 | 198, 223, 248 | 48 |
| 768 | 2 | 310 | 48 |
| 1024 | 2 | 252 | 48 |
| 1440 | 3 | 329 | 48 |

The browser accessibility tree exposed all six problem statements and zero decorative opening quotation marks. Pointer hover and mouse leave were confirmed on a problem link and an outline button. Tab applied a solid 2 px focus ring to both styles. An emulated tap at 390 px opened the published Automation page. The Hero jump reached Sound familiar, and the six problem and four outline hrefs matched their existing routes. Chrome confirmed each destination had a rendered heading. All outline buttons kept a 1 px border, 4 px radius, transparent resting background and their requested labels. The Hero displayed the new browser illustration at each width and the native illustration still rendered in the article.

The inspected 320, 390 and 1440 px views had no visible chat overlay intersecting the cards. Logged-in page responses retained noindex. Anonymous Services showed Coming Soon and excluded the protected copy. No physical device or other browser was used. Published Elementor structure matched the reviewed changes. The original before-cards rollback is `6556`; check newer edits before using a full-document rollback.

[Sound familiar at 1440 px](evidence/services-problem-cards-2026-11-21/sound-familiar-1440.jpg) · [Sound familiar at 390 px](evidence/services-problem-cards-2026-11-21/sound-familiar-390.jpg)

## 2026-11-21 — Engagement card contrast verification

**Implemented and verified by Codex** on protected Services `6191`. After purging Elementor and SiteGround caches, Chrome measured the One-Time Projects surface at rgb(245, 245, 245) and the Ongoing Support surface at rgb(0, 0, 0) with white label, heading and body text. Compared with the browser baseline at each width, both cards retained their dimensions, spacing, corner radius, type styles and relative layout. One-Time Projects retained its previous CSS classes and colors. The page showed no horizontal overflow.

| Viewport (CSS px) | Columns | Each card width (px) | One-Time / Ongoing heights (px) |
| --- | --- | --- | --- |
| 320 | 1 | 265 | 233.38 / 158.98 |
| 375 | 1 | 320 | 208.58 / 158.98 |
| 390 | 1 | 335 | 208.58 / 158.98 |
| 768 | 2 | 333.78 | 287.25 / 287.25 |
| 1440 | 2 | 588 | 230.67 / 230.67 |

The published document matched the reviewed Elementor tree. Logged-in responses retained `noindex, nofollow`. Anonymous Services returned Coming Soon without engagement copy. [Published desktop screenshot](evidence/services-engagement-contrast-2026-11-21/ongoing-support-1440.jpg)

## 2026-11-21 — Desktop header navigation verification

**Implemented and verified by Codex.** Compared the protected Chrome frontend before and after updating snippet `6532`. Before the change, ordinary links expanded from 4/0 px to 13/20 px block/inline padding on hover. The ordinary hovered link gained 40 px in width and preceding links shifted up to 40 px horizontally. The shared line also gained 2 px in height. The final desktop hover test reached each of the five links at each width in both header modes.

| Viewport (CSS px) | Largest ordinary link box delta (x/y/w/h) | Neighbor shift during Contact hover | Header height |
| --- | --- | --- | --- |
| 1024 | 0/0/0/0 px | 0 px | 72 px |
| 1280 | 0/0/0/0 px | 0 px | 72 px |
| 1440 | 0/0/0/0 px | 0 px | 72 px |
| 1920 | 0/0/0/0 px | 0 px | 72 px |

The ordinary links measured Manrope 16 px / 500, with no underline at rest on Home and a fully extended underline at hover. All requested desktop widths retained the light top header, hidden state after downward scroll and dark reveal with a white SVG wordmark after upward scroll. The page width matched the usable viewport. Contact retained its initial 94 × 44 px size, 94 × 46 px hovered size and original styling in both palettes. Tab showed the existing solid 2 px focus outline and the new underline. Reduced-motion emulation yielded a 0 s underline transition.

The actual protected Services, Work, Approach and About pages showed a persistent underline on the corresponding current menu link. Contact retained its native current indication. The unlisted Web Design child retained WordPress's existing behavior. The Services active underline also appeared in white in the dark header. [Published desktop screenshot](evidence/desktop-header-refinement-2026-11-21/dark-active-1440.jpg)

At 320, 375 and 390 px, the closed and reclosed drawer measurements matched the baseline. The opened drawer used the same five destinations, typography and padding, a white wordmark and its existing 54 px item rows. Enter opened it, Escape closed it and returned focus, and an emulated tap through Services released the scroll lock. At 390 px the header still hid on scroll down, revealed dark on scroll up and restored light at the top. At 768 px the existing desktop breakpoint remained in effect. The mobile source and shared JavaScript are identical before and after. Tests used Chrome desktop and emulated mobile sizes.

The header Elementor tree was unchanged. Elementor and SiteGround caches were purged during publication. Anonymous Home continued to serve Coming Soon, and the protected frontend retained `noindex`.

## 2026-11-21 — Website Design service-page verification

Codex inspected Elementor post 6203 and compared its saved Atomic structure and the protected Chrome frontend. The audit covered 322 original nodes including the root. The original page had 109 nodes with local typography declarations and one assignment of the shared body class. The published tree has 238 nodes, 27 nodes with local typography and 40 instances of `rb-hero__subtitle`. Some approved typography and responsive overrides remain, including the hero and accordion summaries. No legacy widget appeared in the article tree, no exact duplicate labels appeared among the 60 kit classes, and no literal hex, RGB or HSL colors appeared in the inspected local CSS. The phone illustration retains colors in the existing SVG artwork; its surrounding surface uses the kit.

The protected frontend rendered Manrope body copy at 16 px on phones and 18 px at the tested tablet and desktop widths. The choice cards computed to the kit’s paper surface, neutral 1 px line and 4 px radius. The restored eyebrow uses the existing `rb-section-eyebrow` class at weight 700. Its source is “Common questions” and the class displays “Common Questions” in mixed case. The desktop CTA uses balanced wrapping; its existing mobile wrapping remains.

| Chrome viewport (CSS px) | Choice columns | Process columns | Eyebrow size | Usable / scroll width (px) |
| --- | --- | --- | --- | --- |
| 320 | 1 | 1 | 11px | 305 / 305 |
| 360 | 1 | 1 | 11px | 345 / 345 |
| 375 | 1 | 1 | 11px | 360 / 360 |
| 390 | 1 | 1 | 11px | 375 / 375 |
| 768 | 3 | 2 | 12px | 753 / 753 |
| 1024 | 3 | 2 | 12px | 1009 / 1009 |
| 1440 | 3 | 2 | 15px | 1425 / 1425 |
| 1920 | 3 | 2 | 15px | 1905 / 1905 |

At all eight widths the rendered page had eight sections in the specified order, three related links, four project steps, five anatomy points, six answers and zero visible confirmation markers. Both images loaded with meaningful alt text. The phone image was checked after lazy loading at 320 px. The viewport scan found no clipped text, horizontal overflow or broken images. The chat launcher appeared in its closed state. At 320 and 390 px the key page controls remained reachable, including both rendered fragments of the wrapped diagnostic link. Chat submission was outside the scope.

Clicked each of the 12 internal links in the article, including Hero and final contact, Work, all three related-service rows, Services, Approach, About, More questions, the diagnostic link and inline Local SEO. The Local SEO row also navigated on a simulated touch. The email href was checked as a mailto link without sending a message. The three related rows each highlight on hover with zero box change; keyboard focus produced a 2 px outline. Hero contact and Work hover states were checked. All six accordion items opened under mouse input, only one stayed open, and clicking the active question closed it. Tab produced the native 2 px focus outline, Enter opened a question, Space closed it, and an emulated tap opened and closed an item at 390 px.

Home, Services and all three other service pages loaded with the shared header, footer and `noindex, nofollow`. Home’s four orbit cards retained active `rb-revolve` motion. The mobile menu opened and closed at 320 and 390 px; at 390 px its five existing destinations were visible and Escape closed it. Neither shared templates nor the kit received edits. Elementor and SiteGround were purged after publishing. The anonymous route returned Coming Soon and did not render the service content. The authenticated route retained `noindex, nofollow` at all eight widths. Tests used the existing Windows Chrome connection and touch emulation.

[Desktop at 1440 px](evidence/web-design-refinement-2026-11-21/desktop-1440.jpg) · [Mobile at 390 px](evidence/web-design-refinement-2026-11-21/mobile-390.jpg) · [Accordion eyebrow at 390 px](evidence/web-design-refinement-2026-11-21/questions-390.jpg) · [Measured browser results](evidence/web-design-refinement-2026-11-21/checks.json)

## 2026-11-21 — Local SEO service-page verification

**Implemented and verified by Codex.** The authenticated Chrome frontend at the existing Local SEO route renders the published Elementor document 6205. Verified the sole H1, seven H2s, all three native illustrations and eight collapsed answers. The normal AIOSEO title and description match the approved text. The protected HTML retains `noindex, nofollow`. The anonymous route returns Coming Soon, without the new article text. Both Elementor and SiteGround caches were purged.

| Chrome viewport (CSS px) | Usable / scroll width (px) | Hero / Search & Maps / service areas panel widths (px) | Eyebrow size |
| --- | --- | --- | --- |
| 320 | 305 / 305 | 265 / 265 / 265 | 11px |
| 360 | 345 / 345 | 305 / 305 / 305 | 11px |
| 375 | 360 / 360 | 320 / 320 / 320 | 11px |
| 390 | 375 / 375 | 335 / 335 / 335 | 11px |
| 768 | 753 / 753 | 297 / 330 / 280 | 12px |
| 1024 | 1009 / 1009 | 403 / 448 / 380 | 12px |
| 1440 | 1425 / 1425 | 526 / 584 / 496 | 15px |
| 1920 | 1905 / 1905 | 526 / 584 / 496 | 15px |

In this Windows Chrome session, viewport overrides and touch emulation covered the eight widths. The panels scaled within the content width and kept text readable. The article had zero horizontal text or link clipping and loads no raster graphics. Its three explanatory panels use live text. The two eyebrows use the canonical class and computed `capitalize`. The rendered questions eyebrow reads “Common Questions.” Both accordion icons are hidden from assistive technology and switch visibility with the item state.

Clicked the six page links to Contact, Digital Advertising, Website Design, AI & Business Automation and Services, including both instances of Contact. Contact also worked by touch at 390 px. The Hero jump scrolled to the visible Search and Maps heading by click at 1440 px and by touch at 390 px. Its viewport section top settled at about 124 and 138 px, respectively. The seven links returned to their resting styles after hover and their dimensions remained constant. The Tab sequence followed the visible order. The final primary focus ring initially computed to black against the dark panel. A page-scoped override now uses the shared paper color. Published retests found a solid white 2 px ring at 320, 390 and 1440 px.

Each accordion item opened by mouse and replaced the previous open item; clicking the last again collapsed it. Tab found a 2 px visible ring, Enter opened the focused question and Space closed it. Four repeated clicks returned the item to its collapsed state. A touch tap opened and closed the third question at 390 px. The closed chat launcher did not block the tested links or last accordion control at 320 or 390 px.

The desktop header measured 72 px and hid on scroll down and returned on scroll up. The mobile menu opened at 320 px by touch and at 390 px by click; all five navigation links were visible and Escape closed it. The homepage’s four orbit cards retained active `rb-revolve` movement. The inspected Home Hero, Services overview tree and Website Design tree matched the pre-build Elementor reads, and their live routes retained the header, footer and protected rendering. Shared templates received no edits.

No live analytics, account access, result guarantees or attribution are implied by the illustration or measurement model. Tests used Chrome on Windows with emulated dimensions and touch, so physical device behavior beyond the tested browser was outside this record.

[Desktop Hero](evidence/local-seo-service-2026-11-21/hero-1440.jpg) · [Mobile Hero](evidence/local-seo-service-2026-11-21/hero-390.jpg) · [Desktop Search and Maps](evidence/local-seo-service-2026-11-21/search-and-maps-1440.jpg) · [Mobile Search and Maps](evidence/local-seo-service-2026-11-21/search-and-maps-390.jpg) · [Measured browser results](evidence/local-seo-service-2026-11-21/checks.json)
