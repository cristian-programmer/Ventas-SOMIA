var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var passport = require('passport');
var flash = require('connect-flash')

var dbc = require('./db/dbcreate');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var providerRouter  = require('./routes/provider');
var productRouter = require('./routes/product');
var configRouter = require('./routes/config');
var generalApiRouter = require('./routes/generalApi');

var app = express();

// view engine setup
dbc.createTables();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(flash());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'keyboard cat',
}));


app.use(passport.initialize());
app.use(passport.session());
require('./passport/passport')(passport);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/provider', providerRouter);
app.use('/product', productRouter);
app.use('/config', configRouter);
app.use('/api', generalApiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
