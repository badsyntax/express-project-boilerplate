var ViewModel = require('../../lib/viewmodel');
var q = require('q');

function HomeViewModel() {
  ViewModel.apply(this, arguments);
  this.setData({
    people: this.getPeople()
  });
}
require('util').inherits(HomeViewModel, ViewModel);

HomeViewModel.prototype.getPeople = function() {

    var deferred = q.defer();

    setTimeout(function() {
        deferred.resolve([
            {
                name: 'Richard',
                surname: 'Willis'
            }
        ]);
    }, 400);

    return deferred.promise;
};

module.exports = exports = HomeViewModel;