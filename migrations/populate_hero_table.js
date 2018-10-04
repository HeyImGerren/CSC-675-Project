'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert( 'hero', [
      {hero_name:"Superman", alias: "Clark Kent", birthplace: "Krypton", gender: "Male", eye_color: "Blue", height: 191, hair_color: "Black", weight: 101, publisher: "DC Comics"},

      ], {} );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('hero');
  }
};