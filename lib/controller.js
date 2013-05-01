function Controller(app, req, res, action) {
  this.app = app;
  this.req = req;
  this.res = res;
  this.action = action;
  this.execute();
}

require('util').inherits(Controller, require('events').EventEmitter);

Controller.prototype.execute = function() {

  if (this[this.action] === undefined) {
    console.error('Controller action not found:', this.action);
    return this.res.send(404);
  }

  this.before();
  this[this.action]();
  this.after();
};

Controller.prototype.before = function() {};
Controller.prototype.after = function() {};

module.exports = Controller;
