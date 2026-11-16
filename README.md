# ROBYLO Website Starter 2.0

A reusable WordPress + Hello Elementor child theme + Elementor Atomic V4 foundation for future client websites.

## Architecture

| Owner | Responsibility |
| --- | --- |
| Elementor Atomic V4 | Visual variables, tag defaults, global classes, layouts, and reusable components. |
| ROBYLO child theme | Necessary WordPress integration, PHP, and functionality not adequately supported by Elementor. |
| ChatGPT/Codex | Architecture, code, audits, technical documentation and Git contributions. |
| Claude | Design concepts, mockups, visual decisions, handoffs and Git contributions. |
| ChatGPT Work | Elementor implementation, screenshots, testing, implementation documentation and Git contributions. |

The initial theme contains metadata and a child stylesheet enqueue only. It adds no visual CSS, JavaScript, menus, widgets, or template overrides. Hello Elementor remains responsible for loading its own styles. The child enqueue runs afterward and depends on Hello's theme stylesheet only when that stylesheet is already enqueued.

Elementor configuration lives in WordPress, not in these theme files. Installing this theme alone does not reproduce a configured Elementor design system. A tested export/import workflow is still required before repeatable client deployment is established.

## Repository

```text
README.md
AGENTS.md
AI-CONTEXT.md
.gitignore
docs/
  setup.md
  elementor.md
  ROBYLO-CONCEPT.md
  current-implementation.md
  decisions.md
  verification.md
theme/
  robylo-child/
    style.css
    functions.php
```

Start with [setup and deployment](docs/setup.md), then read the [Atomic approach and validation status](docs/elementor.md). Contributors and agents must follow [AGENTS.md](AGENTS.md). The collaboration handoff is defined in [AI-CONTEXT.md](AI-CONTEXT.md).

## Verification

When PHP is available, run from the repository root:

```sh
php -l theme/robylo-child/functions.php
```

Runtime checks require WordPress with Hello Elementor installed; see [setup.md](docs/setup.md). No package installation, Composer project, Node build, or generated assets are required by this foundation. A compatible WordPress runtime, parent theme, and Elementor plugin are separate deployment prerequisites.

Upstream loading references: [Hello Elementor](https://github.com/elementor/hello-theme/blob/master/functions.php) and its [official child theme](https://github.com/elementor/hello-theme-child/blob/master/functions.php). Recheck against the installed versions when validating staging.

## Shared project context — 2026-11-16

Read [AGENTS.md](AGENTS.md) and [AI-CONTEXT.md](AI-CONTEXT.md) before contributing. All three collaborators may contribute independently within their authorized scope; synchronize first and preserve concurrent work.

- [Current WordPress implementation](docs/current-implementation.md): actual variables, typography, classes, components, Header/Footer, responsive behavior and database-only settings.
- [Decisions and approval status](docs/decisions.md): approved foundation versus pending homepage design.
- [Verification and completed work](docs/verification.md): dated evidence, checks and limitations.
- [Business/design working brief](docs/ROBYLO-CONCEPT.md): preserved exploratory notes; proposals are not approvals.

The live foundation is further along than the original starter inspection described in setup.md and elementor.md. Coming Soon remains active. Claude is designing the new homepage; it is not implemented. Native Elementor configuration is still stored in WordPress, with no portable kit/component exports committed here. This repository does not automatically deploy or synchronize with WordPress.
