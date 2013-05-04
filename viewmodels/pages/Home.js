var ViewModel = require('../../lib/ViewModel');
var q = require('q');

function HomeViewModel() {
  ViewModel.apply(this, arguments);

  this.setGlobalData({
    appConfig: {
      controller: 'home'
    }
  });
}

require('util').inherits(HomeViewModel, ViewModel);

module.exports = exports = HomeViewModel;
