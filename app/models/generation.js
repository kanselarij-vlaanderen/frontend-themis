import Model, { attr } from '@ember-data/model';

export default class GenerationModel extends Model {
  @attr() time;
  @attr() uri;

  get rdfaBindings() {
    return {
      // eslint-disable-line ember/avoid-leaking-state-in-ember-objects
      class: 'http://www.w3.org/ns/prov#Generation',
      time: 'http://www.w3.org/ns/prov#atTime',
    };
  }
}
