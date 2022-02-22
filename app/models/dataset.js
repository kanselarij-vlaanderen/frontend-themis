import Model, { attr } from '@ember-data/model';

export default class DatasetModel extends Model {
  @attr() title;
  @attr() releaseDate;
  @attr() type;
  @attr() subject;
  @attr() uri;
}
