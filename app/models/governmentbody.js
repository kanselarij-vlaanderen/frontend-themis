import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class GovernmentBodyModel extends Model {
  @attr() name;
  @belongsTo('governmentbody', { inverse: 'governmentbodies' }) istimespecializationof;
  @belongsTo('version', { inverse: null }) startdate;
  @belongsTo('version', { inverse: null }) enddate;
  @hasMany('governmentbody', { inverse: 'istimespecializationof' }) governmentbodies;
  @hasMany('mandates', { inverse: 'governmentbody' }) mandates;
  @hasMany('mandatees', { inverse: 'governmentbody' }) mandatees;
}
