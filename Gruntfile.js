module.exports = function(grunt) {

  // Tasks configuration
  grunt.initConfig(require('./grunt/config')(grunt));

  // Load the npm tasks
  require('matchdep').filterDev('grunt-!(template-jasmine-requirejs)').forEach(grunt.loadNpmTasks);

  // Load our custom tasks
  grunt.loadTasks('./grunt/tasks');
};