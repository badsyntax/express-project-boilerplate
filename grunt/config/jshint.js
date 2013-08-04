module.exports = function(grunt) {
  return {
    files: [
      'lib/**/*.js',
      'app/controllers/**/*.js',
      'app/viewmodels/**/*.js',
      'app/routes/**/*.js',
      'app/models/**/*.js',
      'app/tests/specs/**/*.js',
      'app/public/tests/specs/**/*.js',
      'Gruntfile.js',
      'grunt/**/*.js',
      'app/public/src/js/**/*.js'
   ],
    options: {
      globals: {
        console: true,
        module: true,
        document: true
      }
    }
  };
};