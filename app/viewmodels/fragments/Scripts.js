var _ = require('lodash');
var ViewModel = require('../../../lib/ViewModel');
var assets = require('../../config/assets.json');

function ScriptsViewModel() {

  ViewModel.apply(this, arguments);

  this.pathRegex = /public\/(build\/)?/;
  this.env = this.app.get('env');

  this.setData({
    env: this.env,
    development: (this.env === 'development'),
    scripts: this.getScripts(),
    requireConfig: this.getRequireConfig()
  });
}

require('util').inherits(ScriptsViewModel, ViewModel);

ScriptsViewModel.prototype.getScripts = function() {
  return assets[this.env].scripts.files.map(function(script) {
    script.src = script.src.replace(this.pathRegex, '');
    script.main = script.main.replace(this.pathRegex, '');
    return script;
  }.bind(this));
};

ScriptsViewModel.prototype.getRequireConfig = function() {
  return JSON.stringify(_.merge(
    assets['development'].requirejs,
    config: {
      bootstrap: {
        culture: 'en-GB'
      }
    })
  }, null, 2);
};

module.exports = ScriptsViewModel;
