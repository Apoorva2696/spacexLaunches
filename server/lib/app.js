"use strict";

var createError = require('http-errors');

var express = require('express');

var path = require('path');

var cookieParser = require('cookie-parser');

var logger = require('morgan');

var path = require('path');

var BUILD_DIR = path.join(__dirname, '..', '..', 'client', 'build');
var PUBLIC_DIR = path.join(__dirname, '..', 'public');

var reactRenderer = require('./react-renderer');

var app = express(); // view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.urlencoded({
  extended: false
}));
app.get('/', reactRenderer);
app.use(express["static"](BUILD_DIR));
app.use(express["static"](PUBLIC_DIR)); // catch 404 and forward to error handler

app.use(function (req, res, next) {
  next(createError(404));
}); // error handler

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}; // render the error page

  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;