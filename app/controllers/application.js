import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  get hasExternallySourcedHeader() {
    return Boolean(this.VO_HEADER_WIDGET_URL);
  }

  get hasExternallySourcedFooter() {
    return Boolean(this.VO_FOOTER_WIDGET_URL);
  }
}
