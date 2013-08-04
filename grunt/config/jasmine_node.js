module.exports = function(grunt) {
  return {
    forceExit: false,
    match: '.',
    matchall: false,
    extensions: 'js',
    specNameMatcher: 'spec',
    projectRoot:'./app/tests/specs',
    verbose: false
  };
};