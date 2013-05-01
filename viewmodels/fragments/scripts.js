var ViewModel = require('../../lib/viewmodel');
var assets = require('../../config/assets.json');

function ScriptsViewModel() {
  ViewModel.apply(this, arguments);
  this.setData({
    scripts: assets.development.scripts
  });
}

require('util').inherits(ScriptsViewModel, ViewModel);

module.exports = exports = ScriptsViewModel;
