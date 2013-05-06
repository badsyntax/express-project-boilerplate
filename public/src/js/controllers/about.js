define([
  'knockout',
  'util/index',
  './base'
], function(ko, util, BaseController) {

  'use strict';

  function AboutController() {
    console.log('About Controller');
    this.initViewModels();
  }

  util.inherits(AboutController, BaseController);

  AboutController.prototype.initViewModels = function() {
  };

  return AboutController;
});