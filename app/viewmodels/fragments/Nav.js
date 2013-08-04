var _ = require('lodash');
var ViewModel = require('../../lib/ViewModel');

function NavViewMdoel() {
  ViewModel.apply(this, arguments);
}

require('util').inherits(NavViewMdoel, ViewModel);

module.exports = NavViewMdoel;
