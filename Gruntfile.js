module.exports = function(grunt) {

  // Load config
  var bower = grunt.file.readJSON('bower.json');
  var pkg = grunt.file.readJSON('package.json');
  var assets = grunt.file.readJSON('config/assets.json');

  // Project configuration.
  grunt.initConfig({
    pkg: pkg,
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: assets.development.scripts,
        dest: assets.production.script
      }
    },
    compass: {
      dist: {
        options: {
          sassDir: 'public/src/scss',
          cssDir: 'public/build/css',
          environment: 'production'
        }
      },
      dev: {
        options: {
          sassDir: 'public/src/scss',
          cssDir: 'public/src/css'
        }
      }
    },
    concat: {
      options: {
        stripBanners: true,
        banner: [
          '/*! <%= pkg.name %> - v<%= pkg.version %> - ',
          '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
        ].join('')
      },
      dist: {
        src: ['public/build/css/styles.css'],
        dest: 'public/build/css/styles.css'
      }
    },
    jshint: {
      files: [
        'Gruntfile.js',
        'public/src/js/main.js',
        'public/src/js/modules/**/*.js'
      ],
      options: {
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    jasmine: {
      src: assets.development.scripts,
      options: {
        specs: 'spec/**/*.js'
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
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jsbeautifier');
  grunt.loadNpmTasks('grunt-sass-convert');

  // Custom tasks
  grunt.registerTask('test', ['jshint', 'jasmine']);
  grunt.registerTask('format', ['jsbeautifier', 'sass-convert']);

  // Default tasks
  grunt.registerTask('default', [
    'jshint',
    'jasmine',
    'compass',
    'uglify',
    'concat'
  ]);
};
