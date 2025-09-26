import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class MandateeModel extends Model {
  @attr() priority;
  @attr() startDate;
  @attr() endDate;
  @attr() title;
  @attr() uri;
  @belongsTo('person', { async: true, inverse: 'mandatees' }) person;
  @belongsTo('mandate', { async: true, inverse: 'mandatees' }) mandate;
  @belongsTo('government-body', { async: true, inverse: 'mandatees' })
  governmentBody;
  @hasMany('news-item', { async: true, inverse: 'mandatees' }) newsItems;

  get rdfaBindings() {
    return {
      // eslint-disable-line ember/avoid-leaking-state-in-ember-objects
      class: 'http://data.vlaanderen.be/ns/mandaat#Mandataris',
      priority: 'http://data.vlaanderen.be/ns/mandaat#rangorde',
      startDate: 'http://data.vlaanderen.be/ns/mandaat#start',
      endDate: 'http://data.vlaanderen.be/ns/mandaat#einde',
      title: 'http://purl.org/dc/terms/title',
      person: 'http://data.vlaanderen.be/ns/mandaat#isBestuurlijkeAliasVan',
      mandate: 'http://www.w3.org/ns/org#holds',
      governmentBody: 'http://www.w3.org/ns/prov#hadMember',
      newsItems: 'http://www.w3.org/ns/prov#qualifiedAssociation',
    };
  }
}
