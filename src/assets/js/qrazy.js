/**
 * qrazy - A minimal reactive framework for learning
 *
 * Core concepts:
 * 1. Proxy-based reactivity (like Vue 3, Solid)
 * 2. Attribute-based bindings (like Alpine)
 * 3. Fine-grained DOM updates (no virtual DOM)
 * 4. List rendering with q-for (the hard problem!)
 */

// Create a reactive proxy that notifies subscribers on change
function reactive(data, onUpdate) {
  return new Proxy(data, {
    set(target, prop, value) {
      target[prop] = value;
      onUpdate(prop);
      return true;
    },
    get(target, prop) {
      return target[prop];
    }
  });
}

// Deep reactive - makes nested arrays/objects reactive too
function deepReactive(data, onUpdate) {
  if (Array.isArray(data)) {
    // Wrap array methods that mutate
    const arrProxy = new Proxy(data, {
      set(target, prop, value) {
        target[prop] = value;
        onUpdate(prop);
        return true;
      },
      get(target, prop) {
        // Intercept mutating methods
        if (['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].includes(prop)) {
          return (...args) => {
            const result = Array.prototype[prop].apply(target, args);
            onUpdate('length');
            return result;
          };
        }
        return target[prop];
      }
    });
    return arrProxy;
  }
  return reactive(data, onUpdate);
}

// Evaluate an expression in the context of a state object
function evaluate(expr, state) {
  const keys = Object.keys(state);
  const vals = Object.values(state);
  try {
    return new Function(...keys, `return ${expr}`)(...vals);
  } catch (e) {
    console.error(`qrazy: Error evaluating "${expr}"`, e);
    return undefined;
  }
}

// Execute a statement (like count++) in the context of state
function execute(stmt, state) {
  const keys = Object.keys(state);
  const vals = keys.map(k => state[k]);
  try {
    const fn = new Function(...keys, `
      ${stmt};
      return { ${keys.join(', ')} };
    `);
    const result = fn(...vals);
    for (const k of keys) {
      if (result[k] !== state[k]) {
        state[k] = result[k];
      }
    }
  } catch (e) {
    console.error(`qrazy: Error executing "${stmt}"`, e);
  }
}

// Process a single element's directives (excluding q-for, handled separately)
function bindElement(el, state, skipFor = false) {
  // q-for is handled by initScope, skip here
  if (!skipFor && el.hasAttribute('q-for')) return;

  // q-text: set textContent from expression
  if (el.hasAttribute('q-text')) {
    const expr = el.getAttribute('q-text');
    const update = () => { el.textContent = evaluate(expr, state); };
    update();
    el._qUpdaters = el._qUpdaters || [];
    el._qUpdaters.push(update);
  }

  // q-show: toggle display based on expression
  if (el.hasAttribute('q-show')) {
    const expr = el.getAttribute('q-show');
    const update = () => {
      el.style.display = evaluate(expr, state) ? '' : 'none';
    };
    update();
    el._qUpdaters = el._qUpdaters || [];
    el._qUpdaters.push(update);
  }

  // q-bind:attr: bind any attribute
  for (const attr of [...el.attributes]) {
    if (attr.name.startsWith('q-bind:')) {
      const targetAttr = attr.name.slice(7);
      const expr = attr.value;
      const update = () => {
        const val = evaluate(expr, state);
        if (val === false || val === null || val === undefined) {
          el.removeAttribute(targetAttr);
        } else {
          el.setAttribute(targetAttr, val);
        }
      };
      update();
      el._qUpdaters = el._qUpdaters || [];
      el._qUpdaters.push(update);
    }
  }

  // q-model: two-way binding for inputs
  if (el.hasAttribute('q-model')) {
    const prop = el.getAttribute('q-model');
    const update = () => { el.value = state[prop] ?? ''; };
    update();
    el._qUpdaters = el._qUpdaters || [];
    el._qUpdaters.push(update);
    el.addEventListener('input', () => {
      state[prop] = el.type === 'number' ? Number(el.value) : el.value;
    });
  }

  // q-click: click event handler
  if (el.hasAttribute('q-click')) {
    const stmt = el.getAttribute('q-click');
    el.addEventListener('click', (e) => {
      // Prevent if inside a form to avoid double-handling
      execute(stmt, state);
    });
  }

  // q-submit: form submit handler
  if (el.hasAttribute('q-submit')) {
    const stmt = el.getAttribute('q-submit');
    el.addEventListener('submit', (e) => {
      e.preventDefault();
      execute(stmt, state);
    });
  }
}

// Parse q-for expression: "item in items" or "(item, index) in items"
function parseForExpr(expr) {
  const match = expr.match(/^\s*(?:\(?\s*(\w+)\s*(?:,\s*(\w+))?\s*\)?)\s+in\s+(\w+)\s*$/);
  if (!match) {
    console.error(`qrazy: Invalid q-for expression "${expr}"`);
    return null;
  }
  return {
    itemVar: match[1],
    indexVar: match[2] || null,
    arrayVar: match[3]
  };
}

// Handle q-for directive - the hard problem!
function setupForLoop(el, state, allElements, onUpdate) {
  const expr = el.getAttribute('q-for');
  const parsed = parseForExpr(expr);
  if (!parsed) return;

  const { itemVar, indexVar, arrayVar } = parsed;
  const keyAttr = el.getAttribute('q-key');

  // Hide the template element
  const template = el;
  template.style.display = 'none';
  template.removeAttribute('q-for'); // Prevent re-processing

  // Track rendered instances: { key: { el, state } }
  const instances = new Map();
  let placeholder = document.createComment(`q-for: ${expr}`);
  template.parentNode.insertBefore(placeholder, template);

  function renderList() {
    const array = state[arrayVar] || [];
    const newKeys = new Set();

    array.forEach((item, index) => {
      // Determine key for this item
      const key = keyAttr ? evaluate(keyAttr, { [itemVar]: item, [indexVar]: index }) : index;
      newKeys.add(key);

      if (instances.has(key)) {
        // Update existing instance
        const inst = instances.get(key);
        inst.state[itemVar] = item;
        if (indexVar) inst.state[indexVar] = index;
        // Trigger updaters
        if (inst.el._qUpdaters) {
          inst.el._qUpdaters.forEach(fn => fn());
        }
        // Update children too
        inst.el.querySelectorAll('*').forEach(child => {
          if (child._qUpdaters) child._qUpdaters.forEach(fn => fn());
        });
      } else {
        // Create new instance
        const clone = template.cloneNode(true);
        clone.style.display = '';

        // Create scoped state that includes item and index
        const scopedState = Object.create(state);
        scopedState[itemVar] = item;
        if (indexVar) scopedState[indexVar] = index;

        // Make it a proper object for Function() calls
        const itemState = {};
        for (const k in state) itemState[k] = state[k];
        itemState[itemVar] = item;
        if (indexVar) itemState[indexVar] = index;

        // Create reactive wrapper for item state
        const reactiveItemState = new Proxy(itemState, {
          set(target, prop, value) {
            target[prop] = value;
            // If setting a parent state property, propagate up
            if (prop in state && prop !== itemVar && prop !== indexVar) {
              state[prop] = value;
            }
            return true;
          },
          get(target, prop) {
            // Always get fresh array item value
            if (prop === itemVar) {
              const arr = state[arrayVar];
              const idx = instances.get(key)?.index ?? index;
              return arr[idx];
            }
            return target[prop];
          }
        });

        // Bind the clone and its children
        bindElement(clone, reactiveItemState, true);
        clone.querySelectorAll('*').forEach(child => {
          bindElement(child, reactiveItemState, true);
          allElements.push(child);
        });
        allElements.push(clone);

        // Insert before template
        template.parentNode.insertBefore(clone, template);

        instances.set(key, { el: clone, state: reactiveItemState, index });
      }
    });

    // Remove instances that are no longer in array
    for (const [key, inst] of instances) {
      if (!newKeys.has(key)) {
        inst.el.remove();
        instances.delete(key);
      }
    }

    // Update indices for remaining instances
    let idx = 0;
    for (const [key, inst] of instances) {
      if (newKeys.has(key)) {
        inst.index = idx++;
      }
    }
  }

  // Initial render
  renderList();

  // Return updater so parent can trigger re-renders
  return renderList;
}

// Initialize a q-data scope
function initScope(root) {
  const dataExpr = root.getAttribute('q-data');
  let data;
  try {
    data = new Function(`return ${dataExpr}`)();
  } catch (e) {
    console.error('qrazy: Invalid q-data expression', dataExpr, e);
    return;
  }

  // Make arrays deeply reactive
  for (const key in data) {
    if (Array.isArray(data[key])) {
      const arr = data[key];
      data[key] = arr; // Will be proxied below
    }
  }

  // Collect elements and q-for loops
  const elements = [root];
  const forLoops = [];

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node !== root && node.hasAttribute('q-data')) continue;

    if (node.hasAttribute('q-for')) {
      forLoops.push(node);
    } else {
      elements.push(node);
    }
  }

  // Create reactive state
  const forUpdaters = [];
  const state = deepReactive(data, (prop) => {
    // Update regular elements
    for (const el of elements) {
      if (el._qUpdaters) {
        for (const fn of el._qUpdaters) fn();
      }
    }
    // Update q-for loops
    for (const updater of forUpdaters) {
      updater();
    }
  });

  // Set up q-for loops first
  for (const forEl of forLoops) {
    const updater = setupForLoop(forEl, state, elements, () => {});
    if (updater) forUpdaters.push(updater);
  }

  // Bind regular elements
  for (const el of elements) {
    bindElement(el, state);
  }

  root._qState = state;
}

// Main init
function init() {
  document.querySelectorAll('[q-data]').forEach(initScope);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

window.qrazy = { init, reactive, evaluate, execute };
