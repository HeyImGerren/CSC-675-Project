'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('hero', {
      hero_name: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.TEXT
      },
      alias: {
        type: Sequelize.TEXT
      },
      birthplace: {
        type: Sequelize.TEXT
      },
      gender: {
        type: Sequelize.TEXT
      },
      eye_color: {
        type: Sequelize.TEXT
      },
      height: {
        type: Sequelize.INTEGER
      },
      hair_color: {
        type: Sequelize.TEXT
      },
      weight: {
        type: Sequelize.INTEGER
      },
      publisher: {
        type: Sequelize.TEXT
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('hero');
  }
};