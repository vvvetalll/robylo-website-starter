# The Big Picture — refinement proposal

Prepared by Claude (design), 2026-11-18. **Status: Proposed.** Not implemented.

Owner direction (2026-11-18): The Big Picture stays. It explains the philosophy (the business in the center, four directions working together around it); What we do lists the services and what each includes. This proposal keeps that split and only refines how the block shows it.

Mockups: [desktop 1440](design/2026-11-18-big-picture-refinement-desktop-1440.png), [mobile 390](design/2026-11-18-big-picture-refinement-mobile-390.png). Source: [index.html](design/2026-11-18-big-picture-refinement-source/index.html).

| Current build (PR #15) | Proposal | Why |
| --- | --- | --- |
| Four spokes meet only at the center | Add one thin `rb-mute` ring through the four points | The ring is what says "working together": each direction is also connected to the others, not just to the center |
| Solid black circle reading "BUSINESS" in capitals | Smaller black circle (96px), "Your business" in sentence case | Keeps the business as the focal point without out-weighing the H1; matches the no-uppercase rule |
| Eyebrow "THE BIG PICTURE" in capitals | "The big picture", 13px / 600, `rb-mute` | Same rule |
| Body: "We connect the pieces…" | "Your business sits in the middle. Website, local search, advertising and automation work around it, and each one makes the others work harder." | Says in words what the diagram shows; distinct from the Services intro |
| Get found / Win customers / Save time in a gray band that touches Services | Plain text row under the paragraph, 1px `rb-ink` rule above | The gray band read as tabs and merged with the Services background |
| Services intro: "Each one works on its own. Together they cover…" | "What is included in each one. Take one on its own, or let us run all four together." | Removes the repeat of the Big Picture message; Services stays concrete |
| Desktop diagram size and position not tied to the grid | Text in columns 1–6, diagram in columns 8–12, vertically centered | Aligns with the page grid |

Mobile 390: text first, the outcome row directly under the paragraph (three words spread across the width), then the diagram at up to 320px, centered. The diagram is one SVG with a text alternative.

Checks: rendered in headless Chrome at 1440 and 390 (2×), Manrope loaded, scroll width equals viewport. Not checked: Elementor, 1024/768/320, devices.
