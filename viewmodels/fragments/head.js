var ViewModel = require('../../lib/viewmodel');

function HeadViewModel() {
  ViewModel.apply(this, arguments);
}

require('util').inherits(HeadViewModel, ViewModel);

module.exports = exports = HeadViewModel;
