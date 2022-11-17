import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ViewMandateeRoute extends Route {
  @service store;

  queryParams = {
    resource: { refreshModel: true },
  };

  async model({ resource }) {
    const mandatees = await this.store.query('mandatee', {
      filter: { ':uri:': resource },
      include: [
        'person',
        'mandate.government-function',
        'mandate.government-body',
        'government-body.start-date',
        'government-body.end-date',
      ].join(','),
    });

    return mandatees[0];
  }
}
