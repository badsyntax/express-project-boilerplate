var ControllerLayout = require('../../lib/Controller/ControllerLayout');
var ViewModel = require('../../lib/ViewModel');

function ControllerTests() {
  this.layoutView = 'tests';
  ControllerLayout.apply(this, arguments);
}

require('util').inherits(ControllerTests, ControllerLayout);

ControllerTests.prototype.before = function() {
  ControllerLayout.prototype.before.apply(this, arguments);

  this.layout.setGlobalData({
    title: 'Tests'
  });
};

ControllerTests.prototype.actionIndex = function() {
  this.layout.setData({
    body: ViewModel.factory(this, 'pages/tests').render()
  });
};

module.exports = exports = ControllerTests;
