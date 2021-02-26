import Model, { attr, hasMany } from '@ember-data/model';

export default class PersonModel extends Model {
  @attr() familyName;
  @attr() firstName;
  @hasMany('mandatee') mandatees;
}
