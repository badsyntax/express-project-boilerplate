define(function() {

  'use strict';

  function BaseController(router) {
    this.router = router;
  }

  BaseController.prototype.setRoutes = function() {};
  BaseController.prototype.destroy = function() {};

  return BaseController;
});