import Model, { attr, hasMany } from '@ember-data/model';

export default class ConceptModel extends Model {
  @attr() label;
  @attr() definition;
  @attr() uri;
  @hasMany('concept-scheme', { inverse: 'concepts' } ) inScheme;

  get rdfaBindings() {
    return { // eslint-disable-line ember/avoid-leaking-state-in-ember-objects
      class: "http://www.w3.org/2004/02/skos/core#Concept",
      label: "http://www.w3.org/2004/02/skos/core#prefLabel",
      definition: "http://www.w3.org/2004/02/skos/core#definition",
      inScheme: "http://www.w3.org/2004/02/skos/core#inScheme"
    }
  }
}
