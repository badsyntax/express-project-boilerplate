define([
  'app',
  // Be sure to require all controllers here
  'controllers/home'
], function(app, HomeController) {

  'use strict';

  var controller;
  var controllers = {};

  return {
    init: function() {

      this.config = {
        delimiter: '/',
        before: this.before.bind(this)
      };

      this.routes = {
        '': this.controller.bind(this, 'home', HomeController)
      };

      this.router = Router(this.routes)
      .configure(this.config)
      .init();

      // FIXME: Set the default route to home
      if (!this.router.getRoute()) {
        this.router.setRoute('');
      }
    },
    controller: function(name, Controller) {

      // Destroy the previous controller
      if (controller && controller.destroy) {
        controller.destroy();
      }
      // Create a new instance of the controller
      if (!controllers[name]) {
        controllers[name] = new Controller();
      }
      // Restore the controller
      else if (controllers[name].refresh) {
        controllers[name].restore();
      }
      // Set as current controller
      controller = controllers[name];
    },
    before: function() {
      app.events.emit('route.before');
    }
  };
});