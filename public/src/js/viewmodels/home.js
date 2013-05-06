define([
  'knockout',
  'knockout-mapping',
  // UI components
  'components/accordian',
  'components/tabs'
], function(ko, koMapping, Accordian, Tabs) {

  'use strict';

  function HomeViewModel() {
    this.initUIComponents();
    this.populate();
  }

  HomeViewModel.prototype.initUIComponents = function() {
    this.tabs = new Tabs();
    this.accordian = new Accordian();
  };

  HomeViewModel.prototype.populate = function() {
    koMapping.fromJS({
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