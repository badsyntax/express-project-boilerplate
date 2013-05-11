var _ = require('lodash');
_.str = require('underscore.string');

function Controller(app, req, res, action, execute) {

  execute = execute === undefined ? true : execute;

  this.app = app;
  this.req = req;
  this.res = res;
  this.action(action);

  if (execute) {
    this.execute();
  }
}

require('util').inherits(Controller, require('events').EventEmitter);

// Executes the main controller logic
Controller.prototype.execute = function() {

  this.before();

  if (this[this.action()] === undefined) {
    console.error('Controller action not found:', this.action());
    return this.res.send(404);
  }

  this[this.action()]();
  this.after();
};

// Sets/gets the action method name
Controller.prototype.action = function(action) {
  if (!action) {
    return this._action;
  }
  this._action = 'action' + _.str.capitalize(action);
};

Controller.prototype.before = function() {};
Controller.prototype.after = function() {};

module.exports = Controller;
