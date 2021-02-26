import Model, { attr } from '@ember-data/model';

export default class VersionModel extends Model {
  @attr() time;
  @attr() uri;
}
