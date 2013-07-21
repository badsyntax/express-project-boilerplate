requirejs.config({
  baseUrl: '/src/js',
  deps: ['main'],
  paths: {
    jquery: '../components/jquery/jquery',
    lodash: '../components/lodash/lodash'
  }
});