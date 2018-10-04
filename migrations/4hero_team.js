'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('hero_team', {
      team_name: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.TEXT
      },
      hero_name: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.TEXT
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('hero_team');
  }
};