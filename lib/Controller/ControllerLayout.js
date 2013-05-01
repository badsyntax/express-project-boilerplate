var ViewModel = require('../ViewModel');
var Controller = require('../Controller');
var _ = require('underscore');
_.str = require('underscore.string');

function ControllerLayout(app, req, res, action) {
  this.layoutView = this.layoutView || 'layout';
  Controller.apply(this, arguments);
}

require('util').inherits(ControllerLayout, Controller);

ControllerLayout.prototype.before = function() {

  Controller.prototype.before.apply(this, arguments);

  this.layout = ViewModel.factory(this, this.layoutView);
  this.layout.setGlobalData({
    app: this.app,
    req: this.req
  });
};

ControllerLayout.prototype.after = function() {

  Controller.prototype.after.apply(this, arguments);

  this.layout.compile().then(function() {
    this.res.render(this.layout.getPath(), this.layout.getData());
  }.bind(this));
};

module.exports = ControllerLayout;
