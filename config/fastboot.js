module.exports = function(environment) {
  return {
    buildSandboxGlobals(defaultGlobals) {
      return Object.assign({}, defaultGlobals, {
        BACKEND_URL: 'https://themis-test.vlaanderen.be/',

        // Fastboot support for Ember Data >= 4.12
        AbortController,
        fetch: fetch,
        ReadableStream:
        typeof ReadableStream !== "undefined"
          ? ReadableStream
          : require("node:stream/web").ReadableStream,
        WritableStream:
        typeof WritableStream !== "undefined"
          ? WritableStream
          : require("node:stream/web").WritableStream,
        TransformStream:
        typeof TransformStream !== "undefined"
          ? TransformStream
          : require("node:stream/web").TransformStream,
        Headers: typeof Headers !== "undefined" ? Headers : undefined,
      });
    },
  };
};