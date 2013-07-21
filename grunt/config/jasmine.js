module.exports = function(grunt) {

  var assets = grunt.file.readJSON('app/config/assets.json');

  return {
      src: '../' + assets.development.scripts,
      options: {
        specs: [
          'public/tests/specs/**/*.js'
        ],
        template: require('grunt-template-jasmine-requirejs'),
        templateOptions: {
          requireConfig: {
            baseUrl: 'public/src/js'
          }
        }
      }
    };
};