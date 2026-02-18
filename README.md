# qry.zone

Personal site built with [Eleventy v3](https://www.11ty.dev/).

## Getting Started

```bash
npm install
npm start
```

Open [http://localhost:8080](http://localhost:8080) to view the site. Auto-reloads on file changes.

## Build

Generate static files to `_site/`:

```bash
npm run build
```

## Structure

```
src/
├── _includes/              # Layouts and partials (header, footer, base)
├── _data/                  # Data files (explore.json, trees.json)
├── assets/
│   ├── css/                # Stylesheets (globals, per-page)
│   ├── js/                 # Scripts (explore filter, Three.js scene, tree-bg)
│   ├── images/             # SVGs, PNGs, GLB 3D models
│   ├── fun/                # Fun page assets (images, SQLite DB)
│   └── how-to-write-a-zine/  # YAML schema and manifest
├── index.html              # Homepage
├── about.html              # About page
├── explore.html            # Interactive explorer with filtering
├── errata.html             # Corrections and updates
├── styleguide.html         # Design reference
├── sitemap.njk             # Auto-generated sitemap
├── *.html                  # ~35 standalone essays and articles
├── distilling-style/       # Multi-part: AI prompt anatomy, code decisions
├── qrazy/                  # Multi-part: framework deep-dive
├── recursive-mirror/       # Multi-part: voice analysis, second opinions
├── simp-protocol/          # Multi-part: crystal servers, mercury retrograde
├── it-smash/               # Multi-part essay with addendum
├── fun/                    # 30+ interactive experiments and games
└── hidden/                 # WIP content (excluded from sitemap)
```

## Tech Stack

- **Eleventy v3** - Static site generator (HTML, Nunjucks, Markdown templates)
- **Three.js** - 3D background visualizations
- **Prism** - Syntax highlighting (bash, JS, JSX, Python, CSS, Go, JSON, markup)

## Deploy

The `_site/` folder contains static HTML deployable to any static host.

## License

MIT
