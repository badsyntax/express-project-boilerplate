var ViewModel = require('../../lib/viewmodel');
var assets = require('../../config/assets.json');

function StylesViewModel() {
  ViewModel.apply(this, arguments);
  this.setData({
    styles: this.getStyles()
  });
}

require('util').inherits(StylesViewModel, ViewModel);

StylesViewModel.prototype.getStyles = function() {
  return assets.development.css.map(function(style) {
    return style.replace(/public\/(build\/)?/, '');
  })
};


module.exports = exports = StylesViewModel;
