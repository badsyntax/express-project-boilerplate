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
    compass: {
      dist: {
        options: {
          sassDir: 'public/src/scss',
          cssDir: 'public/build/css',
          environment: 'development'
        }
      },
      dev: {
        options: {
          sassDir: 'public/src/scss',
          cssDir: 'public/src/css'
        }
      }
    }
  });

  // Load the task plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');

  // Default task(s).
  grunt.registerTask('default', ['compass','uglify']);
};