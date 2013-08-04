module.exports = function(grunt) {
  return {
    scss: {
      files: ['public/src/scss/**/*.scss'],
      tasks: ['compass']
    }
  };
};