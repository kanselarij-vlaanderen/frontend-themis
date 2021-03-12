import Model, { attr, hasMany } from '@ember-data/model';

export default class PersonModel extends Model {
  @attr() familyName;
  @attr() firstName;
  @attr() uri;
  @hasMany('mandatee') mandatees;

  get rdfaBindings() {
    return { // eslint-disable-line ember/avoid-leaking-state-in-ember-objects
      class: "http://www.w3.org/ns/person#Person",
      familyName: "http://xmlns.com/foaf/0.1/familyName",
      firstName: "https://data.vlaanderen.be/ns/persoon#gebruikteVoornaam",
      mandatees: "http://data.vlaanderen.be/ns/mandaat#isBestuurlijkeAliasVan"
    }
  }
}
