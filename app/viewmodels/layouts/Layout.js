var ViewModel = require('../../lib/ViewModel');

function LayoutViewModel() {

  ViewModel.apply(this, arguments);

  this.setData({
    scripts: this.getScripts(),
    styles: this.getStyles(),
    nav: this.getNav(),
    config: this.getConfig()
  });
}

require('util').inherits(LayoutViewModel, ViewModel);

LayoutViewModel.prototype.getScripts = function() {
  return ViewModel.factory(this.controller, 'fragments/scripts').render();
};

LayoutViewModel.prototype.getStyles = function() {
  return ViewModel.factory(this.controller, 'fragments/styles').render();
};

LayoutViewModel.prototype.getNav = function() {
  return ViewModel.factory(this.controller, 'fragments/nav').render();
};

LayoutViewModel.prototype.getConfig = function() {

};

module.exports = LayoutViewModel;
