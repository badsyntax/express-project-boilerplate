module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: require('./grunt/config/compass')(grunt),
    jshint: require('./grunt/config/jshint')(grunt),
    jasmine_node: require('./grunt/config/jasmine_node')(grunt),
    jasmine: require('./grunt/config/jasmine')(grunt),
    watch: require('./grunt/config/watch')(grunt),
    requirejs: require('./grunt/config/requirejs')(grunt)
  });

  // Load the task plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-jasmine-node');

  // Custom tasks
  grunt.registerTask('lint',
    ['jshint']
  );

  grunt.registerTask('test',
    ['lint', 'jasmine', 'jasmine_node']
  );

  grunt.registerTask('compile',
    ['compass'/*, 'requirejs'*/]
  );

  grunt.registerTask('build',
    ['test', 'compile']
  );

  grunt.registerTask('default',
   ['build']
  );
};
