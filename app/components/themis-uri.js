import Component from '@glimmer/component';
import { getOwner } from '@ember/application';
export default class ThemisUriComponent extends Component {
  constructor() {
    super(...arguments);
    this.config = getOwner(this).resolveRegistration('config:environment');
  }

  get localBasePath() {
    if (!this.args.uri) {
      return null;
    } else {
      return this.args.uri.slice(this.config.metis.baseUrl.length);
    }
  }
}
