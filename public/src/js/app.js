define('app', [
  'module',
  'util/config',
  'globalize',
  'router'
], function (module, Config, Globalize, Router) {

  'use strict';

  /* Set global app config */
  Config.set(module.config());

  /* Set globalization culture */
  Globalize.culture(Config.get('culture') || 'en-GB');

  /* Route to controller */
  Router.init();
});