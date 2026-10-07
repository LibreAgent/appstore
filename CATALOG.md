# Catalog contract

The source of truth is [`templates/catalog.json`](templates/catalog.json), schema version 3. Each entry has a stable `type/name` identity, a path under `templates/<type>`, a description, an optional local preview, and a status:

- `ready`: reviewed, licensed, runnable, and validated for its declared runtime.
- `planned`: a visible placeholder without an Install or Create action.
- `deprecated`: retained for existing users but hidden from new creation flows.

The five current `ready` website entries target EmDash's Node.js runtime. Cloudflare variants are reference projects and are not yet wizard choices. The LibreAgents app and WordPress migration solution are `planned`.

Website and app templates are copied into a user's Git repository. A future builder may install agents and connectors as versioned packages; solutions should reference pinned versions of their dependencies. Before any agent, solution, or connector becomes `ready`, add a manifest that declares its runtime, external services, permissions, authentication method, install mode, and validation steps. Never include user credentials or customer content in an item.

Run `npm test` to check catalog paths, previews, statuses, and ready website package files. Consumers should resolve the Appstore to an immutable Git commit before installing an item.
