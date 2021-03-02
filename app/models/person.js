import Model, { attr, hasMany } from '@ember-data/model';

export default class PersonModel extends Model {
  @attr() familyName;
  @attr() firstName;
  @attr() uri;
  @hasMany('mandatee') mandatees;
}
