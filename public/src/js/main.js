requirejs.config({
  baseUrl: 'src/js',
  paths: {
    jquery: '../components/jquery/jquery',
    knockout: '../components/knockout/build/output/knockout-latest',
    director: '../components/director/build/director'
  }
});

requirejs([
  'app'
],
function(App) {
  App.init(window.__config);
});