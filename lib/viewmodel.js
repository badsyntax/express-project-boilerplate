var q = require('q');
var path = require('path');
var View = require('./view');

function ViewModel(path, data) {
  Object.defineProperty(this, 'view', {
    enumerable: false,
    value: new View(path, data)
  });
}

ViewModel.factory = function(viewPath, data) {
  var VM = require(path.join(__dirname, '../viewmodels', viewPath));
  return new VM(viewPath, data);
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

  // Add properties and methods as view data
  var props = {};
  Object.keys(this).forEach(function(prop) {
    if (typeof this[prop] === 'function') {
      props[prop] = data[prop]();
    } else {
      props[prop] = this[prop];
    }
  });
  this.setData(props);

  return this.view.resolvePromises();
};

ViewModel.prototype.render = function() {
  return this.compile().then(function() {
    return this.view.render();
  }.bind(this));
};

module.exports = exports = ViewModel;