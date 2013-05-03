define([
  // 'director'
], function(director) {

  function init() {

    var test = 'helli';

    console.log(test);

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