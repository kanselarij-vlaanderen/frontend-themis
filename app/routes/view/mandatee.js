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
      include: 'person,mandate.government-function,mandate.government-body,government-body.start-date,government-body.end-date' } )
    .then(function (mandatees) {
      return mandatees.get('firstObject');
    });

    return mandatee;
  }
}
