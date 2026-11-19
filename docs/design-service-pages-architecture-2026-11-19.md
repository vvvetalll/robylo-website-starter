# ROBYLO — Service-page architecture

| Record | Value |
| --- | --- |
| Status | **Proposed.** Introduced with the Website Design & Development spec (Proposed, 2026-11-19). Only the Website page is specified; the other three pages are planned directions, each to be approved one at a time. The hub-vs-page split (Part B) belongs to the Services concept, whose direction the owner approved on 2026-11-19. |
| Sources | [Website Design & Development spec](design-service-web-design-2026-11-19.md), section "Page architecture" (Claude Doc revision 14, 2026-11-19). [Services page concept](design-services-page-2026-11-19.md), section "Services hub vs the four service pages" (Claude Doc revision 21, 2026-11-19). Text below is quoted verbatim from those sources. |
| WordPress | Child pages of Services 6191: Website Design & Development 6203 (/services/web-design/), SEO & Local Visibility 6205 (/services/local-seo/), Digital Advertising 6207 (/services/digital-advertising/), AI & Business Automation 6209 (/services/ai-automation/). All are one-hero skeletons from PR #19. |
| Outstanding | Owner approval of the Website page and of the shared template; specs for the remaining three pages. |

## Part A — Shared template and planned signature sections

Verbatim from the Website Design & Development spec:

**Service-page template.** All four service pages share sections 1, 7, 8 and 9 so they read as one family. Each page gets its own middle sections and one signature section, so the pages don't look like copies:

| Page | Signature section (planned) | Hero visual |
| --- | --- | --- |
| Website Design & Development | Annotated phone page: "what a working site needs" | A real Studio Plate |
| SEO & Local Visibility | Annotated local search result: what Google looks at | Simple monochrome search-result wireframe, no fake business data |
| Digital Advertising | "From click to call": the tracked path of one inquiry | Path diagram |
| AI & Business Automation | Before / after of one routine workflow | Workflow diagram |

Only the Website row is specified in this document. The other three are directions for later pages, to be approved one at a time.

**The shared sections, as defined in the Website spec's architecture table** (section numbers refer to the Website page):

| # | Section | Background | Layout family | Job |
| --- | --- | --- | --- | --- |
| 1 | Hero | White | Shared service hero + real Studio Plate | Positioning, who it's for, two CTAs |
| 7 | A website rarely works alone | White | Shared "works with" rows | Links to the other three services and to Work |
| 8 | Questions about websites | #F5F5F5 | Shared two-column FAQ, always open | Objections, before contact |
| 9 | Contact | Black | Shared homepage contact section | Conversion |

Note: on each page the hero visual and the section wording change; the layout family stays the same. Hero visual per page is given in the table above.

## Part B — Services hub vs the four service pages

Verbatim from the Services page concept:

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

## Remaining work

- SEO & Local Visibility, Digital Advertising, AI & Business Automation: specs not written yet. The owner will review the Website page first.
- The signature diagrams (annotated phone page, search-result wireframe, click-to-call path, workflow before/after) are not drawn yet. They must use generic placeholders only: no real or invented business names, reviews, prices or results.
