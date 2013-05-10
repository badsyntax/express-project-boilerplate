define([
  'jquery',
  'util/events',
  'director',
  // Be sure to require all controllers here
  'controllers/home',
  'controllers/about'
], function($, Events, Director, HomeController, AboutController) {

  'use strict';

  var router;

  function init() {
    createRouter();
    createControllers();

    // FIXME: Set the default route to home
    if (!router.getRoute()) {
      router.setRoute('');
    }
  }

  function createRouter() {
    router = new Director()
    .configure({
      delimiter: '/',
      before: beforeRoute
    })
    .init();
  }

  function createControllers() {
    new HomeController(router);
    new AboutController(router);
  }

  function beforeRoute() {
    Events.emit('route.before');
  }

  return {
    init: init
  };
});