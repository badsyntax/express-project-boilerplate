define('app', [
  'lodash',
  'util/config'
], function (_, Config) {

  "use strict";

  var app = {
    root: "/"
  };

  app.init = function(config) {
    Config.set(config);
  };

  // return _.extend(app, Backbone.Events);
});