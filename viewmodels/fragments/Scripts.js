var ViewModel = require('../../lib/ViewModel');
var View = require('../../lib/View');

var assets = require('../../config/assets.json');

function ScriptsViewModel() {
  ViewModel.apply(this, arguments);

  this.env = this.controller.app.get('env');
  this.setData({
    scripts: this.getScripts()
  });
}

require('util').inherits(ScriptsViewModel, ViewModel);

ScriptsViewModel.prototype.getScripts = function() {

  return assets[this.env].scripts.map(function(script) {
    return script.replace(/public\/(build\/)?/, '');
  })
};

module.exports = ScriptsViewModel;
