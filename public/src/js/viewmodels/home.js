define([
  'knockout'
], function(ko) {

  'use strict';

  function HomeViewModel() {
    this.stuff = ko.observable('hello');
  }

  return HomeViewModel;
})