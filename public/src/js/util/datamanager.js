/**
 * A data manager that manages data stored in nested objects
 */
define([
  'lodash'
], function(_) {

  'use strict';

  function isObject(variable) {
    return typeof variable === 'object';
  }

  var DataManager = {

    /* Get the data for a given key.
     * - A key may contain nested keys, for example 'namespace.object.something'.
     * - This method will traverse the data object to find the the data at the outer-most key.
     * Example data: { namespace: { object: { something: true }}}
     * Example key: 'namespace.object.something' will return: true
     */
    get: function(data, key) {
      if (key === undefined) {
        return data;
      }
      var parts = key.split('.');
      var obj = data;
      for (var i = 0, l = parts.length; i < l; i++) {
        if (obj === undefined) {
          return undefined;
        }
        obj = obj[parts[i]];
      }
      return obj;
    },

    /* Set the data for a given key.
     * - A key may contain nested keys, for example 'namespace.object.something'.
     * - val may be a nested object, or any other value.
     * - Nested objects are merged.
     */
    set: function(data, key, val) {

      if (isObject(key) && val === undefined) {
        return _.merge(data, key);
      }

      var obj = data;
      var parts = key.split('.');
      key = parts.pop();

      for (var i = 0, l = parts.length; i < l; i++) {
        if (obj[parts[i]] === undefined) {
          obj[parts[i]] = {};
        }
        obj = obj[parts[i]];
      }

      if (isObject(obj[key]) && isObject(val)) {
        _.merge(obj[key], val);
      } else {
        obj[key] = val;
      }
    },

    /* Remove the data for a given key
     * - A key may NOT contain nested keys
     * - If a key is undefined, all data is removed
     */
    remove: function(data, key) {
      if (key !== undefined) {
        return delete data[key];
      }
      for (var prop in data) {
        if (data.hasOwnProperty(prop)) {
          delete data[prop];
        }
      }
    }
  };

  return DataManager;
});