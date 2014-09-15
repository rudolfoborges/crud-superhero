var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var assetmanager = require('assetmanager');
var mongoose = require('mongoose');
var fs = require('fs');

var routes = require('./server/routes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/client', express.static(path.join(__dirname, 'client')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/api', routes);

app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

if(app.get('env') === 'development'){
    //mongoose.connect('mongodb://localhost/superheros');
}

mongoose.connect('mongodb://rudolfoborges:1234@ds035270.mongolab.com:35270/superheros');

if(app.get('env') === 'production'){
    //mongoose.connect('mongodb://rudolfoborges:1234@ds035270.mongolab.com:35270/superheros');
}

//load all files in models dir
fs.readdirSync(__dirname + '/server/models').forEach(function(filename) {
    console.log(__dirname + '/server/models/' + filename);
  if (~filename.indexOf('.js')) require(__dirname + '/server/models/' + filename);
});

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

var debug = require('debug')('myApp');

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});

module.exports = app;
