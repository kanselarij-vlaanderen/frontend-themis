import Route from '@ember/routing/route';
import ENV from 'frontend-themis/config/environment';

export default class ApplicationRoute extends Route {
  headTags() {
    const headers = [];
    if (ENV.VO_HEADER_WIDGET_URL) {
      headers.push({
        type: 'script',
        tagId: 'vo-header-widget',
        attrs: {
          name: 'src',
          content: ENV.VO_HEADER_WIDGET_URL
        }
      })
    }
    if (ENV.VO_FOOTER_WIDGET_URL) {
      headers.push({
        type: 'script',
        tagId: 'vo-footer-widget',
        attrs: {
          name: 'src',
          content: ENV.VO_FOOTER_WIDGET_URL
        }
      })
    }
    return headers;
  }
}
