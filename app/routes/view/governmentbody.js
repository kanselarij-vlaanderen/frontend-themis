import Route from '@ember/routing/route';

export default class ViewGovernmentbodyRoute extends Route {
  queryParams = {
    resource: { refreshModel: true }
  }

  async model( { resource } ) {
    const governmentbodies = await this.store.query('government-body',
    {
      filter: { ':uri:': resource },
      include: [
        'classification',
        'government-bodies.classification',
        'government-bodies.start-date',
        'government-bodies.end-date',
        'mandates.government-function',
        'mandates.mandatees.person',
        'mandatees.person',
        'mandatees.mandate.government-function',
        'mandatees.government-fields'
      ].join(',')
    } )

    return governmentbodies.get('firstObject');
  }
}
