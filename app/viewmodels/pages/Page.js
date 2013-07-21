var ViewModel = require('../../lib/ViewModel');

function PageViewModel() {

  ViewModel.apply(this, arguments);

  this.setGlobalData({
    appConfig: {
      culture: 'en-GB'
    }
  });
}

require('util').inherits(PageViewModel, ViewModel);

module.exports = PageViewModel;
