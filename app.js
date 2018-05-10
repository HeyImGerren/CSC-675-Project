if(process.env.NODE_ENV === 'development') {
  require("dotenv").config();
};

let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

//routes
let index = require('./routes/index');
let marvel = require('./routes/marvel');
let dc = require('./routes/dc');
let allHeroes = require('./routes/all_heroes');

let expressLayouts = require('express-ejs-layouts');
let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(expressLayouts);

app.use('/', index);
app.use('/marvel', marvel);
app.use('/dc', dc);
app.use('/allheroes', allHeroes);

// app.use('/users', users);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

// const heroTable = require('./database/hero');

// heroTable
//   .readHero()
//   .then((result) => {
//     console.log(result, result.length);
//   })
//   .catch( error => console.log("error:", error));

module.exports = app;