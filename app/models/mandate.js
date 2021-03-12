import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class MandateModel extends Model {
  @attr() uri;
  @belongsTo('government-function', { inverse: null} ) governmentFunction;
  @belongsTo('government-body') governmentBody;
  @hasMany('mandatees') mandatees;

  get rdfaBindings() {
    return { // eslint-disable-line ember/avoid-leaking-state-in-ember-objects
      class: "http://data.vlaanderen.be/ns/mandaat#Mandaat",
      governmentFunction: "http://www.w3.org/ns/org#role",
      governmentBody: "http://www.w3.org/ns/org#hasPost",
      mandatees: "http://www.w3.org/ns/org#holds"
    }
  }
}
