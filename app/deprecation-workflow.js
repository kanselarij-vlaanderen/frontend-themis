import setupDeprecationWorkflow from 'ember-cli-deprecation-workflow';

/**
 * Docs: https://github.com/ember-cli/ember-cli-deprecation-workflow
 */
setupDeprecationWorkflow({
  throwOnUnhandled: false,
  workflow: [
    { handler: 'silence', matchId: 'importing-inject-from-ember-service' },

    // Fixed in @glimmer/component 2.x,
    // but the metis addon pins ^1.1.2, so upgrading will have to wait for metis to update its deps
    { handler: 'silence', matchId: 'deprecate-import-destroy-from-ember' },
    { handler: 'silence', matchId: 'deprecate-import--is-destroying-from-ember' },
    { handler: 'silence', matchId: 'deprecate-import--is-destroyed-from-ember' },
    {
      handler: 'silence',
      matchId: 'deprecate-import--register-destructor-from-ember',
    },

    // ember-cli-fastboot's server-side deprecation warnings
    // error-handler.js and friends) pulls onerror/get off the 'ember' barrel.
    // Only visible in the FastBoot server logs
    { handler: 'silence', matchId: 'deprecate-import-onerror-from-ember' },
    { handler: 'silence', matchId: 'deprecate-import-get-from-ember' },

    // ember-fetch's browser-fetch shim registers an Ember.Test waiter; still
    // present in the latest ember-fetch. We only
    // depend on ember-fetch because metis imports from 'fetch'; drop both
    // this entry and the ember-fetch dependency once metis uses native fetch.
    { handler: 'silence', matchId: 'deprecate-import-test-from-ember' },
  ],
});
