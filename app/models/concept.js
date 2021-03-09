import Model, { attr, belongsTo } from '@ember-data/model';

export default class ConceptModel extends Model {
  @attr() label;
  @attr() definition;
  @attr() uri;
  @belongsTo('concept-scheme', { inverse: 'concepts' } ) inScheme;
}
