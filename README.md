# express-project-boilerplate

A starter application that uses the following technologies:

* [nodejs](http://nodejs.org/)
* [express](http://expressjs.com/)
* [grunt](http://gruntjs.com/)
* [requirejs](http://requirejs.org/)
* [bower](http://bower.io/)
* [jasmine](http://pivotal.github.io/jasmine/)
* [Q](http://documentup.com/kriskowal/q)
* [uglifyjs](https://github.com/mishoo/UglifyJS)
* [handlebars](http://handlebarsjs.com/)
* [sass](http://sass-lang.com/)
* [compass](http://compass-style.org/)
* [jquery](http://jquery.com/)
* [knockoutjs](http://knockoutjs.com/)
* [director](https://github.com/flatiron/director)
* [bootstrap](http://twitter.github.io/bootstrap/)

## Installation:

1. Ensure you have all the following software installed on your system:
    * nodejs
    * npm
    * bower
    * nodemon
    * sass
    * compass
2. Clone the project from github: `git clone git://github.com/badsyntax/express-project-boilerplate.git`
3. Install node modules: `npm install`
4. Insall client-side components: `bower install`
5. Compile the default Sass: `grunt compass`
6. Compress and concat the default asset files: `grunt uglify && grunt concat` 
7. That's all, now run `node app.js` to boot up the basic application

## Running and developing the application

* Run the `grunt watch` task while developing, this will compile your sass when you make changes.
* Run `node app.js` to start the application
* Run `nodemon app.js` to start the application and reload the application when files change

### Application environment

The application will perform different tasks based on the application environment. You can access the environment value
by calling `app.get('env')` which will return either 'development' or 'production'.

By default, the application will run in development mode, but you can use the following command to test the application
in production mode: `NODE_ENV=production node app.js`

## Grunt tasks

Run `grunt` to run the default grunt tasks.

Here are the individual grunt tasks you can run:

* grunt watch (for watching and compiling your sass files)
* grunt test
* grunt compass
* grunt uglify
* grunt jshint
* grunt jasmine
* grunt format
* grunt jsbeautifier
* grunt sass-convert

## MVC

This system extends express to provide a more verbose and automated MVC system. A router handler is used to
route requests to controllers. Controllers create the ViewModels and handle user input. ViewModels retrieve data
models and provide that data to the views.

### Routing

Routes map urls to controllers. The default route will try to map all requests to the relevant controllers. 
Here's an example of this catch-all default route:

```javascript
{
  uri: '/:controller?/:action?/:id?',
  defaults: {
    controller: 'home',
    action: 'index'
  }
}
```
    
Here's an example of a custom route:

```javascript
{
  uri: '/post/:uri',
  controller: 'post'
}
````

### Controller usage

Controllers will handle the request and user input, as well as creating ViewModels. For requests that return markup,
use the 'ControllerLayout', which will create a 'layout' viewmodel, and all other ViewModels are added to this 
layout ViewModel.

Here's an example of a custom 'home' controller:

```javascript
var ControllerLayout = require('../lib/Controller/ControllerLayout');
var ViewModel = require('../lib/ViewModel');

function HomeController() {
  ControllerLayout.apply(this, arguments);
  this.layout.setGlobalData({
    title: 'Home'
  }); 
}

require('util').inherits(HomeController, ControllerLayout);

HomeController.prototype.actionIndex = function() {
  this.layout.setData({
    body: ViewModel.factory('pages/home').render()
  });
};
````

TODO: show example of how to use the ControllerREST

### ViewModel usage

Generally you want to use a ViewModel for every view. 

Here's an example of a basic ViewModel. You need to set the view data using the 'setData' method:

```javascript
function MyViewModel() {
  ViewModel.apply(this, arguments);
  this.setData({
    data: this.getData()
  });
}

require('util').inherits(MyViewModel, ViewModel);

MyViewModel.prototype.getData = function() {
  return 'data';
};
```

#### Async data retrieval

You can retrieve data in the ViewModels asyncronously via Q promises.

```javascript
function MyViewModel() {
  ViewModel.apply(this, arguments);
  this.setData({
    people: this.getPeople()
  });
}

require('util').inherits(MyViewModel, ViewModel);

MyViewModel.prototype.getPeople = function() {

  var deferred = q.defer();

  setTimeout(function() {
    deferred.resolve([{
      name: 'Richard',
      surname: 'Willis'
    }]);
  }, 400);

  return deferred.promise;
};
```

## Sublime Text config:

```javascript
{
  "font_size": 11,
  "tab_size": 2,
  "translate_tabs_to_spaces": true,
  "trim_automatic_white_space": true,
  "trim_trailing_white_space_on_save": true,
  "word_wrap": false
}
```
