import Model, { attr } from '@ember-data/model';

export default class GovernmentFieldModel extends Model {
  @attr() label;
  @attr() uri;
}
