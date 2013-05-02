var ControllerLayout = require('../lib/Controller/ControllerLayout');
var ViewModel = require('../lib/ViewModel');
var q = require('q');
var PersonModel = require('../models/Person');

function ControllerHome() {
  ControllerLayout.apply(this, arguments);
  this.layout.setGlobalData({
    title: 'Home'
  });
}

require('util').inherits(ControllerHome, ControllerLayout);

ControllerHome.prototype.actionIndex = function() {
  this.layout.setData({
    body: ViewModel.factory(this, 'pages/home').render()
  });
};

module.exports = ControllerHome;
