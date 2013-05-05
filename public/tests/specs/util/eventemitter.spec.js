define([
  "util/eventemitter"
], function(Emitter) {

  describe('Event Emitter', function() {

    var emitter;

    beforeEach(function() {
      emitter = new Emitter();
    });

    it('Should store handlers for a given event', function() {

      var handler = function() {};

      emitter.on('myevent', handler);

      var events = emitter.events.myevent;

      expect(events.length).toBe(1);
      expect(events[0]).toBe(handler);
    });

    it('Should store multiple handlers for the same event', function() {

      emitter.on('myevent', function() {});
      emitter.on('myevent', function() {});

      var events = emitter.events.myevent;

      expect(events.length).toBe(2);
      expect(events[0]).not.toBe(events[1]);
    });

    it('Executes the handlers when emitting a given event', function() {

      var handler1 = jasmine.createSpy();
      var handler2 = jasmine.createSpy();

      emitter.on('myevent', handler1);
      emitter.on('myevent', handler2);
      emitter.emit('myevent');

      expect(handler1).toHaveBeenCalled();
      expect(handler2).toHaveBeenCalled();
    });

    it('Executes the handlers with data passed in as the first function argument', function() {

      var handler = jasmine.createSpy();
      var data = {
        foo: 'bar'
      };

      emitter.on('myevent', handler);
      emitter.emit('myevent', data);

      expect(handler).toHaveBeenCalledWith(data);
    });

    it('Removes all handlers for a given event', function() {
      emitter.on('myevent', function() {});
      emitter.off('myevent');
      expect(emitter.events.myevent).toBe(undefined);
    });

    it('Removes specific handlers for a given event', function() {

      var handler1 = function() {};
      var handler2 = function() {};

      emitter.on('myevent', handler1);
      emitter.on('myevent', handler2);
      emitter.off('myevent', handler1);

      expect(emitter.events.myevent.length).toBe(1);
      expect(emitter.events.myevent[0]).toBe(handler2);

      emitter.off('myevent', handler2);

      expect(emitter.events.myevent).toBe(undefined);
    });
  });
});