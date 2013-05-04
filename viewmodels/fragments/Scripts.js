var ViewModel = require('../../lib/ViewModel');
var View = require('../../lib/View');

var assets = require('../../config/assets.json');

function ScriptsViewModel() {

  ViewModel.apply(this, arguments);

  this.pathRegex = /public\/(build\/)?/;
  this.env = this.app.get('env');

  this.setData({
    env: this.env,
    development: (this.env === 'development'),
    scripts: this.getScripts(),
    require: this.getRequire()
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

ScriptsViewModel.prototype.getRequire = function() {
  return {
    baseUrl: 'src/js',
    paths: JSON.stringify(assets[this.env].scripts.paths),
    shim: JSON.stringify({
      globalize: {
        deps: ['jquery'],
        exports: 'Globalize'
      }
    })
  };
};

module.exports = ScriptsViewModel;
