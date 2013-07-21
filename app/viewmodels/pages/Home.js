var PageViewModel = require('./Page');

function HomeViewModel() {
  PageViewModel.apply(this, arguments);

  this.setData({
    errors: [],
    person: {
      name: 'test'
    }
  });
}

require('util').inherits(HomeViewModel, PageViewModel);

module.exports = HomeViewModel;
