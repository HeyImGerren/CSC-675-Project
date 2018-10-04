'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('hero_power', {
      superpower_name: {
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
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('hero_power');
  }
};