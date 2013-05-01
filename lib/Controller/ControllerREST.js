var ViewModel = require('../ViewModel');
var Controller = require('../Controller');

function ControllerREST(app, req, res, action) {
  Controller.apply(this, arguments);
}

require('util').inherits(ControllerREST, Controller);

ControllerREST.prototype.sendResponse = function(status, contentType, body) {
  this.res.writeHead(200, {
    'Content-Type': contentType
  });
  this.res.end(body);
};

module.exports = ControllerREST;