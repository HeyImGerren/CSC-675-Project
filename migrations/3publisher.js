'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('publisher', {
      publisher_name: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.TEXT
      },
      release_date: {
        type: Sequelize.INTEGER
      },
      creator: {
        type: Sequelize.TEXT
      },
      year_established: {
        type: Sequelize.INTEGER
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('publisher');
  }
};