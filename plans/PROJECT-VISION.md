# Robylo website — concept and decisions

Status: planning only. Updated: 2026-11-13.

## Core positioning
- Robylo is a web design / digital studio and marketing services website.
- Visual principle: **clients and their work shine; the studio interface provides a neutral stage**.
- Strict monochrome interface: black, white, neutral grays; careful contrast, typography and hierarchy. Full-color client portfolio and exceptionally important content may stand out. Do not use default colorful AI-style gradients or generic layouts.
- Design must be distinctive, not generic Elementor/AI output. User will provide logo, screenshots and reference sites. Collaboratively approve visual concept, buttons, typography, layouts and sections before design implementation. Do not invent or prematurely lock visual design.

## Agreed implementation sequence
1. User installs clean WordPress on SiteGround personally.
2. Install/activate compatible theme and Elementor; confirm actual versions and licensing; configure foundation.
3. Connect WordPress via MCP and verify available read/write tools before edits.
4. Prepare starter template with global variables/classes, typography scale, spacing, container widths, responsive conventions, basic navigation/menu, header/footer and reusable components, informed by an audit of GCPRO. Reuse technical standards, not GCPRO branding or business content.
5. Only after user provides screenshots/references and logo: develop and approve visual direction and build individual sections, services and portfolio/cases.

## Repository and tracking
- Work in `vvvetalll/robylo-website-starter`, branch `robylo-website`.
- Reference `vvvetalll/gcpro-website` read-only; Chicago Mounting organizational conventions may inform planning and SEO workflow.
- Track decisions, plans, implementation, revisions and validation in GitHub; establish SEO notes, work log and changelog when implementation begins, without duplicating existing files.
- No production publication without approval. No claims of installation, connection or testing until verified.

## Open items
- User to install WordPress on SiteGround.
- User to share logo and visual reference screenshots.
- Confirm actual Elementor/theme configuration, MCP connectivity, and GCPRO reusable standards by inspecting repositories and live environment.
