import Model, { attr } from '@warp-drive/legacy/model';

export default class DatasetModel extends Model {
  @attr() title;
  @attr() releaseDate;
  @attr() type;
  @attr() subject;
  @attr() uri;
}
