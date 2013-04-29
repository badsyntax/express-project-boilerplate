var ViewModel = require('../../lib/viewmodel');

function HomeViewModel() {
  ViewModel.apply(this, arguments);
}
require('util').inherits(HomeViewModel, ViewModel);

module.exports = exports = HomeViewModel;