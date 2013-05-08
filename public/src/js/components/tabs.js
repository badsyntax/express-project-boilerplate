define(function() {

  'use strict';

  function Tabs(container) {
    this.container = container;
    this.init();
  }

  Tabs.prototype.init = function() {
    this.container.addClass('ui-tabs');
  };

  return Tabs;
});