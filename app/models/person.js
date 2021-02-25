import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class PersonModel extends Model {
  @attr() familyname;
  @attr() firstname;
  @hasMany('mandatee', { inverse: 'person' }) mandatees;
}
