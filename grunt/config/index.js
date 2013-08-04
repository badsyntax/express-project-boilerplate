module.exports = function(grunt) {
  return {
    pkg: grunt.file.readJSON('package.json'),
    compass: require('./compass')(grunt),
    jshint: require('./jshint')(grunt),
    jasmine_node: require('./jasmine_node')(grunt),
    jasmine:  require('./jasmine')(grunt),
    watch: require('./watch')(grunt),
    requirejs: require('./requirejs')(grunt)
  };
};