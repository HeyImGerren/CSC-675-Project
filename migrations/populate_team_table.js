'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert( 'team', [
      {team_name:"Justice League", number_of_members: 7},

      ], {} );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('team');
  }
};