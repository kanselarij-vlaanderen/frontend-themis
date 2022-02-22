import Model, { attr, hasMany } from '@ember-data/model';

export default class ConceptSchemeModel extends Model {
  @attr() label;
  @attr() uri;
  @hasMany('concept', { inverse: 'inScheme' }) concepts;

  get rdfaBindings() {
    return {
      // eslint-disable-line ember/avoid-leaking-state-in-ember-objects
      class: 'http://www.w3.org/2004/02/skos/core#ConceptScheme',
      label: 'http://www.w3.org/2004/02/skos/core#prefLabel',
      concepts: 'http://www.w3.org/2004/02/skos/core#inScheme',
    };
  }
}
