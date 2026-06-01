/* boundary.js
 * Plays the qry.zone <-> Chasm Logic boundary loader on boundary-crossing link
 * clicks, then navigates. Motion: windup (small counter-rotation) → full spin →
 * overshoot → settle, while the mark recolors gold↔orange (gold->orange entering
 * Chasm Logic, orange->gold leaving). Same script both sides; it detects which
 * side it's on from the URL. Reduced-motion / modifier-clicks / new-tab /
 * downloads / cross-origin all fall through to normal navigation.
 *
 * Tuning knobs live in SPEC (keyframe angle `a`, scale `s`, color `c`, offset `o`)
 * and EASE / DUR below.
 */
(function () {
  'use strict';
  if (window.__qzBoundary) return;
  window.__qzBoundary = true;

  var CL_PREFIX = '/fun/chasm-logic';
  var onCL = location.pathname.indexOf(CL_PREFIX) === 0;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var GOLD = '#f0dfaf', ORANGE = '#F58025';
  var DUR = 1500; // ms; navigation fires at DUR + 200

  // Per-direction mark keyframes. a=angle(deg), s=scale, c=color, o=offset.
  // Entering settles at -405deg (one full extra turn; visually -45deg = diamond).
  // Leaving settles at +360deg (one full turn; visually 0deg = square).
  var SPEC = {
    toChasm: { to: '#0e0e0e', frames: [
      { o: 0,    a: 0,    s: 0.85, c: GOLD },
      { o: 0.16, a: 24,   s: 0.80, c: '#eccd92' }, // windup: counter-rotate (CW)
      { o: 0.82, a: -417, s: 1.07, c: '#f0882f' }, // full spin, overshoot past target
      { o: 1,    a: -405, s: 1.0,  c: ORANGE }      // settle -> diamond
    ]},
    toQry: { to: '#3f3f3f', frames: [
      { o: 0,    a: -45,  s: 0.85, c: ORANGE },
      { o: 0.16, a: -69,  s: 0.80, c: '#f0a154' }, // windup: counter-rotate (CCW)
      { o: 0.82, a: 372,  s: 1.07, c: '#ecd6a0' }, // full spin, overshoot past target
      { o: 1,    a: 360,  s: 1.0,  c: GOLD }         // settle -> square
    ]}
  };

  // Easing per segment (applies to the interval starting at that keyframe):
  // windup ease-out, spin accelerate-through, overshoot decelerate-settle.
  var EASE = ['cubic-bezier(.3,.8,.4,1)', 'cubic-bezier(.45,0,.3,1)', 'cubic-bezier(.2,.85,.25,1)'];

  function classify(a) {
    if (!a || a.target === '_blank' || a.hasAttribute('download')) return null;
    var raw = a.getAttribute('href');
    if (!raw || raw.charAt(0) === '#') return null;
    var url; try { url = new URL(a.href, location.href); } catch (e) { return null; }
    if (url.origin !== location.origin) return null;
    var intoCL = url.pathname.indexOf(CL_PREFIX) === 0;
    if (onCL) return intoCL ? null : 'toQry';   // leaving Chasm Logic for qry
    return intoCL ? 'toChasm' : null;            // entering Chasm Logic from qry
  }

  document.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest ? e.target.closest('a[href]') : null;
    var dir = classify(a);
    if (!dir) return;
    if (reduce) return; // let the browser navigate normally
    e.preventDefault();
    play(SPEC[dir], a.href);
  }, true);

  function play(spec, href) {
    var fromBg = '';
    try { fromBg = getComputedStyle(document.body).backgroundColor; } catch (e) {}
    if (!fromBg || fromBg === 'rgba(0, 0, 0, 0)' || fromBg === 'transparent') {
      try { fromBg = getComputedStyle(document.documentElement).backgroundColor; } catch (e) {}
    }

    var veil = document.createElement('div');
    veil.className = 'boundary-veil';
    veil.setAttribute('aria-hidden', 'true');
    if (fromBg) veil.style.setProperty('--bv-from', fromBg);
    veil.style.setProperty('--bv-to', spec.to);

    var mark = document.createElement('span');
    mark.className = 'boundary-mark';
    var f0 = spec.frames[0];
    mark.style.transform = 'rotate(' + f0.a + 'deg) scale(' + f0.s + ')';
    mark.style.backgroundColor = f0.c;
    veil.appendChild(mark);
    document.body.appendChild(veil);

    veil.getBoundingClientRect(); // reflow so the veil transition runs
    requestAnimationFrame(function () { veil.classList.add('is-active'); });

    if (mark.animate) {
      var kf = spec.frames.map(function (f, i) {
        return {
          offset: f.o,
          transform: 'rotate(' + f.a + 'deg) scale(' + f.s + ')',
          backgroundColor: f.c,
          easing: EASE[Math.min(i, EASE.length - 1)]
        };
      });
      mark.animate(kf, { duration: DUR, fill: 'forwards' });
    } else {
      var last = spec.frames[spec.frames.length - 1];
      mark.style.transform = 'rotate(' + last.a + 'deg) scale(' + last.s + ')';
      mark.style.backgroundColor = last.c;
    }

    var done = false;
    setTimeout(function () { if (done) return; done = true; location.href = href; }, DUR + 200);
  }
})();
