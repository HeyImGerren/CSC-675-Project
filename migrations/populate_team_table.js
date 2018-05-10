'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert( 'team', [
      {team_name:"Justice League", number_of_members: 7},
      {team_name:"Teen Titans", number_of_members: 5},
      {team_name:"Avengers", number_of_members: 6},
      {team_name:"X-men", number_of_members: 5},

      ], {} );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('team');
  }
};