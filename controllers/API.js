var Controller = require('../lib/Controller');
var ControllerREST = require('../lib/Controller/ControllerREST');
var ViewModel = require('../lib/ViewModel');

function ControllerAPI() {
  ControllerREST.apply(this, arguments);
}

require('util').inherits(ControllerAPI, ControllerREST);

ControllerAPI.prototype.actionIndex = function() {
    this.sendResponse(200, 'text/html', 'Hello, world');
};

module.exports = ControllerAPI;
