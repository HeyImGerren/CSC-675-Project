'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert( 'hero_power', [
      {superpower_name:"Flight", hero_name: "Superman"},
      {superpower_name:"Master Martial Artist", hero_name: "Batman"},
      {superpower_name:"Superhuman strength", hero_name: "Wonder Woman"},
      {superpower_name:"Cybernetic Enhancement", hero_name: "Cyborg"},
      {superpower_name:"Speed Force Conduit", hero_name: "Flash"},
      {superpower_name:"Shapeshifter", hero_name: "Martian Manhunter"},
      {superpower_name:"Green Lantern Ring", hero_name: "Green Lantern"},
      {superpower_name:"Master Acrobat", hero_name: "Robin"},
      {superpower_name:"Transformation", hero_name: "Beast Boy"},
      {superpower_name:"Starbolts", hero_name: "Starfire"},
      {superpower_name:"Astral Projection", hero_name: "Raven"},
      {superpower_name:"Industrial Genius", hero_name: "Iron Man"},
      {superpower_name:"Enhanced Physiology", hero_name: "Captain America"},
      {superpower_name:"Electrokinesis", hero_name: "Thor"},
      {superpower_name:"Superhuman strength", hero_name: "Hulk"},
      {superpower_name:"Master Martial Artist", hero_name: "Black Widow"},
      {superpower_name:"Master Archer", hero_name: "Hawkeye"},
      {superpower_name:"Telopathy", hero_name: "Professor X"},
      {superpower_name:"Optic Blast", hero_name: "Cyclops"},
      {superpower_name:"Weather Manipulation", hero_name: "Storm"},
      {superpower_name:"Healing Factor", hero_name: "Wolverine"},
      {superpower_name:"Telepathy", hero_name: "Jean Grey"},

      ], {} );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('hero_power');
  }
};