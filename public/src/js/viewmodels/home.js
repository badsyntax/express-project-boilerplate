define([
  'util/index',
  'knockout',
  // UI components
  'components/accordian',
  'components/tabs',
  './base'
], function(util, ko, Accordian, Tabs, BaseViewModel) {

  'use strict';

  function HomeViewModel() {
    BaseViewModel.apply(this, arguments);
    this.setup();
    this.bind();
    this.populate();
    this.rendered();
  }
  util.inherits(HomeViewModel, BaseViewModel);

  HomeViewModel.prototype.rendered = function() {

    // Create tabs component
    this.tabs = new Tabs(
      this.view.find('.tabs')
    );

    // Create accordian component
    this.accordian = new Accordian(
      this.view.find('.accordian')
    );
  };

  // Setup observables
  HomeViewModel.prototype.setup = function() {
    this.setData({
      pages: [],
      technologies: [],
      pendingRequest: false
    });
  };

  // Add data to observables
  HomeViewModel.prototype.populate = function() {
    this.setData({
      pages: [{
        name: 'Home',
        url: ''
      }, {
        name: 'About',
        url: 'about'
      }],
      technologies: [{
        name: 'Server side',
        items: [{
          name: 'node.js'
        }, {
          name: 'express'
        }]
      }, {
        name: 'Client side',
        items: [{
          name: 'requirejs'
        }, {
          name: 'knockoutjs'
        }]
      }]
    }, null, this);
  };

  return HomeViewModel;
});