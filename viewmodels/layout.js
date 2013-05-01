var ViewModel = require('../lib/viewmodel');

function LayoutViewModel() {

  ViewModel.apply(this, arguments);

  this.setData({
    scripts: ViewModel.factory('fragments/scripts').render(),
    styles: ViewModel.factory('fragments/styles').render()
  })
}

require('util').inherits(LayoutViewModel, ViewModel);

module.exports = exports = LayoutViewModel;
