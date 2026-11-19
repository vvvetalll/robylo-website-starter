# Setup and deployment

> Current-status update (2026-11-16): the original starter inspection below is retained as historical context. The existing ROBYLO installation has since been configured and inspected. Use [current-implementation.md](current-implementation.md) and [verification.md](verification.md) for the dated observed state and its limits. Fresh-install portability, child-theme runtime checks and a complete installed-version compatibility matrix remain unverified.

## Prerequisites

- A separate staging WordPress installation with administrative access, HTTPS, and a recoverable backup.
- Hosting with PHP and database versions supported by the selected WordPress, Hello Elementor, and Elementor releases. Record the actual versions and check their current upstream requirements before installation; no compatibility matrix has been tested yet.
- Hello Elementor installed with the directory slug `hello-elementor`. Keep the parent installed and update it independently of this child theme.
- Elementor with the intended Atomic V4 features available and enabled. Confirm whether any requested features require Elementor Pro, another license, or feature settings before relying on them.
- For ChatGPT Work: an authorized MCP connection to the intended staging installation with the necessary read/write capabilities. Credentials belong in the connection or local environment, never in this repository.
- Git for repository work. A PHP CLI compatible with the target runtime is needed for local syntax checks. WP-CLI is optional. This foundation requires neither Composer nor Node/npm packages.

## Install the child theme

1. Install WordPress and Hello Elementor on staging. Install and configure the intended Elementor release.
2. Copy only `theme/robylo-child/` into `wp-content/themes/robylo-child/`. Alternatively, create a ZIP with `robylo-child/` as its top-level directory and upload it through WordPress's theme installer. Do not upload the entire repository as a theme.
3. Activate **ROBYLO Child**. WordPress resolves the parent through `Template: hello-elementor`; no parent templates are copied into this repository.
4. Record WordPress, PHP, Hello Elementor, Elementor, optional Pro, and MCP connector versions in the staging handoff. Versions alone do not establish compatibility.
5. Follow [elementor.md](elementor.md) to validate Atomic capabilities before configuring the design system.

The child stylesheet currently contains metadata only. Its enqueue uses the theme header version for cache versioning. Hello loads its own styles; the child runs at priority 20 and uses `hello-elementor-theme-style` as a dependency only if already enqueued. It does not force that optional parent style back on.

## Verification before deployment

From the repository root, if PHP CLI is available:

```sh
php -l theme/robylo-child/functions.php
```

On staging:

- Confirm activation succeeds and the correct parent and child themes are detected.
- Check the frontend and Elementor editor for PHP errors and failed asset requests.
- Inspect rendered stylesheet links and the browser Network panel: the child stylesheet should load once; the child must not add a second copy of a parent stylesheet.
- In a controlled staging check, disable Hello's optional theme stylesheet using its supported filter, `hello_elementor_enqueue_theme_style`. Confirm the child still loads without restoring that parent stylesheet, then restore the test configuration. This check is not implemented in the starter.
- Verify Atomic variables, defaults, classes, layouts, and components with the actual installed versions. Test responsive output and save/reload behavior.
- Test the intended Elementor transfer process on a fresh target. Verify references, media, dependencies, and output; do not assume a theme installation includes Elementor configuration.

Record passed checks and unresolved items. PHP lint alone does not validate WordPress runtime behavior.

## Deployment and rollback

Before deploying to a client, back up the target database and files, record the validated versions, and prepare a rollback to the previous theme and Elementor configuration. Deploy only the child theme directory plus separately validated Elementor artifacts using the approved deployment process. Keep WordPress core, parent theme, plugins, uploads, credentials, and database dumps outside this repository.

After deployment, repeat activation, frontend/editor, asset, and configuration checks on the target. Restore the previous theme and relevant backed-up configuration if checks fail. This repository currently provides no deployment automation or verified Elementor export package.

## Foundation environment observations

Current native asset-cache setting,2026-11-17: SiteGround Speed Optimizer → Frontend → General → **Remove Query Strings from Static Resources is OFF**. Preserve Elementor's generated CSS/JS version parameters so updated assets receive different browser-cache keys. This was changed after the owner reported vertically stacked phone portfolio cards; horizontal scrolling was subsequently confirmed on the phone after its cache was also cleared. Other optimizer settings were left unchanged. Evidence: [asset-version verification](verification/2026-11-17-carousel-asset-versions.json).

During the foundation inspection on 2026-10-15, Git and Node/npm were available, while PHP, Composer, and WP-CLI were not found on PATH. Git also reported an unreadable user-level ignore file, and a GitHub remote query could not connect. These are local environment observations, not requirements imposed by the theme. No staging runtime or MCP connection has been tested.
