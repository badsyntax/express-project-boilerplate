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
  this.setPropertyData();
  return this.resolveDependencies();
};

ViewModel.prototype.resolveDependencies = function() {
  return this.view.resolvePromises();
};

ViewModel.prototype.setPropertyData = function() {
  var data = {};
  // We need to enumerate through all properties in the prototype
  // chain so that we can get properies from inherited (child) objects
  for ( var prop in this ) {
    //  Filter out the properties that belong to ViewModel.prototype (super)
    if (typeof ViewModel.prototype[prop] !== 'undefined') {
      continue;
    }
    data[prop] = typeof this[prop] === 'function' ?
      this[prop]() : this[prop];
  }
  this.setData(data);
};

ViewModel.prototype.render = function() {
  return this.compile().then(function() {
    return this.view.render();
  }.bind(this));
};

module.exports = exports = ViewModel;