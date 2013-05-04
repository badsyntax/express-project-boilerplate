var PageViewModel = require('./Page');

function HomeViewModel() {

  PageViewModel.apply(this, arguments);

  this.setGlobalData({
    appConfig: {
      controller: 'home'
    }
  });
}

require('util').inherits(HomeViewModel, PageViewModel);

module.exports = exports = HomeViewModel;
