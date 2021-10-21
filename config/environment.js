'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'frontend-themis',
    environment,
    rootURL: '/',
    locationType: 'auto',
    metis: {
      baseUrl: "http://themis.vlaanderen.be/"
    },
    yasgui: {
      // NOTE: look at app/modifiers/yasgui.js when changing this variable
      defaultQuery: "EMBER_YASGUI_DEFAULT_QUERY",
      extraPrefixes: "EMBER_YASGUI_EXTRA_PREFIXES"
    },
    fastboot: {
      hostWhitelist: [/^localhost(:[0-9]*)?/, "localhost",  /^.*$/ ] //TODO: this is potentialy a danger, FIX THIS
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV.APP.header ="https://tni.widgets.burgerprofiel.dev-vlaanderen.be/api/v1/widget/0756d3dc-338d-4af8-878d-28e7a31a5a2b/embed"
  ENV.APP.footer ="https://tni.widgets.burgerprofiel.dev-vlaanderen.be/api/v1/widget/9d76951d-10ff-4ae2-b548-20ec2ac582de/embed"

  if (environment === 'development') {
     // ENV.APP.LOG_RESOLVER = true;
     // ENV.APP.LOG_ACTIVE_GENERATION = true;
     // ENV.APP.LOG_TRANSITIONS = true;
     // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
     // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
    ENV.APP.header ="https://prod.widgets.burgerprofiel.vlaanderen.be/api/v1/widget/2c901692-2b36-41d7-8f07-dac9c3a1617f/embed"
    ENV.APP.footer ="https://prod.widgets.burgerprofiel.vlaanderen.be/api/v1/widget/0fc82613-bdce-434b-946d-7b64f13804de/embed"
  }

  return ENV;
};
