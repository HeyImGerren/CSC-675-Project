if(process.env.NODE_ENV === 'development') {
  require("dotenv").config();
};

let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

let index = require('./routes/index');
let users = require('./routes/users');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
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

// let heroObject = {
//   h_name: "Iron Man",
//   publisher: "Marvel Comics",
//   alias: "Anthony Edward Stark",
//   occupation: "Inventor",
//   birthplace: "Long Island, New York",
//   gender: "Male",
//   weight: "191 kg",
//   height: "198 cm",
//   eye_color: "Blue",
//   hair_color: "Black" 
// };

// heroTable
//   .addHero( heroObject )
//   .then( result => {
//     console.log( result.h_name );
//   })
//   .catch( error => console.log( "ERROR ADDING IN HERO:", error ));

let objectToBeParsed = [
  {
    "hero_id": 1,
    "hero_name": "Superman"
  },
  {
    "hero_id": 2,
    "hero_name": "Batman"
  },
  {
    "hero_id": 3,
    "hero_name": "Wonder Woman"
  },
  {
    "hero_id": 4,
    "hero_name": "Cyborg"
  },
  {
   "hero_id": 5,
    "hero_name": "Flash"
  },
  {
    "hero_id": 6,
    "hero_name": "Martian Manhunter"
  },
   {
    "hero_id": 7,
    "hero_name": "Green Lantern"
  },
   {
    "hero_id": 8,
    "hero_name": "Robin"
  },
   {
    "hero_id": 9,
    "hero_name": "Beast Boy"
  },
   {
    "hero_id": 10,
    "hero_name": "Starfire"
  },
   {
    "hero_id": 11,
    "hero_name": "Raven"
  },
   {
    "hero_id": 12,
    "hero_name": "Iron Man"
  },
   {
    "hero_id": 13,
    "hero_name": "Captain America"
  },
   {
    "hero_id": 14,
    "hero_name": "Thor"
  },
   {
    "hero_id": 15,
    "hero_name": "Hulk"
  },
   {
    "hero_id": 16,
    "hero_name": "Black Widow"
  },
   {
    "hero_id": 17,
    "hero_name": "Hawkeye"
  },
   {
    "hero_id": 18,
    "hero_name": "Professor X"
  },
   {
    "hero_id": 19,
    "hero_name": "Cyclops"
  },
   {
    "hero_id": 20,
    "hero_name": "Storm"
  },
   {
    "hero_id": 21,
    "hero_name": "Wolverine"
  },
   {
    "hero_id": 22,
    "hero_name": "Jean Grey"
  }
]


// console.log(objectToBeParsed[0].team_name);

// {hero_name:"Superman", alias: "Clark Kent", birthplace: "Krypton", gender: "Male", eye_color: "Blue", height: 191, hair_color: "Black", weight: 101, publisher: "DC Comics"},

let currentLine = '';

for (item in objectToBeParsed){

  // super power
  currentLine = ` {publisher_id: ${objectToBeParsed[item].hero_id}, hero_name: "${objectToBeParsed[item].hero_name}"},`;


  console.log(currentLine);
}


module.exports = app;