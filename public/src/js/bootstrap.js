define('bootstrap', [
  'module',
  'app',
  'router'
], function (module, app, router) {

  'use strict';

  /* Set global app config */
  app.config.set(module.config());

  /* Set globalization culture */
  app.globalize.culture(app.config.get('culture') || 'en-GB');

  /* Route to controller */
  router.init(app.config.get('controller'));
});