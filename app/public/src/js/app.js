define('app', [
  'module',
  'util/config',
  'globalize',
  'backbone',
  'router'
], function (module, Config, Globalize, Backbone, router) {

  "use strict";

  // Provide a global location to place configuration settings and module
  // creation.
  var app = {
    // The root path to run the application.
    root: "/"
  };


  // function init() {

  //   /** Set app config */
  //   Config.set(module.config());

  //   * Set globalization culture
  //   Globalize.culture(Config.get('culture') || 'en-GB');

  //   /** Set the app routes */
  //   router.setRoutes();
  // }

  return _.extend(app, Backbone.Events);
});