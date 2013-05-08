define(function() {

  function Emitter() {
    this.events = {};
  }

  Emitter.prototype.on = function(type, handler) {

    var events = this.events;

    if (!events[type]) {
      events[type] = [];
    }

    events[type].push(handler);

    return this;
  };

  Emitter.prototype.off = function(type, handler) {

    var events = this.events[type];

    if (events) {

      if (!handler) {
        // Remove all event handlers
        events = [];
      } else {
        // Remove a specific event handler
        events.splice(events.indexOf(handler), 1);
      }

      // If this event handler group is empty then remove it
      if (!events.length) {
        delete this.events[type];
      }
    }

    return this;
  };

  Emitter.prototype.emit = function(type, data) {

    var event;
    var events = (this.events[type] || []).slice();

    if (events.length) {
      while ((event = events.shift())) {
        event.call(this, data);
      }
    }
    return this;
  };

  Emitter.prototype.trigger = Emitter.prototype.emit;

  return Emitter;
});