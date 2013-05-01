var ViewModel = require('../../lib/ViewModel');
var q = require('q');

function HomeViewModel() {
  ViewModel.apply(this, arguments);
}

require('util').inherits(HomeViewModel, ViewModel);

module.exports = exports = HomeViewModel;
