# ROBYLO theme architecture, September 2026 — superseded

| Record | Value |
| --- | --- |
| Status | **Superseded — historical record only. Do not implement from this file.** |
| Source | Claude project document `claude/robylo-theme-architecture.md` in the claude.ai Project "ROBYLO", created 2026-09-17. Copied verbatim below on 2026-11-19. It was not in the repository before this commit. |
| Superseded by | [AGENTS.md](../AGENTS.md) "Scope and ownership" and [AI-CONTEXT.md](../AI-CONTEXT.md): Elementor Atomic V4 owns variables, tag defaults, global classes, layouts and components; the child theme is limited to integration Elementor cannot provide; the design system is not recreated in CSS/PHP. This reverses the September rules "Elementor Variables: not used", "Global Classes own only the class name" and "child theme CSS owns tokens, layout, typography…". |
| Why kept | It records the earlier architecture decision and its stated risks, so later reviewers can see why the approach changed. The `robylo.zip` starter (v1.0.0 / v1.1.0) it describes is not in this repository. |

---

# ROBYLO — Elementor 4 Atomic + CSS architecture (locked)

Status: **locked decision**. Starter child theme delivered as `robylo.zip` — v1.0.0 2026-09-17, **v1.1.0 2026-09-17** (WordPress-menu navigation).

## The division of labour

| Layer | Owns | Never contains |
|---|---|---|
| Atomic elements | DOM structure, semantic tags, content, nesting | any value in the Style panel |
| Global Classes | the class *name* only (`rb-hero__title`) | padding, color, font-size — nothing |
| Elementor Variables | **not used** | — |
| WordPress menus | navigation *content* — labels, URLs, order, nesting | any markup or styling decision |
| Child theme CSS | tokens, layout, typography, color, spacing, buttons, hover, responsive, components | one-off page hacks |

Two rules the system rests on:

1. **The Elementor Style panel stays empty for ROBYLO components.** Element-level styles are emitted with a per-element selector, which outranks a plain class.
2. **One element = one semantic class.** BEM, never utility stacking — every class in Elementor is added by hand through the Class Manager UI.

## Cascade control

CSS is enqueued as an ordered chain in `inc/assets.php`, each file depending on the previous, the whole chain depending on `elementor-frontend`:

```
elementor-frontend → tokens → base → layout → components… → robylo.css (last)
```

Elementor V4 emits Global Class CSS at roughly single-class specificity — the same as ours — so **at equal specificity the last file wins**. Source order is the lever; `!important` is allowed only in `robylo.css`.

`filemtime()` cache-busting per file. The same stack is loaded into the editor canvas via `elementor/preview/enqueue_styles`, which is what makes empty Global Classes workable.

## Naming

```
rb-<block>__<element>--<modifier>   components
l-<name>                            layout primitives
u-<property>-<value>                utilities — exceptions only
is-* / has-*                        states set by JS
js-*                                JS hooks, never styled
```

## Tokens

`assets/css/tokens.css` is the single source of truth. Two tiers: **primitives** (`--rb-neutral-500`, `--rb-brand-600`) never referenced from a component; **semantic** (`--rb-color-text`, `--rb-space-section`) are all a component may use. That indirection makes `.rb-invert` (dark mode) a 20-line token remap instead of per-component `--dark` variants.

Breakpoints cannot be tokens (`var()` does not work in `@media`); they are literal and documented as a table in `tokens.css`: 480 / 768 / 1025 / 1200, matching Elementor's Mobile 767 and Tablet 1024.

## Responsive

Mobile-first, `min-width` only. `clamp()` before a media query; `auto-fit` + `minmax()` for grids. Responsive rules live inside the component's own file so a component stays self-contained and copyable.

## Navigation (v1.1.0)

The header stays the visual layer; a **WordPress menu is the data source**. `inc/nav.php` is the entire integration and the only file that knows about both. The Elementor Nav Menu widget is not used.

- Menu location: `primary_menu` ("Primary Menu (ROBYLO header)").
- `ROBYLO_Nav_Walker` emits only `rb-header__*` classes plus `is-active` / `is-active-ancestor` / `js-submenu-toggle`. No `menu-item`, no `current_page_item`. A CSS class typed into a menu item's "CSS Classes" field is preserved; WordPress-generated classes are discarded. `target="_blank"` gets `rel="noopener"`.
- Bridge into the Atomic header: an Elementor **Shortcode** widget containing `[robylo_menu]`, placed inside the `rb-header__nav` Div Block. Attributes: `location`, `depth`, `class`. PHP equivalent: `echo robylo_nav_menu();`.
- `template-parts/header.php` is the canonical markup and what the styleguide page renders — use it as the reference when the Elementor build misbehaves, or as the header itself on sites that don't want it in the builder.
- Submenus use the W3C disclosure pattern: the parent stays a real link, a sibling `<button>` carries `aria-expanded` and `aria-controls` paired to the submenu's `id`. `aria-expanded` never goes on the link.
- Collapsed submenus are `display: none` (mobile) / `visibility: hidden` (desktop) — both keep links out of the tab order. A zero-height-but-visible collapse would leave them focusable.
- **No menu assigned:** nothing breaks. No nav, no burger (nothing to reveal); admins see an "Assign a menu" link. Override with `robylo/nav_menu_fallback`.
- Filters: `robylo/nav_menu_args`, `robylo/nav_item_classes`, `robylo/nav_menu_fallback`. Core filters (`nav_menu_link_attributes`, `nav_menu_item_title`, `the_title`) still apply.
- Adding a location is one line in `register_nav_menus()`; the walker is location-agnostic.
- One Elementor-specific CSS rule exists in the whole theme: `display: contents` on the Shortcode widget's two wrapper divs, scoped to `.rb-header__nav`, so the generated `<ul>` behaves as a direct child of the nav.

## Theme contents

```
robylo/
├── style.css              WP header only, no styles
├── functions.php          3 constants, 3 requires
├── AI-CONTEXT.md          paste into an AI session before asking for a component
├── COMPONENTS.md          class reference + Atomic structures
├── README.md              install, navigation, workflow, rebranding, risks
├── inc/assets.php         the CSS/JS manifest + enqueue chain
├── inc/nav.php            WP menu → ROBYLO markup: walker + [robylo_menu]
├── inc/elementor.php      body classes, environment warnings
├── template-parts/header.php  canonical header markup
├── templates/styleguide.php   "ROBYLO Styleguide" page template
└── assets/
    ├── css/  tokens, base, layout, components/{button,section,hero,card,header,footer}, robylo
    └── js/   main.js  (drawer, submenu disclosures, scrolled header — no deps)
```

No Sass, no build step, no framework, no dependencies.

## Adding a component

1. `assets/css/components/<name>.css` with the standard header comment.
2. One line in `robylo_style_manifest()` in `inc/assets.php`, before the final `'robylo'` entry.
3. Build structure in Elementor; create the Global Classes **empty**.
4. **Verify the class names are in the rendered frontend HTML** — this is the architecture's one real failure mode.
5. Editor-managed content (menus, ACF, post data) comes from WordPress, never hardcoded markup.
6. Document in `COMPONENTS.md`, add an instance to the styleguide page.

## Rebranding for a new site

Copy `assets/css/`, rewrite `tokens.css` (~40 values), optionally find-and-replace the `rb-` prefix. If components used only semantic tokens, nothing inside `components/` changes. After 3–4 sites, split tokens/base/layout/button into a `robylo-core` git submodule.

## Known risks

- **Empty Global Classes** — Elementor V4 has reported issues where a class's CSS is not output unless a matching Atomic element exists, and where classes vanish after reload. Mitigation: one harmless anchor declaration (`--rb-anchor: 1;`) per Global Class, plus the frontend HTML check.
- **Elementor updates** — keep every Elementor patch in the interop section at the bottom of `robylo.css`, never in component files. Staging first.
- **Style panel clicks** — restrict roles in Elementor → Role Manager.
- **No Git = no design.** Styles live in files, not the database.
- **Caching** — `filemtime()` covers theme files; also Regenerate CSS & Data + purge CDN after structural changes.

## Setup checklist for a new install

1. Elementor → Settings → Features → Editor V4: activate.
2. Site Settings → Layout → Breakpoints: Mobile 767, Tablet 1024.
3. Settings → Advanced: Disable Default Colors **and** Disable Default Fonts.
4. Appearance → Menus: assign a menu to **Primary Menu (ROBYLO header)**.
5. Appearance → Hello Elementor Settings: disable Hello's header and footer.
6. Create a page with the ROBYLO Styleguide template — if it renders, the chain loads.

## Verification notes (v1.1.0)

The walker was run against a fake WordPress menu tree using a miniature of WP's own `Walker::display_element` traversal, confirming the `aria-controls` ↔ submenu-`id` pairing, class output and escaping. The rendered header was then tested in Chromium at 390 / 768 / 1440 px, in both hand-written and Elementor-wrapper markup, covering: drawer open/close, focus into the drawer and back to the burger, Tab trap, submenu disclosure, Escape (submenu first, then drawer), backdrop click, outside click, link-tap close, breakpoint crossing, and the no-menu case.

Two real bugs were found and fixed in the process:
1. `.focus()` on the first drawer item was a silent no-op because the nav is still `visibility: hidden` in the tick `.is-open` is added — focus is now moved on the next frame (double `requestAnimationFrame`).
2. The desktop dropdown overlapped the header edge; it now sits below it with an invisible `::before` bridge so hover never breaks while crossing the gap.
