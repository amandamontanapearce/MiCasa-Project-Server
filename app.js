var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var helpers = require('./db/auth');
var cors = require('cors')
var routes = require('./routes/index');
var users = require('./routes/users');
var methodOverride = require('method-override');
var api = require('./db/api');


var app = express();


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(logger('dev'));
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(helpers.authMiddleWare);

app.use('/', routes);
app.use('/users', users);
app.use(helpers.ensureauthenticated);
// app.use('/login', login);


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
    res.status(500).json({
        message: err.message,
        error: err
      });
    });
  }

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(500).json({
      message: err.message,
      error: err
    });
  });


module.exports = app;
