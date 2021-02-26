import Model, { attr } from '@ember-data/model';

export default class Bestuurseenheid extends Model {
  @attr() uri;
  @attr() name;
}
