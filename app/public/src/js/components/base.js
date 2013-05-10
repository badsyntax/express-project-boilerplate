define([
    'util/eventemitter',
    'util/inherits'
], function(EventEmitter, inherits) {

  'use strict';

  function Base(container) {
    EventEmitter.call(this);
    this.container = container;
  }

  inherits(Base, EventEmitter);

  return Base;
});