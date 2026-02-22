// dougmode.js — Chasm Logic Dark Mode Toggle
// Classification: QUALITY OF LIFE — Filed by: Legal (Doug)
// Reviewed by: Legal (Doug) — Status: DEPLOYED
// Doug requested this. Doug approved this. Doug is the reason you need it.

(function dougMode() {
  'use strict';

  // Path guard — same scope as microdoug
  var path = window.location.pathname;
  if (
    path.indexOf('/fun/chasm-logic') === -1 &&
    path.indexOf('/fun/claudetite-keyz') === -1 &&
    path.indexOf('/fun/apparent-intelligence') === -1
  ) {
    return;
  }

  var STORAGE_KEY = 'chasmlogic-doug-mode';

  // SVG pattern: tiled DOUG text in brick layout
  var svgPattern = "data:image/svg+xml," + encodeURIComponent(
    "<svg xmlns='http://www.w3.org/2000/svg' width='280' height='110'>" +
    "<text x='5' y='45' font-family='monospace' font-size='50' font-weight='900' fill='white'>DOUG</text>" +
    "<text x='145' y='95' font-family='monospace' font-size='50' font-weight='900' fill='white'>DOUG</text>" +
    "</svg>"
  );

  // Create toggle button
  var btn = document.createElement('button');
  btn.id = 'dougModeToggle';
  btn.setAttribute('aria-label', 'Toggle Doug Mode');
  document.body.appendChild(btn);

  // Create DOUG background overlay
  var overlay = document.createElement('div');
  overlay.id = 'dougOverlay';
  document.body.appendChild(overlay);

  // Inject styles
  var style = document.createElement('style');
  style.id = 'dougModeStyles';
  style.textContent = [

    // =========================================================
    // TOGGLE BUTTON
    // =========================================================

    '#dougModeToggle {',
    '  position: fixed; top: 0.75rem; right: 1rem; z-index: 10001;',
    '  font-family: "Roboto Mono", "IBM Plex Mono", "Atkinson Hyperlegible Mono", monospace;',
    '  font-size: 0.6rem; font-weight: 700; letter-spacing: 0.08em;',
    '  text-transform: uppercase; padding: 0.35rem 0.75rem;',
    '  border: 1px solid rgba(255,255,255,0.15); background: rgba(0,0,0,0.6);',
    '  color: #666; cursor: pointer; transition: all 0.2s;',
    '  backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);',
    '}',
    '#dougModeToggle:hover { border-color: #F58025; color: #F58025; }',
    '[data-doug] #dougModeToggle {',
    '  border-color: #F58025; background: #F58025; color: #000;',
    '  box-shadow: 0 0 16px rgba(245,128,37,0.25);',
    '}',
    '[data-doug] #dougModeToggle:hover {',
    '  background: #ff9642; box-shadow: 0 0 20px rgba(245,128,37,0.4);',
    '}',

    // =========================================================
    // DOUG OVERLAY — tiled watermark
    // =========================================================

    '#dougOverlay {',
    '  display: none; position: fixed;',
    '  top: 0; left: 0; right: 0; bottom: 0;',
    '  z-index: 9998; pointer-events: none;',
    '  background-image: url("' + svgPattern + '");',
    '  background-repeat: repeat;',
    '  opacity: 0.01;',
    '}',
    '[data-doug] #dougOverlay { display: block; }',

    // =========================================================
    // DARK MODE — BASE
    // =========================================================

    '[data-doug] body {',
    '  background: #0e0e0e !important;',
    '  color: #b8b8b8 !important;',
    '}',
    'body { transition: background-color 0.3s ease, color 0.3s ease; }',

    // =========================================================
    // SINKHOLE PAGE — CSS CUSTOM PROPERTY OVERRIDES
    // =========================================================

    '[data-doug] {',
    '  --bg: #0e0e0e;',
    '  --surface: #161616;',
    '  --text: #b8b8b8;',
    '  --text-secondary: #888;',
    '  --text-dim: #666;',
    '  --border: #2a2a2a;',
    '  --border-light: #222;',
    '  --teal-light: #0a2a26;',
    '}',

    // =========================================================
    // NAVIGATION
    // =========================================================

    '[data-doug] nav {',
    '  background: #111 !important;',
    '  border-color: #333 !important;',
    '}',
    '[data-doug] nav .back-link {',
    '  color: #ccc !important;',
    '  border-color: #555 !important;',
    '}',
    '[data-doug] nav .back-link:hover {',
    '  background: #ccc !important;',
    '  color: #111 !important;',
    '}',

    // =========================================================
    // HARASSMENT BANNER
    // =========================================================

    '[data-doug] .harassment-banner {',
    '  background: #1a1700 !important;',
    '  color: #a89530 !important;',
    '  border-color: #333 !important;',
    '}',
    '[data-doug] .harassment-banner:hover {',
    '  background: #5a1a1a !important;',
    '  color: #ff8888 !important;',
    '}',

    // =========================================================
    // SECTION DIVIDERS & BORDERS
    // =========================================================

    '[data-doug] .section-divider { background: #333 !important; }',
    '[data-doug] section + section { border-color: #2a2a2a !important; }',
    '[data-doug] .stats { border-color: #333 !important; }',
    '[data-doug] .index-footer { border-color: #333 !important; }',
    '[data-doug] .footnote { border-color: #333 !important; }',

    // =========================================================
    // HEADINGS & TEXT
    // =========================================================

    '[data-doug] h1, [data-doug] h2, [data-doug] h3, [data-doug] h4 {',
    '  color: #e0e0e0 !important;',
    '}',
    '[data-doug] .page-header h1 { color: #e8e8e8 !important; }',
    '[data-doug] .doc-title { color: #e0e0e0 !important; }',
    '[data-doug] .nav-brand { color: #e0e0e0 !important; }',
    '[data-doug] p { color: #999 !important; }',
    '[data-doug] .page-header p { color: #888 !important; }',

    // =========================================================
    // DOCUMENT INDEX — ENTRIES
    // =========================================================

    '[data-doug] .doc-entry { border-color: #2a2a2a !important; }',
    '[data-doug] .doc-live:hover { background: #1a1a1a !important; }',

    // =========================================================
    // CARDS & CONTAINERS
    // =========================================================

    '[data-doug] .feature-card,',
    '[data-doug] .product-card,',
    '[data-doug] .store-status,',
    '[data-doug] .hero-product,',
    '[data-doug] .test-round,',
    '[data-doug] .voicemail,',
    '[data-doug] .addendum,',
    '[data-doug] .install-block {',
    '  background: #161616 !important;',
    '  border-color: #333 !important;',
    '}',
    '[data-doug] .feature-card:hover,',
    '[data-doug] .product-card:hover {',
    '  background: #1c1c1c !important;',
    '  box-shadow: 6px 6px 0 0 #222 !important;',
    '}',
    '[data-doug] .install-body { background: #161616 !important; }',
    '[data-doug] .install-block {',
    '  box-shadow: 12px 12px 0 0 #1a1a1a !important;',
    '}',

    // =========================================================
    // QA PAGE — DOC HEADER & TEST ROUNDS
    // =========================================================

    '[data-doug] .doc-header {',
    '  background: #131313 !important;',
    '  border-color: #333 !important;',
    '  box-shadow: 12px 12px 0 0 #1a1a1a !important;',
    '}',
    '[data-doug] .test-round-body { background: #161616 !important; }',
    '[data-doug] .test-result {',
    '  background: #111 !important;',
    '  border-color: #2a2a2a !important;',
    '}',

    // =========================================================
    // BOX SHADOWS
    // =========================================================

    '[data-doug] .voicemail {',
    '  box-shadow: 8px 8px 0 0 #1a1a1a !important;',
    '}',
    '[data-doug] .addendum {',
    '  box-shadow: 8px 8px 0 0 rgba(245,128,37,0.15) !important;',
    '}',
    '[data-doug] .brutal-card {',
    '  box-shadow: 12px 12px 0 0 #1a1a1a !important;',
    '}',
    '[data-doug] .aperture-btn {',
    '  box-shadow: 8px 8px 0 0 #222 !important;',
    '}',

    // =========================================================
    // TABLES
    // =========================================================

    '[data-doug] .meta-table td,',
    '[data-doug] .cmd-table td,',
    '[data-doug] .spec-table tr,',
    '[data-doug] .issue-table td,',
    '[data-doug] .issue-table th,',
    '[data-doug] .incident-table td {',
    '  border-color: #2a2a2a !important;',
    '}',
    '[data-doug] .incident-table thead {',
    '  background: #1a1a1a !important;',
    '}',
    '[data-doug] .incident-table tbody tr:hover {',
    '  background: #1a1a1a !important;',
    '}',

    // =========================================================
    // BADGES
    // =========================================================

    '[data-doug] .badge-type {',
    '  background: #222 !important;',
    '  color: #999 !important;',
    '  border-color: #444 !important;',
    '}',

    // =========================================================
    // PRODUCT CARDS — STORE PAGE
    // =========================================================

    '[data-doug] .product-footer { border-color: #333 !important; }',
    '[data-doug] .store-stats { border-color: #2a2a2a !important; }',
    '[data-doug] .store-notice { border-color: #F58025 !important; }',
    '[data-doug] .cat-header {',
    '  border-color: #333 !important;',
    '  color: #777 !important;',
    '}',

    // =========================================================
    // WRISTBAND PAGE — SPEC TABLE & BIOMETRIC (already dark terminal)
    // =========================================================

    '[data-doug] .spec-note { color: #666 !important; }',

    // =========================================================
    // INLINE STYLE OVERRIDES — catch white backgrounds
    // =========================================================

    '[data-doug] div[style*="background:white"],',
    '[data-doug] div[style*="background: white"] {',
    '  background: #161616 !important;',
    '}',

    // =========================================================
    // FIXED BACK LINK (most pages)
    // =========================================================

    '[data-doug] a.back-link {',
    '  border-color: #333 !important;',
    '}',

    // =========================================================
    // SINKHOLE-SPECIFIC
    // =========================================================

    '[data-doug] .testimonial,',
    '[data-doug] .roadmap-item {',
    '  background: #161616 !important;',
    '  border-color: #2a2a2a !important;',
    '}',
    '[data-doug] .req-table td { border-color: #2a2a2a !important; }',

  ].join('\n');
  document.head.appendChild(style);

  // Toggle logic
  function setDougMode(on) {
    if (on) {
      document.documentElement.setAttribute('data-doug', '');
      btn.textContent = '\u25C9 DOUG MODE';
    } else {
      document.documentElement.removeAttribute('data-doug');
      btn.textContent = '\u25CB DOUG MODE';
    }
    try { localStorage.setItem(STORAGE_KEY, on ? '1' : '0'); } catch (e) { }
  }

  btn.addEventListener('click', function () {
    var isOn = document.documentElement.hasAttribute('data-doug');
    setDougMode(!isOn);
  });

  // Init from storage
  var saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { }
  setDougMode(saved === '1');
})();
