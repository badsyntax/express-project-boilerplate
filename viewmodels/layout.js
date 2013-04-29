var ViewModel = require('../lib/viewmodel');

function LayoutViewModel() {
  ViewModel.apply(this, arguments);
}
require('util').inherits(LayoutViewModel, ViewModel);

LayoutViewModel.prototype.head = function(callback) {
  ViewModel.factory('fragments/head').render(callback);
};

LayoutViewModel.prototype.scripts = function(callback) {
  ViewModel.factory('fragments/scripts').render(callback);
};

module.exports = exports = LayoutViewModel;