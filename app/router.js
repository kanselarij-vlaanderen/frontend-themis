import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import { fallbackRoute, externalRoute, classRoute } from 'ember-metis';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('sparql');
  this.route('docs', function () {
    this.route('publication');
    this.route('catalogs');
  });
  this.route('view', function () {
    classRoute(this, 'person', {
      class: 'http://www.w3.org/ns/person#Person',
    });
    classRoute(this, 'mandatee', {
      class: 'http://data.vlaanderen.be/ns/mandaat#Mandataris',
    });
    classRoute(this, 'government-body', {
      class: 'http://data.vlaanderen.be/ns/besluit#Bestuursorgaan',
    });
  });
  externalRoute(this);
  fallbackRoute(this);
});
