define([
  'knockout',
  'util/index',
  './base',
  'viewmodels/home'
], function(ko, util, BaseController, HomeViewModel) {

  'use strict';

  function HomeController() {
    console.log('Home Controller');
    this.initViewModels();
  }

  util.inherits(HomeController, BaseController);

  HomeController.prototype.initViewModels = function(first_argument) {
    this.viewModel = new HomeViewModel();
    ko.applyBindings(this.viewModel);
  };

  return HomeController;
});