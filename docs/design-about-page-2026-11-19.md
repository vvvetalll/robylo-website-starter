# ROBYLO — About page

| Record | Value |
| --- | --- |
| Status | **Approved copy (owner), implemented as a staged review draft; not published.** Claude's concept below is **Proposed / historical**: the owner wrote and approved his own final copy, which reused parts of the concept. |
| WordPress | About, page 6197, /about/ |
| PR | #21 "Implement the ROBYLO About page for review" (stacks on #19; not merged). PR #24 restored the six-section revision to the ordinary authenticated route. |
| Outstanding | Approved founder portrait (placeholder in place). Child-theme `aria-current` integration in PR #21 is unverified on WordPress (PHP lint and runtime pending, per verification.md). |

## Part A — Approved About copy, as implemented

**Source and limits.** The owner supplied the final About copy directly to ChatGPT Work on 2026-11-19. That brief is **not in the repository** and could not be recovered. The text below is copied verbatim from the rendered page captured in PR #21's evidence, `docs/verification/2026-11-19-about/checks.json` (branch `implementation/about-page-2026-11-19`): headings in render order, then paragraphs in render order, then link labels. It records what was rendered, not the original brief's formatting. Uppercase eyebrows appear as they rendered.

**Headings (tag · text)**

- H1 · Independent on purpose.
- H2 · One point of contact. The person doing the work.
- H2 · Your business doesn't need more complexity.
- H2 · A simpler way to work together.
- H3 · 01 / Direct communication
- H3 · 02 / Connected thinking
- H3 · 03 / Practical decisions
- H3 · 04 / Personal accountability
- H2 · See the work. Understand the approach.
- H3 · Selected Work
- H3 · Our Approach
- H2 · Let's make something work better.

**Paragraphs (render order)**

1. ABOUT ROBYLO
2. ROBYLO is an independent digital studio helping small businesses build a stronger online presence, reach more customers, and make technology work for them.
3. Based in the Chicago area. Built around direct communication, practical solutions, and personal accountability.
4. THE PERSON BEHIND ROBYLO
5. I'm Vitalii Vozniak, the founder of ROBYLO.
6. I work across web development, digital marketing, and business technology — bringing these areas together to solve practical problems for small businesses.
7. Today, I personally plan, build, and manage every ROBYLO project. I use modern tools, including AI, to work more efficiently, while keeping the decisions, implementation, and responsibility in my hands.
8. No unnecessary layers between you and the work being done.
9. Vitalii Vozniak
10. Founder, ROBYLO
11. THE IDEA
12. A website, search visibility, advertising, and business systems shouldn't operate as disconnected pieces.
13. ROBYLO brings them together with one practical goal: helping small businesses build a digital presence that supports how they actually work.
14. Sometimes that means building a better website. Sometimes it's improving how customers find you, simplifying a process, or connecting tools that should already be working together.
15. The right solution starts with understanding the problem — not selling another service.
16. THE DIFFERENCE
17. Talk directly with the person responsible for your project. No unnecessary handoffs or layers of management.
18. Your website, marketing, and business tools should support each other, not compete for attention.
19. Recommendations are based on what your business needs, not on adding more tools, features, or complexity.
20. Clear ownership of the work, straightforward communication, and responsibility for the decisions being made.
21. GO DEEPER
22. Explore real projects and the digital solutions behind them.
23. See how we move from understanding a business problem to building a practical solution.
24. Have a project in mind or a business problem you're trying to solve? Let's talk about what makes sense.

**Actions (label → destination)**

- Explore our work → /work/
- How we work → /approach/
- Let's talk → /contact/

Layout, as recorded in verification.md (2026-11-19, About page): six sections (hero, founder, idea, principles, related pages, final CTA); founder text paired with a neutral gray portrait placeholder that stacks on mobile; four principles as typographic rows with thin dividers; dark CTA with a local white keyboard-focus outline; existing Manrope styles and button component 5864.

## Part B — Claude's About concept (Proposed, historical)

| Record | Value |
| --- | --- |
| Source | Claude Doc "ROBYLO — About page concept" (https://claude.ai/artifact/DvnmQQGHKtDBgbg3QPuETn), revision 10, 2026-11-19. Transcribed verbatim below. |
| Relationship to Part A | The owner's final copy kept the "Independent on purpose." headline, the founder-led transparency, the "disconnected pieces" idea and a four-item principles list. It used different section copy. Where Part A and Part B differ, Part A is the approved version. |

---

Nov 19, 2026 · @Vitalii

**Recommendation: "Independent on purpose" — a studio page with the founder in plain sight.** The page speaks as ROBYLO ("we"), but its center is a real, named person with a real portrait, plus a plain statement that the studio is founder-led today. It explains *why* ROBYLO is independent and what that means for a client, in commitments that will still be true when the studio grows.

- The homepage now promises "Work directly with the person who builds and manages your digital solutions" but never says who that person is. The About page is where that promise gets a name and a face. That is its main job.
- I recommend against the preliminary line "Small studio. Big-picture thinking." as the headline: it repeats the homepage's "The Big Picture" section, claims a quality instead of showing it, and ties the brand to being small.
- The proposed "philosophy" and "why it works for small businesses" sections overlap each other, the homepage and the existing /approach/ page. I merge them into one short list of commitments.
- Structure: Hero → Who you'll work with (founder) → Why ROBYLO exists → What that means for you → See it in practice (links) → Contact.

Status: **Proposed.** Strategy and copy only; nothing was changed in WordPress, Elementor or GitHub. Lines marked **[Confirm]** or **[Founder input]** must not be published until the founder confirms or supplies them.

## What was reviewed

The newest state is the PR stack #14 → #20. All of these PRs are open and none is merged. The public robylo.com still serves Coming Soon (last checked 2026-11-18). I could not open the staged pages myself because they need a WordPress login, so the staged state below comes from the PR descriptions, the repo docs and the QA screenshots.

| Source | What it establishes |
| --- | --- |
| PR #18 + docs/ROBYLO-CONCEPT.md | **Owner-approved homepage copy**, staged behind Coming Soon. Hero: "Websites, local search, advertising, and practical automation for small businesses in Chicago and the surrounding suburbs. Work directly with the person who builds and manages your digital solutions." Six projects, Quickzy Cleaning included. |
| PR #19 + docs/current-implementation.md | 17-URL architecture. **About = page 6197, /about/**, a skeleton with H1 "About ROBYLO" and the intro "ROBYLO is an independent digital studio serving Chicago and the surrounding suburbs." Navigation: Services / Work / Approach / About / Contact. A separate **/approach/** page ("How we work") already exists. |
| PR #20 | Process numerals on the homepage How We Work section; mobile carousel end gutter. |
| ROBYLO-CONCEPT.md | Solo founder supported by AI tools; no immediate plan to hire; no invented results; monochrome editorial system, Manrope, 1200 px grid, H2 44/36/30. |
| AGENTS.md, AI-CONTEXT.md | Reuse the existing components (Base section 5869, Heading and text 5877, Primary button 5864); no new design system. |

Not verified: the About skeleton at its actual rendered size; whether any founder photos exist.

## Current positioning: assessment

The homepage now positions ROBYLO clearly. Its biggest gap is that it promises a person without showing one.

**Strengths**

- The market is specific: Chicago and the surrounding suburbs, named in the first screen.
- The direct-contact promise is concrete and rare among agencies, and it is checkable.
- The four services are described as tasks an owner recognizes ("call, book or buy", "reports you can read").
- Six live local sites are real proof that websites get built and launched.

**Gaps the About page has to close**

- **No face, no name.** "Work directly with the person who builds…" invites the question *who?*, and nothing on the site answers it. For a local owner about to hand over a website and Google account, that is the main trust question.
- **"Independent digital studio" is stated but never explained.** Why independent, and what does the client get from it?
- **Breadth can read as "does a bit of everything".** Four services from one founder-led studio needs a reason (they are connected) and an honest limit (what ROBYLO does not do).
- **No experience markers yet**: no years, background, results or testimonials. The page must not invent them; it needs real facts from the founder (section "Information needed").

**Risks to avoid**

- Using "we" with no explanation, then the client meets one person. That reads as pretending to be a team, which is the exact distrust the brand is built against.
- A personal-portfolio bio ("I'm a passionate developer…") that undercuts the studio brand and has to be rewritten the day someone joins.
- Repeating the homepage and the /approach/ page, so the About page adds nothing new.

## Recommended concept: Independent on purpose

The About page should be the studio's page with the founder at its center, not a founder biography and not a faceless philosophy page.

| Option | What it gets right | Why not on its own |
| --- | --- | --- |
| Founder biography | A real person; strongest trust signal for a local owner | Reads as a freelancer portfolio. Has to be rewritten when anyone joins. Works against "scalable business brand". |
| Studio philosophy | Scales; feels like a company | Faceless. Contradicts the homepage promise of direct contact. A solo studio that hides its founder looks like it is pretending to be bigger. |
| **Studio-framed, founder-centered (recommended)** | The brand speaks; a named person is visible; the setup is stated honestly | Needs real founder facts and a real portrait before launch |

**The idea in one line:** ROBYLO is independent on purpose, so clients always work with the people doing the work. Today, that is Vitalii.

**Why this works**

1. **It answers the homepage's open question.** The homepage promises direct contact; the About page shows who that is.
2. **It turns "small" into a reason, not an apology.** Independence is presented as a choice that benefits the client (no handoffs, no account managers), not as a stage the studio is stuck in.
3. **It scales without repositioning.** The commitments are written about *roles* ("the people doing the work"), not about one person. Only one line is tied to today: "Today, that's Vitalii." When someone joins, that line and the founder block change; the headline, story and commitments stay.
4. **It is transparent without being self-deprecating.** "Founder-led" is said plainly once. No invented team, and no "just me" either.

**On "Small studio. Big-picture thinking."** Keep it as an internal theme; do not use it as the H1.

- "Big picture" is already the name of a homepage section, so the About page would open by repeating it.
- "Thinking" is a quality the page claims rather than shows; "connected" is shown better through the story and the commitments.
- "Small" ties the brand's headline to size, which the brand plans to outgrow.
- The "small X, big Y" contrast is a common agency pattern, so it does not differentiate.

**Headline:** "About ROBYLO." with the gray second line "Independent on purpose." It continues the homepage's two-tone heading style, and "independent" stays true whether the studio has one person or six.

## Section structure

Six blocks in total. Four carry content and two are short (links and contact). That replaces the preliminary five, where the philosophy and why-it-works sections overlapped.

| # | Section | Job | Answers the visitor's question | Replaces in the preliminary plan |
| --- | --- | --- | --- | --- |
| 1 | Hero — About ROBYLO. Independent on purpose. | Say what ROBYLO is and the one structural difference | What is this company? | 1 Editorial hero |
| 2 | Who you'll work with | Name, face, role, real background; states founder-led openly | Who is behind it? Can I trust them? | 2 Founder introduction |
| 3 | Why ROBYLO exists | The problem the studio was started to fix: digital help bought in disconnected pieces | Why was it created? Why connect the services? | Part of 3 Philosophy |
| 4 | What that means for you | Four commitments the client can hold ROBYLO to, including how growth will be handled | How is this different from an agency? What does direct work mean for me? | Rest of 3 + 4 |
| 5 | See it in practice | Two links: the six live projects, and how a project runs | Is it real? How does it work? | New, short; avoids repeating the homepage |
| 6 | Contact | Low-pressure contact from the person who would do the work | What now? | 5 Closing CTA |

Deliberately left out:

- the service list (links to Services instead);
- the portfolio carousel (one link with the project count);
- the step-by-step process (that is /approach/);
- the Big Picture diagram;
- any team grid, statistics block or timeline, because there is no verified data for them yet.

## Draft copy

American English, ready to paste once the bracketed items are resolved. Headings use the site's two-tone pattern: black first line, gray second line.

### 1 · Hero

**H1:** About ROBYLO. **H1, gray line:** Independent on purpose.

**Intro:** ROBYLO is an independent digital studio for small businesses in Chicago and the surrounding suburbs. No account managers and no handoffs: you work directly with the people who build and run your website, search, ads and tools.

### 2 · Who you'll work with

**Label:** Who you'll work with **H2:** Vitalii Vozniak. **H2, gray line:** Founder.

ROBYLO is founder-led. Today, every project is planned, built and looked after by Vitalii, the same person you talk to on the first call. **[Confirm]**

His work covers the whole digital side of a small business: websites, local search, Google Ads, and the automations and AI tools that take routine work off a team's plate. Just as often, the job is finding what isn't connected: a form that doesn't reach anyone, a Google listing nobody updates, two tools that should talk to each other.

**[Founder input: 1–2 sentences of real background, e.g. how long he has done this work and what kind of businesses or systems he has worked on. Nothing goes here until confirmed.]**

**Optional quote, in his own words:** "[One sentence on why he works this way.]"

**Portrait caption:** Vitalii Vozniak, founder · **[Chicago / suburb]**

### 3 · Why ROBYLO exists

**H2:** Why ROBYLO exists. **H2, gray line:** The pieces rarely fit.

Most small businesses buy digital help in pieces. Someone built the website years ago. Someone else runs the ads. The Google listing belongs to whoever set it up. Nobody looks at how it all works together, so calls get missed and the same problems get paid for twice.

ROBYLO was started to look at those pieces together, then fix, build or connect them, with one person responsible for how it all works. **[Confirm this matches the founder's real reason; replace with his own story if different.]**

### 4 · What that means for you

**H2:** What that means for you. **H2, gray line:** Four things we hold to.

| Commitment | Text |
| --- | --- |
| You talk to the person doing the work. | No account managers, no handoffs. The person you explain the problem to is the one who solves it. |
| You get straight answers. | Including "you don't need that." We'll tell you what's worth doing now, what can wait, and when we're not the right fit. |
| What we build is yours. | Your domain, website, Google accounts and ad accounts stay in your name, with access you control. **[Confirm]** |
| Growing won't change this. | If ROBYLO grows, new people will join to do the work with you, not to stand between you and it. |

### 5 · See it in practice

**Link 1:** Six live sites for Chicago-area businesses → Work **Link 2:** How a project runs, start to finish → Approach

### 6 · Contact

**H2:** Have a question first? **H2, gray line:** Ask the person who'd do the work.

Tell us what you're working on. You'll hear back from Vitalii, not a sales team. **[Confirm]**

**Button:** Start a conversation · info@robylo.com

### Page title and meta

- **Title:** About ROBYLO — Independent Digital Studio in Chicago
- **Description:** ROBYLO is a founder-led digital studio for small businesses in Chicago and the suburbs. You work directly with the person who builds and runs your website, search, ads and tools.

## Visual and layout

One strong visual, the founder portrait; everything else uses the existing system: 1200 px container, 8 + 4 grid, two-tone H2 at 44/36/30, Manrope, white and #F5F5F5 sections, 1 px dividers. No new components, colors or effects.

| Section | Desktop 1440 | Mobile 390 |
| --- | --- | --- |
| 1 Hero | Same inner-page hero as the other skeletons: H1 two-tone, intro across 8 columns, divider below. White. | H1 36 px over two lines; intro full width. |
| 2 Who you'll work with | #F5F5F5 section. Portrait left in 5 columns (≈ 480 × 600, 4:5), text right in 6 columns, top-aligned with the portrait. Label, then H2 name, then body. Caption under the portrait in 14 px gray. | Label and H2 first, then portrait full width at 4:5 (350 × 437), then body. Name stays near the face. |
| 3 Why ROBYLO exists | White. Two-tone H2 in the left 8 columns; body in the right 4 columns, like the homepage section heads. Text only; no diagram, to avoid repeating the Big Picture. | Stacked: H2, then body. |
| 4 What that means for you | Four rows using the Services row pattern: divider, commitment as H3 left, text right. No numerals, because the homepage How We Work section already uses them (PR #20). | Rows stacked; H3 20 px, text 15–16 px. |
| 5 See it in practice | Two large text links side by side with arrows, between dividers. | Two stacked links, each a full-width 48 px+ tap target. |
| 6 Contact | Reuse the homepage's black contact section with this page's copy. | Same as homepage mobile. |

**Founder portrait direction (real photo only)**

- One real portrait. Desaturated to black and white in production so it sits in the monochrome system.
- Natural light, plain light or mid-gray wall, waist-up, relaxed, looking at the camera or slightly off it. Ordinary work clothes.
- Avoid stock-agency poses: arms crossed, pointing at a laptop, "thinking" hand on chin, office props.
- Optional second image only if real: Vitalii on a client site or at his desk. Not for launch if it does not exist.
- Deliver at least 2000 px on the long side; export WebP about 1200 × 1500 for the 4:5 slot.

**If no photo is ready at launch:** set the name large (H2 scale) in the portrait slot as a typographic block, with the caption below. It is honest and still looks intentional. Never use a placeholder silhouette or a generated face.

Target length: about 4–5 screens at 390 px, consistent with the owner's no-excess-scrolling standard.

## How About complements the homepage

Each page answers a different question: the homepage covers *what* ROBYLO does, Approach covers *how* a project runs, and About covers *who* does the work and *why*.

| Topic | Homepage | Approach page | About page |
| --- | --- | --- | --- |
| Services | Four rows with scope and description | — | Not repeated; named once in the founder text as his range of work |
| Connected solutions | Big Picture diagram and "A website is just the beginning" | — | The *origin* of that idea: why disconnected help fails small businesses |
| Direct contact | One sentence in the hero and step 3 | — | Who that person is, and a commitment that it survives growth |
| Process | Three steps with numerals | Full process | Not repeated; one link |
| Proof | Six-project carousel | — | One link with the count; no carousel |
| Contact | "Good business. Easy to find." | — | "Ask the person who'd do the work.", the same black section with a different headline |

Rule for anyone writing later: a sentence that already appears on the homepage or Approach page does not appear on About, word for word or close to it.

## Information needed from the founder

The copy can be finalized once items 1–5 are answered. Items 6–9 are optional, but each would make the page stronger.

**Required**

- [ ] **Direct-work claim.** Is every project today planned, built and maintained by Vitalii? Does anyone else ever do client work (contractors, partners)? If yes, the founder line becomes "Every project is led by Vitalii".
- [ ] **Public background.** 1–2 true sentences: how long he has done this work, and what kinds of businesses or systems. Also say what should *not* be public (employers, other roles).
- [ ] **Why ROBYLO was started**, in his own words: 2–3 sentences, in Ukrainian if easier. The "pieces rarely fit" story is a draft based on the brief, not his account.
- [ ] **Ownership.** Do clients own their domain, hosting, website, Google Business Profile and ad accounts? This decides whether "What we build is yours" can stay.
- [ ] **Portrait.** Do real photos exist, or should a short shoot be planned (direction in "Visual and layout")? Publication consent for the photo.

**Optional, each strengthens trust**

- [ ] Location for the caption: Chicago, or a named suburb. Does he meet clients in person?
- [ ] Languages he works in, only if useful for clients. Do not assume.
- [ ] Real credentials, such as Google Ads or other certifications, only if they currently exist.
- [ ] One sentence in his own words for the optional quote.

After these answers: final copy, then a desktop and mobile mockup of the page in the existing system for review, before any Elementor work.

### Resolution status (added 2026-11-19 at commit time)

The owner later supplied his own final copy (Part A). In Part A, "Today, I personally plan, build, and manage every ROBYLO project" settles the direct-work question as the owner's own statement. The portrait is still pending. Ownership of client accounts remains open: it is the same unconfirmed item as "Yours to own" in the [Services concept](design-services-page-2026-11-19.md).
