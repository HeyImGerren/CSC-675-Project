'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('publisher', {
      publisher_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      publisher_name: {
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