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
