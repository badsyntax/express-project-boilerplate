# express-project-boilerplate

A starter application that uses the following technologies:

* nodejs
* express
* grunt
* requirejs
* bower
* jasmine
* sass
* jquery
* uglifyjs
* handlebars
* knockout
* director
* bootstrap

## Installation:

1. Ensure you have all the following software installed on your system:
    * nodejs
    * npm
    * bower
    * nodemon
    * sass
    * compass
2. Clone the project from github: `git clone git://github.com/badsyntax/express-project-boilerplate.git`
3. Run `install.sh` or `install.bat`

## Developing

* Run the `grunt watch` task while developing, this will compile your sass when you make changes.
* Run `nodemon app` to start up the applicaiton.
* The application will run in 'developement' mode when running from localhost, and 'production' mode when not running on localhost.

## Grunt tasks

Run `grunt` to run the default grunt tasks.

All grunt tasks:

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

Controllers will handle the request and user input, as well as creating the required ViewModels. By default, 
controllers will create a 'layout' viewmodel, and all other ViewModels are added to this layout ViewModel.

Here's an example of a custom 'home' controller:

```javascript
var Controller = require('../lib/controller');
var ViewModel = require('../lib/viewmodel');

function HomeController() {
  Controller.apply(this, arguments);
  this.layout.setGlobalData({
    title: 'Home'
  }); 
}

require('util').inherits(HomeController, Controller);

HomeController.prototype.actionIndex = function() {
  this.layout.setData({
    body: ViewModel.factory('pages/home').render()
  });
};
````

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
