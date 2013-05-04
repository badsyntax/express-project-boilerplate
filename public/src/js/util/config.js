define([
  './datamanager'
], function (datamanager) {

  var data = {};

  return {
    get: function (key) {
     return datamanager.get(data, key);
    },
    set: function (key, val) {
      return datamanager.set(data, key, val);
    },
    remove: function(key) {
      return datamanager.remove(data, key);
    }
  };
});