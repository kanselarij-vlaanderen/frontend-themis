import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import ENV from 'frontend-themis/config/environment';

export default class ApplicationController extends Controller {
  @service headData;

  get hasExternallySourcedHeader() {
    return this.headData.headTags.any((h) => h.attrs.content == ENV.VO_HEADER_WIDGET_URL);
  }

  get hasExternallySourcedFooter() {
    return this.headData.headTags.any((h) => h.attrs.content == ENV.VO_FOOTER_WIDGET_URL);
  }
}
