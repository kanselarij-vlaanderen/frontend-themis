import Model, { belongsTo } from '@ember-data/model';

export default class MandateModel extends Model {
  @belongsTo('governmentfunction', { inverse: null}) governmentfunction;
  @belongsTo('governmentbody', { inverse: 'mandates'}) governmentbody;
}
