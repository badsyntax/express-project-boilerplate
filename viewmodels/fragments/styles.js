var ViewModel = require('../../lib/viewmodel');
var assets = require('../../config/assets.json');

function StylesViewModel() {
  ViewModel.apply(this, arguments);
  this.setData({
    styles: assets.development.css
  });
}

require('util').inherits(StylesViewModel, ViewModel);

module.exports = exports = StylesViewModel;
