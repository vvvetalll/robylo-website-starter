# Portfolio image production

Approved production reference: Chicago Mounting Studio Plate v3, owner instruction **Complete All Five Portfolio Studio Plates**, 2026-11-18. This approval covers the five Work images and their reusable production process; Coming Soon remains active.

## Capture genuine websites

Capture desktop at 1440 × 992, device scale 1; save the content region excluding the scrollbar, 1425 × 1854. Capture mobile at 480 × 1100, device scale 1. The phone uses the top approximately 978px at its original proportions. Chicago's historical approved captures remain unchanged. Preserve original PNGs in `source/captures/`; record URL, date, dimensions, fonts and image readiness. Wait for fonts and visible images to load. Hide temporary cookie/chat/admin/accessibility overlays only in the capture session. Never replace site copy, branding, photos or UI. Park the pointer outside the visible export; inspect the compressed result for cursor halos. Preserve source files rather than retouching content.

## Approved composition

Reuse [canonical v3 HTML](design/2026-11-18-studio-plate-chicago-mounting/v3/source/plate.html) unchanged. The batch adapter substitutes names and source-image paths in memory.

| Property | Desktop | Mobile composition |
| --- | --- | --- |
| Canvas | 1600 × 1200 | 1000 × 1250 |
| Mat | #F5F5F5 | same |
| Desktop screen x/y/width/height | 80 / 80 / 1248 / 1040 | 48 / 64 / 904 / 790 |
| Phone x/y/width | 1160 / 340 / 360 | 592 / 440 / 344 |

Desktop frame: 1px #D6D6D6 border, 6px radius, image full width and natural height, overflow hidden. Phone: 4px #282828 border, 40px radius, padding 32px top / 2px sides / 24px bottom, 10px mat-colored separation outline. Screen: aspect 480/978, 1px #D6D6D6, 16px radius. Speaker: 40×4px at top13px; camera: 7×7px at top11px. Keep the entire bottom edge and separation outline inside the canvas. No shadows, gradients, 3D devices or invented status bars. Client-site colors remain authentic.

## Render and export

The existing Node runtime needs Playwright, sharp and installed Chrome. No package or browser installation was added in this task. Set `NODE_PATH` to your existing runtime module directory if needed; `CHROME_PATH` optionally overrides the installed Chrome executable.

```powershell
node docs/design/2026-11-18-portfolio-studio-plates/source/render.cjs
```

Pass a project slug as the last argument to regenerate only that project's assets and render report. For example, append `quickzy-cleaning` to the command above.

Add the project name/slug/URL to [projects.json](design/2026-11-18-portfolio-studio-plates/source/projects.json) and supply `{slug}-desktop.png` and `{slug}-mobile.png`. The adapter reads the approved template and writes desktop1600×1200 PNG/WebP, portrait1000×1250 PNG/WebP, and small800×600 WebP. WebP quality90, effort6, smartSubsample false. Naming: `robylo-work-{slug}-plate-v3[-mobile|-800].webp`; editable sources and lossless PNGs stay in the dated artifact folder. Do not recompress an existing WebP. Review both PNG and compressed WebP at their actual display sizes. Current desktop exports are about141–179KB, mobile95–134KB; legibility takes precedence over a rigid file-size target.

## Native Elementor handling

Home5894, Work58c9fc4, carousel063712a. Use native Atomic image widgets with Media Library attachment IDs and meaningful alt text. The current e-image schema has no responsive source field, so each card has a desktop image and a mobile image, selected by native display controls: desktop visible above767px; portrait visible at767px and below. Both use width/height100% and object-fit contain. Native local media-wrapper settings reserve aspect4:3 desktop and4:5 mobile, zero padding. These are Atomic styles, not theme CSS. WordPress may select a native responsive derivative. Do not add custom JS, picture markup, new global tokens or another carousel. Preserve card widths, captions, links, gaps and controls. Upload final files before assigning IDs; confirm the rendered image matches the final export. Publish through the native editor and verify the ordinary authenticated homepage. Never disable Coming Soon. Do not repeatedly purge caches; diagnose stale output first and obtain specific consent when required.

## Quality gate for each new card

1. Confirm real content, loaded fonts/images and no temporary overlays or pointer artifacts.
2. Render both compositions; verify complete phone silhouette, top hardware details, bottom edge and desktop headline. Keep the next section visible where the authentic layout permits.
3. Inspect compressed exports and the actual homepage at1440,1024,768,390,320. Review every carousel card, not just the first. Confirm breakpoint switching, sharpness, alignment, uniform image proportions, captions, no horizontal page overflow and stable media height.
4. Test previous/next boundaries, hover/press/release/leave, keyboard Tab/Enter/Space with retained visible focus, rapid clicks, touch tap/release and swipe. Open every project link.
5. Save sanitized actual desktop/mobile screenshots, record what was run and limitations, commit/push on a task branch and open a PR. No merge or launch without approval.

Use full-viewport browser captures then crop the Work region or cards. CDP screenshot clipping beyond the viewport can temporarily resize/reinitialize the carousel; it must not be mistaken for a product failure. Evidence contact strips combine actual card crops from successive positions and are labeled as such, not a single five-column page.

[Implementation and evidence](horizontal-portfolio-prototype-2026-11-17.md#all-five-studio-plates--2026-11-18). These site-specific settings and attachment IDs are documentation, not a portable native export.
