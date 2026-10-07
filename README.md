# LibreApps Appstore

LibreApps Appstore is a free collection of starting points for websites, apps, agents, solutions, and connectors. Templates can use different languages, frameworks, and hosting services. Each ready template explains what it needs.

## Create a website

The [LibreAgents Dashboard](https://github.com/LibreAgent/cms) currently supports five website templates. In the Dashboard, choose **New → New Site**, connect an existing empty GitHub repository, and pick a template. The Dashboard puts the site files in a local folder and your GitHub repository, then starts the EmDash editor in Docker.

| Template | A good starting point for |
| --- | --- |
| [Blank](templates/website/blank) | A simple site you want to design from scratch |
| [Starter](templates/website/starter) | A site with pages, posts, categories, and tags |
| [Blog](templates/website/blog) | A publication with search, RSS, and featured stories |
| [Marketing](templates/website/marketing) | A landing page with features, testimonials, pricing, and FAQs |
| [Portfolio](templates/website/portfolio) | A showcase for projects and case studies |

The [website folder](templates/website) also has Cloudflare example projects. You can browse their files, but the Dashboard does not offer them in its New Site wizard yet.

## Explore the other categories

| Category | What it will contain |
| --- | --- |
| [Apps](templates/app) | Starting points for applications |
| [Agents](templates/agent) | Agent definitions and workflows |
| [Solutions](templates/solution) | Complete workflows, such as WordPress migration |
| [Connectors](templates/connector) | Integrations with other services |

These categories currently contain plans or placeholders. For example, [LibreAgents](templates/app/LibreApp/LibreAgents) and [Migrate WordPress Site](templates/solution/migrate-wordpress) are not ready to run.

The [catalog](templates/catalog.json) marks each item as **ready** or **planned**. The Dashboard shows ready website templates and records the exact Appstore version used for each new site. See the [catalog guide](CATALOG.md) for technical details.

## License

MIT Licensed
