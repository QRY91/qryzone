const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const Prism = require("prismjs");
const loadLanguages = require("prismjs/components/");

// Load all languages we use
loadLanguages(["bash", "javascript", "jsx", "python", "markup", "css", "go", "json"]);

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);

  // Auto-highlight <pre><code class="language-*"> blocks in HTML output
  eleventyConfig.addTransform("prism-auto", function(content) {
    if (!this.page.outputPath || !this.page.outputPath.endsWith(".html")) {
      return content;
    }
    return content.replace(
      /<pre>[\s]*<code class="language-(\w+)">([\s\S]*?)<\/code>[\s]*<\/pre>/g,
      (match, lang, code) => {
        const grammar = Prism.languages[lang];
        if (!grammar) return match;
        const decoded = code
          .replace(/&lt;/g, "<").replace(/&gt;/g, ">")
          .replace(/&amp;/g, "&").replace(/&quot;/g, '"')
          .replace(/&#39;/g, "'");
        const highlighted = Prism.highlight(decoded, grammar, lang);
        return `<pre class="language-${lang}"><code class="language-${lang}">${highlighted}</code></pre>`;
      }
    );
  });

  // Date filter for sitemap
  eleventyConfig.addFilter("dateISO", (date) => {
    return new Date(date).toISOString().split('T')[0];
  });

  // Build explore collection from page frontmatter + external projects
  eleventyConfig.addCollection("explore", function(collectionApi) {
    const fs = require('fs');
    const path = require('path');

    // Gather all pages with explore: true
    const pages = collectionApi.getAll().filter(item => item.data.explore === true);

    const items = pages.map(item => {
      const d = item.data;
      // Title: use exploreTitle if set, else strip " - qry.zone" from title
      let title = d.exploreTitle;
      if (!title && d.title) {
        title = d.title.replace(/\s*-\s*qry\.zone$/i, '').trim();
      }
      title = title || 'Untitled';

      return {
        title: title,
        description: d.tagline || d.description || '',
        href: item.url,
        tags: d.exploreTags || [],
        type: d.exploreType || 'article',
        status: d.status || 'seedling',
        connections: d.connections || [],
        firstCreated: d.firstCreated || null,
        lastUpdated: d.lastUpdated || null,
        revisions: d.revisions || 1
      };
    });

    // Merge external projects
    let external = [];
    try {
      const extPath = path.join(__dirname, 'src', '_data', 'externalProjects.json');
      external = JSON.parse(fs.readFileSync(extPath, 'utf8'));
    } catch (e) {
      console.warn('Could not load externalProjects.json:', e.message);
    }

    const externalItems = external.map(proj => ({
      title: proj.title || '',
      description: proj.description || '',
      href: proj.href || '#',
      tags: proj.tags || [],
      type: proj.type || 'project',
      status: proj.status || 'seedling',
      connections: proj.connections || [],
      firstCreated: proj.firstCreated || null,
      lastUpdated: proj.lastUpdated || null,
      revisions: proj.revisions || 1
    }));

    return [...items, ...externalItems];
  });

  // Pass through static assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  // Watch for changes in assets
  eleventyConfig.addWatchTarget("src/assets/");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["html", "njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
