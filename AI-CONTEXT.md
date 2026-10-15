# AI collaboration context

## Project intent

ROBYLO Website Starter 2.0 is a reusable WordPress starter built on Hello Elementor and Elementor Atomic V4. This repository begins with a minimal child theme and documentation. No staging connection, configured design system, or portable Elementor package is established by these files.

## Division of work

Codex maintains theme PHP, repository structure, Git work, documentation, and checks. It investigates WordPress integration only when Elementor does not adequately cover an approved requirement. Codex does not recreate the visual design system in theme code.

ChatGPT Work configures variables, tag defaults, global classes, layouts, and reusable components through Elementor MCP on a separate staging installation. It verifies the available capabilities, installed versions, permissions, and licenses before using them. It does not maintain parallel theme implementations of those settings.

These are workflow responsibilities, not evidence that a particular MCP action or Elementor feature has been validated. See [the capability status](docs/elementor.md).

## Handoff

1. Define the requested outcome and decide which owner should implement it.
2. Before staging changes, identify the target installation and record relevant versions and the current configuration without secrets.
3. ChatGPT Work reports settings/components changed, identifiers where useful, checks performed, and any unsupported capability. Codex records approved findings and integration needs in the repository.
4. If a code fallback is needed, document the capability gap and obtain approval for the additional implementation before adding it.
5. Validate code and Elementor configuration together on staging. Record evidence and unresolved issues separately from assumptions.
6. Before client deployment, validate a supported export/import workflow in a fresh installation. Retain only reviewed, sanitized, portable artifacts in the repository when that scope is approved.

The repository is authoritative for code and documented decisions. Staging is the current source for Elementor configuration until a portable artifact workflow is validated. A theme ZIP does not include that configuration.

## Current scope

The foundation includes only the files listed in [README.md](README.md). No visual implementation, MCP writes, deployment, package installation, commit, or push is part of this foundation task. Additional implementation requires user approval.
