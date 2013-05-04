define([
  'util/config',
  'director'
], function(config, director) {

  function init() {

    var routes = {
      '/author': function () {
        var app = require('./app');
        console.log(app);
      },
    };

    var router = Router(routes);
    router.init();
  }

  return {
    init: init
  }
});