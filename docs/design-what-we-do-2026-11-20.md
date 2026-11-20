# ROBYLO — Implement Approved “What We Do” Section

## Objective

Implement the next homepage section, **What We Do**, directly in Elementor Atomic.

The owner has selected the previously generated minimalist visual concept as the design reference.

**This is an implementation task, not another design exploration.**

Website: https://robylo.com  
Homepage Elementor ID: `5894`  
Repository: `vvvetalll/robylo-website-starter`

Read `AGENTS.md`, the current Elementor structure and the existing design system before making changes.

## 1. Approved visual direction

Use the attached design reference.

The section must feel:

- Premium and minimalist
- Light and welcoming
- Editorial rather than dashboard-like
- Spacious and carefully balanced
- Consistent with the approved Warm hybrid homepage

### Design elements

- White or warm off-white background
- Large, confident section heading
- Four services in a clean two-column desktop layout
- Thin neutral dividing lines
- Small, elegant monochrome icons
- Extremely subtle background curves or geometric details
- Generous whitespace
- Minimal or no shadows

**Do not use large floating cards, pill-shaped containers, 3D illustrations, glowing connectors or colorful gradients.**

The typography and content must be the primary visual elements.

## 2. Section content

Eyebrow:

WHAT WE DO

Heading:

**Everything your business needs.**
**Nothing it doesn't.**

Use the exact approved headline from the attached reference if it differs from the wording above. Do not invent a new headline.

Four services:

### 01 — Websites

Design and development of modern, fast, mobile-friendly websites that help turn visitors into customers.

### 02 — SEO & Local Visibility

Help local customers discover your business through search, Google Business Profile and a stronger online presence.

### 03 — Digital Advertising

Focused advertising campaigns designed to reach relevant customers and generate qualified inquiries.

### 04 — AI & Business Automation

Practical integrations and automations that reduce repetitive work and help your business run more efficiently.

Keep descriptions concise, natural and suitable for American small-business owners.

Do not introduce unverified performance claims or guarantees.

## 3. Desktop layout

At 1440px:

- Section eyebrow and heading at the top.
- Spacious two-column service grid.
- Two rows with two services each.
- Thin horizontal and vertical separators where appropriate.
- Consistent icon size and typography.
- Restrained background details that do not compete with the text.

Do not use four identical raised cards.

## 4. Mobile layout

At 320–390px:

- Single-column layout.
- Four services stacked vertically.
- Thin separators between services.
- Compact monochrome icons.
- Comfortable text sizes and line heights.
- Balanced vertical spacing.
- No horizontal overflow.
- No unnecessary decorative backgrounds.

Avoid excessive section height.

## 5. Elementor implementation

Build directly in the existing homepage using Elementor Atomic.

- Reuse existing global variables and classes.
- Use semantic headings and real editable text.
- Prefer CSS Grid and Flexbox.
- Use lightweight SVG icons if needed.
- Avoid unnecessary custom CSS.
- No new plugins, JavaScript libraries or animations.
- Do not create a standalone HTML prototype.

Inspect existing content before replacing anything.

Preserve working links and interactions.

## 6. Strict scope

Modify **only What We Do**.

Do not change:

- Hero
- The Big Picture
- Selected Work carousel
- How We Work
- Final CTA
- Header or footer
- Other pages
- Global typography or shared styles

Do not alter the approved Warm hybrid appearance of adjacent sections.

## 7. Verification

Test the actual Elementor implementation at:

320, 360, 375, 390, 768, 1024 and 1440px.

Verify:

- Visual correspondence with the reference
- Typography and alignment
- Spacing and dividers
- Icon consistency
- Mobile readability
- No clipping or horizontal overflow
- No unintended changes to adjacent sections

Capture desktop and mobile screenshots.

## 8. Publishing and documentation

The owner has approved this section's design direction.

After implementation and successful verification, publish the section on the protected homepage.

Clear Elementor and SiteGround caches.

Verify the published result in Chrome.

Preserve Coming Soon and `noindex`.

Document the implementation in a dedicated GitHub branch/PR.

Do not merge unrelated PRs.

## 9. Completion

Provide:

1. Published desktop screenshot.
2. Published mobile screenshot.
3. Summary of implementation.
4. Any deviations from the approved design.
5. GitHub commit / PR.
6. Confirmation that other sections remain unchanged.

**STOP after What We Do.**

Do not proceed to Selected Work, How We Work or other pages.

### Success criterion

A clean, premium, editorial-style services section that matches the approved reference and creates a calmer visual rhythm after the illustration-heavy Hero and The Big Picture.
## Reference copy and ordering

The approved image supplies the headline “Digital solutions for growing businesses.” and the introduction “We help local businesses get found, bring in more customers, and run their operations more efficiently.” Use the four service titles and descriptions above. On desktop the Websites and SEO entries form the left column, advertising and automation the right. On phones follow the brief’s service order.
