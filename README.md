# ROBYLO Website Starter 2.0

A reusable WordPress + Hello Elementor child theme + Elementor Atomic V4 foundation for future client websites.

## Architecture

| Owner | Responsibility |
| --- | --- |
| Elementor Atomic V4 | Visual variables, tag defaults, global classes, layouts, and reusable components. |
| ROBYLO child theme | Necessary WordPress integration, PHP, and functionality not adequately supported by Elementor. |
| Codex | Code, Git inspection, documentation, and verification. |
| ChatGPT Work | Elementor configuration through MCP on a separate staging WordPress installation. |

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
