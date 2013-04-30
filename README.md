# express-project-boilerplate

A starter application that uses the following technologies:

* nodejs
* express
* requirejs
* grunt
* bower
* jasmine
* sass
* jquery
* uglifyjs
* handlebars
* knockout

## Installation:

1. Ensure you have all the following software installed on your system:
    * nodejs
    * npm
    * bower (`npm install -g bower`)
    * Sass
    * compass
2. Clone the project from github: `git clone git://github.com/badsyntax/express-project-boilerplate.git`
3. Run `install.sh` or `install.bat`

## Developing

* Run the `grunt watch` task while developing, this will compile your sass when you make changes.
* Run `node app` to start up the applicaiton.
* The application will run in 'developement' mode when running from localhost, and 'production' mode when not running on localhost.

## Grunt tasks

Run `grunt` to run all grunt tasks.

* grunt watch (for watching and compiling your sass files)
* grunt test
* grunt compass
* grunt uglify
* grunt jshint
* grunt jasmine

## MVC

THe express backend uses custom Model, View, ViewModel and Controller classes. A router handler is used to
route requests to controllers. Controllers create the viewmodels, and handle user input.

## Sublime Text config:

    {
      "font_size": 11,
      "tab_size": 2,
      "translate_tabs_to_spaces": true,
      "trim_automatic_white_space": true,
      "trim_trailing_white_space_on_save": true,
      "word_wrap": false
    }

## Sublime text packages:

* jsFormat (to format your javascript)
* Sass (for syntax highlighting)
* SassBeautify (to format your Sass)
