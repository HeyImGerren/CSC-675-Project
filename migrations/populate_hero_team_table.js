'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert( 'hero_team', [
      {team_name:"Justice League", hero_name: "Superman"},
      {team_name:"Justice League", hero_name: "Batman"},
      {team_name:"Justice League", hero_name: "Wonder Woman"},
      {team_name:"Teen Titans", hero_name: "Cyborg"},
      {team_name:"Justice League", hero_name: "Flash"},
      {team_name:"Justice League", hero_name: "Martian Manhunter"},
      {team_name:"Justice League", hero_name: "Green Lantern"},
      {team_name:"Teen Titans", hero_name: "Robin"},
      {team_name:"Teen Titans", hero_name: "Beast Boy"},
      {team_name:"Teen Titans", hero_name: "Starfire"},
      {team_name:"Teen Titans", hero_name: "Raven"},
      {team_name:"Avengers", hero_name: "Iron Man"},
      {team_name:"Avengers", hero_name: "Captain America"},
      {team_name:"Avengers", hero_name: "Thor"},
      {team_name:"Avengers", hero_name: "Hulk"},
      {team_name:"Avengers", hero_name: "Black Widow"},
      {team_name:"Avengers", hero_name: "Hawkeye"},
      {team_name:"X-men", hero_name: "Professor X"},
      {team_name:"X-men", hero_name: "Cyclops"},
      {team_name:"X-men", hero_name: "Storm"},
      {team_name:"X-men", hero_name: "Wolverine"},
      {team_name:"X-men", hero_name: "Jean Grey"},

      ], {} );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('hero_team');
  }
};