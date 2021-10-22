import Route from '@ember/routing/route';
import ENV from 'frontend-themis/config/environment';

export default class ApplicationRoute extends Route {
  setupController(controller, model) {
    super.setupController(controller, model);
    // try ... catch tests URL-validity to see if the EMBER_... ENV-var placeholder has been substituted
    try {
      new URL(ENV.VO_HEADER_WIDGET_URL);
      controller.VO_HEADER_WIDGET_URL = ENV.VO_HEADER_WIDGET_URL;
    } catch (_) {
      controller.VO_HEADER_WIDGET_URL = null;
    }
    try {
      new URL(ENV.VO_FOOTER_WIDGET_URL);
      controller.VO_FOOTER_WIDGET_URL = ENV.VO_FOOTER_WIDGET_URL;
    } catch (_) {
      controller.VO_FOOTER_WIDGET_URL = null;
    }
  }
}
