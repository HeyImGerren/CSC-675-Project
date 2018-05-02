'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert( 'publisher', [
      {publisher_name:"DC Comics", release_date: 1983, creator:"Jerry Siegel", year_established: 1934},

      ], {} );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('publisher');
  }
};