import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class GovernmentBodyModel extends Model {
  @attr() name;
  @attr() uri;
  @belongsTo('government-body', { inverse: 'governmentBodies' }) isTimespecializationOf;
  @belongsTo('version') startDate;
  @belongsTo('version') endDate;
  @belongsTo('concept') classification;
  @hasMany('government-body', { inverse: 'isTimespecializationOf' }) governmentBodies;
  @hasMany('mandates') mandates;
  @hasMany('mandatees', { inverse: 'governmentBody' }) mandatees;
}
