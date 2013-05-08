/**
 * Tabs Component
 * This is an example of how to structure a basic UI component.
 * */

define([
    'util/inherits',
    './base'
], function(inherits, BaseComponent) {

  'use strict';

  function Tabs(container) {
    BaseComponent.apply(this, arguments);
    this.setup();
    this.bindEvents();
    this.trigger('select', 0); // select the first tab
  }

  inherits(Tabs, BaseComponent);

  Tabs.prototype.setup = function() {
    this.tabs = this.container.find('>ul>li');
  };

  Tabs.prototype.bindEvents = function() {

    // Public events
    this.on('select', this.onSelectTab.bind(this));

    // Internal events
    this.container.on('click.tabs', 'li a', this.onTabClick.bind(this));
  };

  Tabs.prototype.onSelectTab = function(index) {
    this.onTabClick({
        currentTarget: this.tabs.eq(index).find('a')[0]
    })
  };

  Tabs.prototype.onTabClick = function(e) {
    var element = $(e.currentTarget);
    this.tabs.removeClass('selected');
    element.parent().addClass('selected');
  };

  return Tabs;
});