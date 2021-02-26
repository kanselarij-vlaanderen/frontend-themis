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

  get mandateesByName() {
    var result = [];

    this.mandatees.forEach(function(item) {
      console.log("item", item.get('person.familyName'));
      var nameKey = item.get('person.firstName') + item.get('person.familyName');
      var hasName = result.findBy('name', nameKey);

      if(!hasName) {
         result.push(Ember.Object.create({
            name: nameKey,
            mandatees: [],
            person: item.person
         }));
      }

      result.findBy('name', item.get('person.firstName') + item.get('person.familyName')).get('mandatees').push(item);
   });

   return result;
  }
}
