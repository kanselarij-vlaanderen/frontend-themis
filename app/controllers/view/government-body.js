import Controller from '@ember/controller';

export default class ViewGovernmentbodyController extends Controller {
  queryParams = ['resource'];

  get mandateesByName() {
    const persons = [];

    this.model.mandatees.forEach(function(mandatee) {
      let person = persons.findBy('id', mandatee.person.get('id'));

      if (!person) {
        person = {
            id: mandatee.person.get('id'),
            mandatees: [],
            person: mandatee.person
         };
         persons.push(person);
      }

      person.mandatees.push(mandatee);
   });

   return persons;
  }
}
