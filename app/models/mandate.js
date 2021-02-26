import Model, { belongsTo, hasMany } from '@ember-data/model';

export default class MandateModel extends Model {
  @belongsTo('government-function', { inverse: null} ) governmentFunction;
  @belongsTo('government-body') governmentBody;
  @hasMany('mandatees') mandatees;
}
