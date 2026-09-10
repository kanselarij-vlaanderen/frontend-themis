'use strict';

/* eslint-disable */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');
module.exports = async function (defaults) {
  const { setConfig } = await import('@warp-drive/core/build-config');
  const app = new EmberApp(defaults, {
    fingerprint: {
      // public/fastboot.js is loaded by name (`require('/app/fastboot')`)
      // by redpencil/fastboot-app-server and must keep its filename.
      exclude: ['fastboot.js'],
    },
    babel: {
      plugins: [
        // Required since ember-concurrency >=v4 for task(async () => {}) syntax
        require.resolve('ember-concurrency/async-arrow-task-transform'),
      ],
    },
    sassOptions: {
      includePaths: ['node_modules/@appuniversum/ember-appuniversum'],
    },
    autoprefixer: {
      enabled: true,
      cascade: true,
      sourcemap: true,
    },
    '@embroider/macros': {
      setConfig: {
        '@appuniversum/ember-appuniversum': {
          disableInternalAuContentUsage: true,
        },
      },
    },
  });

  setConfig(app, __dirname, {
    compatWith: '5.8',
    deprecations: {},
  });

  app.import('node_modules/@triply/yasgui/build/yasgui.min.css');

  // https://vlaamseoverheid.atlassian.net/wiki/spaces/IKPubliek/pages/2327449182/Technische+documentatie+Widget-platform#Browser-Polyfills
  // (visted on 25/10/2021)
  // Since the @govflanders-sources are undisclosed, we're unsure what exactly is being polyfilled.
  app.import('node_modules/@govflanders/vl-widget-polyfill/dist/index.js', {
    using: [
      {
        // This dependency uses browser-api such as the "Text" class. We don't want that in fastboot.
        transformation: 'fastbootShim',
      },
    ],
  });
  app.import('node_modules/@govflanders/vl-widget-client/dist/index.js');

  return app.toTree();
};
