var path = require('path');
var q = require('q');
var fs = require('fs');
var _ = require('lodash');
_.str = require('underscore.string');

var Router = function(app) {

  this.app = app;
  this.routes = require('../routes');
  this.redirects = require('../routes/redirects');

  this.getControllers().then(function(controllers) {
    this.controllers = controllers;
    this.setupRedirects();
    this.setupRoutes();
  }.bind(this));
};

Router.prototype.setupRedirects = function() {
  this.redirects.forEach(function(r) {
    this.app.all(r.from, function(req, res) {
      res.redirect(301, r.to);
    });
  }.bind(this));
};

Router.prototype.setupRoutes = function() {
  this.routes.forEach(function(route) {
    this.app.all(route.uri, function(req, res) {
      this.routeToController(route, req, res);
    }.bind(this));
  }.bind(this));
};

Router.prototype.getControllers = function() {

   var deferred = q.defer();

  fs.readdir(path.join(__dirname, '..', 'controllers'), function(err, controllers) {
    if (err) {
      deferred.reject(err);
    } else {
      deferred.resolve(controllers.map(function(controller) {
        return controller.toLowerCase();
      }));
    }
  });

  return deferred.promise;
};

Router.prototype.getAction = function(route, req) {

  // Get action from route
  var action = route.action;

  // Get action from request params (eg: /controller/action)
  if (!action) {
    action = req.params.action;
  }

  // Get action from route defaults
  if (!action) {
    if (!route.defaults || !route.defaults.action) {
      throw new Error('No default action specified for this route');
    }
    action = route.defaults.action;
  }
  return action;
};

Router.prototype.getController = function(route, req) {

  // Add directory to route
  if (route.controller && route.directory) {
    route.controller = route.directory + '/' + route.controller;
  }

  // Get controller from route
  var controller = route.controller;

  // Get controller from request params (eg: /controller/action)
  if (!controller) {
    controller = req.params.controller;
  }

  // Get controller from route defaults
  if (!controller) {
    if (!route.defaults || !route.defaults.controller) {
      throw new Error('No default controller specified for this route');
    }
    controller = route.defaults.controller;
  }
  return _.str.capitalize(controller);
};

Router.prototype.routeToController = function(route, req, res) {

  var controller = this.getController(route, req);
  var action = this.getAction(route, req);

  // Check if controller exists
  if (this.controllers.indexOf(controller.toLowerCase() + '.js') === -1) {
    console.error('Controller not found: ' + controller);
    return res.send(404);
  }

  // Create the controller instance
  var Controller = require(path.join(__dirname, '..', 'controllers', controller));
  new Controller(this.app, req, res, action);
};

module.exports = exports = Router;
