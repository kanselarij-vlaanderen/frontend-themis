import Model, { attr, hasMany } from '@ember-data/model';

export default class Bestuurseenheid extends Model {
  @attr() uri;
  @attr() name;
  @hasMany('government-body', { async: true, inverse: 'governmentUnits' })
  governmentBodies;

  get rdfaBindings() {
    return {
      // eslint-disable-line ember/avoid-leaking-state-in-ember-objects
      class: 'http://data.vlaanderen.be/ns/besluit#Bestuurseenheid',
      name: 'http://www.w3.org/2004/02/skos/core#prefLabel',
      governmentBody: 'http://data.vlaanderen.be/ns/besluit#bestuurt',
    };
  }
}
