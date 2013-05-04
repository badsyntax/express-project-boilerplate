define([
  './config',
  './inherits',
  './events'
], function(Config, inherits, Events) {

  'use strict';

  return {
    Config: Config,
    Events: Events,
    inherits: inherits
  }
})