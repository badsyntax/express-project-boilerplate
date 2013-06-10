requirejs.config({
  baseUrl: '/src/js',
  deps: ['main'],
  paths: {
    jquery: '../components/jquery/jquery',
    globalize: '../components/globalize/lib/globalize',
    lodash: '../components/lodash/lodash',
    backbone: '../components/backbone/backbone'
  },
  shim: {
    globalize: {
      deps: ['jquery'],
      exports: 'Globalize'
    },
    backbone: {
       deps: [ "lodash", "jquery" ],
       exports: "Backbone"
    },
  }
});