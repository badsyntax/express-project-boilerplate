var Controller = require('../lib/Controller');
var ControllerREST = require('../lib/Controller/ControllerREST');
var ViewModel = require('../lib/ViewModel');

function ControllerAPI() {
  ControllerREST.apply(this, arguments);
}

require('util').inherits(ControllerAPI, ControllerREST);

// GET request (list)
ControllerAPI.prototype.actionIndex = function() {
  this.sendResponse(200, 'text/html', 'Hello, world');
};

// POST request (create)
ControllerAPI.prototype.actionPost = function() {
  this.sendResponse(200, 'text/html', 'Hello, world');
};

// PUT request (update)
ControllerAPI.prototype.actionUpdate = function() {
  this.sendResponse(200, 'text/html', 'Hello, world');
};

// DELETE request (delete)
ControllerAPI.prototype.actionDelete = function() {
  this.sendResponse(200, 'text/html', 'Hello, world');
};

module.exports = ControllerAPI;