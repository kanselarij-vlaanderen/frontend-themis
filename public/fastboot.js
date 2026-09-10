/* eslint-env node */
'use strict';

/**
 * FastBoot runtime configuration, picked up by redpencil/fastboot-app-server
 * (it does `require('/app/fastboot')`, and /app is this build's dist folder).
 *
 * The FastBoot sandbox (Node `vm` context) only exposes a handful of globals.
 * Ember 6 / WarpDrive rely on standard web platform globals that Node >= 18
 * provides in its main context but that are not forwarded to the sandbox:
 * structuredClone, AbortController, fetch & friends, TextEncoder, crypto, ...
 *
 * NOTE: the app server spreads this config over its own, so this function
 * REPLACES its `buildSandboxGlobals`; the globals it used to add are repeated
 * here on purpose (AbortController, Headers, streams, BACKEND_URL).
 */
module.exports = {
  buildSandboxGlobals(defaultGlobals) {
    const {
      ReadableStream,
      WritableStream,
      TransformStream,
    } = require('node:stream/web');
    return Object.assign({}, defaultGlobals, {
      // previously provided by redpencil/fastboot-app-server
      AbortController,
      ReadableStream,
      WritableStream,
      TransformStream,
      Headers,
      BACKEND_URL: process.env.BACKEND_URL || 'http://backend',
      // required by Ember 6 / WarpDrive
      structuredClone,
      fetch,
      Request,
      Response,
      URLSearchParams,
      TextEncoder,
      TextDecoder,
      queueMicrotask,
      performance,
      crypto: globalThis.crypto,
    });
  },
};
