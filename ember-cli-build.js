'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    sassOptions: {
      includePaths: [
        'node_modules/@appuniversum/appuniversum',
        'node_modules/@appuniversum/ember-appuniversum/app/styles',
      ]
    },
    autoprefixer: {
      enabled: true,
      cascade: true,
      sourcemap: true
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  app.import('node_modules/@triply/yasgui/build/yasgui.min.css');

  // https://vlaamseoverheid.atlassian.net/wiki/spaces/IKPubliek/pages/2327449182/Technische+documentatie+Widget-platform#Browser-Polyfills
  // (visted on 25/10/2021)
  // Since the @govflanders-sources are undisclosed, we're unsure what exactly is being polyfilled.
  app.import("node_modules/@govflanders/vl-widget-polyfill/dist/index.js", {
    using: [
      {
        // This dependency uses browser-api such as the "Text" class. We don't want that in fastboot.
        transformation: "fastbootShim",
      },
    ],
  });
  app.import('node_modules/@govflanders/vl-widget-client/dist/index.js');

  return app.toTree();
};
