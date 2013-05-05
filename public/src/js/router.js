define([
  'app',
  'director',
  // Be sure to require all controllers here
  'controllers/home'
], function(app, Router, HomeController) {

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
        '': this.runController.bind(this, 'home', HomeController)
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
      // Create a new instance of the controller
      if (!this.controllers[name]) {
        this.controllers[name] = new Controller();
      }
      // Restore the controller
      else if (this.controllers[name].refresh) {
        this.controllers[name].restore();
      }
      // Set as current controller
      this.controller = this.controllers[name];
    },
    before: function() {
      app.events.emit('route.before');
    }
  };
});