var Controller = require('../../../lib/Controller');

describe('Controller lib', function () {

  var app = {};
  var req = {};
  var res = {
    send: function () {}
  };
  var action = 'index';

  it('Has the expected API methods', function () {
    expect(typeof Controller.prototype.execute).toBe('function');
    expect(typeof Controller.prototype.action).toBe('function');
    expect(typeof Controller.prototype.before).toBe('function');
    expect(typeof Controller.prototype.after).toBe('function');
  });

  it('Sets the correct properties on construction', function () {
    var myController = new Controller(app, req, res, action, false);
    expect(myController.app).toBe(app);
    expect(myController.req).toBe(req);
    expect(myController.res).toBe(res);
  });

  describe('Action API method', function () {

    it('Sets the action in the correct format', function () {
      var myController = new Controller(app, req, res, action, false);
      myController.action('test');
      expect(myController._action).toBe('actionTest');
    });

    it('Gets the action property', function () {
      var myController = new Controller(app, req, res, action, false);
      myController.action('test');
      expect(myController.action()).toBe('actionTest');
    });
  });

  it('Sets the action correctly on construction', function () {
    var myController = new Controller(app, req, res, action, false);
    expect(myController.action()).toBe('actionIndex');
  });

  describe('Execution', function () {

    it('Does not executes the controller on construction if the execute argument is false', function () {
      spyOn(Controller.prototype, 'execute');
      new Controller(app, req, res, action, false);
      expect(Controller.prototype.execute).not.toHaveBeenCalled();
    });

    it('Executes the controller on construction if the execute argument is true', function () {
      spyOn(Controller.prototype, 'execute');
      new Controller(app, req, res, action, true);
      expect(Controller.prototype.execute).toHaveBeenCalled();
    });

    it('Executes the controller on construction if the execute argument is undefined', function () {
      spyOn(Controller.prototype, 'execute');
      new Controller(app, req, res, action);
      expect(Controller.prototype.execute).toHaveBeenCalled();
    });

    it('Sends a 404 response if the action method does not exist', function () {
      spyOn(res, 'send');
      spyOn(console, 'error');
      var myController = new Controller(app, req, res, action);
      expect(res.send).toHaveBeenCalledWith(404);
      expect(console.error).toHaveBeenCalled();
    });

    it('Executes the before method before checking if the action method exists', function () {

      spyOn(res, 'send');
      spyOn(console, 'error');
      spyOn(Controller.prototype, 'before');

      new Controller(app, req, res, action);

      expect(Controller.prototype.before).toHaveBeenCalled();
      expect(res.send).toHaveBeenCalled();
      expect(console.error).toHaveBeenCalled();
    });

    it('Executes the before method, the action method and the after method if the action exists', function () {

      function MyController() {
        Controller.apply(this, arguments);
      }
      require('util').inherits(MyController, Controller);
      MyController.prototype.actionIndex = function () {};

      spyOn(res, 'send');
      spyOn(MyController.prototype, 'before');
      spyOn(MyController.prototype, 'actionIndex');
      spyOn(MyController.prototype, 'after');

      new MyController(app, req, res, action);

      expect(MyController.prototype.before).toHaveBeenCalled();
      expect(MyController.prototype.actionIndex).toHaveBeenCalled();
      expect(MyController.prototype.after).toHaveBeenCalled();
      expect(res.send).not.toHaveBeenCalled();
    });
  });
});