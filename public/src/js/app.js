define([
  'util/config',
  'util/events',
  'director',
  'globalize'
], function (config, events, director, globalize) {
  return {
    config: config,
    events: events,
    director: director,
    globalize: globalize
  }
});