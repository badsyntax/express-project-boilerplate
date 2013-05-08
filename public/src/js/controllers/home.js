define([
  'util/inherits',
  'knockout',
  './base',
  'viewmodels/home'
], function(inherits, ko, BaseController, HomeViewModel) {

  'use strict';

  function HomeController() {
    BaseController.apply(this, arguments);
    this.initViewModels();
  }
  inherits(HomeController, BaseController);

  HomeController.prototype.initViewModels = function() {
    this.viewModel = new HomeViewModel('#home');
  };

  return HomeController;
});