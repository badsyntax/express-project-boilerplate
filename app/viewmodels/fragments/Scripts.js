var _ = require('lodash');
var ViewModel = require('../../../lib/ViewModel');
var assets = require('../../config/assets.json');

function ScriptsViewModel() {

  ViewModel.apply(this, arguments);

  this.setData({
    env: this.app.get('env'),
    development: (this.app.get('env') === 'development'),
    scripts: this.getScripts(),
    requireConfig: this.getRequireConfig()
  });
}

require('util').inherits(ScriptsViewModel, ViewModel);

ScriptsViewModel.prototype.getScripts = function() {
  return assets[this.env].scripts.map(function(script) {
    return script.replace(/public\/(build\/)?/, '');
  }.bind(this));
};

ScriptsViewModel.prototype.getRequireConfig = function() {
  return JSON.stringify(_.merge(
    assets['development'].requirejs, {
      config: {
        bootstrap: {
          culture: 'en-GB'
        }
      }
    }), null, 2);
};

module.exports = ScriptsViewModel;
