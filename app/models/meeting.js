import Model, { attr } from '@ember-data/model';

export default class MeetingModel extends Model {
  @attr() plannedStart;
  @attr() uri;
}
