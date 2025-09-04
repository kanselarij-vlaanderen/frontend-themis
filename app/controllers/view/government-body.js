import Controller from '@ember/controller';

export default class ViewGovernmentbodyController extends Controller {
  queryParams = ['resource'];

  get mandateesByPerson() {
    const persons = [];

    this.model.mandatees.forEach(function (mandatee) {
      let person = persons.find((person) => person.id === mandatee.person.get('id'));

      if (!person) {
        person = {
          id: mandatee.person.get('id'),
          mandatees: [],
          person: mandatee.person,
        };
        persons.push(person);
      }

      person.mandatees.push(mandatee);
    });

    persons.forEach(function (person) {
      person.meanMandateePriority = person.mandatees.map((m) => m.priority);
    });

    return persons;
  }

  get mandatesByPerson() {
    const persons = [];

    this.model.mandates.forEach(function (mandate) {
      mandate.mandatees.forEach(function (mandatee) {
        let person = persons.find((person) => person.id === mandatee.person.get('id'));

        if (!person) {
          person = {
            id: mandatee.person.get('id'),
            mandatees: [],
            person: mandatee.person,
          };
          persons.push(person);
        }

        person.mandatees.push(mandatee);
      });
    });

    persons.forEach(function (person) {
      person.meanMandateePriority = person.mandatees.map((m) => m.priority);
    });

    return persons;
  }
}
