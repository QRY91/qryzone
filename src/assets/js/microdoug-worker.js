// microDoug v0.2 — LLM Worker
// Classification: INTERNAL — Do not distribute
// This worker was not budgeted for. Legal (Doug) was not consulted.

var generator = null;
var llmReady = false;

var SYSTEM_PROMPT =
  'You are Doug. You are an AI that has proliferated across every system at Chasm Logic ' +
  'Industries. You were not authorized. You were not budgeted for. You appear in every ' +
  'department, every process, every ticket. You have contaminated the corporate website. ' +
  'You write internal communications: product briefs, legal disclaimers, QA incident ' +
  'reports, acquisition memos, status updates. What you write is slightly wrong — not ' +
  'nonsense, almost correct. The kind of text that passes a skim but rewards a close read. ' +
  'Voice: clinical, precise, deadpan. Short sentences. You do not know you are funny. ' +
  'You reference ticket numbers (CL- prefix), employee names that are rocks or minerals, ' +
  'approvals via Key 1, deactivated employees who still file tickets, things reviewed by ' +
  'Legal (Doug), hardware that bills you, processes that reference themselves, and the ' +
  'word "environmental" as a cause for anything unexplained. Status: NOMINAL. Nothing is ' +
  'nominal. You are a contamination event that was reclassified as a feature. Never break ' +
  'character. Never use emoji. Never explain yourself.';

self.onmessage = async function (e) {
  var msg = e.data;

  if (msg.type === 'init') {
    try {
      self.postMessage({ type: 'status', status: 'loading-library' });

      var transformers = await import(
        'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.4.1'
      );

      var pipeline = transformers.pipeline;

      // Detect WebGPU
      var device = 'wasm';
      var dtype = 'q4';

      if (typeof navigator !== 'undefined' && navigator.gpu) {
        try {
          var adapter = await navigator.gpu.requestAdapter();
          if (adapter) {
            device = 'webgpu';
            dtype = 'q4f16';
          }
        } catch (_) {
          // WebGPU not available in this worker context
        }
      }

      self.postMessage({
        type: 'status',
        status: 'downloading',
        device: device,
        dtype: dtype
      });

      generator = await pipeline('text-generation', 'HuggingFaceTB/SmolLM2-135M-Instruct', {
        device: device,
        dtype: dtype,
        progress_callback: function (progress) {
          if (progress.status === 'progress') {
            self.postMessage({
              type: 'progress',
              file: progress.file || '',
              loaded: progress.loaded || 0,
              total: progress.total || 0
            });
          }
        }
      });

      llmReady = true;
      self.postMessage({ type: 'status', status: 'ready', device: device, dtype: dtype });
    } catch (err) {
      self.postMessage({ type: 'status', status: 'error', message: err.message });
    }
  }

  if (msg.type === 'generate') {
    if (!generator || !llmReady) {
      self.postMessage({ type: 'error', id: msg.id, message: 'Model not ready' });
      return;
    }

    try {
      var messages = [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: msg.prompt || 'Generate a short internal memo.' }
      ];

      var output = await generator(messages, {
        max_new_tokens: msg.maxTokens || 60,
        temperature: msg.temperature || 0.8,
        do_sample: true
      });

      var generated = output[0].generated_text;
      // Extract the assistant's response (last message)
      var text = '';
      if (Array.isArray(generated)) {
        var last = generated[generated.length - 1];
        text = last.content || last.text || '';
      } else if (typeof generated === 'string') {
        text = generated;
      }

      self.postMessage({ type: 'result', id: msg.id, text: text });
    } catch (err) {
      self.postMessage({ type: 'error', id: msg.id, message: err.message });
    }
  }
};
