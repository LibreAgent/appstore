# LibreApps Appstore

LibreApps Appstore is the public catalog for downloadable LibreAgent starters. The [LibreAgents Dashboard](https://github.com/LibreAgent/cms) currently installs the ready Node.js website templates into a GitHub repository and starts their Docker editor. The other categories are reserved for the future [LibreAgent builder](https://github.com/LibreAgent).

| Category | Directory | Intended use |
| --- | --- | --- |
| Website | [`templates/website`](templates/website) | Astro and EmDash site starters |
| App | [`templates/app`](templates/app) | Application starters |
| Agent | [`templates/agent`](templates/agent) | Agent definitions and workflows |
| Solution | [`templates/solution`](templates/solution) | Composed workflows, such as WordPress migration |
| Connector | [`templates/connector`](templates/connector) | Service integrations with declared permissions |

The versioned [catalog](templates/catalog.json) records each item's type, path, description, and status. Only `ready` items can be installed. `planned` items describe future packages and contain no runnable source. The Dashboard pins the Appstore Git commit when it installs a website template.

| Template | Node.js | Cloudflare |
| --- | --- | --- |
| Blank | [`templates/website/blank`](templates/website/blank) | — |
| Starter | [`templates/website/starter`](templates/website/starter) | [`templates/website/starter-cloudflare`](templates/website/starter-cloudflare) |
| Blog | [`templates/website/blog`](templates/website/blog) | [`templates/website/blog-cloudflare`](templates/website/blog-cloudflare) |
| Marketing | [`templates/website/marketing`](templates/website/marketing) | [`templates/website/marketing-cloudflare`](templates/website/marketing-cloudflare) |
| Portfolio | [`templates/website/portfolio`](templates/website/portfolio) | [`templates/website/portfolio-cloudflare`](templates/website/portfolio-cloudflare) |

The Node.js variants use local SQLite and file storage. The Cloudflare variants are included as upstream reference projects but are not offered in the Docker wizard. The catalog pins the tested EmDash release (`1.2.0` in this snapshot) alongside the template source. [LibreAgents](templates/app/LibreApp/LibreAgents) and [Migrate WordPress Site](templates/solution/migrate-wordpress) are planned entries; neither is runnable.

## Source and license

Starter, Blog, Marketing, Portfolio, and their Cloudflare variants are copied from [`emdash-cms/templates`](https://github.com/emdash-cms/templates) commit [`1930243108073ebb41ff48533678af7635b01c37`](https://github.com/emdash-cms/templates/tree/1930243108073ebb41ff48533678af7635b01c37). The mirror’s Blank folder is a placeholder, so the runnable Blank template is copied from [`emdash-cms/emdash`](https://github.com/emdash-cms/emdash/tree/b5f37c646f3639f07ebdc090e0ffcf48bdb4d684/templates/blank) at the tested `1.2.0` release commit. The three homepage preview screenshots come from [`emdash-cms/emdash`](https://github.com/emdash-cms/emdash) commit [`0a929da1b4de80c7f82f23458c2b6282455062bb`](https://github.com/emdash-cms/emdash/tree/0a929da1b4de80c7f82f23458c2b6282455062bb/assets/templates). Upstream EmDash is MIT licensed; see [`templates/website/EMDASH-LICENSE.txt`](templates/website/EMDASH-LICENSE.txt). Review the provenance before adding third-party themes or images.

The initial website files were copied from the public `StellantAI/astro-templates` snapshot at commit `99a0e51c7218ce5442b9b62f444fa04f545e5162`; its repository history was not copied. No private StellantAI client files or customer migration data are included. This repository is a curated snapshot, not an automatic upstream mirror. Review template code, declared permissions, licenses, catalog entries, and previews together before marking an item `ready`.
