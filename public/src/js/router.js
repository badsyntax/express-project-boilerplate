define([
  'jquery',
  'util/events',
  'director',
  // Be sure to require all controllers here
  'controllers/home',
  'controllers/about'
], function($, Events, Director, HomeController, AboutController) {

  'use strict';

  var controller;

  return {
    init: function() {

      this.config = {
        delimiter: '/',
        before: this.beforeRoute.bind(this)
      };

      this.routes = {
        '':      this.runController.bind(this, HomeController),
        'about': this.runController.bind(this, AboutController)
      };

      this.router = new Director(this.routes)
        .configure(this.config)
        .init();

      // FIXME: Set the default route to home
      if (!this.router.getRoute()) {
        this.router.setRoute('');
      }
    },
    runController: function(Controller) {

      // Don't do anything if executing the same controller
      if (controller && (controller instanceof Controller)) {
        return;
      }

      // Destroy the previous controller
      if (controller && controller.destroy) {
        controller.destroy();
      }

      // Create a new instance of the controller
      controller = new Controller();
    },
    beforeRoute: function() {
      Events.emit('route.before');
    }
  };
});