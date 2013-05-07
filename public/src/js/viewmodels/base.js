define([
  'knockout',
  'knockout-mapping',
  'jquery'
], function(ko, koMapping, $) {

  'use strict';

  function BaseViewModel(viewSelector) {
    this.view = $(this.viewSelector);
  }

  BaseViewModel.prototype.bind = function() {
    ko.applyBindings(this, this.view[0]);
  };

  BaseViewModel.prototype.setData = function(data) {
    koMapping.fromJS(data, null, this);
  };

  BaseViewModel.prototype.rendered = function() {};

  return BaseViewModel;
});