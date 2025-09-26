import { irregular } from '@ember-data/request-utils/string';

export function initialize(/* application */) {
  irregular('person', 'persons');
}

export default {
  name: 'custom-inflector-rules',
  initialize,
};
