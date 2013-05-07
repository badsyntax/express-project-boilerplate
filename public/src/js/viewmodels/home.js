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
    BaseViewModel.call(this, '#home');
    this.populate();
    this.bind();
    this.rendered();
  }
  util.inherits(HomeViewModel, BaseViewModel);

  HomeViewModel.prototype.rendered = function() {
    this.tabs = new Tabs(
      this.view.find('.tabs')
    );
    this.accordian = new Accordian(
      this.view.find('.accordian')
    );
  };

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