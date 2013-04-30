var ViewModel = require('./viewmodel');

function Controller(app, req, res, action) {
  this.app = app;
  this.req = req;
  this.res = res;
  this.action = action;
  this.layoutView = 'layout';
  this.execute();
}

Controller.prototype.execute = function() {

  if (this[this.action] === undefined) {
    console.error('Controller action not found:', this.action);
    return this.res.send(404);
  }

  this.before();
  this[this.action]();
  this.after();
};

Controller.prototype.before = function(){
  this.layout = ViewModel.factory(this.layoutView);
  this.layout.setGlobalData({
    app: this.app,
    req: this.req
  });
};

Controller.prototype.after = function(){
  this.layout.compile().then(function(){
    this.res.render(this.layout.getPath(), this.layout.getData());
  }.bind(this));
};

module.exports = Controller;