/**
 * Abstract Controller class for RESTful controller mapping. Supports GET, PUT,
 * POST, and DELETE. By default, these methods will be mapped to these actions:
 *
 * GET:    Mapped to the "index" action, lists all objects
 * POST:   Mapped to the "create" action, creates a new object
 * PUT:    Mapped to the "update" action, update an existing object
 * DELETE: Mapped to the "delete" action, delete an existing object
 *
 * Additional methods can be supported by adding the method and action to
 * the `actionMap` property.
 *
 */

var Controller = require('../Controller');

function ControllerREST(app, req, res, action) {

  this.actionMap = this.actionMap || {
    'GET':    'index',
    'PUT':    'update',
    'POST':   'create',
    'DELETE': 'delete'
  };

  Controller.apply(this, arguments);
}

require('util').inherits(ControllerREST, Controller);

ControllerREST.prototype.before = function() {

  Controller.prototype.before.apply(this, arguments);

  var method = this.req.method;

  if (this.actionMap[method] === undefined) {
    this.action('invalid');
  } else {
    this.action(this.actionMap[method])
  }
};

ControllerREST.prototype.actionInvalid = function() {
  this.res.send(503);
};

ControllerREST.prototype.sendResponse = function(status, contentType, body) {
  this.res.writeHead(status, {
    'Content-Type': contentType
  });
  this.res.end(body);
};

module.exports = ControllerREST;
