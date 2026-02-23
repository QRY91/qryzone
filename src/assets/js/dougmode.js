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

  // Inject toggle button styles
  var style = document.createElement('style');
  style.textContent = [
    '#dougModeToggle {',
    '  position: fixed; top: 3.65rem; right: 1rem; z-index: 10001;',
    '  font-family: "Roboto Mono", "IBM Plex Mono", "Atkinson Hyperlegible Mono", monospace;',
    '  font-size: 0.6rem; font-weight: 700; letter-spacing: 0.08em;',
    '  text-transform: uppercase; padding: 0.35rem 0.75rem;',
    '  border: 1px solid var(--cl-border, #333); background: var(--cl-surface, #161616);',
    '  color: var(--cl-text-dim, #666); cursor: pointer; transition: all 0.2s;',
    '}',
    '#dougModeToggle:hover { border-color: #F58025; color: #F58025; }',
    '[data-theme="light"] #dougModeToggle {',
    '  border: 1px solid rgba(0,0,0,0.15); background: rgba(255,255,255,0.8);',
    '  color: #999; backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);',
    '}',
  ].join('\n');
  document.head.appendChild(style);

  // Create toggle button
  var btn = document.createElement('button');
  btn.id = 'dougModeToggle';
  btn.setAttribute('aria-label', 'Toggle Doug Mode');
  document.body.appendChild(btn);

  // Toggle logic — dark is default (no attribute), light is opt-in
  function setMode(light) {
    if (light) {
      document.documentElement.setAttribute('data-theme', 'light');
      btn.textContent = '\u25CB DOUG MODE';
    } else {
      document.documentElement.removeAttribute('data-theme');
      btn.textContent = '\u25C9 DOUG MODE';
    }
    try { localStorage.setItem(STORAGE_KEY, light ? '0' : '1'); } catch (e) { }
  }

  btn.addEventListener('click', function () {
    var isLight = document.documentElement.getAttribute('data-theme') === 'light';
    setMode(!isLight);
  });

  // Init from storage — default to dark (doug mode on)
  var saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { }
  setMode(saved === '0');
})();
