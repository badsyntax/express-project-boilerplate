var ViewModel = require('../lib/ViewModel');

function LayoutViewModel() {

  ViewModel.apply(this, arguments);

  this.setData({
    scripts: this.getScripts(),
    styles: this.getStyles()
  })
}

require('util').inherits(LayoutViewModel, ViewModel);

LayoutViewModel.prototype.getScripts = function() {
  return ViewModel.factory('fragments/scripts').render();
};

LayoutViewModel.prototype.getStyles = function() {
  return ViewModel.factory('fragments/styles').render()
};

module.exports = exports = LayoutViewModel;
