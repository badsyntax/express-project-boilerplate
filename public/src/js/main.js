requirejs.config({
  baseUrl: '/src/js',
  paths: {
    jquery: '/src/components/jquery/jquery',
    knockout: '/src/components/knockout/build/output/knockout-latest',
    director: '/src/components/director/build/director'
  }
});

requirejs([
  'app'
],
function(App) {
  App.init(window.__config);
});