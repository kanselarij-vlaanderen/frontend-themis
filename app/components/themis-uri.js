import Component from '@glimmer/component';
import config from 'frontend-themis/config/environment';

export default class ThemisUriComponent extends Component {
  get localBasePath() {
    if (!this.args.uri) {
      return null;
    } else {
      return this.args.uri.slice(config.metis.baseUrl.length);
    }
  }
}
