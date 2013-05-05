define([
  'util/config',
  'util/events',
  'globalize'
], function (config, events, globalize) {
  return {
    config: config,
    events: events,
    globalize: globalize
  };
});