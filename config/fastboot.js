module.exports = function () {
  return {
    buildSandboxGlobals(defaultGlobals) {
      // Enable BACKEND_URL and set to http://host (or http://localhost) for local development.
      // or https://themis-test.vlaanderen.be if you use the proxied version,
      // e.g. `BACKEND_URL=https://themis-test.vlaanderen.be npm run proxy`
      const BACKEND_URL = process.env.BACKEND_URL || 'http://host/';

      console.log(
        `Using ${BACKEND_URL} as BACKEND_URL. You can change this setting in ./config/fastboot.js`,
      );
      return Object.assign({}, defaultGlobals, {
        BACKEND_URL,
        // Fastboot support for Ember Data >= 4.12
        AbortController,
        fetch: fetch,
        ReadableStream:
          typeof ReadableStream !== 'undefined'
            ? ReadableStream
            : require('node:stream/web').ReadableStream,
        WritableStream:
          typeof WritableStream !== 'undefined'
            ? WritableStream
            : require('node:stream/web').WritableStream,
        TransformStream:
          typeof TransformStream !== 'undefined'
            ? TransformStream
            : require('node:stream/web').TransformStream,
        Headers: typeof Headers !== 'undefined' ? Headers : undefined,
        // Fastboot support for Ember 6 / WarpDrive (see also public/fastboot.js)
        structuredClone,
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
};
