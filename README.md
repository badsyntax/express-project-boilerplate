# express-project-boilerplate [![Build Status](https://travis-ci.org/badsyntax/express-project-boilerplate.png)](https://travis-ci.org/badsyntax/express-project-boilerplate)

A starter project for building modern JavaScript web applications. 

This project is not intended for others to use, and thus I can offer no support. Feel free to have a 
look around and steal any code you like that isn't copyrighted. 

I built this project as as a starter application for future web projects; as a reference; and as a means to learn new and exciting web technologies.

This project uses the following technologies:  

* [nodejs](http://nodejs.org/)
* [npm](https://npmjs.org/)
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
    * [nodejs](http://nodejs.org/)
    * [npm](https://npmjs.org/)
    * [bower](http://bower.io/)
    * [nodemon](https://github.com/remy/nodemon)
    * [sass](http://sass-lang.com/)
    * [compass](http://compass-style.org/)
2. Clone the project from github: `git clone git://github.com/badsyntax/express-project-boilerplate.git`
3. Install node modules: `npm install`
4. Insall client-side components: `bower install`
5. Compile the default Sass: `grunt compass`
6. Compress and concat the default asset files: `grunt uglify && grunt concat` 
7. That's all, now run `node app.js` to boot up the basic application

## Running and developing the application

* Run the `grunt watch` task while developing, this will compile your sass when you make changes
* Run `node app.js` to start the application
* Run `nodemon app.js` to start the application and reload the application when files change

### Application environment

The application will perform different tasks based on the application environment. 

You can access the environment value by calling `app.get('env')` which will return either 
'development' or 'production'.

By default, the application will run in development mode, but you can use the following command to test the application
in production mode: `NODE_ENV=production node app.js`

## Grunt tasks

Run `grunt` to run the default grunt tasks.

Here are the individual grunt tasks you can run:

* `grunt watch`
* `grunt test`
* `grunt compass`
* `grunt uglify`
* `grunt jshint`
* `grunt jasmine`
* `grunt format`
* `grunt jsbeautifier`
* `grunt sass-convert`

## Server-side MVC

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

Here's an example of how to use the default REST controller, for creating an API:

```javascript
var ControllerREST = require('../lib/Controller/ControllerREST');

function ControllerAPI() {
  ControllerREST.apply(this, arguments);
}

require('util').inherits(ControllerAPI, ControllerREST);

// GET request (list)
ControllerAPI.prototype.actionIndex = function() {
  var response = JSON.stringify({
    hello: 'world'
  });
  this.sendResponse(200, 'application/json', response);
};

// POST request (create)
ControllerAPI.prototype.actionPost = function() {
  var response = JSON.stringify({
    hello: 'world'
  });
  this.sendResponse(200, 'application/json', response);
};

// PUT request (update)
ControllerAPI.prototype.actionUpdate = function() {
  var response = JSON.stringify({
    hello: 'world'
  });
  this.sendResponse(200, 'application/json', response);
};

// DELETE request (delete)
ControllerAPI.prototype.actionDelete = function() {
  var response = JSON.stringify({
    hello: 'world'
  });
  this.sendResponse(200, 'application/json', response);
};

module.exports = ControllerAPI;
```

### ViewModel usage

Every view should have an associated ViewModel. You should render markup from ViewModels instead of from
the views directly.

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

## Client-side MVC

TODO

## Sublime Text config:

This is the recommended ST2 user settings:

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
