define([
  'util/config',
  'router',
  'globalize',
  'jquery'
], function (Config, Router, Globalize, $) {

  function init(config) {

    /* Set global app config */
    Config.set(config);

    /* Set globalization culture */
    Globalize.culture(config.culture || 'en-GB');

    /* Route to controller */
    Router.init();
  }

  return {
    init: init
  }
});