define([
  'util/events',
  'director',
  // Be sure to require all controllers here
  'controllers/home',
  'controllers/about'
], function(Events, Director, HomeController, AboutController) {

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
        '':      this.runController.bind(this, 'home', HomeController),
        'about': this.runController.bind(this, 'about', AboutController)
      };

      this.router = new Director(this.routes)
        .configure(this.config)
        .init();

      // FIXME: Set the default route to home
      if (!this.router.getRoute()) {
        this.router.setRoute('');
      }
    },
    runController: function(name, Controller) {

      // Destroy the previous controller
      if (controller && controller.destroy) {
        controller.destroy();
      }
      // If not previously created, create a new instance of the controller
      if (!controllers[name]) {
        controllers[name] = new Controller();
      }
      // Else restore the previously created controller
      else if (controllers[name].restore) {
        controllers[name].restore();
      }

      // Set the controller as the current controller
      controller = controllers[name];
    },
    before: function() {
      Events.emit('route.before');
    }
  };
});