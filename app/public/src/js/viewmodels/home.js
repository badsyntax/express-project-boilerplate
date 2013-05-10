define([
  'util/inherits',
  'knockout',
  // UI components
  'components/accordian',
  './base',
  './fragments/nav'
], function(inherits, ko, Accordian, BaseViewModel, NavViewModel) {

  'use strict';

  function HomeViewModel() {
    BaseViewModel.apply(this, arguments);
    this.setup();
    this.bind();
    this.populate();
  }
  inherits(HomeViewModel, BaseViewModel);

  HomeViewModel.prototype.setup = function() {

    // Create child ViewModels
    this.navViewModel = new NavViewModel('#nav');

    // Create the observables with default data
    this.setData({
      title: 'Home',
      technologies: []
    });
  };

  // Add data to observables
  HomeViewModel.prototype.populate = function() {
    this.setData({
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