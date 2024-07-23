import { module, test } from 'qunit';
import { setupRenderingTest } from 'flower-shop/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | arrangement', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders information about an arrangement', async function (assert) {
    await render(hbs`<Arrangement />`);

    assert.dom('article').hasClass('arrangement');
    assert.dom('article h3').hasText('Grand Bouquet');
    assert.dom('article .detail.designer').includesText('Veruca Salt');
    assert.dom('article .detail.type').includesText('Standalone');
    assert.dom('article .detail.price').includesText('$100');
    assert.dom('article .detail.flowers').includesText('15');
    assert.dom('article .image').exists();
  });
});
