define([
  'util/inherits',
  'knockout',
  './base',
  'viewmodels/home'
], function(inherits, ko, PageController, HomeViewModel) {

  'use strict';

  function HomeController() {
    PageController.apply(this, arguments);
    this.setRoutes();
    this.viewModel = new HomeViewModel('#home');
  }
  inherits(HomeController, PageController);

  HomeController.prototype.setRoutes = function() {
    this.router.on('', this.execute);
  };

  HomeController.prototype.execute = function() {
    // alert('run');
  };

  return HomeController;
});