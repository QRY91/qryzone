# qry.zone

Eleventy v3 static site. Essays, tools, interactive experiments, and Chasm Logic (fictional corporate satire). Dark theme, Zenburn palette, accessibility-first.

## Design Context

### Users
Developers and people interested in local-first tools, developer experience, organizational dysfunction patterns, and honest AI collaboration. They arrive through search, GitHub, or direct links. They want to read something real, not polished marketing copy. They value substance and will leave if the site feels like a template.

### Brand Personality
A blend of three registers:
- **Honest and direct** — transparent about AI assistance, states things or questions them, doesn't hedge
- **Technical and curious** — developer-focused, exploratory, documents learning from dysfunction
- **Warm and dry** — Zenburn warmth, deadpan humor (Chasm Logic), staccato rhythm with flowing interludes

Voice patterns (from recursive-mirror voice analysis):
- Fragment punches. Short. Short. Longer flowing thought. Short.
- Profanity as punctuation — emphasis, not filler
- Self-questioning and rhetorical escalation
- "Please." at the end of earnest requests
- No hedging ("perhaps", "it could be argued"). State it or question it.

### Aesthetic Direction
- **Dark mode primary.** Zenburn-derived palette: warm grays (#3f3f3f bg), soft gold accent (#f0dfaf), 4-tier depth system (sunken/bg/surface/hover)
- **Minimal decoration.** 2px border-radius. No glassmorphism, no gradients, no rounded-rectangle cards with drop shadows. Borders and spacing do the work.
- **Atkinson Hyperlegible** for both sans and mono — accessibility by default, not afterthought
- **Hexagonal background pattern** — subtle tactile texture
- **Torus color system** for content categories: philosophy (#f0dfaf gold), craft (#8cd0d3 cyan), play (#dc8cc3 pink)

**Anti-references (what this must NOT look like):**
- Corporate SaaS landing page (hero metrics, gradient CTAs, testimonial carousels)
- Polished design portfolio (case study grids, Dribbble-ready but hollow)
- Generic dev blog (Medium layout, sidebar widgets, newsletter popups, cookie banners)

### Design Principles

1. **The writing is the interface.** Design serves content. If a visual element doesn't help the reader understand or navigate, remove it. The site's value is in the thinking, not the presentation.

2. **Visible repairs over hidden polish.** Errata uses kintsugi — gold-filled cracks. Corrections are shown, not buried. Status badges (seedling/growing/evergreen) signal maturity honestly. The site is unfinished and that's fine.

3. **Diegetic design.** Chasm Logic's brutalist CSS participates in its fiction. The quips 8x8 grid IS the logo. The hexagonal background pattern IS the texture. Design elements should have a reason to exist beyond decoration.

4. **Accessible by default.** WCAG AA target. Atkinson Hyperlegible fonts. Skip-nav links. Semantic landmarks. Reduced-motion support. Contrast ratios checked. Accessibility is structural, not a remediation pass.

5. **No AI slop.** If it looks like every other AI-generated interface from 2024-2025, it's wrong. No purple-to-blue gradients, no Inter font, no glassmorphism, no bounce easing, no hero metric grids. See the styleguide's antislop framework — it applies to design too.

## Tech Stack
- **Eleventy v3** — static site generator, Nunjucks templates
- **Three.js** — homepage 3D visualization
- **Prism.js** — syntax highlighting (Zenburn theme)
- **No CSS framework** — hand-rolled design system via CSS custom properties
- **No JS framework** — vanilla JS, progressive enhancement

## Key Files
- `src/assets/css/globals.css` — design tokens, base styles, card/badge patterns
- `src/assets/css/chasm-logic.css` — Chasm Logic design system (separate from main)
- `src/assets/css/article-utils.css` — shared article patterns (callouts, grids, examples)
- `src/_includes/base.njk` — main layout template
- `src/assets/js/three-scene.js` — homepage 3D scene
- `src/assets/js/explore.js` — explore page filtering
- `src/assets/js/microdoug.js` — Doug linguistic contamination engine
