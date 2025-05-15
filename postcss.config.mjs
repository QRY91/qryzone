// postcss.config.mjs
const config = {
  plugins: {
    autoprefixer: {},
    tailwindcss: {}, // Use the plugin name directly
    "tailwindcss/nesting": {}, // Optional: if you want to use CSS nesting
  },
};
export default config;
