'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert( 'hero_publisher', [
      {publisher_id: 1, hero_name: "Superman"},
      {publisher_id: 2, hero_name: "Batman"},
      {publisher_id: 3, hero_name: "Wonder Woman"},
      {publisher_id: 4, hero_name: "Cyborg"},
      {publisher_id: 5, hero_name: "Flash"},
      {publisher_id: 6, hero_name: "Martian Manhunter"},
      {publisher_id: 7, hero_name: "Green Lantern"},
      {publisher_id: 8, hero_name: "Robin"},
      {publisher_id: 9, hero_name: "Beast Boy"},
      {publisher_id: 10, hero_name: "Starfire"},
      {publisher_id: 11, hero_name: "Raven"},
      {publisher_id: 12, hero_name: "Iron Man"},
      {publisher_id: 13, hero_name: "Captain America"},
      {publisher_id: 14, hero_name: "Thor"},
      {publisher_id: 15, hero_name: "Hulk"},
      {publisher_id: 16, hero_name: "Black Widow"},
      {publisher_id: 17, hero_name: "Hawkeye"},
      {publisher_id: 18, hero_name: "Professor X"},
      {publisher_id: 19, hero_name: "Cyclops"},
      {publisher_id: 20, hero_name: "Storm"},
      {publisher_id: 21, hero_name: "Wolverine"},
      {publisher_id: 22, hero_name: "Jean Grey"},
      ], {} );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('hero_publisher');
  }
};