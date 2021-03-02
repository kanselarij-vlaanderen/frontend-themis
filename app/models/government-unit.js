import Model, { attr, hasMany } from '@ember-data/model';

export default class Bestuurseenheid extends Model {
  @attr() uri;
  @attr() name;
  @hasMany('government-body') governmentBodies;
}
