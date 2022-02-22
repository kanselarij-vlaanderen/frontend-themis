import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | docs/catalogs', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:docs/catalogs');
    assert.ok(route);
  });
});
