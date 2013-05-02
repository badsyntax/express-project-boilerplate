define([
  'director'
], function(director) {

  function init() {

      var routes = {
        '/author': function () {
          console.log("author");
        },
      };

      var router = Router(routes);
      router.init();
  }

  return {
    init: init
  }
});