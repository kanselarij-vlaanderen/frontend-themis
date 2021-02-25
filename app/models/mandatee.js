import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class MandateeModel extends Model {
  @attr() priority;
  @attr() startdate;
  @attr() enddate;
  @belongsTo('person', { inverse: 'mandatees' }) person;
  @belongsTo('mandate', { inverse: null}) mandate;
  @hasMany('governmentfield', { inverse: null }) governmentfields;
  @belongsTo('governmentbody', { inverse: 'mandatees' }) governmentbody;

  get rdfaBindings() {
    return { // eslint-disable-line ember/avoid-leaking-state-in-ember-objects
      class: "http://data.vlaanderen.be/ns/mandaat#Mandataris",
      priority: "http://data.vlaanderen.be/ns/mandaat#rangorde",
      startdate: "http://data.vlaanderen.be/ns/mandaat#start",
      enddate: "http://data.vlaanderen.be/ns/mandaat#einde",
      person: "http://data.vlaanderen.be/ns/mandaat#isBestuurlijkeAliasVan",
      governmentfield: "http://data.vlaanderen.be/ns/mandaat#beleidsdomein"
    }
  }
}
