import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { task } from 'ember-concurrency-decorators';
import { tracked } from '@glimmer/tracking';

export default class ViewPersonController extends Controller {
  queryParams = ['resource', 'page', 'size'];

  @service store;

  @tracked newsItems;
  @tracked resource;
  @tracked page = 0;
  @tracked size = 10;

  constructor() {
    super(...arguments);
    this.getNewsItems.perform();
  }

  @task
  *getNewsItems() {
    this.newsItems = yield this.store.query('news-item',
      { filter:
        {
          mandatees: {
            person: {
              ':uri:': this.resource
            }
          }
        },
      sort: '-date',
      page: {
        size: this.size,
        number: this.page
      }});
  }

  @action
  async selectPage(page) {
    this.page = page;
    await this.getNewsItems.perform();
  }
}
