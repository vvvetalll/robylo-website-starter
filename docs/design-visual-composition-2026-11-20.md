# Visual composition and divider cleanup

Owner scope, November 20, 2026. Build on the staged work in PRs #31–33. Preserve approved copy, links, assets, [Confirm] markers, the Home diagram and six-project carousel, the native FAQ, Coming Soon and noindex.

- Home. Give the four service links and descriptions a balanced composition. Group the three existing process steps beneath a left-aligned introduction.
- Services. Keep all six problems in the black band and associate each statement with its explanation and action. Give the four alternating service layouts more usable space, using the current imagery.
- Website Design. Pair the scope heading with its four stages, align the phone preview and principles, and give the six process steps readable columns. Group the existing final CTA heading, copy and actions in one reading sequence.
- About. Balance founder copy and the portrait placeholder. Preserve the existing numbered principles.
- Shared chrome. Remove decorative horizontal rules at their Elementor source. Preserve functional control and FAQ borders and lines that convey information in the diagram and imagery.

Use existing Elementor Atomic elements, variables and Manrope. Keep the 1200px grid as the default and open selected visual layouts to 1280px. No merge or launch.

## Proposals for future review

- Work currently presents six case links. Pair the existing routes with approved project imagery in a responsive project index. Feature a project only when its case content has been approved.
- Approach currently presents an introduction. Develop a short process sequence from approved language and group the existing contact route below it. Confirm actual process commitments before drafting.
- Contact currently offers an email link. Build around that known action. Add a form only after fields, routing, privacy wording and accessible feedback have been agreed.

## Implemented in staged Elementor documents

| Document | Changes | Pre-pass rollback |
| --- | --- | --- |
| Home 5894 | 1280px split services intro and open 2×2 navigation on desktop. Two columns under the intro on tablet, one on phones. Approach intro sits above the three existing steps. Reused section-head instances and localized composition selectors on their Atomic parents because instance style does not reach the rendered component root. | 6388 |
| Services 6191 | 1280px black band with its opening heading beside the six grouped problems on desktop, then two tablet columns and one phone column. Each explanation precedes its matching action. The four existing illustrations are larger within the alternating compositions. Descriptions stay within a readable 520px measure. | 6384 |
| Website Design 6203 | Native list markers and compact row spacing for seven redesign signs and four scope lists. The scope heading sits beside the stage grid on desktop. The existing phone diagram aligns to five numbered principles. The six timeline steps use two wider columns on desktop and tablet and one on phones. The local black CTA has one left-aligned reading sequence, 56/46/34px primary heading sizing, a smaller secondary line, and the existing /contact/ and mailto actions. | 6390 |
| About 6197 | Balanced founder copy with 4:5 portrait slot capped at 320px on desktop and 206px on phones. Existing portrait remains a neutral placeholder. | 6382 |
| Shared Footer component 5889 | Removed the three native border declarations from each of the two decorative top rules at `5cafbfe1` and `374494e6`. Both borders render at 0px in the staged frontend. Existing footer layout, links and logo are unchanged. | 6386 |

The only descendant style selectors are on the two Home introduction wrappers and Website Design CTA's existing secondary heading span. They use the existing Atomic local style store. No themes, stylesheets, plugins, new tokens, new global classes or assets were added. Header and starter-page documents were not edited. The earlier divider removals are documented in PR #33; this pass removes the two remaining decorative footer rules. Native button boundaries, focus outlines and FAQ edges remain. The Home orbit and marks inside existing illustrations remain.

The owner separately requested promotion of the previous PR #31–33 Elementor drafts. Pages 5894, 6191, 6197, 6203 and 6193 and process component 6019 were promoted behind Coming Soon before saving this pass. The normal URLs show that earlier version to authenticated users. This pass remains staged and available through Elementor Preview Changes. Do not restore a full revision over intervening owner edits.

### Exact Elementor style inventory

### Shared Footer (5889)

- `5cafbfe1` — footer-top
- `374494e6` — footer-bottom

### Home (5894)

- `641b49dd` — V2 Services-container
- `2b9d4121` — service-rows
- `5530cb88` — Website Design and Development
- `1c50e861` — SEO and Local Visibility
- `2d2cc32` — Digital Advertising
- `777f41d8` — AI and Business Automation
- `72ec1cf5` — V2 Approach-container
- `39123f6` — approach-steps
- `6311bb78` — step-wrapper-0
- `460dfd57` — step-wrapper-1
- `3e1a140f` — step-wrapper-2

### Services (6191)

- `3e2dab99` — Problems band content
- `762ffd9` — Six customer problems
- `75b511c4` — Problem destination group 1
- `3b5b3cc4` — Problem destination group 2
- `704ac0d4` — Problem destination group 3
- `156cb74f` — Problem destination group 4
- `6a764946` — Problem destination group 5
- `2590bfa6` — Problem destination group 6
- `405291e4` — Service details content
- `5aed075e` — Four alternating services
- `1d7088ed` — Illustrated service 1
- `9f1fbeb` — Service 1 editorial copy
- `ab4014b` — Illustrated service 2
- `2adb8891` — Service 2 editorial copy
- `53c5da5` — Illustrated service 3
- `4797747` — Service 3 editorial copy
- `33bad3dc` — Illustrated service 4
- `3fcab285` — Service 4 editorial copy

Moved each existing explanation before its existing service action in destination groups `75b511c4`, `3b5b3cc4`, `704ac0d4`, `156cb74f`, `6a764946`, `2590bfa6`.

### About (6197)

- `115d196f` — Founder columns
- `3b6b8bcd` — Founder copy
- `62e8594f` — Founder paragraph 1
- `6fce8ffb` — Founder portrait
- `5c42ac2c` — Founder portrait placeholder — replace with approved photo

### Website Design (6203)

- `43c39c51` — Seven signs
- `6816dd80` — Signs first four
- `5a495255` — Signs first four item 1
- `77ed2d36` — Signs first four text 1
- `30f02846` — Signs first four item 2
- `587d8066` — Signs first four text 2
- `33b2932` — Signs first four item 3
- `42c13117` — Signs first four text 3
- `6ed47d62` — Signs first four item 4
- `7c1cfb21` — Signs first four text 4
- `2e7b8d90` — Signs last three
- `58431d8b` — Signs last three item 1
- `680d64ac` — Signs last three text 1
- `14b16bc8` — Signs last three item 2
- `69aba2ab` — Signs last three text 2
- `58c7baa7` — Signs last three item 3
- `2d02d129` — Signs last three text 3
- `3d6214f6` — Project scope container
- `4c9e19a0` — Scope editorial head
- `52ff68ef` — Scope visual composition
- `6063ff7e` — Four project stages
- `546c0401` — Scope list 1
- `309db10e` — Scope list 1 item 1
- `5f61644d` — Scope list 1 item 2
- `6aeb914` — Scope list 1 item 3
- `719f0680` — Scope list 2
- `36260267` — Scope list 2 item 1
- `14c4132f` — Scope list 2 item 2
- `1c549502` — Scope list 2 item 3
- `5ceac803` — Scope list 3
- `44a2bd9e` — Scope list 3 item 1
- `2085c71e` — Scope list 3 item 2
- `55a14582` — Scope list 3 item 3
- `d23f848` — Scope list 3 item 4
- `1093cf8c` — Scope list 4
- `22003a6e` — Scope list 4 item 1
- `34d62643` — Scope list 4 item 2
- `549f3701` — Scope list 4 item 3
- `679ac7b5` — Scope list 4 item 4
- `4a9e433` — Scope note width
- `7a24847b` — Signature website anatomy container
- `179dc7c` — Diagram and principles
- `517c52cf` — Static diagram frame
- `34cd945c` — Five linked principles
- `56c548e6` — Website principle 1
- `da5072d` — Diagram marker 1
- `5dd831a9` — Website principle 2
- `5da09773` — Diagram marker 2
- `662565f7` — Website principle 3
- `32627e27` — Diagram marker 3
- `6576df03` — Website principle 4
- `49023964` — Diagram marker 4
- `1f744146` — Website principle 5
- `54cf645` — Diagram marker 5
- `40986cd` — Six step process
- `8ea8b94` — Timeline step 01
- `64f02e36` — Timeline step 01 number
- `61cd6606` — Timeline step 02
- `59a70e2b` — Timeline step 02 number
- `68f12f29` — Timeline step 03
- `4b8d5f65` — Timeline step 03 number
- `373a8615` — Timeline step 04
- `61f550da` — Timeline step 04 number
- `4cc65cc3` — Timeline step 05
- `2db15585` — Timeline step 05 number
- `1dc129cb` — Timeline step 06
- `29ece36c` — Timeline step 06 number
- `4f14e386` — Website contact
- `7f028074` — Contact container
- `3fe09d24` — Contact grid
- `5f8d406` — Contact H2
- `a115d1a` — Contact lead

## Verification

- Authenticated Chrome. Visually compared all 11 modified sections at 1440px and 390px. Inspected additional 320px, 768px and 1024px captures of the revised layouts. All seven reviewed routes reported zero horizontal overflow at all five widths and emitted `noindex, nofollow`.
- Rechecked button hover (black fill / white text) and visible 2px keyboard focus at desktop and mobile. Home service targets are at least 48px tall. The Website Design primary CTA opens the existing Contact page. Its email action retains the original mailto.
- At 390px, exercised all six carousel positions with mouse, keyboard and emulated touch, confirmed Quickzy at the boundary with the previous card out of view, then swiped back to Elite. Quickzy remained accessible at 320px. Desktop previous-arrow navigation worked at 1440px. Native carousel and Home primary CTA trees match the baseline.
- The native FAQ starts with all six questions collapsed. Enter and Space, pointer and emulated touch open and close rows; selecting a new row closes the last. The mobile navigation opens with Enter and closes with Escape, restoring focus to Menu.
- Elementor read-back preserved node counts, settings, global classes and interactions. Services retained all eight literal owner-review markers, and Website Design retained all 12. About's numbered principle subtree, Website Design FAQ and annotated phone asset match the baseline. Work, Approach and Contact page data match the baseline.
- Anonymous requests on all seven routes returned the existing Coming Soon document and did not reveal private page content. No PR was merged. Full browser images and the comparison bundle are supplied privately. Chrome emulation covers responsive and touch behavior. No physical-device or cross-browser test.
