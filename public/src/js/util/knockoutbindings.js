define([
  'knockout'
], function(ko) {

  ko.bindingHandlers.stopBinding = {
    init: function() {
          return { controlsDescendantBindings: true };
      }
  };

  ko.virtualElements.allowedBindings.stopBinding = true;

  return null;
});