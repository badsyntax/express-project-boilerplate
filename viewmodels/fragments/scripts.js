var ViewModel = require('../../lib/viewmodel');

function ScriptsViewModel() {
  ViewModel.apply(this, arguments);
}
require('util').inherits(ScriptsViewModel, ViewModel);

module.exports = exports = ScriptsViewModel;