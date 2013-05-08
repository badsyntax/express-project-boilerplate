define('app', [
  'knockout',
  'util/knockoutbindings',
  'module',
  'util/config',
  'globalize',
  'router'
], function (ko, bindings, module, Config, Globalize, Router) {


  'use strict';

  /* Set app config */
  Config.set(module.config());

  /* Set globalization culture */
  Globalize.culture(Config.get('culture') || 'en-GB');

  /* Route to controller */
  Router.init();
});