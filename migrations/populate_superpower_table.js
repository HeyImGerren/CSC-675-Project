'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert( 'superpower', [
      {superpower_name:"Flight"},
      {superpower_name:"Master Martial Artist"},
      {superpower_name:"Superhuman strength"},
      {superpower_name:"Cybernetic Enhancement"},
      {superpower_name:"Speed Force Conduit"},
      {superpower_name:"Shapeshifter"},
      {superpower_name:"Green Lantern Ring"},
      {superpower_name:"Master Acrobat"},
      {superpower_name:"Transformation"},
      {superpower_name:"Starbolts"},
      {superpower_name:"Astral Projection"},
      {superpower_name:"Industrial Genius"},
      {superpower_name:"Enhanced Physiology"},
      {superpower_name:"Electrokinesis"},
      {superpower_name:"Super strength"},
      {superpower_name:"Master tactician"},
      {superpower_name:"Master Archer"},
      {superpower_name:"Telopathy"},
      {superpower_name:"Optic Blast"},
      {superpower_name:"Weather Manipulation"},
      {superpower_name:"Healing Factor"},
      {superpower_name:"Telepathy"},

      ], {} );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('superpower');
  }
};