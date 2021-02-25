import Route from '@ember/routing/route';

export default class ViewGovernmentbodyRoute extends Route {
  queryParams = {
    resource: { refreshModel: true }
  }

  async model( { resource } ) {
    const governmentbody = this.store.query('governmentbody',
    { filter:
      { ':uri:': resource}, include: 'mandatees,mandatees.person,mandatees.mandate.governmentfunction,mandatees.governmentfields' } )
    .then(function (governmentbodies) {
      return governmentbodies.get('firstObject');
    });

    return governmentbody;
  }
}
