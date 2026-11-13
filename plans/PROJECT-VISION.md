# Robylo website — concept and decisions

Status: planning only. Updated: 2026-11-13.

## Core positioning
- Robylo is a web design / digital studio and marketing services website.
- Visual principle: **clients and their work shine; the studio interface provides a neutral stage**.
- Strict monochrome interface: black, white, neutral grays; careful contrast, typography and hierarchy. Full-color client portfolio and exceptionally important content may stand out. Do not use default colorful AI-style gradients or generic layouts.
- Design must be distinctive, not generic Elementor/AI output. User will provide logo, screenshots and reference sites. Collaboratively approve visual concept, buttons, typography, layouts and sections before design implementation. Do not invent or prematurely lock visual design.

## Agreed implementation sequence
1. Existing Robylo website already has WordPress and Elementor; user reports MCP is present and will configure/enable connection when needed. The site is currently closed/paused, not a fresh installation.
2. Audit the existing WordPress site, installed theme, Elementor templates, global settings, pages and available MCP access before deciding whether to retain/adapt the existing theme/template or replace it. Preserve existing content and functionality; back up before changes.
3. Prepare starter template with global variables/classes, typography scale, spacing, container widths, responsive conventions, basic navigation/menu, header/footer and reusable components, informed by an audit of GCPRO. Reuse technical standards, not GCPRO branding or business content.
4. First user gathers visual references and logo; assistant analyzes, Claude independently evaluates, and user selects final design direction. Only then give Work implementation instructions. No site edits or visual design implementation before approval.

## Repository and tracking
- Work in `vvvetalll/robylo-website-starter`, branch `robylo-website`.
- Reference `vvvetalll/gcpro-website` read-only; Chicago Mounting organizational conventions may inform planning and SEO workflow.
- Track decisions, plans, implementation, revisions and validation in GitHub; establish SEO notes, work log and changelog when implementation begins, without duplicating existing files.
- No production publication without approval. No claims of installation, connection or testing until verified.

## Open items
- No WordPress reinstall planned. Existing installation needs audit when access is enabled.
- User to share logo and visual reference screenshots.
- Confirm actual Elementor/theme configuration, MCP connectivity, and GCPRO reusable standards by inspecting repositories and live environment.

## Case-study visual system (concept, not yet implemented)
- Portfolio currently identified: Chicago Mounting, GCPRO Restoration, ColoProProperties, Glenview Smiles, Elite Mechanical Services (HVAC). Confirm project scope and permissions before publishing.
- Build a coherent typography and infographic system for case-study pages: clear hierarchy, polished monochrome icons, annotated metrics, elegant scales/progress bars, circles and simple diagrams where meaningful.
- Each case should communicate project context, scope/role, challenges and complexity, process, deliverables, and verified outcomes. Avoid generic decorative charts and invented statistics; label qualitative assessments as editorial judgments with criteria.
- Visual tone: restrained, premium, professional, legible, accessible; allow actual client imagery to be the color accent. Develop reusable case-study components and responsive behavior after reviewing references and agreeing on design.

## Target market and service positioning (discussion, 2026-11-13)
- Founder prefers helping small businesses launch from zero and grow step by step. Proposed primary audience: growth-oriented local small businesses, especially service providers. This is a strategic direction to validate, not a proven market claim.
- Position Robylo as a practical digital growth partner rather than merely a website vendor; communicate clearly, without inflated promises.
- Four core service pillars: (1) website design and development; (2) paid advertising; (3) local SEO / Google Maps Local Pack visibility; (4) AI integrations and workflow automation.
- Customer journey concept: establish credible web presence -> improve discoverability -> attract and convert leads -> automate repetitive workflows. Offer phased engagement suitable for small-business budgets while defining clear scopes and sustainable pricing.
- Relevant prospective portfolio examples: Chicago Mounting, GCPRO Restoration, ColoProProperties, Glenview Smiles, Elite Mechanical Services. Verify actual scope and permission to showcase each.
- Site content ideas for later design approval: clear audience-focused positioning, four service areas, selected case studies, transparent working process, outcome-oriented explanations using only substantiated metrics, and a straightforward contact path.
- Avoid generic AI-generated marketing claims and unverified promises of ranking or revenue results. No design implementation until references and logo are reviewed.
