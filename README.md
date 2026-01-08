# qry.zone

Personal site built with [11ty](https://www.11ty.dev/).

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm start
```

Open [http://localhost:8080](http://localhost:8080) to view the site. The server auto-reloads on file changes.

## Build

Generate static files to `_site/`:

```bash
npm run build
```

## Structure

```
src/
├── _includes/       # HTML partials (header, footer, base layout)
├── _data/           # JSON data files (explore.json)
├── assets/
│   ├── css/         # Stylesheets
│   ├── js/          # JavaScript (header menu, explore filter, Three.js)
│   └── images/      # Static assets
├── index.html       # Homepage
├── about.html
├── explore.html
├── fun/             # Satirical side projects
└── notes/           # Seedling notes
```

## Deploy

The `_site/` folder contains static HTML that can be deployed anywhere:
- GitHub Pages
- Netlify
- Vercel
- Any static host

## License

MIT
