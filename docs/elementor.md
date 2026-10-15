# Elementor Atomic-first approach

## Ownership

Elementor Atomic V4 owns visual variables, HTML tag defaults, global classes, layouts, and reusable components. Use its supported features as the source of visual decisions. The child theme supplies only necessary WordPress integration and approved functionality gaps.

Do not create a parallel CSS token system, utility framework, PHP layout library, custom widgets, or JavaScript interactions as part of the foundation. Validate an apparent gap before proposing a fallback. This task does not define visual values, class names, layouts, or components.

## Evidence and capability status

The following distinguishes upstream-documented features from verified behavior on our staging installation. Documentation availability does not establish installed-version support, license entitlement, MCP coverage, or successful deployment.

| Area | Evidence | Project validation still required |
| --- | --- | --- |
| Variables | Documented in Elementor's [Variables guide](https://elementor.com/help/variables/). | Installed types, scopes, references, persistence, and MCP operations. |
| Classes and Atomic elements | Documented in [Explore the V4 features](https://elementor.com/help/explore-the-v4-features/). | Global class editing, ordering, responsive behavior, and MCP coverage. |
| Tag defaults | Documented in [Default styles for Atomic elements](https://elementor.com/help/how-to-define-default-styles-for-atomic-elements-in-elementor/). | Available tags, cascade with classes and local styles, and MCP operations. |
| Layouts and reusable components | Assigned to Elementor by this project's architecture; see the [V4 documentation entry point](https://elementor.com/help/build-with-the-editor/v4-editor/). | Exact supported layout/component operations, reuse/update behavior, licensing, and MCP support. |
| Export/import | Required for repeatable client deployment; no transfer method is confirmed for this project. | Round-trip variables, defaults, classes, components, layouts, media, and references on a fresh target. |
| MCP | Planned configuration channel for ChatGPT Work. | Connection, permissions, exposed operations, schemas, and read-back verification. |

Confirmed for the repository: the theme declares Hello Elementor as its parent and contains no visual rules. Upstream [parent theme source](https://github.com/elementor/hello-theme/blob/master/functions.php) loads its own CSS, while the [official child theme](https://github.com/elementor/hello-theme-child/blob/master/functions.php) enqueues the child stylesheet at priority 20. ROBYLO follows that ownership and makes the parent dependency conditional so a disabled parent style is not forced back on. This has been reviewed against upstream source, not tested against an installed WordPress site.

## Staging workflow

1. Identify the staging target; record versions, licensing, Atomic settings, and relevant existing configuration without secrets.
2. Discover actual MCP capabilities and schemas. Prefer supported operations; do not guess endpoint names or write directly to Elementor database records.
3. Configure only the approved design-system scope in Elementor, then read back the saved configuration.
4. Check frontend and editor output, responsive behavior, shared updates, and persistence after reload. Record each capability as passed, failed, or unverified with the environment and evidence.
5. Validate transfer on a fresh target before treating the configuration as reusable. Check dependencies and references after import, not just export success.

No staging capabilities are marked passed yet. Future evidence should include the date, relevant versions, operation tested, result, and any limitations. Do not mark upstream-documented features as staging-tested without performing those checks.
