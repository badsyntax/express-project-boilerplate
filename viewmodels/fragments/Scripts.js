var ViewModel = require('../../lib/ViewModel');
var assets = require('../../config/assets.json');

function ScriptsViewModel() {
  ViewModel.apply(this, arguments);
  this.setData({
    scripts: this.getScripts()
  });
}

require('util').inherits(ScriptsViewModel, ViewModel);

ScriptsViewModel.prototype.getScripts = function() {
  return assets.development.scripts.map(function(script) {
    return script.replace(/public\/(build\/)?/, '');
  })
};

module.exports = exports = ScriptsViewModel;
