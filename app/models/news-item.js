import Model, { attr, hasMany } from '@ember-data/model';

export default class NewsItemModel extends Model {
  @attr() shortTitle;
  @attr() date;
  @attr() uri;
  @hasMany('mandatee', { async: true, inverse: 'newsItems' }) mandatees;

  get rdfaBindings() {
    return {
      // eslint-disable-line ember/avoid-leaking-state-in-ember-objects
      class: 'https://data.vlaanderen.be/ns/dossier#Stuk',
      shortTitle: 'http://purl.org/dc/terms/title',
      date: 'http://purl.org/dc/terms/issued',
      mandatees: 'http://www.w3.org/ns/prov#qualifiedAssociation',
    };
  }
}
