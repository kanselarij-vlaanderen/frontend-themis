import Route from '@ember/routing/route';
import groupBy from 'lodash/groupBy';

export default class ViewGovernmentbodyRoute extends Route {
  queryParams = {
    resource: { refreshModel: true },
  };

  async model({ resource }) {
    const governmentbodies = await this.store.query('government-body', {
      filter: { ':uri:': resource },
      include: [
        'classifications',
        'government-bodies.classifications',
        'government-bodies.start-date',
        'government-bodies.end-date',
        'mandates.government-function',
        'mandates.mandatees.person',
        'mandatees.person',
        'mandatees.mandate.government-function',
        'government-units',
      ].join(','),
    });

    return governmentbodies.get('firstObject');
  }
}
