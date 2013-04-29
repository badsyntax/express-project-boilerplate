var q = require('q');
var hbs = require('hbs');
var fs = require('fs');
var path = require('path');

function View(path, data) {
  this.path = path;
  this.data = {};
  this.setData(data);
}

View.globalData = {};

View.prototype.setData = function(data) {
  for (var prop in data) {
    this.data[prop] = data[prop];
  }
};

View.prototype.setGlobalData = function(data) {
  for(var key in data) {
    View.globalData[key] = data[key];
  }
};

View.prototype.getData = function(key) {
  return key ? this.data[key] : this.data;
};

View.prototype.renderHtml = function(html, callback) {

  var template = hbs.compile(html);

  // Clone the global data object
  var globalData = View.globalData;
  var data = {};
  for(var key in globalData) {
    data[key] = globalData[key];
  }

  // Merge in the global data with the view data
  var viewData = this.getData();
  for(var key in viewData) {
    data[key] = viewData[key];
  }

  return template(data);
};

View.prototype.render = function() {

  var viewpath = path.join('views', this.path + '.hbs');
  var html = fs.readFileSync(viewpath, 'utf8');

  return this.renderHtml(html);
};

View.prototype.getPromises = function() {

  var data = this.getData();
  var promises = [];

  Object.keys(data).forEach(function(prop) {
    if (typeof data[prop] === 'object' && q.isPromise(data[prop])) {
      promises.push({
        key: prop,
        promise: data[prop]
      });
    }
  });

  return promises;
};

View.prototype.resolvePromises = function() {

  var deferred = q.defer();
  var props = {};

  // Find view data that contains promises
  var promises = this.getPromises();

  // Wait for promises to resolve
  if (promises.length) {

    var executed = 0;

    promises.forEach(function(obj) {
      obj.promise.done(function(data) {
        executed++;
        props[obj.key] = data;
        if (executed === promises.length) {
          this.setData(props);
          deferred.resolve();
        }
      }.bind(this));
    }.bind(this));

  } else {
    deferred.resolve();
  }

  return deferred.promise;
};

module.exports = exports = View;