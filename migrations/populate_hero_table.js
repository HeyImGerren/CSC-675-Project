'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert( 'hero', [
      {hero_name:"Superman", alias: "Clark Kent", birthplace: "Krypton", gender: "Male", eye_color: "Blue", height: 191, hair_color: "Black", weight: 101, publisher: "DC Comics", image:"/images/superman.jpg"},
      {hero_name:"Batman", alias: "Bruce Wayne", birthplace: "Gotham", gender: "Male", eye_color: "Blue", height: 188, hair_color: "Black", weight: 95, publisher: "DC Comics", image:"/images/batman.jpg"},
      {hero_name:"Wonder Woman", alias: "Diane Prince", birthplace: "Themyscira", gender: "Female", eye_color: "Blue", height: 183, hair_color: "Black", weight: 74, publisher:"DC Comics", image:"/images/wonderwoman.jpg"},
      {hero_name:"Cyborg", alias: "Victor Stone", birthplace: "New York City, New York", gender: "Male", eye_color: "Brown", height: 198, hair_color: "Black", weight: 173, publisher: "DC Comics", image:"/images/cyborg.jpg"},
      {hero_name:"Flash", alias: "Barry Allen", birthplace: "Fallville, Iowa", gender: "Male", eye_color: "Blue", height: 183, hair_color: "Blond", weight: 88, publisher: "DC Comics", image:"/images/flash.jpg"},
      {hero_name:"Martian Manhunter", alias: "J'onn J'onzz", birthplace: "Mars", gender: "Male", eye_color: "Red", height: 201, hair_color: "None", weight: 135, publisher: "DC Comics", image:"/images/martian.jpg"},
      {hero_name:"Green Lantern", alias: "Hal Jordan", birthplace: "Coast City, California", gender: "Male", eye_color: "Brown", height: 188, hair_color: "Brown", weight: 90, publisher: "DC Comics", image:"/images/greenlantern.jpg"},
      {hero_name:"Robin", alias: "Richard John Grayson", birthplace: "N/A", gender: "Male", eye_color: "Blue", height: 178, hair_color: "Black", weight: 79, publisher: "DC Comics", image:"/images/robin.jpg"},
      {hero_name:"Beast Boy", alias: "Craig Logan", birthplace: "N/A", gender: "Male", eye_color: "Green", height: 173, hair_color: "Green", weight: 68, publisher: "DC Comics", image:"/images/beastboy.jpg"},
      {hero_name:"Starfire", alias: "Koriand'r", birthplace: "Tamaran", gender: "Female", eye_color: "Green", height: 193, hair_color: "Auburn", weight: 71, publisher: "DC Comics", image:"/images/starfire.jpg"},
      {hero_name:"Raven", alias: "Rachel Roth", birthplace: "Azarath", gender: "Female", eye_color: "Indigo", height: 165, hair_color: "Black", weight: 50, publisher: "DC Comics", image:"/images/raven.jpg"},
      {hero_name:"Iron Man", alias: "Tony Stark", birthplace: "Long Island, New York", gender: "Male", eye_color: "Blue", height: 198, hair_color: "Black", weight: 191, publisher: "Marvel Comics", image:"/images/ironman.jpg"},
      {hero_name:"Captain America", alias: "Steve Rogers", birthplace: "Brooklyn, New York", gender: "Male", eye_color: "Blue", height: 188, hair_color: "Blond", weight: 108, publisher: "Marvel Comics", image:"/images/captainamerica.jpg"},
      {hero_name:"Thor", alias: "Thor", birthplace: "Asgard", gender: "Male", eye_color: "Blue", height: 198, hair_color: "Blond", weight: 288, publisher: "Marvel Comics", image:"/images/thor.jpg"},
      {hero_name:"Hulk", alias: "Bruce Banner", birthplace: "Dayton, Ohio", gender: "Male", eye_color: "Green", height: 244, hair_color: "Green", weight: 630, publisher: "Marvel Comics", image:"/images/hulk.jpg"},
      {hero_name:"Black Widow", alias: "Natasha Romanova", birthplace: "Stalingrad, USSR", gender: "Female", eye_color: "Green", height: 170, hair_color: "Auburn", weight: 59,publisher: "Marvel Comics", image:"/images/blackwidow.jpg"},
      {hero_name:"Hawkeye", alias: "Clint Barton", birthplace: "Waverly, Iowa", gender: "Male", eye_color: "Blue", height: 191, hair_color: "Blond", weight: 104, publisher: "Marvel Comics", image:"/images/hawkeye.jpg"},
      {hero_name:"Professor X", alias: "Charles Xavier", birthplace: "Westchester County, New York", gender: "Male", eye_color: "Blue", height: 183, hair_color: "Bald", weight: 86, publisher: "Marvel Comics", image:"/images/professorx.jpg"},
      {hero_name:"Cyclops", alias: "Scott Summers", birthplace: "Anchorage, Alaska", gender: "Male", eye_color: "Brown", height: 191, hair_color: "Brown", weight: 88, publisher: "Marvel Comics", image:"/images/cyclops.jpg"},
      {hero_name:"Storm", alias: "Ororo Munroe", birthplace: "New York City, New York", gender: "Female", eye_color: "Blue", height: 180, hair_color: "White", weight: 57, publisher: "Marvel Comics", image:"/images/storm.jpg"},
      {hero_name:"Wolverine", alias: "Logan", birthplace: "Alberta, Canada", gender: "Male", eye_color: "Blue", height: 160, hair_color: "Black", weight: 135, publisher: "Marvel Comics", image:"/images/wolverine.jpg"},
      {hero_name:"Jean Grey", alias: "Jean Grey", birthplace: "New York City, New York", gender: "Female", eye_color: "Green", height: 168, hair_color: "Red", weight: 52, publisher: "Marvel Comics", image: "/images/jeangrey.jpg"},

      ], {} );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('hero');
  }
};