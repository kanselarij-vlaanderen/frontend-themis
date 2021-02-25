import Route from '@ember/routing/route';

export default class ViewPersonRoute extends Route {
  queryParams = {
    resource: { refreshModel: true }
  }

  model( { resource } ) {
    const person = this.store.query('person',
    { filter:
      { ':uri:': resource},
      include: 'mandatees,mandatees.governmentfields,mandatees.mandate,mandatees.mandate.governmentfunction,mandatees.mandate.governmentbody' } )
    .then(function (persons) {
      const person = persons.get('firstObject');
      console.log(person.familyname);
      console.log(person.firstname);
      return person;
    });

    return person;
  }
}
