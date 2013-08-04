var q = require('q');
var hbs = require('hbs');
var fs = require('fs');
var path = require('path');
var _ = require('lodash');

function View(path, data) {
  this.path = path;
  this.data = {};
  this.helpers = {
    json: function(context, options) {
      return JSON.stringify(context);
    }
  };
  this.setData(data);
  this.registerHelpers();
}

View.globalData = {};

View.prototype.registerHelpers = function() {
  Object.keys(this.helpers).forEach(function(key) {
    hbs.registerHelper(key, this.helpers[key]);
  }.bind(this));
};

View.prototype.setData = function(data) {
  _.merge(this.data, data || {});
};

View.prototype.setGlobalData = function(data) {
  _.merge(View.globalData, data || {});
};

View.prototype.getData = function(key) {
  if (key) {
    return this.data[key] || View.globalData[key];
  }
  return this.data;
};

View.prototype.compileTemplate = function(template, callback) {

  // Merge the global and view data
  var data = _.merge({}, View.globalData, this.getData());

  return hbs.compile(template)(data);
};

View.prototype.render = function() {
  var template = fs.readFileSync(path.join('app', 'views', this.path + '.hbs'), 'utf8');
  return this.resolvePromises().then(function() {
    return this.compileTemplate(template);
  }.bind(this));
};

View.prototype.resolvePromises = function() {

  var data = {};
  var promises = this.getPromises();

  return q.allSettled(promises).spread(function() {

    Array.prototype.slice.call(arguments).forEach(function(output, i) {
      data[promises.keys[i]] = output;
    });

    this.setData(data);

  }.bind(this));
};

View.prototype.getPromises = function() {

  var data = this.getData();

  var promises = Object.keys(data).filter(function(prop) {
    return (typeof data[prop] === 'object' && q.isPromise(data[prop]));
  });

  return {
    keys: promises.map(function(prop) {
      return prop;
    }),
    objects: promises.map(function(prop) {
      return data[prop];
    })
  };
};

module.exports = View;
