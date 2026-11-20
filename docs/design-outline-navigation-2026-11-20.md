# Outline navigation and service composition — November 20, 2026

**Owner-authorized scope.** Continue the staged customer-first and typography changes in PRs #31 and #32. Use three action roles: the existing solid primary conversion buttons, compact outline navigation for key standalone internal actions, and normal inline links within prose. Keep Coming Soon, noindex, existing routes, media, claims and functions.

| Surface | Approved direction |
| --- | --- |
| Home | Keep all four existing linked H3 widgets and descriptions. Apply compact outline styling to the same links. Use spacing and quiet surfaces to group them in a 2×2 grid that stacks on phones. Keep the diagram, project carousel and primary actions. Give the existing Hero Work link the secondary outline treatment. |
| Services | Keep the four illustrated compositions, alternate image positions and short copy. Group each visual with its existing heading, scope and main destination. Use whitespace between presentations. Use one outline service destination per presentation, and keep the Work example as a lighter link alongside the Web Design action. Keep embedded pairings as compact supporting text. The six problem links and the repeated contact and jump links remain lightweight. |
| About | Convert the two standalone Explore actions in place. Keep the numbered principles and final contact action. |
| Work | Convert the existing six case-study links and use a responsive grid within the existing navigation. Keep each existing component and destination. |
| Approach | The current page introduces the approach and has no standalone section action. Retain the shared navigation. |
| Website Design | Convert standalone work, process, FAQ follow-up and related service actions. Retain the breadcrumb, email and links inside paragraphs. Preserve the native FAQ. |

Use `rb-btn`, `rb-btn--outline` and `rb-btn--sm`, the 4px radius token, compact padding, and at least 48px touch height. Use the existing outline class for linked headings as well as buttons. If Atomic's controls cannot address the native anchor inside a heading, use a single scoped selector addition inside that existing class. Do not add an extra link, new assets, components, scripts or plugins. Keep the typography from PR #32. Verify rendered pages at 320, 390, 768, 1024 and 1440px, compare Home and Services desktop/mobile screenshots, and check navigation states and protected site visibility.

## Owner correction: remove decorative separators

Audit actual rendered Home, Services, About and Website Design. The instruction supersedes the earlier suggestion to retain light-gray grouping lines for ordinary content. Remove the native separator settings at their source. Use existing layout gaps, internal spacing and surface contrast. Keep approved visible copy, heading semantics, links, image assets, numbering and functionality.

| Page | Native Elementor separator sources |
| --- | --- |
| Home | Big Picture top edge on `32e0f3fc`. Keep the diagram orbit and connection graphics. The four service card top rules were removed by the outline pass. |
| Services | Four standards rows `4a084813`, `512497e9`, `13f59a31`, `6225cab4`; one-time panel frame `68299d9f` becomes a soft surface. Four detail-row rules are removed by the outline pass. |
| About | Four numbered principles `58c58e51`, `58664035`, `4ecb57c5`, `4e22ee23` and two Explore cards `545f28b3`, `61817e47`. Keep numbers and card copy. |
| Website Design | Seven Signs paragraphs, four Scope groups, five signature principle rows, four related-content rows and the temporary editing-preview frame. Keep image assets and placeholders. Keep the six native FAQ row boundaries and the accordion closing edge. |

Button and focus borders, carousel controls, the actual diagram and existing media frames are functional; keep them. Take authenticated before/after evidence at 1440 and 390px and check 320, 768 and 1024px. Coming Soon and noindex remain active. No page publication or merge.
