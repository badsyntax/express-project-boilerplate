var ViewModel = require('../../lib/ViewModel');
var assets = require('../../config/assets.json');

function StylesViewModel() {
  ViewModel.apply(this, arguments);
  this.setData({
    styles: this.getStyles()
  });
}

require('util').inherits(StylesViewModel, ViewModel);

StylesViewModel.prototype.getStyles = function() {
  return assets[this.app.get('env')].css.map(function(style) {
    return style.replace(/public\/(build\/)?/, '');
  });
};

module.exports = StylesViewModel;
