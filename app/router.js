import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import metisFallbackRoute from 'metis/utils/fallback-route';
import classRoute from 'metis/utils/class-route';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
   metisFallbackRoute(this);
});