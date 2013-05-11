define([
  'jquery',
  'util/events',
  'director',
  'controllers/common',
  'controllers/home',
  'controllers/about'
], function($, Events, Director, CommonController, HomeController, AboutController) {

  'use strict';

  var router;

  function init() {
    createRouter();
    createControllers();
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
    new CommonController(router);
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