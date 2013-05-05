var PageViewModel = require('./Page');

function HomeViewModel() {
  PageViewModel.apply(this, arguments);
}

require('util').inherits(HomeViewModel, PageViewModel);

module.exports = exports = HomeViewModel;
