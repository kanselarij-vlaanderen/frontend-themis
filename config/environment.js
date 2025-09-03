'use strict';

module.exports = function (environment) {
  const ENV = {
    modulePrefix: 'frontend-themis',
    environment,
    rootURL: '/',
    locationType: 'history',
    'ember-moment': {
      allowEmpty: true,
    },
    metis: {
      baseUrl: 'http://themis.vlaanderen.be/',
    },
    yasgui: {
      // NOTE: look at app/modifiers/yasgui.js when changing this variable
      defaultQuery: 'EMBER_YASGUI_DEFAULT_QUERY',
      extraPrefixes: 'EMBER_YASGUI_EXTRA_PREFIXES',
    },
    fastboot: {
      // Note: fastboot interprets the string as regex based on the leading '/'
      // Using a regex like /.../ (not wrapped as string) causes an error in
      // ember-get-config/embroider since that's not valid JSON and cannot be serialized
      hostWhitelist: ['/^localhost(:[0-9]*)?/', '{{FASTBOOT_HOST}}'],
    },
    EmberENV: {
      EXTEND_PROTOTYPES: false,
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
    },
    VO_HEADER_WIDGET_URL: '{{VO_HEADER_WIDGET_URL}}',
    VO_FOOTER_WIDGET_URL: '{{VO_FOOTER_WIDGET_URL}}',
    'ember-plausible': {
      enabled: false,
    },
    plausible: {
      domain: '{{ANALYTICS_APP_DOMAIN}}',
      apiHost: '{{ANALYTICS_API_HOST}}',
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

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
  }

  return ENV;
};
