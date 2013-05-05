define(function() {

  'use strict';

  function BaseController() {

  }

  BaseController.prototype.destroy = function() {
    console.log('Controller destroy');
  };

  return BaseController;
});