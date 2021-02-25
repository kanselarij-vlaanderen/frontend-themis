import Route from '@ember/routing/route';

export default class ViewMandateeRoute extends Route {
  queryParams = {
    resource: { refreshModel: true }
  }

  async model( { resource } ) {
    console.log(resource);


    const mandatee = this.store.query('mandatee',
    { filter:
      { ':uri:': resource},
      include: 'person,mandate.governmentfunction,mandate.governmentbody,mandate.governmentbody.istimespecializationof,mandate.governmentbody.istimespecializationof.startdate,mandate.governmentbody.istimespecializationof.enddate' } )
    .then(function (mandatees) {
      return mandatees.get('firstObject');
    });

    return mandatee;
  }
}
