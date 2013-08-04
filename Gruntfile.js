module.exports = function(grunt) {

  // Tasks configuration
  grunt.initConfig(require('./grunt/config')(grunt));

  // Load the npm tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-jasmine-node');

  // Load our custom tasks
  grunt.loadTasks('./grunt/tasks');
};
