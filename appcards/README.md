# AppCard development catalog

`catalog.json` indexes versioned AppCard manifests. Cards may be filtered by `scope` (`public` or `private`), `category` (`web`, `office`, or `server`), and `status`. The first card is a public development smoke fixture that runs a LibreAgents UI layout in a Docker container. Its source is pinned to an App Store Git commit and its Compose artifact is checked by SHA-256.

The manifest follows the container runtime described in AVPlatform's `apps/ui/appcard-spec.md`. AVPlatform's current `shared/schemas/appcard-v1.schema.json` does not yet admit container runtimes, so this catalog uses a narrow development validator in `scripts/check-appcards.mjs`. Do not treat this test format as production admission. Production publication needs an immutable OCI image digest, artifact signature, role mapping, and a private catalog service.

This repository is public. A card marked `private` here would still expose its JSON to everyone; private cards must be stored in a private repository or authenticated registry. Never put private source URLs, customer layouts, credentials, or secrets in this public catalog. The Dashboard launch endpoint accepts only this development smoke card and binds its web port to localhost.
