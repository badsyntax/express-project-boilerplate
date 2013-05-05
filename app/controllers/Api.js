var ControllerREST = require('../../lib/Controller/ControllerREST');

function ControllerAPI() {
  ControllerREST.apply(this, arguments);
}

require('util').inherits(ControllerAPI, ControllerREST);

// GET request (list)
ControllerAPI.prototype.actionIndex = function() {

  var response = JSON.stringify({
    hello: 'world'
  });

  this.sendResponse(200, 'application/json', response);
};

// POST request (create)
ControllerAPI.prototype.actionPost = function() {

  var response = JSON.stringify({
    hello: 'world'
  });

  this.sendResponse(200, 'application/json', response);
};

// PUT request (update)
ControllerAPI.prototype.actionUpdate = function() {

  var response = JSON.stringify({
    hello: 'world'
  });

  this.sendResponse(200, 'application/json', response);
};

// DELETE request (delete)
ControllerAPI.prototype.actionDelete = function() {

  var response = JSON.stringify({
    hello: 'world'
  });

  this.sendResponse(200, 'application/json', response);
};

module.exports = ControllerAPI;