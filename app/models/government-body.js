import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class GovernmentBodyModel extends Model {
  @attr() name;
  @attr() uri;
  @belongsTo('government-body', { inverse: 'governmentBodies' })
  isTimespecializationOf;
  @belongsTo('version') startDate;
  @belongsTo('version') endDate;
  @hasMany('concept') classifications;
  @hasMany('government-unit') governmentUnits;
  @hasMany('government-body', { inverse: 'isTimespecializationOf' })
  governmentBodies;
  @hasMany('mandates') mandates;
  @hasMany('mandatees', { inverse: 'governmentBody' }) mandatees;

  get rdfaBindings() {
    return {
      // eslint-disable-line ember/avoid-leaking-state-in-ember-objects
      class: 'http://data.vlaanderen.be/ns/besluit#Bestuursorgaan',
      name: 'http://www.w3.org/2004/02/skos/core#prefLabel',
      isTimespecializationOf:
        'https://data.vlaanderen.be/ns/generiek#isTijdspecialisatieVan',
      startDate: 'http://www.w3.org/ns/prov#qualifiedGeneration',
      endDate: 'http://www.w3.org/ns/prov#qualifiedInvalidation',
      classifications: 'http://www.w3.org/ns/org#classification',
      governmentUnits: 'http://data.vlaanderen.be/ns/besluit#bestuurt',
      governmentBodies:
        'https://data.vlaanderen.be/ns/generiek#isTijdspecialisatieVan',
      mandates: 'http://www.w3.org/ns/org#hasPost',
      mandatees: 'http://www.w3.org/ns/prov#hadMember',
    };
  }
}
