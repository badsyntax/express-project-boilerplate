define([
  'knockout',
  'util/inherits',
  './base'
], function(ko, inherits, BaseController) {

  'use strict';

  function AboutController() {
    console.log('About Controller');
    this.initViewModels();
  }

  inherits(AboutController, BaseController);

  AboutController.prototype.initViewModels = function() {
  };

  return AboutController;
});