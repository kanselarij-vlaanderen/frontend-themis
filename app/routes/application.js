import Route from '@ember/routing/route';
import ENV from 'frontend-themis/config/environment';

export default class ApplicationRoute extends Route {
  headTags() {
    const headers = [];
    try {
      new URL(ENV.VO_HEADER_WIDGET_URL);
      headers.push({
        type: 'script',
        tagId: 'vo-header-widget',
        attrs: {
          name: 'src',
          content: ENV.VO_HEADER_WIDGET_URL
        }
      });
    } catch (_) {} // eslint-disable-line no-empty
    try {
      new URL(ENV.VO_FOOTER_WIDGET_URL);
      headers.push({
        type: 'script',
        tagId: 'vo-header-widget',
        attrs: {
          name: 'src',
          content: ENV.VO_FOOTER_WIDGET_URL
        }
      });
    } catch (_) {} // eslint-disable-line no-empty
    return headers;
  }
}
