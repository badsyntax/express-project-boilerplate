var ViewModel = require('../../lib/ViewModel');
var View = require('../../lib/View');

var assets = require('../../config/assets.json');

function ScriptsViewModel() {

  ViewModel.apply(this, arguments);

  this.regex = /public\/(build\/)?/;
  this.env = this.app.get('env');

  this.setData({
    env: this.env,
    development: (this.env === 'development'),
    scripts: this.getScripts()
  });
}

require('util').inherits(ScriptsViewModel, ViewModel);

ScriptsViewModel.prototype.getScripts = function() {
  return assets[this.env].scripts.map(function(script) {
    script.src = script.src.replace(this.regex, '');
    script.main = script.main.replace(this.regex, '');
    return script;
  }.bind(this));
};

module.exports = ScriptsViewModel;
