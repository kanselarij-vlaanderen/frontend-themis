import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ViewPersonRoute extends Route {
  @service store;

  queryParams = {
    resource: { refreshModel: true },
  };

  async model({ resource }) {
    const persons = await this.store.query('person', {
      filter: { ':uri:': resource },
      include: [
        'mandatees',
        'mandatees.mandate',
        'mandatees.mandate.government-function',
        'mandatees.mandate.government-body',
      ].join(','),
    });

    return persons.get('firstObject');
  }
}
