import Application from 'frontend-public-api/app';
import config from 'frontend-public-api/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
