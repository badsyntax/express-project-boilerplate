define([
  'knockout',
  'util/inherits',
  './base'
], function(ko, inherits, BaseController) {

  'use strict';

  function CommonController() {
    // alert('commont BaseController');
    this.initViewModels();
  }

  inherits(CommonController, BaseController);

  CommonController.prototype.initViewModels = function() {
  };

  return CommonController;
});