define([
  'util/config',
  'director',
  'controllers/home'
], function(config, director, HomeController) {

  'use strict';

  var Router = {
    init: function(controller) {
      if (controller) {
        this.initController(controller);
      } else {
        initSinglePageRouter();
      }
    },
    initController: function(controller) {
      new (require('controllers/' + controller));
    },
    initSinglePageRouter: function() {

      var routes = {
        '/author': function () {
          console.log('author');
        },
      };

      var router = Router(routes);
      router.init();
    }
  };

  return Router;
});