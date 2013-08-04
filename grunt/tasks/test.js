module.exports = function(grunt) {
  grunt.registerTask('test', [
    'lint',
    'jasmine',
    'jasmine_node'
  ]);
};