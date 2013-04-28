module.exports = function(grunt) {

  // Load config
  var bower = grunt.file.readJSON('bower.json');
  var pkg = grunt.file.readJSON('package.json');
  var assets = grunt.file.readJSON('config/assets.json');

  // Project configuration.
  grunt.initConfig({
    pkg: pkg,
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: assets.development.scripts,
        dest: assets.production.script
      }
    },
    foo: {}
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
};