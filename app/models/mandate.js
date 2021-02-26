import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class MandateModel extends Model {
  @attr() uri;
  @belongsTo('government-function', { inverse: null} ) governmentFunction;
  @belongsTo('government-body') governmentBody;
  @hasMany('mandatees') mandatees;
}
