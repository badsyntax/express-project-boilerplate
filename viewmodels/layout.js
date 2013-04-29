var ViewModel = require('../lib/viewmodel');

function LayoutViewModel() {
  ViewModel.apply(this, arguments);
}
require('util').inherits(LayoutViewModel, ViewModel);

LayoutViewModel.prototype.head = function() {
  return ViewModel.factory('fragments/head').render();
};

LayoutViewModel.prototype.scripts = function() {
  return ViewModel.factory('fragments/scripts').render();
};

module.exports = exports = LayoutViewModel;