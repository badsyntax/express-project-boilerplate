define([
  'util/inherits',
  'knockout',
  'components/tabs',
  '../base'
], function(inherits, ko, Tabs, BaseViewModel) {

  'use strict';

  function NavViewModel() {
    BaseViewModel.apply(this, arguments);
    this.setup();
    this.bind();
    this.populate();
    this.rendered();
  }
  inherits(NavViewModel, BaseViewModel);

  // Setup observables
  NavViewModel.prototype.setup = function() {
    this.setData({
      pages: [],
      pendingRequest: false
    });
  };

  // Init the components after the ViewModel has been bound to the DOM
  NavViewModel.prototype.rendered = function() {
    // Create tabs component
    this.tabs = new Tabs(this.view);
  };

  // Add data to observables
  NavViewModel.prototype.populate = function() {
    this.setData({
      pages: [{
        name: 'Home',
        url: ''
      }, {
        name: 'About',
        url: 'about'
      }]
    }, null, this);
  };

  return NavViewModel;
});