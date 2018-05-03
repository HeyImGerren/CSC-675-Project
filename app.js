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

/*
const heroTable = require('./database/hero');

let heroObject = {
  h_name: "Iron Man",
  publisher: "Marvel Comics",
  alias: "Anthony Edward Stark",
  occupation: "Inventor",
  birthplace: "Long Island, New York",
  gender: "Male",
  weight: "191 kg",
  height: "198 cm",
  eye_color: "Blue",
  hair_color: "Black" 
};

heroTable
  .addHero( heroObject )
  .then( result => {
    console.log( result.h_name );
  })
  .catch( error => console.log( "ERROR ADDING IN HERO:", error ));
*/
let heroObject = [ 
  {
    "hero_name": "Superman",
    "alias": "Clark Kent",
    "birthplace": "Krypton",
    "gender": "Male",
    "eye_color": "Blue",
    "height": 191,
    "hair_color": "Black",
    "weight": 101,
    "publisher": "DC Comics"
  },
  {
    "hero_name": "Batman",
    "alias": "Bruce Wayne",
    "birthplace": "Gotham",
    "gender": "Male",
    "eye_color": "Blue",
    "height": 188,
    "hair_color": "Black",
    "weight": 95,
    "publisher": "DC Comics"
  },
  {
    "hero_name": "Wonder Woman",
    "alias": "Diane Prince",
    "birthplace": "Themyscira",
    "gender": "Female",
    "eye_color": "Blue",
    "height": 183,
    "hair_color": "Black",
    "weight": 74,
    "publisher": "DC Comics"
  },
  {
    "hero_name": "Cyborg",
    "alias": "Victor Stone",
    "birthplace": "New York City, New York",
    "gender": "Male",
    "eye_color": "Brown",
    "height": 198,
    "hair_color": "Black",
    "weight": 173,
    "publisher": "DC Comics"
  },
  {
    "hero_name": "Flash",
    "alias": "Barry Allen",
    "birthplace": "Fallville, Iowa",
    "gender": "Male",
    "eye_color": "Blue",
    "height": 183,
    "hair_color": "Blond",
    "weight": 88,
    "publisher": "DC Comics"
  },
  {
    "hero_name": "Martian Manhunter",
    "alias": "J'onn J'onzz",
    "birthplace": "Mars",
    "gender": "Male",
    "eye_color": "Red",
    "height": 201,
    "hair_color": "Null",
    "weight": 135,
    "publisher": "DC Comics"
  },
  {
    "hero_name": "Green Lantern",
    "alias": "Hal Jordan",
    "birthplace": "Coast City, California",
    "gender": "Male",
    "eye_color": "Brown",
    "height": 188,
    "hair_color": "Brown",
    "weight": 90,
    "publisher": "DC Comics"
  },
  {
    "hero_name": "Robin",
    "alias": "Richard John Grayson",
    "birthplace": "Null",
    "gender": "Male",
    "eye_color": "Blue",
    "height": 178,
    "hair_color": "Black",
    "weight": 79,
    "publisher": "DC Comics"
  },
  {
    "hero_name": "Beast Boy",
    "alias": "Craig Logan",
    "birthplace": "Null",
    "gender": "Male",
    "eye_color": "Green",
    "height": 173,
    "hair_color": "Green",
    "weight": 68,
    "publisher": "DC Comics"
  },
  {
    "hero_name": "Starfire",
    "alias": "Koriand'r",
    "birthplace": "Tamaran",
    "gender": "Female",
    "eye_color": "Green",
    "height": 193,
    "hair_color": "Auburn",
    "weight": 71,
    "publisher": "DC Comics"
  },
  {
    "hero_name": "Raven",
    "alias": "Rachel Roth",
    "birthplace": "Azarath",
    "gender": "Female",
    "eye_color": "Indigo",
    "height": 165,
    "hair_color": "Black",
    "weight": 50,
    "publisher": "DC Comics"
  },
  {
    "hero_name": "Iron Man",
    "alias": "Tony Stark",
    "birthplace": "Long Island, New York",
    "gender": "Male",
    "eye_color": "Blue",
    "height": 198,
    "hair_color": "Black",
    "weight": 191,
    "publisher": "Marvel Comics"
  },
  {
    "hero_name": "Captain America",
    "alias": "Steve Rogers",
    "birthplace": "Brooklyn, New York",
    "gender": "Male",
    "eye_color": "Blue",
    "height": 188,
    "hair_color": "Blond",
    "weight": 108,
    "publisher": "Marvel Comics"
  },
  {
    "hero_name": "Thor",
    "alias": "Thor",
    "birthplace": "Asgard",
    "gender": "Male",
    "eye_color": "Blue",
    "height": 198,
    "hair_color": "Blond",
    "weight": 288,
    "publisher": "Marvel Comics"
  },
  {
    "hero_name": "Hulk",
    "alias": "Bruce Banner",
    "birthplace": "Dayton, Ohio",
    "gender": "Male",
    "eye_color": "Green",
    "height": 244,
    "hair_color": "Green",
    "weight": 630,
    "publisher": "Marvel Comics"
  },
  {
    "hero_name": "Black Widow",
    "alias": "Natasha Romanova",
    "birthplace": "Stalingrad, USSR",
    "gender": "Female",
    "eye_color": "Green",
    "height": 170,
    "hair_color": "Auburn",
    "weight": 59,
    "publisher": "Marvel Comics"
  },
  {
    "hero_name": "Hawkeye",
    "alias": "Clint Barton",
    "birthplace": "Waverly, Iowa",
    "gender": "Male",
    "eye_color": "Blue",
    "height": 191,
    "hair_color": "Blond",
    "weight": 104,
    "publisher": "Marvel Comics"
  },
  {
    "hero_name": "Professor X",
    "alias": "Charles Xavier",
    "birthplace": "Westchester County, New York",
    "gender": "Male",
    "eye_color": "Blue",
    "height": 183,
    "hair_color": "Bald",
    "weight": 86,
    "publisher": "Marvel Comics"
  },
  {
    "hero_name": "Cyclops",
    "alias": "Scott Summers",
    "birthplace": "Anchorage, Alaska",
    "gender": "Male",
    "eye_color": "Brown",
    "height": 191,
    "hair_color": "Brown",
    "weight": 88,
    "publisher": "Marvel Comics"
  },
  {
    "hero_name": "Storm",
    "alias": "Ororo Munroe",
    "birthplace": "New York City, New York",
    "gender": "Female",
    "eye_color": "Blue",
    "height": 180,
    "hair_color": "White",
    "weight": 57,
    "publisher": "Marvel Comics"
  },
  {
    "hero_name": "Wolverine",
    "alias": "Logan",
    "birthplace": "Alberta, Canada",
    "gender": "Male",
    "eye_color": "Blue",
    "height": 160,
    "hair_color": "Black",
    "weight": 135,
    "publisher": "Marvel Comics"
  },
  {
    "hero_name": "Jean Grey",
    "alias": "Jean Grey",
    "birthplace": "New York City, New York",
    "gender": "Female",
    "eye_color": "Green",
    "height": 168,
    "hair_color": "Red",
    "weight": 52,
    "publisher": "Marvel Comics"
  }
}

]

for(item in heroObject){
  console.log(heroObject[item]);
}

module.exports = app;