var _ = require('lodash');

module.exports = function(grunt) {

  // Load config
  var bower = grunt.file.readJSON('bower.json');
  var pkg = grunt.file.readJSON('package.json');
  var assets = grunt.file.readJSON('app/config/assets.json');

  // Project configuration
  grunt.initConfig({
    pkg: pkg,
    compass: {
      dev: {
        options: {
          sassDir: 'public/src/scss',
          cssDir: 'public/src/css'
        }
      }
    },
    jshint: {
      files: [
        'lib/**/*.js',
        'controllers/**/*.js',
        'viewmodels/**/*.js',
        'routes/**/*.js',
        'models/**/*.js',
        'tests/specs/**/*.js',
        'public/tests/specs/**/*.js',
        'Gruntfile.js',
        'public/src/js/**/*.js'
      ],
      options: {
        globals: {
          console: true,
          module: true,
          document: true
        }
      }
    },
    jasmine_node: {
      matchall: true,
      projectRoot: 'tests/specs',
      requirejs: true,
      forceExit: true
    },
    jasmine: {
      src: '../' + assets.development.scripts,
      options: {
        specs: [
          'public/tests/specs/**/*.js'
        ],
        template: require('grunt-template-jasmine-requirejs'),
        templateOptions: {
          requireConfig: {
            baseUrl: 'public/src/js'
          }
        }
      }
    },
    watch: {
      scss: {
        files: ['public/src/scss/**/*.scss'],
        tasks: ['compass']
      }
    },
    'sass-convert': {
      files: {
        src: ['public/src/scss/**/*.scss']
      },
      options: {
        indent: 2
      }
    },
    requirejs: {
      compile: {
        options: _.merge(assets.development.requirejs, {
          baseUrl: 'public/src/js',
          name: 'bootstrap',
          optimize: 'uglify2',
          out: 'public/build/js/build.js',
          useStrict: false,
          findNestedDependencies: true
        })
      }
    },
    cssmin: {
      minify: {
        options: {
          keepSpecialComments: 0,
          banner: [
            '/*! <%= pkg.name %> - v<%= pkg.version %> - ',
            '<%= grunt.template.today("yyyy-mm-dd") %> */'
          ].join('')
        },
        files: (function() {
          var files = {};
          files[assets.production.css] = assets.development.css;
          return files;
        }())
      }
    },
    jsbeautifier: {
      files: [
        '*.js',
        '*.json',
        'public/src/js/**/*.js',
        'public/tests/**/*.js',
        'config/**/*.json',
        'controllers/**/*.js',
        'lib/**/*.js',
        'routes/**/*.js',
        'viewmodels/**/*.js'
      ],
      options: {
        indent_size: 2,
        indent_char: " ",
        indent_level: 0,
        indent_with_tabs: false,
        preserve_newlines: true,
        max_preserve_newlines: 2,
        jslint_happy: false,
        brace_style: 'collapse',
        keep_array_indentation: true,
        keep_function_indentation: false,
        space_before_conditional: true,
        eval_code: false,
        indent_case: false,
        wrap_line_length: 80,
        unescape_strings: false
      }
    }
  });

  // Load the task plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-template-jasmine-requirejs');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-jsbeautifier');
  grunt.loadNpmTasks('grunt-sass-convert');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-jasmine-node');

  // Custom tasks
  grunt.registerTask('lint', ['jshint']);
  grunt.registerTask('test', ['lint', 'jasmine', 'jasmine_node']);
  grunt.registerTask('format', ['lint', 'jsbeautifier', 'sass-convert']);
  grunt.registerTask('compile', ['compass', 'requirejs', 'cssmin']);

  // Default tasks
  grunt.registerTask('default', [
    'test',
    'compile'
  ]);
};
