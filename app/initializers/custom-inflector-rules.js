import { irregular } from '@warp-drive/utilities/string';

export function initialize(/* application */) {
  irregular('person', 'persons');
}

export default {
  name: 'custom-inflector-rules',
  initialize,
};
