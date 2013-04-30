var ViewModel = require('../lib/viewmodel');

function LayoutViewModel() {

  ViewModel.apply(this, arguments);

  this.setData({
    head: ViewModel.factory('fragments/head').render(),
    scripts: ViewModel.factory('fragments/scripts').render()
  })
}

require('util').inherits(LayoutViewModel, ViewModel);

module.exports = exports = LayoutViewModel;
