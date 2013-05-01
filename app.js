var express = require('express'),
  http = require('http'),
  path = require('path'),
  Router = require('./lib/Router');

var app = express();

// All environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view options', {
  layout: false
});
app.set('view engine', 'hbs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public', 'build')));
app.use(app.router);

// Development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Route requests to controllers
new Router(app);

http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port %s in %s mode', app.get('port'), app.get('env'));
});
