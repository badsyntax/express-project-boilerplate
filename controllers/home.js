var Controller = require('../lib/controller');
var ViewModel = require('../lib/viewmodel');

function HomeController() {
    Controller.apply(this, arguments);
}
require('util').inherits(HomeController, Controller);

HomeController.prototype.actionIndex = function() {
  this.layout.setData({
    title: 'Home',
    body: ViewModel.factory('pages/home').render()
  });
};

module.exports = HomeController;