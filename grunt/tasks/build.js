module.exports = function(grunt) {
  grunt.registerTask('build', [
    'test',
    'compile'
  ]);
};