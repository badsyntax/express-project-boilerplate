define(function() {

  'use strict';

  function mixin(obj1, obj2) {
    for(var prop in obj2) {
      if (obj2.hasOwnPropery(prop)) {
        obj1[prop] = obj2[prop];
      }
    }
  }

  function inherits(_sub, _super, _mixin) {
    _sub.prototype = Object.create(_super.prototype);
    _sub.prototype.constructor = _sub;
    if (_mixin instanceof Object) {
      mixin(_sub, _mixin);
    }
    return _sub;
  }

  return inherits;

});