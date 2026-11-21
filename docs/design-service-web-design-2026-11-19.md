# ROBYLO — Website Design & Development page

| Record | Value |
| --- | --- |
| Status | **Proposed.** Submitted for owner review on 2026-11-19; not approved; not implemented. 9 claims awaiting owner confirmation. |
| Source | Claude Doc "ROBYLO — Website Design & Development page" (https://claude.ai/artifact/3gfLyPXQ2posEBvGs7eMxX), revision 14, 2026-11-19. Transcribed verbatim below. |
| WordPress | Website Design & Development, page 6203, /services/web-design/ (currently a one-hero skeleton from PR #19) |
| PR | None yet. Implementation waits for owner approval. |
| Related | [Services page concept](design-services-page-2026-11-19.md) · [Service-page architecture](design-service-pages-architecture-2026-11-19.md) |
| Outstanding | 9 claims requiring owner confirmation (last section). The owner reviews this page before SEO & Local Visibility is written. |

---

Nov 19, 2026 · @Vitalii

**The page's job:** convince a local business owner that ROBYLO builds websites that do real work, getting the call, the quote request or the booking, and that they can run and own the site long after launch.

- **Angle:** "Websites built to get the call. Not just to look good." This follows the Services hub ("Build it properly") and its first standard, "Built to work", and makes them specific to websites.
- **What it adds that no other page has:**
  - the signs it's time for a new site;
  - an honest fix / redesign / rebuild choice;
  - what a project includes;
  - an annotated "what a working site needs" diagram;
  - WordPress, Elementor and ownership explained plainly;
  - the website-specific process;
  - website FAQs.
- **Distinctive design:** a real Studio Plate in the hero, an annotated phone-page diagram as the page's signature section, and a step timeline. The other three service pages get their own signature section on the same template (see the next section).
- **Consistency:** the same terms and stance as Home, About and the Services hub. No team, no timelines, no prices, no guarantees.

Context checked on 2026-11-19: the Services hub is built from the final concept as an owner-review draft (PR #24, not merged). Its eight confirmation items are still open, including ownership, so the ownership copy here carries the same flag.

Status: **Proposed** for owner review. Nothing changed in WordPress or GitHub. Lines marked **[Confirm]** are listed at the end.

## Page architecture

Nine sections, in this order. URL: /services/web-design/ (page 6203, currently a one-hero skeleton).

| # | Section | Background | Layout family | Job |
| --- | --- | --- | --- | --- |
| 1 | Hero | White | Shared service hero + real Studio Plate | Positioning, who it's for, two CTAs |
| 2 | When it's time | #F5F5F5 | Rows + three-way choice | Signs a site is holding the business back; fix, redesign or rebuild |
| 3 | What a project includes | White | Four-column scope | What ROBYLO actually builds and delivers |
| 4 | How we build it | #F5F5F5 | **Signature: annotated phone diagram + numbered rows** | Usability, mobile, speed, SEO foundations, maintainability |
| 5 | Yours to run. Yours to own. | White | Large statement + three columns | WordPress, Elementor, ownership, long-term flexibility |
| 6 | How a website project runs | #F5F5F5 | Six-step horizontal timeline | The website-specific process |
| 7 | A website rarely works alone | White | Shared "works with" rows | Links to the other three services and to Work |
| 8 | Questions about websites | #F5F5F5 | Shared two-column FAQ, always open | Objections, before contact |
| 9 | Contact | Black | Shared homepage contact section | Conversion |

**Service-page template.** All four service pages share sections 1, 7, 8 and 9 so they read as one family. Each page gets its own middle sections and one signature section, so the pages don't look like copies:

| Page | Signature section (planned) | Hero visual |
| --- | --- | --- |
| Website Design & Development | Annotated phone page: "what a working site needs" | A real Studio Plate |
| SEO & Local Visibility | Annotated local search result: what Google looks at | Simple monochrome search-result wireframe, no fake business data |
| Digital Advertising | "From click to call": the tracked path of one inquiry | Path diagram |
| AI & Business Automation | Before / after of one routine workflow | Workflow diagram |

Only the Website row is specified in this document. The other three are directions for later pages, to be approved one at a time.

## Copy and visual direction, part 1

Publication-ready unless marked **[Confirm]**. Two-tone headings: the black first line and the gray second line sit in one heading element.

### 1 · Hero

- **Breadcrumb (small text link above the eyebrow):** Services → /services/
- **Eyebrow:** Website Design & Development
- **H1:** Websites built to get the call.
- **H1, gray line:** Not just to look good.
- **Intro:** WordPress websites for contractors, home service companies, cleaning companies, dental offices and other local businesses in Chicago and the suburbs. Clear on any phone, easy to update, and set up so customers know what to do next.
- **Primary button:** Talk about your website → /contact/
- **Text link:** See sites we've built → /work/
- **Visual:** the Chicago Mounting Studio Plate already used on the homepage (the same file, no new capture). Caption in 14 px gray: "Chicago Mounting · TV mounting and AV installation · Chicago, IL".
- **Desktop:** two halves. Left 6 columns: breadcrumb, eyebrow, H1 (display size), intro, button and text link. Right 6 columns: the Studio Plate at 4:3 (about 588 × 441) with the caption under it, top-aligned with the eyebrow.
- **Mobile:** text first, then the plate full width at 4:3, then the caption. The plate stays below the buttons so the CTA is visible without scrolling.

### 2 · When it's time

- **Eyebrow:** Signs
- **H2:** When it's time for a new website.
- **H2, gray line:** It's usually one of these.

**Signs (seven rows):**

- It looks dated next to the businesses you compete with.
- It's hard to read or use on a phone.
- People visit, but few call, request a quote or book.
- You can't change your hours, prices or photos without help.
- It's slow, or something breaks every time it's updated.
- The domain, hosting or logins belong to someone you can't reach.
- It doesn't describe the business you run today.

**Sub-heading (H3):** Fix, redesign or rebuild?

- **A few fixes (H4):** The site is mostly fine, but something specific isn't working: a form, a slow page, a missing service. We fix that and stop there.
- **A redesign (H4):** The business has outgrown the site, but the foundation is solid. New structure, design and content, built on what already works.
- **A new build (H4):** The site can't be maintained, isn't under your control, or no longer fits how you work. We build a new one and carry over what's worth keeping.

**Closing line:** Not sure which one you need? Send us the link. We'll tell you honestly, including when a few fixes are enough. → /contact/

- **Desktop:** #F5F5F5. Head in the 8 + 4 pattern. Signs as a two-column list of rows (four left, three right), each row 18–20 px / 500 with a 1 px top rule. Then 64 px space, the H3 "Fix, redesign or rebuild?", and three equal columns, each topped by a rule: H4 styled at 22 px / 600, plus text. The closing line sits under the three columns, with a text link.
- **Mobile:** signs as one column of rows; the three options stacked; closing line last.

### 3 · What a project includes

- **Eyebrow:** What you get
- **H2:** What a website project includes.
- **H2, gray line:** From the first plan to after launch.

| Column label | Items (native list) |
| --- | --- |
| Plan | Page structure: what each page needs to say and do · Service and area pages planned from the start · Your content gathered and organized |
| Design | Phone-first layouts in your brand · Clear call, quote and booking buttons · Real photos of your work where you have them |
| Build | WordPress development with Elementor · Forms that reach the right inbox · SEO basics: titles, descriptions, headings, sitemap · Analytics and form tracking **[Confirm]** |
| Launch and after | Testing on phones and desktop before launch · Redirects from old pages when a site is replaced · A walkthrough of how to edit your site **[Confirm]** · Care and updates through Ongoing Support **[Confirm]** |

**Note under the columns (16 px gray):** We help shape the structure and write or edit the page copy with you. **[Confirm]** The exact pages and features are agreed in the scope before work begins.

- **Desktop:** white. Head in the 8 + 4 pattern. Four equal columns, each topped by a 1 px rule: the label at 14 px / 600, then the native list (16 px, 12 px between items). The note spans the first 8 columns below.
- **Mobile:** four stacked groups, each with its rule and label. The note last.

## Copy and visual direction, part 2

### 4 · How we build it (signature section)

- **Eyebrow:** How we build it
- **H2:** What a working website needs.
- **H2, gray line:** Five things we build in from the start.

| # | H3 | Text | Marker on the diagram |
| --- | --- | --- | --- |
| 1 | Clear at a glance. | Visitors should see what you do, where you work and how to reach you without hunting for it. Plain words, a simple menu, readable text, and one obvious next step on every page. | Headline area |
| 2 | Built for the phone first. | We design the phone version first, then the desktop. Buttons are big enough to tap, phone numbers dial with one tap, and forms ask only for what you need. | Call button |
| 3 | Fast to load. | Compressed images, light pages and only the add-ons the site needs. We check loading speed before launch on a phone connection, not just on office Wi-Fi. | Photo block |
| 4 | Ready for Google. | Clean page structure, proper titles and headings, a page for each service and area you serve, and a sitemap Google can read. It's the foundation that [local SEO](/services/local-seo/) builds on. | Services list |
| 5 | Easy to keep current. | Built from a small set of reusable sections and site-wide styles, so a change in one place doesn't break another and updates stay routine. | Repeated section blocks |

**Signature visual: annotated phone page (static image asset)**

- **What it shows:** a simplified, generic local-service homepage on a phone screen, top to bottom: header with a logo block and menu, headline lines with a button, a photo block, a list of three service rows, a review strip, and a footer. Gray placeholder bars only: no real or fake business names, text, prices or reviews.
- **Style:** 1.5 px #000 lines on #F5F5F5, fills #FFFFFF and #D6D6D6, screen corner radius 28 px. No device frame, matching the Studio Plate rule. Five numbered markers (28 px black circles, white Manrope 600 numerals) placed on the elements listed in the table. The markers sit outside the screen edge, joined by 1 px leader lines.
- **Asset:** SVG or a 2× PNG/WebP, about 400 × 800 at 1×. Claude can draw it on request; Work places it as a normal image. No interactive hotspots.
- **Alt text:** "Diagram of a phone-sized website page with five numbered parts: headline, call button, photo, services list and reusable sections."
- **Desktop:** #F5F5F5. Head in the 8 + 4 pattern. Below, the diagram in the left 5 columns, top-aligned. Five rows in the right 7 columns, each with a 1 px top rule: the numeral (14 px / 600, gray) on its own line, then H3 (22 px / 600) and text (16 px). The numerals match the diagram markers; that is the only reason this section uses numbers.
- **Mobile:** head, then the diagram full width (max 320 px), then the five rows stacked.

### 5 · Yours to run. Yours to own.

- **Eyebrow:** Ownership
- **H2:** Yours to run.
- **H2, gray line:** Yours to own.
- **Lead statement (24 px / 500):** A website is a business asset. You should be able to update it, know who has access, and take it with you if you ever need to.

| H3 | Text |
| --- | --- |
| Built on WordPress. | One of the most widely used website platforms, so you're never dependent on a single developer. If you ever work with someone else, they'll know how the site is built. |
| Edited with Elementor. | A visual editor for changing text, photos and pages without code. We set it up with your fonts, colors and page sections, so new pages match the rest of the site. |
| Set up in your name. | Your domain, hosting account, WordPress admin and Google accounts are in your name, with full access for you. If you move on, the site and everything behind it go with you. **[Confirm]** |

- **Desktop:** white. H2 in the left 8 columns at section size. The lead statement below it, across 8 columns, in near-black. Then 56 px space and three equal columns, each topped by a 1 px rule: H3 (22 px / 600) plus text (16 px). The large statement is what sets this section apart from the rows above.
- **Mobile:** H2, lead statement (20 px), then three stacked blocks.

## Copy and visual direction, part 3

### 6 · How a website project runs

- **Eyebrow:** Process
- **H2:** How a website project runs.
- **H2, gray line:** Six steps, no surprises.

| Step label | H3 | Text |
| --- | --- | --- |
| 01 | Talk. | We start with your business: what you offer, who your customers are, and what isn't working now. You talk directly with the person who will build the site. |
| 02 | Plan. | We agree on the pages, what each one needs to do, and the scope, before any work begins. |
| 03 | Gather content. | You share what you know: services, areas, photos, reviews. We shape it into clear pages and fill the gaps with you. **[Confirm]** |
| 04 | Design. | You see the key pages on a phone and on desktop before the full build. Changes happen here, while they're easy. **[Confirm]** |
| 05 | Build and check. | We build in WordPress, connect the forms, and test every page, form and button on phones and desktop. |
| 06 | Launch. | We launch, redirect old pages if there was a site before, and show you how to edit it. Ongoing Support is there if you want help after that. |

- **Text link under the steps:** How every ROBYLO project works → /approach/
- **Desktop:** #F5F5F5. Head in the 8 + 4 pattern. A horizontal timeline: six equal columns across the 1200 container, joined by one continuous 1 px rule along the top. Each column has the step label (14 px / 600, gray), H3 (20 px / 600) and text (15 px). At 1024 px it becomes three columns by two rows.
- **Mobile:** a vertical list. A 1 px rule runs down the left edge, with the step label, H3 and text indented beside it.

### 7 · A website rarely works alone

- **Eyebrow:** Works well with
- **H2:** A website rarely works alone.
- **H2, gray line:** Here's what it usually connects to.

| Link (H3) | Text |
| --- | --- |
| SEO & Local Visibility → /services/local-seo/ | The site gives Google the right pages. Local SEO helps those pages, and your Google Business Profile, show up in Search and on Maps. |
| Digital Advertising → /services/digital-advertising/ | Ads need a page that turns a click into a call. We build landing pages that match each campaign. |
| AI & Business Automation → /services/ai-automation/ | Forms and calls from the site can go straight into your calendar, CRM or inbox, with an automatic first reply. **[Confirm]** |
| See sites we've built → /work/ | Six live sites for businesses across the Chicago area. |

- **Desktop:** white. Head in the 8 + 4 pattern, then four rows with 1 px top rules: the link as H3 (22 px / 600 + →) in the left 5 columns, the text in the right 7. Same row family as the Services hub problem rows.
- **Mobile:** each row stacks the link, then the text.

### 8 · Questions about websites

- **Eyebrow:** FAQ
- **H2:** Questions about websites.
- **H2, gray line:** Straight answers.

| Question (H3) | Answer |
| --- | --- |
| How long does a new website take? | It depends on how many pages you need and how ready your content is. You'll get an estimated timeline with the scope, before work begins. **[Confirm]** |
| How much does a website cost? | Every site is scoped to what your business needs, so there's no fixed price list. You'll know the cost before any work starts. **[Confirm]** |
| Will a redesign hurt my Google rankings? | Nobody can promise rankings. What we can do is keep page addresses where it makes sense and redirect old pages to the new ones, so the search visibility you've built isn't thrown away. |
| Do I have to write all the content? | No. You know the business; we'll ask the right questions and turn the answers into clear pages. You review everything before it goes live. **[Confirm]** |
| Can I update the site myself? | Yes. The site is built in Elementor, so you can change text, photos and simple pages yourself, and we'll show you how. Bigger changes can be part of Ongoing Support. **[Confirm]** |
| My site isn't on WordPress. Can you still help? | Yes. We can rebuild it in WordPress as part of a redesign, or tell you if your current platform already does what you need. |

- **Text link:** More questions → /faq/
- **Desktop:** #F5F5F5. Head in the 8 + 4 pattern. Two columns of three Q&A pairs, each pair topped by a 1 px rule: the question as H3 (19–20 px / 600), the answer in 16 px. All answers are visible: no accordion, no JavaScript.
- **Mobile:** one column, six pairs.

### 9 · Contact

- **H2:** Let's look at your website.
- **H2, gray line:** Or the one you haven't built yet.
- **Body:** Send the link, or tell us what you have in mind. You'll get an honest read on whether it needs a few fixes, a redesign or a new build.
- **Button:** Talk about your website → /contact/
- **Text link:** info@robylo.com → mailto:info@robylo.com
- **Desktop and mobile:** the homepage's black contact section, unchanged except for this copy.

## Heading hierarchy

One H1. Eyebrows, the breadcrumb, the signs list, column labels and step labels are paragraphs, not headings.

- H1: Websites built to get the call. Not just to look good.
  - H2: When it's time for a new website. It's usually one of these.
    - H3: Fix, redesign or rebuild?
      - H4: A few fixes · A redesign · A new build *(set as H3 visually if the system has no H4 style; keep the semantic H4)*
  - H2: What a website project includes. From the first plan to after launch.
  - H2: What a working website needs. Five things we build in from the start.
    - H3: Clear at a glance. · Built for the phone first. · Fast to load. · Ready for Google. · Easy to keep current.
  - H2: Yours to run. Yours to own.
    - H3: Built on WordPress. · Edited with Elementor. · Set up in your name.
  - H2: How a website project runs. Six steps, no surprises.
    - H3: Talk. · Plan. · Gather content. · Design. · Build and check. · Launch.
  - H2: A website rarely works alone. Here's what it usually connects to.
    - H3: SEO & Local Visibility · Digital Advertising · AI & Business Automation · See sites we've built
  - H2: Questions about websites. Straight answers.
    - H3: the six questions
  - H2: Let's look at your website. Or the one you haven't built yet.

If the Atomic system has no H4 style, style the three option headings like the other H3s while keeping H4 semantics.

## CTAs and internal links

**Primary CTA:** "Talk about your website" → /contact/, in the hero and the final section (button component 5864). **Secondary CTA:** "See sites we've built" → /work/, as a hero text link and in section 7. **Soft CTA:** "Send us the link" → /contact/, in the section 2 closing line, for visitors who already have a site.

| Destination | Count | Where | Anchor text |
| --- | --- | --- | --- |
| /contact/ | 3 | Hero button; section 2 closing line; final button | Talk about your website / Send us the link |
| /work/ | 2 | Hero text link; section 7 row | See sites we've built |
| /services/local-seo/ | 2 | Section 4, item 4 (inline); section 7 row | local SEO / SEO & Local Visibility |
| /services/digital-advertising/ | 1 | Section 7 row | Digital Advertising |
| /services/ai-automation/ | 1 | Section 7 row | AI & Business Automation |
| /services/ | 1 | Breadcrumb above the eyebrow | Services |
| /approach/ | 1 | Under the process timeline | How every ROBYLO project works |
| /about/ | 1 | Section 6, step 01: link the words "the person who will build the site" | the person who will build the site |
| /faq/ | 1 | Under the FAQ | More questions |
| mailto:info@robylo.com | 1 | Final section | info@robylo.com |

**Links into this page (for Work to check):**

- The Services hub already links here from the index, problem 2, the Website block and two pairings.
- The homepage service row "Website Design & Development" should link here too, if it doesn't already.
- Future case pages under /work/ should link here when the project was a website build.

## SEO

| Item | Final | Length |
| --- | --- | --- |
| SEO title | Website Design & Development in Chicago \| ROBYLO | 48 characters |
| Meta description | WordPress websites for Chicago-area contractors, home service, cleaning and dental businesses. Clear on any phone, easy to update, ready for Google. | 148 characters |
| URL | /services/web-design/ (unchanged) | — |
| Indexing | noindex until launch, as set in PR #19 | — |

- The H1 is the brand line. The search terms ("website design", "Chicago") sit in the title, meta description, eyebrow and intro, the same trade-off approved for the Services hub.
- The FAQ is visible text in plain question-and-answer form. FAQ schema is optional later through AIOSEO; it is not needed for launch.
- Image alt text: the Studio Plate uses "Chicago Mounting website shown on desktop and phone"; the diagram uses the alt text given in section 4.
- No ranking, traffic or result claims anywhere on the page.

## Claims requiring owner confirmation

Work can build the full page now. Each line below goes live only after the owner confirms it, or edits or removes it. If a line can't be confirmed, delete it rather than soften it.

- [ ] **Set up in your name** (section 5): domain, hosting account, WordPress admin and Google accounts are in the client's name with full access, and everything goes with the client if they leave. Same open item as "Yours to own" on the Services hub.
- [ ] **Hosting:** is hosting set up in the client's own account, or provided by ROBYLO? The answer may change the wording of section 5 and adds one FAQ.
- [ ] **Copywriting** (section 3 note, step 03, FAQ 4): ROBYLO helps write or edit page copy, and clients review it before launch.
- [ ] **Analytics and form tracking** are set up as part of a website build (section 3, Build).
- [ ] **Walkthrough after launch** (section 3, step 06, FAQ 5): clients are shown how to edit their site.
- [ ] **Care and updates through Ongoing Support** (section 3): same as the Services hub item.
- [ ] **Design review before the full build** (step 04): clients see key pages before the build.
- [ ] **Timeline estimate and price before work starts** (FAQ 1 and 2): both are given with the scope.
- [ ] **Automatic first reply** (section 7, Automation row): same as the Services hub item.

Confirmed or factual, no approval needed: the four service names and URLs; One-Time Projects with an agreed scope; Ongoing Support; the six live projects on /work/; the use of the Chicago Mounting plate already shown on the homepage; WordPress and Elementor as the platform; the redirect and no-ranking-promise wording.

## 2026-11-19 — Owner-review composition with existing assets

**Scope authorized.** Apply the [visual design and placeholder workflow](ROBYLO-CONCEPT.md#visual-design-and-placeholder-workflow) to WordPress page 6203. The existing nine sections and their copy form the content baseline. Preserve all links, confirmation markers, SEO fields, the contact CTA and global footer. Composition approval is pending. See [PR #25](https://github.com/vvvetalll/robylo-website-starter/pull/25) for the earlier implementation.

- Keep the Chicago Mounting Studio Plate in the hero and the existing annotated phone-page illustration in the signature section.
- Clarify the fix, redesign and rebuild comparison with three equal charcoal panels. Use the existing charcoal token, white headings and softer light-gray descriptions. Keep the seven signs and their reading order.
- Give the four project scope groups a shared editorial composition alongside one clearly labeled, replaceable **Design review preview** placeholder at 4:3. Use a 2×2 scope group grid on larger screens and one column on mobile.
- Pair the existing Work reference with the already approved real GCPRO Restoration Studio Plate, following the related services in the existing section. Keep the existing Work destination and image proportions.
- Review with Coming Soon and noindex active. Final artwork for the design review slot remains pending owner approval.
- Keep the existing Hero and final CTA actions. Use the established text-link treatment with a subtle right arrow for the standalone Approach and FAQ links in content. Preserve their existing destinations.

## 2026-11-19 — Targeted visual refinement

**Owner-authorized scope for review.** Refine four existing sections in Elementor page 6203, using the approved Services page as a reference for visual rhythm. Retain the nine-section order, approved content and links, all unresolved review markers, page hierarchy, SEO settings, Coming Soon, and the existing Hero, Chicago Mounting, signature phone illustration, GCPRO Studio Plate, FAQ, CTA and footer.

- Give the existing fix, redesign and rebuild choices a more generous graphite card layout with white headings and readable light-gray descriptions. Stack the three cards on phones.
- Give each of the four project stages one neutral, separately replaceable icon slot and a clearer text hierarchy. Arrange them in two spacious columns with two stages per row on larger screens and one column on phones.
- Present the six existing process steps as a spacious numbered grid. Use three columns on desktop, two on tablet and one on phones, with prominent numbers and no connecting line.
- Arrange the ownership text as a single editorial column beside a neutral 4:3 website editing preview. Reuse the existing review slot from Scope, where the four icon slots now serve as visual anchors. Stack ownership text and preview on phones.
- Use approved Atomic styles and placeholder-only elements. Final icons and preview artwork remain pending owner approval.

### FAQ interaction update

**Owner-authorized refinement.** This supersedes the earlier open Q&A presentation for page 6203. Keep the FAQ heading, section background, six exact questions and answers, all review markers, and the existing link below the questions. Use Elementor's native Atomic Accordion with all rows initially collapsed, one open answer at a time, whole-row activation, plus and minus indicators, subtle dividers and visible keyboard focus. Leave SEO settings and FAQ schema unchanged. Verify with mouse, touch, Enter and Space on the rendered preview.

## November 21 refinement

The owner’s refinement brief updates the earlier page plan. Keep the existing hero, case image and alt text. Remove its caption. Use eight sections in this order: Hero, Signs, Anatomy, Project process, Ownership, Related services, FAQ and Final CTA.

- Signs keeps all seven symptoms. Rename it “Signs your website needs work.” The three choices use the kit’s paper, line and radius tokens. Keep the diagnostic contact link.
- Anatomy keeps all five points and the phone media. Use a soft frame and visually consistent native numbered indicators. Keep the original phone layout and number artwork in a page-only copy. Remove the five connector strokes and let the native frame supply the surface.
- Project process consolidates delivery scope and timeline into Plan the site, Design the pages, Build and test, and Launch the website. Cover service areas, content and photo inputs, mobile layouts, calls and quote/book paths, Elementor, form routing, page titles/headings/sitemap, functional checks and redirects when replacing a site. Keep the About and Approach links.
- Ownership retains the approved positioning and platform capabilities. The native “Your accounts” panel lists Domain, Hosting, WordPress admin and Google accounts as scoping topics. Specific account ownership, credential handoff, hosting, analytics, training and support commitments require separate approval.
- Related services retains its heading and replaces the old proof row and separate linked headings with three full-row links to Local SEO, Digital Advertising and AI & Business Automation. Remove the extra portfolio screenshot, caption, CTA, site count and unconfirmed automatic replies.
- FAQ keeps the six native items. Use scoped answers about time, cost, content and editing. Keep the useful SEO and WordPress answers. Remove visible editorial markers and unapproved commitments. The accordion eyebrow reads “Common questions” using the existing shared class. Keep the dark final CTA and balance its wrapping at desktop widths.

Reuse the active kit and existing contact component. Verify the protected frontend in Chrome from 320px through 1920px, including links, accordion, focus, touch, viewport overflow and neighbouring routes. See the existing implementation and verification records for results.
