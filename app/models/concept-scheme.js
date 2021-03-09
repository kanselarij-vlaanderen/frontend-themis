import Model, { attr, hasMany } from '@ember-data/model';

export default class ConceptSchemeModel extends Model {
  @attr() label;
  @attr() uri;
  @hasMany('concept',  { inverse: 'inScheme' }) concepts;
}
