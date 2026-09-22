'use strict';

const querystring = require('node:querystring');

// ember-cli >= 6 ships Express 5, whose default query parser returns objects
// without a prototype. ember-cli-fastboot's dev-server middleware still calls
// `req.query.hasOwnProperty(...)` and crashes on every request. Restore a
// regular object prototype for parsed query strings until ember-cli-fastboot
// ships a fix. Only affects `ember serve`, not the FastBoot app server.
module.exports = function (app) {
  app.set('query parser', (str) => Object.assign({}, querystring.parse(str)));
};
