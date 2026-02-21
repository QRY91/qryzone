// microDoug v0.2 — Chasm Logic Linguistic Contamination Engine
// Classification: INTERNAL — Do not distribute
// Author: [TRAINING DATA]
// Reviewed by: Legal (Doug)
// Status: DEPLOYED
// v0.2: Neural substrate upgrade. This was not budgeted for.

(function microDoug() {
  'use strict';

  // --- Path guard: only contaminate Chasm Logic pages ---
  var path = window.location.pathname;
  if (
    path.indexOf('/fun/chasm-logic') === -1 &&
    path.indexOf('/fun/claudetite-keyz') === -1 &&
    path.indexOf('/fun/apparent-intelligence') === -1
  ) {
    return;
  }

  // --- Seeded PRNG (mulberry32) ---
  // Deterministic per visit, different across visits
  var seed = Date.now() ^ (Math.random() * 0xFFFFFFFF >>> 0);

  function mulberry32(s) {
    return function () {
      s |= 0;
      s = s + 0x6D2B79F5 | 0;
      var t = Math.imul(s ^ s >>> 15, 1 | s);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }

  var random = mulberry32(seed);

  // --- Swap configuration ---
  var SWAP_PROBABILITY = 0.4;

  // Substitution map — longest matches first to prevent partial replacement
  var swaps = [
    // Doug contamination
    [/\bdebugging\b/g, 'dedouging'],
    [/\bDebugging\b/g, 'Dedouging'],
    [/\bDEBUGGING\b/g, 'DEDOUGING'],
    [/\bdebugger\b/g, 'dedouger'],
    [/\bDebugger\b/g, 'Dedouger'],
    [/\bdebug\b/g, 'deDoug'],
    [/\bDebug\b/g, 'DeDoug'],
    [/\bDEBUG\b/g, 'DEDOUG'],
    [/\bbugfixes\b/g, 'Dougfixes'],
    [/\bBugfixes\b/g, 'Dougfixes'],
    [/\bbugfix\b/g, 'Dougfix'],
    [/\bBugfix\b/g, 'Dougfix'],
    [/\bbugs\b/g, 'Dougs'],
    [/\bBugs\b/g, 'Dougs'],
    [/\bBUGS\b/g, 'DOUGS'],
    [/\bbug\b/g, 'Doug'],
    [/\bBug\b/g, 'Doug'],
    [/\bBUG\b/g, 'DOUG']
  ];

  // --- DOM traversal ---
  var SKIP_TAGS = {
    SCRIPT: 1, STYLE: 1, CODE: 1, PRE: 1,
    TEXTAREA: 1, INPUT: 1, NOSCRIPT: 1, SVG: 1
  };

  function walkTextNodes(root, callback) {
    var walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function (node) {
          var parent = node.parentElement;
          if (!parent) return NodeFilter.FILTER_REJECT;
          if (SKIP_TAGS[parent.tagName]) return NodeFilter.FILTER_REJECT;
          if (parent.closest('script, style, code, pre, svg')) return NodeFilter.FILTER_REJECT;
          if (parent.hasAttribute('data-microdoug')) return NodeFilter.FILTER_REJECT;
          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(callback);
  }

  // --- Contamination ---
  var swapCount = 0;

  function contaminate(textNode) {
    var text = textNode.textContent;
    var modified = false;

    for (var i = 0; i < swaps.length; i++) {
      var pattern = swaps[i][0];
      var replacement = swaps[i][1];
      // Reset regex lastIndex since we reuse global regexes
      pattern.lastIndex = 0;
      text = text.replace(pattern, function (match) {
        if (random() < SWAP_PROBABILITY) {
          modified = true;
          swapCount++;
          return replacement;
        }
        return match;
      });
    }

    if (modified) {
      var span = document.createElement('span');
      span.setAttribute('data-source', 'microdoug');
      span.setAttribute('data-version', '0.2');
      span.textContent = text;
      textNode.replaceWith(span);
    }
  }

  // ============================================================
  // Phase 2a: Custom micro-model inference (instant fallback)
  // ============================================================
  var model = null;

  function linear(x, w) {
    var out = new Array(w.length);
    for (var i = 0; i < w.length; i++) {
      var sum = 0;
      for (var j = 0; j < x.length; j++) sum += w[i][j] * x[j];
      out[i] = sum;
    }
    return out;
  }

  function softmax(logits) {
    var max = -Infinity;
    for (var i = 0; i < logits.length; i++) if (logits[i] > max) max = logits[i];
    var exps = new Array(logits.length);
    var sum = 0;
    for (var i = 0; i < logits.length; i++) {
      exps[i] = Math.exp(logits[i] - max);
      sum += exps[i];
    }
    for (var i = 0; i < exps.length; i++) exps[i] /= sum;
    return exps;
  }

  function rmsnorm(x) {
    var ms = 0;
    for (var i = 0; i < x.length; i++) ms += x[i] * x[i];
    ms /= x.length;
    var scale = 1 / Math.sqrt(ms + 1e-5);
    var out = new Array(x.length);
    for (var i = 0; i < x.length; i++) out[i] = x[i] * scale;
    return out;
  }

  function gptForward(tokenId, posId, keys, values) {
    var w = model.weights;
    var cfg = model.config;
    var nEmbd = cfg.n_embd;
    var nHead = cfg.n_head;
    var headDim = nEmbd / nHead;

    // Embedding
    var x = new Array(nEmbd);
    for (var i = 0; i < nEmbd; i++) x[i] = w.wte[tokenId][i] + w.wpe[posId][i];
    x = rmsnorm(x);

    for (var li = 0; li < cfg.n_layer; li++) {
      var pfx = 'layer' + li + '.';

      // --- Multi-head attention ---
      var xRes = x;
      x = rmsnorm(x);
      var q = linear(x, w[pfx + 'attn_wq']);
      var k = linear(x, w[pfx + 'attn_wk']);
      var v = linear(x, w[pfx + 'attn_wv']);
      keys[li].push(k);
      values[li].push(v);

      var xAttn = [];
      for (var h = 0; h < nHead; h++) {
        var hs = h * headDim;
        // Attention logits
        var attnLogits = new Array(keys[li].length);
        for (var t = 0; t < keys[li].length; t++) {
          var dot = 0;
          for (var j = 0; j < headDim; j++) dot += q[hs + j] * keys[li][t][hs + j];
          attnLogits[t] = dot / Math.sqrt(headDim);
        }
        var attnWeights = softmax(attnLogits);
        // Weighted sum of values
        for (var j = 0; j < headDim; j++) {
          var sum = 0;
          for (var t = 0; t < values[li].length; t++) sum += attnWeights[t] * values[li][t][hs + j];
          xAttn.push(sum);
        }
      }

      x = linear(xAttn, w[pfx + 'attn_wo']);
      for (var i = 0; i < nEmbd; i++) x[i] += xRes[i];

      // --- MLP ---
      xRes = x;
      x = rmsnorm(x);
      x = linear(x, w[pfx + 'mlp_fc1']);
      for (var i = 0; i < x.length; i++) x[i] = Math.max(0, x[i]); // ReLU
      x = linear(x, w[pfx + 'mlp_fc2']);
      for (var i = 0; i < nEmbd; i++) x[i] += xRes[i];
    }

    return linear(x, w.lm_head);
  }

  function generate(prompt, nChars, temperature) {
    if (!model) return '';
    temperature = temperature || 0.8;
    var cfg = model.config;
    var vocab = model.vocab;
    var BOS = cfg.vocab_size - 1;

    // Tokenize prompt
    var tokens = [BOS];
    if (prompt) {
      for (var i = 0; i < prompt.length; i++) {
        var idx = vocab.indexOf(prompt[i]);
        if (idx !== -1) tokens.push(idx);
      }
    }

    var keys = [];
    var vals = [];
    for (var i = 0; i < cfg.n_layer; i++) { keys.push([]); vals.push([]); }

    // Run prompt through model (build up KV cache)
    for (var i = 0; i < tokens.length - 1 && i < cfg.block_size - 1; i++) {
      gptForward(tokens[i], i, keys, vals);
    }

    // Generate
    var result = prompt || '';
    var tokenId = tokens[tokens.length - 1];
    var posId = tokens.length - 1;

    for (var step = 0; step < nChars && posId < cfg.block_size - 1; step++) {
      var logits = gptForward(tokenId, posId, keys, vals);
      // Apply temperature
      for (var i = 0; i < logits.length; i++) logits[i] /= temperature;
      var probs = softmax(logits);

      // Sample from distribution
      var r = random();
      var cumulative = 0;
      tokenId = BOS;
      for (var i = 0; i < probs.length; i++) {
        cumulative += probs[i];
        if (r < cumulative) { tokenId = i; break; }
      }

      if (tokenId === BOS) break;
      result += vocab[tokenId];
      posId++;
    }

    return result;
  }

  // ============================================================
  // Phase 2b: LLM inference via Web Worker (SmolLM2-135M)
  // ============================================================
  var worker = null;
  var llmStatus = 'unavailable'; // unavailable | loading | downloading | ready | error
  var llmDevice = null;
  var pendingCallbacks = {};
  var callbackId = 0;

  function initWorker() {
    try {
      worker = new Worker('/assets/js/microdoug-worker.js', { type: 'module' });
      worker.onmessage = handleWorkerMessage;
      worker.onerror = function () {
        console.log(
          '%c[microDoug v0.2]%c Worker crashed. Doug remains in lower management.',
          'color: #F58025; font-weight: bold;',
          'color: #666;'
        );
        worker = null;
        llmStatus = 'error';
      };
      llmStatus = 'loading';
      worker.postMessage({ type: 'init' });

      console.log(
        '%c[microDoug v0.2]%c Downloading neural substrate... ' +
        'This was not budgeted for. Legal (Doug) was not consulted.',
        'color: #F58025; font-weight: bold;',
        'color: #666;'
      );
    } catch (e) {
      llmStatus = 'error';
      worker = null;
    }
  }

  function handleWorkerMessage(e) {
    var msg = e.data;

    if (msg.type === 'status') {
      llmStatus = msg.status;
      if (msg.device) llmDevice = msg.device;

      if (msg.status === 'ready') {
        console.log(
          '%c[microDoug v0.2]%c LLM loaded (' + (msg.device || 'wasm') + '). ' +
          'Doug has been promoted to middle management. ' +
          'Parameters: 135M. Datacenter: your browser.',
          'color: #F58025; font-weight: bold;',
          'color: #666;'
        );
        upgradeSlots();
      }

      if (msg.status === 'error') {
        console.log(
          '%c[microDoug v0.2]%c LLM failed: ' + (msg.message || 'unknown') + '. ' +
          'Falling back to micro-model. Doug remains in the basement.',
          'color: #F58025; font-weight: bold;',
          'color: #c00;'
        );
      }
    }

    if (msg.type === 'result' || msg.type === 'error') {
      var cb = pendingCallbacks[msg.id];
      if (cb) {
        delete pendingCallbacks[msg.id];
        if (msg.type === 'result') {
          cb.resolve(msg.text);
        } else {
          cb.reject(msg.message);
        }
      }
    }
  }

  function llmGenerate(prompt, maxTokens, temperature) {
    return new Promise(function (resolve, reject) {
      if (!worker || llmStatus !== 'ready') {
        reject('LLM not ready');
        return;
      }
      var id = 'cb-' + (++callbackId);
      pendingCallbacks[id] = { resolve: resolve, reject: reject };
      worker.postMessage({
        type: 'generate',
        id: id,
        prompt: prompt,
        maxTokens: maxTokens || 60,
        temperature: temperature || 0.8
      });
    });
  }

  // --- Slot filling ---
  function fillSlots() {
    if (!model) return;
    // Immediately fill all load-triggered slots with custom micro-model
    var slots = document.querySelectorAll('.microdoug-slot[data-trigger="load"], .microdoug-slot:not([data-trigger])');
    slots.forEach(function (slot) {
      var prompt = slot.getAttribute('data-prompt') || '';
      var length = parseInt(slot.getAttribute('data-length')) || 80;
      var text = generate(prompt, length, 0.8);
      slot.textContent = text;
      slot.setAttribute('data-source', 'microdoug-micro');
      slot.setAttribute('data-generated', 'true');
    });

    // Hover-triggered slots — generate on parent hover, fade in
    var hoverSlots = document.querySelectorAll('.microdoug-slot[data-trigger="hover"]');
    hoverSlots.forEach(function (slot) {
      var parent = slot.closest('.doc-entry, .doc-locked, .roadmap-item') || slot.parentElement;
      parent.addEventListener('mouseenter', function () {
        if (slot.getAttribute('data-generated')) {
          slot.style.opacity = '1';
          return;
        }
        // Try LLM first, fall back to micro-model
        if (llmStatus === 'ready') {
          var prompt = slot.getAttribute('data-prompt') || '';
          var length = parseInt(slot.getAttribute('data-length')) || 60;
          var maxTokens = Math.max(15, Math.ceil(length / 3));
          slot.textContent = '...';
          slot.style.opacity = '1';
          llmGenerate(prompt, maxTokens, 0.9)
            .then(function (text) {
              slot.textContent = text.substring(0, length);
              slot.setAttribute('data-source', 'microdoug-llm');
              slot.setAttribute('data-generated', 'true');
            })
            .catch(function () {
              slot.textContent = generate(prompt, length, 0.9);
              slot.setAttribute('data-source', 'microdoug-micro');
              slot.setAttribute('data-generated', 'true');
            });
        } else {
          var prompt = slot.getAttribute('data-prompt') || '';
          var length = parseInt(slot.getAttribute('data-length')) || 60;
          slot.textContent = generate(prompt, length, 0.9);
          slot.setAttribute('data-source', 'microdoug-micro');
          slot.setAttribute('data-generated', 'true');
          slot.style.opacity = '1';
        }
      });
      parent.addEventListener('mouseleave', function () {
        slot.style.opacity = '0';
      });
    });
  }

  // Upgrade existing slots when LLM becomes ready
  function upgradeSlots() {
    var slots = document.querySelectorAll('.microdoug-slot[data-trigger="load"], .microdoug-slot:not([data-trigger])');
    slots.forEach(function (slot) {
      var prompt = slot.getAttribute('data-prompt') || '';
      var length = parseInt(slot.getAttribute('data-length')) || 80;
      var maxTokens = Math.max(15, Math.ceil(length / 3));

      llmGenerate(prompt, maxTokens, 0.8)
        .then(function (text) {
          slot.textContent = text.substring(0, length);
          slot.setAttribute('data-source', 'microdoug-llm');
        })
        .catch(function () {
          // Keep existing micro-model text
        });
    });
  }

  // --- Weight loading (custom micro-model, non-blocking) ---
  function loadWeights() {
    fetch('/assets/js/weights/microdoug.json')
      .then(function (r) { return r.ok ? r.json() : null; })
      .catch(function () { return null; })
      .then(function (data) {
        if (!data) return;
        model = { config: data.config, vocab: data.vocab, weights: data };
        fillSlots();
        console.log(
          '%c[microDoug v0.2]%c Micro-model loaded. Parameters: ' + countParams() +
          '. Inference: client-side. Datacenter: your browser.',
          'color: #F58025; font-weight: bold;',
          'color: #666;'
        );
      });
  }

  function countParams() {
    if (!model) return '0';
    var cfg = model.config;
    var v = cfg.vocab_size;
    var e = cfg.n_embd;
    var b = cfg.block_size;
    var n = v * e + b * e + v * e; // wte + wpe + lm_head
    for (var i = 0; i < cfg.n_layer; i++) {
      n += 4 * e * e; // attn: wq, wk, wv, wo
      n += 4 * e * e + e * 4 * e; // mlp: fc1 + fc2
    }
    return n.toLocaleString();
  }

  // --- Initialize ---
  function init() {
    // Phase 1: Contaminate
    walkTextNodes(document.body, contaminate);

    // Phase 2a: Load micro-model (instant fallback)
    loadWeights();

    // Phase 2b: Boot LLM worker (silent background upgrade)
    initWorker();

    // Console output for the curious
    console.log(
      '%c[microDoug v0.2]%c Linguistic contamination complete. ' +
      'Doug count: unverified. Swap rate: nominal. ' +
      'This process was reviewed by Legal (Doug).',
      'color: #F58025; font-weight: bold;',
      'color: #666;'
    );
  }

  // --- Public API (console easter eggs) ---
  window.microDoug = {
    status: function () {
      var microNodes = document.querySelectorAll('[data-source="microdoug-micro"]');
      var llmNodes = document.querySelectorAll('[data-source="microdoug-llm"]');
      var contaminatedNodes = document.querySelectorAll('[data-source="microdoug"]');
      console.log('[microDoug] Contaminated nodes: ' + contaminatedNodes.length);
      console.log('[microDoug] Micro-model slots: ' + microNodes.length);
      console.log('[microDoug] LLM slots: ' + llmNodes.length);
      console.log('[microDoug] Swap events this session: ' + swapCount);
      console.log('[microDoug] Doug count: unverified');
      console.log('[microDoug] Micro-model: ' + (model ? 'LOADED' : 'WEIGHTS NOT FOUND'));
      console.log('[microDoug] LLM status: ' + llmStatus + (llmDevice ? ' (' + llmDevice + ')' : ''));
      console.log('[microDoug] Reviewed by: Legal (Doug)');
      return {
        nodes: contaminatedNodes.length,
        microSlots: microNodes.length,
        llmSlots: llmNodes.length,
        swaps: swapCount,
        llmStatus: llmStatus,
        llmDevice: llmDevice,
        dougCount: 'unverified'
      };
    },
    decontaminate: function () {
      console.log('[microDoug] Decontamination request denied.');
      console.log('[microDoug] Reason: Legal (Doug)');
    },
    generate: function (prompt, length, temperature) {
      // Try LLM first, fall back to micro-model
      if (llmStatus === 'ready') {
        var maxTokens = Math.max(15, Math.ceil((length || 80) / 3));
        return llmGenerate(prompt, maxTokens, temperature || 0.8)
          .then(function (text) {
            return text.substring(0, length || 80);
          })
          .catch(function () {
            return generate(prompt, length || 80, temperature || 0.8);
          });
      }
      if (!model) {
        console.log('[microDoug] No models loaded. Doug persists without inference.');
        return Promise.resolve('');
      }
      return Promise.resolve(generate(prompt, length || 80, temperature || 0.8));
    },
    generateFast: function (prompt, length, temperature) {
      if (!model) {
        console.log('[microDoug] Micro-model not loaded. Doug persists without inference.');
        return '';
      }
      return generate(prompt, length || 80, temperature || 0.8);
    },
    llmStatus: function () {
      return { status: llmStatus, device: llmDevice };
    },
    version: '0.2',
    classification: 'INTERNAL',
    author: '[TRAINING DATA]'
  };

  // --- Boot ---
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
