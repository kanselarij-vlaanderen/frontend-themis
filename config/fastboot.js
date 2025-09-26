module.exports = function (environment) {
  return {
    buildSandboxGlobals(defaultGlobals) {
      return Object.assign({}, defaultGlobals, {
        // Enable BACKEND_URL and set to http://host (or http://localhost) for local development.
        // or https://themis-test.vlaanderen.be if you use the proxied version
        BACKEND_URL: 'http://host/',

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
      });
    },
  };
};
