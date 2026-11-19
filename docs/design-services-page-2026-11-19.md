# ROBYLO — Services page concept

| Record | Value |
| --- | --- |
| Status | **Direction approved by the owner (2026-11-19); copy awaiting 8 owner confirmations.** Implemented as an owner-review draft, not published. |
| Source | Claude Doc "ROBYLO — Services page concept" (https://claude.ai/artifact/Kgw42rU96Et8VSANq2afKM), final revision 21, 2026-11-19. Transcribed verbatim below. |
| History | First draft 2026-11-19 ("Start with the problem"); the owner approved the direction and sent a refinement brief the same day (six problems, quality standards, the positioning line "Solve the right problem. Build it properly.", the confirmed engagement formats). This file holds the final, refined version. The first draft was replaced inside the same Claude Doc and is not preserved separately. |
| WordPress | Services, page 6191, /services/ |
| PR | #24 "Implement the ROBYLO Services hub draft" (owner-review draft; stacks on #19; not merged) |
| Outstanding | 8 claims requiring owner confirmation, listed in the last section. Do not publish them before confirmation. |

---

Nov 19, 2026 · @Vitalii

**Final version for handoff to ChatGPT Work.** The "Start with the problem" direction is approved; this version adds the owner's refinements. The copy in "Final copy" is publication-ready except the lines marked **[Confirm]**, which are listed at the end.

What changed from the first draft:

- **Hero H1 is now the positioning line, "Solve the right problem. Build it properly."** The page then pays off both halves: the problems section answers the first, a new *What "properly" means* section answers the second.
- **Six problems now match the owner's list** and the target customers: home services, contractors, cleaning companies, dental offices.
- **One new section with four build standards:** Built to work, Easy to manage, Yours to own, Made to last. They are written as practices, not guarantees.
- **Engagement formats use the confirmed names:** One-Time Projects and Ongoing Support.
- Architecture, service names and the four service pages are unchanged. Six blocks in total; no other sections added.

Status: **final draft for approval.** Nothing was changed in WordPress, Elementor or GitHub.

## What was reviewed

All four PRs are open and none is merged. Each is staged behind Coming Soon, so nothing below is public. Anonymous visitors to robylo.com still get Coming Soon, so this review relies on the repo docs and QA evidence.

| Source | Status | What it means for Services |
| --- | --- | --- |
| PR #18, ROBYLO-CONCEPT.md "Approved homepage positioning and final copy" | Owner-approved copy, staged | Homepage already has the four service rows (name, three scope items, one line). Do not repeat them. |
| PR #19, current-implementation.md | Staged skeleton | /services/ (6191) has an H1, the intro "Explore four areas of expertise: websites, local search, advertising, and automation." and four links. Child pages: /services/web-design/, /services/local-seo/, /services/digital-advertising/, /services/ai-automation/, each with one hero only. |
| PR #20 | Staged | Homepage How We Work uses large numerals. |
| PR #21, verification.md "About page" | Owner's About copy, staged | About now covers founder-led work and "no disconnected pieces". Four principles: one point of contact, connected tools, needs not features, personal accountability. Do not restate them. |
| ROBYLO-CONCEPT.md (business approach) | Working notes | Monthly retainers plus separately scoped projects; no invented results; sell outcomes, not technologies. |

Not verified: the rendered Services skeleton itself (behind login); the owner's final scope for each service.

## Current Services positioning: assessment

The four services are well chosen and well described on the homepage. The Services page skeleton is only a directory, and it does not yet help an owner choose.

**What works**

- The four categories match how a small-business owner thinks about the problem: my website, showing up on Google, paid ads, and my time.
- Homepage descriptions are concrete and safe ("make it easy to call, book or buy", "reports you can read").
- The architecture is clean: one hub and four child pages with readable slugs.

**Gaps**

- **No help choosing.** The skeleton lists four links. An owner with a problem ("nobody calls") has to translate it into a service name alone.
- **"They work together" is only stated, never shown.** Homepage, Big Picture and About all say the services are connected, but no page says *which* services connect *how*.
- **No way to buy.** The business model is monthly retainers plus scoped projects, but nothing on the site says whether you can hire ROBYLO for one job or for ongoing help.
- **Scope is thin.** Three scope items per service is enough for a homepage, not for choosing.

**Architecture decisions**

- **Keep four services; add no fifth page now.** "Ongoing support" from the concept doc is a way of working across all four, so it gets a section on this page, not its own page.
- **Keep the site's names.** The brief says "Web Design & Development" and "Local SEO"; the site and homepage say "Website Design & Development" and "SEO & Local Visibility". Changing them now would create mismatched titles across nav, homepage and slugs for no gain. The short forms work as link labels.
- **Avoid a hub that is a longer homepage.** Each section must add information the homepage does not have.

## Final page structure

| # | Section | Background | Job |
| --- | --- | --- | --- |
| 1 | Hero: Solve the right problem. Build it properly. | White | State the stance, who it's for, and link to all four service pages |
| 2 | What's getting in the way? | #F5F5F5 | Six owner problems, each matched to a service ("the right problem") |
| 3 | What each service covers | White | Scope and pairings for the four services |
| 4 | What "properly" means | #F5F5F5 | Four build standards ("build it properly") |
| 5 | Two ways to work together | White | One-Time Projects or Ongoing Support |
| 6 | Not sure where to start? | Black | Contact |

**Where "Solve the right problem. Build it properly." goes: the hero H1.** It has the strongest effect there for three reasons:

- It describes this page's own structure: section 2 is "the right problem", section 4 is "properly". Used as the H1, it works as a promise the page then keeps. Anywhere else it would be a slogan.
- It is distinct from the homepage ("Hard to find?") and About ("Independent on purpose"), so each main page opens with its own idea.
- It speaks to the two fears owners of local service businesses commonly have with agencies: being sold the wrong thing, and getting something that breaks. *Judgement, not research.*

**Trade-off:** the H1 no longer contains "services" or "Chicago". This is compensated by:

- the eyebrow "Services · Chicago & suburbs";
- the intro sentence;
- the four service names directly under it;
- the SEO title and meta description, which carry more weight than the H1.

**Overlap check:** About already says "The right solution starts with understanding the problem". The H1 is a short brand line, not a repeat of that paragraph, and none of About's four principles are reused. The build standards are about the *work*; About's principles are about the *relationship*.

## Final copy

Publication-ready unless marked **[Confirm]**. Two-tone headings: the black first line and the gray second line sit in one heading element.

### 1 · Hero

- **Purpose:** state the stance, who it's for, and give a direct path to each service.
- **Eyebrow:** Services · Chicago & suburbs
- **H1:** Solve the right problem.
- **H1, gray line:** Build it properly.
- **Intro:** Websites, local search, ads and automation for local service businesses in Chicago and the suburbs, from contractors and cleaning companies to dental offices.
- **Primary button:** Talk about your project → /contact/
- **Text link:** Not sure which one you need? ↓ → #where-to-start
- **Service index (four links):**
  - Website Design & Development → /services/web-design/
  - SEO & Local Visibility → /services/local-seo/
  - Digital Advertising → /services/digital-advertising/
  - AI & Business Automation → /services/ai-automation/
- **Desktop:** H1 in the left 8 columns at display size; eyebrow above it. Intro, button and text link in the right 4 columns, top-aligned. Below, a full-width row of four equal columns, each topped by a 1 px rule: service name at 18–20 px / 600 + →, and the whole cell is the link.
- **Mobile:** eyebrow, H1 (36 px, two lines), intro, button, text link, stacked. The index becomes four full-width rows of at least 48 px, separated by rules.

### 2 · What's getting in the way?

- **Purpose:** match an owner's problem to the right service.
- **Section ID:** where-to-start
- **Eyebrow:** Where to start
- **H2:** What's getting in the way?
- **H2, gray line:** Start there. We'll match the service.
- **Intro:** Contractors, cleaning companies, dental offices, home service pros. The details differ, but the problem usually sounds like one of these.

| Problem (large text) | Service link | Line under the link |
| --- | --- | --- |
| Customers can't find us on Google. | SEO & Local Visibility | When someone nearby searches for what you do, you should show up in Search and on Maps. We start with your Google Business Profile and the pages Google needs to understand your services and area. |
| Our website looks outdated, and it doesn't bring in enough calls. | Website Design & Development | A site that explains what you do in plain words and makes it easy to call, request a quote or book from a phone. |
| We're spending money on ads and can't tell what's working. | Digital Advertising | Call and form tracking ties each inquiry to where it came from, so you can see what your budget is doing. |
| We miss customers because we can't get back to them fast enough. | AI & Business Automation | An automatic first reply and a reminder to follow up, so new inquiries hear back even while you're on a job. **[Confirm]** |
| Too much admin work is still done by hand. | AI & Business Automation | Scheduling, intake, reminders and data entry handled automatically, with you still in control of the decisions. |
| Our business tools don't talk to each other. | AI & Business Automation | Website forms, calendar, CRM, email and spreadsheets connected, so information goes where it's needed without retyping. |

- **Desktop:** #F5F5F5. Head in the 8 + 4 pattern. Six rows separated by 1 px rules. Left 7 columns: the problem at 22–24 px / 600, set as a paragraph, not a heading. Right 5 columns: the service link (16 px / 600 + →), with the line under it (15–16 px, gray).
- **Mobile:** each row stacks: problem (20 px / 600), link, line. 24 px between rows.

### 3 · What each service covers

- **Purpose:** enough scope to choose, and concrete pairings that show how the services connect.
- **Eyebrow:** The services
- **H2:** What each service covers.
- **H2, gray line:** And what it works best with.

**Website Design & Development** (H3)

- **For:** businesses whose site is outdated, slow, hard to update, or not turning visitors into calls.
- **Includes:** New websites and redesigns · Page structure and copy that explain your services · WordPress development · Pages built for phones first · Care and updates after launch **[Confirm]**
- **Works well with SEO & Local Visibility:** service and area pages are planned into the site from the start, not added later.
- **Links:** Website design & development → /services/web-design/ · See sites we've built → /work/

**SEO & Local Visibility** (H3)

- **For:** businesses that are good at what they do but hard to find on Google Search and Maps.
- **Includes:** Google Business Profile setup and cleanup · Service and area pages · Technical SEO fixes · Review requests from happy customers **[Confirm]**
- **Works well with Website Design & Development:** Google shows pages, so the site needs the right pages to show.
- **Link:** SEO & local visibility → /services/local-seo/

**Digital Advertising** (H3)

- **For:** businesses that need inquiries sooner, or more of one specific service or area.
- **Includes:** Google Ads setup and management · Landing pages built for each campaign · Call and form tracking · Plain-language reports **[Confirm]**
- **Works well with SEO & Local Visibility:** ads bring calls while they run; local search builds visibility that doesn't stop when the budget does.
- **Link:** Digital advertising → /services/digital-advertising/

**AI & Business Automation** (H3)

- **For:** businesses losing hours to admin, slow replies, or tools that don't share information.
- **Includes:** Automatic replies and follow-up reminders · Scheduling and intake steps · Connecting the tools you already use · AI assistants for routine questions **[Confirm]**
- **Works well with Website Design & Development and Digital Advertising:** every form and call they bring in goes straight to the right place, and nobody copies it by hand.
- **Link:** AI & business automation → /services/ai-automation/

**Layout for section 3**

- **Desktop:** white. Four blocks separated by 1 px rules, each in three columns. Left 4: H3 (24 px / 600), the For line (16 px, gray), the page link. Middle 4: "Includes" label (14 px, gray) and a native list, one item per line. Right 4: "Works well with" label and the pairing sentence; the paired service name is a link. No numerals.
- **Mobile:** each block stacks: H3, For, Includes, Works well with, then the page link last as a full-width 48 px tap target. 40 px between blocks.

### 4 · What "properly" means

- **Purpose:** show how carefully ROBYLO builds, in practical terms an owner can check.
- **Eyebrow:** How we build
- **H2:** What "properly" means.
- **H2, gray line:** Four standards for everything we build.

| Standard (H3) | Text |
| --- | --- |
| Built to work. | How it works matters as much as how it looks. Forms reach the right inbox, tracking records real calls, and pages load quickly on a phone. We check that before handing anything over. |
| Easy to manage. | You should be able to change your hours, prices or photos without calling anyone. We keep setups simple and show you how to handle everyday updates yourself. **[Confirm]** |
| Yours to own. | Your domain, website, Google Business Profile and ad accounts are set up in your name, with full access for you. If you ever work with someone else, nothing is held back. **[Confirm]** |
| Made to last. | Fewer add-ons, fewer moving parts, standard tools. Simple setups break less often and are easier for anyone to maintain later. |

- **Desktop:** #F5F5F5. Head in the 8 + 4 pattern. A 2 × 2 grid of four blocks, each topped by a 1 px rule: H3 (24 px / 600) and text (16 px). No icons, cards or numerals.
- **Mobile:** four stacked blocks, each with its top rule. H3 at 20 px.

### 5 · Two ways to work together

- **Purpose:** show both engagement formats so an owner can start small.
- **Eyebrow:** How to start
- **H2:** Two ways to work together.
- **H2, gray line:** Start with a project, or keep improving every month.

**One-Time Projects** (H3)
A defined project with an agreed scope and deliverables: a new website, a Google Business Profile cleanup, an ad campaign setup, or a single automation. You know what's included before work begins.

**Ongoing Support** (H3)
Monthly help with maintenance, optimization and continued improvement: website care and updates, local SEO, ad management, and refining the tools you already use. **[Confirm the examples]**

- **Text link:** Talk about what you need → /contact/
- **Desktop:** white. Head in the 8 + 4 pattern, then two equal columns, each topped by a 1 px rule, with H3 and text. The text link sits below the left column.
- **Mobile:** two stacked blocks, then the text link.

### 6 · Not sure where to start?

- **Purpose:** convert visitors who are still undecided.
- **Eyebrow:** none, matching the homepage contact section
- **H2:** Not sure where to start?
- **H2, gray line:** Describe the problem.
- **Body:** Tell us what's not working: the calls, the site, the hours lost to admin. You'll get a straight answer on what to fix first and what can wait.
- **Button:** Start a conversation → /contact/
- **Text link:** info@robylo.com → mailto:info@robylo.com
- **Desktop and mobile:** reuse the homepage's black contact section exactly, with this copy.

## SEO

| Item | Final | Length |
| --- | --- | --- |
| SEO title | Websites, Local SEO, Ads & Automation in Chicago \| ROBYLO | 57 characters |
| Meta description | Websites, local SEO, Google Ads and automation for Chicago-area contractors, home service, cleaning and dental businesses. Start with the problem. | 146 characters |
| URL | /services/ (unchanged) | — |
| Indexing | noindex until launch, as set in PR #19 | — |

**Heading hierarchy (one H1)**

- H1: Solve the right problem. Build it properly.
  - H2: What's getting in the way? Start there. We'll match the service.
  - H2: What each service covers. And what it works best with.
    - H3: Website Design & Development · SEO & Local Visibility · Digital Advertising · AI & Business Automation
  - H2: What "properly" means. Four standards for everything we build.
    - H3: Built to work. · Easy to manage. · Yours to own. · Made to last.
  - H2: Two ways to work together. Start with a project, or keep improving every month.
    - H3: One-Time Projects · Ongoing Support
  - H2: Not sure where to start? Describe the problem.

Eyebrows and the six problems are paragraphs, not headings. "Chicago" appears in the eyebrow, intro, title and meta only; no city lists, rankings, results or certifications.

## Internal links and CTA strategy

Every visitor gets three ways forward: straight to a service page, find the service through their problem, or contact. Contact is never more than one screen away.

| Destination | Links on this page | Where | Anchor text |
| --- | --- | --- | --- |
| /services/web-design/ | 5 | Hero index; problem 2; own block; pairings in the SEO and Automation blocks | Website Design & Development / Website design & development → |
| /services/local-seo/ | 5 | Hero index; problem 1; own block; pairings in the Website and Ads blocks | SEO & Local Visibility / SEO & local visibility → |
| /services/digital-advertising/ | 4 | Hero index; problem 3; own block; pairing in the Automation block | Digital Advertising / Digital advertising → |
| /services/ai-automation/ | 5 | Hero index; problems 4, 5 and 6; own block | AI & Business Automation / AI & business automation → |
| /contact/ | 3 | Hero button; section 5 link; final CTA button | Talk about your project / Talk about what you need / Start a conversation |
| /work/ | 1 | Website block | See sites we've built → |
| #where-to-start | 1 | Hero text link | Not sure which one you need? ↓ |

Rules:

- Anchor text always names the destination; no "Learn more" or "Click here".
- The pairing sentences in section 3 link the *paired* service name, so connections also work as navigation.
- One primary (black) button per section at most. Everything else is a text link in the existing link style.
- No link to /approach/ or /about/ in the body; the header and footer already carry them.

**Conversion path:** an undecided visitor goes from the hero, to a problem row, to a service page, to Contact. A decided visitor goes from the hero index to a service page, to Contact. A visitor ready to talk uses the hero button or the final CTA.

## Services hub vs the four service pages

The hub helps the owner choose. The service page helps them decide to contact ROBYLO about that one service.

| Topic | Services hub (/services/) | Individual service page |
| --- | --- | --- |
| Goal | Pick the right service | Understand one service well enough to get in touch |
| Problems | Six problems across all services, one line each | The 3–5 problems this service solves, explained in more depth |
| Scope | One-line list of what's included | Each item explained: what it is, what the owner gets, what it doesn't include |
| Connections | One pairing sentence per service | A short section on how this service uses the others, with links |
| Process | Not covered (the /approach/ page covers it) | Only the steps specific to this service, e.g. what an ads setup involves |
| Proof | One link to /work/ | Relevant projects only, when verified for that service |
| Questions | None | Service-specific FAQ, which can also feed /faq/ |
| Pricing | None | None for now; owner decision pending |
| CTA | General: "Start a conversation" | Specific, e.g. "Ask about your Google Business Profile" |

Rule: if a sentence is needed on a service page, it should not be on the hub, and vice versa. The hub's one-liners are summaries, never copies of the service page's opening.

## Implementation notes for ChatGPT Work

Everything is buildable with native Atomic elements and the existing system. No new plugin, JavaScript, PHP, tokens or components are needed.

- **Page:** /services/ (6191). Replace the skeleton body; keep the shared header, footer and mobile popup.
- **Sections:** Base section component 5869 or the existing rb-section + l-container classes. Alternate the backgrounds: white (hero), #F5F5F5 (problems), white (services), #F5F5F5 (build standards), white (two ways to work), black (CTA). The 2 × 2 standards grid uses the existing grid and rule classes; no new card component.
- **Heads:** the existing two-tone heading pattern and the 8 + 4 head layout from the homepage section heads. H2 at 44/36/30.
- **Rows and rules:** reuse the homepage service-row classes (1 px rb-line top rule, row padding) for the hero index, problem rows and service blocks. No cards, shadows or hover lifts.
- **Lists:** native list elements for "Includes", to keep list semantics.
- **Anchor:** set the section ID `where-to-start` on section 2 and use the native link `#where-to-start`. Smooth scrolling is optional; nothing custom.
- **Buttons:** Primary button component 5864 for the hero and the CTA. Everything else uses the existing text-link style with →.
- **CTA section:** duplicate the homepage contact section structure; change only the copy.
- **No accordions, tabs or toggles.** All content stays visible: better for SEO and for scanning, and no JS states to test.
- **Verify** at 1440, 1024, 768, 390 and 320, following AGENTS.md: overflow, wrapping of the long H1 gray line, 48 px tap targets on mobile links, and keyboard focus on every link.

## Claims requiring owner confirmation

Work can build the page now. These lines go live only after the owner confirms each one or edits it; the rest of the copy needs no confirmation.

- [ ] **Problem 4 and Automation "Includes":** an automatic first reply plus follow-up reminders for new inquiries is something you set up today.
- [ ] **Website "Includes":** care and updates after launch are part of the website service.
- [ ] **SEO "Includes":** review requests from happy customers are part of local SEO work.
- [ ] **Ads "Includes":** you provide plain-language reports.
- [ ] **Automation "Includes":** AI assistants for routine questions are offered.
- [ ] **Easy to manage:** you show clients how to make everyday updates themselves.
- [ ] **Yours to own:** domain, website, Google Business Profile and ad accounts are set up in the client's name with full client access, and nothing is withheld if the client leaves. This is the strongest trust line on the page; keep it only if it holds for every client.
- [ ] **Ongoing Support examples:** website care, local SEO, ad management and tool refinement are all offered monthly.

Already confirmed by the owner and safe to publish: the two engagement formats and their names; One-Time Projects have an agreed scope and deliverables; the four service names; the target customer types.

If a line can't be confirmed, delete it rather than soften it. Every section still works with one fewer item.

## 2026-11-19 — Approved ownership copy revision

Owner approval in the “Update ‘Yours to own’ Copy” brief applies to Services page 6191, “What properly means.” This revision supersedes the earlier description and resolves its specific review marker. Other confirmation items retain their status.

**Yours to own.**

Your business, your digital assets. We can handle the entire setup and ongoing management, while keeping ownership and access clear. If you ever decide to move on, we'll help make the transition straightforward.

[Approved business principle](decisions.md#2026-11-19--client-ownership-and-flexible-management).
