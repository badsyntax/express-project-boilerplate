var PageViewModel = require('./Page');

function TestsViewModel() {
  PageViewModel.apply(this, arguments);
}

require('util').inherits(TestsViewModel, PageViewModel);

module.exports = TestsViewModel;
