module.exports = function(grunt) {

  var _ = require('lodash');
  var assets = grunt.file.readJSON('app/config/assets.json');

  return {
    compile: {
      options: _.merge(assets.development.requirejs, {
        baseUrl: 'app/public/src/js',
        name: 'bootstrap',
        optimize: 'uglify2',
        out: 'app/public/build/js/build.js',
        useStrict: false,
        findNestedDependencies: true
      })
    }
  };
};