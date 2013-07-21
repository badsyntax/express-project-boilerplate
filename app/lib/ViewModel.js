var q = require('q');
var path = require('path');
var View = require('./View');
var _ = require('lodash');
_.str = require('underscore.string');

function ViewModel(controller, path, data) {
  this.controller = controller;
  this.app = controller.app;
  this.view = new View(path, data);
}

ViewModel.factory = function(controller, viewPath, data) {

  // As ViewModels class names are Capitalized, and view files
  // are lowercase, we need to capitalize the view filename.
  var segments = viewPath.split('/');
  segments.push(_.str.capitalize(segments.pop()));

  // Load the ViewModel
  var _ViewModel = require(
    path.join(__dirname, '..', 'viewmodels', segments.join('/'))
  );

  // Return a new instance of the ViewModel
  return new _ViewModel(controller, viewPath, data);
};

ViewModel.prototype.getPath = function() {
  return this.view.path;
};

ViewModel.prototype.setData = function() {
  this.view.setData.apply(this.view, arguments);
};

ViewModel.prototype.setGlobalData = function() {
  this.view.setGlobalData.apply(this.view, arguments);
};

ViewModel.prototype.getData = function() {
  return this.view.getData.apply(this.view, arguments);
};

ViewModel.prototype.compile = function() {
  return this.view.compile();
};

ViewModel.prototype.render = function() {
  return this.view.render();
};

module.exports = ViewModel;