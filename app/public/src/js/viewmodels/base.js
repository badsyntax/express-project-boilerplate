define([
  'knockout',
  'knockout-mapping',
  'jquery'
], function(ko, koMapping, $) {

  'use strict';

  function BaseViewModel(viewSelector) {
    this.viewSelector = viewSelector;
    this.view = $(viewSelector);
  }

  BaseViewModel.prototype.bind = function() {
    if (!this.view.length) {
      throw new Error('Unable to bind ViewModel to \'' + this.viewSelector + '\'');
    }
    ko.applyBindings(this, this.view[0]);
  };

  BaseViewModel.prototype.setData = function(data) {
    koMapping.fromJS(data, null, this);
  };

  BaseViewModel.prototype.rendered = function() {};

  return BaseViewModel;
});