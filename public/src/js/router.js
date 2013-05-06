define([
  'app',
  'director',
  // Be sure to require all controllers here
  'controllers/home',
  'controllers/about'
], function(app, Router, HomeController, AboutController) {

  'use strict';

  return {
    controller: null,
    controllers: {},
    init: function() {

      this.config = {
        delimiter: '/',
        before: this.before.bind(this)
      };

      this.routes = {
        '':      this.runController.bind(this, 'home', HomeController),
        'about': this.runController.bind(this, 'about', AboutController)
      };

      this.router = new Router(this.routes)
        .configure(this.config)
        .init();

      // FIXME: Set the default route to home
      if (!this.router.getRoute()) {
        this.router.setRoute('');
      }
    },
    runController: function(name, Controller) {

      // Destroy the previous controller
      if (this.controller && this.controller.destroy) {
        this.controller.destroy();
      }
      // If not previously created, create a new instance of the controller
      if (!this.controllers[name]) {
        this.controllers[name] = new Controller();
      }
      // Else restore the previously created controller
      else if (this.controllers[name].restore) {
        this.controllers[name].restore();
      }

      // Set the controller as the current controller
      this.controller = this.controllers[name];
    },
    before: function() {
      app.events.emit('route.before');
    }
  };
});