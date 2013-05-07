define(function() {

  'use strict';

  function Tabs(container) {
    this.container = container;
    console.log(this.container);
    this.initUI();
  }

  Tabs.prototype.initUI = function() {
    this.container.addClass('tabssdsd');
  };

  return Tabs;
});