define('app', [
  'module',
  'util/config',
  'router',
  'globalize'
], function (module, Config, Router, Globalize) {

  'use strict';

  /* Set global app config */
  Config.set(module.config());

  /* Set globalization culture */
  Globalize.culture(Config.get('culture') || 'en-GB');

  /* Route to controller */
  Router.init(Config.get('controller'));
});