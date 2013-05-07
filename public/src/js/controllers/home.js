define([
  'knockout',
  'util/index',
  './base',
  'viewmodels/base',
  'viewmodels/home'
], function(ko, util, BaseController, BaseViewModel, HomeViewModel) {

  'use strict';

  function HomeController() {
    BaseController.apply(this, arguments);
    this.initViewModels();
  }

  util.inherits(HomeController, BaseController);

  HomeController.prototype.initViewModels = function(first_argument) {
    this.viewModel = new HomeViewModel();
  };

  return HomeController;
});